
const cardBase =
  "border border-grayborder dark:border-darkborder rounded-lg bg-offwhite dark:bg-darkcard p-6 flex flex-col min-h-[180px] transition duration-200 hover:shadow-lg hover-scale";

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="bg-offwhite dark:bg-darkbg px-2 md:px-0 py-10 md:py-20">
      <div className="container mx-auto">
        <h2 className="font-playfair text-greenprimary-dark dark:text-greenprimary-light text-4xl md:text-5xl mb-10 text-center animate-fade-in">
          Nuestros Servicios
        </h2>
        <div className="mb-8 text-center w-full animate-fade-in [animation-delay:100ms]">
          <div className="text-md font-semibold text-greenprimary-dark dark:text-greenprimary-light">Lo Que Ofrecemos</div>
          <p className="text-greenprimary-dark dark:text-greenprimary-light text-sm max-w-2xl mx-auto mt-2 mb-6">
            Reciclaje de plástico y fabricación sustentable de bolsas y materiales eco-amigables, con máxima calidad.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Reciclaje */}
          <div className={cardBase + " animate-fade-in [animation-delay:0ms]"}>
            <div className="font-semibold text-greenprimary-dark dark:text-greenprimary-light mb-2 text-lg">Reciclaje</div>
            <div className="text-xs font-bold text-orangeaccent-dark mb-1">Cuidado Ambiental</div>
            <p className="text-sm text-greenprimary-dark dark:text-greenprimary-light">
              Reciclamos plástico para reducir la contaminación y fomentar la reutilización, colaborando con un planeta más saludable.
            </p>
          </div>
          {/* Fabricación */}
          <div className={cardBase + " animate-fade-in [animation-delay:100ms]"}>
            <div className="font-semibold text-greenprimary-dark dark:text-greenprimary-light mb-2 text-lg">Fabricación</div>
            <div className="text-xs font-bold text-orangeaccent-dark mb-1">Sustentabilidad</div>
            <p className="text-sm text-greenprimary-dark dark:text-greenprimary-light">
              Producimos bolsas y artículos con materiales reciclados y responsables, ideales para fomentar el consumo consciente.
            </p>
          </div>
          {/* Personalización */}
          <div className={cardBase + " animate-fade-in [animation-delay:200ms]"}>
            <div className="font-semibold text-greenprimary-dark dark:text-greenprimary-light mb-2 text-lg">Personalización</div>
            <div className="text-xs font-bold text-orangeaccent-dark mb-1">A Medida</div>
            <p className="text-sm text-greenprimary-dark dark:text-greenprimary-light">
              Personalizamos productos y soluciones de acuerdo a tus necesidades, desde bolsas hasta servicios de reciclaje.
            </p>
          </div>
          {/* Innovación */}
          <div className={cardBase + " animate-fade-in [animation-delay:300ms]"}>
            <div className="font-semibold text-greenprimary-dark dark:text-greenprimary-light mb-2 text-lg">Innovación</div>
            <div className="text-xs font-bold text-orangeaccent-dark mb-1">Tecnología</div>
            <p className="text-sm text-greenprimary-dark dark:text-greenprimary-light">
              Usamos tecnología avanzada para mejorar procesos y materiales, manteniéndonos a la vanguardia del sector ecológico.
            </p>
          </div>
        </div>
        <div className="flex justify-center animate-fade-in [animation-delay:400ms]">
          <button
            onClick={scrollToContact}
            className="px-8 py-2 text-sm rounded-full bg-greenprimary text-white hover:bg-greenprimary-dark transition-all shadow-sm hover-scale"
          >
            Ver Más
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
