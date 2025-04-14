
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CalendarClock, Users, Award, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: "Sofia Martinez",
    position: "Fundadora e Designer Principal",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    bio: "Com mais de 20 anos de experiência, Sofia fundou a 7Jardins com a visão de criar jardins sustentáveis e bonitos em toda a região."
  },
  {
    name: "David Chen",
    position: "Arquiteto Paisagista Sénior",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    bio: "David traz 15 anos de experiência em arquitetura paisagística, especializando-se na integração de elementos naturais com princípios de design moderno."
  },
  {
    name: "Amara Johnson",
    position: "Especialista em Horticultura",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    bio: "Com formação em Botânica e certificação em Horticultura, Amara assegura que cada planta nos nossos jardins prospera no seu ambiente."
  },
  {
    name: "Miguel Rodriguez",
    position: "Gestor de Projetos",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    bio: "Miguel coordena os nossos projetos com precisão e cuidado, garantindo a conclusão atempada enquanto mantém os mais altos padrões de qualidade."
  }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-garden-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Sobre a 7Jardins</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A nossa história, a nossa equipa e a nossa paixão por criar belos espaços de jardim.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1599685315640-9ceab2f58148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Equipa de jardim a planear" 
                  className="rounded-lg shadow-lg w-full object-cover h-[500px]"
                />
              </div>
              
              <div>
                <h2 className="text-garden-accent font-medium mb-2">A Nossa História</h2>
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Uma Paixão por Jardins Desde 2008
                </h3>
                <p className="mb-4 text-lg">
                  A 7Jardins foi fundada em 2008 por Sofia Martinez, uma arquiteta paisagista com uma visão
                  de criar jardins que integram perfeitamente beleza, funcionalidade e sustentabilidade.
                </p>
                <p className="mb-4">
                  O que começou como uma pequena equipa de entusiastas apaixonados por jardins cresceu para uma 
                  empresa de paisagismo com serviço completo e uma reputação de excelência. Ao longo dos anos, 
                  completámos centenas de projetos, desde jardins residenciais íntimos a paisagens comerciais extensas.
                </p>
                <p className="mb-6">
                  O nosso nome, 7Jardins, representa os sete princípios que orientam o nosso trabalho: criatividade, 
                  sustentabilidade, artesanato, atenção aos detalhes, colaboração com o cliente, gestão ambiental 
                  e inovação contínua.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-garden-light w-16 h-16 rounded-full flex items-center justify-center mb-3">
                      <CalendarClock className="text-garden-accent" size={24} />
                    </div>
                    <h4 className="font-semibold">15+ Anos</h4>
                    <p className="text-sm text-muted-foreground">de Experiência</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-garden-light w-16 h-16 rounded-full flex items-center justify-center mb-3">
                      <Users className="text-garden-accent" size={24} />
                    </div>
                    <h4 className="font-semibold">20+ Especialistas</h4>
                    <p className="text-sm text-muted-foreground">Membros da Equipa</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-garden-light w-16 h-16 rounded-full flex items-center justify-center mb-3">
                      <Award className="text-garden-accent" size={24} />
                    </div>
                    <h4 className="font-semibold">12 Prémios</h4>
                    <p className="text-sm text-muted-foreground">De Excelência</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-garden-light w-16 h-16 rounded-full flex items-center justify-center mb-3">
                      <ThumbsUp className="text-garden-accent" size={24} />
                    </div>
                    <h4 className="font-semibold">500+</h4>
                    <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-earth-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-garden-accent font-medium mb-2">Os Nossos Valores</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                O Que Nos Move
              </h3>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Estes princípios fundamentais orientam a nossa abordagem a cada projeto e interação.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-serif font-bold mb-3">Sustentabilidade</h4>
                <p>Projetamos e mantemos jardins com práticas ecológicas, focando na conservação de água, plantas nativas e materiais sustentáveis.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-serif font-bold mb-3">Artesanato</h4>
                <p>Orgulhamo-nos da atenção ao detalhe e da qualidade do artesanato em todos os aspetos do nosso trabalho, desde o design à implementação.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-serif font-bold mb-3">Inovação</h4>
                <p>Exploramos continuamente novas técnicas, materiais e abordagens de design para criar soluções de jardim únicas e eficazes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-serif font-bold mb-3">Colaboração</h4>
                <p>Trabalhamos em estreita colaboração com os nossos clientes, ouvindo as suas necessidades e preferências para criar jardins que reflitam a sua visão.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-serif font-bold mb-3">Educação</h4>
                <p>Acreditamos na partilha do nosso conhecimento, ajudando os clientes a entender como cuidar dos seus jardins e a apreciar o mundo natural.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-serif font-bold mb-3">Comunidade</h4>
                <p>Estamos comprometidos em apoiar as comunidades locais através de práticas de paisagismo sustentável e iniciativas de jardins comunitários.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-garden-accent font-medium mb-2">A Nossa Equipa</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Conheça os Especialistas
              </h3>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                A nossa equipa apaixonada reúne especialistas em arquitetura paisagística, horticultura e design de jardins.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-serif font-bold">{member.name}</h4>
                  <p className="text-garden-accent mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-garden-accent">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-serif font-bold mb-4 text-white">
              Pronto para Iniciar o Seu Projeto de Jardim?
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Contacte a nossa equipa hoje para agendar uma consulta e dar vida aos seus sonhos de jardim.
            </p>
            <Button asChild size="lg" className="bg-white text-garden-accent hover:bg-white/90">
              <Link to="/contact">Contacte-nos</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
