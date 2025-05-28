
const cardBase =
  "border border-gray-300 rounded-lg bg-offwhite p-6 flex flex-col min-h-[180px] transition duration-200 hover:shadow-lg hover-scale";

const ServicesSection = () => (
  <section id="services" className="bg-offwhite px-2 md:px-0 py-10 md:py-20">
    <div className="container mx-auto">
      <h2 className="font-playfair text-primarybrown text-4xl md:text-5xl mb-10 text-center animate-fade-in">
        Nuestros Servicios
      </h2>
      <div className="mb-8 text-center w-full animate-fade-in [animation-delay:100ms]">
        <div className="text-md font-medium text-primarybrown">Lo Que Ofrecemos</div>
        <p className="text-primarybrown text-sm max-w-2xl mx-auto mt-2 mb-6">
          En nuestra fábrica, brindamos servicios de reciclaje de plástico y fabricación de bolsas, con un enfoque en la sostenibilidad y calidad.
          Nuestros productos son ideales para quienes buscan soluciones eco-amigables y prácticas para sus necesidades diarias.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Reciclaje */}
        <div className={cardBase + " animate-fade-in [animation-delay:0ms]"}>
          <div className="font-semibold text-primarybrown mb-2 text-lg">Reciclaje</div>
          <div className="text-xs font-bold text-primarybrown mb-1">Cuidado del Medio Ambiente</div>
          <p className="text-sm text-primarybrown">
            Nuestros servicios de reciclaje de plástico permiten reducir la contaminación y fomentan la reutilización de materiales, contribuyendo positivamente al cuidado del medio ambiente y la creación de una economía circular.
          </p>
        </div>
        {/* Fabricación */}
        <div className={cardBase + " animate-fade-in [animation-delay:100ms]"}>
          <div className="font-semibold text-primarybrown mb-2 text-lg">Fabricación</div>
          <div className="text-xs font-bold text-primarybrown mb-1">Productos Sostenibles</div>
          <p className="text-sm text-primarybrown">
            La fabricación de bolsas en nuestra fábrica se realiza con materiales reciclados y respetuosos con el medio ambiente. Ofrecemos productos de calidad que promueven la sostenibilidad y el consumo consciente.
          </p>
        </div>
        {/* Personalización */}
        <div className={cardBase + " animate-fade-in [animation-delay:200ms]"}>
          <div className="font-semibold text-primarybrown mb-2 text-lg">Personalización</div>
          <div className="text-xs font-bold text-primarybrown mb-1">A Medida</div>
          <p className="text-sm text-primarybrown">
            Además de nuestros servicios estándar, ofrecemos la posibilidad de personalizar productos según las necesidades y preferencias de nuestros clientes. Desde bolsas personalizadas hasta soluciones de reciclaje específicas.
          </p>
        </div>
        {/* Innovación */}
        <div className={cardBase + " animate-fade-in [animation-delay:300ms]"}>
          <div className="font-semibold text-primarybrown mb-2 text-lg">Innovación</div>
          <div className="text-xs font-bold text-primarybrown mb-1">Tecnología Avanzada</div>
          <p className="text-sm text-primarybrown">
            Nos mantenemos a la vanguardia de la innovación en reciclaje y fabricación, utilizando tecnología avanzada para mejorar nuestros procesos y productos. Nuestro enfoque en la innovación nos permite seguir siendo líderes en el mercado.
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-center animate-fade-in [animation-delay:400ms]">
        <a
          href="#contact"
          className="px-8 py-2 text-sm rounded-full bg-accentburgundy text-white hover:brightness-90 transition-all shadow-sm hover-scale"
        >
          Ver Más
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
