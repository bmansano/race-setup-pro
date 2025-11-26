import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { simulatorData } from "@/data/racing-data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

export function AddSetupDialog() {
  const [formData, setFormData] = useState({
    simulator: "",
    car: "",
    track: "",
    condition: "",
  });

  const selectedSimulator = formData.simulator;
  const availableCars = selectedSimulator ? simulatorData[selectedSimulator]?.cars || [] : [];
  const availableTracks = selectedSimulator ? simulatorData[selectedSimulator]?.tracks || [] : [];

  const handleSubmit = () => {
    toast.success("Setup criado com sucesso!");
    console.log("Setup criado:", formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2 shadow-racing">
          <Plus className="h-4 w-4" />
          Adicionar Novo Setup
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Setup</DialogTitle>
          <DialogDescription>
            Configure todos os parâmetros do setup do seu carro.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[65vh] pr-4">
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="simulator">Simulador</Label>
              <Select
                value={formData.simulator}
                onValueChange={(value) =>
                  setFormData({ ...formData, simulator: value, car: "", track: "" })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o simulador" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="iRacing">iRacing</SelectItem>
                  <SelectItem value="Automobilista 2">Automobilista 2</SelectItem>
                  <SelectItem value="Project Cars 2">Project Cars 2</SelectItem>
                  <SelectItem value="Assetto Corsa EVO">Assetto Corsa EVO</SelectItem>
                  <SelectItem value="Assetto Corsa">Assetto Corsa</SelectItem>
                  <SelectItem value="Assetto Corsa Rally">Assetto Corsa Rally</SelectItem>
                  <SelectItem value="Assetto Corsa Competizione">Assetto Corsa Competizione</SelectItem>
                  <SelectItem value="RaceRoom">RaceRoom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="car">Carro</Label>
              <Select
                value={formData.car}
                onValueChange={(value) => setFormData({ ...formData, car: value })}
                disabled={!selectedSimulator}
              >
                <SelectTrigger>
                  <SelectValue placeholder={selectedSimulator ? "Selecione o carro" : "Selecione um simulador primeiro"} />
                </SelectTrigger>
                <SelectContent>
                  {availableCars.map((car) => (
                    <SelectItem key={car.id} value={car.name}>
                      {car.name} ({car.category})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="track">Pista</Label>
              <Select
                value={formData.track}
                onValueChange={(value) => setFormData({ ...formData, track: value })}
                disabled={!selectedSimulator}
              >
                <SelectTrigger>
                  <SelectValue placeholder={selectedSimulator ? "Selecione a pista" : "Selecione um simulador primeiro"} />
                </SelectTrigger>
                <SelectContent>
                  {availableTracks.map((track) => (
                    <SelectItem key={track.id} value={track.name}>
                      {track.name} ({track.country})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="condition">Condição da Pista</Label>
              <Select
                value={formData.condition}
                onValueChange={(value) => setFormData({ ...formData, condition: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a condição" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dry">Pista Seca</SelectItem>
                  <SelectItem value="wet">Pista Molhada</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Tabs defaultValue="aero" className="w-full">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="aero">Aero</TabsTrigger>
                <TabsTrigger value="suspension">Suspensão</TabsTrigger>
                <TabsTrigger value="tires">Pneus</TabsTrigger>
                <TabsTrigger value="brake">Freios</TabsTrigger>
                <TabsTrigger value="diff">Diferencial</TabsTrigger>
                <TabsTrigger value="ffb">FFB</TabsTrigger>
              </TabsList>

              <TabsContent value="aero">
                <Card className="p-4">
                  <h3 className="font-semibold mb-3">Configurações Aerodinâmicas</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label>Asa Dianteira</Label>
                      <Input type="number" placeholder="Ex: 4" />
                    </div>
                    <div className="space-y-2">
                      <Label>Asa Traseira</Label>
                      <Input type="number" placeholder="Ex: 7" />
                    </div>
                    <div className="space-y-2">
                      <Label>Altura do Diffuser</Label>
                      <Input type="text" placeholder="Ex: 65mm" />
                    </div>
                    <div className="space-y-2">
                      <Label>Rake (Ângulo do Carro)</Label>
                      <Input type="text" placeholder="Ex: +8mm" />
                    </div>
                    <div className="space-y-2">
                      <Label>Splitter Dianteiro</Label>
                      <Input type="number" placeholder="Ex: 3" />
                    </div>
                    <div className="space-y-2">
                      <Label>Gurney Flap</Label>
                      <Input type="text" placeholder="Ex: Pequeno" />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="suspension">
                <Card className="p-4">
                  <h3 className="font-semibold mb-3">Configurações de Suspensão</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label>Mola Dianteira</Label>
                      <Input type="text" placeholder="Ex: 95,000 N/m" />
                    </div>
                    <div className="space-y-2">
                      <Label>Mola Traseira</Label>
                      <Input type="text" placeholder="Ex: 88,000 N/m" />
                    </div>
                    <div className="space-y-2">
                      <Label>Amortecedor Diant. (Bump)</Label>
                      <Input type="text" placeholder="Ex: 6 clicks" />
                    </div>
                    <div className="space-y-2">
                      <Label>Amortecedor Tras. (Bump)</Label>
                      <Input type="text" placeholder="Ex: 5 clicks" />
                    </div>
                    <div className="space-y-2">
                      <Label>Amortecedor Diant. (Rebound)</Label>
                      <Input type="text" placeholder="Ex: 8 clicks" />
                    </div>
                    <div className="space-y-2">
                      <Label>Amortecedor Tras. (Rebound)</Label>
                      <Input type="text" placeholder="Ex: 7 clicks" />
                    </div>
                    <div className="space-y-2">
                      <Label>Barra Estabilizadora Diant.</Label>
                      <Input type="text" placeholder="Ex: 3" />
                    </div>
                    <div className="space-y-2">
                      <Label>Barra Estabilizadora Tras.</Label>
                      <Input type="text" placeholder="Ex: 2" />
                    </div>
                    <div className="space-y-2">
                      <Label>Altura Suspensão Diant.</Label>
                      <Input type="text" placeholder="Ex: 55mm" />
                    </div>
                    <div className="space-y-2">
                      <Label>Altura Suspensão Tras.</Label>
                      <Input type="text" placeholder="Ex: 60mm" />
                    </div>
                    <div className="space-y-2">
                      <Label>Camber Dianteiro</Label>
                      <Input type="text" placeholder="Ex: -3.5°" />
                    </div>
                    <div className="space-y-2">
                      <Label>Camber Traseiro</Label>
                      <Input type="text" placeholder="Ex: -2.8°" />
                    </div>
                    <div className="space-y-2">
                      <Label>Toe Dianteiro</Label>
                      <Input type="text" placeholder="Ex: 0.05°" />
                    </div>
                    <div className="space-y-2">
                      <Label>Toe Traseiro</Label>
                      <Input type="text" placeholder="Ex: 0.15°" />
                    </div>
                    <div className="space-y-2">
                      <Label>Caster</Label>
                      <Input type="text" placeholder="Ex: 7.5°" />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="tires">
                <Card className="p-4">
                  <h3 className="font-semibold mb-3">Configurações de Pneus</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label>Pressão Diant. Esq.</Label>
                      <Input type="text" placeholder="Ex: 27.8 PSI" />
                    </div>
                    <div className="space-y-2">
                      <Label>Pressão Diant. Dir.</Label>
                      <Input type="text" placeholder="Ex: 27.8 PSI" />
                    </div>
                    <div className="space-y-2">
                      <Label>Pressão Tras. Esq.</Label>
                      <Input type="text" placeholder="Ex: 26.5 PSI" />
                    </div>
                    <div className="space-y-2">
                      <Label>Pressão Tras. Dir.</Label>
                      <Input type="text" placeholder="Ex: 26.5 PSI" />
                    </div>
                    <div className="space-y-2">
                      <Label>Composto Pneu Diant.</Label>
                      <Input type="text" placeholder="Ex: Médio" />
                    </div>
                    <div className="space-y-2">
                      <Label>Composto Pneu Tras.</Label>
                      <Input type="text" placeholder="Ex: Médio" />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="brake">
                <Card className="p-4">
                  <h3 className="font-semibold mb-3">Configurações de Freios</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label>Bias (Balanço)</Label>
                      <Input type="text" placeholder="Ex: 56.5%" />
                    </div>
                    <div className="space-y-2">
                      <Label>Pressão do Sistema</Label>
                      <Input type="text" placeholder="Ex: 85%" />
                    </div>
                    <div className="space-y-2">
                      <Label>Disco Dianteiro</Label>
                      <Input type="text" placeholder="Ex: 370mm" />
                    </div>
                    <div className="space-y-2">
                      <Label>Disco Traseiro</Label>
                      <Input type="text" placeholder="Ex: 355mm" />
                    </div>
                    <div className="space-y-2">
                      <Label>Pastilhas Dianteiras</Label>
                      <Input type="text" placeholder="Ex: Tipo 1" />
                    </div>
                    <div className="space-y-2">
                      <Label>Pastilhas Traseiras</Label>
                      <Input type="text" placeholder="Ex: Tipo 2" />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="diff">
                <Card className="p-4">
                  <h3 className="font-semibold mb-3">Configurações do Diferencial</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label>Preload</Label>
                      <Input type="text" placeholder="Ex: 80 Nm" />
                    </div>
                    <div className="space-y-2">
                      <Label>Power (Aceleração)</Label>
                      <Input type="text" placeholder="Ex: 65%" />
                    </div>
                    <div className="space-y-2">
                      <Label>Coast (Desaceleração)</Label>
                      <Input type="text" placeholder="Ex: 35%" />
                    </div>
                    <div className="space-y-2">
                      <Label>Relação Final</Label>
                      <Input type="text" placeholder="Ex: 3.54" />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="ffb">
                <Card className="p-4">
                  <h3 className="font-semibold mb-3">Configurações de Force Feedback</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label>Força Geral</Label>
                      <Input type="text" placeholder="Ex: 75%" />
                    </div>
                    <div className="space-y-2">
                      <Label>Damping</Label>
                      <Input type="text" placeholder="Ex: 15%" />
                    </div>
                    <div className="space-y-2">
                      <Label>Kerb Effects</Label>
                      <Input type="text" placeholder="Ex: 60%" />
                    </div>
                    <div className="space-y-2">
                      <Label>Road Effects</Label>
                      <Input type="text" placeholder="Ex: 45%" />
                    </div>
                    <div className="space-y-2">
                      <Label>Understeer Effect</Label>
                      <Input type="text" placeholder="Ex: 50%" />
                    </div>
                    <div className="space-y-2">
                      <Label>Slip Effect</Label>
                      <Input type="text" placeholder="Ex: 40%" />
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </ScrollArea>

        <div className="flex gap-3 justify-end pt-4 border-t">
          <Button type="button" variant="outline">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} className="shadow-racing">
            Criar Setup
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
