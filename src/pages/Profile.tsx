import { useState, useEffect } from "react";
import { Camera, Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import defaultEngineer from "@/assets/default-engineer.jpg";
import defaultDriver from "@/assets/default-driver.jpg";

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profileType, setProfileType] = useState<"engineer" | "driver">("engineer");
  const [teamName, setTeamName] = useState("");
  const [engineerName, setEngineerName] = useState("");
  const [driverName, setDriverName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [userId, setUserId] = useState<string | null>(null);
  const [profileExists, setProfileExists] = useState(false);

  const defaultAvatar = profileType === "engineer" ? defaultEngineer : defaultDriver;

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setLoading(false);
        return;
      }
      
      setUserId(user.id);

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (error) {
        console.error("Error loading profile:", error);
        toast.error("Erro ao carregar perfil");
        setLoading(false);
        return;
      }

      if (data) {
        setProfileExists(true);
        setTeamName(data.team_name || "");
        setEngineerName(data.engineer_name || "");
        setDriverName(data.driver_name || "");
        setProfileType((data.profile_type as "engineer" | "driver") || "engineer");
        setAvatarUrl(data.avatar_url || "");
      }
    } catch (error) {
      console.error("Error loading profile:", error);
      toast.error("Erro ao carregar perfil");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!userId) {
      toast.error("Você precisa estar logado para salvar o perfil");
      return;
    }

    setSaving(true);
    try {
      const profileData = {
        user_id: userId,
        team_name: teamName,
        engineer_name: engineerName,
        driver_name: driverName,
        profile_type: profileType,
        avatar_url: avatarUrl || null,
      };

      if (profileExists) {
        const { error } = await supabase
          .from("profiles")
          .update(profileData)
          .eq("user_id", userId);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("profiles")
          .insert(profileData);

        if (error) throw error;
        setProfileExists(true);
      }

      toast.success("Perfil atualizado com sucesso!");
    } catch (error) {
      console.error("Error saving profile:", error);
      toast.error("Erro ao salvar perfil");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="container max-w-4xl py-8 flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container max-w-4xl py-4 sm:py-8 px-4 space-y-6 sm:space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Configurações de Perfil</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Gerencie as informações da sua equipe e perfil profissional
        </p>
      </div>

      <Card className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="h-24 w-24 sm:h-32 sm:w-32 ring-2 ring-border">
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
                className={`text-xs sm:text-sm ${profileType === "engineer" ? "bg-muted" : ""}`}
              >
                Engenheiro
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setProfileType("driver")}
                className={`text-xs sm:text-sm ${profileType === "driver" ? "bg-muted" : ""}`}
              >
                Piloto
              </Button>
            </div>

            <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm">
              <Camera className="h-4 w-4 mr-2" />
              Upload Foto
            </Button>
          </div>

          <div className="flex-1 space-y-3 sm:space-y-4">
            <div className="space-y-2">
              <Label htmlFor="team" className="text-xs sm:text-sm">Nome da Equipe</Label>
              <Input
                id="team"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Digite o nome da equipe"
                className="text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="engineer" className="text-xs sm:text-sm">Nome do Engenheiro</Label>
              <Input
                id="engineer"
                value={engineerName}
                onChange={(e) => setEngineerName(e.target.value)}
                placeholder="Digite o nome do engenheiro"
                className="text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="driver" className="text-xs sm:text-sm">Nome do Piloto</Label>
              <Input
                id="driver"
                value={driverName}
                onChange={(e) => setDriverName(e.target.value)}
                placeholder="Digite o nome do piloto"
                className="text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t">
          <Button onClick={handleSave} disabled={saving} className="shadow-racing text-sm">
            {saving ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Save className="h-4 w-4 mr-2" />
            )}
            {saving ? "Salvando..." : "Salvar Alterações"}
          </Button>
        </div>
      </Card>

      <Card className="p-4 sm:p-6 bg-gradient-carbon border-primary/20">
        <h3 className="text-base sm:text-lg font-semibold mb-2">Sobre o Apex Engineer</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Sistema profissional de gerenciamento de setups para simuladores de corrida com 
          engenheiro de IA. Compatível com iRacing, Automobilista 2, Assetto Corsa e mais.
        </p>
      </Card>
    </div>
  );
}