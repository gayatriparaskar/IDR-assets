// client/pages/Blog.tsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Mock data - same as in BlogPost.tsx
const blogPosts = [
  {
    id: 'smart-real-estate-investment-strategies',
    title: "Smart Real Estate Investment Strategies",
    excerpt: "Learn the proven strategies to maximize your real estate investment returns and build long-term wealth.",
    date: "January 8, 2024",
    readTime: "5 min read",
    icon: "📈"
  },
  {
    id: 'top-10-locations-for-property-investment-in-2024',
    title: "Top 10 Locations for Property Investment in 2024",
    excerpt: "Discover the emerging neighborhoods and prime locations that offer the best growth potential for investors.",
    date: "January 5, 2024",
    readTime: "7 min read",
    icon: "🏆"
  },
  {
    id: 'first-time-homebuyer-guide',
    title: "First-Time Homebuyer Guide",
    excerpt: "Everything you need to know about purchasing your first home, from financing to legal requirements.",
    date: "January 1, 2024",
    readTime: "6 min read",
    icon: "🏠"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-accent py-16">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">Our Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tips, and updates about real estate and investment opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                <span className="text-6xl">{post.icon}</span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-secondary uppercase">
                    {post.readTime}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">
                    {post.date}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-primary mb-3">
                  {post.title}
                </h2>

                <p className="text-muted-foreground mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-secondary font-semibold group"
                >
                  Read More
                  <ArrowRight 
                    size={18} 
                    className="group-hover:translate-x-1 transition-transform duration-200" 
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}