
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, PenTool, Shovel, Leaf, Droplet, Trees, BookOpen, Sunset } from 'lucide-react';

const services = [
  {
    id: "design",
    title: "Design de Jardins",
    icon: <PenTool size={36} className="text-garden-accent" />,
    description: "Os nossos designers experientes criam planos de jardim personalizados adaptados às suas necessidades específicas, preferências e condições do local.",
    features: [
      "Consulta inicial e avaliação do local",
      "Design conceptual e visualização",
      "Planos detalhados de plantação e paisagismo",
      "Assistência na seleção de materiais",
      "Planeamento de irrigação e iluminação"
    ],
    image: "https://images.unsplash.com/photo-1528092744838-b91de0a10615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "landscaping",
    title: "Paisagismo",
    icon: <Shovel size={36} className="text-garden-accent" />,
    description: "Transformamos o seu espaço exterior com instalação profissional de elementos de vegetação e estruturas.",
    features: [
      "Preparação e nivelamento do terreno",
      "Instalação de estruturas (pátios, caminhos, muros de contenção)",
      "Plantação de árvores, arbustos e flores",
      "Cobertura vegetal e melhoramento do solo",
      "Instalação de elementos aquáticos"
    ],
    image: "https://images.unsplash.com/photo-1626863905122-b51b8413e384?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "maintenance",
    title: "Manutenção de Jardins",
    icon: <Leaf size={36} className="text-garden-accent" />,
    description: "Os nossos serviços de manutenção contínua mantêm o seu jardim bonito e saudável ao longo das estações.",
    features: [
      "Cuidados regulares com o relvado e corte",
      "Poda e cuidados com a saúde das plantas",
      "Limpeza sazonal e cobertura vegetal",
      "Fertilização e controlo de ervas daninhas",
      "Gestão de pragas e doenças"
    ],
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "irrigation",
    title: "Sistemas de Irrigação",
    icon: <Droplet size={36} className="text-garden-accent" />,
    description: "Projetamos e instalamos sistemas de irrigação eficientes que conservam água enquanto mantêm o seu jardim saudável.",
    features: [
      "Design personalizado do sistema de irrigação",
      "Instalação de aspersores eficientes em termos de consumo de água",
      "Irrigação por gotejamento para rega direcionada",
      "Configuração e programação de controladores inteligentes",
      "Manutenção e reparação do sistema"
    ],
    image: "https://images.unsplash.com/photo-1576627096430-88c7969ada33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "consulting",
    title: "Consultoria",
    icon: <BookOpen size={36} className="text-garden-accent" />,
    description: "Os nossos especialistas fornecem aconselhamento profissional para ajudá-lo a tomar decisões informadas sobre o seu jardim.",
    features: [
      "Orientação na seleção de plantas",
      "Diagnóstico e soluções de problemas",
      "Testes ao solo e recomendações de melhoramento",
      "Práticas de jardinagem sustentável",
      "Assistência no planeamento de projetos DIY"
    ],
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "seasonal",
    title: "Serviços Sazonais",
    icon: <Sunset size={36} className="text-garden-accent" />,
    description: "Fornecemos cuidados especializados para o seu jardim com a mudança das estações, garantindo beleza durante todo o ano.",
    features: [
      "Preparação e plantação do jardim na primavera",
      "Manutenção e controlo de pragas no verão",
      "Limpeza e preparação para o inverno no outono",
      "Proteção e planeamento no inverno",
      "Iluminação e decoração para ocasiões festivas"
    ],
    image: "https://images.unsplash.com/photo-1603201236596-eb1a63eb0ede?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2033&q=80"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-garden-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Os Nossos Serviços</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Do design à manutenção, fornecemos serviços completos de jardinagem 
              adaptados às suas necessidades específicas.
            </p>
          </div>
        </section>
        
        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <a 
                  href={`#${service.id}`} 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </a>
              ))}
            </div>
            
            {/* Detailed Services */}
            <div className="space-y-24">
              {services.map((service, index) => (
                <div 
                  id={service.id}
                  key={index} 
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-lg shadow-lg w-full object-cover h-[400px]"
                    />
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h3 className="text-3xl font-serif font-bold ml-3">{service.title}</h3>
                    </div>
                    <p className="text-lg mb-6">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="text-garden-accent shrink-0 mr-2" size={20} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild className="bg-garden-accent hover:bg-garden-accent/90">
                      <Link to="/contact">Solicitar Informação sobre Este Serviço</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 bg-earth-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-garden-accent font-medium mb-2">O Nosso Processo</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Como Trabalhamos
              </h3>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Seguimos uma abordagem estruturada para garantir que o seu projeto de jardim 
                é concluído com eficiência e segundo os mais elevados padrões.
              </p>
            </div>
            
            <div className="relative">
              {/* Process Steps */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-garden-medium -translate-x-1/2"></div>
              
              <div className="space-y-12 relative">
                {/* Step 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div className="md:text-right md:pr-12">
                    <h4 className="text-xl font-serif font-bold mb-2">1. Consulta Inicial</h4>
                    <p>Reunimos consigo para discutir a sua visão, requisitos e orçamento para o projeto do seu jardim.</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-4 w-8 h-8 bg-garden-accent rounded-full -translate-x-1/2"></div>
                  <div className="md:pl-12">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                      alt="Consulta inicial" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div className="md:order-2 md:pl-12">
                    <h4 className="text-xl font-serif font-bold mb-2">2. Avaliação do Local e Design</h4>
                    <p>A nossa equipa avalia o seu espaço e cria um plano de design personalizado que se alinha com a sua visão.</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-4 w-8 h-8 bg-garden-accent rounded-full -translate-x-1/2"></div>
                  <div className="md:order-1 md:text-right md:pr-12">
                    <img 
                      src="https://images.unsplash.com/photo-1553530979-fbb9e4aee36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Avaliação do local e design" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div className="md:text-right md:pr-12">
                    <h4 className="text-xl font-serif font-bold mb-2">3. Planeamento do Projeto</h4>
                    <p>Desenvolvemos um plano de projeto detalhado, incluindo cronograma, materiais e estimativas de custo para a sua aprovação.</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-4 w-8 h-8 bg-garden-accent rounded-full -translate-x-1/2"></div>
                  <div className="md:pl-12">
                    <img 
                      src="https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Planeamento do projeto" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div className="md:order-2 md:pl-12">
                    <h4 className="text-xl font-serif font-bold mb-2">4. Implementação</h4>
                    <p>A nossa equipa qualificada dá vida ao seu jardim, lidando com todos os aspectos da construção e plantação.</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-4 w-8 h-8 bg-garden-accent rounded-full -translate-x-1/2"></div>
                  <div className="md:order-1 md:text-right md:pr-12">
                    <img 
                      src="https://images.unsplash.com/photo-1599708153386-62bf3adce970?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Implementação" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div className="md:text-right md:pr-12">
                    <h4 className="text-xl font-serif font-bold mb-2">5. Conclusão e Cuidados</h4>
                    <p>Finalizamos o seu projeto e fornecemos orientação sobre os cuidados com o seu novo jardim para garantir que prospere durante anos.</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-4 w-8 h-8 bg-garden-accent rounded-full -translate-x-1/2"></div>
                  <div className="md:pl-12">
                    <img 
                      src="https://images.unsplash.com/photo-1555955208-94f6fafea771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Conclusão e cuidados" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-garden-accent">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-serif font-bold mb-4 text-white">
              Pronto para Transformar o Seu Espaço Exterior?
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Contacte-nos hoje para uma consulta gratuita e dê o primeiro passo em direção ao jardim dos seus sonhos.
            </p>
            <Button asChild size="lg" className="bg-white text-garden-accent hover:bg-white/90">
              <Link to="/contact">Entre em Contacto</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
