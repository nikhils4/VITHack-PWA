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
  './icons/Hewlett_Packard_Enterprise_logo.jpg',
  './icons/1280px-Valeo_Logo.svg.jpg',
  './icons/Honeywell_logo.577bccedde81d.jpg',
  './icons/crodera.jpg',
  './icons/codeasylums.jpg',
  './icons/deevia.jpg',
  './icons/servify.jpg',
  './icons/vicara.jpg',
  './icons/aihub.jpg',
  './icons/TeknoEvent2000px.jpg',
  './icons/your.jpg',
  './icons/1200px-Reliance_Industries_Logo.svg.jpg',
  './icons/edtimes.jpg',
  './icons/tbi.jpg',
  './icons/Logo-ChallengeRocket.jpg',
  './icons/zeit-black-full-logo.jpg',
  './icons/github.jpg',
  './icons/Druvang Wagh.jpg',
  './icons/Hardik_Kataria.jpg.JPG',
  './icons/Ekaansh_Arora.jpg.jpg',
  './icons/ayush.jpg',
  './icons/Samarth Nayyar.jpg',
  './icons/Rohan_Kumar.jpg',
  './icons/Shreyansh_Ojha.jpg',
  './icons/Kriti_Kacker.jpg',
  './icons/Harshil_parekh.jpg',
  './icons/Naynika_Wason.jpg',
  './icons/Shaanvi_mehta.jpg',
  './icons/Pranav_Sharma.jpg',
  './icons/Sameeran Bandishti .jpg',
  './icons/Dhruvika_Sharma.JPG',
  './icons/Meherdeep_Thakur.jpg',
  './icons/Vipul_Kothari.jpg',
  './icons/left-arrow.jpg'
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