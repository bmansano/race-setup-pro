import { useState, useEffect } from "react";
import { Cloud, Sun, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { AddSetupDialog } from "@/components/AddSetupDialog";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import nascarDry from "@/assets/nascar-camry-dry.jpg";
import nascarWet from "@/assets/nascar-camry-wet.jpg";

const simulators = [
  "iRacing",
  "Automobilista 2",
  "Assetto Corsa EVO",
  "Assetto Corsa",
  "Assetto Corsa Competizione",
  "RaceRoom Racing Experience",
];

interface Setup {
  id: string;
  name: string;
  car: string;
  category: string;
  track: string;
  condition: string;
  simulator: string;
}

export default function Simulators() {
  const [selectedSimulator, setSelectedSimulator] = useState("iRacing");
  const [setups, setSetups] = useState<Setup[]>([]);
  const [loading, setLoading] = useState(true);
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

      const { data, error } = await supabase
        .from("setups")
        .select("*")
        .eq("user_id", user.id)
        .eq("simulator", selectedSimulator)
        .order("created_at", { ascending: false });

      if (error) throw error;

      setSetups(data || []);
    } catch (error) {
      console.error("Erro ao carregar setups:", error);
    } finally {
      setLoading(false);
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
          Nenhum setup encontrado para {selectedSimulator}. Crie seu primeiro setup!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {setups.map((setup) => {
            // Selecionar imagem baseada na condição e carro
            const setupImage = setup.car.includes("Camry") 
              ? (setup.condition === "Pista Molhada" ? nascarWet : nascarDry)
              : (setup.condition === "Pista Molhada" ? car2 : car1);
            
            return (
            <Card
              key={setup.id}
              className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-racing hover:scale-[1.02]"
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
                  variant={setup.condition === "dry" ? "default" : "secondary"}
                  className="absolute top-3 right-3"
                >
                  {setup.condition === "dry" ? (
                    <>
                      <Sun className="h-3 w-3 mr-1" />
                      Pista Seca
                    </>
                  ) : (
                    <>
                      <Cloud className="h-3 w-3 mr-1" />
                      Pista Molhada
                    </>
                  )}
                </Badge>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{setup.category}</Badge>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{setup.name}</h3>
                  <p className="text-sm text-muted-foreground">{setup.car}</p>
                  <p className="text-sm text-muted-foreground">{setup.track}</p>
                </div>

                <div className="flex items-center justify-end pt-2 border-t">
                  <Button variant="ghost" size="sm" className="gap-1">
                    Ver Setup
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
        </div>
      )}
    </div>
  );
}
