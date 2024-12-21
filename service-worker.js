importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );
  
  const {registerRoute} = workbox.routing;
  const {CacheFirst} = workbox.strategies;
  const {CacheableResponse} = workbox.cacheableResponse;
  
  registerRoute(
    ({request}) => request.destination === 'image',
    new CacheFirst({
      plugins: [new CacheableResponsePlugin({statuses: [0, 200]})],
    })
  );