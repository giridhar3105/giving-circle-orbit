
import { Button } from "@/components/ui/button";

const PeopleOfCircle = () => {
  const people = [
    {
      name: "Priya Sharma",
      badge: "Fundraiser",
      quote: "I raised ₹50,000 for education. The platform donated on my behalf after I completed a simple survey.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      bgGradient: "from-primary to-secondary"
    },
    {
      name: "Raj Patel",
      badge: "Fundraiser",
      quote: "Became a fundraiser for healthcare causes. They donated ₹30,000 on my behalf when I filled their form.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bgGradient: "from-secondary to-accent"
    },
    {
      name: "Sarah Khan",
      badge: "Fundraiser",
      quote: "I brought 15 friends as fundraisers. Amazing how they donate on our behalf for causes we care about!",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      bgGradient: "from-accent to-primary"
    },
    {
      name: "David Chen",
      badge: "Fundraiser",
      quote: "Just filled a survey about environmental causes and they donated ₹25,000 on my behalf. So simple!",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      bgGradient: "from-primary to-accent"
    },
    {
      name: "Maya Singh",
      badge: "Fundraiser",
      quote: "This platform makes fundraising effortless. They handle all donations while I focus on spreading awareness.",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      bgGradient: "from-secondary to-primary"
    },
    {
      name: "Alex Johnson",
      badge: "Fundraiser",
      quote: "Incredible system! I just completed their form and they donated ₹40,000 for animal welfare causes.",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      bgGradient: "from-accent to-secondary"
    }
  ];

  return (
    <section className="py-20 px-6 bg-neutral">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 text-glow">
            Fundraisers of the Circle
          </h2>
          <p className="text-primary/80 text-lg max-w-2xl mx-auto">
            Become a fundraiser for causes you care about. We'll donate on your behalf after you complete a simple form or survey.
          </p>
        </div>

        {/* People Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {people.map((person, index) => (
            <div
              key={person.name}
              className="glassmorphism p-6 rounded-2xl hover:glow-primary transition-all duration-300 transform hover:scale-105 group animate-fadeInUp"
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary group-hover:animate-pulse">
                  <img 
                    src={person.avatar} 
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name and Badge */}
              <div className="text-center mb-4">
                <h3 className="text-primary font-semibold text-lg mb-2">
                  {person.name}
                </h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${person.bgGradient} text-white`}>
                  {person.badge}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-primary/80 text-center italic leading-relaxed">
                "{person.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glassmorphism p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Ready to Become a Fundraiser?
          </h3>
          <p className="text-primary/80 mb-6 max-w-2xl mx-auto">
            Join our fundraising community! Simply fill out our survey about causes you're passionate about, 
            and we'll donate on your behalf. It's that easy to make a difference.
          </p>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-3 rounded-full glow-primary transition-all duration-300 transform hover:scale-105">
            Become a Fundraiser
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PeopleOfCircle;
