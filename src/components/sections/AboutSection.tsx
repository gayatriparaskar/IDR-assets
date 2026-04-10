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

const services = [
  {
    title: "Strategic Investment in Agricultural Land",
    description:
      "Planned investments in farmland aimed at long-term growth, stable returns, and sustainable value creation.",
  },
  {
    title: "Commercial and Residential Projects",
    description:
      "Well-planned developments designed for business growth, comfortable living, and long-term value appreciation.",
  },
  {
    title: "Bank Auction Properties",
    description:
      "High-value properties available at competitive prices through verified bank auction processes for smart investors.",
  },
  {
    title: "Warehouse, Farmhouse, and Layout Development",
    description:
      "End-to-end development solutions focused on infrastructure, planning, and long-term asset value creation.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative section-padding bg-gradient-to-b from-primary via-primary to-primary text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-10 right-10 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-10 left-10 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        ></motion.div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Title */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 text-center"
            variants={itemVariants}
          >
            About Aadhar Asset Management
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-gray-100 text-center mb-12 leading-relaxed"
            variants={itemVariants}
          >
            Where there are opportunities for large investors, we also make
            the common investor a partner.
          </motion.p>

          {/* Content Paragraphs */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.div
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              variants={itemVariants}
            >
              <p className="text-lg text-gray-50 leading-relaxed mb-4">
                <span className="font-semibold">
                  Aadhar Asset Management Co.
                </span>{" "}
                company is working to fulfil the dreams of the people.
                Everyone has a dream to invest in real estate but it requires
                a lot of money and years of experience which is not within
                everyone's reach. That's what we accomplish; we have a team of
                people, who are experienced in real estate, who develop and
                build Land, building, shop and commercial and residential
                projects in real estate by collecting funds. We purchase land
                and agricultural land and earn good profit in the time of 42
                to 24 months, We Sell it, and after deducting the cost of our
                profit, we distribute it among the people who have invested
                .{" "}
              </p>
              <p className="text-lg text-gray-50 leading-relaxed">
                We Keep your investment in a bank with fixed deposits and
                fixed returns, Provides 4 to 5 times return on your investment
                amount as compared to other sources. Our company manages a
                range of public and private investment products and services
                for institutional and retail clients.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-100 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-blue-500/20 to-blue-700/20 backdrop-blur-sm p-8 rounded-xl border border-blue-300/30 text-center"
              variants={itemVariants}
            >
              <p className="text-lg text-gray-50 leading-relaxed mb-6">
               We earn asset management income for doing so and ensure strong alignment of interests with our clients by investing alongside them. Our access to large-scale capital enables us to make investments in sizeable, premier assets and businesses across geographies and asset classes that we believe few others can. 
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-accent transition-colors duration-200"
                >
                  Learn More About Our Services
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
