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
import { getBaselineSetup } from "@/data/baseline-setups";
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

  // State for all configuration fields
  const [configuration, setConfiguration] = useState({
    aero: {
      frontWing: "",
      rearWing: "",
      diffuserHeight: "",
      rake: "",
      frontSplitter: "",
      gurneyFlap: "",
    },
    suspension: {
      frontSpring: "",
      rearSpring: "",
      frontBumpDamper: "",
      rearBumpDamper: "",
      frontReboundDamper: "",
      rearReboundDamper: "",
      frontAntiRollBar: "",
      rearAntiRollBar: "",
      frontRideHeight: "",
      rearRideHeight: "",
      frontCamber: "",
      rearCamber: "",
      frontToe: "",
      rearToe: "",
      caster: "",
    },
    tires: {
      frontLeftPressure: "",
      frontRightPressure: "",
      rearLeftPressure: "",
      rearRightPressure: "",
      frontCompound: "",
      rearCompound: "",
    },
    brakes: {
      bias: "",
      pressure: "",
      frontDisc: "",
      rearDisc: "",
      frontPads: "",
      rearPads: "",
    },
    differential: {
      preload: "",
      power: "",
      coast: "",
      finalRatio: "",
    },
    ffb: {
      generalForce: "",
      damping: "",
      kerbEffects: "",
      roadEffects: "",
      understeerEffect: "",
      slipEffect: "",
    },
  });

  const selectedSimulator = formData.simulator;
  const availableCars = selectedSimulator ? simulatorData[selectedSimulator]?.cars || [] : [];
  const availableTracks = selectedSimulator ? simulatorData[selectedSimulator]?.tracks || [] : [];

  // Auto-load baseline setup when all required fields are selected
  useEffect(() => {
    if (formData.simulator && formData.car && formData.track && formData.condition) {
      const baseline = getBaselineSetup(
        formData.simulator,
        formData.car,
        formData.track,
        formData.condition
      );
      
      // Apply baseline values to configuration
      setConfiguration({
        aero: {
          frontWing: baseline.aero.frontWing || "",
          rearWing: baseline.aero.rearWing || "",
          diffuserHeight: baseline.aero.diffuserHeight || "",
          rake: baseline.aero.rake || "",
          frontSplitter: baseline.aero.frontSplitter || "",
          gurneyFlap: baseline.aero.gurneyFlap || "",
        },
        suspension: {
          frontSpring: baseline.suspension.frontSpring || "",
          rearSpring: baseline.suspension.rearSpring || "",
          frontBumpDamper: baseline.suspension.frontBump || "",
          rearBumpDamper: baseline.suspension.rearBump || "",
          frontReboundDamper: baseline.suspension.frontRebound || "",
          rearReboundDamper: baseline.suspension.rearRebound || "",
          frontAntiRollBar: baseline.suspension.frontARB || "",
          rearAntiRollBar: baseline.suspension.rearARB || "",
          frontRideHeight: baseline.suspension.frontHeight || "",
          rearRideHeight: baseline.suspension.rearHeight || "",
          frontCamber: baseline.suspension.frontCamber || "",
          rearCamber: baseline.suspension.rearCamber || "",
          frontToe: baseline.suspension.frontToe || "",
          rearToe: baseline.suspension.rearToe || "",
          caster: baseline.suspension.caster || "",
        },
        tires: {
          frontLeftPressure: baseline.tires.frontLeftPressure || "",
          frontRightPressure: baseline.tires.frontRightPressure || "",
          rearLeftPressure: baseline.tires.rearLeftPressure || "",
          rearRightPressure: baseline.tires.rearRightPressure || "",
          frontCompound: baseline.tires.frontCompound || "",
          rearCompound: baseline.tires.rearCompound || "",
        },
        brakes: {
          bias: baseline.brake.bias || "",
          pressure: baseline.brake.systemPressure || "",
          frontDisc: baseline.brake.frontDisc || "",
          rearDisc: baseline.brake.rearDisc || "",
          frontPads: baseline.brake.frontPads || "",
          rearPads: baseline.brake.rearPads || "",
        },
        differential: {
          preload: baseline.differential.preload || "",
          power: baseline.differential.power || "",
          coast: baseline.differential.coast || "",
          finalRatio: baseline.differential.finalRatio || "",
        },
        ffb: {
          generalForce: baseline.ffb?.overallForce || "",
          damping: baseline.ffb?.damping || "",
          kerbEffects: baseline.ffb?.kerbEffects || "",
          roadEffects: baseline.ffb?.roadEffects || "",
          understeerEffect: baseline.ffb?.understeerEffect || "",
          slipEffect: baseline.ffb?.slipEffect || "",
        },
      });
      
      toast.success("Setup baseline carregado automaticamente!");
    }
  }, [formData.simulator, formData.car, formData.track, formData.condition]);

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
                  <SelectItem value="Assetto Corsa">Assetto Corsa</SelectItem>
                  <SelectItem value="Assetto Corsa Competizione">Assetto Corsa Competizione</SelectItem>
                  <SelectItem value="RaceRoom Racing Experience">RaceRoom Racing Experience</SelectItem>
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
                      <Input 
                        type="number" 
                        placeholder="Ex: 4"
                        value={configuration.aero.frontWing}
                        onChange={(e) => setConfiguration({
                          ...configuration,
                          aero: { ...configuration.aero, frontWing: e.target.value }
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Asa Traseira</Label>
                      <Input 
                        type="number" 
                        placeholder="Ex: 7"
                        value={configuration.aero.rearWing}
                        onChange={(e) => setConfiguration({
                          ...configuration,
                          aero: { ...configuration.aero, rearWing: e.target.value }
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Altura do Diffuser</Label>
                      <Input 
                        type="text" 
                        placeholder="Ex: 65mm"
                        value={configuration.aero.diffuserHeight}
                        onChange={(e) => setConfiguration({
                          ...configuration,
                          aero: { ...configuration.aero, diffuserHeight: e.target.value }
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Rake (Ângulo do Carro)</Label>
                      <Input 
                        type="text" 
                        placeholder="Ex: +8mm"
                        value={configuration.aero.rake}
                        onChange={(e) => setConfiguration({
                          ...configuration,
                          aero: { ...configuration.aero, rake: e.target.value }
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Splitter Dianteiro</Label>
                      <Input 
                        type="number" 
                        placeholder="Ex: 3"
                        value={configuration.aero.frontSplitter}
                        onChange={(e) => setConfiguration({
                          ...configuration,
                          aero: { ...configuration.aero, frontSplitter: e.target.value }
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Gurney Flap</Label>
                      <Input 
                        type="text" 
                        placeholder="Ex: Pequeno"
                        value={configuration.aero.gurneyFlap}
                        onChange={(e) => setConfiguration({
                          ...configuration,
                          aero: { ...configuration.aero, gurneyFlap: e.target.value }
                        })}
                      />
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
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit} disabled={loading} className="shadow-racing">
            {loading ? "Criando..." : "Criar Setup"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
