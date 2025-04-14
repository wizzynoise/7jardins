
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1558293842-c0fd3db86157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    title: "Modern Residential Garden",
    category: "Residential"
  },
  {
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
    title: "Commercial Plaza Landscaping",
    category: "Commercial"
  },
  {
    image: "https://images.unsplash.com/photo-1584479898061-15742e14f50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Urban Rooftop Garden",
    category: "Urban"
  },
  {
    image: "https://images.unsplash.com/photo-1508285296015-c0b524447532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    title: "Japanese Inspired Garden",
    category: "Themed"
  },
  {
    image: "https://images.unsplash.com/photo-1542628682-88321d2a4828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Mediterranean Villa Garden",
    category: "Residential"
  },
  {
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
    title: "Public Park Restoration",
    category: "Public"
  }
];

const GallerySection = () => {
  return (
    <section className="py-16 bg-earth-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-garden-accent font-medium mb-2">Our Projects</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Featured Gardens
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Explore some of our recent garden creations that showcase our expertise and passion for beautiful outdoor spaces.
          </p>
        </div>
        
        <div className="gallery-grid mb-12">
          {projects.map((project, index) => (
            <div key={index} className="gallery-item">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-garden-light text-sm">{project.category}</span>
                <h4 className="text-white text-xl font-serif font-bold">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild className="bg-garden-accent hover:bg-garden-accent/90">
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
