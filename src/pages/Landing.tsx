import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  Settings, 
  Zap, 
  Brain, 
  History, 
  Gamepad2, 
  ChevronRight,
  Trophy,
  Timer,
  Wrench
} from "lucide-react";
import heroImage from "@/assets/hero-gt3.jpg";
import featureFerrari from "@/assets/feature-ferrari.jpg";
import featureCockpit from "@/assets/feature-cockpit.jpg";
import featureEngineer from "@/assets/feature-engineer.jpg";

const simulators = [
  "iRacing",
  "Assetto Corsa Competizione", 
  "Automobilista 2",
  "Le Mans Ultimate",
  "RaceRoom",
  "Assetto Corsa EVO",
  "Project Motor Racing",
  "Assetto Corsa Rally"
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Settings className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">Apex Engineer</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link to="/auth">
              <Button variant="outline" size="sm">Entrar</Button>
            </Link>
            <Link to="/auth">
              <Button size="sm" className="shadow-racing">Começar Grátis</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        
        <div className="container relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powered by AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Seu Engenheiro de<br />Performance Virtual
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Transforme seus tempos de volta com setups otimizados por inteligência artificial. 
            O parceiro perfeito para pilotos e engenheiros de sim racing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/auth">
              <Button size="lg" className="text-lg px-8 py-6 shadow-racing group">
                Começar Agora
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Ver Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "8+", label: "Simuladores" },
              { value: "500+", label: "Carros Suportados" },
              { value: "200+", label: "Pistas" },
              { value: "IA", label: "Engenheiro 24/7" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tudo que Você Precisa para <span className="text-primary">Vencer</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  <h3 className="text-xl font-semibold">Gestão de Setups</h3>
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
                  src={featureCockpit} 
                  alt="Version History" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <History className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Histórico de Versões</h3>
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
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ganhe Segundos,<br />
                <span className="text-primary">Não Milésimos</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Enquanto outros perdem horas testando configurações aleatórias, 
                você terá um engenheiro de performance dedicado analisando seu 
                feedback e sugerindo ajustes precisos.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Trophy,
                    title: "Setups Competitivos",
                    description: "Configurações baseadas em dados reais dos melhores pilotos"
                  },
                  {
                    icon: Timer,
                    title: "Economia de Tempo",
                    description: "Chegue ao setup ideal em minutos, não horas"
                  },
                  {
                    icon: Gamepad2,
                    title: "Multi-Simulador",
                    description: "Suporte para os principais simuladores do mercado"
                  },
                ].map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border/50">
                <img 
                  src={featureFerrari} 
                  alt="Race Car" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Setup Otimizado</div>
                    <div className="text-xs text-muted-foreground">-1.2s no tempo de volta</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulators Section */}
      <section className="py-24 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Compatível com Seus <span className="text-primary">Simuladores Favoritos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Suporte completo para os principais simuladores de corrida do mercado
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {simulators.map((sim) => (
              <div 
                key={sim}
                className="px-6 py-3 rounded-full bg-card border border-border/50 text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
              >
                {sim}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/20 p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pronto para Dominar as Pistas?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Junte-se a milhares de pilotos que já estão usando o Apex Engineer 
                para alcançar tempos de volta mais rápidos.
              </p>
              <Link to="/auth">
                <Button size="lg" className="text-lg px-10 py-6 shadow-racing">
                  Criar Conta Gratuita
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Settings className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Apex Engineer</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Apex Engineer. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}