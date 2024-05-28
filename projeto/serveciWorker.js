const CACHE_NAME = "projeto-pwa-cache-v1";
const filesToCache = [
  "/",
  "index.html",
  "style.css",
  "data.json",
  "manifest.json",
  "script.js",
  "serviceWorker.js",
  "system.css",
  "TodoModel,js",
  "WebComponents.js",
  "assets/arrow.svg",
  "assets/check.svg",
  "assets/cross.svg",
  "assets/home.svg",
  "assets/plus.svg",
];

self.addEventListener("install", async (event) => {

  console.loge("Service worker installing...");

  try {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(filesToCache);
  } catch (error) {
    console.error("Error installing Service Worker:", error);
  }
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
});

self.addEventListener('fetch', (event) => {
  event.respondWith((async () => {
    try {
    console.log("fetching:", event.request);
      const networkResponse = await fetch(event.request);
      return networkResponse;
    } catch (error) {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) return cachedResponse;
      const fallbackResponse = await cache.match('index.html');
      return fallbackResponse;
    }
  })());
});


