import React from 'react';
import HeroSection from '../components/HeroSection';
import Testimonials from '../components/Testimonials';
import ProcessSteps from '../components/ProcessSteps';
import FAQ from '../components/FAQ';
import CallToAction from '../components/CallToAction';
import StatsSection from '../components/StatsSection';

// Type pour les props des icônes SVG
interface IconProps {
  className?: string;
}

const Home = () => {
  return (
    <>
      <HeroSection />
      
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
                  icon: (props: IconProps) => (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  ),
                  title: 'Expertise Technique',
                  description: 'Notre équipe maîtrise les dernières technologies web pour créer des sites performants et évolutifs.'
                },
                {
                  icon: (props: IconProps) => (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  ),
                  title: 'Approche Client',
                  description: 'Nous plaçons vos besoins au centre de notre démarche pour créer des solutions sur mesure.'
                },
                {
                  icon: (props: IconProps) => (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  ),
                  title: 'Innovation',
                  description: 'Nous restons à la pointe des tendances pour offrir des solutions modernes et innovantes.'
                }
              ].map((feature, index) => (
                <div key={feature.title} 
                  className="flex flex-col bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 hover-transition"
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

      <ProcessSteps />
      
      <StatsSection />
      
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-space-grotesk">
              Pourquoi choisir un site one page ?
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Simple & Efficace',
                description: 'Un site one page délivre toutes les informations essentielles en un seul écran, sans navigation complexe.'
              },
              {
                title: 'Parfait pour mobile',
                description: 'Le format one page est optimisé pour l\'expérience mobile avec un simple défilement vertical.'
              },
              {
                title: 'Focus sur l\'essentiel',
                description: 'Sans distraction, vos visiteurs se concentrent uniquement sur votre message et vos offres.'
              },
              {
                title: 'Meilleur taux de conversion',
                description: 'Une structure claire guide naturellement les visiteurs vers votre appel à l\'action.'
              },
              {
                title: 'Rapide à charger',
                description: 'Un site one page bien conçu se charge rapidement, améliorant l\'expérience utilisateur et le SEO.'
              },
              {
                title: 'Budget optimisé',
                description: 'Une solution one page bien pensée coûte moins cher qu\'un site multi-pages tout en restant efficace.'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover-transition animate-fade-in-up" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Testimonials />
      
      <FAQ />
      
      <CallToAction />
    </>
  );
};

export default Home;