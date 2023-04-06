'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0dc02b34aea2152979cff09890ae1857",
"index.html": "a54a5be2dd75f8bcb345063513ba9167",
"/": "a54a5be2dd75f8bcb345063513ba9167",
"main.dart.js": "b0a52bea9dcf1f19be790609595a14c4",
"Readme": "6f5902ac237024bdd0c176cb93063dc4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ea4e62a02068a5292eabbbf031936045",
".git/config": "11153870e05a9a459aef13f902c43efc",
".git/objects/32/72a5443e10879a4c3200a2cd3ee818b0eb5de2": "cb51c9547ab413644f3980ec8b94abd7",
".git/objects/33/09518b067085bac2c9410009b8b72e373e03f2": "3ff7342c9cc22ac76174ab0aa23a0b24",
".git/objects/b3/cf84303ccb22a147db0f315b76e3e0e766efad": "3d5b0cd287614cd03ae031f5640952a3",
".git/objects/a2/5b8e111402a339fa72055da9a313e68313cd0c": "28dbc379af442ca778f22ddcf772310b",
".git/objects/c0/7858e43245762fd3beca22ba321fcd7ccb3406": "ef2e57e86aef0f8a60aa646b11d0d14c",
".git/objects/pack/pack-630bd9974600631160bfd0888626455a85345e09.pack": "e0508c7927f2efc9f771a4f0c647612e",
".git/objects/pack/pack-630bd9974600631160bfd0888626455a85345e09.idx": "ce22bcacdc05bcc49e466bdeb309c421",
".git/objects/1a/5eda4c32949e3574d13aad504b30db5521a46e": "d9fc8d90ffaa11bfa579ef13a0970382",
".git/objects/72/9bea5d64f9911cef9ad6d4d6bcc39f7eab4b48": "00fdb24ee380c2e0c8fc190b3057e382",
".git/objects/c3/c194eb8416b67d3e831e13fded1d161e9063e3": "d9186eb2fec9eaae431facea4b5c2389",
".git/objects/ea/e116abb897fbf44b73138513114b91ec3f42fd": "366bb43c37de793a59599ee23da928c0",
".git/objects/c2/53d85c9db0ea043b24b7a7ff265b97fbad5e35": "0a391dd0be529ec2fac4340e0e6a1ca5",
".git/objects/83/74ef4fe38cacf3ba0636e42260589339d5b889": "8d09ac2e6230ff642b46a32abd80f653",
".git/objects/8c/36b279bc820d8817a4d9ad67cbf087e79b50f7": "c2bec1c0d6979491f0233c6a05971a90",
".git/objects/8c/4740c443948bc5298819b8ea2dc78abf4fb33b": "9f6293a4afbca468544bc759e0d071ae",
".git/objects/8c/8fa5cae96b7e15f5f04a1b585f810cef7c2f20": "aa11a4f4dc2cd7412272c1af60b79ac7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b73cf00d8de7b25af422d0437068539c",
".git/logs/refs/heads/main": "b73cf00d8de7b25af422d0437068539c",
".git/logs/refs/remotes/origin/HEAD": "06c9ab1740e70c1426b3fe2f0c808529",
".git/logs/refs/remotes/origin/main": "d04c23db7f095f5c2c5f7782b5d2d44d",
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
".git/refs/heads/main": "4937fb41adbe30c370c5bff7df675fdf",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "4937fb41adbe30c370c5bff7df675fdf",
".git/index": "f51c76dcd3f7e0fe3f083d97b0f2752e",
".git/packed-refs": "0dcf1d56db89164a9603d05c6572ca5c",
".git/COMMIT_EDITMSG": "fe4c174cecf030f812e5997586df06b5",
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
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b"
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
