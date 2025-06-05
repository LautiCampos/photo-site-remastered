
const AboutSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="bg-offwhite dark:bg-darkbg px-2 md:px-0 py-10 md:py-20">
      <div className="container mx-auto">
        <h2 className="font-playfair text-greenprimary-dark dark:text-greenprimary-light text-4xl md:text-5xl mb-10 animate-fade-in">Quiénes Somos</h2>
        <div className="grid md:grid-cols-2 gap-6 bg-offwhite dark:bg-darkcard md:border md:border-grayborder dark:border-darkborder rounded-xl overflow-hidden">
          {/* Historia */}
          <div className="p-6 flex flex-col justify-between min-h-[270px] animate-fade-in [animation-delay:100ms]">
            <div>
              <div className="text-lg font-semibold text-greenprimary-dark dark:text-greenprimary-light mb-2">Nuestra Historia</div>
              <p className="text-sm text-greenprimary-dark dark:text-greenprimary-light mb-4">
                Arplas es un centro de reciclaje y fabricación sustentable en Avellaneda, Argentina.
                <br />
                Nuestra misión es reducir el impacto ambiental mediante innovaciones ecológicas y productos reciclados de calidad.
              </p>
            </div>
            <button
              onClick={scrollToContact}
              className="inline-block mt-2 px-6 py-2 text-sm font-normal rounded-full bg-orangeaccent text-white shadow-sm hover:brightness-90 active:scale-95 transition-all hover-scale self-start"
            >
              Conócenos
            </button>
          </div>
          {/* Foto */}
          <div className="flex items-center justify-center bg-transparent animate-scale-in [animation-delay:200ms]">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=460&q=80"
              alt="Equipo Arplas"
              className="rounded-lg shadow-md w-[80%] max-w-[330px] aspect-square object-cover border-2 border-greenprimary-light dark:border-greenprimary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
