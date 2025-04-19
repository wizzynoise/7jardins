
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-garden-accent">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
          Pronto para Transformar o Seu Espaço Exterior?
        </h3>
        <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
          Entre em contacto connosco hoje para uma consulta gratuita sobre os nossos serviços de jardinagem familiar, 
          com os melhores preços do mercado.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-white text-garden-accent hover:bg-white/90 rounded-md flex items-center justify-center mx-auto sm:mx-0">
            <Link to="/contact" className="flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Entre em Contacto
            </Link>
          </button>
          <button className="px-6 py-3 border-2 border-white text-white hover:bg-white/10 rounded-md flex items-center justify-center mx-auto sm:mx-0">
            <Link to="/garden-highlights">Explore Nossos Jardins</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
