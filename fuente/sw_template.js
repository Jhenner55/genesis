// Génesis: funciona sin conexión. Versión __VER__
const V="genesis-__VER__";
const BASE=["./","./manifest.webmanifest","./icono.svg","./icono-192.png","./icono-512.png"];
const RETRATOS=__RETRATOS__;
self.addEventListener("install",e=>{ e.waitUntil(caches.open(V).then(c=>c.addAll(BASE))); self.skipWaiting(); });
self.addEventListener("activate",e=>{ e.waitUntil((async()=>{
  for(const k of await caches.keys()) if(k!==V) await caches.delete(k);
  await self.clients.claim();
  const c=await caches.open(V);
  for(const r of RETRATOS){ if(!(await c.match(r))) { try{ const res=await fetch(r); if(res.ok) await c.put(r,res); }catch(_){} } }
})()); });
self.addEventListener("fetch",e=>{ const r=e.request; const u=new URL(r.url);
  if(r.method!=="GET"||u.origin!==location.origin) return;
  if(r.mode==="navigate"){ e.respondWith(fetch(r).then(res=>{ if(res.ok){ const cp=res.clone(); caches.open(V).then(c=>c.put("./",cp)); } return res; }).catch(()=>caches.match("./"))); return; }
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(m=>m||fetch(r).then(res=>{ if(res.ok){ const cp=res.clone(); caches.open(V).then(c=>c.put(r,cp)); } return res; })));
});
