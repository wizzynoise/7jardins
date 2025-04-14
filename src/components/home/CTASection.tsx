
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-garden-accent">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
          Ready to Transform Your Outdoor Space?
        </h3>
        <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
          Contact us today for a free consultation and let's bring your garden dreams to life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-garden-accent hover:bg-white/90">
            <Link to="/contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            <Link to="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
