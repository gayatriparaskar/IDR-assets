import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

interface HeroSectionProps {
  heroVideos: string[];
}

export default function HeroSection({ heroVideos }: HeroSectionProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    if (heroVideos && heroVideos.length > 1) {
      const interval = setInterval(() => {
        setCurrentVideoIndex((prevIndex) => 
          prevIndex === heroVideos.length - 1 ? 0 : prevIndex + 1
        );
      }, 8000); // Change video every 8 seconds

      return () => clearInterval(interval);
    }
  }, [heroVideos]);

  return (
    <section className="relative text-white overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Video - Full Coverage */}
      <div className="absolute inset-0">
        {heroVideos && heroVideos.length > 0 && (
          <video
            key={currentVideoIndex}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Dark Overlay for Better Text Visibility */}
      <motion.div
        className="absolute inset-0 bg-black/55"
        animate={{
          backgroundColor: [
            "rgba(0,0,0,0.55)",
            "rgba(0,0,0,0.6)",
            "rgba(0,0,0,0.55)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>

      {/* Text Content Overlay */}
      <div className="relative z-10 px-4 py-20">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
            variants={itemVariants}
          >
            Aadhar Asset Management
          </motion.h1>
          <motion.p
            className="text-2xl sm:text-3xl text-gray-100 mb-6 leading-relaxed max-w-3xl mx-auto font-medium"
            variants={itemVariants}
          >
           Strategic Real Estate Management. Structured Wealth Creation.
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto"
            variants={itemVariants}
          >
            A trusted name in Real Estate Finance and Asset Management in
            India since 2016.
            <br />
            Our mission is to provide secure investments, stable returns, and
            long-term wealth creation.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={itemVariants}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-primary font-bold rounded-lg hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Now
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Explore Opportunities
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
