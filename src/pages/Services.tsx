import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Best Investment Opportunities",
      description:
        "Identifying, structuring, and delivering high-potential investments focused on growth, security, and long-term value.",
      icon: "🏢",
      features: ["Portfolio optimization", "Performance monitoring", "Strategic planning"],
    },
    {
      title: "Project Takeover and Management",
      description:
        "End-to-end takeover and professional management of projects to ensure efficiency, compliance, and value enhancement.",
      icon: "📈",
      features: ["Curated opportunities", "Transparent terms", "Expected returns clarity"],
    },
    {
      title: "Investment in Agricultural, Residential, and Commercial Properties",
      description:
        "Diversified real estate investments designed to balance growth, stability, and long-term returns across asset classes.",
      icon: "💼",
      features: ["Market insights", "Valuation analysis", "Strategy development"],
    },
    {
      title: "Participation in Housing and Corporate Projects",
      description:
        "End-to-end real estate project management ensuring timely delivery, quality standards, and regulatory compliance.",
      icon: "🎯",
      features: ["Timeline tracking", "Quality assurance", "Compliance management"],
    },
    {
      title: "Warehouse and Farmhouse Land Investment",
      description:
        "Strategic land investments focused on logistics, lifestyle development, and long-term asset appreciation.",
      icon: "💰",
      features: ["Capital structure", "Investor relations", "Fund administration"],
    },
    {
      title: "Shop, Mall, and Commercial Unit Purchase",
      description:
        "Smart acquisition opportunities in high-footfall commercial spaces for steady income and long-term value growth.",
      icon: "💻",
      features: ["Digital portfolio", "Real-time tracking", "Secure transactions"],
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Comprehensive asset management and co-investment solutions for Indian investors
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white border border-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/services/${index + 1}`} 
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200 group"
                >
                  Learn More
                  <motion.span 
                    className="inline-block"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Process */}
      <section className="bg-blue-50 section-padding">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">Our Service Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Consultation", desc: "Understand your needs" },
              { step: 2, title: "Analysis", desc: "Market & property research" },
              { step: 3, title: "Proposal", desc: "Customized solutions" },
              { step: 4, title: "Execution", desc: "Seamless transaction" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.step}
                  </motion.div>
                  {index < 3 && (
                    <div className="hidden md:block w-8 h-1 bg-primary ml-4 absolute translate-x-16"></div>
                  )}
                </div>
                <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">Why Choose Aadhar Asset Management?</h2>
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {[
              {
                title: "Transparent Returns",
                desc: "Clear communication on investments, regular reporting, and expected returns",
              },
              {
                title: "Professional Management",
                desc: "Expert asset management combined with fintech innovation for optimal performance",
              },
              {
                title: "Investor Protection",
                desc: "Rigorous compliance, regulatory adherence, and fiduciary responsibility",
              },
              {
                title: "Accessibility",
                desc: "Making premium real estate accessible to retail investors and HNIs",
              },
              {
                title: "Personalized Service",
                desc: "Dedicated support from investment initiation through wealth realization",
              },
            ].map((item, idx) => (
              <motion.div key={idx} className="flex gap-4" variants={itemVariants}>
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white section-padding">
        <motion.div
          className="section-container text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our expert team today to discuss which services are right for you.
          </p>
          <Link to="/contact">
            <motion.div
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
              <ArrowRight size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
