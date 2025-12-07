import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { toast as sonnerToast } from "sonner";
import { Loader2, Send, CheckCircle } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  suggestedChanges?: any;
}

interface PerformanceEngineerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  setup: any;
  onApplySuggestions?: (changes: any) => void;
}

export const PerformanceEngineerDialog = ({ open, onOpenChange, setup, onApplySuggestions }: PerformanceEngineerDialogProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasInitialAnalysis, setHasInitialAnalysis] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (open && !hasInitialAnalysis && messages.length === 0) {
      handleInitialAnalysis();
      setHasInitialAnalysis(true);
    }
    
    if (!open) {
      setHasInitialAnalysis(false);
      setMessages([]);
    }
  }, [open]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("performance-engineer", {
        body: {
          setup,
          userFeedback: input,
          conversationHistory: messages,
        },
      });

      if (error) throw error;

      if (data?.error) {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive",
        });
        setMessages(prev => prev.slice(0, -1));
        return;
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.suggestion,
        suggestedChanges: data.suggestedChanges,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error calling performance engineer:", error);
      toast({
        title: "Error",
        description: "Could not get suggestions from the performance engineer.",
        variant: "destructive",
      });
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  const handleInitialAnalysis = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("performance-engineer", {
        body: {
          setup,
          userFeedback: null,
          conversationHistory: [],
        },
      });

      if (error) throw error;

      if (data?.error) {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive",
        });
        return;
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.suggestion,
        suggestedChanges: data.suggestedChanges,
      };

      setMessages([assistantMessage]);
    } catch (error) {
      console.error("Error getting initial analysis:", error);
      toast({
        title: "Error",
        description: "Could not get initial analysis.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl h-[85vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4 shrink-0">
          <DialogTitle>Performance Engineer</DialogTitle>
          <DialogDescription>
            Chat with the AI engineer to optimize your setup based on the car's behavior
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 px-6 overflow-y-auto">
          {messages.length === 0 && isLoading ? (
            <div className="flex flex-col items-center justify-center h-64 gap-4">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-muted-foreground text-center">
                Analyzing setup and generating initial suggestion...
              </p>
            </div>
          ) : (
            <div className="space-y-4 py-4">
              {messages.map((message, index) => (
                <div key={index} className="space-y-2">
                  <div
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                  {message.role === "assistant" && message.suggestedChanges && onApplySuggestions && (
                    <div className="flex justify-start">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          onApplySuggestions(message.suggestedChanges);
                          sonnerToast.success("Suggestions applied to setup");
                        }}
                        className="ml-2"
                      >
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Apply Suggestions
                      </Button>
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg p-4">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex gap-2 p-6 border-t shrink-0">
          <Textarea
            placeholder="Describe the car's behavior (e.g., 'The car is understeering on corner entry')"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            className="min-h-[80px]"
            disabled={isLoading}
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={isLoading || !input.trim()}
            size="icon"
            className="h-[80px] w-[80px]"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
