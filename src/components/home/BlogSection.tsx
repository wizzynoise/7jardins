
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1588329722091-6194cf41b424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    title: "10 Summer Garden Maintenance Tips",
    excerpt: "Keep your garden thriving during the hot summer months with these essential maintenance tips.",
    date: "June 15, 2023",
    category: "Maintenance"
  },
  {
    image: "https://images.unsplash.com/photo-1617934286773-d3262960503c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Sustainable Gardening Practices for Every Home",
    excerpt: "Learn how to create an eco-friendly garden that benefits both your family and the environment.",
    date: "May 22, 2023",
    category: "Sustainability"
  },
  {
    image: "https://images.unsplash.com/photo-1534710961216-75c88202f43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    title: "Creating a Garden that Attracts Pollinators",
    excerpt: "Discover which plants and features will help support vital pollinators in your garden.",
    date: "April 10, 2023",
    category: "Design"
  }
];

const BlogSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-garden-accent font-medium mb-2">Our Blog</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Garden Insights & Tips
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Explore our latest articles for gardening advice, inspiration, and insights from our experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>{post.date}</span>
                  <span>{post.category}</span>
                </div>
                <h4 className="text-xl font-serif font-bold mb-2">{post.title}</h4>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link 
                  to="/blog" 
                  className="text-garden-accent font-medium hover:underline"
                >
                  Read More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild className="bg-garden-accent hover:bg-garden-accent/90">
            <Link to="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
