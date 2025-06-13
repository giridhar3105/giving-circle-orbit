
import { Users, UserPlus, Heart, TrendingUp } from "lucide-react";

const HowItWorksSlider = () => {
  const steps = [
    {
      icon: Users,
      title: "Join the Circle",
      description: "Become part of our community of changemakers and start your giving journey with us.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      gradient: "from-primary to-secondary"
    },
    {
      icon: UserPlus,
      title: "Refer Friends",
      description: "Invite like-minded people to expand our circle of impact and multiply the good together.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Heart,
      title: "Support a Cause",
      description: "Choose from verified causes and make meaningful contributions that truly matter.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      gradient: "from-accent to-primary"
    },
    {
      icon: TrendingUp,
      title: "Track the Impact",
      description: "See real-time updates on how your contributions are creating positive change in the world.",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      gradient: "from-primary to-accent"
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
            Simple steps to create lasting impact together in our community
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-6 animate-slide-smooth">
            {[...steps, ...steps, ...steps].map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 glassmorphism p-8 rounded-2xl hover:glow-primary transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex flex-col items-center text-center space-y-6">
                    {/* Human Photo */}
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary group-hover:border-secondary transition-colors duration-300">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Icon overlay */}
                      <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center group-hover:animate-pulse shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Step indicator */}
                    <div className="w-16 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-primary">
                        {step.title}
                      </h3>
                      <p className="text-primary/70 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* CTA Button */}
                    <button className={`mt-4 px-6 py-2 bg-gradient-to-r ${step.gradient} text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {steps.map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full bg-primary/30 hover:bg-primary transition-colors duration-200 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSlider;
