
const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-greenprimary-light to-orangeaccent-light dark:from-greenprimary-dark dark:to-orangeaccent-dark px-2 md:px-0 pt-6 pb-12 md:pb-20 relative overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:items-stretch gap-8 md:gap-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start mt-4 md:mt-12 animate-fade-in">
          <div className="mb-2 px-4 py-1 rounded-full bg-orangeaccent-dark/90 text-white text-xs font-bold uppercase tracking-wider shadow">
            Fábrica Sustentable
          </div>
          <h1 className="font-playfair text-greenprimary-dark dark:text-greenprimary-light text-[2.4rem] md:text-[4rem] leading-tight font-bold mb-3 drop-shadow">
            Bienvenido a Arplas
          </h1>
          <p className="text-greenprimary-dark dark:text-greenprimary-light max-w-xl mb-4 ml-1 text-base md:text-lg font-light">
            Somos líderes en reciclaje innovador y fabricación sustentable de bolsas y plásticos en Argentina. 
            Contribuimos a un futuro más limpio, verde y responsable, cuidando nuestro planeta.
          </p>
          <div className="flex gap-3 mt-2">
            <button
              onClick={scrollToServices}
              className="px-6 py-2 rounded-full bg-greenprimary text-white font-semibold shadow-md hover:bg-greenprimary-dark transition hover-scale text-base"
            >
              Ver Servicios
            </button>
            <button
              onClick={scrollToContact}
              className="px-6 py-2 rounded-full bg-orangeaccent text-white font-semibold shadow-md hover:bg-orangeaccent-dark transition hover-scale text-base"
            >
              Contáctanos
            </button>
          </div>
        </div>
        {/* Right Graphic */}
        <div className="flex-1 flex items-center justify-center animate-scale-in [animation-delay:200ms]">
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=550&q=80"
            alt="Reciclaje Arplas"
            className="rounded-2xl shadow-xl max-h-[340px] object-cover w-full md:w-[87%] border-4 border-orangeaccent"
            style={{ background: "#e3fbdb" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
