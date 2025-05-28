const AboutSection = () => {
  return (
    <section id="about" className="bg-background px-2 md:px-0 py-10 md:py-20">
      <div className="container mx-auto">
        <h2 className="font-playfair text-primarygreen text-4xl md:text-5xl mb-10 animate-fade-in font-bold">Quiénes Somos</h2>
        <div className="grid md:grid-cols-2 gap-6 bg-background md:border md:border-primarygreen/10 rounded-xl overflow-hidden">
          {/* Historia */}
          <div className="p-6 flex flex-col justify-between min-h-[270px] animate-fade-in [animation-delay:100ms]">
            <div>
              <div className="text-lg font-semibold text-primarygreen mb-2">Nuestra Historia</div>
              <p className="text-sm text-primarygreen mb-4">
                La Fábrica de Reciclaje Avellaneda es un centro dedicado al reciclaje de plástico y la fabricación de bolsas en la región de Avellaneda, Argentina.
                <br />
                Nos impulsa el deseo de proteger el planeta y ofrecer productos sostenibles de calidad para las generaciones futuras.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-block mt-2 px-6 py-2 text-sm font-semibold rounded-full bg-accentorange text-white shadow hover:bg-accentorange-dark transition-all hover-scale self-start"
            >
              Conócenos
            </a>
          </div>
          {/* Foto */}
          <div className="flex items-center justify-center bg-transparent animate-scale-in [animation-delay:200ms]">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=460&q=80"
              alt="Nuestra fábrica"
              className="rounded-lg shadow-md w-[80%] max-w-[330px] object-cover border-2 border-primarygreen-light aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
