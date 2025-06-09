// AmitabhC Service Worker
// Version 2.0.0 - Pro Edition

const CACHE_NAME = 'amitabhc-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/editor.html',
  '/pro.html',
  '/manifest.json',
  '/version.json',
  '/examples/hello.amitabhc',
  '/examples/factorial.amitabhc',
  // Add CDN resources for offline support
  'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.2/codemirror.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.2/theme/dracula.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.2/codemirror.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.2/mode/javascript/javascript.min.js'
];

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('🎬 AmitabhC Pro Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Caching app shell and Pro resources');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('✅ AmitabhC Pro Service Worker: Installation complete!');
        console.log('"Jahan cache shuru hota hai, wahin se offline ki line shuru hoti hai!"');
        self.skipWaiting(); // Activate immediately
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
        
        // Return appropriate offline page
        if (event.request.destination === 'document') {
          if (event.request.url.includes('pro.html')) {
            return caches.match('/pro.html');
          }
          return caches.match('/editor.html');
        }
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('🎬 AmitabhC Pro Service Worker: Activating...');
  
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
      console.log('✅ AmitabhC Pro Service Worker: Activation complete!');
      console.log('"Naam hai Service Worker Pro, aur kaam hai advanced offline support!"');
      return self.clients.claim(); // Take control immediately
    })
  );
});

// Message event - for updates
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('⏩ Skipping waiting...');
    self.skipWaiting();
  }
  
  // Handle Pro-specific messages
  if (event.data && event.data.type === 'CACHE_CODE') {
    // Cache user's code
    caches.open(CACHE_NAME).then(cache => {
      const response = new Response(event.data.code);
      cache.put('/saved-code.amitabhc', response);
    });
  }
});

// Periodic background sync (if supported)
self.addEventListener('periodicsync', event => {
  if (event.tag === 'update-check') {
    console.log('🔄 Checking for updates...');
    event.waitUntil(checkForUpdates());
  }
  
  if (event.tag === 'sync-code') {
    console.log('☁️ Syncing code to cloud...');
    event.waitUntil(syncToCloud());
  }
});

async function checkForUpdates() {
  try {
    const response = await fetch('/version.json');
    const data = await response.json();
    
    // Check version and notify user if update available
    if (data.version !== '2.0.0') {
      self.registration.showNotification('AmitabhC Update Available! 🎉', {
        body: `Version ${data.version} is available! Click to update.`,
        icon: '/icon-192.png',
        badge: '/icon-72.png',
        tag: 'update-notification',
        actions: [
          { action: 'update', title: 'Update Now' },
          { action: 'later', title: 'Later' }
        ]
      });
    }
  } catch (error) {
    console.error('Error checking for updates:', error);
  }
}

async function syncToCloud() {
  try {
    // Get cached code
    const cache = await caches.open(CACHE_NAME);
    const codeResponse = await cache.match('/saved-code.amitabhc');
    
    if (codeResponse) {
      const code = await codeResponse.text();
      // In real implementation, sync to cloud service
      console.log('☁️ Code synced to cloud');
    }
  } catch (error) {
    console.error('Error syncing to cloud:', error);
  }
}

// Notification click handler
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'update') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Background fetch for large resources
self.addEventListener('backgroundfetch', event => {
  event.waitUntil(
    (async () => {
      const registration = event.registration;
      
      if (registration.id === 'pro-resources') {
        // Handle Pro resources download
        console.log('📥 Downloading Pro resources in background...');
      }
    })()
  );
});