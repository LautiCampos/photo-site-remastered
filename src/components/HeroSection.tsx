
const HeroSection = () => {
  return (
    <section className="bg-offwhite px-2 md:px-0 pt-4 pb-10 md:pb-20 animate-fade-in">
      <div className="container mx-auto flex flex-col items-start">
        <h1
          className="font-playfair text-primarybrown text-[2.8rem] md:text-[7rem] leading-[0.95] font-bold mb-4 mt-6 md:mt-10"
          aria-label="Bienvenidos"
        >
          Bienvenidos
        </h1>
        <p className="text-primarybrown max-w-xl mb-4 ml-1 text-base md:text-lg">
          ¡Bienvenidos a nuestra fábrica de reciclaje en Avellaneda! Estamos comprometidos con el cuidado del medio ambiente y la fabricación sostenible de productos.
        </p>
        <div className="flex items-center w-full gap-3 mb-4">
          <a
            href="#services"
            className="px-6 py-2 font-medium rounded-full bg-accentburgundy text-white shadow-md hover:brightness-90 active:scale-95 transition-all"
            style={{ fontSize: "1rem" }}
          >
            Ver Servicios
          </a>
        </div>
        <div className="w-full overflow-x-auto whitespace-nowrap mb-4">
          <span className="font-playfair text-primarybrown/80 text-lg md:text-xl tracking-wide">
            Reciclaje Eco-Friendly &nbsp;•&nbsp; Reciclaje Eco-Friendly &nbsp;•&nbsp; Reciclaje Eco-Friendly &nbsp;•&nbsp; Reciclaje Eco-Friendly
          </span>
        </div>
        <div className="w-full flex justify-center mt-3">
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80"
            alt="Fábrica Reciclaje"
            className="rounded-xl shadow-md max-h-[320px] object-cover w-full md:w-[80%]"
            style={{ background: "#e6e2db" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
