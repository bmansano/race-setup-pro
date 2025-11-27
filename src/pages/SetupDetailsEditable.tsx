import { supabase } from "@/integrations/supabase/client";
import { useNavigate, useParams } from "react-router-dom";
import { SetupVersionHistory } from "@/components/SetupVersionHistory";
import { PerformanceEngineerDialog } from "@/components/PerformanceEngineerDialog";
import { useState, useEffect } from "react";
import { ArrowLeft, Save, Trash2, ImagePlus } from "lucide-react";
import { getSimulatorFields } from "@/data/simulator-fields";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import nascarDry from "@/assets/nascar-camry-dry.jpg";
import nascarWet from "@/assets/nascar-camry-wet.jpg";
import { toast } from "sonner";
import { Sparkles, History } from "lucide-react";

export default function SetupDetailsEditable() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [engineerDialogOpen, setEngineerDialogOpen] = useState(false);
  const [versionHistoryOpen, setVersionHistoryOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const [loading, setLoading] = useState(true);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [setupName, setSetupName] = useState("");
  const [carImageUrl, setCarImageUrl] = useState<string | null>(null);
  
  const [setupData, setSetupData] = useState<any>(null);

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
        setSetupName(data.name);
        setComment(data.comment || "");
        setCarImageUrl(data.car_image_url || null);
        setSetupData({
          car: data.car,
          track: data.track,
          category: data.category,
          simulator: data.simulator,
          condition: data.condition,
          trackTemp: data.track_temp || "",
          lapTime: data.lap_time || "",
          configuration: data.configuration || {},
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
    if (!id || !setupData) return;
    try {
      const { error } = await supabase
        .from("setups")
        .update({
          name: setupName,
          condition: setupData.condition,
          track_temp: setupData.trackTemp,
          lap_time: setupData.lapTime,
          comment: comment,
          configuration: setupData.configuration,
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

  const handleDeleteSetup = async () => {
    if (!id) return;
    
    if (deleteConfirmation.trim().toLowerCase() !== setupName.trim().toLowerCase()) {
      toast.error("O nome digitado não corresponde ao nome do setup");
      return;
    }

    try {
      const { error } = await supabase
        .from("setups")
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast.success("Setup excluído com sucesso!");
      setDeleteDialogOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Erro ao excluir setup:", error);
      toast.error("Erro ao excluir setup");
    } finally {
      setDeleteConfirmation("");
    }
  };

  const handleRestoreVersion = (configuration: any) => {
    if (setupData) {
      setSetupData({ ...setupData, configuration });
      toast.success("Versão restaurada com sucesso!");
    }
  };

  const updateSetupData = (category: string, field: string, value: string) => {
    if (!setupData) return;
    
    setSetupData((prev: any) => ({
      ...prev,
      configuration: {
        ...prev.configuration,
        [category]: {
          ...prev.configuration[category],
          [field]: value,
        },
      },
    }));
  };

  const handleApplySuggestions = (changes: any) => {
    if (!setupData) return;
    
    setSetupData((prev: any) => {
      const updated = { ...prev };
      
      Object.keys(changes).forEach(key => {
        if (key === 'trackTemp' || key === 'lapTime') {
          updated[key] = changes[key] || prev[key];
        } else if (typeof changes[key] === 'object' && changes[key] !== null) {
          updated.configuration[key] = {
            ...(prev.configuration[key] || {}),
            ...changes[key]
          };
        }
      });
      
      return updated;
    });
  };

  const handleGenerateImage = async () => {
    if (!setupData) return;
    
    setIsGeneratingImage(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-car-image', {
        body: { 
          car: setupData.car,
          simulator: setupData.simulator,
          condition: setupData.condition
        }
      });

      if (error) throw error;

      if (data?.imageUrl) {
        const { error: updateError } = await supabase
          .from('setups')
          .update({ car_image_url: data.imageUrl })
          .eq('id', id);

        if (updateError) throw updateError;

        setCarImageUrl(data.imageUrl);
        toast.success("Imagem do carro gerada com sucesso!");
      }
    } catch (error) {
      console.error('Erro ao gerar imagem:', error);
      toast.error("Erro ao gerar imagem do carro");
    } finally {
      setIsGeneratingImage(false);
    }
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

  if (!setupData) {
    return (
      <div className="container max-w-6xl py-8">
        <div className="text-center py-12 text-muted-foreground">
          Setup não encontrado
        </div>
      </div>
    );
  }

  const setupImage = carImageUrl 
    ? carImageUrl
    : setupData.car.includes("Camry") 
      ? (setupData.condition === "wet" ? nascarWet : nascarDry)
      : (setupData.condition === "wet" ? car2 : car1);

  return (
    <div className="container max-w-6xl py-8 space-y-6">
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar para Setups
        </Button>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={() => setDeleteDialogOpen(true)} 
            className="gap-2 text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-4 w-4" />
            Excluir
          </Button>
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
          <img src={setupImage} alt={setupData.car} className="w-full h-full object-cover" />
        </Card>

        <Card className="p-6 space-y-4">
          <div>
            <div className="space-y-3">
              <div>
                <Label className="text-xs text-muted-foreground mb-1">Nome do Setup</Label>
                <div className="flex gap-2 items-start">
                  <Input
                    value={setupName}
                    onChange={(e) => setSetupName(e.target.value)}
                    className="text-2xl font-bold h-auto py-2 border-0 pl-2 pr-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={handleGenerateImage}
                    disabled={isGeneratingImage}
                    title="Gerar Imagem do Carro"
                    className="shrink-0"
                  >
                    <ImagePlus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-lg mt-2 font-normal">{setupData.car}</p>
              </div>
              <p className="text-muted-foreground">{setupData.track}</p>
              <div className="flex flex-wrap gap-2">
                <Badge 
                  variant={setupData.condition === "wet" ? "secondary" : "default"}
                  className="whitespace-nowrap"
                >
                  {setupData.condition === "dry" ? "Pista Seca" : "Pista Molhada"}
                </Badge>
                <Badge variant="outline" className="whitespace-nowrap">{setupData.category}</Badge>
              </div>
            </div>
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
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Condição da Pista:</span>
              <select
                value={setupData.condition}
                onChange={(e) => setSetupData({ ...setupData, condition: e.target.value })}
                className="h-7 px-2 border rounded text-sm bg-background"
              >
                <option value="dry">Pista Seca</option>
                <option value="wet">Pista Molhada</option>
              </select>
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

      <Tabs defaultValue="aero" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="aero">Aero</TabsTrigger>
          <TabsTrigger value="suspension">Suspension</TabsTrigger>
          <TabsTrigger value="tires">Tires</TabsTrigger>
          <TabsTrigger value="brakes">Brakes</TabsTrigger>
          <TabsTrigger value="differential">Differential</TabsTrigger>
        </TabsList>

        {setupData && (
          <>
            <TabsContent value="aero" className="space-y-4">
              <Card className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {getSimulatorFields(setupData.simulator).aero.map((field) => (
                    <div key={field.name}>
                      <Label htmlFor={field.name}>{field.label}</Label>
                      <Input
                        id={field.name}
                        value={(setupData.configuration.aero as Record<string, string>)?.[field.name] || ""}
                        onChange={(e) => updateSetupData('aero', field.name, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="suspension" className="space-y-4">
              <Card className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {getSimulatorFields(setupData.simulator).suspension.map((field) => (
                    <div key={field.name}>
                      <Label htmlFor={field.name}>{field.label}</Label>
                      <Input
                        id={field.name}
                        value={(setupData.configuration.suspension as Record<string, string>)?.[field.name] || ""}
                        onChange={(e) => updateSetupData('suspension', field.name, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="tires" className="space-y-4">
              <Card className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {getSimulatorFields(setupData.simulator).tires.map((field) => (
                    <div key={field.name}>
                      <Label htmlFor={field.name}>{field.label}</Label>
                      <Input
                        id={field.name}
                        value={(setupData.configuration.tires as Record<string, string>)?.[field.name] || ""}
                        onChange={(e) => updateSetupData('tires', field.name, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="brakes" className="space-y-4">
              <Card className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {getSimulatorFields(setupData.simulator).brakes.map((field) => (
                    <div key={field.name}>
                      <Label htmlFor={field.name}>{field.label}</Label>
                      <Input
                        id={field.name}
                        value={(setupData.configuration.brakes as Record<string, string>)?.[field.name] || ""}
                        onChange={(e) => updateSetupData('brakes', field.name, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="differential" className="space-y-4">
              <Card className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {getSimulatorFields(setupData.simulator).differential.map((field) => (
                    <div key={field.name}>
                      <Label htmlFor={field.name}>{field.label}</Label>
                      <Input
                        id={field.name}
                        value={(setupData.configuration.differential as Record<string, string>)?.[field.name] || ""}
                        onChange={(e) => updateSetupData('differential', field.name, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </>
        )}
      </Tabs>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Comentários e Notas</h3>
        <Textarea
          placeholder="Adicione observações sobre este setup..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[120px]"
        />
      </Card>

      <PerformanceEngineerDialog
        open={engineerDialogOpen}
        onOpenChange={setEngineerDialogOpen}
        setup={setupData}
        onApplySuggestions={handleApplySuggestions}
      />

      <SetupVersionHistory
        open={versionHistoryOpen}
        onOpenChange={setVersionHistoryOpen}
        setupId={id || ""}
        onRestore={handleRestoreVersion}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não pode ser desfeita. Para confirmar, digite o nome do setup: <strong>{setupName}</strong>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Input
            placeholder="Digite o nome do setup"
            value={deleteConfirmation}
            onChange={(e) => setDeleteConfirmation(e.target.value)}
          />
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDeleteConfirmation("")}>Cancelar</AlertDialogCancel>
            <Button
              variant="destructive"
              onClick={handleDeleteSetup}
              disabled={deleteConfirmation.trim().toLowerCase() !== setupName.trim().toLowerCase()}
            >
              Excluir
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
