
import { useEffect, useState } from "react";

const GivingPhilosophy = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const impactLines = [
    ["1,000+ Trees Planted", "500 Children Educated", "200 Families Fed", "50 Wells Built", "300 Animals Rescued", "100 Schools Built", "2000+ Lives Changed"],
    ["₹5L+ Donated", "25 NGOs Supported", "100 Volunteers Active", "15 Cities Reached", "1000+ Lives Touched", "50 Communities Helped", "30 Projects Completed"],
    ["Clean Water Access", "Educational Support", "Healthcare Aid", "Environmental Care", "Community Building", "Women Empowerment", "Child Welfare"]
  ];

  return (
    <section className="py-20 px-6 bg-neutral">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Philosophy Text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-primary text-glow">
              Why Giving Matters
            </h2>
            <p className="text-primary/80 text-lg leading-relaxed">
              Every act of giving creates ripples that extend far beyond what we can see. 
              When we come together as a circle, our individual contributions become a 
              powerful force for change.
            </p>
            <p className="text-primary/70 leading-relaxed">
              The Giving Circle isn't just about donations—it's about building a community 
              where every person's generosity multiplies through connection, collaboration, 
              and shared purpose. Together, we transform lives, communities, and the world.
            </p>
            <div className="pt-4">
              <button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 glow-primary">
                Join Our Mission
              </button>
            </div>
          </div>

          {/* Right: Animated Impact Columns */}
          <div className="grid grid-cols-3 gap-2 h-80 overflow-hidden">
            {impactLines.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className={`flex flex-col ${
                  columnIndex % 2 === 0 ? 'animate-scroll-up' : 'animate-scroll-down'
                }`}
              >
                {[...column, ...column, ...column].map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="glassmorphism p-3 rounded-lg text-center min-h-16 flex items-center justify-center mb-2"
                  >
                    <span className="text-primary text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GivingPhilosophy;
