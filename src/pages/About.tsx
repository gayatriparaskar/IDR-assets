import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      title: "Transparency",
      description: "Full disclosure of investment details, risks, and returns to all stakeholders with regular reporting.",
    },
    {
      title: "Investor Focus",
      description: "Dedicated to maximizing investor returns through professional asset management and strategic planning.",
    },
    {
      title: "Expertise",
      description: "Combining fintech innovation with deep real estate knowledge to deliver superior investment solutions.",
    },
    {
      title: "Integrity",
      description: "Operating with ethical practices, regulatory compliance, and fiduciary responsibility in all dealings.",
    },
    {
      title: "Accessibility",
      description: "Making premium real estate investments accessible to retail investors and HNIs through innovative models.",
    },
    {
      title: "Excellence",
      description: "Committed to exceptional service delivery, portfolio performance, and investor satisfaction.",
    },
  ];

  const team = [
    {
      name: "Ashish Kumar",
      position: "Chief Executive Officer",
      description: "Visionary leader with 15+ years in real estate and asset management, specializing in fintech-real estate integration.",
    },
    {
      name: "Priya Sharma",
      position: "Head of Investments",
      description: "Expert in portfolio strategy and investor relations, ensuring transparent returns and risk management.",
    },
    {
      name: "Rajesh Patel",
      position: "Chief Compliance Officer",
      description: "Ensures regulatory compliance and protects investor interests with comprehensive legal frameworks.",
    },
    {
      name: "Neha Verma",
      position: "Asset Manager",
      description: "Manages investment portfolios and oversees property performance to maximize investor returns.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-600 text-white py-16 sm:py-24">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Aadhar Asset Management Co.</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Democratizing real estate investment through transparency, expertise, and long-term wealth creation
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-primary mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Company Overview
          </motion.h2>
          <motion.div
            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              Aadhar Asset Management Co. is a premier real estate investment platform designed specifically for Indian
              retail investors, HNIs, and entrepreneurs. We democratize access to high-value real estate investments
              through transparent co-ownership and co-investment models, enabling wealth creation through strategic
              property asset management and professional fund administration.
            </motion.p>
            <motion.p variants={itemVariants}>
              Our core expertise includes property asset management, real estate project management, investment advisory,
              fintech integration, and comprehensive investor services. We combine market insights with innovative
              technology to deliver exceptional returns while maintaining complete transparency and regulatory compliance.
            </motion.p>
            <motion.p variants={itemVariants}>
              Founded with a vision to bridge the gap between premium real estate opportunities and Indian investors,
              Aadhar Asset Management combines fintech innovation with deep real estate expertise. We provide
              professional asset management, transparent transactions, and personalized wealth creation strategies that
              deliver long-term value for our investors and partners.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-blue-50 section-padding">
        <div className="section-container max-w-4xl">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-primary mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            To revolutionize real estate investment in India by providing transparent, accessible, and professionally
            managed co-investment opportunities that generate sustainable wealth for our investors. We are committed to:
          </motion.p>
          <motion.ul
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.li className="flex gap-4 items-start" variants={itemVariants}>
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-muted-foreground">
                Providing transparent and accessible real estate co-investment opportunities for Indian investors
              </span>
            </motion.li>
            <motion.li className="flex gap-4 items-start" variants={itemVariants}>
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-muted-foreground">
                Delivering professional asset management with consistent returns and regulatory compliance
              </span>
            </motion.li>
            <motion.li className="flex gap-4 items-start" variants={itemVariants}>
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-muted-foreground">
                Leveraging fintech innovation to simplify real estate investment and ownership
              </span>
            </motion.li>
            <motion.li className="flex gap-4 items-start" variants={itemVariants}>
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-muted-foreground">
                Building lasting relationships through integrity, expertise, and exceptional investor returns
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">Our Core Values</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 p-8 rounded-xl hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white section-padding">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">Our Professional Team</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-white text-2xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </motion.div>
                <h3 className="text-lg font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-sm font-semibold text-accent mb-3">{member.position}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Highlight */}
      <section className="bg-primary text-white section-padding">
        <div className="section-container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <p className="text-5xl font-bold mb-2">10+</p>
              <p className="text-lg text-blue-100">Years in Real Estate</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-lg text-blue-100">Active Investors</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-5xl font-bold mb-2">₹50+</p>
              <p className="text-lg text-blue-100">Assets Under Management</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
