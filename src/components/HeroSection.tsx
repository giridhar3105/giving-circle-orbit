
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import OrbitSystem from "@/components/OrbitSystem";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen">
      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-center px-6 py-20 min-h-screen">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight text-glow">
                Together, We Create{" "}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Ripples of Change
                </span>
              </h1>
              <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto lg:mx-0">
                Join a community of NGOs working for causes that matter. 
                When we orbit around shared values, we create lasting impact.
              </p>
            </div>
            
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-3 rounded-full text-lg glow-primary transition-all duration-300 transform hover:scale-105">
              Start Giving
            </Button>
          </div>

          {/* Right Side - Orbit System */}
          <div className="flex justify-center lg:justify-end">
            <OrbitSystem />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col items-center px-6 py-8 min-h-screen">
        {/* Orbit System at top for mobile */}
        <div className="flex justify-center mb-8 pt-4">
          <div className="scale-75 sm:scale-90">
            <OrbitSystem />
          </div>
        </div>

        {/* Text Content below orbit for mobile */}
        <div className="space-y-6 text-center flex-1 flex flex-col justify-center">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary leading-tight text-glow">
              Together, We Create{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Ripples of Change
              </span>
            </h1>
            <p className="text-base sm:text-lg text-primary/80 max-w-lg mx-auto">
              Join a community of NGOs working for causes that matter. 
              When we orbit around shared values, we create lasting impact.
            </p>
          </div>
          
          <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-6 py-3 rounded-full text-base glow-primary transition-all duration-300 transform hover:scale-105 mx-auto">
            Start Giving
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
