import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, PenTool, Shovel, Leaf, Droplet, Trees, BookOpen, Sunset } from 'lucide-react';

const services = [
  {
    id: "design",
    title: "Garden Design",
    icon: <PenTool size={36} className="text-garden-accent" />,
    description: "Our expert designers create custom garden plans tailored to your specific needs, preferences, and site conditions.",
    features: [
      "Initial consultation and site assessment",
      "Conceptual design and visualization",
      "Detailed planting and hardscape plans",
      "Material selection assistance",
      "Irrigation and lighting planning"
    ],
    image: "https://images.unsplash.com/photo-1528092744838-b91de0a10615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "landscaping",
    title: "Landscaping",
    icon: <Shovel size={36} className="text-garden-accent" />,
    description: "We transform your outdoor space with professional installation of both softscape and hardscape elements.",
    features: [
      "Site preparation and grading",
      "Hardscape installation (patios, walkways, retaining walls)",
      "Planting of trees, shrubs, and flowers",
      "Mulching and soil amendments",
      "Water feature installation"
    ],
    image: "https://images.unsplash.com/photo-1626863905122-b51b8413e384?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "maintenance",
    title: "Garden Maintenance",
    icon: <Leaf size={36} className="text-garden-accent" />,
    description: "Our ongoing maintenance services keep your garden looking beautiful and healthy throughout the seasons.",
    features: [
      "Regular lawn care and mowing",
      "Pruning and plant health care",
      "Seasonal clean-up and mulching",
      "Fertilization and weed control",
      "Pest and disease management"
    ],
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "irrigation",
    title: "Irrigation Systems",
    icon: <Droplet size={36} className="text-garden-accent" />,
    description: "We design and install efficient irrigation systems that conserve water while keeping your garden healthy.",
    features: [
      "Custom irrigation system design",
      "Water-efficient sprinkler installation",
      "Drip irrigation for targeted watering",
      "Smart controller setup and programming",
      "System maintenance and repairs"
    ],
    image: "https://images.unsplash.com/photo-1576627096430-88c7969ada33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "consulting",
    title: "Consulting",
    icon: <BookOpen size={36} className="text-garden-accent" />,
    description: "Our experts provide professional advice to help you make informed decisions about your garden.",
    features: [
      "Plant selection guidance",
      "Problem diagnosis and solutions",
      "Soil testing and amendment recommendations",
      "Sustainable gardening practices",
      "DIY project planning assistance"
    ],
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "seasonal",
    title: "Seasonal Services",
    icon: <Sunset size={36} className="text-garden-accent" />,
    description: "We provide specialized care for your garden as the seasons change, ensuring year-round beauty.",
    features: [
      "Spring garden preparation and planting",
      "Summer maintenance and pest control",
      "Fall clean-up and winterization",
      "Winter protection and planning",
      "Holiday lighting and decoration"
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Services</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              From design to maintenance, we provide comprehensive garden services 
              tailored to meet your specific needs.
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
                      <Link to="/contact">Inquire About This Service</Link>
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
              <h2 className="text-garden-accent font-medium mb-2">Our Process</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                How We Work
              </h3>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                We follow a structured approach to ensure your garden project is completed
                efficiently and to the highest standards.
              </p>
            </div>
            
            <div className="relative">
              {/* Process Steps */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-garden-medium -translate-x-1/2"></div>
              
              <div className="space-y-12 relative">
                {/* Step 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div className="md:text-right md:pr-12">
                    <h4 className="text-xl font-serif font-bold mb-2">1. Initial Consultation</h4>
                    <p>We meet with you to discuss your vision, requirements, and budget for your garden project.</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-4 w-8 h-8 bg-garden-accent rounded-full -translate-x-1/2"></div>
                  <div className="md:pl-12">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                      alt="Initial consultation" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div className="md:order-2 md:pl-12">
                    <h4 className="text-xl font-serif font-bold mb-2">2. Site Assessment & Design</h4>
                    <p>Our team evaluates your space and creates a custom design plan that aligns with your vision.</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-4 w-8 h-8 bg-garden-accent rounded-full -translate-x-1/2"></div>
                  <div className="md:order-1 md:text-right md:pr-12">
                    <img 
                      src="https://images.unsplash.com/photo-1553530979-fbb9e4aee36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Site assessment and design" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div className="md:text-right md:pr-12">
                    <h4 className="text-xl font-serif font-bold mb-2">3. Project Planning</h4>
                    <p>We develop a detailed project plan, including timeline, materials, and cost estimates for your approval.</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-4 w-8 h-8 bg-garden-accent rounded-full -translate-x-1/2"></div>
                  <div className="md:pl-12">
                    <img 
                      src="https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Project planning" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div className="md:order-2 md:pl-12">
                    <h4 className="text-xl font-serif font-bold mb-2">4. Implementation</h4>
                    <p>Our skilled team brings your garden to life, handling all aspects of construction and planting.</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-4 w-8 h-8 bg-garden-accent rounded-full -translate-x-1/2"></div>
                  <div className="md:order-1 md:text-right md:pr-12">
                    <img 
                      src="https://images.unsplash.com/photo-1599708153386-62bf3adce970?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Implementation" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div className="md:text-right md:pr-12">
                    <h4 className="text-xl font-serif font-bold mb-2">5. Completion & Care</h4>
                    <p>We finalize your project and provide guidance on caring for your new garden to ensure it thrives for years to come.</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-4 w-8 h-8 bg-garden-accent rounded-full -translate-x-1/2"></div>
                  <div className="md:pl-12">
                    <img 
                      src="https://images.unsplash.com/photo-1555955208-94f6fafea771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Completion and care" 
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
              Ready to Transform Your Outdoor Space?
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and take the first step towards your dream garden.
            </p>
            <Button asChild size="lg" className="bg-white text-garden-accent hover:bg-white/90">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
