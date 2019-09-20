var cacheName = 'vithackpwa';
var filesToCache = [
	'/index.html',
  '/icons/logo.jpg',
  '/about.html',
  '/contact-us.html',
  '/home.html',
  '/login.html',
  '/qrcode.html',
  '/qrshow.html',
  '/tech.html',
  './icons/call.jpg',
  './icons/callblue.jpg',
  './icons/focusblue.jpg',
  './icons/focus.jpg',
  './icons/homeblue.jpg',
  './icons/home.jpg',
  './icons/infoblue.jpg',
  './icons/info.jpg',
  './icons/power.jpg',
  './icons/one.jpg',
  './icons/two.jpg',
  './icons/three.jpg',
];
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })                                                                                                                                                                                                                    
  );
});
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});