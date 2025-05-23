
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Erro: O utilizador tentou aceder a uma rota inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-earth-light">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-8xl font-serif font-bold text-garden-accent mb-4">404</h1>
          <h2 className="text-3xl font-serif font-bold mb-6">Página Não Encontrada</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            A página que procura não existe ou foi movida.
          </p>
          <Button asChild size="lg" className="bg-garden-accent hover:bg-garden-accent/90">
            <Link to="/">
              <Home className="mr-2" size={18} />
              Voltar à Página Inicial
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
