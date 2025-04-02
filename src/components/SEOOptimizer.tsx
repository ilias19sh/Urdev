import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
  schemaData?: any;
  keywords?: string[];
  noIndex?: boolean;
}

/**
 * SEOOptimizer - Composant pour optimiser le SEO des pages
 * Utilise React Helmet pour insérer des balises meta et schema.org
 */
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Agence Web Lille | Création de sites web professionnels | Urdev',
  description = 'Agence web à Lille spécialisée dans la création de sites internet professionnels et sur mesure. Développement web, référencement SEO et web design. Devis gratuit.',
  canonical = 'https://urdev.fr/',
  image = 'https://urdev.fr/og-image.jpg',
  type = 'website',
  schemaData,
  keywords = ['agence web lille', 'création site internet', 'développement web', 'site responsive', 'référencement SEO'],
  noIndex = false
}) => {
  // Construction des mots-clés
  const keywordsString = keywords.join(', ');
  
  // Construction du schema JSON-LD par défaut si non fourni
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: title,
    description,
    url: canonical,
  };
  
  const schema = schemaData || defaultSchema;
  
  return (
    <Helmet>
      {/* Balises meta de base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      
      {/* Indexation */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large" />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Urdev" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@urdev" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      
      {/* Attributs pour l'accessibilité */}
      <html lang="fr" />
      <body itemScope itemType="https://schema.org/WebPage" />
    </Helmet>
  );
};

export default SEOOptimizer; 