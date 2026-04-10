import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";

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

const blogPosts = [
  {
    id: "smart-real-estate-investment-strategies",
    title: "Smart Real Estate Investment Strategies for 2024",
    excerpt: "Discover proven strategies to maximize your real estate investment returns and build long-term wealth in today's market.",
    content: `
      <h2>Understanding the Current Market</h2>
      <p>The real estate market in 2024 presents unique opportunities for savvy investors. With changing economic conditions and evolving consumer preferences, it's essential to stay informed about the latest trends and strategies.</p>
      
      <h2>Key Investment Strategies</h2>
      <ul>
        <li><strong>Diversification:</strong> Spread your investments across different property types and locations.</li>
        <li><strong>Long-term Planning:</strong> Focus on properties with strong growth potential over 5-10 years.</li>
        <li><strong>Market Research:</strong> Thoroughly analyze local market conditions before investing.</li>
        <li><strong>Professional Guidance:</strong> Work with experienced real estate professionals.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>By implementing these strategies and working with trusted partners like Aadhar Asset Management, you can build a robust real estate portfolio that generates consistent returns.</p>
    `,
    date: "January 15, 2024",
    author: "Aadhar Team",
    readTime: "5 min read",
    category: "Investment Tips",
    image: "https://images.pexels.com/photos/3556058/pexels-photo-3556058.jpeg",
    tags: ["investment", "strategy", "real estate"],
  },
  {
    id: "top-10-locations-for-property-investment-2024",
    title: "Top 10 Locations for Property Investment in 2024",
    excerpt: "Explore emerging neighborhoods and prime locations that offer the best growth potential for real estate investors this year.",
    content: `
      <h2>Emerging Hotspots</h2>
      <p>Several locations across India are showing tremendous growth potential for real estate investment. These areas combine infrastructure development, economic growth, and increasing demand.</p>
      
      <h2>Top Investment Locations</h2>
      <ol>
        <li><strong>Mumbai Metropolitan Region:</strong> Continued demand and infrastructure development.</li>
        <li><strong>Bangalore:</strong> IT hub with strong rental yields.</li>
        <li><strong>Pune:</strong> Emerging as a preferred residential destination.</li>
        <li><strong>Hyderabad:</strong> Growing IT sector and infrastructure.</li>
        <li><strong>Delhi NCR:</strong> Always in demand for commercial and residential.</li>
      </ol>
      
      <h2>Investment Considerations</h2>
      <p>When choosing locations, consider factors like connectivity, upcoming infrastructure, employment opportunities, and quality of life indicators.</p>
    `,
    date: "January 10, 2024",
    author: "Research Team",
    readTime: "7 min read",
    category: "Market Analysis",
    image: "https://images.pexels.com/photos/3502632/pexels-photo-3502632.jpeg",
    tags: ["locations", "investment", "market analysis"],
  },
  {
    id: "first-time-homebuyer-guide",
    title: "Complete Guide for First-Time Homebuyers",
    excerpt: "Everything you need to know about purchasing your first home, from financing to legal requirements and beyond.",
    content: `
      <h2>Getting Started</h2>
      <p>Buying your first home is an exciting journey. This guide will walk you through the essential steps and considerations for a successful home purchase.</p>
      
      <h2>Financial Preparation</h2>
      <ul>
        <li>Check your credit score and improve if needed</li>
        <li>Save for down payment (typically 20% of property value)</li>
        <li>Get pre-approved for a home loan</li>
        <li>Factor in additional costs like registration, stamp duty, and maintenance</li>
      </ul>
      
      <h2>Property Selection</h2>
      <p>Consider location, amenities, builder reputation, and future growth potential. Visit multiple properties before making a decision.</p>
      
      <h2>Legal Due Diligence</h2>
      <p>Verify all property documents, approvals, and clear titles. Work with legal professionals to ensure a smooth transaction.</p>
    `,
    date: "January 5, 2024",
    author: "Property Experts",
    readTime: "6 min read",
    category: "Home Buying",
    image: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg",
    tags: ["home buying", "first-time buyer", "guide"],
  },
  {
    id: "commercial-vs-residential-investment",
    title: "Commercial vs Residential Investment: Which is Better?",
    excerpt: "Compare the pros and cons of commercial and residential real estate investments to make informed decisions.",
    content: `
      <h2>Understanding the Differences</h2>
      <p>Both commercial and residential properties offer unique advantages and challenges. Understanding these differences is crucial for making the right investment choice.</p>
      
      <h2>Residential Properties</h2>
      <p><strong>Pros:</strong> Lower entry costs, steady demand, easier financing, emotional value.</p>
      <p><strong>Cons:</strong> Lower rental yields, tenant management, maintenance costs.</p>
      
      <h2>Commercial Properties</h2>
      <p><strong>Pros:</strong> Higher rental yields, longer lease terms, professional tenants.</p>
      <p><strong>Cons:</strong> Higher entry costs, market sensitivity, complex regulations.</p>
      
      <h2>Making the Choice</h2>
      <p>Your choice should depend on your budget, risk appetite, and investment goals. Many successful investors maintain a balanced portfolio of both property types.</p>
    `,
    date: "December 28, 2023",
    author: "Investment Analyst",
    readTime: "8 min read",
    category: "Investment Analysis",
    image: "https://images.pexels.com/photos/2998543/pexels-photo-2998543.jpeg",
    tags: ["commercial", "residential", "comparison"],
  },
  {
    id: "real-estate-market-trends-2024",
    title: "Real Estate Market Trends to Watch in 2024",
    excerpt: "Stay ahead of the curve with these emerging trends that will shape the real estate market this year.",
    content: `
      <h2>Technology Integration</h2>
      <p>PropTech is revolutionizing how we buy, sell, and manage properties. From virtual tours to AI-powered property management, technology is making real estate more accessible and efficient.</p>
      
      <h2>Sustainable Development</h2>
      <p>Green buildings and sustainable developments are gaining popularity. Properties with eco-friendly features command premium prices and lower operating costs.</p>
      
      <h2>Changing Work Patterns</h2>
      <p>Remote work is influencing property preferences. Home offices, better connectivity, and mixed-use developments are in high demand.</p>
      
      <h2>Investment Opportunities</h2>
      <p>REITs, fractional ownership, and crowdfunding are making real estate investment more accessible to retail investors.</p>
    `,
    date: "December 20, 2023",
    author: "Market Research Team",
    readTime: "6 min read",
    category: "Market Trends",
    image: "https://images.pexels.com/photos/3833519/pexels-photo-3833519.jpeg",
    tags: ["trends", "technology", "sustainability"],
  },
  {
    id: "property-valuation-methods",
    title: "Understanding Property Valuation Methods",
    excerpt: "Learn different approaches to property valuation and how professionals determine the true worth of real estate assets.",
    content: `
      <h2>Why Property Valuation Matters</h2>
      <p>Accurate property valuation is crucial for buying, selling, financing, and investment decisions. Understanding valuation methods helps you make informed choices.</p>
      
      <h2>Common Valuation Methods</h2>
      <ul>
        <li><strong>Comparative Method:</strong> Compare with similar properties in the area</li>
        <li><strong>Cost Approach:</strong> Calculate replacement cost minus depreciation</li>
        <li><strong>Income Method:</strong> Based on rental income potential</li>
        <li><strong>Residual Method:</strong> For development projects</li>
      </ul>
      
      <h2>Factors Affecting Value</h2>
      <p>Location, condition, amenities, market conditions, and future development potential all impact property value.</p>
      
      <h2>Professional Help</h2>
      <p>While you can estimate value, professional valuers provide accurate assessments required for legal and financial transactions.</p>
    `,
    date: "December 15, 2023",
    author: "Valuation Experts",
    readTime: "7 min read",
    category: "Property Valuation",
    image: "https://images.pexels.com/photos/3348519/pexels-photo-3348519.jpeg",
    tags: ["valuation", "methods", "property assessment"],
  },
];

export default function Blog() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Real Estate Insights & Updates
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Stay informed with expert insights, market trends, and investment strategies from our team of real estate professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Blog Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title and Excerpt */}
                  <h3 className="text-xl font-bold text-primary mb-3 flex-grow">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  {/* <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-primary transition-colors duration-200"
                  >
                    Read Full Article
                    <ArrowRight size={16} />
                  </Link> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for weekly real estate tips, market updates, and exclusive investment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
