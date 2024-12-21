importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

if (workbox) {
  console.log('Workbox loaded successfully');

  
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst({
      cacheName: 'icon-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 10,
          maxAgeSeconds: 7 * 24 * 60 * 60,
        }),
      ],
    })
  );
}