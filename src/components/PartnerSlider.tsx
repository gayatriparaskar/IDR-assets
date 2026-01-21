import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Partner {
  id: number;
  name: string;
  icon: string;
  type: string;
}

interface PartnerSliderProps {
  partners?: Partner[];
  autoplay?: boolean;
  autoplayDelay?: number;
}

const defaultPartners: Partner[] = [
  { id: 1, name: "Premier Estates", icon: "🏢", type: "Real Estate" },
  { id: 2, name: "Build Corp", icon: "🏗️", type: "Construction" },
  { id: 3, name: "FinanceWave", icon: "📊", type: "Finance" },
  { id: 4, name: "Infrastructure Pro", icon: "🔧", type: "Infrastructure" },
  { id: 5, name: "NextGen Solutions", icon: "🌟", type: "Innovation" },
  { id: 6, name: "Global Ventures", icon: "💼", type: "Enterprise" },
  { id: 7, name: "Tech Horizon", icon: "🚀", type: "Technology" },
  { id: 8, name: "Strategic Partners", icon: "🎯", type: "Strategy" },
];

export default function PartnerSlider({
  partners = defaultPartners,
  autoplay = true,
  autoplayDelay = 5000,
}: PartnerSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!autoplay || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, partners.length, isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
  };

  const visiblePartners = Array.from({ length: visibleCount }).map((_, i) => {
    const index = (currentIndex + i) % partners.length;
    return partners[index];
  });

  return (
    <div className="relative w-full px-4">
      {/* Main Slider Container */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          <AnimatePresence mode="wait">
            {visiblePartners.map((partner, idx) => (
              <motion.div
                key={`${currentIndex}-${partner.id}`}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.05,
                  ease: "easeOut",
                }}
                className="group"
              >
                {/* Partner Card */}
                <div className="relative h-40 md:h-44 rounded-xl overflow-hidden bg-gradient-to-br from-white to-accent shadow-md hover:shadow-xl transition-shadow duration-300">
                  {/* Gradient Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-center">
                    {/* Icon Container */}
                    <motion.div
                      className="mb-3"
                      whileHover={{
                        scale: 1.15,
                        rotate: [0, -5, 5, -5, 0],
                      }}
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        y: {
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        scale: {
                          duration: 0.5,
                          type: "spring",
                          stiffness: 200,
                        },
                        rotate: {
                          duration: 0.5,
                        },
                      }}
                    >
                      <span className="text-4xl md:text-5xl block">
                        {partner.icon}
                      </span>
                    </motion.div>

                    {/* Partner Name */}
                    <motion.h3
                      className="font-bold text-primary text-sm md:text-base mb-1 line-clamp-2"
                      whileHover={{ color: "var(--secondary)" }}
                    >
                      {partner.name}
                    </motion.h3>

                    {/* Partner Type */}
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {partner.type}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.05,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows - Desktop */}
        <motion.button
          onClick={handlePrev}
          className="hidden lg:flex absolute -left-14 top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-opacity-90 transition-all duration-200 z-20"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 10px 30px rgba(15, 40, 84, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={24} />
        </motion.button>

        <motion.button
          onClick={handleNext}
          className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-opacity-90 transition-all duration-200 z-20"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 10px 30px rgba(15, 40, 84, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="flex lg:hidden justify-center gap-3 mt-8">
        <motion.button
          onClick={handlePrev}
          className="px-6 py-2.5 rounded-full bg-primary text-white font-medium text-sm hover:bg-opacity-90 transition-all duration-200 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Previous
        </motion.button>
        <motion.button
          onClick={handleNext}
          className="px-6 py-2.5 rounded-full bg-primary text-white font-medium text-sm hover:bg-opacity-90 transition-all duration-200 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Next →
        </motion.button>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: Math.ceil(partners.length / visibleCount) }).map(
          (_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentIndex(idx * visibleCount)}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / visibleCount) === idx
                  ? "bg-primary w-8"
                  : "bg-accent w-2 hover:bg-primary/50"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ),
        )}
      </div>

      {/* Counter */}
      <div className="flex justify-center mt-6 text-sm text-muted-foreground">
        Showing {currentIndex + 1} -{" "}
        {Math.min(currentIndex + visibleCount, partners.length)} of{" "}
        {partners.length} partners
      </div>
    </div>
  );
}
