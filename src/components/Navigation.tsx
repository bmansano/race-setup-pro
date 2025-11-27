import { User, Gamepad2, Settings, Menu, LogOut } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const getUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserName(user.user_metadata?.name || user.email?.split('@')[0] || "Usuário");
      }
    };
    getUserData();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logout realizado",
      description: "Até breve!",
    });
    navigate("/auth");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Settings className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">Apex Engineer</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            <NavLink
              to="/"
              end
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-muted"
              activeClassName="text-foreground bg-muted"
            >
              <Gamepad2 className="h-4 w-4 inline mr-2" />
              Simuladores
            </NavLink>
            <NavLink
              to="/profile"
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-muted"
              activeClassName="text-foreground bg-muted"
            >
              <User className="h-4 w-4 inline mr-2" />
              Perfil
            </NavLink>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {userName && (
            <span className="hidden sm:inline text-sm text-muted-foreground">
              Olá, {userName}
            </span>
          )}
          <Button variant="ghost" size="icon" onClick={handleLogout} title="Sair">
            <LogOut className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col gap-2 mt-8">
                <NavLink
                  to="/"
                  end
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-muted"
                  activeClassName="text-foreground bg-muted"
                >
                  <Gamepad2 className="h-4 w-4 inline mr-2" />
                  Simuladores
                </NavLink>
                <NavLink
                  to="/profile"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-muted"
                  activeClassName="text-foreground bg-muted"
                >
                  <User className="h-4 w-4 inline mr-2" />
                  Perfil
                </NavLink>
                <Button 
                  variant="ghost" 
                  className="justify-start px-4 py-3"
                  onClick={() => {
                    setOpen(false);
                    handleLogout();
                  }}
                >
                  <LogOut className="h-4 w-4 inline mr-2" />
                  Sair
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
