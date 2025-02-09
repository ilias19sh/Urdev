import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../media/2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-black/50'
    }`}> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img src={logo} alt="Urdev Logo" className="h-20" />
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="nav-link text-white hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Accueil
              </Link>
              <Link to="/services" className="nav-link text-white hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Services
              </Link>
              <Link to="/projects" className="nav-link text-white hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Projets
              </Link>
              <Link to="/contact" className="nav-link text-white hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-500 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-black/80 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-white hover:text-red-500 px-3 py-2 text-base font-medium transition-colors duration-300">
              Accueil
            </Link>
            <Link to="/services" className="block text-white hover:text-red-500 px-3 py-2 text-base font-medium transition-colors duration-300">
              Services
            </Link>
            <Link to="/projects" className="block text-white hover:text-red-500 px-3 py-2 text-base font-medium transition-colors duration-300">
              Projets
            </Link>
            <Link to="/contact" className="block text-white hover:text-red-500 px-3 py-2 text-base font-medium transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
