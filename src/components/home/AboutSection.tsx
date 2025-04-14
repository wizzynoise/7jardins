
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-garden-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1590856029620-9f1bbfd5248d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
                alt="Garden professional at work" 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ height: "480px" }}
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg hidden lg:block">
                <p className="font-serif text-3xl text-garden-accent font-bold">15+</p>
                <p className="text-foreground">Years of Experience</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-garden-accent font-medium mb-2">About 7Jardins</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Passionate About Creating Beautiful Gardens
            </h3>
            <p className="text-lg mb-6">
              At 7Jardins, we bring together nature, art, and science to create beautiful, 
              sustainable garden spaces that inspire and delight. With over 15 years of experience, 
              our team has been transforming ordinary spaces into extraordinary gardens.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-garden-accent mr-2 shrink-0" />
                <span>Expert Garden Design</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-garden-accent mr-2 shrink-0" />
                <span>Sustainable Practices</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-garden-accent mr-2 shrink-0" />
                <span>Professional Team</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-garden-accent mr-2 shrink-0" />
                <span>Quality Materials</span>
              </div>
            </div>
            
            <Button asChild className="bg-garden-accent hover:bg-garden-accent/90">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
