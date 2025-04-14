
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "A 7Jardins transformou o meu quintal num oásis. A sua atenção ao detalhe e visão criativa excederam todas as minhas expectativas.",
    author: "Sara Oliveira",
    position: "Proprietária"
  },
  {
    quote: "A equipa da 7Jardins entende o equilíbrio entre estética e sustentabilidade. Desenharam e instalaram um jardim bonito e fácil de manter.",
    author: "Miguel Santos",
    position: "Gestor de Propriedade"
  },
  {
    quote: "Trabalhar com a 7Jardins foi um prazer do início ao fim. O seu profissionalismo e experiência fizeram do nosso projeto de paisagismo comercial um sucesso.",
    author: "Inês Silva",
    position: "Proprietária de Negócio"
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
