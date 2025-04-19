
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: "Kit de Ferramentas Essenciais",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    price: "45,90€",
    description: "Conjunto com as ferramentas básicas para manutenção do jardim"
  },
  {
    name: "Sementes de Flores Silvestres",
    image: "https://images.unsplash.com/photo-1647130538832-157215233270?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    price: "8,50€",
    description: "Mistura de sementes de flores nativas portuguesas"
  },
  {
    name: "Regador Artesanal",
    image: "https://images.unsplash.com/photo-1602700036323-8aabe8637e69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    price: "19,95€",
    description: "Regador de metal com acabamento rústico"
  },
  {
    name: "Vaso Decorativo Terracota",
    image: "https://images.unsplash.com/photo-1617954015859-0530fcb7245f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    price: "12,75€",
    description: "Vaso tradicional em terracota feito à mão"
  }
];

const RecommendedProducts = () => {
  return (
    <section className="py-16 bg-earth-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-garden-accent font-medium mb-2">Produtos Recomendados</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Para o Seu Jardim
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Selecionamos produtos de qualidade com os melhores preços do mercado para ajudá-lo a cuidar do seu jardim.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#E8F5E9';
                  }}
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif font-bold text-lg mb-1">{product.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-garden-accent font-bold text-lg">{product.price}</span>
                  <button className="px-4 py-2 bg-garden-accent text-white rounded-md hover:bg-garden-accent/90 transition-colors text-sm">
                    <Link to="/contact">Encomendar</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Temos muitos mais produtos disponíveis. Entre em contacto para conhecer todo o nosso catálogo!
          </p>
          <button className="px-6 py-3 bg-garden-accent text-white rounded-md hover:bg-garden-accent/90 transition-colors">
            <Link to="/contact">Ver Mais Produtos</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
