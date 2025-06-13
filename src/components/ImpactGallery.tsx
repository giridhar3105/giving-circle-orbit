
import { useState } from "react";

const ImpactGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Health", "Education", "Environment"];

  const images = [
    { id: 1, title: "Tree Plantation Drive", category: "Environment", image: "🌳" },
    { id: 2, title: "Medical Camp", category: "Health", image: "🏥" },
    { id: 3, title: "School Library Setup", category: "Education", image: "📚" },
    { id: 4, title: "Clean Water Project", category: "Environment", image: "💧" },
    { id: 5, title: "Children's Health Checkup", category: "Health", image: "🩺" },
    { id: 6, title: "Digital Learning Center", category: "Education", image: "💻" },
    { id: 7, title: "Community Garden", category: "Environment", image: "🌱" },
    { id: 8, title: "Nutrition Program", category: "Health", image: "🍎" },
    { id: 9, title: "Scholarship Program", category: "Education", image: "🎓" }
  ];

  const filteredImages = activeFilter === "All" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 text-glow">
            See the Change
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Witness the real impact of our collective giving through these moments of change
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white glow-purple"
                    : "glassmorphism text-white/80 hover:text-white hover:glow-purple"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              className="glassmorphism rounded-2xl overflow-hidden group hover:glow-purple transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="aspect-video bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {item.image}
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-400/20 to-pink-400/20 text-purple-200 border border-purple-400/30">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactGallery;
