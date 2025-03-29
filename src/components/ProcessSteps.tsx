import React from 'react';
import { ClipboardCheck, Layout, Code, MessageSquare, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description: 'Nous discutons de vos besoins, objectifs et préférences pour votre site web one page.',
    color: 'bg-blue-500'
  },
  {
    icon: ClipboardCheck,
    title: 'Proposition',
    description: 'Nous élaborons une proposition détaillée incluant le design, les fonctionnalités et un calendrier.',
    color: 'bg-green-500'
  },
  {
    icon: Layout,
    title: 'Design',
    description: 'Nous créons une architecture votre site pour validation avant le développement.',
    color: 'bg-purple-500'
  },
  {
    icon: Code,
    title: 'Développement',
    description: 'Nous développons votre site avec les technologies les plus adaptées à vos besoins.',
    color: 'bg-yellow-500'
  },
  {
    icon: Rocket,
    title: 'Lancement',
    description: 'Après vos tests et validation, nous mettons en ligne votre site et assurons son bon fonctionnement.',
    color: 'bg-red-500'
  }
];

const ProcessSteps = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-space-grotesk">
            Notre processus
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Un processus simple et efficace pour créer votre site web en 5 étapes
          </p>
        </div>

        <div className="relative">
          {/* Ligne de connexion */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200"></div>
          
          <div className="space-y-16 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                {/* Cercle indicateur avec icône */}
                <div className="relative mx-auto md:mx-0 flex-shrink-0 flex items-center justify-center z-10 mb-8 md:mb-0">
                  <div className={`${step.color} h-16 w-16 rounded-full flex items-center justify-center shadow-lg`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  {/* Numéro d'étape */}
                  <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-red-600 text-white flex items-center justify-center text-lg font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>

                {/* Contenu */}
                <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#services" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
          >
            En savoir plus sur nos services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps; 