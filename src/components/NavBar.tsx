
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-gradient-to-br from-greenprimary-light to-orangeaccent-light dark:from-greenprimary-dark dark:to-orangeaccent-dark shadow-none animate-fade-in-down">
      <div className="flex items-center gap-3">
        <img 
          src="/lovable-uploads/64df71ed-3a61-4be0-844b-86aec09f3b41.png" 
          alt="Arplas Logo" 
          className="w-8 h-8"
        />
        <div className="text-sm font-playfair font-bold text-greenprimary-dark dark:text-greenprimary-light tracking-widest">
          Arplas
        </div>
      </div>
      
      <div className="flex items-center gap-6">
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
        
        <ThemeToggle />
      </div>
    </header>
  );
};

export default NavBar;
