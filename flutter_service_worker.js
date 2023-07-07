'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "23f5f8dfe8216bf5683e33004796a5a7",
"/": "23f5f8dfe8216bf5683e33004796a5a7",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js": "c7f0ad5572037e4d5409923e3cd5431f",
"version.json": "009c9e65172e010890f7f65fde438006",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "7bc78cf668144f2846a0281fa56574ee",
"assets/AssetManifest.bin": "6effc2346005ac4cdcfc750ba1f007f0",
"assets/AssetManifest.json": "32874704bd1779aea55f1e683bd69370",
"assets/NOTICES": "08bbcbd1d709b1784524b19291628f22",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/assets/the-launcher.png": "7787fedcad1d55a6d48d4b2688db8f97",
"assets/assets/me.png": "b824fc7cb63dce8a4aa43e13bc9cc04e",
"assets/assets/flutter_clock.png": "71eab8c08e50da3d0cca193240ab247b",
"assets/assets/github.svg": "96f4c70dbba91447363cab560a33762c",
"assets/assets/tic-tac-toe.png": "845a653b84c0526ca8a6ad4fb971bb62",
"assets/assets/email.svg": "98442520969d72dd59c5edb5cb083e02",
"assets/assets/wilmaten.png": "37bbbfa1eea88ed760764d4bd89d42a6",
"assets/assets/mapventure.png": "67420b7e4f746ca93bede51df141a86a",
"assets/assets/neumorphism.png": "2777152ea3595e05e15037123a6ee05d",
"assets/assets/linkedin.svg": "5b238434e2862c877f08572b96c0ef7b",
"icons/apple-icon-57x57.png": "026428e8d5d9b7a786d04df6d1194a45",
"icons/ms-icon-150x150.png": "5245ebb32ae6b8bf19581cc4dd1e7f02",
"icons/favicon-16x16.png": "7355000b0c8546ab6dd193a17df473bd",
"icons/apple-icon-precomposed.png": "83616c47273e5d4a0199885700ebd09d",
"icons/ms-icon-310x310.png": "365db3d054130b32a6c7d41163ac4c0f",
"icons/ms-icon-70x70.png": "4bd5eccf5cbcc4cb3c3daea303197e19",
"icons/apple-icon-76x76.png": "5edf8c264617516dd6666ee2ca22dd79",
"icons/apple-icon-72x72.png": "ca5f8fb1ca29d365e58725e7ace951dd",
"icons/apple-icon-180x180.png": "247ba113ef4dd88526ba8af61510fb9b",
"icons/favicon-32x32.png": "341bc0e9c62ac48f939ec30759cf2099",
"icons/android-icon-96x96.png": "06213a00136f5c2b80ce2b96634f9e28",
"icons/manifest.json": "a4a976fb68a044a202058c2c971418a8",
"icons/apple-icon-114x114.png": "c280e8c87c8578f50b16c89d81244afd",
"icons/favicon.ico": "aef8ed0d1bf1246c9e747e2c524840a3",
"icons/android-icon-192x192.png": "c41441943a9cbf8835ae9ad682d60aa4",
"icons/apple-icon.png": "83616c47273e5d4a0199885700ebd09d",
"icons/android-icon-36x36.png": "4e282556116302bf6af020bc976296fe",
"icons/apple-icon-120x120.png": "623a7b0acd23af04426d7732c4e301f2",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "4dd60d4050444bdba7d903138b95e8e6",
"icons/apple-icon-60x60.png": "a1c91212d6f87d7aac81f6101fdfa285",
"icons/favicon-96x96.png": "06213a00136f5c2b80ce2b96634f9e28",
"icons/android-icon-72x72.png": "ca5f8fb1ca29d365e58725e7ace951dd",
"icons/apple-icon-152x152.png": "abbbafa0e596ad2eed21efa372918161",
"icons/apple-icon-144x144.png": "4dd60d4050444bdba7d903138b95e8e6",
"icons/ms-icon-144x144.png": "4dd60d4050444bdba7d903138b95e8e6",
"icons/android-icon-48x48.png": "aed797085df8f79cb642370002ac6b4b",
"styles.css": "a22c7e228776315ab0439eaaa4c9d040"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
