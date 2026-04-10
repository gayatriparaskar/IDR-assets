import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import PartnerSlider from "../PartnerSlider";

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

export default function PartnersSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-primary mb-6"
            variants={itemVariants}
          >
            Our Trusted Partners
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            variants={itemVariants}
          >
            We collaborate with industry-leading companies and trusted brands
            to deliver exceptional real estate solutions and services to our
            valued clients.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-8"
        >
          <PartnerSlider autoplay={true} autoplayDelay={4000} />
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p
            className="text-lg text-muted-foreground mb-8"
            variants={itemVariants}
          >
            Interested in partnering with us? Let's create something amazing
            together!
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-200"
            >
              Become a Partner
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
