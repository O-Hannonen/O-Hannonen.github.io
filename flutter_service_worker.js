'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "a0f3c53a23d305bda244245476e05f8c",
"/": "a0f3c53a23d305bda244245476e05f8c",
"styles.css": "a22c7e228776315ab0439eaaa4c9d040",
"main.dart.js": "b2c0de794498e4237bf9b605672989dc",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"_config.yml": "d88166bbeaf9421921db9fb119080112",
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
".git/ORIG_HEAD": "dddf7c6e38a3ac63b61105429046bab9",
".git/config": "c17a0c3eff4207b415b39c3d4b216339",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/942b055c19abbcfd15bccc252b02c1126b7c87": "6ade9d33e096380e4c1805872683ee73",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/57/eb10e126df62391304a6f335b2da36c44f9272": "1734500768f32bca13c82f80418b5201",
".git/objects/9e/180d147f83c7852dd1fc9c0d44bd365337b83b": "86ffcb4ef518f6c48215f5e0cb6e4dd4",
".git/objects/32/1e8118e95d4ce741a857965377f7e61aa3adba": "19d561c58e0e881f0eb657b609928480",
".git/objects/56/f793ed937dc8085763b8d7199a3e924bf00729": "2c0ce0878b85bdc92eab1f7b9638c82c",
".git/objects/0b/6f48da1c7a9cf584410b349d4fbe0eb3574ebe": "4db197998ce645797f4b8064918d020c",
".git/objects/94/ae6e96b9f8940f3e9401fd7bfac97542cede5d": "fcdd2016168bbad02aff1b7ae6b4dfbf",
".git/objects/0e/4d8e1e538d8327b0de8020d86e64f0e3afd93f": "ee513bb2a78af72e3d3f28cd2643f4b0",
".git/objects/60/99c90a3ab84845a30d3acbc0157edcdf531f89": "14e5a130abec07cd76906ba896cf3a02",
".git/objects/33/a02e21b5d516fcde159b2791582c4aae2a6719": "ebf6b61e9503e814a03bf54715f889dd",
".git/objects/ac/88cfce59935f440f5b8de24f6bfa98ac4e2f36": "e3cd347a549ada3843929ed21f422a02",
".git/objects/ad/e6a74f1f3700aa17017a61548e746cd691b89a": "d6626302758c7b85b9a0b8566072aa43",
".git/objects/da/2a25ab14b92b573d534465620ae97534ae172d": "b7069d306cf4e2e591a4f0ac75c4a0c3",
".git/objects/a2/149042514640d9ea9da0a95dc262a15a179338": "fcc1c661c5e37fa62549c68f189f4abb",
".git/objects/a2/3685f0ea6cfd351b6e57ae25ecfdf8c92892cb": "862cb0e855caaac2c582c7ea07d6429e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/4193fd1d3a2052a60289deb2fec12485491b30": "efbbde0e13e4a467fece3aa7e3578cde",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/6f7bcf2e61ebe8582c143b97ede572cfebba64": "6cdc49b38c6b7b916b2bf89793729f2f",
".git/objects/e2/f857dd6d4f1b993a3e177b377e1c5b5f84f6c4": "f473440c53555ac6a6337cc6a6559f14",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/38a4cd9396f65ed5b68a07d002e88ec655593d": "b8b6ae64f3d4f969df719a7c21c6d739",
".git/objects/c7/e4a4dd4c2f2eeaea7d3ff115080d6029ab6f65": "f88fadbcea58a5826786880f59c15cbc",
".git/objects/c0/0820dfb51c8411e0add009d4dee8c85be468ee": "7f714ea4d9916acdec05a9898aa24f1f",
".git/objects/f5/e6821c608320cd3b30fcedca89637cafeb738c": "22dcfb44014aed514911fe14a2022ec1",
".git/objects/fe/942933d9bc329958ebf91344c1d3c7985cb99c": "9bea52f9f183b5c61a66f91267d8b0d6",
".git/objects/c1/c22d3af90740848e20596c5114430c3f093bde": "5bd2af8b38b9c09e272059bf6939e16e",
".git/objects/c6/6342908bc82e3bf54691550a8433d81dc5809e": "6ce53875bd4bceeb8c1bbc3e9c0ec7ce",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4b/5d656f69a5852ee7508479d3b6444fc0147688": "64dd5b0bf4f2da57df3ba8e8edb12a02",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/80/011f8e32e947f15df2b7bef20290a25fe35bc0": "6b4e865913c0ed581e6a191f977ed731",
".git/objects/74/e931a77d936ed32f85f144ccf6636b7b0e0cf7": "1371b28f18b703be1cd9c0d024b832ec",
".git/objects/1a/476367174e782b8e0a330ecf0d08f31df78958": "030e36899486d07179f47fbe5330d2b1",
".git/objects/7b/834ba2c274d79c20b78bae8c571394c72ed485": "bb5b0b0f04a5fae2d4d9a2073cb9c6ea",
".git/objects/8f/06dd3e9d6befd6a9e0b898800fa01b8c4f8f9b": "fbd4faa2eebb5bfb496472d1b9513533",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/968c8cef4efe07155ced1df46bbf20052e0313": "31d7af434ff124d8da321e5a3d447f57",
".git/objects/75/c1060c5ed0fa35d58a383ad6281f3f09731e00": "2adb3413dc17043991d873eda6dce77a",
".git/objects/2f/7efbeab578c8042531ea7908ee8ffd7589fe46": "aa9408a44a7560b833dd793a6cb10ddd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/f271b0e8acc5b27959df90f7806eacfbed1276": "0ca6318ec2154e831f16680f71d80772",
".git/objects/09/a1339f7c33d70358973e3edee23d3eb09dfb43": "737409bb24ca53513f9a027892378588",
".git/objects/5d/da2c49d1c449a0377816da9bfdf7dfcd6dcffd": "5908a29dfceddaf38ae0a87ff5042ab0",
".git/objects/65/e45a0eccb4aed867e6de400dcc49d9f08923e4": "3689c9592a18e77b8b40c161260c7c52",
".git/objects/62/e0842666d5c67deeece49541216ae88575579f": "cd31682466717ee569575d86252306c9",
".git/objects/96/35ff67f05b8f3fa9af09d3d8f359899fae1807": "05fde03a1e3437e2e64be1a8c221dc7c",
".git/objects/54/351ccde34326f771c7fa737fe7b9cd7ec49270": "2ef2aab0823475df61b38533861448f3",
".git/objects/54/83a796918d1be65b0d011bf5ca6ad0bc2ad178": "20b744e6e3da15b90bc14a8d40d214b2",
".git/objects/08/f05e522e9a271c73c34e39c2a07a62512987a4": "22a75e0a015e424c26fc00c5c7bf20b1",
".git/objects/01/23897b6c9ece8fe0f87a9ab6502dc0e92186e2": "3c499f7b7d5c3c6703fd069226072f28",
".git/objects/6c/364e3ad3f5a46e746084030a949c52db030840": "c697a1bd15c6c79986d9cc8dea734553",
".git/objects/63/f49859c3af17be62f104b9b667ea59e09fbd70": "c25e195a2a0a3fdd2e21810d19bae1a5",
".git/objects/bf/827ce32a1cdba8ea17150606e45d1055dae8ce": "7f7c17e7acce559cd790a8685d73b158",
".git/objects/b8/b7f55561ae81927ba0d823cc71af624ff39497": "c8223baba8a4519a5dc40dac83736565",
".git/objects/dc/ecfd25eec2c71ec9f18f189a06f67d203c22de": "7cd14dc5ff58d4452871a97c6a6c12c7",
".git/objects/d2/5095b300c4a94b563651fbe95b27c9076af4ce": "490481e2e2683412705c5ea124c32cea",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/7aa975fe67ca97777e3e0bf4438cf1cb40e0f7": "4f08b299a124bc01f9504df143b59236",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/18c0fb525ed9e1aee70b8589cf0629dbbe7dda": "ae7713e7162329d9f230af47cf051577",
".git/objects/b0/2bdc781bc84c39c77079593eb0f0462a4f781a": "a1c9b20f790efaffea64d0f4e100ab4e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ff/dd44e0d1ff90b904a16cf2452005089c07c600": "689857513765a520f4fb808aa2ff88a5",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
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
".git/objects/71/b50915af7ac88e744b537382a2b5afe7c0bc23": "ad766f3f37eb43f9c9122596d23cf186",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/13/be9ef0ce2325ef78a4df5f6610162637de932a": "40d531c5c67fe574ef9f2f10736cc9e9",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eba09be175e6cf86612fb1afc367d8c2",
".git/logs/refs/heads/master": "eba09be175e6cf86612fb1afc367d8c2",
".git/logs/refs/remotes/origin/master": "364c6b04ca69f5922aec639e6e5874b3",
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
".git/refs/heads/master": "cce9bac350b00eb45535cdb0bb0ebd05",
".git/refs/remotes/origin/master": "cce9bac350b00eb45535cdb0bb0ebd05",
".git/index": "ab9c268681087d683cb0b75efb7f78de",
".git/COMMIT_EDITMSG": "af5cb0facdebbeabe1f46fed12d84a88",
".git/FETCH_HEAD": "4e5fce43cd1e8e52ad95e55167e91c0f",
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
