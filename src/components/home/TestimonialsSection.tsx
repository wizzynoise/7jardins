import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Mariana Silva",
    text: "A 7Jardins transformou o meu jardim num espaço de sonho! Recomendo vivamente os seus serviços.",
    rating: 5
  },
  {
    name: "António Costa",
    text: "Profissionalismo e dedicação são as palavras que definem esta equipa. Estou muito satisfeito com o resultado.",
    rating: 4
  },
  {
    name: "Sofia Pereira",
    text: "Desde a manutenção à plantação, a 7Jardins oferece um serviço completo e de alta qualidade.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-garden-accent font-medium mb-2">O Que Dizem os Nossos Clientes</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Depoimentos
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Descubra o que os nossos clientes têm a dizer sobre a nossa paixão e dedicação em criar espaços verdes incríveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="inline-block text-yellow-500 fill-yellow-500" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <h4 className="text-xl font-serif font-bold">{testimonial.name}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
