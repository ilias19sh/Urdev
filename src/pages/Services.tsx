import React from 'react';
import { Check } from 'lucide-react';

const Services = () => {
  const plans = [
    {
      name: 'Site Vitrine',
      price: '299,99€',
      features: [
        'Design responsive',
        'Optimisation SEO',
        'Formulaire de contact',
        'Hébergement 1 an inclus',
        'Maintenance 6 mois',
      ],
    },
    {
      name: 'Site E-commerce',
      price: '1000€',
      features: [
        'Tout du pack Vitrine',
        'Boutique en ligne',
        'Système de paiement',
        'Gestion des stocks',
        'Formation administration',
        'Maintenance 1 an',
      ],
    },
    {
      name: 'Sur Mesure',
      price: 'Sur devis',
      features: [
        'Solution personnalisée',
        'Fonctionnalités avancées',
        'API sur mesure',
        'Architecture complexe',
        'Support prioritaire',
        'Maintenance premium',
      ],
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">Tarifs</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Des solutions adaptées à vos besoins
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 hover:shadow-xl transition duration-300"
            >
              <div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  {plan.name}
                </h3>
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
                className="mt-8 block rounded-md bg-red-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Commencer
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;