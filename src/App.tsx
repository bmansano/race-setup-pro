import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import Profile from "./pages/Profile";
import Simulators from "./pages/Simulators";
import SetupDetails from "./pages/SetupDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/race-setup-pro">
          <div className="min-h-screen bg-background">
                   <div style={{padding: '20px', backgroundColor: '#FF0000', color: '#FFFFFF', fontSize: '24px'}}>TEST - RaceSetup App Loaded!</div>
            <Navigation />
          <Routes>
            <Route path="/" element={<Simulators />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/setup/:id" element={<SetupDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
