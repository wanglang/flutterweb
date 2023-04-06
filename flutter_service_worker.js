'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0dc02b34aea2152979cff09890ae1857",
"flutterweb/version.json": "0dc02b34aea2152979cff09890ae1857",
"flutterweb/index.html": "4eb4f0c56f64239305903ba2c8687e92",
"/": "1a888518cd61a26eefbd54f72dc40453",
"flutterweb/main.dart.js": "08101752ee8d0be3af15e0a7e88153f8",
"flutterweb/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"flutterweb/Readme": "6f5902ac237024bdd0c176cb93063dc4",
"flutterweb/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutterweb/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flutterweb/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"flutterweb/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"flutterweb/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutterweb/manifest.json": "ea4e62a02068a5292eabbbf031936045",
"flutterweb/.git/config": "11153870e05a9a459aef13f902c43efc",
"flutterweb/.git/objects/pack/pack-634a0cc51bea2a0a370f3edd9f48f92cacad1858.idx": "5b1f352b263f11d40efcfcfde52ada15",
"flutterweb/.git/objects/pack/pack-634a0cc51bea2a0a370f3edd9f48f92cacad1858.pack": "635b934748454d96be8444570350bbd2",
"flutterweb/.git/objects/1f/9ae319de74ce28794b748e8a69702ef9d499a2": "f201c1eea91ec10b2569d0a31eb2a319",
"flutterweb/.git/objects/09/3c52cbcd8aee65ac79f7442291cd8b4ebe74ba": "d56a9be99305f924eba0f998bb2858df",
"flutterweb/.git/objects/53/b003948ff3b8b7a40f9bf45dc17e3a935a5cf6": "47a284b63865d58b96c84702cfe586cf",
"flutterweb/.git/objects/db/53721580c1c5301d59eac8f3def7250e88423f": "29d852cf7bbf2c1909b0549407b23449",
"flutterweb/.git/objects/e9/93b30c0987845257c7256872c5435f878b12d3": "d67f884968f30a772d866af3487e337f",
"flutterweb/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"flutterweb/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"flutterweb/.git/logs/HEAD": "a631ddefcc2daebd7d64205e78f8d97b",
"flutterweb/.git/logs/refs/heads/main": "a631ddefcc2daebd7d64205e78f8d97b",
"flutterweb/.git/logs/refs/remotes/origin/HEAD": "0d1a040a899ed3b8e3e22a221110cbaf",
"flutterweb/.git/logs/refs/remotes/origin/main": "7a88c3baa0089da92406a4b8125ad8dc",
"flutterweb/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"flutterweb/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"flutterweb/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"flutterweb/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"flutterweb/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"flutterweb/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"flutterweb/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"flutterweb/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"flutterweb/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"flutterweb/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"flutterweb/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"flutterweb/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"flutterweb/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"flutterweb/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"flutterweb/.git/refs/heads/main": "6b6e34eaba160ff6bbeb169cf218bbcc",
"flutterweb/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"flutterweb/.git/refs/remotes/origin/main": "6b6e34eaba160ff6bbeb169cf218bbcc",
"flutterweb/.git/index": "6830a10e125d27c77759fe782bc4c476",
"flutterweb/.git/packed-refs": "46c56bb96b72c8a4ecdcc7da1eba361b",
"flutterweb/.git/COMMIT_EDITMSG": "fa8f294721ab3fbb37793c68ff2cf09b",
"flutterweb/assets/images/tab_diantai_nomal.png": "e972672b67f789e991fa8b95eb9fea19",
"flutterweb/assets/images/tab_rili_default.png": "995e0d3a6f8909a6a00fe82125c9bdc1",
"flutterweb/assets/images/tab_rili_nomal.png": "810c256db15f2d6ccc0be347c2d25ce8",
"flutterweb/assets/images/2.0x/tab_diantai_nomal.png": "e972672b67f789e991fa8b95eb9fea19",
"flutterweb/assets/images/2.0x/tab_rili_default.png": "995e0d3a6f8909a6a00fe82125c9bdc1",
"flutterweb/assets/images/2.0x/tab_rili_nomal.png": "810c256db15f2d6ccc0be347c2d25ce8",
"flutterweb/assets/images/2.0x/tab_diantai_default.png": "5b41ae326c32a6bbc52d92e54de6947a",
"flutterweb/assets/images/2.0x/tab_xin_default.png": "c3fbb64bca84a39c42bdbe8c0201b2bb",
"flutterweb/assets/images/2.0x/tab_xin_nomal.png": "ec49fc1281b24bcb2242ee1776b2d101",
"flutterweb/assets/images/2.0x/bg.png": "4b4cd8ff56987c8b076a14ed8f13cdfd",
"flutterweb/assets/images/tab_diantai_default.png": "5b41ae326c32a6bbc52d92e54de6947a",
"flutterweb/assets/images/tab_xin_default.png": "c3fbb64bca84a39c42bdbe8c0201b2bb",
"flutterweb/assets/images/tab_xin_nomal.png": "ec49fc1281b24bcb2242ee1776b2d101",
"flutterweb/assets/images/bg.png": "4b4cd8ff56987c8b076a14ed8f13cdfd",
"flutterweb/assets/AssetManifest.json": "d5977a493f55bc1de6c0ac8542ab59dd",
"flutterweb/assets/NOTICES": "cfb7cdb0442c9e3b2016ffd08ed9ce6c",
"flutterweb/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"flutterweb/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"flutterweb/assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"flutterweb/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"flutterweb/assets/shaders/ink_sparkle.frag": "b7d0e6693c21bb0facd654469fb89560",
"flutterweb/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"flutterweb/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"flutterweb/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"flutterweb/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"flutterweb/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"index.html": "1a888518cd61a26eefbd54f72dc40453",
"main.dart.js": "12af1dcaa3cf1fadba0ab2174b02951a",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ea4e62a02068a5292eabbbf031936045",
"assets/images/tab_diantai_nomal.png": "e972672b67f789e991fa8b95eb9fea19",
"assets/images/tab_rili_default.png": "995e0d3a6f8909a6a00fe82125c9bdc1",
"assets/images/tab_rili_nomal.png": "810c256db15f2d6ccc0be347c2d25ce8",
"assets/images/2.0x/tab_diantai_nomal.png": "e972672b67f789e991fa8b95eb9fea19",
"assets/images/2.0x/tab_rili_default.png": "995e0d3a6f8909a6a00fe82125c9bdc1",
"assets/images/2.0x/tab_rili_nomal.png": "810c256db15f2d6ccc0be347c2d25ce8",
"assets/images/2.0x/tab_diantai_default.png": "5b41ae326c32a6bbc52d92e54de6947a",
"assets/images/2.0x/tab_xin_default.png": "c3fbb64bca84a39c42bdbe8c0201b2bb",
"assets/images/2.0x/tab_xin_nomal.png": "ec49fc1281b24bcb2242ee1776b2d101",
"assets/images/2.0x/bg.png": "4b4cd8ff56987c8b076a14ed8f13cdfd",
"assets/images/tab_diantai_default.png": "5b41ae326c32a6bbc52d92e54de6947a",
"assets/images/tab_xin_default.png": "c3fbb64bca84a39c42bdbe8c0201b2bb",
"assets/images/tab_xin_nomal.png": "ec49fc1281b24bcb2242ee1776b2d101",
"assets/images/bg.png": "4b4cd8ff56987c8b076a14ed8f13cdfd",
"assets/AssetManifest.json": "d5977a493f55bc1de6c0ac8542ab59dd",
"assets/NOTICES": "cfb7cdb0442c9e3b2016ffd08ed9ce6c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "b7d0e6693c21bb0facd654469fb89560",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
