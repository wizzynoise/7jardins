
import React from 'react';

const OurValues = () => {
  return (
    <section className="py-16 bg-earth-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-garden-accent font-medium mb-2">Os Nossos Valores</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            O Que Nos Define
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Princípios que guiam cada serviço de manutenção de jardim que realizamos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-serif font-bold mb-3">Precisão</h4>
            <p>Cada corte de relva e manutenção de arbusto é realizado com rigor técnico e cuidado meticuloso.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-serif font-bold mb-3">Especialização</h4>
            <p>Profissionais com décadas de experiência em jardinagem, especializados em corte e manutenção.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-serif font-bold mb-3">Sustentabilidade</h4>
            <p>Utilizamos técnicas e equipamentos que respeitam o ambiente e promovem a saúde dos espaços verdes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-serif font-bold mb-3">Personalização</h4>
            <p>Cada jardim é único. Adaptamos os nossos serviços às necessidades específicas de cada cliente.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-serif font-bold mb-3">Compromisso</h4>
            <p>Dedicamo-nos a manter a beleza e saúde dos seus espaços verdes durante todo o ano.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-serif font-bold mb-3">Comunidade</h4>
            <p>Contribuímos para a preservação de espaços verdes locais e promovemos a importância da jardinagem.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;

