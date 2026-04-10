import { useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Enhanced mock data matching the Blogs component
const blogPosts: Record<string, {
  title: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}> = {
  "smart-real-estate-investment-strategies": {
    title: "Smart Real Estate Investment Strategies for 2024",
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
  "top-10-locations-for-property-investment-2024": {
    title: "Top 10 Locations for Property Investment in 2024",
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
  "first-time-homebuyer-guide": {
    title: "Complete Guide for First-Time Homebuyers",
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
  }
};

export default function BlogPost() {
  const { postId } = useParams<{ postId: string }>();
  const post = postId ? blogPosts[postId] : undefined;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-accent">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-4">
          <h1 className="text-4xl font-bold text-primary mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-accent py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.article 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Blog Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-8 sm:p-12 text-center text-white">
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                {post.readTime}
              </span>
              <span className="text-sm">{post.date}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">{post.title}</h1>
            {/* <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
            >
              <ArrowLeft size={16} />
              Back to all blogs
            </Link> */}
          </div>

          {/* Blog Content */}
          <div className="p-8 sm:p-12">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-primary prose-p:text-gray-700 prose-li:text-gray-700 prose-ul:list-disc prose-ol:list-decimal"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                <ArrowLeft size={18} />
                Back to all blogs
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
