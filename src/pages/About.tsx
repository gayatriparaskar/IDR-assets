import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

  interface TeamMember {
  name: string;
  position: string;
  description: string;
}

export default function About() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
useEffect(() => {
  const fetchTeamData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/team-members');
      if (!response.ok) {
        throw new Error('Failed to fetch team data');
      }
      const data = await response.json(); // Fixed: Use response.json() instead of response.data
      console.log("Team data:", data);
      setTeam(data.data);
    } catch (err) {
      console.error('Error fetching team data:', err);
      // Fallback to static data if API fails
      const fallbackTeam = [
        {
          name: "Ashish Kumar",
          position: "Chief Executive Officer",
          description: "Visionary leader with 15+ years in real estate and asset management."
        },
        {
          name: "Priya Sharma",
          position: "Head of Investments",
          description: "Expert in portfolio strategy and investor relations."
        }
      ];
      setTeam(fallbackTeam);
      setError('Using fallback data - API not available');
    } finally {
      setLoading(false);
    }
  };

  fetchTeamData();
}, []);
  const values = [
    {
      title: "Transparency",
      description: "Full disclosure of investment details, risks, and returns to all stakeholders with regular reporting.",
    },
    {
      title: "Safety",
      description: "The safety of our employees and the public is everyone’s responsibility. Plan safety into every aspect of our work and do not deviate from that plan. Strive for zero incidents. ",
    },
    {
      title: "Teamwork ",
      description: "Our culture of teamwork allows us to work together within the Company, and with our clients to deliver better solutions and collectively accomplishing our goals. ",
    },
    {
      title: "Entrepreneurship ",
      description: "Each employee should show initiative and be motivated by a desire to win, to commit, and to succeed. ",
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

  // const team = [
  //   {
  //     name: "Ashish Kumar",
  //     position: "Chief Executive Officer",
  //     description: "Visionary leader with 15+ years in real estate and asset management, specializing in fintech-real estate integration.",
  //   },
  //   {
  //     name: "Priya Sharma",
  //     position: "Head of Investments",
  //     description: "Expert in portfolio strategy and investor relations, ensuring transparent returns and risk management.",
  //   },
  //   {
  //     name: "Rajesh Patel",
  //     position: "Chief Compliance Officer",
  //     description: "Ensures regulatory compliance and protects investor interests with comprehensive legal frameworks.",
  //   },
  //   {
  //     name: "Neha Verma",
  //     position: "Asset Manager",
  //     description: "Manages investment portfolios and oversees property performance to maximize investor returns.",
  //   },
  // ];

  interface TeamMember {
  name: string;
  position: string;
  description: string;
}



  // Rest of your component code...
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
Our main goal is to surpass our clients' expectations. This Farm was established not only to earn profit but with a noble motive to assist the public to get quality  Services in reasonable price.          </p>
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
             The first objective is to serve the nation and economic development. We are a team of real 
             experienced and qualified people, they have a vision of where to invest, and get maximum 
             returns in the coming time and also get good % of profit. We invest in Agricultural land, commercial, 
             residential and other places in Tier 2, Tier 3 city and earn maximum by investing.
            </motion.p>
            <motion.p variants={itemVariants}>
             We founded our Company with the core idea of Creating Opportunities at the bottom of the pyramid, and we do so by 
             providing financial services to unserved and underserved people in rural and semi-rural areas across India. 
            </motion.p>
            <motion.p variants={itemVariants}>
            We believe that our network, technology and services have improved accessibility to formal credit at affordable prices, thereby 
            positively impacting the lives of our customers in rural India.
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
To become the leading services firm, while delivering projects provide exceptional customer satisfaction.               </span>
            </motion.li>
            <motion.li className="flex gap-4 items-start" variants={itemVariants}>
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-muted-foreground">
To continually deliver excellent value & innovative solutions to meet our clients' requirements.              </span>
            </motion.li>
            <motion.li className="flex gap-4 items-start" variants={itemVariants}>
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-muted-foreground">
We want every partner and client experience to be the talk of a life time.              </span>
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
  <div className="pt-20">
    {/* Other content... */}

    {/* Team Section */}
    <section className="py-16 bg-muted/50">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
        
        {loading ? (
          <div className="text-center py-12">Loading team members...</div>
        ) : error ? (
          <div className="text-center text-red-500 mb-8">{error}</div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.isArray(team) && team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mb-4 mx-auto">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
              <p className="text-primary text-center font-medium mb-3">{member.position}</p>
              <p className="text-muted-foreground text-center">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>

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
