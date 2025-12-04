import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DemoDialog } from "@/components/DemoDialog";
import { supabase } from "@/integrations/supabase/client";
import { 
  Settings, 
  Zap, 
  Brain, 
  History, 
  ChevronRight,
  Trophy,
  Timer,
  Gamepad2,
  Wrench,
  LogOut
} from "lucide-react";
import heroImage from "@/assets/hero-gt3.jpg";
import featureFerrari from "@/assets/feature-ferrari.jpg";
import featureEngineer from "@/assets/feature-engineer.jpg";
import featureVersionHistory from "@/assets/feature-version-history.jpg";
import alfaRomeoDtm from "@/assets/alfa-romeo-155-dtm.jpg";

const simulators = [
  "Assetto Corsa Competizione",
  "Assetto Corsa EVO",
  "Assetto Corsa Rally",
  "Automobilista 2",
  "iRacing",
  "Le Mans Ultimate",
  "Project Motor Racing",
  "RaceRoom",
];

export default function Landing() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const offset = (windowHeight / 2 - elementCenter) * 0.15;
        setParallaxOffset(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setIsLoggedIn(true);
        setUserName(user.user_metadata?.name || user.email?.split('@')[0] || "Usuário");
      }
    };
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setIsLoggedIn(true);
        setUserName(session.user.user_metadata?.name || session.user.email?.split('@')[0] || "Usuário");
      } else {
        setIsLoggedIn(false);
        setUserName(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setUserName(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container flex h-14 sm:h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight">Apex Engineer</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            {isLoggedIn ? (
              <>
                {userName && (
                  <span className="hidden md:inline text-sm text-muted-foreground">
                    Olá, {userName}
                  </span>
                )}
                <Link to="/simulators">
                  <Button variant="outline" size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
                    <span className="hidden sm:inline">Meus setups</span>
                    <span className="sm:hidden">Setups</span>
                  </Button>
                </Link>
                <Button variant="ghost" size="icon" onClick={handleLogout} title="Sair" className="h-8 w-8 sm:h-9 sm:w-9">
                  <LogOut className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth" className="hidden sm:block">
                  <Button variant="outline" size="sm">Entrar</Button>
                </Link>
                <Link to="/auth">
                  <Button size="sm" className="shadow-racing text-xs sm:text-sm px-3 sm:px-4">
                    <span className="hidden sm:inline">Começar grátis</span>
                    <span className="sm:hidden">Entrar</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        
        <div className="container relative z-10 text-center py-12 sm:py-20 px-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 sm:mb-8">
            <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Powered by AI</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Seu engenheiro de<br />performance virtual
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 px-2">
            Transforme seus tempos de volta com setups otimizados por inteligência artificial. 
            O parceiro perfeito para pilotos e engenheiros de sim racing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            <Link to="/auth" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-racing group">
                Começar agora
                <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              onClick={() => setDemoOpen(true)}
            >
              Ver demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { value: "8+", label: "Simuladores" },
              { value: "500+", label: "Carros suportados" },
              { value: "200+", label: "Pistas" },
              { value: "IA", label: "Engenheiro 24/7" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Tudo que você precisa para <span className="text-primary">vencer</span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Ferramentas profissionais de gerenciamento de setup combinadas com 
              inteligência artificial de última geração
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={featureEngineer} 
                  alt="AI Engineer" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Engenheiro de IA</h3>
                </div>
                <p className="text-muted-foreground">
                  Converse com nosso engenheiro virtual para receber sugestões 
                  personalizadas baseadas no comportamento do seu carro. Ajustes 
                  aplicados com um clique.
                </p>
              </div>
            </Card>

            {/* Feature 2 */}
            <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={featureFerrari} 
                  alt="Setup Management" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Wrench className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Gestão de setups</h3>
                </div>
                <p className="text-muted-foreground">
                  Organize todos os seus setups em um só lugar. Campos específicos 
                  para cada simulador e carro, exatamente como no jogo.
                </p>
              </div>
            </Card>

            {/* Feature 3 */}
            <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={featureVersionHistory} 
                  alt="Version History"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <History className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Histórico de versões</h3>
                </div>
                <p className="text-muted-foreground">
                  Nunca perca uma configuração que funcionou. Compare diferentes 
                  versões e volte atrás quando precisar.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-24">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Ganhe segundos,<br />
                <span className="text-primary">não milésimos</span>
              </h2>
              <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Enquanto outros perdem horas testando configurações aleatórias, 
                você terá um engenheiro de performance dedicado analisando seu 
                feedback e sugerindo ajustes precisos.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: Trophy,
                    title: "Setups competitivos",
                    description: "Configurações baseadas em dados reais dos melhores pilotos"
                  },
                  {
                    icon: Timer,
                    title: "Economia de tempo",
                    description: "Chegue ao setup ideal em minutos, não horas"
                  },
                  {
                    icon: Gamepad2,
                    title: "Multi-simulador",
                    description: "Suporte para os principais simuladores do mercado"
                  },
                ].map((benefit) => (
                  <div key={benefit.title} className="flex gap-3 sm:gap-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">{benefit.title}</h4>
                      <p className="text-muted-foreground text-xs sm:text-base">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative order-first lg:order-last" ref={parallaxRef}>
              <div className="aspect-square rounded-2xl overflow-hidden border border-border/50">
                <img 
                  src={alfaRomeoDtm} 
                  alt="Alfa Romeo 155 V6 TI DTM 1995" 
                  className="w-full h-full object-cover scale-110 transition-transform duration-100 ease-out"
                  style={{ transform: `scale(1.1) translateY(${parallaxOffset}px)` }}
                />
              </div>
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-card border border-border rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium">Setup otimizado</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">-1.2s no tempo de volta</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulators Section */}
      <section className="py-12 sm:py-24 bg-muted/30">
        <div className="container text-center px-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Compatível com seus <span className="text-primary">simuladores favoritos</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
            Suporte completo para os principais simuladores de corrida do mercado
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {simulators.map((name) => (
              <div 
                key={name}
                className="group flex items-center justify-center p-3 sm:p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300"
              >
                <span className="text-xs sm:text-sm md:text-base font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-24">
        <div className="container px-4">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/20 p-6 sm:p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Pronto para dominar as pistas?
              </h2>
              <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-10 px-2">
                Junte-se a milhares de pilotos que já estão usando o Apex Engineer 
                para alcançar tempos de volta mais rápidos.
              </p>
              <Link to="/auth">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 shadow-racing">
                  Criar conta gratuita
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 sm:py-12">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
              </div>
              <span className="text-lg sm:text-xl font-bold">Apex Engineer</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              © 2026 Apex Engineer. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Demo Dialog */}
      <DemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}