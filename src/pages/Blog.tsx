
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
    title: "10 Summer Garden Maintenance Tips",
    excerpt: "Keep your garden thriving during the hot summer months with these essential maintenance tips.",
    content: "Summer is a critical time for garden care. With these ten tips, you can ensure your garden not only survives the heat but thrives throughout the season...",
    image: "https://images.unsplash.com/photo-1588329722091-6194cf41b424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    date: "June 15, 2023",
    author: "Sophie Martinez",
    category: "Maintenance",
    tags: ["summer", "maintenance", "watering", "pest control"]
  },
  {
    id: 2,
    title: "Sustainable Gardening Practices for Every Home",
    excerpt: "Learn how to create an eco-friendly garden that benefits both your family and the environment.",
    content: "Sustainable gardening isn't just good for the planet—it's also better for your plants, your wallet, and your health. Here's how to make your garden more eco-friendly...",
    image: "https://images.unsplash.com/photo-1617934286773-d3262960503c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "May 22, 2023",
    author: "David Chen",
    category: "Sustainability",
    tags: ["eco-friendly", "composting", "water conservation", "native plants"]
  },
  {
    id: 3,
    title: "Creating a Garden that Attracts Pollinators",
    excerpt: "Discover which plants and features will help support vital pollinators in your garden.",
    content: "Pollinators like bees, butterflies, and hummingbirds are essential for healthy gardens and ecosystems. Here's how to make your garden a haven for these important creatures...",
    image: "https://images.unsplash.com/photo-1534710961216-75c88202f43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    date: "April 10, 2023",
    author: "Amara Johnson",
    category: "Design",
    tags: ["pollinators", "bees", "butterflies", "native flowers"]
  },
  {
    id: 4,
    title: "Japanese Garden Design Principles for Small Spaces",
    excerpt: "Adapt traditional Japanese garden elements for your compact urban garden.",
    content: "You don't need acres of land to create a serene Japanese-inspired garden. Learn how to incorporate key elements like water, stone, and carefully selected plants...",
    image: "https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "March 5, 2023",
    author: "Sophie Martinez",
    category: "Design",
    tags: ["Japanese", "small gardens", "zen", "design principles"]
  },
  {
    id: 5,
    title: "Edible Landscaping: Beautiful and Delicious Gardens",
    excerpt: "Combine ornamental and edible plants to create a garden that's both beautiful and productive.",
    content: "Edible landscaping is the perfect blend of form and function. Learn how to integrate fruits, vegetables, and herbs into your ornamental garden design...",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
    date: "February 18, 2023",
    author: "Miguel Rodriguez",
    category: "Edible Gardens",
    tags: ["vegetables", "herbs", "edible flowers", "food gardening"]
  },
  {
    id: 6,
    title: "Garden Therapy: How Gardening Improves Mental Health",
    excerpt: "Explore the psychological benefits of gardening and how to create a therapeutic garden space.",
    content: "Gardening is more than a hobby—it's a form of therapy. Discover the science behind gardening's positive effects on mental health and how to maximize these benefits...",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "January 25, 2023",
    author: "Amara Johnson",
    category: "Wellness",
    tags: ["mental health", "therapy", "stress reduction", "mindfulness"]
  }
];

const categories = [
  "All",
  "Design",
  "Maintenance",
  "Sustainability",
  "Edible Gardens",
  "Wellness"
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Garden Blog</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Tips, insights, and inspiration for creating and maintaining your perfect garden.
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
                        placeholder="Search articles..."
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
                              <span className="text-sm">By {post.author}</span>
                              <Button asChild variant="link" className="text-garden-accent p-0">
                                <Link to={`/blog/${post.id}`}>Read More</Link>
                              </Button>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium mb-2">No articles found</h3>
                    <p className="text-muted-foreground">Try adjusting your search or filter to find what you're looking for.</p>
                    <Button
                      className="mt-4 bg-garden-accent hover:bg-garden-accent/90"
                      onClick={() => {
                        setSelectedCategory("All");
                        setSearchQuery("");
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* About */}
                <Card className="mb-8 border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-4">About Our Blog</h3>
                    <p className="text-muted-foreground mb-6">
                      The 7Jardins blog is your resource for gardening tips, design inspiration, and expert advice to help you create and maintain beautiful outdoor spaces.
                    </p>
                    <Button asChild className="w-full bg-garden-accent hover:bg-garden-accent/90">
                      <Link to="/contact">Subscribe</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Popular Tags */}
                <Card className="mb-8 border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {['gardening', 'plants', 'design', 'sustainability', 'maintenance', 'summer', 'water conservation', 'pollinators', 'native plants', 'herbs'].map((tag) => (
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
                    <h3 className="text-xl font-serif font-bold mb-4">Recent Posts</h3>
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
