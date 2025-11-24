import { User, Gamepad2, Settings, Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Settings className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">RaceSetup</span>
          </div>
          
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
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
