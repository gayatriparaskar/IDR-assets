import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Premium Residential Apartments - Phase 1",
      categoryKey: "ready",
      categoryLabel: "Ready to Move",
      location: "Metropolitan City",
      type: "Residential Apartments",
      description:
        "Modern 2 & 3 BHK apartments with world-class amenities and premium finishing, perfect for co-investment.",
      amenities: ["Swimming Pool", "Gymnasium", "Community Hall", "24/7 Security"],
      image:
        "https://media.istockphoto.com/id/2154752387/photo/real-estate-concept-business-home-insurance-and-real-estate-protection-real-estate-investment.jpg?s=612x612&w=0&k=20&c=r6Tmn31ZHHr-8ZuWfZaYIYdqM9nD4dMc6NfDXxwsZeo=",
    },
    {
      id: 2,
      name: "Prime Investment Plots Series",
      categoryKey: "plots",
      categoryLabel: "Investment Plots",
      location: "Growth Corridor",
      type: "Residential Plots",
      description:
        "Prime location residential plots ranging from 500 sq.ft to 2000 sq.ft with excellent connectivity and appreciation potential.",
      amenities: ["Wide Roads", "Green Space", "Water Facility", "Electricity Connection"],
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Luxury Duplex Villas",
      categoryKey: "ready",
      categoryLabel: "Ready to Move",
      location: "Premium District",
      type: "Duplex Villas",
      description:
        "Luxurious duplex villas with private gardens and modern architecture, ideal for high-net-worth individuals.",
      amenities: ["Private Garden", "Parking", "Modern Kitchen", "Study Room"],
      image:
        "https://www.shutterstock.com/image-photo/real-estate-concept-business-home-260nw-2466887543.jpg",
    },
    {
      id: 4,
      name: "Commercial Plaza - Retail Hub",
      categoryKey: "monthly",
      categoryLabel: "Monthly Return Projects",
      location: "Business District",
      type: "Commercial Spaces",
      description:
        "State-of-the-art commercial spaces ideal for retail, offices, and business operations with high footfall potential.",
      amenities: ["High Visibility", "Ample Parking", "24/7 Power", "Security"],
      image:
        "https://st2.depositphotos.com/20515402/50652/i/450/depositphotos_506521084-stock-photo-estate-agent-giving-house-keys.jpg",
    },
    {
      id: 5,
      name: "Premium Co-Investment Project",
      categoryKey: "monthly",
      categoryLabel: "Monthly Return Projects",
      location: "Strategic Location",
      type: "Investment Project",
      description:
        "Premium co-investment opportunity with transparent returns, professional asset management, and regulatory compliance.",
      amenities: ["Transparent Returns", "Asset Management", "Legal Security", "Professional Team"],
      image:
        "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?cs=srgb&dl=pexels-davidmcbee-1546168.jpg&fm=jpg",
    },
    {
      id: 6,
      name: "Mixed-Use Development - Phase 2",
      categoryKey: "plots",
      categoryLabel: "Investment Plots",
      location: "Future Growth Zone",
      type: "Development Project",
      description:
        "Upcoming mixed-use development featuring residential and commercial spaces with strong appreciation prospects.",
      amenities: ["Under Development", "Grand Opening Soon", "Pre-Launch Offer", "Flexible Payment"],
      image:
        "https://img.freepik.com/free-photo/real-estate-sector_23-2151925471.jpg?semt=ais_hybrid&w=740&q=80",
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
