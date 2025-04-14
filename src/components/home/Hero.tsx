
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1558293842-5aed9087a40e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80)' 
        }}
      ></div>
      <div className="hero-overlay absolute inset-0"></div>
      
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-bold mb-4">
              Transforme o Seu Espaço Exterior
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Na 7Jardins, criamos jardins bonitos e sustentáveis que ligam as pessoas à natureza.
              Do design à manutenção, deixe-nos dar vida aos seus sonhos de jardim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-garden-accent text-white hover:bg-garden-accent/90">
                <Link to="/services">Os Nossos Serviços</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Contacte-nos</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
