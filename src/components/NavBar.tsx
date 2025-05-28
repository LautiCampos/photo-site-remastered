
import { Menu } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import React from "react";

const NavBar = () => {
  const isMobile = useIsMobile();

  // Fade-down animation on mount
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-offwhite shadow-none animate-fade-in-down">
      <div className="text-sm font-light text-primarybrown">Fábrica de Reciclaje Avellaneda</div>
      <div className="flex items-center gap-6">
        {!isMobile && (
          <a href="#about" className="text-xs text-primarybrown hover:underline font-light transition-all duration-200 hover-scale">
            Sobre Nosotros
          </a>
        )}
        <button className="md:hidden p-2 -mr-2" aria-label="menu">
          <Menu size={22} className="text-primarybrown" />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
