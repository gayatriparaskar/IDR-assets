import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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

const investmentSteps = [
  {
    step: 1,
    title: "Curated Opportunities",
    desc: "We identify and analyze premium real estate projects with strong growth potential",
    icon: "🎯",
  },
  {
    step: 2,
    title: "Transparent Structure",
    desc: "Clear terms, complete disclosure, and fair co-ownership arrangements for all investors",
    icon: "📋",
  },
  {
    step: 3,
    title: "Professional Management",
    desc: "Expert asset management, regular maintenance, and tenant management services",
    icon: "🏢",
  },
  {
    step: 4,
    title: "Consistent Returns",
    desc: "Transparent reporting, predictable income streams, and long-term wealth creation",
    icon: "📈",
  },
];

export default function InvestmentModelSection() {
  return (
    <section className=" bg-gradient-to-b from-accent to-white">
      <div className="section-container">
        <motion.div
          className="text-center mb-16 bg-red"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-primary mb-6"
            variants={itemVariants}
          >
            Our Co-Investment Model
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Transparent, accessible, and professionally managed real estate
            investments designed for investors
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {investmentSteps.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl border border-primary/20 hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Step {item.step}
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-200"
            >
              Explore Our Investment Model
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
