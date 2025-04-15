
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  image: string;
  index: number;
}

const ServiceCard = ({ id, title, icon, description, features, image, index }: ServiceCardProps) => {
  return (
    <div 
      id={id}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        index % 2 === 1 ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
        <img 
          src={image} 
          alt={title} 
          className="rounded-lg shadow-lg w-full object-cover h-[400px]"
        />
      </div>
      
      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-3xl font-serif font-bold ml-3">{title}</h3>
        </div>
        <p className="text-lg mb-6">
          {description}
        </p>
        
        <div className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start">
              <CheckCircle className="text-garden-accent shrink-0 mr-2" size={20} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <Button asChild className="bg-garden-accent hover:bg-garden-accent/90">
          <Link to="/contact">Solicitar Informação sobre Este Serviço</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
