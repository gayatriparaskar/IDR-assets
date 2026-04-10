// client/pages/Blog.tsx
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import { motion } from "framer-motion";

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

// Enhanced mock data with more comprehensive blog content
const blogPosts = [
  {
    id: 'smart-real-estate-investment-strategies',
    title: "Smart Real Estate Investment Strategies for 2024",
    excerpt: "Discover proven strategies to maximize your real estate investment returns and build long-term wealth in today's market.",
    date: "January 15, 2024",
    author: "Aadhar Team",
    readTime: "5 min read",
    category: "Investment Tips",
    image: "https://images.pexels.com/photos/3556058/pexels-photo-3556058.jpeg",
    tags: ["investment", "strategy", "real estate"],
    icon: "📈"
  },
  {
    id: 'top-10-locations-for-property-investment-2024',
    title: "Top 10 Locations for Property Investment in 2024",
    excerpt: "Explore emerging neighborhoods and prime locations that offer the best growth potential for real estate investors this year.",
    date: "January 10, 2024",
    author: "Research Team",
    readTime: "7 min read",
    category: "Market Analysis",
    image: "https://images.pexels.com/photos/3502632/pexels-photo-3502632.jpeg",
    tags: ["locations", "investment", "market analysis"],
    icon: "🏆"
  },
  {
    id: 'first-time-homebuyer-guide',
    title: "Complete Guide for First-Time Homebuyers",
    excerpt: "Everything you need to know about purchasing your first home, from financing to legal requirements and beyond.",
    date: "January 5, 2024",
    author: "Property Experts",
    readTime: "6 min read",
    category: "Home Buying",
    image: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg",
    tags: ["home buying", "first-time buyer", "guide"],
    icon: "🏠"
  },
  {
    id: 'commercial-vs-residential-investment',
    title: "Commercial vs Residential Investment: Which is Better?",
    excerpt: "Compare the pros and cons of commercial and residential real estate investments to make informed decisions.",
    date: "December 28, 2023",
    author: "Investment Analyst",
    readTime: "8 min read",
    category: "Investment Analysis",
    image: "https://images.pexels.com/photos/2998543/pexels-photo-2998543.jpeg",
    tags: ["commercial", "residential", "comparison"],
    icon: "🏢"
  },
  {
    id: 'real-estate-market-trends-2024',
    title: "Real Estate Market Trends to Watch in 2024",
    excerpt: "Stay ahead of the curve with these emerging trends that will shape the real estate market this year.",
    date: "December 20, 2023",
    author: "Market Research Team",
    readTime: "6 min read",
    category: "Market Trends",
    image: "https://images.pexels.com/photos/3833519/pexels-photo-3833519.jpeg",
    tags: ["trends", "technology", "sustainability"],
    icon: "📊"
  },
  {
    id: 'property-valuation-methods',
    title: "Understanding Property Valuation Methods",
    excerpt: "Learn different approaches to property valuation and how professionals determine the true worth of real estate assets.",
    date: "December 15, 2023",
    author: "Valuation Experts",
    readTime: "7 min read",
    category: "Property Valuation",
    image: "https://images.pexels.com/photos/3348519/pexels-photo-3348519.jpeg",
    tags: ["valuation", "methods", "property assessment"],
    icon: "📋"
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