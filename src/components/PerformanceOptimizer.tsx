import { useEffect } from 'react';

/**
 * PerformanceOptimizer - Composant pour améliorer la performance globale de l'application
 * Implémente plusieurs techniques d'optimisation pour améliorer le Core Web Vitals
 */
const PerformanceOptimizer = () => {
  useEffect(() => {
    // Préchargement des ressources critiques
    const preloadResources = () => {
      // Images critiques
      const criticalImages = [
        '/path/to/hero-image.jpg',
        '/path/to/logo.png'
      ];
      
      criticalImages.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = url;
        document.head.appendChild(link);
      });
      
      // Font preloading si nécessaire
      const fontUrl = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap';
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'style';
      fontLink.href = fontUrl;
      document.head.appendChild(fontLink);
    };

    // Différer le chargement des scripts non-critiques
    const deferNonCriticalScripts = () => {
      // Cette fonction pourrait ajouter dynamiquement des scripts après le chargement initial
      // Exemple: analytiques, chat widgets, etc.
      setTimeout(() => {
        // Exemple: chargement de Google Analytics
        const gaScript = document.createElement('script');
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=VOTRE_ID_GA';
        gaScript.async = true;
        document.body.appendChild(gaScript);
      }, 2000);
    };

    // Activer l'intersection observer pour le lazy loading
    const setupIntersectionObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              if (target.dataset.src) {
                target.setAttribute('src', target.dataset.src);
                delete target.dataset.src;
                observer.unobserve(target);
              }
            }
          });
        },
        { rootMargin: '200px' }
      );

      document.querySelectorAll('[data-src]').forEach(el => {
        observer.observe(el);
      });
    };

    // Optimiser les animations pour réduire le CLS (Cumulative Layout Shift)
    const optimizeAnimations = () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('opacity-0');
      });

      const animationObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-up');
              entry.target.classList.remove('opacity-0');
              animationObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        animationObserver.observe(el);
      });
    };

    // Exécution des optimisations
    preloadResources();
    deferNonCriticalScripts();
    setupIntersectionObserver();
    optimizeAnimations();

    // Nettoyage
    return () => {
      // Nettoyage si nécessaire
    };
  }, []);

  return null; // Ce composant n'affiche rien, il applique uniquement des optimisations
};

export default PerformanceOptimizer; 