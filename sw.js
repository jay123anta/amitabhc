// AmitabhC Service Worker
// Version 1.0.0

const CACHE_NAME = 'amitabhc-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/editor.html',
  '/manifest.json',
  '/examples/hello.amitabhc',
  '/examples/factorial.amitabhc'
];

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('🎬 AmitabhC Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('✅ AmitabhC Service Worker: Installation complete!');
        console.log('"Jahan cache shuru hota hai, wahin se offline ki line shuru hoti hai!"');
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          console.log('📦 Serving from cache:', event.request.url);
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        // Offline fallback
        console.log('🚫 Offline - Mere paas cache hai!');
        
        // Return offline page for navigation requests
        if (event.request.destination === 'document') {
          return caches.match('/editor.html');
        }
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('🎬 AmitabhC Service Worker: Activating...');
  
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('🗑️ Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ AmitabhC Service Worker: Activation complete!');
      console.log('"Naam hai Service Worker, aur kaam hai offline support!"');
    })
  );
});

// Message event - for updates
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('⏩ Skipping waiting...');
    self.skipWaiting();
  }
});

// Periodic background sync (if supported)
self.addEventListener('periodicsync', event => {
  if (event.tag === 'update-check') {
    console.log('🔄 Checking for updates...');
    event.waitUntil(checkForUpdates());
  }
});

async function checkForUpdates() {
  try {
    const response = await fetch('/version.json');
    const data = await response.json();
    
    // Check version and notify user if update available
    if (data.version !== '1.0.0') {
      self.registration.showNotification('AmitabhC Update Available!', {
        body: 'Naya version aa gaya hai! Click to update.',
        icon: '/icon-192.png',
        badge: '/icon-72.png',
        tag: 'update-notification'
      });
    }
  } catch (error) {
    console.error('Error checking for updates:', error);
  }
}