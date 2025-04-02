import React, { useState, useEffect, useRef } from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  placeholderColor?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholderColor = '#f3f4f6',
  loading = 'lazy',
  fetchPriority = 'auto',
  sizes,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [srcToUse, setSrcToUse] = useState<string | null>(loading === 'eager' ? src : null);

  // Format src pour WebP si possible
  const getOptimizedSrc = (originalSrc: string): string => {
    // Vérifier si l'URL est d'Unsplash et ajouter des paramètres d'optimisation
    if (originalSrc.includes('unsplash.com') && !originalSrc.includes('&q=')) {
      const hasParams = originalSrc.includes('?');
      const connector = hasParams ? '&' : '?';
      return `${originalSrc}${connector}auto=format&q=80&w=${width * 2}&fit=crop`;
    }
    return originalSrc;
  };

  useEffect(() => {
    // Si l'image doit être chargée immédiatement (eager)
    if (loading === 'eager') {
      setSrcToUse(getOptimizedSrc(src));
      return;
    }

    // Intersection Observer pour le lazy loading
    if (!observerRef.current && 'IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !srcToUse) {
            setSrcToUse(getOptimizedSrc(src));
            observerRef.current?.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '200px 0px',
        threshold: 0.01
      });

      if (imgRef.current) {
        observerRef.current.observe(imgRef.current);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src, loading, srcToUse, width]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad && onLoad();
  };

  const handleError = () => {
    onError && onError();
  };

  const aspectRatio = (height / width) * 100;

  return (
    <div
      className="image-container overflow-hidden"
      style={{
        position: 'relative',
        paddingBottom: `${aspectRatio}%`,
        background: placeholderColor
      }}
    >
      <img
        ref={imgRef}
        src={srcToUse || ''}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 absolute inset-0 w-full h-full object-cover`}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading}
        fetchPriority={fetchPriority}
        sizes={sizes}
        decoding="async"
      />
      {!isLoaded && (
        <div 
          className="placeholder absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse"
          aria-hidden="true"
        >
          <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </div>
      )}
      {/* Pour le SEO, ajouter un <noscript> qui affiche l'image même sans JavaScript */}
      <noscript>
        <img 
          src={getOptimizedSrc(src)} 
          alt={alt} 
          width={width} 
          height={height} 
          className={`${className} absolute inset-0 w-full h-full object-cover`}
          loading={loading}
        />
      </noscript>
    </div>
  );
};

export default ImageOptimizer; 