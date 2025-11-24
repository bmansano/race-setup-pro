import { ArrowLeft, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import car1 from "@/assets/car-1.jpg";

export default function SetupDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container max-w-6xl py-8 space-y-6">
      <Button variant="ghost" onClick={() => navigate("/simulators")} className="mb-4">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar para Setups
      </Button>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <img src={car1} alt="Ferrari 488 GT3" className="w-full aspect-video object-cover" />
        </Card>

        <Card className="p-6 space-y-4">
          <div>
            <div className="flex items-start justify-between mb-2">
              <h1 className="text-2xl font-bold">Ferrari 488 GT3</h1>
              <Badge>Pista Seca</Badge>
            </div>
            <p className="text-muted-foreground">Spa-Francorchamps</p>
          </div>

          <Separator />

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Simulador:</span>
              <span className="font-medium">iRacing</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Categoria:</span>
              <span className="font-medium">GT3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Temperatura Pista:</span>
              <span className="font-medium">28°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tempo de Volta:</span>
              <span className="font-medium">2:17.543</span>
            </div>
          </div>

          <Button className="w-full shadow-racing" onClick={handleCopy}>
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Setup Copiado
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                Copiar Setup Completo
              </>
            )}
          </Button>
        </Card>
      </div>

      <Tabs defaultValue="aero" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="aero">Aero</TabsTrigger>
          <TabsTrigger value="suspension">Suspensão</TabsTrigger>
          <TabsTrigger value="tires">Pneus</TabsTrigger>
          <TabsTrigger value="brake">Freios</TabsTrigger>
          <TabsTrigger value="ffb">FFB</TabsTrigger>
        </TabsList>

        <TabsContent value="aero" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Configurações Aerodinâmicas</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Asa Dianteira</Label>
                <Value>4 (de 11)</Value>
              </div>
              <div className="space-y-2">
                <Label>Asa Traseira</Label>
                <Value>7 (de 11)</Value>
              </div>
              <div className="space-y-2">
                <Label>Altura do Diffuser</Label>
                <Value>65mm</Value>
              </div>
              <div className="space-y-2">
                <Label>Rake</Label>
                <Value>+8mm</Value>
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
                <Value>95,000 N/m</Value>
              </div>
              <div className="space-y-2">
                <Label>Mola Traseira</Label>
                <Value>88,000 N/m</Value>
              </div>
              <div className="space-y-2">
                <Label>Amortecedor Diant. (Bump)</Label>
                <Value>6 clicks</Value>
              </div>
              <div className="space-y-2">
                <Label>Amortecedor Tras. (Bump)</Label>
                <Value>5 clicks</Value>
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
                <Value>27.8 PSI</Value>
              </div>
              <div className="space-y-2">
                <Label>Pressão Diant. Dir.</Label>
                <Value>27.8 PSI</Value>
              </div>
              <div className="space-y-2">
                <Label>Pressão Tras. Esq.</Label>
                <Value>26.5 PSI</Value>
              </div>
              <div className="space-y-2">
                <Label>Pressão Tras. Dir.</Label>
                <Value>26.5 PSI</Value>
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
                <Value>56.5%</Value>
              </div>
              <div className="space-y-2">
                <Label>Pressão do Sistema</Label>
                <Value>85%</Value>
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
                <Value>75%</Value>
              </div>
              <div className="space-y-2">
                <Label>Damping</Label>
                <Value>15%</Value>
              </div>
              <div className="space-y-2">
                <Label>Kerb Effects</Label>
                <Value>60%</Value>
              </div>
              <div className="space-y-2">
                <Label>Road Effects</Label>
                <Value>45%</Value>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-sm text-muted-foreground">{children}</div>;
}

function Value({ children }: { children: React.ReactNode }) {
  return <div className="text-lg font-semibold">{children}</div>;
}
