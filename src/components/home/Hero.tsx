
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' 
        }}
        onError={(e) => {
          const target = e.target as HTMLElement;
          target.style.backgroundColor = '#2E7D32';
        }}
      ></div>
      <div className="hero-overlay absolute inset-0"></div>
      
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-bold mb-4">
              Transforme o Seu Jardim dos Sonhos em Realidade
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Uma família apaixonada por jardins, oferecendo serviços personalizados e produtos selecionados aos melhores preços do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-garden-accent hover:bg-garden-accent/90 text-white transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl rounded-md flex items-center justify-center">
                <Link to="/services" className="flex items-center">
                  Ver Serviços
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </button>
              <button className="px-6 py-3 border-2 border-white text-white hover:bg-white/20 transform transition-all duration-300 hover:scale-105 rounded-md flex items-center justify-center">
                <Link to="/contact" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Contacte-nos
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
