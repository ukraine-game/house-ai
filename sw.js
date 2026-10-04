const C='fh1',H=['cdn.jsdelivr.net','storage.googleapis.com','tfhub.dev','www.kaggle.com'];
self.addEventListener('install',()=>self.skipWaiting());self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!='GET'||(u.origin!=location.origin&&!H.includes(u.host)))return;
e.respondWith(caches.open(C).then(async c=>{const m=await c.match(e.request),f=fetch(e.request).then(r=>{if(r.ok)c.put(e.request,r.clone());return r}).catch(()=>m);return m||f}))});
