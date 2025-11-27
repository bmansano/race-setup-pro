import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Settings, MessageSquare, Wrench, CheckCircle } from "lucide-react";

interface DemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const demoSteps = [
  {
    title: "1. Crie um novo setup",
    description: "Selecione o simulador, carro e pista desejados. O sistema carrega automaticamente um setup base otimizado para começar.",
    icon: Settings,
  },
  {
    title: "2. Converse com o engenheiro",
    description: "Descreva o comportamento do carro: subesterço, sobresterço, falta de tração. O engenheiro de IA analisa e sugere ajustes específicos.",
    icon: MessageSquare,
  },
  {
    title: "3. Aplique os ajustes",
    description: "Com um clique, as sugestões do engenheiro são aplicadas diretamente no seu setup. Compare versões e reverta se necessário.",
    icon: Wrench,
  },
  {
    title: "4. Teste e itere",
    description: "Volte para a pista, teste as mudanças e repita o processo. O histórico de versões mantém todas as suas configurações salvas.",
    icon: CheckCircle,
  },
];

export function DemoDialog({ open, onOpenChange }: DemoDialogProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = demoSteps[currentStep];
  const StepIcon = step.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Como funciona o Apex Engineer</DialogTitle>
        </DialogHeader>
        
        <div className="py-8">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center">
              <StepIcon className="h-10 w-10 text-primary" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground max-w-sm">{step.description}</p>
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-4">
          {demoSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentStep 
                  ? "w-8 bg-primary" 
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Anterior
          </Button>
          
          {currentStep === demoSteps.length - 1 ? (
            <Button onClick={() => onOpenChange(false)}>
              Começar agora
            </Button>
          ) : (
            <Button onClick={nextStep}>
              Próximo
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
