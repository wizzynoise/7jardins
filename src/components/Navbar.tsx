
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Menu, X, TreePalm } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/about" },
    { name: "Serviços", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contacto", path: "/contact" },
  ];
  
  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" aria-label="Home">
          <div className="w-10 h-10 bg-garden-accent rounded-full flex items-center justify-center">
            <span className="text-white font-serif font-bold text-xl">7</span>
          </div>
          <span className={`font-serif font-bold text-2xl ${scrolled ? 'text-garden-accent' : 'text-white'}`}>
            Jardins
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium hover:text-garden-accent transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              aria-label={link.name}
            >
              {link.name}
            </Link>
          ))}
          <Button
            className="bg-garden-accent text-white hover:bg-garden-accent/90"
            aria-label="Pedir Orçamento"
            asChild
          >
            <a href="/contact" target="_blank" rel="noopener noreferrer">
            Pedir Orçamento
            </a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-garden-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X />
          ) : (
            <Menu />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-foreground font-medium py-2 hover:text-garden-accent"
              >
                {link.name}              
              </Link>
            ))}
            <Button
              className="bg-garden-accent text-white hover:bg-garden-accent/90 w-full"
              onClick={() => setIsOpen(false)}
              aria-label="Pedir Orçamento"
              asChild
            >
              <a href="/contact" target="_blank" rel="noopener noreferrer">
                Pedir Orçamento
              </a>
            >
              Pedir Orçamento
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
