import React from 'react';
import { Code, Users, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            À propos d'Urdev
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Basée à Lille, Urdev est une agence de développement web passionnée par la création de solutions digitales innovantes et performantes.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Code className="h-5 w-5 flex-none text-red-600" />
                Expertise Technique
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Notre équipe maîtrise les dernières technologies web pour créer des sites performants et évolutifs.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Users className="h-5 w-5 flex-none text-red-600" />
                Approche Client
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Nous plaçons vos besoins au centre de notre démarche pour créer des solutions sur mesure.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Rocket className="h-5 w-5 flex-none text-red-600" />
                Innovation
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Nous restons à la pointe des tendances pour offrir des solutions modernes et innovantes.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;