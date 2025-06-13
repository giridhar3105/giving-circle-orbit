
import { useEffect, useState } from "react";

const GivingPhilosophy = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const impactLines = [
    ["1,000+ Trees Planted", "500 Children Educated", "200 Families Fed", "50 Wells Built", "300 Animals Rescued"],
    ["₹5L+ Donated", "25 NGOs Supported", "100 Volunteers Active", "15 Cities Reached", "1000+ Lives Touched"],
    ["Clean Water Access", "Educational Support", "Healthcare Aid", "Environmental Care", "Community Building"]
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Philosophy Text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white text-glow">
              Why Giving Matters
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Every act of giving creates ripples that extend far beyond what we can see. 
              When we come together as a circle, our individual contributions become a 
              powerful force for change.
            </p>
            <p className="text-white/70 leading-relaxed">
              The Giving Circle isn't just about donations—it's about building a community 
              where every person's generosity multiplies through connection, collaboration, 
              and shared purpose. Together, we transform lives, communities, and the world.
            </p>
            <div className="pt-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 glow-purple">
                Join Our Mission
              </button>
            </div>
          </div>

          {/* Right: Animated Impact Columns */}
          <div className="grid grid-cols-3 gap-4 h-80 overflow-hidden">
            {impactLines.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className="flex flex-col space-y-4"
                style={{
                  animation: `scroll-${columnIndex % 2 === 0 ? 'up' : 'down'} 20s linear infinite`
                }}
              >
                {[...column, ...column].map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="glassmorphism p-4 rounded-lg text-center min-h-16 flex items-center justify-center"
                  >
                    <span className="text-white text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-up {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

export default GivingPhilosophy;
