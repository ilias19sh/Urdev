import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophie Van derbrook',
    role: 'Fondatrice, Bloom Studio',
    image: '/images/testimonial-1.jpg',
    content: 'Urdev a créé un site web qui a dépassé toutes nos attentes. Leur approche professionnelle et leur attention aux détails ont fait toute la différence.',
    rating: 5
  },
  {
    id: 2,
    name: 'Théo Belkassem',
    role: 'CEO, TechStart',
    image: '/images/testimonial-2.jpg',
    content: 'Nous avions besoin d\'un site web rapidement et Urdev a livré en temps record sans compromettre la qualité. Je les recommande vivement !',
    rating: 5
  },
  {
    id: 3,
    name: 'Émilie Leroy',
    role: 'Responsable Marketing, Eco Solutions',
    image: '/images/testimonial-3.jpg',
    content: 'Le site créé par Urdev nous a permis d\'augmenter notre taux de conversion de 40%. Un investissement qui en valait vraiment la peine.',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-space-grotesk">
            Ce que nos clients disent
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Découvrez les témoignages de clients satisfaits qui nous ont fait confiance pour leurs projets web.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gradient-to-br from-red-400 to-red-600 flex-shrink-0 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-red-600 border border-transparent rounded-md shadow-lg text-white font-medium hover:bg-red-700 transition-colors duration-300">
            <span className="text-lg">Note moyenne de 4.8/5 sur Google</span>
            <div className="flex ml-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 