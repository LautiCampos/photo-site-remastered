
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-background px-2 md:px-0 pt-10 pb-14 border-b border-primarygreen/10">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between gap-10">
        {/* Left: Title and call to action */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left animate-fade-in-down">
          <h1
            className="font-playfair text-primarygreen text-4xl sm:text-5xl md:text-[4rem] leading-tight font-bold mb-4"
            aria-label="Fábrica de Reciclaje Avellaneda"
          >
            Recicla <span className="text-accentorange">Hoy</span> <br />
            para un <span className="text-accentorange">Mañana Mejor</span>
          </h1>
          <p className="text-primarygreen/90 max-w-xl mb-6 text-base md:text-lg font-light">
            Somos líderes en reciclaje y fabricación sostenible en Avellaneda.
            Da el primer paso hacia un mundo más limpio y verde. 
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <a
              href="#services"
              className="px-8 py-2 font-semibold rounded-full bg-accentorange text-white shadow-lg hover:bg-accentorange-dark active:scale-95 transition-all text-base"
            >
              Descubre Nuestros Servicios
            </a>
            <a
              href="#about"
              className="px-8 py-2 font-semibold rounded-full border border-primarygreen text-primarygreen bg-white hover:bg-primarygreen/10 transition-all"
            >
              Sobre Nosotros
            </a>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center animate-scale-in [animation-delay:400ms]">
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80"
            alt="Reciclaje ecológico"
            className="rounded-2xl shadow-lg max-h-[340px] w-full md:w-[340px] object-cover border-4 border-accentorange-light"
            style={{ background: "#eeeeee" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
