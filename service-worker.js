importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

if (workbox) {
  console.log('Workbox loaded successfully');
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst({
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50, 
          maxAgeSeconds: 30 * 24 * 60 * 60, 
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    ({ request }) => request.url.includes('/download'),
    new workbox.strategies.NetworkFirst({
      cacheName: 'download-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 20, 
          maxAgeSeconds: 7 * 24 * 60 * 60, 
        }),
      ],
    })
  );
} else {
  console.error('Workbox failed to load');
}

