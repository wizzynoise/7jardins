
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import GardenGallery from '@/components/highlights/GardenGallery';
import RecommendedProducts from '@/components/highlights/RecommendedProducts';
import FeaturedGardens from '@/components/highlights/FeaturedGardens';

const GardenHighlights = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-garden-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Jardins em Destaque</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Inspire-se com nossos projetos mais bonitos e descubra ideias e produtos para transformar seu próprio espaço.
            </p>
          </div>
        </section>
        
        {/* Featured Gardens */}
        <FeaturedGardens />
        
        {/* Garden Gallery */}
        <GardenGallery />
        
        {/* Recommended Products */}
        <RecommendedProducts />
        
        {/* CTA Section */}
        <section className="py-16 bg-garden-accent">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-serif font-bold mb-4 text-white">
              Pronto para Transformar o Seu Jardim?
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Contacte-nos hoje para uma consulta gratuita e descubra como podemos ajudá-lo a criar o jardim dos seus sonhos com os melhores preços do mercado.
            </p>
            <button className="px-6 py-3 bg-white text-garden-accent rounded-md hover:bg-white/90 transition-colors">
              <Link to="/contact">Entre em Contacto</Link>
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GardenHighlights;
