import { useState, useEffect, useRef } from 'react';

interface ImageLazyLoaderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholderSrc?: string;
  threshold?: number;
  rootMargin?: string;
  blurEffect?: boolean;
}

/**
 * ImageLazyLoader - Composant pour charger les images de manière différée
 * Améliore les performances en ne chargeant les images que lorsqu'elles entrent dans le viewport
 */
const ImageLazyLoader = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholderSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZWVlZSIvPjwvc3ZnPg==',
  threshold = 0.1,
  rootMargin = '200px 0px',
  blurEffect = true
}: ImageLazyLoaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholderSrc);
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    // Observer pour détecter quand l'image entre dans le viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);
  
  useEffect(() => {
    // Charger l'image réelle une fois qu'elle est dans le viewport
    if (isInView) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => {
        console.error(`Erreur de chargement de l'image: ${src}`);
        // Garder l'image placeholder en cas d'erreur
      };
    }
  }, [isInView, src]);
  
  // Classes pour l'effet de flou
  const blurClass = blurEffect && !isLoaded ? 'filter blur-sm' : 'filter blur-0';
  const transitionClass = 'transition-all duration-500 ease-in-out';
  
  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={`${className} ${blurClass} ${transitionClass}`}
      loading="lazy"
      decoding="async"
      onLoad={() => {
        if (imageSrc === src) {
          setIsLoaded(true);
        }
      }}
    />
  );
};

export default ImageLazyLoader; 