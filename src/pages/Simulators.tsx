import { useState } from "react";
import { Cloud, Sun, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { AddSetupDialog } from "@/components/AddSetupDialog";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";

const simulators = [
  "iRacing",
  "Automobilista 2",
  "Project Motor Racing",
  "Assetto Corsa EVO",
  "Assetto Corsa",
  "Assetto Corsa Rally",
  "Assetto Corsa Competizione",
  "RaceRoom",
];

const mockSetups = [
  {
    id: 1,
    car: "Ferrari 488 GT3",
    track: "Spa-Francorchamps",
    condition: "dry",
    likes: 24,
    dislikes: 3,
    image: car1,
  },
  {
    id: 2,
    car: "Porsche 911 GT3 R",
    track: "Nürburgring GP",
    condition: "wet",
    likes: 18,
    dislikes: 5,
    image: car2,
  },
  {
    id: 3,
    car: "Mercedes-AMG F1 W12",
    track: "Monza",
    condition: "dry",
    likes: 42,
    dislikes: 2,
    image: car3,
  },
];

export default function Simulators() {
  const [selectedSimulator, setSelectedSimulator] = useState("iRacing");
  const navigate = useNavigate();

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockSetups.map((setup) => (
          <Card
            key={setup.id}
            className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-racing hover:scale-[1.02]"
            onClick={() => navigate(`/setup/${setup.id}`)}
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={setup.image}
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
              <div>
                <h3 className="font-semibold text-lg mb-1">{setup.car}</h3>
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
        ))}
      </div>
    </div>
  );
}
