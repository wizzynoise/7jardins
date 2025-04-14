
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import GallerySection from '@/components/home/GallerySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogSection from '@/components/home/BlogSection';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
