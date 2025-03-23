import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Arrière-plan avec effet de dégradé */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-900 to-red-600"></div>
      
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-96 w-96 -top-20 -left-20 rounded-full bg-white opacity-5"></div>
        <div className="absolute h-96 w-96 bottom-0 right-0 rounded-full bg-white opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-white opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 rounded-full bg-white opacity-10"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full bg-white opacity-10"></div>
      </div>
      
      {/* Contenu */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl font-space-grotesk">
            Prêt à lancer votre projet web ?
          </h2>
          <p className="mt-6 text-xl text-red-100">
            Site vitrine, portfolio, landing page... Quelle que soit votre besoin, nous avons la solution parfaite pour vous à partir de 499,99€ seulement.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <div className="rounded-md shadow">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-100 md:py-5 md:text-lg md:px-10 transform hover:scale-105 transition-all duration-300"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="rounded-md">
              <Link
                to="/projects"
                className="w-full flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-md text-white hover:bg-red-700 md:py-5 md:text-lg md:px-10 transform hover:scale-105 transition-all duration-300"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-white">
            <div className="flex items-center">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-white bg-opacity-10">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4 text-left">
                <p className="text-sm font-medium text-red-200">Délai de livraison</p>
                <p className="text-lg font-bold">2-3 semaines</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-white bg-opacity-10">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-4 text-left">
                <p className="text-sm font-medium text-red-200">Satisfaction garantie</p>
                <p className="text-lg font-bold">100% remboursé si insatisfait</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 