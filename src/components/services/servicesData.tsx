import React from 'react';
import { Leaf, Trees } from 'lucide-react';

export const services = [
  {
    id: "maintenance",
    title: "Manutenção de Jardins",
    icon: <Leaf size={36} className="text-garden-accent" />,
    description: "Serviços profissionais de manutenção para manter o seu jardim bonito e saudável durante todo o ano.",
    features: [
      "Manutenção regular do jardim",
      "Poda e cuidados com plantas",
      "Controle de pragas e doenças",
      "Fertilização e tratamento do solo",
      "Limpeza e organização do espaço"
    ],
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "planting",
    title: "Plantação de Árvores",
    icon: <Trees size={36} className="text-garden-accent" />,
    description: "Serviços especializados de plantação e cuidado de árvores para embelezar o seu espaço exterior.",
    features: [
      "Plantação profissional de árvores",
      "Seleção de espécies adequadas",
      "Preparação do solo",
      "Cuidados pós-plantação",
      "Venda de árvores selecionadas"
    ],
    image: "https://images.unsplash.com/photo-1599708153386-62bf3adce970?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
