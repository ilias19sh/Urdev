import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen overflow-hidden">
      {/* Background image avec overlay */}
      <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Agence web à Lille - Conception de sites internet professionnels par Urdev" 
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            document.querySelector('.fallback-bg')?.classList.remove('hidden');
          }}
        />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br bg-opacity-50 from-red-900/70 to-black/70 z-10"></div>
        
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-20"></div>
        
        <div className="fallback-bg hidden absolute inset-0 bg-gradient-to-br from-red-600 to-red-900"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute hidden md:block w-64 h-64 bg-red-500 rounded-full blur-3xl opacity-10 -top-20 -left-20 animate-pulse z-30"></div>
      <div className="absolute hidden md:block w-72 h-72 bg-red-500 rounded-full blur-3xl opacity-10 bottom-20 -right-20 animate-pulse z-30" style={{ animationDelay: '2s' }}></div>
      
      {/* Main content */}
      <div className="relative z-40 max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left md:w-1/2 animate-fade-in-up">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block font-space-grotesk">Création de site web</span>
              <span className="block text-red-400 mt-2">à partir de 499,99€</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto md:mx-0 text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl">
              Agence web située à Lille, spécialisée en développement de sites internet professionnels, responsives et optimisés SEO. Satisfait ou remboursé !
            </p>
            <div className="mt-5 max-w-md mx-auto md:mx-0 sm:flex sm:justify-center md:justify-start md:mt-8">
              <div className="rounded-md shadow-lg hover:shadow-2xl transition-all duration-300">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-300 btn-ripple cta-button"
                >
                  Commencer votre projet
                  <ArrowRight className="ml-2" />
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#portfolio"
                  className="w-full flex items-center justify-center px-8 py-3 border border-white/30 text-base font-medium rounded-md text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
                >
                  Voir nos projets
                </a>
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-red-700 rounded-2xl transform rotate-3 scale-105 opacity-30 blur-xl animate-pulse"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-2xl overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-br from-red-100 to-red-300 rounded-lg flex items-center justify-center">
                  <div className="text-center p-6 bg-white/90 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-red-600 mb-2">Site Web Premium</h2>
                    <p className="text-gray-700">Design moderne et professionnel</p>
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <p className="text-sm font-medium text-gray-800">Site web responsive, optimisé SEO et performant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white scroll-indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 