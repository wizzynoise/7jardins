
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const blogPosts = [
  {
    id: 1,
    title: "10 Dicas de Manutenção de Jardins para o Verão",
    excerpt: "Mantenha o seu jardim próspero durante os meses quentes de verão com estas dicas essenciais de manutenção.",
    content: "O verão é um período crítico para os cuidados com o jardim. Com estas dez dicas, pode garantir que o seu jardim não só sobrevive ao calor, mas também prospera durante toda a estação...",
    image: "https://images.unsplash.com/photo-1588329722091-6194cf41b424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
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
    image: "https://images.unsplash.com/photo-1617934286773-d3262960503c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
    image: "https://images.unsplash.com/photo-1534710961216-75c88202f43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
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
    image: "https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
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
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "25 de Janeiro, 2023",
    author: "Amara Johnson",
    category: "Bem-estar",
    tags: ["saúde mental", "terapia", "redução do stress", "mindfulness"]
  }
];

const categories = [
  "Todos",
  "Design",
  "Manutenção",
  "Sustentabilidade",
  "Jardins Comestíveis",
  "Bem-estar"
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("Todos");
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-garden-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Blog de Jardim</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Dicas, insights e inspiração para criar e manter o seu jardim perfeito.
            </p>
          </div>
        </section>
        
        {/* Blog Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Filter Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                  <div className="flex items-center">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        className="pl-10 pr-4 w-full md:w-64"
                        placeholder="Pesquisar artigos..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className={`px-3 py-1 text-sm rounded-full ${
                          selectedCategory === category
                            ? "bg-garden-accent text-white"
                            : "bg-earth-light text-foreground hover:bg-garden-light"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Blog Posts */}
                {filteredPosts.length > 0 ? (
                  <div className="space-y-8">
                    {filteredPosts.map((post) => (
                      <Card key={post.id} className="overflow-hidden border-none shadow-md">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                          <div className="md:col-span-2">
                            <img 
                              src={post.image} 
                              alt={post.title} 
                              className="w-full h-48 object-cover"
                            />
                          </div>
                          <CardContent className="p-6 md:col-span-3">
                            <div className="flex justify-between text-sm text-muted-foreground mb-2">
                              <span>{post.date}</span>
                              <span>{post.category}</span>
                            </div>
                            <h2 className="text-2xl font-serif font-bold mb-2">{post.title}</h2>
                            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Por {post.author}</span>
                              <Button asChild variant="link" className="text-garden-accent p-0">
                                <Link to={`/blog/${post.id}`}>Ler Mais</Link>
                              </Button>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium mb-2">Nenhum artigo encontrado</h3>
                    <p className="text-muted-foreground">Tente ajustar a sua pesquisa ou filtro para encontrar o que procura.</p>
                    <Button
                      className="mt-4 bg-garden-accent hover:bg-garden-accent/90"
                      onClick={() => {
                        setSelectedCategory("Todos");
                        setSearchQuery("");
                      }}
                    >
                      Redefinir Filtros
                    </Button>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* About */}
                <Card className="mb-8 border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-4">Sobre o Nosso Blog</h3>
                    <p className="text-muted-foreground mb-6">
                      O blog 7Jardins é o seu recurso para dicas de jardinagem, inspiração de design e conselhos especializados para ajudá-lo a criar e manter belos espaços exteriores.
                    </p>
                    <Button asChild className="w-full bg-garden-accent hover:bg-garden-accent/90">
                      <Link to="/contact">Subscrever</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Popular Tags */}
                <Card className="mb-8 border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-4">Etiquetas Populares</h3>
                    <div className="flex flex-wrap gap-2">
                      {['jardinagem', 'plantas', 'design', 'sustentabilidade', 'manutenção', 'verão', 'conservação de água', 'polinizadores', 'plantas nativas', 'ervas'].map((tag) => (
                        <span key={tag} className="bg-earth-light px-3 py-1 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Recent Posts */}
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-4">Artigos Recentes</h3>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map((post) => (
                        <div key={post.id} className="flex gap-3">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div>
                            <h4 className="font-medium line-clamp-2">{post.title}</h4>
                            <p className="text-sm text-muted-foreground">{post.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
