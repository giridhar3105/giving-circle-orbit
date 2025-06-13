
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import OrbitSystem from "@/components/OrbitSystem";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Together, We Create{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Ripples of Change
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0">
              Join a community of NGOs working for causes that matter. 
              When we orbit around shared values, we create lasting impact.
            </p>
          </div>
          
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full text-lg glow-pink transition-all duration-300 transform hover:scale-105">
            Start Giving
          </Button>
        </div>

        {/* Right Side - Orbit System */}
        <div className="flex justify-center lg:justify-end">
          <OrbitSystem />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
