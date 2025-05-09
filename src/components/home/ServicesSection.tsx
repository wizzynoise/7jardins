
import { Link } from 'react-router-dom';
import { Leaf, Trees, Scissors } from 'lucide-react';
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const services = [
  {
    icon: <Leaf size={40} className="text-garden-accent" />,
    title: "Manutenção de Jardins",
    description: "Serviços regulares de manutenção para manter o seu jardim bonito durante todo o ano."
  },
  {
    icon: <Trees size={40} className="text-garden-accent" />,
    title: "Plantação de Árvores",
    description: "Plantamos e vendemos árvores para dar mais vida ao seu jardim ou quintal."
  },
  {
    icon: <Scissors size={40} className="text-garden-accent" />,
    title: "Corte de Relva",
    description: "Serviço especializado de corte de relva para manter o seu jardim sempre bem cuidado."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-garden-accent font-medium mb-2">Os Nossos Serviços</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            O Que Oferecemos
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Serviços profissionais de jardinagem para transformar e manter o seu espaço exterior.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="service-card border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 transform transition-all duration-300 hover:scale-110">
                  {service.icon}
                </div>
                <h4 className="text-xl font-serif font-bold mb-2">{service.title}</h4>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild 
            className="bg-garden-accent hover:bg-garden-accent/90 text-white transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <Link to="/services">Ver Todos os Serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
