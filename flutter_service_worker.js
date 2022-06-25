'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "877f74fe8ac8c96cbb9b152e55d926f5",
"/": "877f74fe8ac8c96cbb9b152e55d926f5",
"styles.css": "a22c7e228776315ab0439eaaa4c9d040",
"main.dart.js": "5fddc6f102296ad2800936f3dab19fbb",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/favicon-16x16.png": "7355000b0c8546ab6dd193a17df473bd",
"icons/favicon.ico": "aef8ed0d1bf1246c9e747e2c524840a3",
"icons/apple-icon.png": "83616c47273e5d4a0199885700ebd09d",
"icons/apple-icon-144x144.png": "4dd60d4050444bdba7d903138b95e8e6",
"icons/android-icon-192x192.png": "c41441943a9cbf8835ae9ad682d60aa4",
"icons/apple-icon-precomposed.png": "83616c47273e5d4a0199885700ebd09d",
"icons/apple-icon-114x114.png": "c280e8c87c8578f50b16c89d81244afd",
"icons/ms-icon-310x310.png": "365db3d054130b32a6c7d41163ac4c0f",
"icons/ms-icon-144x144.png": "4dd60d4050444bdba7d903138b95e8e6",
"icons/apple-icon-57x57.png": "026428e8d5d9b7a786d04df6d1194a45",
"icons/apple-icon-152x152.png": "abbbafa0e596ad2eed21efa372918161",
"icons/ms-icon-150x150.png": "5245ebb32ae6b8bf19581cc4dd1e7f02",
"icons/android-icon-72x72.png": "ca5f8fb1ca29d365e58725e7ace951dd",
"icons/android-icon-96x96.png": "06213a00136f5c2b80ce2b96634f9e28",
"icons/android-icon-36x36.png": "4e282556116302bf6af020bc976296fe",
"icons/apple-icon-180x180.png": "247ba113ef4dd88526ba8af61510fb9b",
"icons/favicon-96x96.png": "06213a00136f5c2b80ce2b96634f9e28",
"icons/manifest.json": "a4a976fb68a044a202058c2c971418a8",
"icons/android-icon-48x48.png": "aed797085df8f79cb642370002ac6b4b",
"icons/apple-icon-76x76.png": "5edf8c264617516dd6666ee2ca22dd79",
"icons/apple-icon-60x60.png": "a1c91212d6f87d7aac81f6101fdfa285",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "4dd60d4050444bdba7d903138b95e8e6",
"icons/apple-icon-72x72.png": "ca5f8fb1ca29d365e58725e7ace951dd",
"icons/apple-icon-120x120.png": "623a7b0acd23af04426d7732c4e301f2",
"icons/favicon-32x32.png": "341bc0e9c62ac48f939ec30759cf2099",
"icons/ms-icon-70x70.png": "4bd5eccf5cbcc4cb3c3daea303197e19",
".git/config": "c17a0c3eff4207b415b39c3d4b216339",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/9e/180d147f83c7852dd1fc9c0d44bd365337b83b": "86ffcb4ef518f6c48215f5e0cb6e4dd4",
".git/objects/0b/6f48da1c7a9cf584410b349d4fbe0eb3574ebe": "4db197998ce645797f4b8064918d020c",
".git/objects/94/ae6e96b9f8940f3e9401fd7bfac97542cede5d": "fcdd2016168bbad02aff1b7ae6b4dfbf",
".git/objects/0e/4d8e1e538d8327b0de8020d86e64f0e3afd93f": "ee513bb2a78af72e3d3f28cd2643f4b0",
".git/objects/ad/e6a74f1f3700aa17017a61548e746cd691b89a": "d6626302758c7b85b9a0b8566072aa43",
".git/objects/a2/3685f0ea6cfd351b6e57ae25ecfdf8c92892cb": "862cb0e855caaac2c582c7ea07d6429e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/4193fd1d3a2052a60289deb2fec12485491b30": "efbbde0e13e4a467fece3aa7e3578cde",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/f857dd6d4f1b993a3e177b377e1c5b5f84f6c4": "f473440c53555ac6a6337cc6a6559f14",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/e6821c608320cd3b30fcedca89637cafeb738c": "22dcfb44014aed514911fe14a2022ec1",
".git/objects/c6/6342908bc82e3bf54691550a8433d81dc5809e": "6ce53875bd4bceeb8c1bbc3e9c0ec7ce",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/80/011f8e32e947f15df2b7bef20290a25fe35bc0": "6b4e865913c0ed581e6a191f977ed731",
".git/objects/1a/476367174e782b8e0a330ecf0d08f31df78958": "030e36899486d07179f47fbe5330d2b1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/c1060c5ed0fa35d58a383ad6281f3f09731e00": "2adb3413dc17043991d873eda6dce77a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/01/23897b6c9ece8fe0f87a9ab6502dc0e92186e2": "3c499f7b7d5c3c6703fd069226072f28",
".git/objects/b8/b7f55561ae81927ba0d823cc71af624ff39497": "c8223baba8a4519a5dc40dac83736565",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/18c0fb525ed9e1aee70b8589cf0629dbbe7dda": "ae7713e7162329d9f230af47cf051577",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ff/dd44e0d1ff90b904a16cf2452005089c07c600": "689857513765a520f4fb808aa2ff88a5",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/a9a00d2bca65077420aa6637319463eab0822a": "e8e1dff84feee5c21437d0e51866c463",
".git/objects/cb/b97f86cbff00920dd042ff0e977cd181e82a29": "bb10aae34cff02982f2cc8b066b8c6ea",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/76c137024aff3ad9957ef3701b03e86ecff90e": "8f5fe3624a55cd5483d48f84ea9064aa",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/1b/ed522d440e7f55df752d9cc201a4c312e740c0": "2bb7ccc7f869a7f1ceed7fdb594cae39",
".git/objects/77/f673db5a8cab80f4ee7c5251374705b2427f4f": "3e3e3530754d386d98158ad19f84a0e8",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/13/be9ef0ce2325ef78a4df5f6610162637de932a": "40d531c5c67fe574ef9f2f10736cc9e9",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "60bdd32aa6a16b49862fe3cd3b32f2a1",
".git/logs/refs/heads/master": "60bdd32aa6a16b49862fe3cd3b32f2a1",
".git/logs/refs/remotes/origin/master": "108dab96606c5280d1df1ea161e5d89f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "8776fc3746e23adb6cc797a46a4fa8fa",
".git/refs/remotes/origin/master": "8776fc3746e23adb6cc797a46a4fa8fa",
".git/index": "9beded71bfacde37b8f4fbf8c0db28f4",
".git/COMMIT_EDITMSG": "ced50175170d6f274de6934592c4cf1b",
"assets/AssetManifest.json": "447f0adb05ff3dca54718cdb350dbdab",
"assets/NOTICES": "52cff4a641f5787a733834452b823970",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/the-launcher.png": "7787fedcad1d55a6d48d4b2688db8f97",
"assets/assets/me.png": "b824fc7cb63dce8a4aa43e13bc9cc04e",
"assets/assets/github.svg": "96f4c70dbba91447363cab560a33762c",
"assets/assets/flutter_clock.png": "71eab8c08e50da3d0cca193240ab247b",
"assets/assets/email.svg": "98442520969d72dd59c5edb5cb083e02",
"assets/assets/wilmaten.png": "37bbbfa1eea88ed760764d4bd89d42a6",
"assets/assets/tic-tac-toe.png": "845a653b84c0526ca8a6ad4fb971bb62",
"assets/assets/mapventure.png": "67420b7e4f746ca93bede51df141a86a",
"assets/assets/neumorphism.png": "2777152ea3595e05e15037123a6ee05d",
"assets/assets/linkedin.svg": "5b238434e2862c877f08572b96c0ef7b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
