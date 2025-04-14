
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CalendarClock, Users, Award, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: "Sophie Martinez",
    position: "Founder & Lead Designer",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    bio: "With over 20 years of experience, Sophie founded 7Jardins with a vision to create sustainable, beautiful gardens across the region."
  },
  {
    name: "David Chen",
    position: "Senior Landscape Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    bio: "David brings 15 years of expertise in landscape architecture, specializing in integrating natural elements with modern design principles."
  },
  {
    name: "Amara Johnson",
    position: "Horticulturist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    bio: "With a degree in Botany and certification in Horticulture, Amara ensures every plant in our gardens thrives in its environment."
  },
  {
    name: "Miguel Rodriguez",
    position: "Project Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    bio: "Miguel coordinates our projects with precision and care, ensuring timely completion while maintaining the highest quality standards."
  }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-garden-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">About 7Jardins</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Our story, our team, and our passion for creating beautiful garden spaces.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1599685315640-9ceab2f58148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Garden team planning" 
                  className="rounded-lg shadow-lg w-full object-cover h-[500px]"
                />
              </div>
              
              <div>
                <h2 className="text-garden-accent font-medium mb-2">Our Story</h2>
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  A Passion for Gardens Since 2008
                </h3>
                <p className="mb-4 text-lg">
                  7Jardins was founded in 2008 by Sophie Martinez, a landscape architect with a vision
                  to create gardens that seamlessly blend beauty, functionality, and sustainability.
                </p>
                <p className="mb-4">
                  What started as a small team of passionate garden enthusiasts has grown into a 
                  full-service landscaping company with a reputation for excellence. Over the years, 
                  we've completed hundreds of projects, from intimate residential gardens to sprawling 
                  commercial landscapes.
                </p>
                <p className="mb-6">
                  Our name, 7Jardins, represents the seven principles that guide our work: creativity, 
                  sustainability, craftsmanship, attention to detail, client collaboration, environmental 
                  stewardship, and continuous innovation.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-garden-light w-16 h-16 rounded-full flex items-center justify-center mb-3">
                      <CalendarClock className="text-garden-accent" size={24} />
                    </div>
                    <h4 className="font-semibold">15+ Years</h4>
                    <p className="text-sm text-muted-foreground">Experience</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-garden-light w-16 h-16 rounded-full flex items-center justify-center mb-3">
                      <Users className="text-garden-accent" size={24} />
                    </div>
                    <h4 className="font-semibold">20+ Experts</h4>
                    <p className="text-sm text-muted-foreground">Team Members</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-garden-light w-16 h-16 rounded-full flex items-center justify-center mb-3">
                      <Award className="text-garden-accent" size={24} />
                    </div>
                    <h4 className="font-semibold">12 Awards</h4>
                    <p className="text-sm text-muted-foreground">For Excellence</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-garden-light w-16 h-16 rounded-full flex items-center justify-center mb-3">
                      <ThumbsUp className="text-garden-accent" size={24} />
                    </div>
                    <h4 className="font-semibold">500+</h4>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-earth-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-garden-accent font-medium mb-2">Our Values</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                What Drives Us
              </h3>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                These core principles guide our approach to every project and interaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-serif font-bold mb-3">Sustainability</h4>
                <p>We design and maintain gardens with eco-friendly practices, focusing on water conservation, native plants, and sustainable materials.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-serif font-bold mb-3">Craftsmanship</h4>
                <p>We take pride in attention to detail and quality craftsmanship in every aspect of our work, from design to implementation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-serif font-bold mb-3">Innovation</h4>
                <p>We continuously explore new techniques, materials, and design approaches to create unique and effective garden solutions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-serif font-bold mb-3">Collaboration</h4>
                <p>We work closely with our clients, listening to their needs and preferences to create gardens that reflect their vision.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-serif font-bold mb-3">Education</h4>
                <p>We believe in sharing our knowledge, helping clients understand how to care for their gardens and appreciate the natural world.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-serif font-bold mb-3">Community</h4>
                <p>We are committed to supporting local communities through sustainable landscaping practices and community garden initiatives.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-garden-accent font-medium mb-2">Our Team</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Meet the Experts
              </h3>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Our passionate team brings together expertise in landscape architecture, horticulture, and garden design.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        
        {/* CTA */}
        <section className="py-16 bg-garden-accent">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-serif font-bold mb-4 text-white">
              Ready to Start Your Garden Project?
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Contact our team today to schedule a consultation and bring your garden dreams to life.
            </p>
            <Button asChild size="lg" className="bg-white text-garden-accent hover:bg-white/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
