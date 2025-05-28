
import { Menu } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import React from "react";

const NavBar = () => {
  const isMobile = useIsMobile();

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-greenprimary-light shadow-none animate-fade-in-down">
      <div className="text-sm font-playfair font-bold text-greenprimary-dark tracking-widest">
        Arplas
      </div>
      <div className="flex items-center gap-6">
        {!isMobile && (
          <a
            href="#about"
            className="text-xs text-greenprimary-dark hover:underline font-light transition-all duration-200 hover-scale"
          >
            Sobre Nosotros
          </a>
        )}
        <button className="md:hidden p-2 -mr-2" aria-label="menu">
          <Menu size={22} className="text-greenprimary-dark" />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
