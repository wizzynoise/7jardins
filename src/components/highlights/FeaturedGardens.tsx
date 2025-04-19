
import React from 'react';

const featuredGardens = [
  {
    title: "Jardim Familiar em Arouca",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Um espaço familiar perfeito para relaxar e as crianças brincarem.",
    features: ["Área de lazer", "Plantas de baixa manutenção", "Sistema de rega eficiente"],
    price: "Projeto a partir de 1.500€"
  },
  {
    title: "Horta Urbana Sustentável",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1631&q=80",
    description: "Horta produtiva para quem quer cultivar os próprios alimentos em casa.",
    features: ["Canteiros elevados", "Compostagem", "Plantas companheiras"],
    price: "Projeto a partir de 800€"
  },
  {
    title: "Jardim Mediterrâneo Rústico",
    image: "https://images.unsplash.com/photo-1558293842-c0fd3db86157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    description: "Inspirado no clima português, com plantas resistentes à seca.",
    features: ["Ervas aromáticas", "Plantas resistentes", "Decoração rústica"],
    price: "Projeto a partir de 1.200€"
  }
];

const FeaturedGardens = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-garden-accent font-medium mb-2">Nossos Projetos</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Jardins que Criamos
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Alguns dos nossos projetos favoritos que realizamos para famílias como a sua.
            Cada jardim é único e adaptado às necessidades específicas de cada cliente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredGardens.map((garden, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={garden.image} 
                  alt={garden.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#E8F5E9';
                  }}
                />
              </div>
              <div className="p-6">
                <h4 className="font-serif font-bold text-xl mb-2">{garden.title}</h4>
                <p className="text-muted-foreground mb-4">{garden.description}</p>
                
                <div className="space-y-2 mb-4">
                  {garden.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-garden-accent rounded-full mr-2"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-garden-accent font-medium">{garden.price}</span>
                  <button className="px-4 py-2 bg-garden-accent text-white rounded-md hover:bg-garden-accent/90 transition-colors text-sm">
                    Saber Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGardens;
