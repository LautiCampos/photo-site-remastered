
import { Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-background pt-12 pb-4 border-t border-primarygreen/10 mt-2">
    <div className="container mx-auto grid md:grid-cols-2 gap-5 mb-7">
      <div>
        <div className="text-2xl md:text-3xl font-playfair text-primarygreen mb-2 font-bold">Contacta con Nosotros</div>
        <div className="text-primarygreen font-light text-base mb-2">Fábrica de Reciclaje Avellaneda</div>
      </div>
      <div className="flex flex-col gap-2 items-start md:items-end text-primarygreen text-sm">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 mr-1" /> info@8bito.com
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 mr-1" /> Avellaneda, Provincia de Buenos Aires, Argentina
        </div>
        <div className="flex gap-4 mt-2 text-accentorange">
          <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5 hover:scale-110 transition" /></a>
          <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5 hover:scale-110 transition" /></a>
          <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5 hover:scale-110 transition" /></a>
        </div>
        <div className="mt-2 flex gap-4 text-xs">
          <a href="#" className="hover:underline">Política de Privacidad</a>
          <a href="#" className="hover:underline">Declaración de Accesibilidad</a>
        </div>
      </div>
    </div>
    <div className="text-center text-xs text-primarygreen/70 mt-2">
      © 2025 by Fábrica de Reciclaje Avellaneda. Powered by Lovable.
    </div>
  </footer>
);

export default Footer;
