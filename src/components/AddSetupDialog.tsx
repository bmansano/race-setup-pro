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
import { getSimulatorFields, getAvailableCategories } from "@/data/simulator-fields";
import { getBaselineSetup } from "@/data/baseline-setups";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

// Lista de todos os simuladores suportados (em ordem alfabética)
const SIMULATORS = [
  "Assetto Corsa Competizione",
  "Assetto Corsa EVO",
  "Assetto Corsa Rally",
  "Automobilista 2",
  "iRacing",
  "Le Mans Ultimate",
  "Project Motor Racing",
  "RaceRoom",
];

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
  const availableCategories = selectedSimulator ? getAvailableCategories(selectedSimulator) : [];

  // Função para mapear nomes de campos do baseline para campos do simulador
  const mapBaselineToSimulatorFields = (
    baselineSetup: ReturnType<typeof getBaselineSetup>,
    simulatorFields: ReturnType<typeof getSimulatorFields>
  ): Record<string, Record<string, string>> => {
    const newConfig: Record<string, Record<string, string>> = {
      aero: {},
      suspension: {},
      tires: {},
      brakes: {},
      differential: {},
      electronics: {},
      drivetrain: {},
    };

    // Mapeamento de nomes de campos do baseline para campos do simulador
    const fieldMappings: Record<string, Record<string, string>> = {
      aero: {
        frontWing: 'frontWing',
        rearWing: 'rearWing',
        frontSplitter: 'frontSplitter',
        gurneyFlap: 'rearGurney',
        rake: 'rake',
        diffuserHeight: 'diffuserHeight',
      },
      suspension: {
        frontSpring: 'frontSpring',
        rearSpring: 'rearSpring',
        frontBump: 'frontBump',
        rearBump: 'rearBump',
        frontRebound: 'frontRebound',
        rearRebound: 'rearRebound',
        frontARB: 'frontARB',
        rearARB: 'rearARB',
        frontHeight: 'frontRideHeight',
        rearHeight: 'rearRideHeight',
        frontCamber: 'frontCamber',
        rearCamber: 'rearCamber',
        frontToe: 'frontToe',
        rearToe: 'rearToe',
        caster: 'caster',
      },
      tires: {
        frontLeftPressure: 'lfPressure',
        frontRightPressure: 'rfPressure',
        rearLeftPressure: 'lrPressure',
        rearRightPressure: 'rrPressure',
        frontCompound: 'tireCompound',
        rearCompound: 'tireCompound',
      },
      brake: {
        bias: 'brakeBias',
        systemPressure: 'brakePressure',
        frontDisc: 'brakeDiscType',
        rearDisc: 'brakeDiscType',
        frontPads: 'brakePadFront',
        rearPads: 'brakePadRear',
      },
      differential: {
        preload: 'preload',
        power: 'power',
        coast: 'coast',
        finalRatio: 'gearFinal',
      },
    };

    // Para cada categoria do baseline, mapeia os valores para os campos do simulador
    const categories = ['aero', 'suspension', 'tires', 'brakes', 'differential', 'electronics', 'drivetrain'] as const;
    
    // Primeiro inicializa todos os campos do simulador com valores vazios
    simulatorFields.aero.forEach(field => newConfig.aero[field.name] = "");
    simulatorFields.suspension.forEach(field => newConfig.suspension[field.name] = "");
    simulatorFields.tires.forEach(field => newConfig.tires[field.name] = "");
    simulatorFields.brakes.forEach(field => newConfig.brakes[field.name] = "");
    simulatorFields.differential.forEach(field => newConfig.differential[field.name] = "");
    if (simulatorFields.electronics) {
      simulatorFields.electronics.forEach(field => newConfig.electronics[field.name] = "");
    }
    if (simulatorFields.drivetrain) {
      simulatorFields.drivetrain.forEach(field => newConfig.drivetrain[field.name] = "");
    }

    // Mapeia valores do baseline aero
    if (baselineSetup.aero) {
      Object.entries(baselineSetup.aero).forEach(([key, value]) => {
        if (value) {
          const mappedKey = fieldMappings.aero[key] || key;
          if (simulatorFields.aero.some(f => f.name === mappedKey)) {
            newConfig.aero[mappedKey] = value;
          }
        }
      });
    }

    // Mapeia valores do baseline suspension
    if (baselineSetup.suspension) {
      Object.entries(baselineSetup.suspension).forEach(([key, value]) => {
        if (value) {
          const mappedKey = fieldMappings.suspension[key] || key;
          if (simulatorFields.suspension.some(f => f.name === mappedKey)) {
            newConfig.suspension[mappedKey] = value;
          }
        }
      });
    }

    // Mapeia valores do baseline tires
    if (baselineSetup.tires) {
      Object.entries(baselineSetup.tires).forEach(([key, value]) => {
        if (value) {
          const mappedKey = fieldMappings.tires[key] || key;
          if (simulatorFields.tires.some(f => f.name === mappedKey)) {
            newConfig.tires[mappedKey] = value;
          }
        }
      });
    }

    // Mapeia valores do baseline brake para brakes
    if (baselineSetup.brake) {
      Object.entries(baselineSetup.brake).forEach(([key, value]) => {
        if (value) {
          const mappedKey = fieldMappings.brake[key] || key;
          if (simulatorFields.brakes.some(f => f.name === mappedKey)) {
            newConfig.brakes[mappedKey] = value;
          }
        }
      });
    }

    // Mapeia valores do baseline differential
    if (baselineSetup.differential) {
      Object.entries(baselineSetup.differential).forEach(([key, value]) => {
        if (value) {
          const mappedKey = fieldMappings.differential[key] || key;
          if (simulatorFields.differential.some(f => f.name === mappedKey)) {
            newConfig.differential[mappedKey] = value;
          } else if (mappedKey === 'gearFinal' && simulatorFields.drivetrain?.some(f => f.name === 'gearFinal')) {
            newConfig.drivetrain['gearFinal'] = value;
          }
        }
      });
    }

    return newConfig;
  };

  // Atualiza a configuração quando o simulador muda ou quando todos os campos necessários são preenchidos
  useEffect(() => {
    const fields = getSimulatorFields(formData.simulator);
    
    if (formData.simulator && formData.car && formData.track && formData.condition) {
      // Busca o baseline setup baseado no simulador, carro, pista e condição
      const baselineSetup = getBaselineSetup(
        formData.simulator,
        formData.car,
        formData.track,
        formData.condition
      );

      const newConfig = mapBaselineToSimulatorFields(baselineSetup, fields);
      setConfiguration(newConfig);
      toast.success("Configuração base carregada automaticamente!");
    } else if (formData.simulator) {
      // Se apenas o simulador foi selecionado, inicializa campos vazios
      const newConfig: Record<string, Record<string, string>> = {
        aero: {},
        suspension: {},
        tires: {},
        brakes: {},
        differential: {},
        electronics: {},
        drivetrain: {},
      };

      fields.aero.forEach(field => newConfig.aero[field.name] = "");
      fields.suspension.forEach(field => newConfig.suspension[field.name] = "");
      fields.tires.forEach(field => newConfig.tires[field.name] = "");
      fields.brakes.forEach(field => newConfig.brakes[field.name] = "");
      fields.differential.forEach(field => newConfig.differential[field.name] = "");
      if (fields.electronics) {
        fields.electronics.forEach(field => newConfig.electronics[field.name] = "");
      }
      if (fields.drivetrain) {
        fields.drivetrain.forEach(field => newConfig.drivetrain[field.name] = "");
      }

      setConfiguration(newConfig);
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

      let carImageUrl: string | null = null;

      // Check if there's an existing setup with the same car and simulator
      const { data: existingSetup } = await supabase
        .from("setups")
        .select("car_image_url")
        .eq("user_id", user.id)
        .eq("car", formData.car)
        .eq("simulator", formData.simulator)
        .not("car_image_url", "is", null)
        .limit(1)
        .maybeSingle();

      if (existingSetup?.car_image_url) {
        // Reuse existing car image
        carImageUrl = existingSetup.car_image_url;
        toast.success("Imagem do carro reutilizada de setup existente!", { id: "car-image" });
      } else {
        // Generate new car image using AI
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
          carImageUrl = imageData?.imageUrl || null;
          toast.success("Imagem do carro gerada!", { id: "car-image" });
        }
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
          car_image_url: carImageUrl,
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

  const renderCategoryTab = (categoryKey: string, categoryLabel: string) => {
    const fields = getSimulatorFields(formData.simulator);
    const categoryFields = fields[categoryKey as keyof typeof fields];
    
    if (!categoryFields || !Array.isArray(categoryFields) || categoryFields.length === 0) {
      return null;
    }

    return (
      <TabsContent value={categoryKey} className="space-y-4">
        <Card className="p-4">
          <div className="grid grid-cols-2 gap-4">
            {categoryFields.map((field) => (
              <div key={field.name}>
                <Label htmlFor={field.name}>{field.label}</Label>
                <Input
                  id={field.name}
                  value={configuration[categoryKey]?.[field.name] || ""}
                  onChange={(e) => setConfiguration({
                    ...configuration,
                    [categoryKey]: { ...configuration[categoryKey], [field.name]: e.target.value }
                  })}
                />
              </div>
            ))}
          </div>
        </Card>
      </TabsContent>
    );
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
                  {SIMULATORS.map((sim) => (
                    <SelectItem key={sim} value={sim}>{sim}</SelectItem>
                  ))}
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

            {!formData.simulator && (
              <div className="text-center py-8 text-muted-foreground">
                Selecione um simulador para ver os campos disponíveis
              </div>
            )}

            {formData.simulator && (
              <Tabs defaultValue="aero" className="w-full">
                <TabsList className={`grid w-full ${availableCategories.length <= 5 ? 'grid-cols-5' : 'grid-cols-7'}`}>
                  <TabsTrigger value="aero">Aero</TabsTrigger>
                  <TabsTrigger value="suspension">Suspensão</TabsTrigger>
                  <TabsTrigger value="tires">Pneus</TabsTrigger>
                  <TabsTrigger value="brakes">Freios</TabsTrigger>
                  <TabsTrigger value="differential">Diferencial</TabsTrigger>
                  {availableCategories.includes('electronics') && (
                    <TabsTrigger value="electronics">Eletrônica</TabsTrigger>
                  )}
                  {availableCategories.includes('drivetrain') && (
                    <TabsTrigger value="drivetrain">Geral</TabsTrigger>
                  )}
                </TabsList>

                {renderCategoryTab('aero', 'Aero')}
                {renderCategoryTab('suspension', 'Suspensão')}
                {renderCategoryTab('tires', 'Pneus')}
                {renderCategoryTab('brakes', 'Freios')}
                {renderCategoryTab('differential', 'Diferencial')}
                {availableCategories.includes('electronics') && renderCategoryTab('electronics', 'Eletrônica')}
                {availableCategories.includes('drivetrain') && renderCategoryTab('drivetrain', 'Transmissão')}
              </Tabs>
            )}
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
