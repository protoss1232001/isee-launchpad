// Offline cache for ISEE Launchpad. The page itself comes from the network when
// there is one, so a new version shows up the next time the app is opened; if
// the network is missing or slow, the cached copy is used instead. Icons and the
// manifest come from the cache and are refreshed in the background.
const PREFIX = 'isee-launchpad-';
const CACHE = PREFIX + 'v10';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
// Only this app's old caches are deleted: other apps on the same site keep theirs.
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(PREFIX) && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
function cachedPage(req) { return caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('./index.html')); }
function page(req) {
  return new Promise(resolve => {
    let settled = false;
    const finish = r => { if (r && !settled) { settled = true; resolve(r); } };
    fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); finish(res); }
      else cachedPage(req).then(r => finish(r || res));
    }).catch(() => cachedPage(req).then(r => finish(r || Response.error())));
    setTimeout(() => cachedPage(req).then(finish), 3000);
  });
}
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (e.request.mode === 'navigate') { e.respondWith(page(e.request)); return; }
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(cached => {
    const net = fetch(e.request).then(res => { if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return res; }).catch(() => cached);
    return cached || net;
  }));
});
