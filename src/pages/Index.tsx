
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="bg-offwhite font-sans min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
