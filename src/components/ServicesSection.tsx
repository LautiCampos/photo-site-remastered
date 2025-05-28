import React from "react";

const cardBase =
  "border border-primarygreen/15 rounded-lg bg-white p-6 flex flex-col min-h-[180px] transition duration-200 hover:shadow-lg hover-scale";

const ServicesSection = () => (
  <section id="services" className="bg-background px-2 md:px-0 py-10 md:py-20">
    <div className="container mx-auto">
      <h2 className="font-playfair text-primarygreen text-4xl md:text-5xl mb-10 text-center animate-fade-in font-bold">
        Nuestros Servicios
      </h2>
      <div className="mb-8 text-center w-full animate-fade-in [animation-delay:100ms]">
        <div className="text-md font-semibold text-primarygreen">Lo Que Ofrecemos</div>
        <p className="text-primarygreen/90 text-sm max-w-2xl mx-auto mt-2 mb-6">
          En nuestra fábrica brindamos servicios de reciclaje de plástico y fabricación de bolsas, con un enfoque en la sostenibilidad y la calidad.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Reciclaje */}
        <div className={cardBase + " animate-fade-in [animation-delay:0ms]"}>
          <div className="font-semibold text-primarygreen mb-2 text-lg">Reciclaje</div>
          <div className="text-xs font-bold text-accentorange mb-1">Cuidado del Medio Ambiente</div>
          <p className="text-sm text-primarygreen">
            Nuestros servicios de reciclaje contribuyen activamente al cuidado del ambiente y al desarrollo de una economía circular.
          </p>
        </div>
        {/* Fabricación */}
        <div className={cardBase + " animate-fade-in [animation-delay:100ms]"}>
          <div className="font-semibold text-primarygreen mb-2 text-lg">Fabricación</div>
          <div className="text-xs font-bold text-accentorange mb-1">Productos Sostenibles</div>
          <p className="text-sm text-primarygreen">
            Fabricamos bolsas y otros productos reciclados de calidad, promoviendo el consumo responsable y protegido.
          </p>
        </div>
        {/* Personalización */}
        <div className={cardBase + " animate-fade-in [animation-delay:200ms]"}>
          <div className="font-semibold text-primarygreen mb-2 text-lg">Personalización</div>
          <div className="text-xs font-bold text-accentorange mb-1">A Medida</div>
          <p className="text-sm text-primarygreen">
            Ofrecemos productos personalizados adaptados a tus necesidades y preferencias, ya sea para tu hogar o empresa.
          </p>
        </div>
        {/* Innovación */}
        <div className={cardBase + " animate-fade-in [animation-delay:300ms]"}>
          <div className="font-semibold text-primarygreen mb-2 text-lg">Innovación</div>
          <div className="text-xs font-bold text-accentorange mb-1">Tecnología Avanzada</div>
          <p className="text-sm text-primarygreen">
            Nuestra tecnología innovadora nos permite mejorar constantemente nuestros procesos y ofrecer lo mejor del mercado.
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-center animate-fade-in [animation-delay:400ms]">
        <a
          href="#contact"
          className="px-8 py-2 text-sm rounded-full bg-accentorange text-white hover:bg-accentorange-dark transition-all shadow hover-scale font-semibold"
        >
          Ver Más
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
