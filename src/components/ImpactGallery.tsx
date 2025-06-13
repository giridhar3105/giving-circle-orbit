
import { useState } from "react";

const ImpactGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Health", "Education", "Environment"];

  const images = [
    { id: 1, title: "Tree Plantation Drive", category: "Environment", image: "https://images.unsplash.com/photo-1441260038675-7329ab4cc264?w=400&h=300&fit=crop" },
    { id: 2, title: "Medical Camp", category: "Health", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop" },
    { id: 3, title: "School Library Setup", category: "Education", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop" },
    { id: 4, title: "Clean Water Project", category: "Environment", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop" },
    { id: 5, title: "Children's Health Checkup", category: "Health", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop" },
    { id: 6, title: "Digital Learning Center", category: "Education", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop" },
    { id: 7, title: "Community Garden", category: "Environment", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop" },
    { id: 8, title: "Nutrition Program", category: "Health", image: "https://images.unsplash.com/photo-1594736797933-d0401ba52faa?w=400&h=300&fit=crop" },
    { id: 9, title: "Scholarship Program", category: "Education", image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044297?w=400&h=300&fit=crop" }
  ];

  const filteredImages = activeFilter === "All" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4 text-glow">
            See the Change
          </h2>
          <p className="text-primary/80 text-lg max-w-2xl mx-auto mb-8">
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
                    ? "bg-gradient-to-r from-primary to-secondary text-white glow-primary"
                    : "glassmorphism text-primary/80 hover:text-primary hover:glow-primary"
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
              className="glassmorphism rounded-2xl overflow-hidden group hover:glow-primary transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-primary font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30">
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
