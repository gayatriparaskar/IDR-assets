import { Link } from "react-router-dom";
import { ArrowRight, Send } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { API_URLS } from "../../config/api";

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

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

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    queryForm:"Aadhar Asset",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(API_URLS.QUERIES, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          queryFrom: "Aadhar Asset",
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit query');
      }
      const data = await response.json();
      console.log('Query submission data:', data);
      
      // Handle actual API response structure
      if (data.success) {
        // Success
        setSuccess("Your query has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          queryForm: "Aadhar Asset",
        });
      } else {
        throw new Error(data.message || "Failed to submit query");
      }

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-white text-primary section-padding overflow-hidden">
      
      <motion.div
        className="section-container text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 className="text-3xl sm:text-4xl font-bold mb-4" variants={fadeInUpVariants}>
          Ready to Find Your Perfect Property?
        </motion.h2>

        <motion.p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" variants={fadeInUpVariants}>
          Get in touch with our expert team today. We're here to help you achieve your real estate goals.
        </motion.p>

        <motion.div variants={fadeInUpVariants} className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name *" required className="input" />
              <input name="email" value={formData.email} onChange={handleChange} placeholder="Your Email *" required className="input" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="input" />
              <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="input" />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message *"
              required
              rows={4}
              className="input w-full"
            />

            {/* ❌ Error */}
            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* ✅ Success */}
            {success && (
              <div className="bg-green-100 text-green-700 p-3 rounded-lg text-sm">
                {success}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2 mx-auto"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={18} />
            </motion.button>

          </form>
        </motion.div>

        <div className="mt-6">
          <Link to="/contact" className="inline-flex items-center gap-2 text-primary hover:underline">
            Or contact us directly <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}