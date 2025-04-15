
import React from 'react';
import { services } from './servicesData';

const ServicesOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {services.map((service, index) => (
        <a 
          href={`#${service.id}`} 
          key={index}
          className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-center mb-4">
            {service.icon}
          </div>
          <h3 className="text-xl font-serif font-bold mb-2">{service.title}</h3>
          <p className="text-sm text-muted-foreground">{service.description}</p>
        </a>
      ))}
    </div>
  );
};

export default ServicesOverview;
