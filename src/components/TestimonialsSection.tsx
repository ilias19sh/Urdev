import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Martin",
    position: "Directrice",
    company: "Restaurant La Bonne Table",
    content: "Grâce à Urdev, notre restaurant a maintenant un site web élégant qui reflète parfaitement notre ambiance. Les réservations en ligne ont augmenté de 40% dès le premier mois !",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 2,
    name: "Thomas Dubois",
    position: "Gérant",
    company: "Cabinet Martin & Associés",
    content: "Professionnalisme exemplaire. L'équipe d'Urdev a su créer un site qui inspire confiance à nos clients potentiels. Notre présence en ligne a considérablement amélioré notre image de marque.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Marie Leroy",
    position: "Fondatrice",
    company: "Boutique Mode Élégance",
    content: "Je cherchais une agence capable de créer une boutique en ligne qui reflète l'élégance de mes produits. Urdev a dépassé mes attentes avec un site magnifique qui convertit très bien.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 4,
    name: "Lucas Bernard",
    position: "Directeur Marketing",
    company: "Agence Immobilière Prestige",
    content: "Collaboration excellente du début à la fin. Urdev a su comprendre nos besoins spécifiques et créer une plateforme qui facilite la présentation de nos biens immobiliers.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-space-grotesk mb-4">
            Ce que nos clients disent
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits et leurs expériences avec nos services.
          </p>
        </div>
        
        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 -mt-6 ml-6">
            <div className="bg-red-600 text-white p-3 rounded-full shadow-lg">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.13456 9H5.37965C5.17385 9 5.02661 8.84 5.02661 8.625V5.625C5.02661 5.41 5.17385 5.25 5.37965 5.25H8.42848C8.63428 5.25 8.78153 5.41 8.78153 5.625V8.625" fill="white"/>
                <path d="M9.13456 9H5.37965C5.17385 9 5.02661 8.84 5.02661 8.625V5.625C5.02661 5.41 5.17385 5.25 5.37965 5.25H8.42848C8.63428 5.25 8.78153 5.41 8.78153 5.625V8.625" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.13477 9C9.13477 11.07 7.53057 12.75 5.55664 12.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.4439 9H14.689C14.4832 9 14.3359 8.84 14.3359 8.625V5.625C14.3359 5.41 14.4832 5.25 14.689 5.25H17.7378C17.9436 5.25 18.0908 5.41 18.0908 5.625V8.625" fill="white"/>
                <path d="M18.4439 9H14.689C14.4832 9 14.3359 8.84 14.3359 8.625V5.625C14.3359 5.41 14.4832 5.25 14.689 5.25H17.7378C17.9436 5.25 18.0908 5.41 18.0908 5.625V8.625" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.4443 9C18.4443 11.07 16.8401 12.75 14.8662 12.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex-shrink-0">
              <img 
                src={currentTestimonial.image}
                alt={`Portrait de ${currentTestimonial.name}`}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-gray-200"
              />
            </div>
            
            <div className="md:w-2/3">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < currentTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                "{currentTestimonial.content}"
              </blockquote>
              
              <div>
                <h4 className="font-bold text-gray-900">{currentTestimonial.name}</h4>
                <p className="text-gray-600">{currentTestimonial.position}, {currentTestimonial.company}</p>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="absolute bottom-4 left-4">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setActiveIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Voir témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 