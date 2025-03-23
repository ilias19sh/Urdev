import React, { useState } from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Mode',
    description: 'Boutique en ligne de vêtements avec plus de 1000 produits. Interface utilisateur intuitive et système de paiement sécurisé.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    tags: ['E-commerce', 'React', 'Node.js'],
    client: 'FashionHub',
    year: '2023',
  },
  {
    title: 'Application Immobilière',
    description: 'Plateforme de gestion immobilière pour agents avec dashboard analytique et gestion des rendez-vous en temps réel.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    tags: ['SaaS', 'React', 'API REST'],
    client: 'ImmoTech',
    year: '2022',
  },
  {
    title: 'Restaurant Gastronomique',
    description: 'Site vitrine avec réservation en ligne et présentation interactive du menu. Optimisé pour la conversion et l\'expérience utilisateur.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    tags: ['Site Vitrine', 'Réservation', 'SEO'],
    client: 'Le Gourmet',
    year: '2023',
  },
  {
    title: 'Blog Lifestyle',
    description: 'Plateforme de blog avec gestion de contenu personnalisée, monétisation et intégration aux réseaux sociaux.',
    image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b',
    tags: ['Blog', 'WordPress', 'SEO'],
    client: 'Urban Life',
    year: '2022',
  },
  {
    title: 'Application Fitness',
    description: 'Application mobile de suivi fitness avec plans d\'entraînement personnalisés et suivi des progrès en temps réel.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    tags: ['Mobile', 'React Native', 'API'],
    client: 'FitTrack',
    year: '2023',
  },
  {
    title: 'Portfolio Photographe',
    description: 'Portfolio minimaliste mettant en valeur les œuvres du photographe avec une galerie interactive et un système de réservation.',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d',
    tags: ['Portfolio', 'Galerie', 'Réservation'],
    client: 'ArtLens Studio',
    year: '2022',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('Tous');
  const categories = ['Tous', 'E-commerce', 'Site Vitrine', 'SaaS', 'Mobile', 'Blog', 'Portfolio'];
  
  const filteredProjects = filter === 'Tous' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <>
      {/* Header avec arrière-plan */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-90"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-space-grotesk">
            Nos Réalisations
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Découvrez notre portfolio de projets et laissez-vous inspirer par notre expertise
          </p>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm transition duration-300 ${
                  filter === category
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <article 
                key={project.title} 
                className="flex flex-col overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-3d animate-fade-in-up bg-white"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Image+non+disponible';
                    }}
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-gray-800 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 highlight-title">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm font-medium text-gray-500">
                      Client: {project.client}
                    </span>
                    <a href="#" className="flex items-center text-red-600 hover:text-red-800 text-sm font-medium group">
                      <span>Voir détails</span>
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucun projet ne correspond à ce filtre.</p>
            </div>
          )}
        </div>
      </div>

      {/* Section CTA */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Vous avez un projet en tête ?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé
            </p>
            <div className="mt-8">
              <a 
                href="/contact" 
                className="inline-flex items-center rounded-md bg-red-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-red-700 transition-colors duration-300"
              >
                Commencer votre projet
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;