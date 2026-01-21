import { Link } from "react-router-dom";
import { Building2, Users, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroSection1 from "../assets/heroSection1.jpg";
import heroSection2 from "../assets/heroSection2.jpg";
import heroSection3 from "../assets/heroSection3.jpg";
import heroSection4 from "../assets/heroSection4.jpg";
import heroSection5 from "../assets/heroSection5.jpg";
import heroSection6 from "../assets/herosection6.jpg";
import heroSection7 from "../assets/heroSection7.jpg";
import heroSection8 from "../assets/heroSection8.jpg";
import residential1 from "../assets/residential1.jpg";
import residential2 from "../assets/residential2.jpg";
import residential3 from "../assets/reidential3.jpg";
import residential4 from "../assets/residential4.jpg";
import residential5 from "../assets/residential5.jpg";
import investment1 from "../assets/investment1.jpg";
import investment2 from "../assets/investment2.webp";
import investment3 from "../assets/investment3.jpg";
import investment4 from "../assets/investment4.jpg";
import investment5 from "../assets/investment5.jpg";
import ImageSlider from "../components/ImageSlider";
import PartnerSlider from "../components/PartnerSlider";

export default function Home() {
  const heroImages = [
    // heroSection1,
    // heroSection2,
    // heroSection3,
    // residential5,
    heroSection4,
    heroSection5,
    heroSection6,
    heroSection7,
    heroSection8,
// "https://img.freepik.com/free-photo/horizontal-shot-buildings-construction-site-cloudy-sky-sunset_181624-30552.jpg?t=st=1768553019~exp=1768556619~hmac=0981109976d452cd74f2319f38c4a4ea30dad3c31cc813d05b935426c093401c"
    // "https://images.pexels.com/photos/3408314/pexels-photo-3408314.jpeg",
    // "https://images.pexels.com/photos/3808519/pexels-photo-3808519.jpeg",
    // "https://images.pexels.com/photos/3348519/pexels-photo-3348519.jpeg",
  ];

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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
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

  const residentialImages = [
    residential1,
    residential2,
    residential3,
    residential4,
    residential5,
    // "https://images.pexels.com/photos/3556058/pexels-photo-3556058.jpeg",
    // "https://images.pexels.com/photos/3502632/pexels-photo-3502632.jpeg",
    // "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg",
    // "https://images.pexels.com/photos/3408314/pexels-photo-3408314.jpeg",
    // "https://images.pexels.com/photos/3808519/pexels-photo-3808519.jpeg",
  ];

  const investmentImages = [
    investment1,
    investment2,
    investment3,
    investment4,
    investment5,
    // "https://images.pexels.com/photos/3502632/pexels-photo-3502632.jpeg",
    // "https://images.pexels.com/photos/3556058/pexels-photo-3556058.jpeg",
    // "https://images.pexels.com/photos/2998543/pexels-photo-2998543.jpeg",
    // "https://images.pexels.com/photos/3348519/pexels-photo-3348519.jpeg",
    // "https://images.pexels.com/photos/3833519/pexels-photo-3833519.jpeg",
  ];

  const features = [
    {
      title: "Affordable Housing Solutions",
      description:
        "We provide quality residential properties at competitive prices, making homeownership accessible to everyone.",
      icon: "🏠",
      image:
        "https://images.pexels.com/photos/3556058/pexels-photo-3556058.jpeg",
    },
    {
      title: "Lucrative Investments",
      description:
        "Explore high-return investment opportunities in our carefully curated real estate projects.",
      icon: "📈",
      image:
        "https://images.pexels.com/photos/3502632/pexels-photo-3502632.jpeg",
    },
    {
      title: "Trusted Partnership",
      description:
        "With over a decade of excellence, we are your reliable partner in real estate ventures.",
      icon: "🤝",
      image:
        "https://images.pexels.com/photos/3408314/pexels-photo-3408314.jpeg",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Image Slider Background */}
      <section className="relative text-white overflow-hidden min-h-screen flex items-center justify-center">
        {/* Background Image Slider - Full Coverage */}
        <div className="absolute inset-0">
          {heroImages && (
            <ImageSlider
              images={heroImages}
              autoplay={true}
              autoplayDelay={5000}
              className="h-screen w-full"
              borderRadius="none"
              showControls={false}
            />
          )}
        </div>

        {/* Dark Overlay for Better Text Visibility */}
        <motion.div
          className="absolute inset-0 bg-black/55"
          animate={{
            backgroundColor: [
              "rgba(0,0,0,0.55)",
              "rgba(0,0,0,0.6)",
              "rgba(0,0,0,0.55)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>

        {/* Text Content Overlay */}
        <div className="relative z-10 px-4 py-20">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
              variants={itemVariants}
            >
              Wealth Creation Through
              <br />
              Strategic Asset Management
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Co-invest and co-own premium real estate with transparency,
              expertise, and long-term wealth creation at the core.
              <br />
              Professional asset management designed for Indian investors and
              visionary entrepreneurs.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={itemVariants}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-primary font-bold rounded-lg hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Investing Now
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore Opportunities
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Aadhar Asset Management Section */}
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
              Redefining Real Estate Investment for Indian Investors
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
                  is a premier real estate investment platform designed for
                  Indian retail investors, HNIs, and entrepreneurs. We
                  democratize high-value real estate investments through
                  transparent co-ownership and co-investment models, enabling
                  wealth creation through strategic property asset management.
                </p>
                <p className="text-lg text-gray-50 leading-relaxed">
                  Our vision is to bridge the gap between premium real estate
                  opportunities and Indian investors by providing professional
                  asset management, transparent transactions, and long-term
                  value creation. We combine fintech innovation with real estate
                  expertise to deliver exceptional returns and peace of mind.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
              >
                {[
                  {
                    title: "Expert Management",
                    description:
                      "Professional handling of your real estate portfolio with strategic planning and market insights.",
                  },
                  {
                    title: "Maximum Returns",
                    description:
                      "Optimized property performance and rental yields through smart asset allocation strategies.",
                  },
                  {
                    title: "Complete Care",
                    description:
                      "End-to-end solutions from property maintenance to tenant management and legal compliance.",
                  },
                  {
                    title: "Growth Opportunities",
                    description:
                      "Access to exclusive investment opportunities and market trends to expand your wealth portfolio.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300"
                    variants={itemVariants}
                  >
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-100 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="bg-gradient-to-r from-blue-500/20 to-blue-700/20 backdrop-blur-sm p-8 rounded-xl border border-blue-300/30 text-center"
                variants={itemVariants}
              >
                <p className="text-lg text-gray-50 leading-relaxed mb-6">
                  Whether you're a seasoned investor or just beginning your real
                  estate journey, Aadhar Asset Management is your partner in
                  success. We combine market expertise, innovative solutions,
                  and personalized service to help you achieve your financial
                  goals.
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

      {/* Stats Section */}
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

      {/* Mission & Vision Section */}
      <section className="section-padding bg-accent">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary">
              Our Vision
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12 leading-relaxed">
              To build an iconic skyline with affordable, sustainable, and
              innovative real estate solutions that transform lives and create
              lasting value for our customers, partners, and communities.
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
                  {/* Feature Image */}
                  <motion.div
                    className="h-48 w-full overflow-hidden relative bg-accent"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
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

      {/* Investment Model Section */}
      <section className="section-padding bg-gradient-to-b from-accent to-white">
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
              Our Co-Investment Model
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Transparent, accessible, and professionally managed real estate
              investments designed for Indian investors
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {[
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
            ].map((item, index) => (
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

      {/* Why Choose Us Section */}
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
            {[
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
            ].map((item, index) => (
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

      {/* Building & Land Showcase Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary">
            Quality Projects Across Categories
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            From residential apartments to commercial spaces, we develop
            properties that meet the highest standards.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Residential Building Image Slider */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageSlider
                images={residentialImages}
                autoplay={true}
                autoplayDelay={5000}
                title="Residential Apartments"
                subtitle="Modern living spaces with premium amenities"
              />
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
                    <span className="text-3xl">🏢</span> Residential Excellence
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our residential projects feature state-of-the-art
                    architecture, modern amenities, and sustainable design. Each
                    property is thoughtfully planned to create vibrant
                    communities.
                  </p>
                </div>
                <div className="bg-accent p-6 rounded-lg border border-accent">
                  <p className="text-sm font-semibold text-primary mb-3">
                    KEY FEATURES
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-center">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">
                        World-class amenities and facilities
                      </span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">
                        Green spaces and landscaping
                      </span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">
                        24/7 security and maintenance
                      </span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">
                        Flexible payment options
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second Row - Land Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
                    <span className="text-3xl">📍</span> Investment Plots
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Prime location residential plots with excellent connectivity
                    and growth potential. Ideal for building your dream home or
                    as a sound investment for future returns.
                  </p>
                </div>
                <div className="bg-accent p-6 rounded-lg border border-accent">
                  <p className="text-sm font-semibold text-primary mb-3">
                    PLOT SPECIFICATIONS
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-center">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">
                        500 - 2000 sq.ft. available
                      </span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">
                        Clear title and legal documentation
                      </span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">
                        Wide roads and utilities ready
                      </span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">
                        High appreciation potential
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Right - Investment Land Image Slider */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <ImageSlider
                images={investmentImages}
                autoplay={true}
                autoplayDelay={5000}
                title="Investment Land"
                subtitle="Prime locations with high growth potential"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
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

      {/* Blog Section */}
      <section className="section-padding bg-accent">
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
              Latest From Our Blog
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Stay informed with insights, tips, and updates about the real
              estate market and investment opportunities.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {[
              {
                id: 'smart-real-estate-investment-strategies',
                title: "Smart Real Estate Investment Strategies",
                excerpt:
                  "Learn the proven strategies to maximize your real estate investment returns and build long-term wealth.",
                date: "January 8, 2024",
                icon: "📈",
                readTime: "5 min read",
              },
              {
                id: 'top-10-locations-for-property-investment-in-2024',
                title: "Top 10 Locations for Property Investment in 2024",
                excerpt:
                  "Discover the emerging neighborhoods and prime locations that offer the best growth potential for investors.",
                date: "January 5, 2024",
                icon: "🏆",
                readTime: "7 min read",
              },
              {
                id: 'first-time-homebuyer-guide',
                title: "First-Time Homebuyer Guide",
                excerpt:
                  "Everything you need to know about purchasing your first home, from financing to legal requirements.",
                date: "January 1, 2024",
                icon: "🏠",
                readTime: "6 min read",
              },
            ].map((blog, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Blog Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                  <span className="text-6xl">{blog.icon}</span>
                </div>

                {/* Blog Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-secondary uppercase">
                      {blog.readTime}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {blog.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-3 flex-grow">
                    {blog.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {blog.excerpt}
                  </p>

                  <Link to={`/blog/${blog.id}`}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-secondary font-semibold"
                    >
                      Read More
                      <ArrowRight size={18} />
                    </motion.div>
                  </Link>
                </div>
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
                to="/blog"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-200"
              >
                View All Articles
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
}
