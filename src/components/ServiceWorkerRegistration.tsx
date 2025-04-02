import { useEffect, useState } from 'react';

interface ServiceWorkerProps {
  onSuccess?: () => void;
  onUpdate?: () => void;
}

/**
 * ServiceWorkerRegistration - Composant pour enregistrer un service worker
 * Améliore les performances en mettant en cache les ressources statiques
 */
const ServiceWorkerRegistration = ({ 
  onSuccess, 
  onUpdate 
}: ServiceWorkerProps) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        const swUrl = `${window.location.origin}/service-worker.js`;
        
        registerServiceWorker(swUrl);
      });
    }
    
    return () => {
      // Nettoyage si nécessaire
    };
  }, []);
  
  const registerServiceWorker = (swUrl: string) => {
    navigator.serviceWorker
      .register(swUrl)
      .then(registration => {
        console.log('Service Worker enregistré avec succès:', registration);
        setIsRegistered(true);
        
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // Une nouvelle version est disponible
                console.log('Nouvelle version du Service Worker disponible.');
                setUpdateAvailable(true);
                
                if (onUpdate) {
                  onUpdate();
                }
              } else {
                // Cette version est utilisée pour la première fois
                console.log('Service Worker installé. Le contenu est mis en cache pour une utilisation hors ligne.');
                
                if (onSuccess) {
                  onSuccess();
                }
              }
            }
          };
        };
      })
      .catch(error => {
        console.error('Erreur lors de l\'enregistrement du Service Worker:', error);
      });
  };
  
  const handleUpdate = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.update();
      });
    }
  };
  
  // Ce composant peut afficher une notification de mise à jour disponible
  if (updateAvailable) {
    return (
      <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-xl p-4 max-w-md z-50">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Mise à jour disponible</h3>
        <p className="text-gray-600 mb-3">Une nouvelle version de l'application est disponible.</p>
        <div className="flex space-x-2">
          <button 
            onClick={handleUpdate}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Rafraîchir
          </button>
          <button 
            onClick={() => setUpdateAvailable(false)}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
          >
            Plus tard
          </button>
        </div>
      </div>
    );
  }
  
  // Normalement, ce composant n'affiche rien
  return null;
};

export default ServiceWorkerRegistration; 