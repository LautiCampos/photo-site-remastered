
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  company: z.string().min(2, "La empresa debe tener al menos 2 caracteres"),
  phone: z.string().min(8, "El teléfono debe tener al menos 8 dígitos"),
  subject: z.string().min(5, "El rubro debe tener al menos 5 caracteres"),
  location: z.string().min(5, "La localidad debe tener al menos 5 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      location: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    console.log("Formulario enviado:", values);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    form.reset();
    setIsSubmitting(false);
    
    alert("¡Consulta enviada exitosamente! Nos pondremos en contacto contigo pronto.");
  };

  const openInGoogleMaps = () => {
    window.open("https://maps.google.com/?q=Avellaneda,Buenos Aires,Argentina", "_blank");
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5491234567890", "_blank");
  };

  const sendEmail = () => {
    window.location.href = "mailto:info@arplas.com";
  };

  return (
    <section id="consultas" className="bg-offwhite dark:bg-darkbg px-2 md:px-0 py-10 md:py-16">
      <div className="container mx-auto">
        <h2 className="font-playfair text-greenprimary-dark dark:text-greenprimary-light text-4xl md:text-5xl mb-10 text-center animate-fade-in">
          Contacto y Ubicación
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white dark:bg-darkcard border-grayborder dark:border-darkborder animate-fade-in [animation-delay:100ms]">
            <CardHeader>
              <CardTitle className="text-center text-greenprimary-dark dark:text-greenprimary-light">
                Contáctanos para más información
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-3">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-greenprimary-dark dark:text-greenprimary-light text-sm">
                            Nombre:
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Tu nombre completo" 
                              {...field}
                              className="bg-white dark:bg-darkbg border-grayborder dark:border-darkborder text-sm"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-greenprimary-dark dark:text-greenprimary-light text-sm">
                            Email:
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="tu.email@ejemplo.com" 
                              {...field}
                              className="bg-white dark:bg-darkbg border-grayborder dark:border-darkborder text-sm"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-greenprimary-dark dark:text-greenprimary-light text-sm">
                            Empresa:
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Nombre de tu empresa" 
                              {...field}
                              className="bg-white dark:bg-darkbg border-grayborder dark:border-darkborder text-sm"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-greenprimary-dark dark:text-greenprimary-light text-sm">
                            Teléfono:
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="+54 9 11 1234-5678" 
                              {...field}
                              className="bg-white dark:bg-darkbg border-grayborder dark:border-darkborder text-sm"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-greenprimary-dark dark:text-greenprimary-light text-sm">
                          Rubro:
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Ej: Manufactura, Retail, etc." 
                            {...field}
                            className="bg-white dark:bg-darkbg border-grayborder dark:border-darkborder text-sm"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-greenprimary-dark dark:text-greenprimary-light text-sm">
                          Mensaje:
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Escriba su consulta aquí..."
                            className="min-h-[100px] bg-white dark:bg-darkbg border-grayborder dark:border-darkborder text-sm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-center pt-2">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="px-8 py-2 bg-greenprimary hover:bg-greenprimary-dark text-white rounded-md transition-all hover-scale"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Map and Contact Info */}
          <div className="space-y-6 animate-fade-in [animation-delay:200ms]">
            {/* Map */}
            <Card className="bg-white dark:bg-darkcard border-grayborder dark:border-darkborder overflow-hidden">
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52562.46106417617!2d-58.41089449999999!3d-34.6566167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3335415c8ae7b%3A0xb748b43a96a6ffae!2sAvellaneda%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sus!4v1703123456789!5m2!1ses!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-greenprimary" />
                    <div>
                      <h3 className="text-base font-semibold text-greenprimary-dark dark:text-greenprimary-light">
                        Arplas - Fábrica de Reciclaje
                      </h3>
                      <p className="text-xs text-greenprimary-dark/70 dark:text-greenprimary-light/70">
                        Avellaneda, Buenos Aires, Argentina
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={openInGoogleMaps}
                    className="px-3 py-1 bg-greenprimary hover:bg-greenprimary-dark text-white rounded-md transition-all hover-scale text-xs"
                  >
                    Ver en Maps
                  </button>
                </div>
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="bg-white dark:bg-darkcard border-grayborder dark:border-darkborder">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-greenprimary-dark dark:text-greenprimary-light mb-4">
                  Información de Contacto
                </h3>
                
                <div className="space-y-3">
                  <button
                    onClick={sendEmail}
                    className="flex items-center gap-3 w-full text-left hover:text-orangeaccent transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <div>
                      <p className="font-medium text-greenprimary-dark dark:text-greenprimary-light">Email</p>
                      <p className="text-sm text-greenprimary-dark/70 dark:text-greenprimary-light/70">info@arplas.com</p>
                    </div>
                  </button>
                  
                  <button
                    onClick={openWhatsApp}
                    className="flex items-center gap-3 w-full text-left hover:text-orangeaccent transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <div>
                      <p className="font-medium text-greenprimary-dark dark:text-greenprimary-light">WhatsApp</p>
                      <p className="text-sm text-greenprimary-dark/70 dark:text-greenprimary-light/70">+54 9 11 2345-6789</p>
                    </div>
                  </button>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1" />
                    <div>
                      <p className="font-medium text-greenprimary-dark dark:text-greenprimary-light">Horarios</p>
                      <p className="text-sm text-greenprimary-dark/70 dark:text-greenprimary-light/70">
                        Lunes a Viernes: 8:00 - 17:00<br />
                        Sábados: 8:00 - 12:00
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
