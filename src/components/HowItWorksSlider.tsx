
import { Users, UserPlus, Heart, TrendingUp } from "lucide-react";

const HowItWorksSlider = () => {
  const steps = [
    {
      icon: Users,
      title: "Join the Circle",
      description: "Become part of our community of changemakers and start your giving journey."
    },
    {
      icon: UserPlus,
      title: "Refer Friends",
      description: "Invite like-minded people to expand our circle of impact and multiply the good."
    },
    {
      icon: Heart,
      title: "Support a Cause",
      description: "Choose from verified causes and make meaningful contributions that matter."
    },
    {
      icon: TrendingUp,
      title: "Track the Impact",
      description: "See real-time updates on how your contributions are creating positive change."
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 text-glow">
            How It Works
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Simple steps to create lasting impact together
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 min-w-max px-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 glassmorphism p-6 rounded-2xl hover:glow-purple transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center group-hover:animate-pulse">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator for mobile */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-white/30"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSlider;
