import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MapPin, ArrowLeft } from 'lucide-react';
import { API_URLS } from '../config/api';

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

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(API_URLS.PROPERTIES);
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        console.log('API Response:', data);
        
        // Handle API response structure
        let properties = [];
        if (data.success && data.properties) {
          properties = data.properties;
        } else if (Array.isArray(data)) {
          properties = data;
        }
        
        // Find property by ID
        const foundProperty = properties.find(p => p._id === id || p.id === id);
        console.log('Found property:', foundProperty);
        
        setProperty(foundProperty || null);
      } catch (err) {
        console.error('Error fetching property:', err);
        setError('Failed to load property details');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  // Helper function to get proper image URL
  const getImageUrl = (imagePath: string | null | undefined): string => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http')) return imagePath;
    return `${import.meta.env.VITE_API_BASE_URL || 'https://idr-backend-1.onrender.com'}${imagePath}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-600">Loading property details...</p>
          <Link to="/projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-primary hover:underline mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="h-96 overflow-hidden">
            <img 
              src={property?.images?.[0] ? getImageUrl(property.images[0].url) : property?.image ? getImageUrl(property.image) : '/api/placeholder/property.jpg'} 
              alt={property?.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4">
                  {property?.status === 'published' ? 'Ready to Move' : property?.status === 'draft' ? 'Draft' : 'Coming Soon'}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{property?.name}</h1>
                <div className="flex items-center text-gray-600">
                  <MapPin size={18} className="mr-2" />
                  {property?.address?.city}, {property?.address?.state}
                </div>
              </div>
              <div className="flex gap-3">
                <button className="btn-primary px-8 py-3 text-lg">
                  Schedule Site Visit
                </button>
                <Link 
                  to="/projects" 
                  className="px-8 py-3 text-lg bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                >
                  Back to Projects
                </Link>
              </div>
            </div>

            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
              <p className="text-gray-700 mb-6">{property?.description}</p>
              
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {property?.features?.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-gray-500 text-sm">{feature.name}</div>
                    <div className="font-semibold">{feature.value}</div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {property?.images?.map((img, index) => (
                  <div key={index} className="h-64 overflow-hidden rounded-lg">
                    <img 
                      src={getImageUrl(img.url)} 
                      alt={`${property?.name} - ${index + 1}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
