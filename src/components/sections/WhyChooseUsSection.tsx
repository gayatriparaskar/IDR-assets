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

const benefits = [
  {
    title: "Transparency First",
    desc: "Complete disclosure on investment details, returns projections, and risks. Regular reporting keeps you informed.",
    icon: "👁️",
  },
  {
    title: "Expert Management",
    desc: "Combine fintech innovation with deep real estate expertise to maximize your investment returns.",
    icon: "👔",
  },
  {
    title: "Investor Protection",
    desc: "Rigorous compliance, regulatory adherence, and fiduciary responsibility in every transaction.",
    icon: "🛡️",
  },
  {
    title: "Accessibility",
    desc: "Make premium real estate accessible to retail investors and HNIs through innovative co-investment models.",
    icon: "🔓",
  },
  {
    title: "Proven Track Record",
    desc: "Decade of real estate expertise combined with consistent investor returns and successful project delivery.",
    icon: "🏆",
  },
  {
    title: "Personalized Service",
    desc: "Dedicated support from investment planning through wealth realization and exit strategies.",
    icon: "🤝",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-primary mb-6"
            variants={itemVariants}
          >
            Why Choose Aadhar Asset Management?
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-primary/10 hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
