import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: 'Équipe Passionnée',
      description: 'Une équipe de professionnels dédiés à la réussite de vos projets'
    },
    {
      icon: <Award className="h-8 w-8 text-red-500" />,
      title: 'Expertise',
      description: 'Plus de 10 ans d\'expérience dans le développement web'
    },
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      title: 'Délais Respectés',
      description: 'Nous nous engageons sur des délais précis et les respectons'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Satisfaction Client',
      description: 'Notre priorité est votre satisfaction et la qualité de nos services'
    }
  ];

  return (
    <section id="a-propos" className="relative py-20">
      {/* Image de fond avec overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl font-space-grotesk">
            À Propos de Nous
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Une agence web à Lille spécialisée dans la création de sites internet professionnels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors duration-300"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 