import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Mock data - in a real app, this would come from an API
const blogPosts = [
  {
    id: 'smart-real-estate-investment-strategies',
    title: "Smart Real Estate Investment Strategies",
    excerpt: "Learn the proven strategies to maximize your real estate investment returns and build long-term wealth.",
    content: `# Smart Real Estate Investment Strategies

Real estate investment remains one of the most reliable ways to build wealth. Here are some proven strategies to maximize your returns:

## 1. Buy and Hold

This long-term strategy involves purchasing properties and holding them for an extended period, benefiting from both rental income and property appreciation.

## 2. House Hacking

Live in one unit of a multi-family property while renting out the others, effectively reducing or eliminating your housing costs.

## 3. Fix and Flip

Purchase undervalued properties, renovate them, and sell them for a profit. This requires a good eye for potential and renovation skills.

## 4. Real Estate Investment Trusts (REITs)

Invest in real estate without directly owning properties by buying shares in REITs, which offer liquidity and diversification.`,
    date: "January 8, 2024",
    readTime: "5 min read",
    icon: "📈"
  },
  {
    id: 'top-10-locations-for-property-investment-in-2024',
    title: "Top 10 Locations for Property Investment in 2024",
    excerpt: "Discover the emerging neighborhoods and prime locations that offer the best growth potential for investors.",
    content: `# Top 10 Locations for Property Investment in 2024

Based on market trends and growth potential, here are the top locations to consider for your next real estate investment in 2024:

1. **Bangalore, Karnataka** - Tech hub with consistent demand for housing
2. **Pune, Maharashtra** - Growing IT sector and infrastructure development
3. **Hyderabad, Telangana** - Affordable properties with high appreciation potential
4. **Chennai, Tamil Nadu** - Strong rental market and industrial growth
5. **Mumbai Metropolitan Region** - Always in demand despite high prices
6. **Delhi NCR** - Infrastructure development and commercial growth
7. **Ahmedabad, Gujarat** - Emerging as a business and education hub
8. **Kolkata, West Bengal** - Affordable properties with good rental yields
9. **Chandigarh Tricity** - Planned city with high livability index
10. **Coimbatore, Tamil Nadu** - Emerging IT and manufacturing hub

Each location has its unique advantages, so consider your investment goals and risk appetite before deciding.`,
    date: "January 5, 2024",
    readTime: "7 min read",
    icon: "🏆"
  },
  {
    id: 'first-time-homebuyer-guide',
    title: "First-Time Homebuyer Guide",
    excerpt: "Everything you need to know about purchasing your first home, from financing to legal requirements.",
    content: `# First-Time Homebuyer Guide

Buying your first home is an exciting milestone. Follow this comprehensive guide to navigate the process smoothly:

## 1. Assess Your Finances
- Check your credit score
- Calculate your budget (including down payment, EMI, and additional costs)
- Get pre-approved for a home loan

## 2. Choose the Right Location
- Proximity to workplace, schools, and amenities
- Future development plans in the area
- Neighborhood safety and community

## 3. Property Selection
- New construction vs. resale properties
- Builder/developer reputation
- Property inspection checklist

## 4. Legal Verification
- Title deed verification
- Approved building plans
- No objection certificates (NOCs)
- Property tax receipts

## 5. Home Loan Process
- Compare interest rates from different banks
- Understand loan terms and conditions
- Complete documentation

## 6. Registration and Possession
- Property registration process
- Stamp duty and registration charges
- Taking possession and checking for any defects

Remember, buying a home is a significant decision. Take your time, do thorough research, and consult with real estate professionals when needed.`,
    date: "January 1, 2024",
    readTime: "6 min read",
    icon: "🏠"
  }
];

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-accent">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-4">
          <h1 className="text-4xl font-bold text-primary mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            <ArrowLeft size={18} />
            Back to Home
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
            <div className="text-6xl mb-4">{post.icon}</div>
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                {post.readTime}
              </span>
              <span className="text-sm">{post.date}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">{post.title}</h1>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
            >
              <ArrowLeft size={16} />
              Back to all articles
            </Link>
          </div>

          {/* Blog Content */}
          <div className="p-8 sm:p-12">
            <div className="prose max-w-none prose-headings:text-primary prose-p:text-muted-foreground prose-li:text-muted-foreground">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Simple markdown-like parsing for headers and lists
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.substring(3)}</h2>;
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{paragraph.substring(4)}</h3>;
                } else if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').map(item => item.replace(/^[0-9]+\.\s*|\-\s*/, ''));
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                      {items.map((item, i) => (
                        <li key={i} className="text-muted-foreground">
                          {item.includes('**') ? (
                            <span dangerouslySetInnerHTML={{ 
                              __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary">$1</strong>') 
                            }} />
                          ) : (
                            item
                          )}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                <ArrowLeft size={18} />
                Back to all articles
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
