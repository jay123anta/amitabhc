/**
 * AmitabhC Service Worker
 * Provides offline functionality and caching for the IDE
 * Version: 2.0.1
 */

const CACHE_NAME = 'amitabhc-v2.0.1';
const CACHE_VERSION = '2.0.1';

// Assets to cache for offline use
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/editor.html',
    '/pro.html',
    '/manifest.json',
    '/interpreter.js',
    
    // CSS files (if separated)
    '/css/main.css',
    '/css/critical.css',
    
    // JavaScript files (if separated)
    '/js/core.js',
    '/js/ui.js',
    
    // Icons and images
    '/assets/icon-192.png',
    '/assets/icon-512.png',
    
    // Fallback page
    '/offline.html'
];

// CDN resources to cache
const CDN_ASSETS = [
    'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.2/codemirror.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.2/theme/dracula.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.2/codemirror.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.2/mode/javascript/javascript.min.js'
];

// Runtime caching strategies
const CACHE_STRATEGIES = {
    // Cache first for static assets
    CACHE_FIRST: 'cache-first',
    // Network first for dynamic content
    NETWORK_FIRST: 'network-first',
    // Stale while revalidate for frequently updated content
    STALE_WHILE_REVALIDATE: 'stale-while-revalidate'
};

// Install event - cache static assets
self.addEventListener('install', function(event) {
    console.log('Service Worker installing...');
    
    event.waitUntil(
        Promise.all([
            // Cache static assets
            caches.open(CACHE_NAME).then(function(cache) {
                console.log('Caching static assets...');
                return cache.addAll(STATIC_ASSETS.map(url => new Request(url, {
                    credentials: 'same-origin'
                })));
            }),
            
            // Cache CDN assets
            caches.open(CACHE_NAME + '-cdn').then(function(cache) {
                console.log('Caching CDN assets...');
                return Promise.allSettled(
                    CDN_ASSETS.map(url => 
                        cache.add(new Request(url, {
                            mode: 'cors',
                            credentials: 'omit'
                        })).catch(err => {
                            console.warn('Failed to cache CDN asset:', url, err);
                        })
                    )
                );
            })
        ]).then(() => {
            console.log('Service Worker installed successfully');
            // Skip waiting to activate immediately
            return self.skipWaiting();
        }).catch(error => {
            console.error('Service Worker installation failed:', error);
        })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
    console.log('Service Worker activating...');
    
    event.waitUntil(
        Promise.all([
            // Clean up old caches
            caches.keys().then(function(cacheNames) {
                return Promise.all(
                    cacheNames.map(function(cacheName) {
                        // Delete caches that don't match current version
                        if (cacheName !== CACHE_NAME && 
                            cacheName !== CACHE_NAME + '-cdn' &&
                            cacheName !== CACHE_NAME + '-runtime') {
                            console.log('Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            
            // Claim all clients
            self.clients.claim()
        ]).then(() => {
            console.log('Service Worker activated successfully');
        }).catch(error => {
            console.error('Service Worker activation failed:', error);
        })
    );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', function(event) {
    const request = event.request;
    const url = new URL(request.url);
    
    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }
    
    // Skip Chrome extension requests
    if (url.protocol === 'chrome-extension:') {
        return;
    }
    
    // Skip cross-origin requests except for CDN assets
    if (url.origin !== location.origin && !isCDNAsset(url.href)) {
        return;
    }
    
    event.respondWith(handleRequest(request, url));
});

// Handle different types of requests with appropriate strategies
async function handleRequest(request, url) {
    try {
        // Static assets - Cache First
        if (isStaticAsset(url.pathname)) {
            return await cacheFirst(request, CACHE_NAME);
        }
        
        // CDN assets - Cache First with longer TTL
        if (isCDNAsset(url.href)) {
            return await cacheFirst(request, CACHE_NAME + '-cdn');
        }
        
        // HTML pages - Network First with cache fallback
        if (isHTMLPage(url.pathname)) {
            return await networkFirst(request, CACHE_NAME);
        }
        
        // API calls or dynamic content - Network First
        if (isDynamicContent(url.pathname)) {
            return await networkFirst(request, CACHE_NAME + '-runtime');
        }
        
        // Default - Network First
        return await networkFirst(request, CACHE_NAME + '-runtime');
        
    } catch (error) {
        console.error('Request handling failed:', error);
        return await handleOfflineScenario(request, url);
    }
}

// Cache First strategy
async function cacheFirst(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
        // Return cached version
        return cachedResponse;
    }
    
    try {
        // Fetch from network and cache
        const networkResponse = await fetch(request);
        
        if (networkResponse && networkResponse.status === 200) {
            // Clone response for caching
            const responseToCache = networkResponse.clone();
            await cache.put(request, responseToCache);
        }
        
        return networkResponse;
    } catch (error) {
        console.error('Cache first strategy failed:', error);
        throw error;
    }
}

// Network First strategy
async function networkFirst(request, cacheName) {
    const cache = await caches.open(cacheName);
    
    try {
        // Try network first
        const networkResponse = await fetch(request);
        
        if (networkResponse && networkResponse.status === 200) {
            // Cache successful responses
            const responseToCache = networkResponse.clone();
            await cache.put(request, responseToCache);
        }
        
        return networkResponse;
    } catch (error) {
        console.warn('Network request failed, trying cache:', error);
        
        // Fallback to cache
        const cachedResponse = await cache.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        
        throw error;
    }
}

// Stale While Revalidate strategy
async function staleWhileRevalidate(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    // Fetch from network in background
    const networkResponsePromise = fetch(request).then(response => {
        if (response && response.status === 200) {
            cache.put(request, response.clone());
        }
        return response;
    }).catch(error => {
        console.warn('Background fetch failed:', error);
    });
    
    // Return cached version immediately, or wait for network
    return cachedResponse || await networkResponsePromise;
}

// Handle offline scenarios
async function handleOfflineScenario(request, url) {
    // For HTML pages, return offline page
    if (isHTMLPage(url.pathname)) {
        const cache = await caches.open(CACHE_NAME);
        const offlinePage = await cache.match('/offline.html');
        if (offlinePage) {
            return offlinePage;
        }
    }
    
    // For other resources, return a basic response
    return new Response(
        JSON.stringify({
            error: 'Offline',
            message: 'This resource is not available offline'
        }),
        {
            status: 503,
            statusText: 'Service Unavailable',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}

// Helper functions to categorize requests
function isStaticAsset(pathname) {
    return pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/);
}

function isCDNAsset(url) {
    return url.includes('cdnjs.cloudflare.com') || 
           url.includes('jsdelivr.net') ||
           url.includes('unpkg.com');
}

function isHTMLPage(pathname) {
    return pathname === '/' || 
           pathname.endsWith('.html') || 
           !pathname.includes('.');
}

function isDynamicContent(pathname) {
    return pathname.startsWith('/api/') || 
           pathname.startsWith('/data/') ||
           pathname.includes('?');
}

// Background sync for form submissions and data updates
self.addEventListener('sync', function(event) {
    console.log('Background sync triggered:', event.tag);
    
    if (event.tag === 'save-code') {
        event.waitUntil(syncSavedCode());
    }
});

// Sync saved code when online
async function syncSavedCode() {
    try {
        // Get saved code from IndexedDB or localStorage
        const savedCode = await getSavedCodeFromStorage();
        
        if (savedCode && savedCode.needsSync) {
            // Attempt to sync with server
            const response = await fetch('/api/sync-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(savedCode)
            });
            
            if (response.ok) {
                // Mark as synced
                await markCodeAsSynced(savedCode.id);
                console.log('Code synced successfully');
            }
        }
    } catch (error) {
        console.error('Code sync failed:', error);
    }
}

// Helper function to get saved code (placeholder)
async function getSavedCodeFromStorage() {
    // This would integrate with your actual storage system
    return null;
}

// Helper function to mark code as synced (placeholder)
async function markCodeAsSynced(id) {
    // This would update your actual storage system
    console.log('Marking code as synced:', id);
}

// Push notification handling
self.addEventListener('push', function(event) {
    console.log('Push notification received:', event);
    
    if (!event.data) {
        return;
    }
    
    try {
        const data = event.data.json();
        const options = {
            body: data.body || 'New update available!',
            icon: '/assets/icon-192.png',
            badge: '/assets/icon-72.png',
            image: data.image,
            vibrate: [100, 50, 100],
            data: data.data,
            actions: [
                {
                    action: 'open',
                    title: 'Open AmitabhC',
                    icon: '/assets/icon-96.png'
                },
                {
                    action: 'close',
                    title: 'Close'
                }
            ]
        };
        
        event.waitUntil(
            self.registration.showNotification(data.title || 'AmitabhC', options)
        );
    } catch (error) {
        console.error('Push notification handling failed:', error);
    }
});

// Notification click handling
self.addEventListener('notificationclick', function(event) {
    console.log('Notification clicked:', event);
    
    event.notification.close();
    
    if (event.action === 'open') {
        event.waitUntil(
            clients.openWindow('/')
        );
    } else if (event.action === 'close') {
        // Just close the notification
        return;
    } else {
        // Default action - open the app
        event.waitUntil(
            clients.matchAll({ type: 'window' }).then(function(clientList) {
                // Focus existing window if available
                for (let client of clientList) {
                    if (client.url.includes(location.origin) && 'focus' in client) {
                        return client.focus();
                    }
                }
                // Open new window
                if (clients.openWindow) {
                    return clients.openWindow('/');
                }
            })
        );
    }
});

// Message handling for communication with main thread
self.addEventListener('message', function(event) {
    console.log('Service Worker received message:', event.data);
    
    if (event.data && event.data.type) {
        switch (event.data.type) {
            case 'SKIP_WAITING':
                self.skipWaiting();
                break;
                
            case 'GET_CACHE_STATUS':
                getCacheStatus().then(status => {
                    event.ports[0].postMessage(status);
                });
                break;
                
            case 'CLEAR_CACHE':
                clearAllCaches().then(result => {
                    event.ports[0].postMessage(result);
                });
                break;
                
            case 'UPDATE_CACHE':
                updateCache().then(result => {
                    event.ports[0].postMessage(result);
                });
                break;
                
            default:
                console.warn('Unknown message type:', event.data.type);
        }
    }
});

// Get cache status
async function getCacheStatus() {
    try {
        const cacheNames = await caches.keys();
        const status = {
            caches: cacheNames,
            version: CACHE_VERSION,
            timestamp: Date.now()
        };
        
        // Get cache sizes
        for (const cacheName of cacheNames) {
            const cache = await caches.open(cacheName);
            const keys = await cache.keys();
            status[cacheName] = {
                count: keys.length,
                urls: keys.map(request => request.url)
            };
        }
        
        return status;
    } catch (error) {
        console.error('Failed to get cache status:', error);
        return { error: error.message };
    }
}

// Clear all caches
async function clearAllCaches() {
    try {
        const cacheNames = await caches.keys();
        await Promise.all(
            cacheNames.map(cacheName => caches.delete(cacheName))
        );
        return { success: true, cleared: cacheNames };
    } catch (error) {
        console.error('Failed to clear caches:', error);
        return { success: false, error: error.message };
    }
}

// Update cache with latest assets
async function updateCache() {
    try {
        const cache = await caches.open(CACHE_NAME);
        await cache.addAll(STATIC_ASSETS);
        return { success: true, updated: STATIC_ASSETS.length };
    } catch (error) {
        console.error('Failed to update cache:', error);
        return { success: false, error: error.message };
    }
}

// Performance monitoring
function measurePerformance(name, fn) {
    const start = performance.now();
    return Promise.resolve(fn()).then(result => {
        const duration = performance.now() - start;
        console.log(`SW Performance - ${name}: ${duration.toFixed(2)}ms`);
        return result;
    });
}

// Error handling and logging
self.addEventListener('error', function(event) {
    console.error('Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', function(event) {
    console.error('Service Worker unhandled rejection:', event.reason);
    event.preventDefault();
});

console.log('Service Worker script loaded successfully');
