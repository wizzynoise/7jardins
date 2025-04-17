import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook, Twitter, Pinterest } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário submetido com dados:', formData);
    toast.success('A sua mensagem foi enviada! Entraremos em contacto em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      service: ''
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-garden-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Contacte-nos</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Tem alguma questão ou está pronto para iniciar o seu projeto de jardim? Entre em contacto com a nossa equipa.
            </p>
          </div>
        </section>
        
        {/* Contact Info & Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8">Contactos</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-garden-light p-3 rounded-full mr-4">
                      <MapPin className="text-garden-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">A Nossa Localização</h3>
                      <p className="text-muted-foreground">Travessa do Cabo, 26, Rossas, 4540-475 Arouca</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-garden-light p-3 rounded-full mr-4">
                      <Mail className="text-garden-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:geral@7jardins.com" className="hover:text-garden-accent">geral@7jardins.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-garden-light p-3 rounded-full mr-4">
                      <Phone className="text-garden-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Telefone</h3>
                      <p className="text-muted-foreground">912 345 678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-garden-light p-3 rounded-full mr-4">
                      <Clock className="text-garden-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Horário de Funcionamento</h3>
                      <p className="text-muted-foreground mb-1">Segunda a Sexta: 8:00 - 18:00</p>
                      <p className="text-muted-foreground">Sábado: 9:00 - 16:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-semibold text-lg mb-4">Siga-nos</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-garden-light hover:bg-garden-medium text-garden-accent p-3 rounded-full transition-colors"
                      aria-label="Facebook (Opens in a new tab)"
                    >
                      <Facebook />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-garden-light hover:bg-garden-medium text-garden-accent p-3 rounded-full transition-colors"
                      aria-label="Instagram (Opens in a new tab)"
                    >
                      <Instagram />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-garden-light hover:bg-garden-medium text-garden-accent p-3 rounded-full transition-colors"
                      aria-label="Twitter (Opens in a new tab)"
                    >
                      <Twitter />
                    </a>
                    <a
                      href="https://pinterest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-garden-light hover:bg-garden-medium text-garden-accent p-3 rounded-full transition-colors"
                      aria-label="Pinterest (Opens in a new tab)"
                    >
                      <Pinterest />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-3xl font-serif font-bold mb-6">Envie-nos uma Mensagem</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">O Seu Nome</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="João Silva"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Endereço de Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="joao@exemplo.com.pt"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Número de Telefone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          pattern="[0-9]{9}"
                          placeholder="912 345 678"
                          value={formData.phone}
                          onChange={handleChange}
                      
                      <div className="space-y-2">
                        <Label htmlFor="service">Interesse em Serviço</Label>
                        <Select onValueChange={handleServiceChange} value={formData.service}>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Selecione um serviço" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="garden-design">Design de Jardins</SelectItem>
                            <SelectItem value="landscaping">Paisagismo</SelectItem>
                            <SelectItem value="maintenance">Manutenção de Jardins</SelectItem>
                            <SelectItem value="irrigation">Sistemas de Irrigação</SelectItem>
                            <SelectItem value="consulting">Consultoria</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Como podemos ajudar?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Conte-nos mais sobre o seu projeto ou dúvida..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-garden-accent hover:bg-garden-accent/90">
                      <Send className="mr-2" size={18} />
                      Enviar Mensagem
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Localização</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Visite o nosso local para discutir o seu projeto de jardim pessoalmente.
              </p>
            </div>
            
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.550195191421!2d-8.254991623480658!3d40.93158687137478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23070e0c7a5499%3A0x92fb1f2b9fc57aeb!2sTravessa%20do%20Cabo%2C%2026%2C%204540-475%20Rossas!5e0!3m2!1sen!2spt-PT!4v1717414049707!5m2!1sen!2spt-PT"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da 7Jardins"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
