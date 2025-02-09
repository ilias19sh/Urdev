import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link to="/" className="text-gray-400 hover:text-red-500">
            Accueil
          </Link>
          <Link to="/about" className="text-gray-400 hover:text-red-500">
            À Propos
          </Link>
          <Link to="/services" className="text-gray-400 hover:text-red-500">
            Services
          </Link>
          <Link to="/projects" className="text-gray-400 hover:text-red-500">
            Projets
          </Link>
          <Link to="/contact" className="text-gray-400 hover:text-red-500">
            Contact
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Urdev. Tous droits réservés.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;