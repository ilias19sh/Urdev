import React from 'react';
import { ArrowRight, Code, Users, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-900 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
          <div className="text-center animate-slide-in">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block font-space-grotesk">Votre premier site web</span>
              <span className="block text-red-600 mt-2">pour seulement 299,99€</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Satisfait ou remboursé
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow-lg hover:shadow-2xl transition-all duration-300">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-300"
                >
                  Commencer votre projet
                  <ArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-space-grotesk">
              À propos d'Urdev
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Basée à Lille, Urdev est une agence de développement web passionnée par la création de solutions digitales innovantes et performantes.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  icon: Code,
                  title: 'Expertise Technique',
                  description: 'Notre équipe maîtrise les dernières technologies web pour créer des sites performants et évolutifs.'
                },
                {
                  icon: Users,
                  title: 'Approche Client',
                  description: 'Nous plaçons vos besoins au centre de notre démarche pour créer des solutions sur mesure.'
                },
                {
                  icon: Rocket,
                  title: 'Innovation',
                  description: 'Nous restons à la pointe des tendances pour offrir des solutions modernes et innovantes.'
                }
              ].map((feature, index) => (
                <div key={feature.title} 
                  className="flex flex-col bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}>
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-6 w-6 flex-none text-red-600" />
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;