import React, { useEffect } from 'react';
import { Star, Clock, Truck, Shield, AlertTriangle } from 'lucide-react';
import Header from '@/components/MercadoLivre/Header';
import UrgencyBanner from '@/components/MercadoLivre/UrgencyBanner';
import ScratchCard from '@/components/MercadoLivre/ScratchCard';
import BenefitCard from '@/components/MercadoLivre/BenefitCard';
import FloatingElements from '@/components/MercadoLivre/FloatingElements';
import CTAButton from '@/components/MercadoLivre/CTAButton';
import Footer from '@/components/MercadoLivre/Footer';

const Index = () => {
  const startGame = () => {
    // Simular redirecionamento para a raspadinha
    window.location.href = '/raspadinha';
  };

  useEffect(() => {
    // Preload next page
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/raspadinha';
    link.as = 'document';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const benefits = [
    {
      icon: Star,
      title: "Produtos Originais",
      description: "Itens autênticos e com garantia oficial",
      delay: 0
    },
    {
      icon: Clock,
      title: "Resultado Instantâneo", 
      description: "Descubra na hora se você ganhou",
      delay: 0.1
    },
    {
      icon: Truck,
      title: "Mercado Envios",
      description: "Entrega rápida e segura",
      delay: 0.2
    },
    {
      icon: Shield,
      title: "Compra Protegida",
      description: "100% seguro e confiável",
      delay: 0.3
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <FloatingElements />
      
      <div className="max-w-6xl mx-auto bg-card min-h-screen shadow-md relative">
        <Header />
        <UrgencyBanner />
        
        {/* Hero Section */}
        <section className="py-12 px-6 text-center bg-gradient-to-br from-card to-ml-blue-light relative overflow-hidden">
          {/* Rotating background element */}
          <div 
            className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] opacity-10 animate-rotate"
            style={{
              background: 'radial-gradient(circle, hsl(var(--ml-yellow)) 0%, transparent 70%)'
            }}
          />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-wider shadow-sm">
              <Star className="w-4 h-4" />
              Promoção Especial
            </div>

            {/* Hero Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Raspe e Ganhe<br />produtos incríveis!
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Participe da nossa raspadinha exclusiva e concorra a produtos originais do Mercado Livre. É grátis e sua sorte está aqui!
            </p>

            {/* Scratch Card */}
            <ScratchCard onClick={startGame} />

            {/* CTA Button */}
            <CTAButton onClick={startGame}>
              Participar Agora
            </CTAButton>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  delay={benefit.delay}
                />
              ))}
            </div>

            {/* Disclaimer */}
            <div className="bg-ml-blue-light p-5 rounded-lg text-sm text-muted-foreground text-center mb-8 border-l-4 border-secondary leading-relaxed">
              <div className="flex items-center justify-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4" />
                <strong className="text-foreground">Promoção por tempo limitado.</strong>
              </div>
              Participe agora e não perca sua chance de ganhar produtos incríveis do Mercado Livre!
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
