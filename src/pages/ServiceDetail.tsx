import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Users, Shield, TrendingUp, Home, HandCoins } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you would fetch the service data based on the ID
  // For now, we'll use mock data
  const service = {
    id: 1,
    title: 'Property Investment',
    icon: '🏠',
    description: 'Expert guidance on identifying high-potential real estate investments with strong ROI potential.',
    longDescription: 'Our property investment service helps you make informed decisions when investing in real estate. We provide comprehensive market analysis, property valuation, and investment strategy development to maximize your returns. Our team of experts will guide you through every step of the investment process, from identifying opportunities to closing the deal.',
    features: [
      'Comprehensive market analysis',
      'Property valuation and due diligence',
      'ROI and cash flow projections',
      'Legal and documentation support',
      'Portfolio diversification strategies',
      'Exit strategy planning'
    ],
    benefits: [
      'Access to off-market deals',
      'Risk assessment and mitigation',
      'Tax optimization strategies',
      'Property management solutions',
      'Regular performance reviews'
    ],
    process: [
      { step: 1, title: 'Consultation', description: 'Understand your investment goals and risk appetite' },
      { step: 2, title: 'Market Research', description: 'Identify high-potential markets and properties' },
      { step: 3, title: 'Deal Analysis', description: 'Evaluate properties and negotiate terms' },
      { step: 4, title: 'Due Diligence', description: 'Verify all property details and legal aspects' },
      { step: 5, title: 'Acquisition', description: 'Complete the purchase process' },
      { step: 6, title: 'Management', description: 'Ongoing support and performance monitoring' }
    ],
    stats: [
      { icon: <Home size={24} className="text-primary" />, value: '500+', label: 'Properties Managed' },
      { icon: <TrendingUp size={24} className="text-primary" />, value: '15%', label: 'Average ROI' },
      { icon: <Users size={24} className="text-primary" />, value: '200+', label: 'Satisfied Clients' },
      { icon: <Clock size={24} className="text-primary" />, value: '10+', label: 'Years Experience' }
    ]
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
          <Link to="/services" className="text-primary hover:underline">
            Back to Services
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
          to="/services" 
          className="inline-flex items-center text-primary hover:underline mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Services
        </Link>
      </div>

      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-5xl mb-4 inline-block">{service.icon}</span>
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl max-w-3xl mx-auto">{service.description}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Service Overview</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">{service.longDescription}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-6">Our Process</h3>
            <div className="relative">
              <div className="absolute left-4 h-full w-0.5 bg-gray-200"></div>
              <div className="space-y-8">
                {service.process.map((step) => (
                  <div key={step.step} className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {service.stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-primary bg-opacity-10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-white mb-6 max-w-2xl mx-auto">
              Contact us today to learn more about how our {service.title.toLowerCase()} service can help you achieve your real estate goals.
            </p>
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center px-8 py-3 text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
