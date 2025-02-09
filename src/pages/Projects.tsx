import React from 'react';

const projects = [
  {
    title: 'E-commerce Mode',
    description: 'Boutique en ligne de vêtements avec plus de 1000 produits',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    tags: ['E-commerce', 'React', 'Node.js'],
  },
  {
    title: 'Application Immobilière',
    description: 'Plateforme de gestion immobilière pour agents',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    tags: ['SaaS', 'React', 'API REST'],
  },
  {
    title: 'Restaurant Gastronomique',
    description: 'Site vitrine avec réservation en ligne',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    tags: ['Site Vitrine', 'Réservation', 'SEO'],
  },
];

const Projects = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Réalisations
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Découvrez nos projets récents et laissez-vous inspirer
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {project.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    {project.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;