import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 bg-earth-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-garden-accent mb-4">
              Sobre a Nossa Família
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Somos uma família dedicada à arte da jardinagem, oferecendo serviços personalizados e produtos de alta qualidade para transformar o seu espaço exterior.
            </p>
            <p className="text-muted-foreground mb-6">
              Com anos de experiência, combinamos técnicas tradicionais com as mais recentes inovações para criar jardins deslumbrantes e sustentáveis.
            </p>
            <Button asChild className="bg-garden-accent hover:bg-garden-accent/90 text-white">
              <Link to="/about">Saiba Mais Sobre Nós</Link>
            </Button>
          </div>
          
          <div className="md:block">
            <img 
              src="https://images.unsplash.com/photo-1591741389395-0c393c77afca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
              alt="Equipe de jardinagem" 
              className="rounded-lg shadow-xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.backgroundColor = '#A5D6A7';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
