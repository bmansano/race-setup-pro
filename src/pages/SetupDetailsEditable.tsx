import { ArrowLeft, Save, Sparkles, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import { toast } from "sonner";
import { PerformanceEngineerDialog } from "@/components/PerformanceEngineerDialog";
import { SetupVersionHistory } from "@/components/SetupVersionHistory";
import { supabase } from "@/integrations/supabase/client";

export default function SetupDetailsEditable() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [engineerDialogOpen, setEngineerDialogOpen] = useState(false);
  const [versionHistoryOpen, setVersionHistoryOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [setupName, setSetupName] = useState("");

  const [setupData, setSetupData] = useState({
    car: "",
    track: "",
    category: "",
    simulator: "",
    condition: "",
    trackTemp: "",
    lapTime: "",
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
      frontBump: "",
      rearBump: "",
      frontRebound: "",
      rearRebound: "",
      frontARB: "",
      rearARB: "",
      frontHeight: "",
      rearHeight: "",
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
    brake: {
      bias: "",
      systemPressure: "",
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
      overallForce: "",
      damping: "",
      kerbEffects: "",
      roadEffects: "",
      understeerEffect: "",
      slipEffect: "",
    },
  });

  useEffect(() => {
    loadSetup();
  }, [id]);

  const loadSetup = async () => {
    if (!id) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("setups")
        .select("*")
        .eq("id", id)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        const config = data.configuration as any || {};
        
        setSetupName(data.name);
        setComment(data.comment || "");
        setSetupData({
          car: data.car,
          track: data.track,
          category: data.category,
          simulator: data.simulator,
          condition: data.condition,
          trackTemp: data.track_temp || "",
          lapTime: data.lap_time || "",
          aero: {
            frontWing: config.aero?.frontWing || "",
            rearWing: config.aero?.rearWing || "",
            diffuserHeight: config.aero?.diffuserHeight || "",
            rake: config.aero?.rake || "",
            frontSplitter: config.aero?.frontSplitter || "",
            gurneyFlap: config.aero?.gurneyFlap || "",
          },
          suspension: {
            frontSpring: config.suspension?.frontSpring || "",
            rearSpring: config.suspension?.rearSpring || "",
            frontBump: config.suspension?.frontBumpDamper || config.suspension?.frontBump || "",
            rearBump: config.suspension?.rearBumpDamper || config.suspension?.rearBump || "",
            frontRebound: config.suspension?.frontReboundDamper || config.suspension?.frontRebound || "",
            rearRebound: config.suspension?.rearReboundDamper || config.suspension?.rearRebound || "",
            frontARB: config.suspension?.frontAntiRollBar || config.suspension?.frontARB || "",
            rearARB: config.suspension?.rearAntiRollBar || config.suspension?.rearARB || "",
            frontHeight: config.suspension?.frontRideHeight || config.suspension?.frontHeight || "",
            rearHeight: config.suspension?.rearRideHeight || config.suspension?.rearHeight || "",
            frontCamber: config.suspension?.frontCamber || "",
            rearCamber: config.suspension?.rearCamber || "",
            frontToe: config.suspension?.frontToe || "",
            rearToe: config.suspension?.rearToe || "",
            caster: config.suspension?.caster || "",
          },
          tires: {
            frontLeftPressure: config.tires?.frontLeftPressure || "",
            frontRightPressure: config.tires?.frontRightPressure || "",
            rearLeftPressure: config.tires?.rearLeftPressure || "",
            rearRightPressure: config.tires?.rearRightPressure || "",
            frontCompound: config.tires?.frontCompound || "",
            rearCompound: config.tires?.rearCompound || "",
          },
          brake: {
            bias: config.brakes?.bias || config.brake?.bias || "",
            systemPressure: config.brakes?.pressure || config.brake?.systemPressure || "",
            frontDisc: config.brakes?.frontDisc || config.brake?.frontDisc || "",
            rearDisc: config.brakes?.rearDisc || config.brake?.rearDisc || "",
            frontPads: config.brakes?.frontPads || config.brake?.frontPads || "",
            rearPads: config.brakes?.rearPads || config.brake?.rearPads || "",
          },
          differential: {
            preload: config.differential?.preload || "",
            power: config.differential?.power || "",
            coast: config.differential?.coast || "",
            finalRatio: config.differential?.finalRatio || "",
          },
          ffb: {
            overallForce: config.ffb?.generalForce || config.ffb?.overallForce || "",
            damping: config.ffb?.damping || "",
            kerbEffects: config.ffb?.kerbEffects || "",
            roadEffects: config.ffb?.roadEffects || "",
            understeerEffect: config.ffb?.understeerEffect || "",
            slipEffect: config.ffb?.slipEffect || "",
          },
        });
      }
    } catch (error) {
      console.error("Erro ao carregar setup:", error);
      toast.error("Erro ao carregar setup");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!id) return;

    try {
      const { aero, suspension, tires, brake, differential, ffb } = setupData;
      
      const { error } = await supabase
        .from("setups")
        .update({
          track_temp: setupData.trackTemp,
          lap_time: setupData.lapTime,
          comment: comment,
          configuration: {
            aero,
            suspension,
            tires,
            brake,
            differential,
            ffb,
          },
          updated_at: new Date().toISOString(),
        })
        .eq("id", id);

      if (error) throw error;

      toast.success("Setup salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar setup:", error);
      toast.error("Erro ao salvar setup");
    }
  };

  const handleRestoreVersion = (configuration: any) => {
    setSetupData(configuration);
    toast.success("Versão restaurada com sucesso!");
  };

  const updateSetupData = (category: string, field: string, value: string) => {
    setSetupData((prev) => {
      const categoryData = prev[category as keyof typeof prev];
      if (typeof categoryData === 'object' && categoryData !== null) {
        return {
          ...prev,
          [category]: {
            ...categoryData,
            [field]: value,
          },
        };
      }
      return prev;
    });
  };

  if (loading) {
    return (
      <div className="container max-w-6xl py-8">
        <div className="text-center py-12 text-muted-foreground">
          Carregando setup...
        </div>
      </div>
    );
  }

  // Selecionar imagem baseada na condição
  const setupImage = setupData.condition === "wet" ? car2 : car1;

  return (
    <div className="container max-w-6xl py-8 space-y-6">
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar para Setups
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setVersionHistoryOpen(true)} className="gap-2">
            <History className="h-4 w-4" />
            Histórico
          </Button>
          <Button variant="secondary" onClick={() => setEngineerDialogOpen(true)} className="gap-2">
            <Sparkles className="h-4 w-4" />
            Engenheiro de Performance
          </Button>
          <Button onClick={handleSave} className="gap-2 shadow-racing">
            <Save className="h-4 w-4" />
            Salvar Alterações
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <img src={setupImage} alt={setupData.car} className="w-full aspect-video object-cover" />
        </Card>

        <Card className="p-6 space-y-4">
          <div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h1 className="text-2xl font-bold">{setupName}</h1>
                <p className="text-lg font-medium mt-1">{setupData.car}</p>
              </div>
              <div className="flex gap-2">
                <Badge>{setupData.condition === "dry" ? "Pista Seca" : "Pista Molhada"}</Badge>
                <Badge variant="outline">{setupData.category}</Badge>
              </div>
            </div>
            <p className="text-muted-foreground">{setupData.track}</p>
          </div>

          <Separator />

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Simulador:</span>
              <span className="font-medium">{setupData.simulator}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Categoria:</span>
              <span className="font-medium">{setupData.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Temperatura Pista:</span>
              <Input
                value={setupData.trackTemp}
                onChange={(e) => setSetupData({ ...setupData, trackTemp: e.target.value })}
                className="h-7 w-24 text-right"
              />
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tempo de Volta:</span>
              <Input
                value={setupData.lapTime}
                onChange={(e) => setSetupData({ ...setupData, lapTime: e.target.value })}
                className="h-7 w-28 text-right"
              />
            </div>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="aero" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="aero">Aero</TabsTrigger>
          <TabsTrigger value="suspension">Suspensão</TabsTrigger>
          <TabsTrigger value="tires">Pneus</TabsTrigger>
          <TabsTrigger value="brake">Freios</TabsTrigger>
          <TabsTrigger value="differential">Diferencial</TabsTrigger>
          <TabsTrigger value="ffb">FFB</TabsTrigger>
        </TabsList>

        <TabsContent value="aero" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Configurações Aerodinâmicas</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Asa Dianteira</Label>
                <Input
                  value={setupData.aero.frontWing}
                  onChange={(e) => updateSetupData("aero", "frontWing", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Asa Traseira</Label>
                <Input
                  value={setupData.aero.rearWing}
                  onChange={(e) => updateSetupData("aero", "rearWing", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Altura do Diffuser</Label>
                <Input
                  value={setupData.aero.diffuserHeight}
                  onChange={(e) => updateSetupData("aero", "diffuserHeight", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Rake</Label>
                <Input
                  value={setupData.aero.rake}
                  onChange={(e) => updateSetupData("aero", "rake", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Splitter Dianteiro</Label>
                <Input
                  value={setupData.aero.frontSplitter}
                  onChange={(e) => updateSetupData("aero", "frontSplitter", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Gurney Flap</Label>
                <Input
                  value={setupData.aero.gurneyFlap}
                  onChange={(e) => updateSetupData("aero", "gurneyFlap", e.target.value)}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="suspension" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Configurações de Suspensão</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Mola Dianteira</Label>
                <Input
                  value={setupData.suspension.frontSpring}
                  onChange={(e) => updateSetupData("suspension", "frontSpring", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Mola Traseira</Label>
                <Input
                  value={setupData.suspension.rearSpring}
                  onChange={(e) => updateSetupData("suspension", "rearSpring", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Amortecedor Diant. (Bump)</Label>
                <Input
                  value={setupData.suspension.frontBump}
                  onChange={(e) => updateSetupData("suspension", "frontBump", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Amortecedor Tras. (Bump)</Label>
                <Input
                  value={setupData.suspension.rearBump}
                  onChange={(e) => updateSetupData("suspension", "rearBump", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Amortecedor Diant. (Rebound)</Label>
                <Input
                  value={setupData.suspension.frontRebound}
                  onChange={(e) => updateSetupData("suspension", "frontRebound", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Amortecedor Tras. (Rebound)</Label>
                <Input
                  value={setupData.suspension.rearRebound}
                  onChange={(e) => updateSetupData("suspension", "rearRebound", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Barra Estabilizadora Diant.</Label>
                <Input
                  value={setupData.suspension.frontARB}
                  onChange={(e) => updateSetupData("suspension", "frontARB", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Barra Estabilizadora Tras.</Label>
                <Input
                  value={setupData.suspension.rearARB}
                  onChange={(e) => updateSetupData("suspension", "rearARB", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Altura Suspensão Diant.</Label>
                <Input
                  value={setupData.suspension.frontHeight}
                  onChange={(e) => updateSetupData("suspension", "frontHeight", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Altura Suspensão Tras.</Label>
                <Input
                  value={setupData.suspension.rearHeight}
                  onChange={(e) => updateSetupData("suspension", "rearHeight", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Camber Dianteiro</Label>
                <Input
                  value={setupData.suspension.frontCamber}
                  onChange={(e) => updateSetupData("suspension", "frontCamber", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Camber Traseiro</Label>
                <Input
                  value={setupData.suspension.rearCamber}
                  onChange={(e) => updateSetupData("suspension", "rearCamber", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Toe Dianteiro</Label>
                <Input
                  value={setupData.suspension.frontToe}
                  onChange={(e) => updateSetupData("suspension", "frontToe", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Toe Traseiro</Label>
                <Input
                  value={setupData.suspension.rearToe}
                  onChange={(e) => updateSetupData("suspension", "rearToe", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Caster</Label>
                <Input
                  value={setupData.suspension.caster}
                  onChange={(e) => updateSetupData("suspension", "caster", e.target.value)}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="tires" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Configurações de Pneus</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Pressão Diant. Esq.</Label>
                <Input
                  value={setupData.tires.frontLeftPressure}
                  onChange={(e) => updateSetupData("tires", "frontLeftPressure", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Pressão Diant. Dir.</Label>
                <Input
                  value={setupData.tires.frontRightPressure}
                  onChange={(e) => updateSetupData("tires", "frontRightPressure", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Pressão Tras. Esq.</Label>
                <Input
                  value={setupData.tires.rearLeftPressure}
                  onChange={(e) => updateSetupData("tires", "rearLeftPressure", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Pressão Tras. Dir.</Label>
                <Input
                  value={setupData.tires.rearRightPressure}
                  onChange={(e) => updateSetupData("tires", "rearRightPressure", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Composto Pneu Diant.</Label>
                <Input
                  value={setupData.tires.frontCompound}
                  onChange={(e) => updateSetupData("tires", "frontCompound", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Composto Pneu Tras.</Label>
                <Input
                  value={setupData.tires.rearCompound}
                  onChange={(e) => updateSetupData("tires", "rearCompound", e.target.value)}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="brake" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Configurações de Freios</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Bias</Label>
                <Input
                  value={setupData.brake.bias}
                  onChange={(e) => updateSetupData("brake", "bias", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Pressão do Sistema</Label>
                <Input
                  value={setupData.brake.systemPressure}
                  onChange={(e) => updateSetupData("brake", "systemPressure", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Disco Dianteiro</Label>
                <Input
                  value={setupData.brake.frontDisc}
                  onChange={(e) => updateSetupData("brake", "frontDisc", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Disco Traseiro</Label>
                <Input
                  value={setupData.brake.rearDisc}
                  onChange={(e) => updateSetupData("brake", "rearDisc", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Pastilhas Dianteiras</Label>
                <Input
                  value={setupData.brake.frontPads}
                  onChange={(e) => updateSetupData("brake", "frontPads", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Pastilhas Traseiras</Label>
                <Input
                  value={setupData.brake.rearPads}
                  onChange={(e) => updateSetupData("brake", "rearPads", e.target.value)}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="differential" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Configurações do Diferencial</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Preload</Label>
                <Input
                  value={setupData.differential.preload}
                  onChange={(e) => updateSetupData("differential", "preload", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Power (Aceleração)</Label>
                <Input
                  value={setupData.differential.power}
                  onChange={(e) => updateSetupData("differential", "power", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Coast (Desaceleração)</Label>
                <Input
                  value={setupData.differential.coast}
                  onChange={(e) => updateSetupData("differential", "coast", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Relação Final</Label>
                <Input
                  value={setupData.differential.finalRatio}
                  onChange={(e) => updateSetupData("differential", "finalRatio", e.target.value)}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="ffb" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Configurações de Force Feedback</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Força Geral</Label>
                <Input
                  value={setupData.ffb.overallForce}
                  onChange={(e) => updateSetupData("ffb", "overallForce", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Damping</Label>
                <Input
                  value={setupData.ffb.damping}
                  onChange={(e) => updateSetupData("ffb", "damping", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Kerb Effects</Label>
                <Input
                  value={setupData.ffb.kerbEffects}
                  onChange={(e) => updateSetupData("ffb", "kerbEffects", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Road Effects</Label>
                <Input
                  value={setupData.ffb.roadEffects}
                  onChange={(e) => updateSetupData("ffb", "roadEffects", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Understeer Effect</Label>
                <Input
                  value={setupData.ffb.understeerEffect}
                  onChange={(e) => updateSetupData("ffb", "understeerEffect", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Slip Effect</Label>
                <Input
                  value={setupData.ffb.slipEffect}
                  onChange={(e) => updateSetupData("ffb", "slipEffect", e.target.value)}
                />
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Comentários e Observações</h3>
        <div className="space-y-2">
          <Label htmlFor="comment">
            Adicione anotações sobre o setup, condições da pista, ou observações importantes
          </Label>
          <Textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Ex: Setup funciona muito bem em pista seca e temperatura acima de 25°C. Ajustar asa traseira para +1 se houver vento forte..."
            className="min-h-[120px]"
          />
        </div>
      </Card>

      <PerformanceEngineerDialog
        open={engineerDialogOpen}
        onOpenChange={setEngineerDialogOpen}
        setup={setupData}
      />

      <SetupVersionHistory
        open={versionHistoryOpen}
        onOpenChange={setVersionHistoryOpen}
        setupId={id || ""}
        onRestore={handleRestoreVersion}
      />
    </div>
  );
}
