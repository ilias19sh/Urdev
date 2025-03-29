import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#accueil" className="text-gray-400 hover:text-red-500">
            Accueil
          </a>
          <a href="#services" className="text-gray-400 hover:text-red-500">
            Services
          </a>
          <a href="#portfolio" className="text-gray-400 hover:text-red-500">
            Projets
          </a>
          <a href="#about" className="text-gray-400 hover:text-red-500">
            À propos
          </a>
          <a href="#contact" className="text-gray-400 hover:text-red-500">
            Contact
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Urdev. Tous droits réservés.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://facebook.com/urdevagence" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com/urdevagence" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com/company/urdev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;