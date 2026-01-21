import { useParams, Link } from 'react-router-dom';
import { MapPin, ArrowLeft } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you would fetch the project data based on the ID
  // For now, we'll use a placeholder or redirect if not found
  const project = {
    id: 1,
    name: 'Premium Residential Apartments - Phase 1',
    categoryLabel: 'Ready to Move',
    location: 'Metropolitan City',
    type: 'Residential Apartments',
    description: 'Modern 2 & 3 BHK apartments with world-class amenities and premium finishing, perfect for co-investment.',
    longDescription: 'Experience luxury living in our premium residential complex featuring state-of-the-art amenities, 24/7 security, and a prime location in the heart of the city. Each apartment is designed with modern aesthetics and high-quality finishes to provide the ultimate living experience.',
    amenities: ['Swimming Pool', 'Gymnasium', 'Community Hall', '24/7 Security', 'Landscaped Gardens', 'Children\'s Play Area', 'Power Backup', 'Rainwater Harvesting'],
    specifications: [
      { name: 'Carpet Area', value: '1200-2000 sq.ft' },
      { name: 'Bedrooms', value: '2 & 3 BHK' },
      { name: 'Floors', value: 'G+15' },
      { name: 'Total Units', value: '120' },
      { name: 'Possession', value: 'Ready to Move' },
      { name: 'RERA No.', value: 'P123456789' }
    ],
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
    gallery: [
      'https://img.freepik.com/free-photo/real-estate-sector_23-2151925471.jpg?semt=ais_hybrid&w=740&q=80',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREt5oMjaGGS5xu_fqytZ9GqJcVFQw8uD84eg&s',
      'https://www.shutterstock.com/image-photo/real-estate-concept-online-property-600nw-2683805065.jpg'
    ]
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link to="/projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
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
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4">
                  {project.categoryLabel}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.name}</h1>
                <div className="flex items-center text-gray-600">
                  <MapPin size={18} className="mr-2" />
                  {project.location}
                </div>
              </div>
              <button className="btn-primary px-8 py-3 text-lg">
                Schedule Site Visit
              </button>
            </div>

            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
              <p className="text-gray-700 mb-6">{project.longDescription}</p>
              
              <h3 className="text-xl font-semibold mb-4 mt-8">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {project.specifications.map((spec, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-gray-500 text-sm">{spec.name}</div>
                    <div className="font-semibold">{spec.value}</div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">Amenities</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.amenities.map((amenity, index) => (
                  <span 
                    key={index}
                    className="inline-block bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {amenity}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((img, index) => (
                  <div key={index} className="h-64 overflow-hidden rounded-lg">
                    <img 
                      src={img} 
                      alt={`${project.name} - ${index + 1}`} 
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
