
import { Menu, X } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-greenprimary-light dark:bg-darkcard shadow-none animate-fade-in-down relative">
      <div className="text-sm font-playfair font-bold text-greenprimary-dark dark:text-greenprimary-light tracking-widest">
        Arplas
      </div>
      
      <div className="flex items-center gap-4">
        {!isMobile && (
          <>
            <button
              onClick={() => scrollToSection('about')}
              className="text-xs text-greenprimary-dark dark:text-greenprimary-light hover:text-orangeaccent dark:hover:text-orangeaccent font-light transition-all duration-200 hover-scale"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-xs text-greenprimary-dark dark:text-greenprimary-light hover:text-orangeaccent dark:hover:text-orangeaccent font-light transition-all duration-200 hover-scale"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-xs text-greenprimary-dark dark:text-greenprimary-light hover:text-orangeaccent dark:hover:text-orangeaccent font-light transition-all duration-200 hover-scale"
            >
              Contacto
            </button>
          </>
        )}
        
        <ThemeToggle />
        
        {isMobile && (
          <button 
            onClick={toggleMenu}
            className="p-2 -mr-2" 
            aria-label="menu"
          >
            {isMenuOpen ? (
              <X size={22} className="text-greenprimary-dark dark:text-greenprimary-light" />
            ) : (
              <Menu size={22} className="text-greenprimary-dark dark:text-greenprimary-light" />
            )}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-greenprimary-light dark:bg-darkcard border-t border-grayborder dark:border-darkborder z-50">
          <div className="flex flex-col p-4 gap-3">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-sm text-greenprimary-dark dark:text-greenprimary-light hover:text-orangeaccent dark:hover:text-orangeaccent font-light transition-all duration-200"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left text-sm text-greenprimary-dark dark:text-greenprimary-light hover:text-orangeaccent dark:hover:text-orangeaccent font-light transition-all duration-200"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-sm text-greenprimary-dark dark:text-greenprimary-light hover:text-orangeaccent dark:hover:text-orangeaccent font-light transition-all duration-200"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
