import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
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
import { getSimulatorFields } from "@/data/simulator-fields";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

export function AddSetupDialog() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    simulator: "",
    car: "",
    track: "",
    condition: "",
  });

  // Configuração dinâmica baseada no simulador selecionado
  const [configuration, setConfiguration] = useState<Record<string, Record<string, string>>>({});

  const selectedSimulator = formData.simulator;
  const availableCars = selectedSimulator ? simulatorData[selectedSimulator]?.cars || [] : [];
  const availableTracks = selectedSimulator ? simulatorData[selectedSimulator]?.tracks || [] : [];

  // Atualiza a configuração quando o simulador muda
  useEffect(() => {
    if (formData.simulator) {
      const fields = getSimulatorFields(formData.simulator);
      const newConfig: Record<string, Record<string, string>> = {
        aero: {},
        suspension: {},
        tires: {},
        brakes: {},
        differential: {},
      };

      // Inicializa todos os campos como strings vazias
      fields.aero.forEach(field => newConfig.aero[field.name] = "");
      fields.suspension.forEach(field => newConfig.suspension[field.name] = "");
      fields.tires.forEach(field => newConfig.tires[field.name] = "");
      fields.brakes.forEach(field => newConfig.brakes[field.name] = "");
      fields.differential.forEach(field => newConfig.differential[field.name] = "");

      setConfiguration(newConfig);
    }
  }, [formData.simulator]);

  const handleSubmit = async () => {
    if (!formData.name || !formData.simulator || !formData.car || !formData.track || !formData.condition) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }

    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error("Você precisa estar logado para criar um setup");
        return;
      }

      // Generate car image using AI
      toast.loading("Gerando imagem do carro...", { id: "car-image" });
      const { data: imageData, error: imageError } = await supabase.functions.invoke("generate-car-image", {
        body: {
          car: formData.car,
          simulator: formData.simulator,
          condition: formData.condition,
        },
      });

      if (imageError) {
        console.error("Error generating car image:", imageError);
        toast.error("Erro ao gerar imagem do carro, mas o setup será criado", { id: "car-image" });
      } else {
        toast.success("Imagem do carro gerada!", { id: "car-image" });
      }

      // Get car category from the selected car
      const selectedCar = availableCars.find(c => c.name === formData.car);
      const category = selectedCar?.category || "Other";

      const { data, error } = await supabase
        .from("setups")
        .insert({
          name: formData.name,
          simulator: formData.simulator,
          car: formData.car,
          track: formData.track,
          category: category,
          condition: formData.condition,
          configuration: configuration,
          user_id: user.id,
          car_image_url: imageData?.imageUrl || null,
        })
        .select()
        .single();

      if (error) throw error;

      toast.success("Setup criado com sucesso!");
      setOpen(false);
      
      // Navigate to the new setup details page
      if (data) {
        navigate(`/setup/${data.id}`);
      }
    } catch (error) {
      console.error("Erro ao criar setup:", error);
      toast.error("Erro ao criar setup");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
              <Label htmlFor="name">Nome do Setup</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Setup Spa Qualifying"
              />
            </div>

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
                  <SelectItem value="Assetto Corsa EVO">Assetto Corsa EVO</SelectItem>
                  <SelectItem value="Assetto Corsa Competizione">Assetto Corsa Competizione</SelectItem>
                  <SelectItem value="RaceRoom Racing Experience">RaceRoom Racing Experience</SelectItem>
                  <SelectItem value="Le Mans Ultimate">Le Mans Ultimate</SelectItem>
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
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="aero">Aero</TabsTrigger>
                <TabsTrigger value="suspension">Suspension</TabsTrigger>
                <TabsTrigger value="tires">Tires</TabsTrigger>
                <TabsTrigger value="brakes">Brakes</TabsTrigger>
                <TabsTrigger value="differential">Differential</TabsTrigger>
              </TabsList>
              
              {!formData.simulator && (
                <div className="text-center py-8 text-muted-foreground">
                  Selecione um simulador para ver os campos disponíveis
                </div>
              )}

              {formData.simulator && (
                <>
                  <TabsContent value="aero" className="space-y-4">
                    <Card className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        {getSimulatorFields(formData.simulator).aero.map((field) => (
                          <div key={field.name}>
                            <Label htmlFor={field.name}>{field.label}</Label>
                            <Input
                              id={field.name}
                              value={configuration.aero?.[field.name] || ""}
                              onChange={(e) => setConfiguration({
                                ...configuration,
                                aero: { ...configuration.aero, [field.name]: e.target.value }
                              })}
                            />
                          </div>
                        ))}
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="suspension" className="space-y-4">
                    <Card className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        {getSimulatorFields(formData.simulator).suspension.map((field) => (
                          <div key={field.name}>
                            <Label htmlFor={field.name}>{field.label}</Label>
                            <Input
                              id={field.name}
                              value={configuration.suspension?.[field.name] || ""}
                              onChange={(e) => setConfiguration({
                                ...configuration,
                                suspension: { ...configuration.suspension, [field.name]: e.target.value }
                              })}
                            />
                          </div>
                        ))}
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="tires" className="space-y-4">
                    <Card className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        {getSimulatorFields(formData.simulator).tires.map((field) => (
                          <div key={field.name}>
                            <Label htmlFor={field.name}>{field.label}</Label>
                            <Input
                              id={field.name}
                              value={configuration.tires?.[field.name] || ""}
                              onChange={(e) => setConfiguration({
                                ...configuration,
                                tires: { ...configuration.tires, [field.name]: e.target.value }
                              })}
                            />
                          </div>
                        ))}
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="brakes" className="space-y-4">
                    <Card className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        {getSimulatorFields(formData.simulator).brakes.map((field) => (
                          <div key={field.name}>
                            <Label htmlFor={field.name}>{field.label}</Label>
                            <Input
                              id={field.name}
                              value={configuration.brakes?.[field.name] || ""}
                              onChange={(e) => setConfiguration({
                                ...configuration,
                                brakes: { ...configuration.brakes, [field.name]: e.target.value }
                              })}
                            />
                          </div>
                        ))}
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="differential" className="space-y-4">
                    <Card className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        {getSimulatorFields(formData.simulator).differential.map((field) => (
                          <div key={field.name}>
                            <Label htmlFor={field.name}>{field.label}</Label>
                            <Input
                              id={field.name}
                              value={configuration.differential?.[field.name] || ""}
                              onChange={(e) => setConfiguration({
                                ...configuration,
                                differential: { ...configuration.differential, [field.name]: e.target.value }
                              })}
                            />
                          </div>
                        ))}
                      </div>
                    </Card>
                  </TabsContent>
                </>
              )}
            </Tabs>
          </div>
        </ScrollArea>

        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Criando..." : "Criar Setup"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
