import { motion } from "framer-motion";
import ImageSlider from "../ImageSlider";

interface ProjectsShowcaseSectionProps {
  residentialImages: string[];
  investmentImages: string[];
}

export default function ProjectsShowcaseSection({ 
  residentialImages, 
  investmentImages 
}: ProjectsShowcaseSectionProps) {
  return (
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
  );
}
