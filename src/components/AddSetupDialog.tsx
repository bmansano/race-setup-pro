import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const setupFormSchema = z.object({
  simulator: z.string().min(1, "Selecione o simulador"),
  car: z.string().min(1, "Digite o nome do carro"),
  track: z.string().min(1, "Digite o nome da pista"),
  condition: z.enum(["dry", "wet"]),
  // Aero
  frontWing: z.string().optional(),
  rearWing: z.string().optional(),
  diffuserHeight: z.string().optional(),
  rake: z.string().optional(),
  // Suspension
  frontSpring: z.string().optional(),
  rearSpring: z.string().optional(),
  frontBump: z.string().optional(),
  rearBump: z.string().optional(),
  // Tires
  tirePressureFL: z.string().optional(),
  tirePressureFR: z.string().optional(),
  tirePressureRL: z.string().optional(),
  tirePressureRR: z.string().optional(),
  // Brake
  brakeBias: z.string().optional(),
  brakePressure: z.string().optional(),
  // FFB
  ffbStrength: z.string().optional(),
  ffbDamping: z.string().optional(),
  ffbKerb: z.string().optional(),
  ffbRoad: z.string().optional(),
});

type SetupFormValues = z.infer<typeof setupFormSchema>;

const simulators = [
  "iRacing",
  "Automobilista 2",
  "Project Motor Racing",
  "Assetto Corsa EVO",
  "Assetto Corsa",
  "Assetto Corsa Rally",
  "Assetto Corsa Competizione",
  "RaceRoom",
];

export function AddSetupDialog() {
  const [open, setOpen] = useState(false);

  const form = useForm<SetupFormValues>({
    resolver: zodResolver(setupFormSchema),
    defaultValues: {
      condition: "dry",
    },
  });

  function onSubmit(data: SetupFormValues) {
    console.log(data);
    toast.success("Setup criado com sucesso!");
    setOpen(false);
    form.reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 shadow-racing">
          <Plus className="h-4 w-4" />
          Adicionar Novo Setup
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Setup</DialogTitle>
          <DialogDescription>
            Configure todos os detalhes do setup do carro para o simulador selecionado
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Basic Info */}
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="simulator"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Simulador</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o simulador" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {simulators.map((sim) => (
                          <SelectItem key={sim} value={sim}>
                            {sim}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="car"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Carro</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Ferrari 488 GT3" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="track"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pista</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Spa-Francorchamps" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="condition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Condição da Pista</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="dry">Pista Seca</SelectItem>
                        <SelectItem value="wet">Pista Molhada</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Setup Configurations */}
            <Tabs defaultValue="aero" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="aero">Aero</TabsTrigger>
                <TabsTrigger value="suspension">Suspensão</TabsTrigger>
                <TabsTrigger value="tires">Pneus</TabsTrigger>
                <TabsTrigger value="brake">Freios</TabsTrigger>
                <TabsTrigger value="ffb">FFB</TabsTrigger>
              </TabsList>

              <TabsContent value="aero" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="frontWing"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Asa Dianteira</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 4 (de 11)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="rearWing"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Asa Traseira</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 7 (de 11)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="diffuserHeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Altura do Diffuser</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 65mm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="rake"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rake</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: +8mm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>

              <TabsContent value="suspension" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="frontSpring"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mola Dianteira</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 95,000 N/m" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="rearSpring"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mola Traseira</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 88,000 N/m" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="frontBump"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amortecedor Diant. (Bump)</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 6 clicks" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="rearBump"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amortecedor Tras. (Bump)</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 5 clicks" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>

              <TabsContent value="tires" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="tirePressureFL"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pressão Diant. Esq.</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 27.8 PSI" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tirePressureFR"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pressão Diant. Dir.</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 27.8 PSI" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tirePressureRL"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pressão Tras. Esq.</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 26.5 PSI" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tirePressureRR"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pressão Tras. Dir.</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 26.5 PSI" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>

              <TabsContent value="brake" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="brakeBias"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bias</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 56.5%" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="brakePressure"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pressão do Sistema</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 85%" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>

              <TabsContent value="ffb" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="ffbStrength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Força Geral</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 75%" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ffbDamping"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Damping</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 15%" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ffbKerb"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kerb Effects</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 60%" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ffbRoad"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Road Effects</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 45%" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex gap-3 justify-end">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit" className="shadow-racing">
                Criar Setup
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
