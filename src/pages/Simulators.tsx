import { useState, useEffect } from "react";
import { Cloud, Sun, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { AddSetupDialog } from "@/components/AddSetupDialog";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import nascarDry from "@/assets/nascar-camry-dry.jpg";
import nascarWet from "@/assets/nascar-camry-wet.jpg";

const simulators = [
  "Assetto Corsa Competizione",
  "Assetto Corsa EVO",
  "Assetto Corsa Rally",
  "Automobilista 2",
  "iRacing",
  "Le Mans Ultimate",
  "Project Motor Racing",
  "RaceRoom",
];

interface Setup {
  id: string;
  name: string;
  car: string;
  category: string;
  track: string;
  condition: string;
  simulator: string;
  car_image_url: string | null;
}

export default function Simulators() {
  const [selectedSimulator, setSelectedSimulator] = useState("Todos os simuladores");
  const [setups, setSetups] = useState<Setup[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [setupToDelete, setSetupToDelete] = useState<string | null>(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadSetups();
  }, [selectedSimulator]);

  const loadSetups = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setSetups([]);
        return;
      }

      let query = supabase
        .from("setups")
        .select("*")
        .eq("user_id", user.id);

      // Only filter by simulator if a specific one is selected
      if (selectedSimulator !== "Todos os simuladores") {
        query = query.eq("simulator", selectedSimulator);
      }

      const { data, error } = await query.order("created_at", { ascending: false });

      if (error) throw error;

      setSetups(data || []);
    } catch (error) {
      console.error("Erro ao carregar setups:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSetup = async () => {
    if (!setupToDelete) return;

    // Validate confirmation before proceeding
    const setupName = setups.find(s => s.id === setupToDelete)?.name.trim().toLowerCase() || "";
    if (deleteConfirmation.trim().toLowerCase() !== setupName) {
      toast.error("O nome digitado não corresponde ao nome do setup");
      return;
    }

    try {
      const { error } = await supabase
        .from("setups")
        .delete()
        .eq("id", setupToDelete);

      if (error) throw error;

      toast.success("Setup excluído com sucesso!");
      setDeleteDialogOpen(false);
      setSetups(setups.filter(s => s.id !== setupToDelete));
    } catch (error) {
      console.error("Erro ao excluir setup:", error);
      toast.error("Erro ao excluir setup");
    } finally {
      setSetupToDelete(null);
      setDeleteConfirmation("");
    }
  };

  return (
    <div className="container py-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Setups Disponíveis</h1>
          <p className="text-muted-foreground">
            Selecione o simulador e escolha um setup otimizado
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Select value={selectedSimulator} onValueChange={setSelectedSimulator}>
            <SelectTrigger className="w-full sm:w-[280px]">
              <SelectValue placeholder="Selecione o simulador" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Todos os simuladores">
                Todos os simuladores
              </SelectItem>
              {simulators.map((sim) => (
                <SelectItem key={sim} value={sim}>
                  {sim}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <AddSetupDialog />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12 text-muted-foreground">
          Carregando setups...
        </div>
      ) : setups.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          {selectedSimulator === "Todos os simuladores" 
            ? "Nenhum setup encontrado. Crie seu primeiro setup!" 
            : `Nenhum setup encontrado para ${selectedSimulator}. Crie seu primeiro setup!`}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {setups.map((setup) => {
            // Use AI-generated image if available, otherwise use default images
            const setupImage = setup.car_image_url 
              ? setup.car_image_url
              : setup.car.includes("Camry") 
                ? (setup.condition === "wet" ? nascarWet : nascarDry)
                : (setup.condition === "wet" ? car2 : car1);
            
            return (
            <Card
              key={setup.id}
              className="group overflow-hidden transition-all duration-300 hover:shadow-racing hover:scale-[1.02] cursor-pointer"
              onClick={() => navigate(`/setup/${setup.id}`)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={setupImage}
                  alt={setup.car}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge
                  variant={setup.condition === "wet" ? "secondary" : "default"}
                  className="absolute top-3 right-3"
                >
                  {setup.condition === "wet" ? (
                    <>
                      <Cloud className="h-3 w-3 mr-1" />
                      Molhada
                    </>
                  ) : (
                    <>
                      <Sun className="h-3 w-3 mr-1" />
                      Seca
                    </>
                  )}
                </Badge>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex flex-col gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs w-fit">
                    {setup.simulator}
                  </Badge>
                  <Badge variant="outline" className="w-fit">{setup.category}</Badge>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{setup.name}</h3>
                  <p className="text-sm font-medium text-foreground">{setup.car}</p>
                  <p className="text-sm text-muted-foreground">{setup.track}</p>
                </div>

                <div className="flex items-center justify-end pt-2 border-t">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSetupToDelete(setup.id);
                      setDeleteDialogOpen(true);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
        </div>
      )}

      <AlertDialog open={deleteDialogOpen} onOpenChange={(open) => {
        setDeleteDialogOpen(open);
        if (!open) setDeleteConfirmation("");
      }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription className="space-y-4">
              <p>Esta ação não pode ser desfeita. Para confirmar, digite o nome do setup:</p>
              <p className="font-semibold text-foreground">
                {setups.find(s => s.id === setupToDelete)?.name}
              </p>
              <Input
                value={deleteConfirmation}
                onChange={(e) => setDeleteConfirmation(e.target.value)}
                placeholder="Digite o nome do setup"
                className="mt-2"
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDeleteConfirmation("")}>Cancelar</AlertDialogCancel>
            <Button 
              onClick={handleDeleteSetup} 
              disabled={deleteConfirmation.trim().toLowerCase() !== (setups.find(s => s.id === setupToDelete)?.name.trim().toLowerCase() || "")}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Excluir
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
