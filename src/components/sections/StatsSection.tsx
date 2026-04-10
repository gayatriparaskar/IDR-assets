import { Building2, Users, TrendingUp } from "lucide-react";
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

const stats = [
  {
    number: "300+",
    label: "Projects Completed",
    icon: Building2,
  },
  {
    number: "10+",
    label: "Years of Experience",
    icon: TrendingUp,
  },
  {
    number: "1520+",
    label: "Happy Clients",
    icon: Users,
  },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-container">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="w-16 h-16 bg-accent rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>
                </div>
                <motion.p
                  className="text-4xl sm:text-5xl font-bold text-primary mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.p>
                <p className="text-base sm:text-lg text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
