import { motion, Variants } from "framer-motion";

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

const features = [
  {
    title: "Secure and Transparent Investment Opportunities",
    description:
      "Built on trust, clarity, and long-term investor confidence.",
    icon: "🏠",
    image: "investment1",
  },
  {
    title: "Lucrative Investments",
    description:
      "Explore high-return investment opportunities in our carefully curated real estate projects.",
    icon: "📈",
    image: "investment2",
  },
  {
    title: "Trusted Partnership",
    description:
      "With over a decade of excellence, we are your reliable partner in real estate ventures.",
    icon: "🤝",
    image: "investment3",
  },
];

export default function VisionSection() {
  return (
    <section className="section-padding bg-accent">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary">
            Our Vision
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 leading-relaxed">
           The right investment today brings peace of mind tomorrow.
           Our goal is not just to earn profits,
but to guide people toward secure and sustainable wealth creation.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Feature Image Placeholder */}
                <motion.div
                  className="h-48 w-full overflow-hidden relative bg-gradient-to-br from-primary to-secondary"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                    {feature.icon}
                  </div>
                </motion.div>

                {/* Feature Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
