const C='turbo-v1',A=['/','/index.html','/manifest.webmanifest','/icon-192.png','/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin!==location.origin)return;
e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
