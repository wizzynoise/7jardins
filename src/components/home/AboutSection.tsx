
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-garden-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="/garden-professional.jpg" 
                alt="Profissional de jardinagem a trabalhar" 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ height: "480px" }}
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1590856029620-9f1bbfd5248d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80";
                }}
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg hidden lg:block">
                <p className="font-serif text-3xl text-garden-accent font-bold">30+</p>
                <p className="text-foreground">Anos de Experiência</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-garden-accent font-medium mb-2">Sobre a 7Jardins</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Apaixonados por Criar Jardins Bonitos
            </h3>
            <p className="text-lg mb-6">
              Na 7Jardins, fundada por Pedro Gomes em 2020 em Rossas, unimos natureza, arte e ciência para criar 
              espaços verdes bonitos e sustentáveis que inspiram e encantam. Com profissionais com mais de 
              30 anos de experiência, a nossa equipa é especializada no corte de relva, manutenção 
              de arbustos e cuidado completo do seu jardim.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-garden-accent mr-2 shrink-0" />
                <span>Design de Jardim Profissional</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-garden-accent mr-2 shrink-0" />
                <span>Práticas Sustentáveis</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-garden-accent mr-2 shrink-0" />
                <span>Equipa Especializada</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-garden-accent mr-2 shrink-0" />
                <span>Materiais de Qualidade</span>
              </div>
            </div>
            
            <Button asChild className="bg-garden-accent hover:bg-garden-accent/90">
              <Link to="/about">Saiba Mais Sobre Nós</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
