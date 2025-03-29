import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  keywords: string[];
}

const blogPosts: BlogPost[] = [
  {
    title: "Comment choisir la meilleure technologie pour votre site web en 2025",
    slug: "choisir-technologie-site-web-2025",
    date: "2025-03-29",
    excerpt: "Guide complet pour choisir la stack technique adaptée à votre projet web",
    content: "Le choix de la technologie pour votre site web est crucial...",
    keywords: ["développement web", "react", "next.js", "technologies web"]
  },
  {
    title: "L'importance du SEO local pour les entreprises à Lille",
    slug: "seo-local-lille-importance",
    date: "2025-03-28",
    excerpt: "Découvrez pourquoi le SEO local est essentiel pour votre visibilité à Lille",
    content: "Le SEO local est devenu incontournable...",
    keywords: ["SEO local", "Lille", "référencement local", "visibilité web"]
  },
  {
    title: "Les tendances UX/UI à suivre en 2025",
    slug: "tendances-ux-ui-2025",
    date: "2025-03-27",
    excerpt: "Les dernières tendances en matière de design web et d'expérience utilisateur",
    content: "L'année 2025 apporte son lot de nouvelles tendances...",
    keywords: ["UX", "UI", "design web", "tendances"]
  }
];

const BlogSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed bottom-4 right-4 z-50 bg-red-600 text-white rounded-full p-3 shadow-lg hover:bg-red-700 transition-all duration-300"
        aria-label={isExpanded ? "Fermer le blog" : "Ouvrir le blog"}
      >
        {isExpanded ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
      </button>

      <div 
        className={`fixed bottom-0 right-0 w-full md:w-96 bg-white shadow-2xl transition-transform duration-300 transform ${
          isExpanded ? 'translate-y-0' : 'translate-y-full'
        } max-h-[80vh] overflow-y-auto rounded-t-2xl z-40`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Blog Urdev</h2>
          
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <article 
                key={post.slug}
                className="border-b border-gray-200 pb-6 last:border-0"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(post.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className="text-gray-600 mb-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((keyword) => (
                    <span 
                      key={keyword}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 