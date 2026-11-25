const CACHE='kolokvijum-matematika-5';
const files=['./index.html','./style.css?v=3','./bank.js','./m12.js?v=4','./m34.js?v=4','./m5.js','./newsets.js','./graphs.js','./lessons.js?v=3','./guide.js?v=3','./app.js?v=3','./manifest.webmanifest','./icon-192.png','./icon-512.png','./Kolokvijum_Mini_Uchebnik_RU_SR.pdf'];
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 await cache.addAll(files.map(path=>new Request(path,{cache:'reload',credentials:'same-origin'})));
 await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 for(const name of await caches.keys())if(name.startsWith('kolokvijum-matematika-')&&name!==CACHE)await caches.delete(name);
 await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 const req=event.request,u=new URL(req.url);
 if(req.method!=='GET'||u.origin!==self.location.origin)return;
 const scope=new URL(self.registration.scope);
 const index=new URL('./index.html',scope);
 if(req.mode==='navigate'&&(u.pathname===scope.pathname||u.pathname===index.pathname)){
  event.respondWith(fetch(req).catch(()=>caches.match(index,{cacheName:CACHE})));
  return;
 }
 if(files.some(p=>new URL(p,scope).href===u.href))event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(req))||fetch(req)));
});
