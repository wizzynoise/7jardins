
import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Shovel, Leaf, Droplet, Tree } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <PenTool size={40} className="text-garden-accent" />,
    title: "Garden Design",
    description: "Custom garden designs tailored to your space, style, and needs."
  },
  {
    icon: <Shovel size={40} className="text-garden-accent" />,
    title: "Landscaping",
    description: "Full-scale landscaping services from hardscaping to planting."
  },
  {
    icon: <Leaf size={40} className="text-garden-accent" />,
    title: "Garden Maintenance",
    description: "Regular maintenance to keep your garden healthy and beautiful year-round."
  },
  {
    icon: <Droplet size={40} className="text-garden-accent" />,
    title: "Irrigation Systems",
    description: "Efficient watering solutions to maintain your garden while conserving water."
  },
  {
    icon: <Tree size={40} className="text-garden-accent" />,
    title: "Consulting",
    description: "Expert advice for DIY gardeners and professionals alike."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-garden-accent font-medium mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            What We Offer
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            From initial concept to ongoing maintenance, we provide comprehensive gardening services
            to meet all your outdoor space needs.
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
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
