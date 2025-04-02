// Noms de cache
const CACHE_NAME = 'site-static-v1';
const DYNAMIC_CACHE = 'site-dynamic-v1';

// Liste des ressources à mettre en cache immédiatement
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/assets/main.js',  // Ajustez selon votre structure de build
  '/assets/vendor.js',
  '/assets/main.css',
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png',
  '/offline.html',  // Page hors-ligne de secours
];

// Installation du service worker
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installation');
  
  // Précachage des ressources statiques
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Mise en cache des ressources statiques');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        // Forcer l'activation sans attendre la fermeture des onglets
        return self.skipWaiting();
      })
  );
});

// Activation du service worker
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activation');
  
  // Nettoyage des anciens caches
  event.waitUntil(
    caches.keys()
      .then((keyList) => {
        return Promise.all(
          keyList.map((key) => {
            if (key !== CACHE_NAME && key !== DYNAMIC_CACHE) {
              console.log('[Service Worker] Suppression de l\'ancien cache', key);
              return caches.delete(key);
            }
          })
        );
      })
      .then(() => self.clients.claim()) // Prendre le contrôle immédiatement
  );
});

// Stratégie de mise en cache : Cache First, puis Network
self.addEventListener('fetch', (event) => {
  // Ne pas intercepter les requêtes vers l'API ou les analytics
  if (event.request.url.includes('/api/') || 
      event.request.url.includes('google-analytics') ||
      !event.request.url.startsWith('http')) {
    return;
  }
  
  // Stratégie "Cache First, Network Fallback"
  event.respondWith(
    caches.match(event.request)
      .then((cacheResponse) => {
        if (cacheResponse) {
          // Ressource trouvée dans le cache
          return cacheResponse;
        }
        
        // Sinon, faire une requête réseau
        return fetch(event.request)
          .then((networkResponse) => {
            // Vérifier que la réponse est valide
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            
            // Mettre en cache la nouvelle ressource (clone car le body ne peut être lu qu'une fois)
            const responseToCache = networkResponse.clone();
            
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
              
            return networkResponse;
          })
          .catch(() => {
            // Si la requête échoue et que c'est une page HTML, retourner la page hors-ligne
            if (event.request.headers.get('Accept').includes('text/html')) {
              return caches.match('/offline.html');
            }
          });
      })
  );
});

// Gestionnaire de messages pour les mises à jour
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
}); 