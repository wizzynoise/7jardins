
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "7Jardins transformed my backyard into an oasis. Their attention to detail and creative vision exceeded all my expectations.",
    author: "Sarah Johnson",
    position: "Homeowner"
  },
  {
    quote: "The team at 7Jardins understands the balance between aesthetics and sustainability. They designed and installed a beautiful garden that is easy to maintain.",
    author: "Michael Williams",
    position: "Property Manager"
  },
  {
    quote: "Working with 7Jardins was a pleasure from start to finish. Their professionalism and expertise made our commercial landscaping project a success.",
    author: "Emily Davis",
    position: "Business Owner"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-garden-accent font-medium mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            What Our Clients Say
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Don't just take our word for it. Hear from the clients who have experienced the 7Jardins difference.
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
