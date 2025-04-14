
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CalendarClock, Users, Scissors, Trees } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import OurValues from '@/components/about/OurValues';
import TeamMembers from '@/components/about/TeamMembers';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-garden-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Sobre a 7Jardins</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Especialistas em manutenção de jardins, corte de relva e cuidados com arbustos.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1599685315640-9ceab2f58148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Equipa de jardinagem a trabalhar" 
                  className="rounded-lg shadow-lg w-full object-cover h-[500px]"
                />
              </div>
              
              <div>
                <h2 className="text-garden-accent font-medium mb-2">A Nossa História</h2>
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Tradição e Experiência desde 2020
                </h3>
                <p className="mb-4 text-lg">
                  A 7Jardins foi fundada em 2020 por Sofia Rodrigues, uma profissional com mais de 30 anos de 
                  experiência em jardinagem. Nascemos com o objetivo de providenciar serviços especializados 
                  de manutenção de jardins, com foco no corte de relva e tratamento de arbustos.
                </p>
                <p className="mb-4">
                  Apesar de sermos uma empresa jovem, a nossa equipa soma décadas de experiência no setor. 
                  Cada um dos nossos profissionais traz conhecimentos profundos em jardinagem, garantindo 
                  um serviço de alta qualidade para cada cliente.
                </p>
                <p className="mb-6">
                  Especializamo-nos em serviços como corte de relva, manutenção de arbustos, limpeza e 
                  cuidado de espaços verdes, sempre com o compromisso de transformar e preservar a beleza 
                  dos jardins.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-garden-light w-16 h-16 rounded-full flex items-center justify-center mb-3">
                      <CalendarClock className="text-garden-accent" size={24} />
                    </div>
                    <h4 className="font-semibold">4+ Anos</h4>
                    <p className="text-sm text-muted-foreground">de Atividade</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-garden-light w-16 h-16 rounded-full flex items-center justify-center mb-3">
                      <Users className="text-garden-accent" size={24} />
                    </div>
                    <h4 className="font-semibold">10+ Profissionais</h4>
                    <p className="text-sm text-muted-foreground">Especializados</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-garden-light w-16 h-16 rounded-full flex items-center justify-center mb-3">
                      <Scissors className="text-garden-accent" size={24} />
                    </div>
                    <h4 className="font-semibold">500+</h4>
                    <p className="text-sm text-muted-foreground">Jardins Tratados</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-garden-light w-16 h-16 rounded-full flex items-center justify-center mb-3">
                      <Trees className="text-garden-accent" size={24} />
                    </div>
                    <h4 className="font-semibold">100+</h4>
                    <p className="text-sm text-muted-foreground">Hectares Cuidados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <OurValues />
        
        {/* Our Team */}
        <TeamMembers />
        
        {/* CTA */}
        <section className="py-16 bg-garden-accent">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-serif font-bold mb-4 text-white">
              Precisa de Manutenção de Jardim?
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Entre em contacto connosco para um orçamento gratuito e transforme o seu espaço verde.
            </p>
            <Button asChild size="lg" className="bg-white text-garden-accent hover:bg-white/90">
              <Link to="/contact">Contacte-nos</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

