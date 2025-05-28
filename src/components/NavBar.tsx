
import { Menu } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import React from "react";

const NavBar = () => {
  const isMobile = useIsMobile();

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-background shadow-md animate-fade-in-down border-b border-primarygreen/10">
      <div className="text-sm font-bold font-playfair text-primarygreen tracking-wide">
        Fábrica de Reciclaje Avellaneda
      </div>
      <div className="flex items-center gap-6">
        {!isMobile && (
          <a href="#about" className="text-xs text-primarygreen hover:text-accentorange font-medium transition-all hover-scale">
            Sobre Nosotros
          </a>
        )}
        <button className="md:hidden p-2 -mr-2" aria-label="menu">
          <Menu size={22} className="text-primarygreen" />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
