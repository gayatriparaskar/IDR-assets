import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import property1 from "../assets/property1.jpeg"
import property2 from "../assets/property2.jpeg"
import property3 from "../assets/property3.jpeg"
import property4 from "../assets/property4.jpeg"
import property5 from "../assets/property5.jpeg"
import property6 from "../assets/property6.jpeg"

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Premium Residential Apartments - Phase 1",
      categoryKey: "ready",
      categoryLabel: "Ready to Move",
      location: "City Prime Location",
      type: "Residential Apartments",
      description:
        "Modern 2 & 3 BHK apartments designed for comfortable urban living, featuring premium construction quality, essential amenities, and strong rental demand potential.",
      amenities: ["Swimming Pool", "Gymnasium", "Community Hall", "24/7 Security"],
      image:
        property1,
    },
    {
      id: 2,
      name: "Prime Investment Plots Series",
      categoryKey: "plots",
      categoryLabel: "Developing Growth Corridor",
      location: "Growth Corridor",
      type: "Residential Plots",
      description:
        "Well-planned residential plots with clear titles and internal infrastructure, strategically located for future development and steady price appreciation.",
      amenities: ["Wide Roads", "Green Space", "Water Facility", "Electricity Connection"],
      image:
        property2,
    },
    {
      id: 3,
      name: "Premium Residential Zone",
      categoryKey: "ready",
      categoryLabel: "Ready to Move",
      location: "Premium District",
      type: "Long-term capital growth",
      description:
        "Spacious duplex villas with private open spaces, modern elevation, and low-density planning—ideal for premium living and high-value asset ownership.",
      amenities: ["Private Garden", "Parking", "Modern Kitchen", "Study Room"],
      image:
        property3,
    },
    {
      id: 4,
      name: "Commercial Plaza - Retail Hub",
      categoryKey: "monthly",
      categoryLabel: "High-Footfall Business District",
      location: "Business District",
      type: "Commercial Spaces",
      description:
        "Retail and office spaces located in a busy commercial zone, offering excellent visibility, regular rental income, and strong business occupancy potential.",
      amenities: ["High Visibility", "Ample Parking", "24/7 Power", "Security"],
      image:
        property4,
    },
    {
      id: 5,
      name: "Premium Co-Investment Project",
      categoryKey: "monthly",
      categoryLabel: "ProjectsStrategic Investment Location",
      location: "Strategic Location",
      type: "Investment Project",
      description:
        "A professionally managed co-investment opportunity with defined exit planning, transparent structure, and regulatory-compliant asset management.",
      amenities: ["Transparent Returns", "Asset Management", "Legal Security", "Professional Team"],
      image:
        property5,
    },
    {
      id: 6,
      name: "Mixed-Use Development - Phase 2",
      categoryKey: "plots",
      categoryLabel: "Upcoming Growth Zone",
      location: "Future Growth Zone",
      type: "Development Project",
      description:
        "Integrated residential and commercial development planned in a future growth area, designed to benefit from infrastructure expansion and long-term appreciation.",
      amenities: ["Under Development", "Grand Opening Soon", "Pre-Launch Offer", "Flexible Payment"],
      image:
        property6,
    },
  ];

  const categories = [
    { key: "All", label: "All" },
    { key: "ready", label: "Ready to Move" },
    { key: "plots", label: "Investment Plots" },
    { key: "monthly", label: "Monthly Return Projects" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.categoryKey === selectedCategory);

  return (
    <div className="pt-20">
      {/* Filters */}
      <section className="bg-blue-50 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat.key
                  ? "bg-primary text-white"
                  : "bg-white text-primary border border-primary hover:bg-blue-50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg flex flex-col"
              whileHover={{ y: -8 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-4 flex flex-col flex-grow">
                <span className="text-xs font-bold text-accent mb-2">
                  {project.categoryLabel}
                </span>

                <h3 className="text-xl font-bold mb-2">{project.name}</h3>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin size={16} />
                  {project.location}
                </div>

                <p className="text-sm mb-4 flex-grow">{project.description}</p>

                <Link 
                  to={`/projects/${project.id}`}
                  className="btn-primary w-full text-center"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
