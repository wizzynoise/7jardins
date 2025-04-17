tsx
export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Dicas de Manutenção de Jardins para o Verão",
    excerpt: "Mantenha o seu jardim próspero durante os meses quentes de verão com estas dicas essenciais de manutenção.",
    content: "O verão é um período crítico para os cuidados com o jardim. Com estas dez dicas, pode garantir que o seu jardim não só sobrevive ao calor, mas também prospera durante toda a estação...",
    image: "/blog/blog1.webp",
    date: "15 de Junho, 2023",
    author: "Sofia Martinez",
    category: "Manutenção",
    tags: ["verão", "manutenção", "rega", "controlo de pragas"]
  },
  {
    id: 2,
    title: "Práticas de Jardinagem Sustentável para Cada Casa",
    excerpt: "Aprenda a criar um jardim ecológico que beneficia tanto a sua família como o ambiente.",
    content: "A jardinagem sustentável não é apenas boa para o planeta — é também melhor para as suas plantas, para a sua carteira e para a sua saúde. Eis como tornar o seu jardim mais ecológico...",
    image: "/blog/blog2.webp",
    date: "22 de Maio, 2023",
    author: "David Chen",
    category: "Sustentabilidade",
    tags: ["ecológico", "compostagem", "conservação de água", "plantas nativas"]
  },
  {
    id: 3,
    title: "Criar um Jardim que Atrai Polinizadores",
    excerpt: "Descubra quais as plantas e características que ajudarão a apoiar polinizadores vitais no seu jardim.",
    content: "Polinizadores como abelhas, borboletas e beija-flores são essenciais para jardins e ecossistemas saudáveis. Eis como tornar o seu jardim num refúgio para estas criaturas importantes...",
    image: "/blog/blog3.webp",
    date: "10 de Abril, 2023",
    author: "Amara Johnson",
    category: "Design",
    tags: ["polinizadores", "abelhas", "borboletas", "flores nativas"]
  },
  {
    id: 4,
    title: "Princípios de Design de Jardins Japoneses para Espaços Pequenos",
    excerpt: "Adapte elementos tradicionais de jardins japoneses para o seu compacto jardim urbano.",
    content: "Não precisa de hectares de terreno para criar um sereno jardim de inspiração japonesa. Aprenda a incorporar elementos-chave como água, pedra e plantas cuidadosamente selecionadas...",
    image: "/blog/blog4.webp",
    date: "5 de Março, 2023",
    author: "Sofia Martinez",
    category: "Design",
    tags: ["japonês", "jardins pequenos", "zen", "princípios de design"]
  },
  {
    id: 5,
    title: "Paisagismo Comestível: Jardins Bonitos e Deliciosos",
    excerpt: "Combine plantas ornamentais e comestíveis para criar um jardim que é tanto bonito como produtivo.",
    content: "O paisagismo comestível é a mistura perfeita de forma e função. Aprenda a integrar frutas, legumes e ervas no design do seu jardim ornamental...",
    image: "/blog/blog5.webp",
    date: "18 de Fevereiro, 2023",
    author: "Miguel Rodriguez",
    category: "Jardins Comestíveis",
    tags: ["legumes", "ervas", "flores comestíveis", "jardinagem alimentar"]
  },
  {
    id: 6,
    title: "Terapia de Jardim: Como a Jardinagem Melhora a Saúde Mental",
    excerpt: "Explore os benefícios psicológicos da jardinagem e como criar um espaço de jardim terapêutico.",
    content: "A jardinagem é mais do que um hobby — é uma forma de terapia. Descubra a ciência por detrás dos efeitos positivos da jardinagem na saúde mental e como maximizar estes benefícios...",
    image: "/blog/blog6.webp",
    date: "25 de Janeiro, 2023",
    author: "Amara Johnson",
    category: "Bem-estar",
    tags: ["saúde mental", "terapia", "redução do stress", "mindfulness"]
  }
];