
const AboutSection = () => {
  return (
    <section id="about" className="bg-offwhite px-2 md:px-0 py-10 md:py-20">
      <div className="container mx-auto">
        <h2 className="font-playfair text-primarybrown text-4xl md:text-5xl mb-10 animate-fade-in">Quiénes Somos</h2>
        <div className="grid md:grid-cols-2 gap-6 bg-offwhite md:border md:border-gray-300 rounded-xl overflow-hidden">
          {/* Historia */}
          <div className="p-6 flex flex-col justify-between min-h-[270px] animate-fade-in [animation-delay:100ms]">
            <div>
              <div className="text-lg font-medium text-primarybrown mb-2">Nuestra Historia</div>
              <p className="text-sm text-primarybrown mb-4">
                La Fábrica de Reciclaje Avellaneda es un centro dedicado al reciclaje de plástico y la fabricación de bolsas en la región de Avellaneda, Argentina.
                <br />
                Nuestro compromiso con la sostenibilidad y la protección del medio ambiente nos impulsa a ofrecer soluciones eco-amigables para un futuro más limpio y saludable.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-block mt-2 px-6 py-2 text-sm font-normal rounded-full bg-accentburgundy text-white shadow-sm hover:brightness-90 active:scale-95 transition-all hover-scale self-start"
            >
              Conócenos
            </a>
          </div>
          {/* Foto */}
          <div className="flex items-center justify-center bg-transparent animate-scale-in [animation-delay:200ms]">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=460&q=80"
              alt="Nuestra fábrica"
              className="rounded-lg shadow-md w-[80%] max-w-[330px] aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
