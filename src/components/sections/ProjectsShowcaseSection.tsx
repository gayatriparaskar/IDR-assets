import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ImageSlider from "../ImageSlider";
import { API_URLS, API_BASE_URL } from "../../config/api";

// Helper function to get proper image URL
const getImageUrl = (imagePath: string | null | undefined): string => {
  if (!imagePath) {
    console.log('No image path provided');
    return '';
  }
  
  if (imagePath.startsWith('http')) {
    console.log('Image path is already a full URL:', imagePath);
    return imagePath;
  }
  
  const fullUrl = `${API_BASE_URL}${imagePath}`;
  console.log('API_BASE_URL:', API_BASE_URL);
  console.log('imagePath:', imagePath);
  console.log('Constructed image URL:', fullUrl);
  
  return fullUrl;
};

interface Property {
  _id: string;
  name: string;
  description: string;
  status: string;
  image?: string;
  images?: Array<{
    url: string;
    isFeatured: boolean;
    _id: string;
  }>;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  features: Array<{
    name: string;
    value: string;
    _id: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

interface ProjectsShowcaseSectionProps {
  residentialImages?: string[];
  investmentImages?: string[];
}

export default function ProjectsShowcaseSection({ 
  residentialImages = [], 
  investmentImages = [] 
}: ProjectsShowcaseSectionProps) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(API_URLS.PROPERTIES);
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        console.log('Properties data:', data);
        
        // Handle the actual API response structure
        let propertiesData = [];
        if (data.success && data.properties) {
          propertiesData = data.properties;
        } else if (Array.isArray(data)) {
          propertiesData = data;
        }
        
        setProperties(propertiesData);
      } catch (err) {
        console.error('Error fetching properties:', err);
        setError('Failed to load properties');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // State for processed data
  const [displayResidentialImages, setDisplayResidentialImages] = useState<string[]>([]);
  const [displayInvestmentImages, setDisplayInvestmentImages] = useState<string[]>([]);
  const [displayResidentialFeatures, setDisplayResidentialFeatures] = useState<string[]>([]);
  const [displayInvestmentSpecifications, setDisplayInvestmentSpecifications] = useState<string[]>([]);

  // Process properties data from API
  useEffect(() => {
    if (properties.length === 0) return;

    // Filter properties to only show "coming soon" status
    const comingSoonProperties = properties.filter(property => 
      property.status === 'coming soon'
    );
      setProperties(comingSoonProperties);
    console.log('Coming soon properties:', comingSoonProperties);
    console.log('All properties:', properties);

    // Extract images from properties (handle both single image and multiple images)
    const extractImages = (property: Property): string[] => {
      const images: string[] = [];
      
      console.log('Extracting images from property:', property.name);
      console.log('Single image:', property.image);
      console.log('Multiple images:', property.images);
      
      // Add single image if exists
      if (property.image) {
        const fullImageUrl = getImageUrl(property.image);
        images.push(fullImageUrl);
        console.log('Added single image:', fullImageUrl);
      }
      
      // Add multiple images if exist
      if (property.images && property.images.length > 0) {
        property.images.forEach(img => {
          if (img.url) {
            const fullImageUrl = getImageUrl(img.url);
            images.push(fullImageUrl);
            console.log('Added multiple image:', fullImageUrl);
          }
        });
      }
      
      console.log('Final images array:', images);
      return images;
    };

    // Extract features from properties
    const extractFeatures = (property: Property): string[] => {
      return property.features
        .filter(feature => feature.name && feature.name.trim() !== '')
        .map(feature => feature.name);
    };

    // Process properties for display
    if (comingSoonProperties.length > 0) {
      // Get images for first property (residential)
      const residentialImages = extractImages(comingSoonProperties[0]);
      setDisplayResidentialImages(residentialImages);

      // Get features for first property
      const residentialFeatures = extractFeatures(comingSoonProperties[0]);
      setDisplayResidentialFeatures(residentialFeatures.length > 0 ? residentialFeatures : [
        "World-class amenities and facilities",
        "Green spaces and landscaping", 
        "24/7 security and maintenance",
        "Flexible payment options"
      ]);

      // Process second property if available (investment)
      if (comingSoonProperties.length > 1) {
        const investmentImages = extractImages(comingSoonProperties[1]);
        setDisplayInvestmentImages(investmentImages);

        const investmentFeatures = extractFeatures(comingSoonProperties[1]);
        setDisplayInvestmentSpecifications(investmentFeatures.length > 0 ? investmentFeatures : [
          "500 - 2000 sq.ft. available",
          "Clear title and legal documentation",
          "Wide roads and utilities ready",
          "High appreciation potential"
        ]);
      } else {
        // Use first property for both sections if only one coming soon property exists
        setDisplayInvestmentImages(residentialImages);
        setDisplayInvestmentSpecifications([
          "500 - 2000 sq.ft. available",
          "Clear title and legal documentation",
          "Wide roads and utilities ready",
          "High appreciation potential"
        ]);
      }
    } else {
      console.log('No coming soon properties found');
      // Set empty arrays if no coming soon properties
      setDisplayResidentialImages([]);
      setDisplayResidentialFeatures([]);
      setDisplayInvestmentImages([]);
      setDisplayInvestmentSpecifications([]);
    }
  }, [properties]);

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

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading properties...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Residential Building Image Slider */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <ImageSlider
                  images={displayResidentialImages}
                  autoplay={true}
                  autoplayDelay={5000}
                  title="Residential Properties"
                  subtitle={properties[0]?.description || "Modern living spaces with premium amenities"}
                  status={properties[0]?.status}
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
                      <span className="text-3xl">{'\ud83c\udfe2'}</span> {properties[0]?.name || "Residential Excellence"}
                      <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                        properties[0]?.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : properties[0]?.status === 'draft'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {properties[0]?.status?.toUpperCase() }
                      </span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {properties[0]?.description || "Our residential projects feature state-of-the-art architecture, modern amenities, and sustainable design. Each property is thoughtfully planned to create vibrant communities."}
                    </p>
                  </div>
                  <div className="bg-accent p-6 rounded-lg border border-accent">
                    <p className="text-sm font-semibold text-primary mb-3">
                      KEY FEATURES
                    </p>
                    <ul className="space-y-2">
                      {displayResidentialFeatures.map((feature, index) => (
                        <li key={index} className="flex gap-3 items-center">
                          <span className="text-primary">{'\u2713'}</span>
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
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
                      <span className="text-3xl">{'\ud83d\udccd'}</span> {properties[1]?.name || properties[0]?.name || "Investment Plots"}
                      <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                        (properties[1] || properties[0])?.status === 'live' 
                          ? 'bg-green-100 text-green-800' 
                          : (properties[1] || properties[0])?.status === 'coming soon'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {(properties[1] || properties[0])?.status?.toUpperCase() || 'draft'}
                      </span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {properties[1]?.description || properties[0]?.description || "Prime location residential plots with excellent connectivity and growth potential. Ideal for building your dream home or as a sound investment for future returns."}
                    </p>
                  </div>
                  <div className="bg-accent p-6 rounded-lg border border-accent">
                    <p className="text-sm font-semibold text-primary mb-3">
                      PROPERTY SPECIFICATIONS
                    </p>
                    <ul className="space-y-2">
                      {displayInvestmentSpecifications.map((spec, index) => (
                        <li key={index} className="flex gap-3 items-center">
                          <span className="text-primary">{'\u2713'}</span>
                          <span className="text-muted-foreground">
                            {spec}
                          </span>
                        </li>
                      ))}
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
                  images={displayInvestmentImages}
                  autoplay={true}
                  autoplayDelay={5000}
                  title="Investment Properties"
                  subtitle={properties[1]?.description || properties[0]?.description || "Prime locations with high growth potential"}
                  status={(properties[1] || properties[0])?.status}
                />
               
                
              </motion.div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
