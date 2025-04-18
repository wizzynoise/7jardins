
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { categories } from '@/data/categories';

const BlogPostPreview = ({ post }: { post: BlogPost & { newImage?: string, alt?: string } }) => {
  return (
    <div className="flex gap-3">
      {post.newImage && post.alt ? (
        <img
          alt={post.alt}
          src={post.newImage}
          className="w-16 h-16 object-cover rounded"
        />
      ) : null}
     <div>
        <CardTitle className="font-medium line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{post.date}</CardDescription>
      </div>
    </div>
  );
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("Todos");
  const [searchQuery, setSearchQuery] = React.useState("");
  
  // Updated blogPosts with local images
  const updatedBlogPosts = blogPosts.map(post => ({
    ...post,
    newImage: `/blog/${post.id === 1 ? 'garden-realistic.webp' : `image${post.id}.jpg`}`,
    alt: post.title
  }));

  const filteredPosts = updatedBlogPosts.filter(post => {
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Blog</h1>
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
                              alt={post.alt}
                              src={post.newImage}
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
                                <Link to={`/blog/${post.id}`}>Ler mais</Link>
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
                <Card className="border-none shadow-md mt-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-4">Posts Recentes</h3>
                    {updatedBlogPosts.slice(0, 3).map((post) => (
                      <BlogPostPreview key={post.id} post={{...post, newImage: undefined, alt: undefined}} />
                    ))}
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
