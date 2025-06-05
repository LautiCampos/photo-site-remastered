
import { Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const sendEmail = () => {
    window.location.href = "mailto:info@arplas.com";
  };

  const openMap = () => {
    window.open("https://maps.google.com/?q=Avellaneda,Buenos Aires,Argentina", "_blank");
  };

  return (
    <footer id="contact" className="bg-greenprimary-light dark:bg-darkcard pt-12 pb-4 border-t border-grayborder dark:border-darkborder mt-2">
      <div className="container mx-auto grid md:grid-cols-2 gap-5 mb-7">
        <div>
          <div className="text-2xl md:text-3xl font-playfair text-greenprimary-dark dark:text-greenprimary-light mb-2">Contacta con Nosotros</div>
          <div className="text-greenprimary-dark dark:text-greenprimary-light font-light text-base mb-2">Arplas</div>
        </div>
        <div className="flex flex-col gap-2 items-start md:items-end text-greenprimary-dark dark:text-greenprimary-light text-sm">
          <button onClick={sendEmail} className="flex items-center gap-2 hover:text-orangeaccent transition-colors">
            <Mail className="w-4 h-4 mr-1" /> info@arplas.com
          </button>
          <button onClick={openMap} className="flex items-center gap-2 hover:text-orangeaccent transition-colors">
            <MapPin className="w-4 h-4 mr-1" /> Avellaneda, Provincia de Buenos Aires, Argentina
          </button>
          <div className="flex gap-4 mt-2 text-orangeaccent-dark">
            <button aria-label="Facebook" className="hover:scale-110 transition">
              <Facebook className="w-5 h-5" />
            </button>
            <button aria-label="Twitter" className="hover:scale-110 transition">
              <Twitter className="w-5 h-5" />
            </button>
            <button aria-label="Instagram" className="hover:scale-110 transition">
              <Instagram className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-2 flex gap-4 text-xs">
            <button className="hover:underline hover:text-orangeaccent transition-colors">Política de Privacidad</button>
            <button className="hover:underline hover:text-orangeaccent transition-colors">Declaración de Accesibilidad</button>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-greenprimary-dark/70 dark:text-greenprimary-light/70 mt-2">
        © 2025 by Arplas. Powered by Lovable.
      </div>
    </footer>
  );
};

export default Footer;
