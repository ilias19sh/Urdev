import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  category: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  imageSrc,
  tags,
  category,
  link
}) => {
  return (
    <div className="project-card group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-red-600 rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="flex-grow p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="inline-block px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
          >
            Voir le site
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
        ) : (
          <Link 
            to={`/projects/${id}`} 
            className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
          >
            Voir détails
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 