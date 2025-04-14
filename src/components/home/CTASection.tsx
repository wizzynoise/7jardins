
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-garden-accent">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
          Pronto para Transformar o Seu Espaço Exterior?
        </h3>
        <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
          Contacte-nos hoje para uma consulta gratuita e vamos dar vida aos seus sonhos de jardim.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-garden-accent hover:bg-white/90">
            <Link to="/contact">Entre em Contacto</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            <Link to="/services">Explore os Nossos Serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
