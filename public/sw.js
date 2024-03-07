let cacheData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
       cache.addAll([
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/static/js/bundle.js",
        "/static/js/main.77642b16.js",
        "/static/css/main.c4934f97.css",
        "/static/js/main.0ec8a9fc.js.map",
        "/manifest.json",
        "/index.html",
        "/",
        "/Footer",
        "/Header",
        "/Messages"
      ]);
    })
  );
});

this.addEventListener("fetch",(event)=>{
    if(!navigator.onLine){
     event.respondWith(
         caches.match(event.request).then((resp)=>{
             if(resp){
                 return resp;
             }
             let requestUrl = event.request.clone();
             fetch(requestUrl)
         })
     )
    }
 })