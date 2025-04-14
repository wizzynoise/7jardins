
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-garden-dark pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-garden-accent font-serif font-bold text-xl">7</span>
              </div>
              <span className="font-serif font-bold text-2xl text-white">Jardins</span>
            </Link>
            <p className="text-white/80 mb-4">
              Creating beautiful, sustainable gardens that connect people with nature.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-white hover:text-garden-light" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-white hover:text-garden-light" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-garden-light" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Garden Design</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Landscaping</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Garden Maintenance</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Irrigation Systems</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="shrink-0 mr-2 text-garden-light" size={20} />
                <span className="text-white/80">123 Garden Street, Green City, GC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="shrink-0 mr-2 text-garden-light" size={20} />
                <a href="tel:+15551234567" className="text-white/80 hover:text-white">(555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail className="shrink-0 mr-2 text-garden-light" size={20} />
                <a href="mailto:info@7jardins.com" className="text-white/80 hover:text-white">info@7jardins.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} 7Jardins. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
