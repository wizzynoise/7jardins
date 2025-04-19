
import React from 'react';

const gardenImages = [
  {
    url: "https://images.unsplash.com/photo-1558293842-c0fd3db86157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    title: "Jardim Mediterrâneo"
  },
  {
    url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2832&q=80",
    title: "Espaço Verde Familiar"
  },
  {
    url: "https://images.unsplash.com/photo-1584479898061-15742e14f50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Horta Caseira"
  },
  {
    url: "https://images.unsplash.com/photo-1508285296015-c0b524447532?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    title: "Mini Jardim Japonês"
  },
  {
    url: "https://images.unsplash.com/photo-1542628682-88321d2a4828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Flores em Destaque"
  },
  {
    url: "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Canteiros Decorativos"
  }
];

const GardenGallery = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-garden-accent font-medium mb-2">Nossa Galeria</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Inspiração para Seu Espaço Verde
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Conheça alguns dos nossos trabalhos e deixe-se inspirar para transformar seu próprio jardim.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gardenImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg group aspect-[4/3]">
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.backgroundColor = '#E8F5E9';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <h4 className="text-white text-xl font-bold">{image.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GardenGallery;
