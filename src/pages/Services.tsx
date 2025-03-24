import React from 'react';
import { Check, Zap, Shield, Clock } from 'lucide-react';

const Services = () => {
  const plans = [
    {
      name: 'Site Vitrine',
      price: '499,99€',
      description: 'Idéal pour présenter votre entreprise ou activité avec un design professionnel.',
      features: [
        'Design responsive',
        'Optimisation SEO',
        'Formulaire de contact',
        'Hébergement 1 an inclus',
        'Maintenance 6 mois',
      ],
      popular: true,
      color: 'from-blue-500 to-blue-700',
    },
    {
      name: 'Site E-commerce',
      price: '2500€',
      description: 'Solution complète pour vendre vos produits en ligne avec une boutique performante.',
      features: [
        'Tout du pack Vitrine',
        'Boutique en ligne',
        'Système de paiement',
        'Gestion des stocks',
        'Formation administration',
        'Maintenance 1 an',
      ],
      popular: false,
      color: 'from-red-500 to-red-700',
    },
    {
      name: 'Sur Mesure',
      price: 'Sur devis',
      description: 'Pour des projets complexes nécessitant des fonctionnalités spécifiques.',
      features: [
        'Solution personnalisée',
        'Fonctionnalités avancées',
        'API sur mesure',
        'Architecture complexe',
        'Support prioritaire',
        'Maintenance premium',
      ],
      popular: false,
      color: 'from-purple-500 to-purple-700',
    },
  ];

  const advantages = [
    {
      icon: Zap,
      title: 'Performance optimale',
      description: 'Sites rapides et optimisés pour un temps de chargement minimal',
    },
    {
      icon: Shield,
      title: 'Sécurité renforcée',
      description: 'Protection contre les vulnérabilités et mise à jour régulière',
    },
    {
      icon: Clock,
      title: 'Délais respectés',
      description: 'Livraison dans les délais convenus, sans mauvaise surprise',
    },
  ];

  return (
    <>
      {/* Header avec arrière-plan */}
      <div className="relative py-24 overflow-hidden ">
      <img 
          src="/images/services.jpg" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            document.querySelector('.fallback-bg')?.classList.remove('hidden');
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900 to-red-600 opacity-90"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-space-grotesk">
            Nos Services
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-red-100">
            Des solutions web sur mesure pour répondre à tous vos besoins digitaux
          </p>
        </div>
      </div>

      {/* Section des forfaits */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-red-600">Nos Forfaits</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl highlight-title">
              Des solutions adaptées à vos besoins
            </p>
            <p className="mt-6 text-lg text-gray-600">
              Choisissez l'offre qui correspond le mieux à votre projet et à votre budget
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between rounded-3xl p-8 xl:p-10 card-3d transform hover:-translate-y-2 transition duration-500 ${plan.popular ? 'ring-2 ring-red-600 shadow-xl' : 'ring-1 ring-gray-200 shadow-md'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 right-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Populaire
                  </div>
                )}
                <div>
                  <div className={`h-12 w-12 rounded-lg mb-4 bg-gradient-to-r ${plan.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">{plan.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold leading-8 text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {plan.description}
                  </p>
                  <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
                    {plan.price}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <Check className="h-6 w-6 flex-none text-red-600" />
                        <span className="text-sm leading-6 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="/contact"
                  className={`mt-8 block rounded-md px-3.5 py-3 text-center text-sm font-semibold leading-6 text-white shadow-lg hover:scale-105 transition duration-300 ${plan.popular ? 'bg-gradient-to-r from-red-600 to-red-700' : 'bg-gray-900'}`}
                >
                  {plan.popular ? 'Commencer maintenant' : 'Commencer'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section des avantages */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl highlight-title">
              Pourquoi nous choisir ?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Des avantages concrets pour vous garantir un service de qualité
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {advantages.map((advantage, index) => (
              <div 
                key={advantage.title} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                    <advantage.icon className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-center">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;