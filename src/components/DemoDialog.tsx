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
    title: "1. Create a new setup",
    description: "Select the desired simulator, car, and track. The system automatically loads an optimized base setup to get you started.",
    icon: Settings,
  },
  {
    title: "2. Chat with the engineer",
    description: "Describe the car's behavior: understeer, oversteer, lack of traction. The AI engineer analyzes and suggests specific adjustments.",
    icon: MessageSquare,
  },
  {
    title: "3. Apply the adjustments",
    description: "With one click, the engineer's suggestions are applied directly to your setup. Compare versions and revert if needed.",
    icon: Wrench,
  },
  {
    title: "4. Test and iterate",
    description: "Go back to the track, test the changes, and repeat the process. The version history keeps all your configurations saved.",
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
          <DialogTitle>How Apex Engineer Works</DialogTitle>
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
            Previous
          </Button>
          
          {currentStep === demoSteps.length - 1 ? (
            <Button onClick={() => onOpenChange(false)}>
              Get Started
            </Button>
          ) : (
            <Button onClick={nextStep}>
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
