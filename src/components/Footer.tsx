import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.jpeg";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-20 h-20  rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg"><Link to="/"><img src={logo}></img></Link></span>
              </div>
              <div>
                <p className="text-sm font-bold">Aadharshila</p>
                <p className="text-xs opacity-90">Realtors</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Building your dream home with trust and excellence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:opacity-80 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:opacity-80 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm hover:opacity-80 transition-opacity">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:opacity-80 transition-opacity">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm opacity-90"><Link to="/services" className="text-sm hover:opacity-80 transition-opacity">
                Residential Properties
                </Link></li>
              <li className="text-sm opacity-90"><Link to="/services" className="text-sm hover:opacity-80 transition-opacity">
                  Investment Opportunities
                </Link></li>
              <li className="text-sm opacity-90"><Link to="/services" className="text-sm hover:opacity-80 transition-opacity">
                  Real Estate Consultation
                </Link></li>
              <li className="text-sm opacity-90"><Link to="/services" className="text-sm hover:opacity-80 transition-opacity">
                  Project Partnership
                </Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">
                    Aadhar asset management.  
                  </p>
                  <p className="text-sm"> In front of navgrah Mandir Joshi Wada Burhanpur (M.P.)</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href="mailto:aadharshilaRealtors22@gmail.com"
                  className="text-sm hover:opacity-80 transition-opacity"
                >
                  aadharassetm@gmail.com
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">+917000275998</p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <p>&copy; {currentYear} Aadharshila Realtors Management Pvt Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-80 transition-opacity">
                Privacy Policy
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
