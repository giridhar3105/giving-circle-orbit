
import { Users, UserPlus, Heart, TrendingUp } from "lucide-react";

const HowItWorksSlider = () => {
  const steps = [
    {
      icon: Users,
      title: "Join the Circle",
      description: "Become part of our community of changemakers and start your giving journey.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      icon: UserPlus,
      title: "Refer Friends",
      description: "Invite like-minded people to expand our circle of impact and multiply the good.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      icon: Heart,
      title: "Support a Cause",
      description: "Choose from verified causes and make meaningful contributions that matter.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      icon: TrendingUp,
      title: "Track the Impact",
      description: "See real-time updates on how your contributions are creating positive change.",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  return (
    <section className="py-16 px-6 bg-neutral">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4 text-glow">
            How It Works
          </h2>
          <p className="text-primary/80 text-lg max-w-2xl mx-auto">
            Simple steps to create lasting impact together
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex space-x-6 animate-slide-left">
            {[...steps, ...steps].map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 glassmorphism p-6 rounded-2xl hover:glow-primary transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary group-hover:animate-pulse">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:animate-pulse">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    <h3 className="text-xl font-semibold text-primary">
                      {step.title}
                    </h3>
                    <p className="text-primary/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSlider;
