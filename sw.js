var cacheName = 'vithackpwa';
var filesToCache = [
	'/index.html',
  '/icons/logo.png',
  '/about.html',
  'contact-us.html',
  'home.html',
  '/login.html',
  'qrcode.html',
  'qrshow.html',
  './icons/call.svg',
  './icons/callblue.svg',
  './icons/focusblue.svg',
  './icons/focus.png',
  './icons/homeblue.svg',
  './icons/home.svg',
  './icons/infoblue.svg',
  './icons/info.svg',
  './icons/power.svg'
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