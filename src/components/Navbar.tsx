
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-display font-bold text-energy-700 dark:text-energy-400 text-xl">Shreenidhi Sharma</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link to="/" className="text-gray-700 dark:text-white hover:text-energy-600 dark:hover:text-energy-400 px-3 py-2 rounded-md font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 dark:text-white hover:text-energy-600 dark:hover:text-energy-400 px-3 py-2 rounded-md font-medium">About</Link>
            <Link to="/experience" className="text-gray-700 dark:text-white hover:text-energy-600 dark:hover:text-energy-400 px-3 py-2 rounded-md font-medium">Experience</Link>
            <Link to="/education" className="text-gray-700 dark:text-white hover:text-energy-600 dark:hover:text-energy-400 px-3 py-2 rounded-md font-medium">Education</Link>
            <Link to="/achievements" className="text-gray-700 dark:text-white hover:text-energy-600 dark:hover:text-energy-400 px-3 py-2 rounded-md font-medium">Achievements</Link>
            <Link to="/contact" className="text-gray-700 dark:text-white hover:text-energy-600 dark:hover:text-energy-400 px-3 py-2 rounded-md font-medium">Contact</Link>
          </div>
          
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-white hover:text-energy-600 dark:hover:text-energy-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 ease-in-out"
              aria-expanded="false"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
          <button onClick={() => handleNavigation('/')} className="text-gray-700 dark:text-white hover:text-energy-600 dark:hover:text-energy-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Home</button>
          <button onClick={() => handleNavigation('/about')} className="text-gray-700 dark:text-white hover:text-energy-600 dark:hover:text-energy-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left">About</button>
          <button onClick={() => handleNavigation('/experience')} className="text-gray-700 dark:text-white hover:text-energy-600 dark:hover:text-energy-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Experience</button>
          <button onClick={() => handleNavigation('/education')} className="text-gray-700 dark:text-white hover:text-energy-600 dark:hover:text-energy-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Education</button>
          <button onClick={() => handleNavigation('/achievements')} className="text-gray-700 dark:text-white hover:text-energy-600 dark:hover:text-energy-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Achievements</button>
          <button onClick={() => handleNavigation('/contact')} className="text-gray-700 dark:text-white hover:text-energy-600 dark:hover:text-energy-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
