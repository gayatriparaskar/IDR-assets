import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission (in production, this would call your backend API)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success message
      setSubmitMessage("Thank you! We'll contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-600 text-white py-16 sm:py-24">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>

                {submitMessage && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      submitMessage.includes("Thank")
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a service</option>
                        <option value="asset-management">Property Asset Management</option>
                        <option value="co-investment">Co-Investment Opportunities</option>
                        <option value="consulting">Real Estate Consulting</option>
                        <option value="project-management">Project Management</option>
                        <option value="fundraising">Fundraising & Capital</option>
                        <option value="fintech">Fintech Integration</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your real estate needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={20} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex gap-3 items-start mb-2">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Office Address</p>
                        <p className="text-sm text-muted-foreground">
                          1st Floor, Shop No. 2, Bhagat Plaza
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Pandumal Chauraha, Burhanpur 450331
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex gap-3 items-center mb-2">
                      <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Email</p>
                        <a
                          href="mailto:aadharshilaRealtors22@gmail.com"
                          className="text-sm text-primary hover:underline"
                        >
                          aadharshilaRealtors22@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex gap-3 items-start mb-2">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Phone</p>
                        <a
                          href="tel:+917000654305"
                          className="text-sm text-primary hover:underline block"
                        >
                          +91 7000654305
                        </a>
                        <a
                          href="tel:+919893812025"
                          className="text-sm text-primary hover:underline"
                        >
                          +91 9893812025
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex gap-3 items-start">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Business Hours</p>
                        <p className="text-sm text-muted-foreground">Monday - Saturday</p>
                        <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM</p>
                        <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-primary text-white rounded-xl p-8 text-center">
                <p className="text-3xl font-bold mb-2">1520+</p>
                <p className="text-sm opacity-90">Happy Clients Trust Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="">
        <div className="">
        
          <div className="rounded-xl overflow-hidden shadow-md h-[450px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7434.104888555701!2d76.2221451865322!3d21.308943967042286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd8330cd642426f%3A0x6d8c36a176a09f78!2sAadharshila%20Realtors%20Management%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1768562341921!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Aadharshila Realtors Management Pvt Ltd Location"
            ></iframe>
            </div>
            </div>
      </section>
    </div>
  );
}
