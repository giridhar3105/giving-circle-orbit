
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSlider from "@/components/HowItWorksSlider";
import GivingPhilosophy from "@/components/GivingPhilosophy";
import ImpactGallery from "@/components/ImpactGallery";
import PeopleOfCircle from "@/components/PeopleOfCircle";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen cosmic-gradient font-jakarta">
      <Navbar />
      <HeroSection />
      <HowItWorksSlider />
      <GivingPhilosophy />
      <ImpactGallery />
      <PeopleOfCircle />
      <Footer />
    </div>
  );
};

export default Index;
