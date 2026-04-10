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

const blogPosts = [
  {
    id: "smart-real-estate-investment-strategies",
    title: "Smart Real Estate Investment Strategies",
    excerpt:
      "Learn the proven strategies to maximize your real estate investment returns and build long-term wealth.",
    date: "January 8, 2024",
    icon: "📈",
    readTime: "5 min read",
  },
  {
    id: "top-10-locations-for-property-investment-in-2024",
    title: "Top 10 Locations for Property Investment in 2024",
    excerpt:
      "Discover the emerging neighborhoods and prime locations that offer the best growth potential for investors.",
    date: "January 5, 2024",
    icon: "🏆",
    readTime: "7 min read",
  },
  {
    id: "first-time-homebuyer-guide",
    title: "First-Time Homebuyer Guide",
    excerpt:
      "Everything you need to know about purchasing your first home, from financing to legal requirements.",
    date: "January 1, 2024",
    icon: "🏠",
    readTime: "6 min read",
  },
];

export default function BlogSection() {
  return (
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
          {blogPosts.map((blog, index) => (
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
  );
}
