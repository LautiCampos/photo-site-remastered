
import { MapPin } from "lucide-react";

const MapSection = () => {
  const openInGoogleMaps = () => {
    window.open("https://maps.google.com/?q=Avellaneda,Buenos Aires,Argentina", "_blank");
  };

  return (
    <section id="ubicacion" className="bg-greenprimary-light dark:bg-darkcard px-2 md:px-0 py-10 md:py-20">
      <div className="container mx-auto">
        <h2 className="font-playfair text-greenprimary-dark dark:text-greenprimary-light text-4xl md:text-5xl mb-10 text-center animate-fade-in">
          Nuestra Ubicación
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-darkbg rounded-lg shadow-lg overflow-hidden animate-fade-in [animation-delay:100ms]">
            {/* Map container */}
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52562.46106417617!2d-58.41089449999999!3d-34.6566167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3335415c8ae7b%3A0xb748b43a96a6ffae!2sAvellaneda%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sus!4v1703123456789!5m2!1ses!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
              
              {/* Overlay for interaction */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/5" />
            </div>
            
            {/* Location info */}
            <div className="p-6 bg-white dark:bg-darkbg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-greenprimary" />
                  <div>
                    <h3 className="text-lg font-semibold text-greenprimary-dark dark:text-greenprimary-light">
                      Arplas - Fábrica de Reciclaje
                    </h3>
                    <p className="text-sm text-greenprimary-dark/70 dark:text-greenprimary-light/70">
                      Avellaneda, Provincia de Buenos Aires, Argentina
                    </p>
                  </div>
                </div>
                <button
                  onClick={openInGoogleMaps}
                  className="px-4 py-2 bg-greenprimary hover:bg-greenprimary-dark text-white rounded-md transition-all hover-scale text-sm"
                >
                  Ver en Google Maps
                </button>
              </div>
              
              <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-greenprimary-dark dark:text-greenprimary-light mb-1">
                    Horarios de Atención
                  </h4>
                  <p className="text-greenprimary-dark/70 dark:text-greenprimary-light/70">
                    Lunes a Viernes: 8:00 - 17:00<br />
                    Sábados: 8:00 - 12:00
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-greenprimary-dark dark:text-greenprimary-light mb-1">
                    Contacto Directo
                  </h4>
                  <p className="text-greenprimary-dark/70 dark:text-greenprimary-light/70">
                    Teléfono: +54 9 11 2345-6789<br />
                    Email: info@arplas.com
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-greenprimary-dark dark:text-greenprimary-light mb-1">
                    Servicios
                  </h4>
                  <p className="text-greenprimary-dark/70 dark:text-greenprimary-light/70">
                    Reciclaje de plásticos<br />
                    Fabricación sustentable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
