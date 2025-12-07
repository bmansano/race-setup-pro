import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { History, RotateCcw, Eye } from "lucide-react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

interface Version {
  id: string;
  version_number: number;
  configuration: any;
  comment: string | null;
  track_temp: string | null;
  lap_time: string | null;
  created_at: string;
}

interface SetupVersionHistoryProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  setupId: string;
  onRestore: (configuration: any) => void;
  onCompare?: (v1: Version, v2: Version) => void;
}

export const SetupVersionHistory = ({ 
  open, 
  onOpenChange, 
  setupId, 
  onRestore,
  onCompare 
}: SetupVersionHistoryProps) => {
  const [versions, setVersions] = useState<Version[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState<Version | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (open && setupId) {
      loadVersions();
    }
  }, [open, setupId]);

  const loadVersions = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("setup_versions")
        .select("*")
        .eq("setup_id", setupId)
        .order("version_number", { ascending: false });

      if (error) throw error;
      setVersions(data || []);
    } catch (error) {
      console.error("Error loading versions:", error);
      toast({
        title: "Error",
        description: "Could not load version history.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRestore = async (version: Version) => {
    try {
      onRestore({
        ...version.configuration,
        trackTemp: version.track_temp,
        lapTime: version.lap_time,
        comment: version.comment,
      });
      
      toast({
        title: "Version restored",
        description: `Setup restored to version ${version.version_number}`,
      });
      
      onOpenChange(false);
    } catch (error) {
      console.error("Error restoring version:", error);
      toast({
        title: "Error",
        description: "Could not restore this version.",
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MM/dd/yyyy 'at' HH:mm", { locale: enUS });
  };

  const getChangeSummary = (config: any) => {
    const categories = Object.keys(config).filter(key => 
      typeof config[key] === 'object' && config[key] !== null
    );
    return `${categories.length} categories configured`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Version History
          </DialogTitle>
          <DialogDescription>
            View, compare and restore previous versions of your setup
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 pr-4">
          {isLoading ? (
            <div className="flex items-center justify-center h-32">
              <p className="text-muted-foreground">Loading history...</p>
            </div>
          ) : versions.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-32 gap-2">
              <History className="h-12 w-12 text-muted-foreground/50" />
              <p className="text-muted-foreground">No previous versions found</p>
              <p className="text-sm text-muted-foreground">
                Versions are saved automatically when you modify the setup
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {versions.map((version, index) => (
                <Card key={version.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-base flex items-center gap-2">
                          Version {version.version_number}
                          {index === 0 && (
                            <Badge variant="secondary">Latest</Badge>
                          )}
                        </CardTitle>
                        <CardDescription>
                          {formatDate(version.created_at)}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedVersion(
                            selectedVersion?.id === version.id ? null : version
                          )}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleRestore(version)}
                        >
                          <RotateCcw className="h-4 w-4 mr-2" />
                          Restore
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  
                  {selectedVersion?.id === version.id && (
                    <CardContent className="space-y-2 text-sm">
                      <div className="grid grid-cols-2 gap-4">
                        {version.track_temp && (
                          <div>
                            <span className="text-muted-foreground">Temperature:</span>
                            <span className="ml-2 font-medium">{version.track_temp}</span>
                          </div>
                        )}
                        {version.lap_time && (
                          <div>
                            <span className="text-muted-foreground">Lap time:</span>
                            <span className="ml-2 font-medium">{version.lap_time}</span>
                          </div>
                        )}
                      </div>
                      
                      {version.comment && (
                        <div className="pt-2 border-t">
                          <p className="text-muted-foreground mb-1">Comment:</p>
                          <p className="text-foreground">{version.comment}</p>
                        </div>
                      )}
                      
                      <div className="pt-2 border-t">
                        <p className="text-muted-foreground">{getChangeSummary(version.configuration)}</p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
