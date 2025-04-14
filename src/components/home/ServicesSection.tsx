
import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Shovel, Leaf, Droplet, Trees } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <PenTool size={40} className="text-garden-accent" />,
    title: "Design de Jardins",
    description: "Designs de jardim personalizados adaptados ao seu espaço, estilo e necessidades."
  },
  {
    icon: <Shovel size={40} className="text-garden-accent" />,
    title: "Paisagismo",
    description: "Serviços de paisagismo completo desde estruturas até à plantação."
  },
  {
    icon: <Leaf size={40} className="text-garden-accent" />,
    title: "Manutenção de Jardins",
    description: "Manutenção regular para manter o seu jardim saudável e bonito durante todo o ano."
  },
  {
    icon: <Droplet size={40} className="text-garden-accent" />,
    title: "Sistemas de Irrigação",
    description: "Soluções eficientes de rega para manter o seu jardim enquanto conserva água."
  },
  {
    icon: <Trees size={40} className="text-garden-accent" />,
    title: "Consultoria",
    description: "Aconselhamento especializado para jardineiros DIY e profissionais."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-garden-accent font-medium mb-2">Os Nossos Serviços</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            O Que Oferecemos
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Desde o conceito inicial até à manutenção contínua, fornecemos serviços completos de jardinagem
            para satisfazer todas as necessidades do seu espaço exterior.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="service-card border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-serif font-bold mb-2">{service.title}</h4>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild className="bg-garden-accent hover:bg-garden-accent/90">
            <Link to="/services">Ver Todos os Serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
