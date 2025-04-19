
import React from 'react';

const FamilyIntroSection = () => {
  return (
    <section className="py-16 bg-earth-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Nossa Família de Jardineiros
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Somos uma família unida pelo amor à natureza e pela paixão em criar espaços verdes que alegram o dia a dia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <div className="order-2 md:order-1">
            <div className="prose lg:prose-lg">
              <h3 className="font-serif text-2xl mb-4">Uma História de Amor aos Jardins</h3>
              <p>
                Há mais de 30 anos, começamos como um pequeno projeto familiar em Rossas, quando percebemos que nossa paixão por plantas poderia se tornar algo mais. O que começou no quintal da nossa casa cresceu naturalmente, assim como as plantas que cuidamos com tanto carinho.
              </p>
              <p className="mt-4">
                Não somos uma equipe de "especialistas corporativos". Somos uma família que aprende diariamente com a natureza, compartilhando conhecimentos passados por gerações e descobrindo novidades junto aos nossos clientes.
              </p>
              <p className="mt-4 font-medium">
                Nosso compromisso é oferecer serviços e produtos com os melhores preços do mercado, mantendo a qualidade que só quem ama o que faz pode garantir.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1590856029620-9f1bbfd5248d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
                  alt="Família trabalhando no jardim" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1599708153386-62bf3adce970?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
                  alt="Trabalho em família no jardim" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
                  alt="Ferramentas de jardinagem" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyIntroSection;
