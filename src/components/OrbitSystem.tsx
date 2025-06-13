
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Heart, Leaf, GraduationCap, Stethoscope, Users } from "lucide-react";

const OrbitSystem = () => {
  const [isCommitted, setIsCommitted] = useState(false);

  const people = [
    { name: "Sarah Chen", cause: "Education", image: "👩‍🏫" },
    { name: "Marcus Johnson", cause: "Health", image: "👨‍⚕️" },
    { name: "Priya Patel", cause: "Environment", image: "👩‍🌾" },
    { name: "David Kim", cause: "Women Rights", image: "👨‍💼" },
    { name: "Maya Rodriguez", cause: "Animal Welfare", image: "👩‍🔬" },
    { name: "Ahmed Hassan", cause: "Community", image: "👨‍🎓" },
  ];

  const causes = [
    { name: "Education", icon: GraduationCap, color: "text-blue-400" },
    { name: "Health", icon: Stethoscope, color: "text-green-400" },
    { name: "Environment", icon: Leaf, color: "text-emerald-400" },
    { name: "Women Empowerment", icon: Users, color: "text-purple-400" },
    { name: "Animal Welfare", icon: Heart, color: "text-pink-400" },
  ];

  const handleCheckboxChange = (checked: boolean | "indeterminate") => {
    setIsCommitted(checked === true);
  };

  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      {/* Outer Orbit - Causes */}
      <div className="absolute inset-0 rounded-full border border-white/20 animate-orbit-slow">
        {causes.map((cause, index) => {
          const angle = (index * 360) / causes.length;
          const Icon = cause.icon;
          return (
            <div
              key={cause.name}
              className="absolute w-12 h-12 glassmorphism rounded-full flex items-center justify-center group hover:glow-purple transition-all duration-300"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-180px) rotate(-${angle}deg)`,
              }}
            >
              <Icon className={`w-6 h-6 ${cause.color}`} />
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {cause.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle Orbit - People */}
      <div className="absolute inset-8 rounded-full border border-white/30 animate-orbit-medium">
        {people.map((person, index) => {
          const angle = (index * 360) / people.length;
          return (
            <div
              key={person.name}
              className="absolute w-14 h-14 glassmorphism rounded-full flex items-center justify-center text-2xl group hover:glow-pink transition-all duration-300 cursor-pointer"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-120px) rotate(-${angle}deg)`,
              }}
            >
              {person.image}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden md:block">
                <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  <div className="font-semibold">{person.name}</div>
                  <div className="text-gray-300">{person.cause}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Inner Circle - Central Hub */}
      <div className="w-48 h-48 glassmorphism rounded-full flex flex-col items-center justify-center space-y-4 p-6 animate-float">
        <div className="text-center space-y-3">
          <p className="text-white text-sm font-medium leading-tight">
            Be the change you want to orbit around
          </p>
          
          <div className="flex items-center space-x-2 justify-center">
            <Checkbox
              id="commit"
              checked={isCommitted}
              onCheckedChange={handleCheckboxChange}
              className="border-white data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
            />
            <label htmlFor="commit" className="text-white text-xs cursor-pointer">
              I commit to supporting
            </label>
          </div>

          <Button 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105"
            disabled={!isCommitted}
          >
            Join the Circle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrbitSystem;
