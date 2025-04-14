
import React from 'react';

const teamMembers = [
  {
    name: "Sofia Rodrigues",
    position: "Fundadora e Gestora de Projetos",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    bio: "Com mais de 30 anos de experiência em jardinagem, Sofia fundou a 7Jardins em 2020 para oferecer serviços especializados de manutenção de jardins."
  },
  {
    name: "António Silva",
    position: "Especialista em Corte de Relva",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    bio: "Especialista em corte de relva e manutenção de arbustos, António tem 35 anos de experiência no setor de jardinagem."
  },
  {
    name: "Maria Santos",
    position: "Técnica de Jardinagem",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    bio: "Especializada em manutenção de jardins, Maria contribui com 28 anos de experiência para a excelência da 7Jardins."
  }
];

const TeamMembers = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-garden-accent font-medium mb-2">A Nossa Equipa</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Conheça os Nossos Especialistas
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Profissionais experientes dedicados à manutenção e cuidado de jardins.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
};

export default TeamMembers;

