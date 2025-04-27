
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1588329722091-6194cf41b424?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    title: "10 Dicas de Manutenção de Jardim para o Verão",
    excerpt: "Mantenha o seu jardim próspero durante os meses quentes de verão com estas dicas práticas e económicas.",
    date: "15 de Junho de 2023",
    category: "Manutenção"
  },
  {
    image: "https://images.unsplash.com/photo-1617934286773-d3262960503c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Práticas de Jardinagem Sustentável para Todos",
    excerpt: "Aprenda a criar um jardim ecológico que beneficia tanto a sua família como o ambiente, sem gastar muito.",
    date: "22 de Maio de 2023",
    category: "Sustentabilidade"
  },
  {
    image: "https://images.unsplash.com/photo-1534710961216-75c88202f43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    title: "Árvores à Venda: As Melhores Espécies para seu Jardim",
    excerpt: "Descubra as melhores árvores para comprar para o seu jardim, adequadas ao clima português, com ótimos preços.",
    date: "10 de Abril de 2023",
    category: "Vendas"
  }
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-garden-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-garden-medium rounded-full text-garden-accent font-medium mb-3">Conhecimento de Família</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Dicas e Conhecimentos de Jardinagem
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            Compartilhamos dicas práticas e económicas que ajudarão a transformar seu espaço verde com soluções simples e acessíveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#E8F5E9';
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>{post.date}</span>
                  <span className="text-garden-accent">{post.category}</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link 
                  to="/blog" 
                  className="text-garden-accent font-medium hover:underline inline-block"
                >
                  Ler Mais
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="px-6 py-3 bg-garden-accent text-white rounded-md hover:bg-garden-accent/90 transition-colors">
            <Link to="/blog">Ver Todos os Artigos</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
