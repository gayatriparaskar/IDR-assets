import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

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

export default function CTASection() {
  return (
    <section className="relative bg-white text-primary section-padding overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary to-secondary rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        ></motion.div>
      </div>

      <motion.div
        className="section-container text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4 text-primary"
          variants={fadeInUpVariants}
        >
          Ready to Find Your Perfect Property?
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          variants={fadeInUpVariants}
        >
          Get in touch with our expert team today. Whether you're looking to
          buy, invest, or partner with us, we're here to help you achieve your
          real estate goals.
        </motion.p>
        <motion.div variants={fadeInUpVariants}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-lg"
            >
              Contact Us Today
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
