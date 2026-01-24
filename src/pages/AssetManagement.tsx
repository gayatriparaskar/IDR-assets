import { motion } from "framer-motion";
import { Building2, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AssetManagement() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" 
              variants={itemVariants}
            >
              Professional Asset Management for Modern Real Estate Investors
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto" 
              variants={itemVariants}
            >
              Aadhar Asset Management combines technology, professional oversight, and structured reporting to deliver long-term, stable returns for property owners, trusts, LLPs, and investor groups.
            </motion.p>
          </motion.div>

          {/* IAMA Section */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full mb-4">
                  Our Proprietary Framework
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Integrated Asset Management Approach (IAMA™)</h3>
                <p className="text-gray-600 mb-6">
                  Our core framework ensures every property in your portfolio is optimized for maximum returns and long-term value appreciation through continuous monitoring and strategic adjustments.
                </p>
                <ul className="space-y-4">
                  {[
                    "Comprehensive asset onboarding with legal & operational review",
                    "Data-driven rental & cost optimization",
                    "Market-aligned asset repositioning",
                    "Dynamic strategy evolution with market changes"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-semibold text-lg text-gray-900 mb-3">Key Benefits</h4>
                  <div className="space-y-4">
                    {[
                      { title: "Stable Income", desc: "Consistent rental yields" },
                      { title: "Value Protection", desc: "Proactive asset maintenance" },
                      { title: "Exit Readiness", desc: "Always prepared for optimal exit" },
                      { title: "Institutional-Grade", desc: "Professional oversight at every step" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-lg mr-4">
                          <Building2 className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">{item.title}</h5>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Property & Portfolio Management */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Property & Portfolio Management</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive services for property owners with multiple assets or complex ownership structures.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Discretionary property operations",
                  "Advisory-based asset decisions",
                  "Multi-property performance consolidation",
                  "Yield & vacancy risk management"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Asset Monitoring */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Asset Monitoring System</h3>
              <p className="text-gray-600 mb-6">
                Real-time visibility and actionable insights for your real estate investments.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Rental Performance", icon: "📊" },
                  { label: "Vacancy Trends", icon: "📉" },
                  { label: "Maintenance Status", icon: "🔧" },
                  { label: "Asset Health Score", icon: "❤️" }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="text-sm font-medium text-gray-700">{item.label}</p>
                  </div>
                ))}
              </div>
              <Link to="/monitoring" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                See How It Works <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* NRI Support Section */}
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">NRI & Remote Owner Support</h3>
              <p className="text-blue-100 text-lg mb-8">
                Manage your Indian properties with confidence, no matter where you are in the world. Our comprehensive support ensures your assets are professionally managed and your returns are optimized.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { title: "End-to-End Management", desc: "Complete property handling from tenant sourcing to maintenance" },
                  { title: "Transparent Reporting", desc: "Regular, detailed reports on your property's performance" },
                  { title: "Compliance Ready", desc: "All documentation and tax compliance handled professionally" }
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-blue-100 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link to="/nri-services" className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Learn More About NRI Services
              </Link>
            </div>
          </motion.div>

          {/* Comparison Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Aadhar Over Traditional Management?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're redefining what property owners should expect from their asset managers
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left p-6 font-semibold w-1/3">Features</th>
                    <th className="p-6 font-semibold text-center w-1/3">Traditional Property Managers</th>
                    <th className="p-6 font-semibold text-center bg-blue-600 w-1/3">Aadhar Asset Management</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: "Approach", traditional: "Reactive management", aadhar: "Proactive asset monitoring" },
                    { feature: "Focus", traditional: "Rent collection & complaints", aadhar: "Income + value optimization" },
                    { feature: "Reporting", traditional: "Basic statements", aadhar: "Comprehensive analytics & insights" },
                    { feature: "Asset Value", traditional: "Limited focus", aadhar: "Strategic value enhancement" },
                    { feature: "Technology", traditional: "Minimal or outdated", aadhar: "Modern, data-driven platform" },
                    { feature: "Exit Strategy", traditional: "Not considered", aadhar: "Built-in exit readiness" }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-6 font-medium text-gray-900">{row.feature}</td>
                      <td className="p-6 text-center text-gray-600">{row.traditional}</td>
                      <td className="p-6 text-center font-medium text-blue-600 bg-blue-50">
                        {row.aadhar}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Ready to experience the Aadhar difference? Our team is here to help you maximize your real estate investments.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Schedule a Consultation
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
