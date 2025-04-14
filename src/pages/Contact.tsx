
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
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
                      <p className="text-muted-foreground">Rua do Jardim 123, Cidade Verde, CV 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-garden-light p-3 rounded-full mr-4">
                      <Mail className="text-garden-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@7jardins.com" className="hover:text-garden-accent">info@7jardins.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-garden-light p-3 rounded-full mr-4">
                      <Phone className="text-garden-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Telefone</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+351211234567" className="hover:text-garden-accent">(+351) 211 234 567</a>
                      </p>
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
                      className="bg-garden-light hover:bg-garden-medium text-garden-accent p-3 rounded-full transition-colors"
                      aria-label="Facebook"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a 
                      href="https://instagram.com" 
                      className="bg-garden-light hover:bg-garden-medium text-garden-accent p-3 rounded-full transition-colors"
                      aria-label="Instagram" 
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a 
                      href="https://twitter.com" 
                      className="bg-garden-light hover:bg-garden-medium text-garden-accent p-3 rounded-full transition-colors"
                      aria-label="Twitter" 
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                    <a 
                      href="https://pinterest.com" 
                      className="bg-garden-light hover:bg-garden-medium text-garden-accent p-3 rounded-full transition-colors"
                      aria-label="Pinterest"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12h8"></path><path d="M12 8v8"></path><circle cx="12" cy="12" r="10"></circle></svg>
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
                          placeholder="joao@exemplo.com"
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
                          placeholder="(+351) 912 345 678"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sbg!4v1623660698863!5m2!1sen!2sbg"
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
