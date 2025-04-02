import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Mode',
    description: 'Boutique en ligne de vêtements avec plus de 1000 produits. Interface utilisateur intuitive et système de paiement sécurisé.',
    image: 'https://images.unsplash.com/photo-1584515932025-1c1c1c1c1c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGVjb21tZXJjZXxlbnwwfHx8fDE2MjY0MjY0Mjg&ixlib=rb-1.2.1&q=80&w=400',
    alt: 'Site e-commerce de mode avec interface utilisateur intuitive',
    tags: ['E-commerce', 'React', 'Node.js'],
    client: 'FashionHub',
    year: '2023',
  },
  {
    title: 'Application Immobilière',
    description: 'Plateforme de gestion immobilière pour agents avec dashboard analytique et gestion des rendez-vous en temps réel.',
    image: 'https://images.unsplash.com/photo-1584515932025-1c1c1c1c1c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxpbW1vYmlsaWVyaXxlbnwwfHx8fDE2MjY0MjY0Mjg&ixlib=rb-1.2.1&q=80&w=400',
    alt: 'Application web immobilière avec tableau de bord analytique',
    tags: ['SaaS', 'React', 'API REST'],
    client: 'ImmoTech',
    year: '2022',
  },
  {
    title: 'Restaurant Gastronomique',
    description: 'Site vitrine avec réservation en ligne et présentation interactive du menu. Optimisé pour la conversion et l\'expérience utilisateur.',
    image: 'https://images.unsplash.com/photo-1584515932025-1c1c1c1c1c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxyaXN0YXVyYW50fGVufDB8fHx8fDE2MjY0MjY0Mjg&ixlib=rb-1.2.1&q=80&w=400',
    alt: 'Site web responsive pour restaurant avec système de réservation en ligne',
    tags: ['Site Vitrine', 'Réservation', 'SEO'],
    client: 'Le Gourmet',
    year: '2023',
  },
  {
    title: 'Blog Lifestyle',
    description: 'Plateforme de blog avec gestion de contenu personnalisée, monétisation et intégration aux réseaux sociaux.',
    image: 'https://images.unsplash.com/photo-1584515932025-1c1c1c1c1c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEzfHxibG9nfGVufDB8fHx8fDE2MjY0MjY0Mjg&ixlib=rb-1.2.1&q=80&w=400',
    alt: 'Blog lifestyle avec système de gestion de contenu personnalisé',
    tags: ['Blog', 'WordPress', 'SEO'],
    client: 'Urban Life',
    year: '2022',
  },
  {
    title: 'Application Fitness',
    description: 'Application mobile de suivi fitness avec plans d\'entraînement personnalisés et suivi des progrès en temps réel.',
    image: 'https://images.unsplash.com/photo-1584515932025-1c1c1c1c1c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxmaXRuZXNzfGVufDB8fHx8fDE2MjY0MjY0Mjg&ixlib=rb-1.2.1&q=80&w=400',
    alt: 'Application mobile fitness avec suivi d\'entraînement personnalisé',
    tags: ['Mobile', 'React Native', 'API'],
    client: 'FitTrack',
    year: '2023',
  },
  {
    title: 'Portfolio Photographe',
    description: 'Portfolio minimaliste mettant en valeur les œuvres du photographe avec une galerie interactive et un système de réservation.',
    image: 'https://images.unsplash.com/photo-1584515932025-1c1c1c1c1c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE1fHxwb3J0Zm9saW98ZW58MHx8fHwxNjI2NDI2NDI4&ixlib=rb-1.2.1&q=80&w=400',
    alt: 'Portfolio photographe avec galerie interactive et système de réservation',
    tags: ['Portfolio', 'Galerie', 'Réservation'],
    client: 'ArtLens Studio',
    year: '2022',
  },

];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('Tous');
  const categories = ['Tous', 'E-commerce', 'Site Vitrine', 'SaaS', 'Mobile', 'Blog', 'Portfolio'];
  
  const filteredProjects = filter === 'Tous' 
    ? projects.slice(0, 3) // Afficher seulement 3 projets sur la page d'accueil
    : projects.filter(project => project.tags.includes(filter)).slice(0, 3);

  return (
    <section id="portfolio" className="relative scroll-mt-16">
      {/* Header avec arrière-plan */}
      <div className="relative py-24 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Portfolio de projets web et réalisations de sites internet à Lille par Urdev" 
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            document.querySelector('.fallback-bg')?.classList.remove('hidden');
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900 to-gray-800 opacity-90"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-space-grotesk">
            Nos Réalisations
          </h2>
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
                className="flex flex-col overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-3d animate-fade-in-up project-card"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
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
                    <button className="flex items-center text-red-600 hover:text-red-800 text-sm font-medium group">
                      <span>Voir détails</span>
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
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
          
          <div className="text-center mt-12">
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 cta-button"
            >
              Discuter de votre projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 