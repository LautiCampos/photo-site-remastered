
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form after submission
    form.reset();
    setIsSubmitting(false);
    
    // You could add a toast notification here
    alert("¡Consulta enviada exitosamente! Nos pondremos en contacto contigo pronto.");
  };

  return (
    <section id="consultas" className="bg-offwhite dark:bg-darkbg px-2 md:px-0 py-10 md:py-20">
      <div className="container mx-auto">
        <h2 className="font-playfair text-greenprimary-dark dark:text-greenprimary-light text-4xl md:text-5xl mb-10 text-center animate-fade-in">
          Consultas
        </h2>
        
        <Card className="max-w-4xl mx-auto bg-white dark:bg-darkcard border-grayborder dark:border-darkborder animate-fade-in [animation-delay:100ms]">
          <CardHeader>
            <CardTitle className="text-center text-greenprimary-dark dark:text-greenprimary-light">
              Contáctanos para más información
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-greenprimary-dark dark:text-greenprimary-light">
                          Nombre y Apellido:
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Ingrese su nombre completo" 
                            {...field}
                            className="bg-white dark:bg-darkbg border-grayborder dark:border-darkborder"
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
                        <FormLabel className="text-greenprimary-dark dark:text-greenprimary-light">
                          Email:
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="su.email@ejemplo.com" 
                            {...field}
                            className="bg-white dark:bg-darkbg border-grayborder dark:border-darkborder"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-greenprimary-dark dark:text-greenprimary-light">
                          Empresa:
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Nombre de su empresa" 
                            {...field}
                            className="bg-white dark:bg-darkbg border-grayborder dark:border-darkborder"
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
                        <FormLabel className="text-greenprimary-dark dark:text-greenprimary-light">
                          Teléfono:
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="+54 9 11 1234-5678" 
                            {...field}
                            className="bg-white dark:bg-darkbg border-grayborder dark:border-darkborder"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-greenprimary-dark dark:text-greenprimary-light">
                          Rubro:
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Ej: Manufactura, Retail, etc." 
                            {...field}
                            className="bg-white dark:bg-darkbg border-grayborder dark:border-darkborder"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-greenprimary-dark dark:text-greenprimary-light">
                          Localidad y Provincia:
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Ciudad, Provincia" 
                            {...field}
                            className="bg-white dark:bg-darkbg border-grayborder dark:border-darkborder"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-greenprimary-dark dark:text-greenprimary-light">
                        Mensaje:
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Escriba su consulta aquí..."
                          className="min-h-[120px] bg-white dark:bg-darkbg border-grayborder dark:border-darkborder"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center">
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
      </div>
    </section>
  );
};

export default ContactSection;
