import { useState } from "react";
import { Camera, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "@/hooks/use-toast";
import defaultEngineer from "@/assets/default-engineer.jpg";
import defaultDriver from "@/assets/default-driver.jpg";

export default function Profile() {
  const [profileType, setProfileType] = useState<"engineer" | "driver">("engineer");
  const [teamName, setTeamName] = useState("Veloce Racing Team");
  const [engineerName, setEngineerName] = useState("Marco Silva");
  const [driverName, setDriverName] = useState("João Santos");
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  const defaultAvatar = profileType === "engineer" ? defaultEngineer : defaultDriver;

  const handleSave = () => {
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram salvas com sucesso.",
    });
  };

  return (
    <div className="container max-w-4xl py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Configurações de Perfil</h1>
        <p className="text-muted-foreground">
          Gerencie as informações da sua equipe e perfil profissional
        </p>
      </div>

      <Card className="p-6 space-y-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="h-32 w-32 ring-2 ring-border">
              <AvatarImage src={avatarUrl || defaultAvatar} alt="Profile" />
              <AvatarFallback>
                {profileType === "engineer" ? "EN" : "DR"}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setProfileType("engineer")}
                className={profileType === "engineer" ? "bg-muted" : ""}
              >
                Engenheiro
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setProfileType("driver")}
                className={profileType === "driver" ? "bg-muted" : ""}
              >
                Piloto
              </Button>
            </div>

            <Button variant="outline" size="sm" className="w-full">
              <Camera className="h-4 w-4 mr-2" />
              Upload Foto
            </Button>
          </div>

          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="team">Nome da Equipe</Label>
              <Input
                id="team"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Digite o nome da equipe"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="engineer">Nome do Engenheiro</Label>
              <Input
                id="engineer"
                value={engineerName}
                onChange={(e) => setEngineerName(e.target.value)}
                placeholder="Digite o nome do engenheiro"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="driver">Nome do Piloto</Label>
              <Input
                id="driver"
                value={driverName}
                onChange={(e) => setDriverName(e.target.value)}
                placeholder="Digite o nome do piloto"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t">
          <Button onClick={handleSave} className="shadow-racing">
            <Save className="h-4 w-4 mr-2" />
            Salvar Alterações
          </Button>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-carbon border-primary/20">
        <h3 className="text-lg font-semibold mb-2">Sobre o RaceSetup</h3>
        <p className="text-sm text-muted-foreground">
          Sistema profissional de gerenciamento de setups para simuladores de corrida.
          Compatível com iRacing, Automobilista 2, Assetto Corsa e mais.
        </p>
      </Card>
    </div>
  );
}
