import React from 'react';
import { PenTool, Shovel, Leaf, Droplet, BookOpen, Sunset, Trees } from 'lucide-react';

export const services = [
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

export const processSteps = [
  {
    title: "Consulta Inicial",
    description: "Reunimos consigo para discutir a sua visão, requisitos e orçamento para o projeto do seu jardim.",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
  },
  {
    title: "Avaliação do Local e Design",
    description: "A nossa equipa avalia o seu espaço e cria um plano de design personalizado que se alinha com a sua visão.",
    image: "https://images.unsplash.com/photo-1553530979-fbb9e4aee36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Planeamento do Projeto",
    description: "Desenvolvemos um plano de projeto detalhado, incluindo cronograma, materiais e estimativas de custo para a sua aprovação.",
    image: "https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Implementação",
    description: "A nossa equipa qualificada dá vida ao seu jardim, lidando com todos os aspectos da construção e plantação.",
    image: "https://images.unsplash.com/photo-1599708153386-62bf3adce970?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Conclusão e Cuidados",
    description: "Finalizamos o seu projeto e fornecemos orientação sobre os cuidados com o seu novo jardim para garantir que prospere durante anos.",
    image: "https://images.unsplash.com/photo-1555955208-94f6fafea771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];
