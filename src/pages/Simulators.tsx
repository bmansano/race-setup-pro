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
  const [selectedSimulator, setSelectedSimulator] = useState("All Simulators");
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
      if (selectedSimulator !== "All Simulators") {
        query = query.eq("simulator", selectedSimulator);
      }

      const { data, error } = await query.order("created_at", { ascending: false });

      if (error) throw error;

      setSetups(data || []);
    } catch (error) {
      console.error("Error loading setups:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSetup = async () => {
    if (!setupToDelete) return;

    // Validate confirmation before proceeding
    const setupName = setups.find(s => s.id === setupToDelete)?.name.trim().toLowerCase() || "";
    if (deleteConfirmation.trim().toLowerCase() !== setupName) {
      toast.error("The typed name does not match the setup name");
      return;
    }

    try {
      const { error } = await supabase
        .from("setups")
        .delete()
        .eq("id", setupToDelete);

      if (error) throw error;

      toast.success("Setup deleted successfully!");
      setDeleteDialogOpen(false);
      setSetups(setups.filter(s => s.id !== setupToDelete));
    } catch (error) {
      console.error("Error deleting setup:", error);
      toast.error("Error deleting setup");
    } finally {
      setSetupToDelete(null);
      setDeleteConfirmation("");
    }
  };

  return (
    <div className="container py-4 sm:py-8 px-4 space-y-6 sm:space-y-8">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Available Setups</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Select the simulator and choose an optimized setup
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Select value={selectedSimulator} onValueChange={setSelectedSimulator}>
            <SelectTrigger className="w-full sm:w-[280px]">
              <SelectValue placeholder="Select simulator" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Simulators">
                All Simulators
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
          Loading setups...
        </div>
      ) : setups.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          {selectedSimulator === "All Simulators" 
            ? "No setups found. Create your first setup!" 
            : `No setups found for ${selectedSimulator}. Create your first setup!`}
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
                      Wet
                    </>
                  ) : (
                    <>
                      <Sun className="h-3 w-3 mr-1" />
                      Dry
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
            <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
            <AlertDialogDescription className="space-y-4">
              <p>This action cannot be undone. To confirm, type the setup name:</p>
              <p className="font-semibold text-foreground">
                {setups.find(s => s.id === setupToDelete)?.name}
              </p>
              <Input
                value={deleteConfirmation}
                onChange={(e) => setDeleteConfirmation(e.target.value)}
                placeholder="Type the setup name"
                className="mt-2"
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDeleteConfirmation("")}>Cancel</AlertDialogCancel>
            <Button 
              onClick={handleDeleteSetup} 
              disabled={deleteConfirmation.trim().toLowerCase() !== (setups.find(s => s.id === setupToDelete)?.name.trim().toLowerCase() || "")}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
