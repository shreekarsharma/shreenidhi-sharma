
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Shreenidhi Sharma</h3>
            <p className="mb-4 text-gray-400">
              Senior Manager at NTPC Green Energy Limited with expertise in renewable energy 
              integration, project planning, and engineering.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://linkedin.com/in/shreenidhi-sharma-40703b4b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-energy-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@shreenidhi.com" 
                className="text-white hover:text-energy-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/experience" className="text-gray-400 hover:text-white transition-colors">Experience</Link>
              </li>
              <li>
                <Link to="/education" className="text-gray-400 hover:text-white transition-colors">Education</Link>
              </li>
              <li>
                <Link to="/achievements" className="text-gray-400 hover:text-white transition-colors">Achievements</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-energy-400" />
                <span className="text-gray-400">Noida, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-energy-400" />
                <span className="text-gray-400">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-energy-400" />
                <span className="text-gray-400">contact@shreenidhi.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Shreenidhi Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
