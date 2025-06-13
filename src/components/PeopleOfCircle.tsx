
import { Button } from "@/components/ui/button";

const PeopleOfCircle = () => {
  const people = [
    {
      name: "Priya Sharma",
      badge: "Top Donor",
      quote: "Every small contribution creates waves of change in communities.",
      avatar: "👩‍💼",
      bgGradient: "from-purple-400 to-pink-400"
    },
    {
      name: "Raj Patel",
      badge: "Volunteer",
      quote: "Being part of this circle has shown me the true power of collective giving.",
      avatar: "👨‍🎓",
      bgGradient: "from-blue-400 to-purple-400"
    },
    {
      name: "Sarah Khan",
      badge: "Referrer",
      quote: "I've brought 15 friends into the circle. Together we're unstoppable!",
      avatar: "👩‍🔬",
      bgGradient: "from-green-400 to-blue-400"
    },
    {
      name: "David Chen",
      badge: "Donor",
      quote: "The transparency and impact tracking keeps me motivated to give more.",
      avatar: "👨‍💻",
      bgGradient: "from-orange-400 to-pink-400"
    },
    {
      name: "Maya Singh",
      badge: "Volunteer",
      quote: "This platform made it easy to find causes I'm passionate about.",
      avatar: "👩‍🎨",
      bgGradient: "from-pink-400 to-purple-400"
    },
    {
      name: "Alex Johnson",
      badge: "Supporter",
      quote: "Amazing to see how our collective efforts multiply the impact.",
      avatar: "👨‍🚀",
      bgGradient: "from-purple-400 to-blue-400"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 text-glow">
            People of the Circle
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Meet the amazing individuals who make our community thrive
          </p>
        </div>

        {/* People Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {people.map((person, index) => (
            <div
              key={person.name}
              className="glassmorphism p-6 rounded-2xl hover:glow-purple transition-all duration-300 transform hover:scale-105 group animate-fadeInUp"
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${person.bgGradient} flex items-center justify-center text-3xl group-hover:animate-pulse`}>
                  {person.avatar}
                </div>
              </div>

              {/* Name and Badge */}
              <div className="text-center mb-4">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {person.name}
                </h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${person.bgGradient} text-white`}>
                  {person.badge}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-white/80 text-center italic leading-relaxed">
                "{person.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glassmorphism p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Join Our Circle?
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Become part of a community where your generosity creates lasting impact. 
            Start your journey with us today.
          </p>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full glow-purple transition-all duration-300 transform hover:scale-105">
            Join the Circle
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PeopleOfCircle;
