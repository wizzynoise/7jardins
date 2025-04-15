
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "O trabalho realizado foi fantástico! O meu jardim nunca esteve tão bonito. A equipe foi muito profissional e atenciosa. Recomendo a todos!",
    author: "Maria Silva",
    position: "Cliente Satisfeita"
  },
  {
    quote: "Desde que fizemos a manutenção do nosso jardim, ele nunca mais foi o mesmo! Ficou incrível e o serviço foi de excelência. Obrigado!",
    author: "João Santos",
    position: "Proprietário"
  },
  {
    quote: "Fiquei impressionado com a rapidez e a qualidade do serviço. A plantação de árvores foi feita de forma cuidadosa, e o meu jardim agora está ainda mais verde.",
    author: "Ana Oliveira",
    position: "Cliente Residencial"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-garden-accent font-medium mb-2">Testemunhos</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            O Que Dizem Os Nossos Clientes
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Não acredite apenas na nossa palavra. Ouça os clientes que já experienciaram a diferença 7Jardins.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-md border-none">
              <CardContent className="p-6">
                <Quote className="text-garden-medium mb-4" size={28} />
                <p className="italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
