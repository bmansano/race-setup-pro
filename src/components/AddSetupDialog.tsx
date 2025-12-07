import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { simulatorData } from "@/data/racing-data";
import { getSimulatorFields, getAvailableCategories } from "@/data/simulator-fields";
import { getBaselineSetup } from "@/data/baseline-setups";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

// List of all supported simulators (alphabetical order)
const SIMULATORS = [
  "Assetto Corsa Competizione",
  "Assetto Corsa EVO",
  "Assetto Corsa Rally",
  "Automobilista 2",
  "iRacing",
  "Le Mans Ultimate",
  "Project Motor Racing",
  "RaceRoom",
];

export function AddSetupDialog() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    simulator: "",
    car: "",
    track: "",
    condition: "",
  });

  // Dynamic configuration based on selected simulator
  const [configuration, setConfiguration] = useState<Record<string, Record<string, string>>>({});

  const selectedSimulator = formData.simulator;
  const availableCars = selectedSimulator ? simulatorData[selectedSimulator]?.cars || [] : [];
  const availableTracks = selectedSimulator ? simulatorData[selectedSimulator]?.tracks || [] : [];
  const availableCategories = selectedSimulator ? getAvailableCategories(selectedSimulator) : [];

  // Function to map baseline field names to simulator fields
  const mapBaselineToSimulatorFields = (
    baselineSetup: ReturnType<typeof getBaselineSetup>,
    simulatorFields: ReturnType<typeof getSimulatorFields>
  ): Record<string, Record<string, string>> => {
    const newConfig: Record<string, Record<string, string>> = {
      aero: {},
      suspension: {},
      tires: {},
      brakes: {},
      differential: {},
      electronics: {},
      drivetrain: {},
    };

    // Mapping of baseline field names to simulator field names
    const fieldMappings: Record<string, Record<string, string>> = {
      aero: {
        frontWing: 'frontWing',
        rearWing: 'rearWing',
        frontSplitter: 'frontSplitter',
        gurneyFlap: 'rearGurney',
        rake: 'rake',
        diffuserHeight: 'diffuserHeight',
      },
      suspension: {
        frontSpring: 'frontSpring',
        rearSpring: 'rearSpring',
        frontBump: 'frontBump',
        rearBump: 'rearBump',
        frontRebound: 'frontRebound',
        rearRebound: 'rearRebound',
        frontARB: 'frontARB',
        rearARB: 'rearARB',
        frontHeight: 'frontRideHeight',
        rearHeight: 'rearRideHeight',
        frontCamber: 'frontCamber',
        rearCamber: 'rearCamber',
        frontToe: 'frontToe',
        rearToe: 'rearToe',
        caster: 'caster',
      },
      tires: {
        frontLeftPressure: 'lfPressure',
        frontRightPressure: 'rfPressure',
        rearLeftPressure: 'lrPressure',
        rearRightPressure: 'rrPressure',
        frontCompound: 'tireCompound',
        rearCompound: 'tireCompound',
      },
      brake: {
        bias: 'brakeBias',
        systemPressure: 'brakePressure',
        frontDisc: 'brakeDiscType',
        rearDisc: 'brakeDiscType',
        frontPads: 'brakePadFront',
        rearPads: 'brakePadRear',
      },
      differential: {
        preload: 'preload',
        power: 'power',
        coast: 'coast',
        finalRatio: 'gearFinal',
      },
    };

    // For each baseline category, map values to simulator fields
    const categories = ['aero', 'suspension', 'tires', 'brakes', 'differential', 'electronics', 'drivetrain'] as const;
    
    // First initialize all simulator fields with empty values
    simulatorFields.aero.forEach(field => newConfig.aero[field.name] = "");
    simulatorFields.suspension.forEach(field => newConfig.suspension[field.name] = "");
    simulatorFields.tires.forEach(field => newConfig.tires[field.name] = "");
    simulatorFields.brakes.forEach(field => newConfig.brakes[field.name] = "");
    simulatorFields.differential.forEach(field => newConfig.differential[field.name] = "");
    if (simulatorFields.electronics) {
      simulatorFields.electronics.forEach(field => newConfig.electronics[field.name] = "");
    }
    if (simulatorFields.drivetrain) {
      simulatorFields.drivetrain.forEach(field => newConfig.drivetrain[field.name] = "");
    }

    // Map baseline aero values
    if (baselineSetup.aero) {
      Object.entries(baselineSetup.aero).forEach(([key, value]) => {
        if (value) {
          const mappedKey = fieldMappings.aero[key] || key;
          if (simulatorFields.aero.some(f => f.name === mappedKey)) {
            newConfig.aero[mappedKey] = value;
          }
        }
      });
    }

    // Map baseline suspension values
    if (baselineSetup.suspension) {
      Object.entries(baselineSetup.suspension).forEach(([key, value]) => {
        if (value) {
          const mappedKey = fieldMappings.suspension[key] || key;
          if (simulatorFields.suspension.some(f => f.name === mappedKey)) {
            newConfig.suspension[mappedKey] = value;
          }
        }
      });
    }

    // Map baseline tires values
    if (baselineSetup.tires) {
      Object.entries(baselineSetup.tires).forEach(([key, value]) => {
        if (value) {
          const mappedKey = fieldMappings.tires[key] || key;
          if (simulatorFields.tires.some(f => f.name === mappedKey)) {
            newConfig.tires[mappedKey] = value;
          }
        }
      });
    }

    // Map baseline brake values to brakes
    if (baselineSetup.brake) {
      Object.entries(baselineSetup.brake).forEach(([key, value]) => {
        if (value) {
          const mappedKey = fieldMappings.brake[key] || key;
          if (simulatorFields.brakes.some(f => f.name === mappedKey)) {
            newConfig.brakes[mappedKey] = value;
          }
        }
      });
    }

    // Map baseline differential values
    if (baselineSetup.differential) {
      Object.entries(baselineSetup.differential).forEach(([key, value]) => {
        if (value) {
          const mappedKey = fieldMappings.differential[key] || key;
          if (simulatorFields.differential.some(f => f.name === mappedKey)) {
            newConfig.differential[mappedKey] = value;
          } else if (mappedKey === 'gearFinal' && simulatorFields.drivetrain?.some(f => f.name === 'gearFinal')) {
            newConfig.drivetrain['gearFinal'] = value;
          }
        }
      });
    }

    return newConfig;
  };

  // Update configuration when simulator changes or when all required fields are filled
  useEffect(() => {
    const fields = getSimulatorFields(formData.simulator);
    
    if (formData.simulator && formData.car && formData.track && formData.condition) {
      // Get baseline setup based on simulator, car, track and condition
      const baselineSetup = getBaselineSetup(
        formData.simulator,
        formData.car,
        formData.track,
        formData.condition
      );

      const newConfig = mapBaselineToSimulatorFields(baselineSetup, fields);
      setConfiguration(newConfig);
      toast.success("Base configuration loaded automatically!");
    } else if (formData.simulator) {
      // If only simulator is selected, initialize empty fields
      const newConfig: Record<string, Record<string, string>> = {
        aero: {},
        suspension: {},
        tires: {},
        brakes: {},
        differential: {},
        electronics: {},
        drivetrain: {},
      };

      fields.aero.forEach(field => newConfig.aero[field.name] = "");
      fields.suspension.forEach(field => newConfig.suspension[field.name] = "");
      fields.tires.forEach(field => newConfig.tires[field.name] = "");
      fields.brakes.forEach(field => newConfig.brakes[field.name] = "");
      fields.differential.forEach(field => newConfig.differential[field.name] = "");
      if (fields.electronics) {
        fields.electronics.forEach(field => newConfig.electronics[field.name] = "");
      }
      if (fields.drivetrain) {
        fields.drivetrain.forEach(field => newConfig.drivetrain[field.name] = "");
      }

      setConfiguration(newConfig);
    }
  }, [formData.simulator, formData.car, formData.track, formData.condition]);

  const handleSubmit = async () => {
    if (!formData.name || !formData.simulator || !formData.car || !formData.track || !formData.condition) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error("You need to be logged in to create a setup");
        return;
      }

      let carImageUrl: string | null = null;

      // Check if there's an existing setup with the same car and simulator
      const { data: existingSetup } = await supabase
        .from("setups")
        .select("car_image_url")
        .eq("user_id", user.id)
        .eq("car", formData.car)
        .eq("simulator", formData.simulator)
        .not("car_image_url", "is", null)
        .limit(1)
        .maybeSingle();

      if (existingSetup?.car_image_url) {
        // Reuse existing car image
        carImageUrl = existingSetup.car_image_url;
        toast.success("Car image reused from existing setup!", { id: "car-image" });
      } else {
        // Generate new car image using AI
        toast.loading("Generating car image...", { id: "car-image" });
        const { data: imageData, error: imageError } = await supabase.functions.invoke("generate-car-image", {
          body: {
            car: formData.car,
            simulator: formData.simulator,
            condition: formData.condition,
          },
        });

        if (imageError) {
          console.error("Error generating car image:", imageError);
          toast.error("Error generating car image, but the setup will be created", { id: "car-image" });
        } else {
          carImageUrl = imageData?.imageUrl || null;
          toast.success("Car image generated!", { id: "car-image" });
        }
      }

      // Get car category from the selected car
      const selectedCar = availableCars.find(c => c.name === formData.car);
      const category = selectedCar?.category || "Other";

      const { data, error } = await supabase
        .from("setups")
        .insert({
          name: formData.name,
          simulator: formData.simulator,
          car: formData.car,
          track: formData.track,
          category: category,
          condition: formData.condition,
          configuration: configuration,
          user_id: user.id,
          car_image_url: carImageUrl,
        })
        .select()
        .single();

      if (error) throw error;

      toast.success("Setup created successfully!");
      setOpen(false);
      
      // Navigate to the new setup details page
      if (data) {
        navigate(`/setup/${data.id}`);
      }
    } catch (error) {
      console.error("Error creating setup:", error);
      toast.error("Error creating setup");
    } finally {
      setLoading(false);
    }
  };

  const renderCategoryTab = (categoryKey: string, categoryLabel: string) => {
    const fields = getSimulatorFields(formData.simulator);
    const categoryFields = fields[categoryKey as keyof typeof fields];
    
    if (!categoryFields || !Array.isArray(categoryFields) || categoryFields.length === 0) {
      return null;
    }

    return (
      <TabsContent value={categoryKey} className="space-y-4">
        <Card className="p-3 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {categoryFields.map((field) => (
              <div key={field.name}>
                <Label htmlFor={field.name} className="text-xs sm:text-sm">{field.label}</Label>
                <Input
                  id={field.name}
                  value={configuration[categoryKey]?.[field.name] || ""}
                  onChange={(e) => setConfiguration({
                    ...configuration,
                    [categoryKey]: { ...configuration[categoryKey], [field.name]: e.target.value }
                  })}
                  className="text-sm"
                />
              </div>
            ))}
          </div>
        </Card>
      </TabsContent>
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 shadow-racing text-xs sm:text-sm">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">Add New Setup</span>
          <span className="sm:hidden">New Setup</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] w-[95vw] sm:w-full">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">Add New Setup</DialogTitle>
          <DialogDescription className="text-xs sm:text-sm">
            Configure all the setup parameters for your car.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] sm:max-h-[65vh] pr-4">
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Setup Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="E.g., Spa Qualifying Setup"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="simulator">Simulator</Label>
              <Select
                value={formData.simulator}
                onValueChange={(value) =>
                  setFormData({ ...formData, simulator: value, car: "", track: "" })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select simulator" />
                </SelectTrigger>
                <SelectContent>
                  {SIMULATORS.map((sim) => (
                    <SelectItem key={sim} value={sim}>{sim}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="car">Car</Label>
              <Select
                value={formData.car}
                onValueChange={(value) => setFormData({ ...formData, car: value })}
                disabled={!selectedSimulator}
              >
                <SelectTrigger>
                  <SelectValue placeholder={selectedSimulator ? "Select car" : "Select a simulator first"} />
                </SelectTrigger>
                <SelectContent>
                  {availableCars.map((car) => (
                    <SelectItem key={car.id} value={car.name}>
                      {car.name} ({car.category})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="track">Track</Label>
              <Select
                value={formData.track}
                onValueChange={(value) => setFormData({ ...formData, track: value })}
                disabled={!selectedSimulator}
              >
                <SelectTrigger>
                  <SelectValue placeholder={selectedSimulator ? "Select track" : "Select a simulator first"} />
                </SelectTrigger>
                <SelectContent>
                  {availableTracks.map((track) => (
                    <SelectItem key={track.id} value={track.name}>
                      {track.name} ({track.country})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="condition">Track Condition</Label>
              <Select
                value={formData.condition}
                onValueChange={(value) => setFormData({ ...formData, condition: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dry">Dry Track</SelectItem>
                  <SelectItem value="wet">Wet Track</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {!formData.simulator && (
              <div className="text-center py-8 text-muted-foreground">
                Select a simulator to see the available fields
              </div>
            )}

            {formData.simulator && (
              <Tabs defaultValue="aero" className="w-full">
                <div className="overflow-x-auto -mx-4 px-4 pb-2">
                  <TabsList className={`inline-flex w-max min-w-full sm:w-full sm:grid ${availableCategories.length <= 5 ? 'sm:grid-cols-5' : 'sm:grid-cols-7'}`}>
                    <TabsTrigger value="aero" className="text-xs sm:text-sm px-2 sm:px-3">Aero</TabsTrigger>
                    <TabsTrigger value="suspension" className="text-xs sm:text-sm px-2 sm:px-3">Suspension</TabsTrigger>
                    <TabsTrigger value="tires" className="text-xs sm:text-sm px-2 sm:px-3">Tires</TabsTrigger>
                    <TabsTrigger value="brakes" className="text-xs sm:text-sm px-2 sm:px-3">Brakes</TabsTrigger>
                    <TabsTrigger value="differential" className="text-xs sm:text-sm px-2 sm:px-3">Differential</TabsTrigger>
                    {availableCategories.includes('electronics') && (
                      <TabsTrigger value="electronics" className="text-xs sm:text-sm px-2 sm:px-3">Electronics</TabsTrigger>
                    )}
                    {availableCategories.includes('drivetrain') && (
                      <TabsTrigger value="drivetrain" className="text-xs sm:text-sm px-2 sm:px-3">Drivetrain</TabsTrigger>
                    )}
                  </TabsList>
                </div>

                {renderCategoryTab('aero', 'Aero')}
                {renderCategoryTab('suspension', 'Suspension')}
                {renderCategoryTab('tires', 'Tires')}
                {renderCategoryTab('brakes', 'Brakes')}
                {renderCategoryTab('differential', 'Differential')}
                {availableCategories.includes('electronics') && renderCategoryTab('electronics', 'Electronics')}
                {availableCategories.includes('drivetrain') && renderCategoryTab('drivetrain', 'Drivetrain')}
              </Tabs>
            )}
          </div>
        </ScrollArea>

        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Creating..." : "Create Setup"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
