import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, TreePalm } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-garden-dark pt-12 pb-6" aria-label="Footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-garden-accent font-serif font-bold text-xl">7</span>
              </div>
              <span className="font-serif font-bold text-2xl text-white">7Jardins</span>
            </Link>
            <p className="text-white/80 mb-4">
              Criamos jardins bonitos e sustentáveis que ligam as pessoas à natureza.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-garden-light" aria-label="Instagram (abre numa nova janela)">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-garden-light" aria-label="Facebook (abre numa nova janela)">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Links Rápidos</h3>
            <ul className="space-y-2" aria-label="Quick Links">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors" aria-label="Início">Início</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors" aria-label="Serviços">Serviços</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors" aria-label="Contacto">Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Serviços</h3>
            <ul className="space-y-2" aria-label="Serviços">
              <li><Link to="/services#maintenance" className="text-white/80 hover:text-white transition-colors" aria-label="Manutenção de Jardins">Manutenção de Jardins</Link></li>
              <li><Link to="/services#planting" className="text-white/80 hover:text-white transition-colors" aria-label="Plantação de Árvores">Plantação de Árvores</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-4">Contacte-nos</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="shrink-0 mr-2 text-garden-light" size={20} />
                <span className="text-white/80">Travessa do Cabo, 26, Rossas, 4540-475 Arouca</span>
              </li>
              <li className="flex items-center">
                <Phone className="shrink-0 mr-2 text-garden-light" size={20} />
                <span className="text-white/80">+351 912 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail className="shrink-0 mr-2 text-garden-light" size={20} />
                <a href="mailto:geral@7jardins.com" className="text-white/80 hover:text-white" aria-label="Email para geral@7jardins.com">geral@7jardins.com</a>
              </li>              
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} 7Jardins. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
