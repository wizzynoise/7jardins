
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/services/ServiceCard';
import ProcessStep from '@/components/services/ProcessStep';
import ServicesOverview from '@/components/services/ServicesOverview';
import { services, processSteps } from '@/components/services/servicesData';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-garden-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Os Nossos Serviços</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Do design à manutenção, fornecemos serviços completos de jardinagem 
              adaptados às suas necessidades específicas.
            </p>
          </div>
        </section>
        
        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <ServicesOverview />
            
            {/* Detailed Services */}
            <div className="space-y-24">
              {services.map((service, index) => (
                <ServiceCard key={service.id} {...service} index={index} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 bg-earth-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-garden-accent font-medium mb-2">O Nosso Processo</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Como Trabalhamos
              </h3>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Seguimos uma abordagem estruturada para garantir que o seu projeto de jardim 
                é concluído com eficiência e segundo os mais elevados padrões.
              </p>
            </div>
            
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-garden-medium -translate-x-1/2"></div>
              
              <div className="space-y-12 relative">
                {processSteps.map((step, index) => (
                  <ProcessStep
                    key={index}
                    stepNumber={index + 1}
                    title={step.title}
                    description={step.description}
                    image={step.image}
                    isReversed={index % 2 === 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-garden-accent">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-serif font-bold mb-4 text-white">
              Pronto para Transformar o Seu Espaço Exterior?
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Contacte-nos hoje para uma consulta gratuita e dê o primeiro passo em direção ao jardim dos seus sonhos.
            </p>
            <Button asChild size="lg" className="bg-white text-garden-accent hover:bg-white/90">
              <Link to="/contact">Entre em Contacto</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
