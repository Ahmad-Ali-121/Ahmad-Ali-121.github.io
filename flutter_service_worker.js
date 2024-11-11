'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4b9ed6ddf4a275b8a9cb25ddd19a19d0",
".git/config": "b7b3befd64ad99eb32f98531b8d9167f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0da032c41ac771218063ad0e37d75237",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "89a11e0b7ab8e5804300c376f0499050",
".git/logs/refs/heads/main": "bf8a12d692089f98ed0477179d0b595d",
".git/logs/refs/remotes/origin/main": "3d89cf27efbbd75fd7eb7df254c53448",
".git/logs/refs/remotes/origin1/main": "ab4f2f1258134d442e52dab31ce4a320",
".git/logs/refs/remotes/origin2/main": "2e2954c27caeb2dfde8817ec0b537e1b",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/ca716d59168462f460babbfa1f6133249e9540": "25c6ada4ce7a4f6b49eaaae9134626d1",
".git/objects/0b/dbc3a38234aa71066e6cc9403eeb511aec282e": "8ab9548c0fb8ab04f5bc170e3f165724",
".git/objects/10/afd979a38a689395cd7d543b4610b9a67c5977": "180a5a32de9c22c006c10b5c297c3eb6",
".git/objects/11/29ad0d863f4bf6078ae5c594bc3a14406ff0b1": "9383a335792c9e8e4ac6a0f281160250",
".git/objects/13/476cd6b3a7cfbd1a8a684d153c439896ebbf06": "28e1dad42aa96a06c78ca14680151230",
".git/objects/1a/10cf62e484f9922fc9c5f2cc99cc0abb6ac54f": "0064a2a6c8649dfbef302ea2b1311432",
".git/objects/20/3823ca08307b7575268b07c1fe77ffe1c829e5": "92625451e48c946f37c965d63365bb36",
".git/objects/21/8cea3eef1d1c4f1ad277efa24b20c0a64f65bd": "4f297cb7ac42fbc73cbed8a74bd7e648",
".git/objects/23/ebeccb5bba44e8fba35aa8814fc88f027ee465": "9f87bbec1f1e6b08640d53e169bb18cb",
".git/objects/2b/9ef40880d845fe265005a3b1f76fa16606f877": "1dcf24ae9b9349b9e1383910595d6a53",
".git/objects/2b/bdd792ce8351d9fe62be68444409586e7b114b": "2ad0e1fa11737120e2b376b0cb9e30e0",
".git/objects/2c/7108992b98576a17b00c60650f8d891634a888": "495a351c7968991d8599b403bb247a11",
".git/objects/30/019a0dae2c8803de80ddaee7c47934d22791dd": "fd449cb2690327f05196914e1084b501",
".git/objects/31/dd8ae23ebe787cd3e16362415c044128c0b234": "3b7611de7ff93938a176c7f50f6261a9",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/34/d7ca27c966a31835b0f9eaeba89f190f4bfd6c": "44f77843fc8824e2ee2ba11f020ad18f",
".git/objects/35/23aa7184b96a06d193af00cecd5a0e6948f94c": "868c81d1a76257a229d60b1fae74c292",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/508c0adbf776b3fe429c644ff42d369e5af644": "a9fb51cae679171f05785b992660ebdf",
".git/objects/44/0afb0a89405e1f91a7c8544b7efa211880dcfe": "05ffd75e6d2f5da18dfb3cd28fb33601",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/cd124db2e937542389f5790ae951eebf464d8c": "fc67bbcef7ddc1f426652caa955487b2",
".git/objects/47/7762ded82ef5c107e00ed48752aab2744e24c5": "4139fc74240a28df8c38b31f2eb293c6",
".git/objects/47/d7f17aacedb74d9d9082436a4f9d40ecb1f51a": "59db92c3d1eaa48bd746a918c9414863",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/7eab4b54d24ee322a7e39a4b1385e25a2c3988": "c84fb6d6a090600b011bc1e03582ff4f",
".git/objects/4e/1cd267220549722fc3298f0d64860abec7c981": "84b2b299d6215857bae137a5fc1fd479",
".git/objects/54/6af118f78aceffdc56b97e11e298acf5772fad": "4a1e7d2b72872a55bb44d9a5284056bb",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/63/f7d5ac81f850c3a71bb9562fca1f12b6232910": "3d2fa900bfdd4093cda657866f7878fb",
".git/objects/66/e018946c1321139ca6c8ed31d53ed38d7343fb": "6408a69fd503a78c395603687a7c8b70",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/3281c31ee690d797c81f6c31197f75129059ca": "5d3f013a197e8b75002c030aa3525c51",
".git/objects/6c/e3e4955a4790d6febaab7cdf9efe95ced87877": "d5f15a2fdee47d4d4124d2656647bf78",
".git/objects/70/4b2a328a6808166b0a66721e971d762f095276": "c52c52d6fcef8b49083b82eba673afbd",
".git/objects/71/aad807dbc574624fbc67787a817570f078e3c8": "d891f090af18e063a9720ad1df20cf70",
".git/objects/72/4cdfee9802568c6ffe8b969a59bf0f37798365": "3b832737bec5346385b018edca215cdf",
".git/objects/77/04e820feedc8b64c4ded9bb46b5acb3b98cad8": "ee9509b6162bf09866e5f1b4fab5e0d6",
".git/objects/77/8699918055899894bca22e12c72888c5662265": "8ba934f74ac0ad591c7be5b4399255d5",
".git/objects/79/38f52df34b597404d0034ae3074064bae5de41": "79f0b48b85bd72bec5b9b27fc604f106",
".git/objects/7b/6aa9ebf716f680f9c54f2ba5b3630b23bf7168": "379bd255068f0b1e771e86a7b1225e74",
".git/objects/7b/a4dd7ac496a4b63757e24be1cdd1e1780a07c4": "3f2c5e5e8eeba6ae34a85a0b4a867f7f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/87/2b8c29bf2016fc223e38f9f7b52d5a1464ea92": "5326f7da0e7ab70336b4cbe291ceaa38",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c456425beb0ee708cd7826d6b5401972264b05": "fb28f7d3959acd123a72a90b14afbcb1",
".git/objects/8d/e4f83b6a501eb2b3ba380f2b86a65d594acf8c": "806f496997d0c2ce42a0a888c247db0f",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/95/33c5e9dee97e93ab8c1f7fbc5cb966abfec684": "773732465b9d84399c137a8e1b02db82",
".git/objects/96/9845e65b4552f25b4b96904bb04c68ddeab1eb": "92c0e2eae86c5b320b9108f2641b1a6f",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/a003a12e63a104c00e9e6a2e7709e05e4f697b": "e0228e2c72942bf9f607110b805fb1d3",
".git/objects/99/b3a5b6ec66be4cec842529a05d39c4c95d2cfc": "b71077bd51a169873a980f671ac3b8e0",
".git/objects/9b/8fdb34338be1dfed4e679836253d4042fed892": "b583e83ab27d87197131853892f7a0a4",
".git/objects/9d/9bc8ff529ff1627bfc110da437ab62a15ae01b": "d947ae07e77a81d8e96e1a4529439763",
".git/objects/a0/5b446fa691a954528bd2aa4112c9fa49163275": "50402def341105707cf75f365b308bdc",
".git/objects/a3/4b960b14dfb9db1274729aef916a3bce068944": "680ae113a0b1fad963dc70b7e7987ca2",
".git/objects/a5/d7ef261d4185234db58baaf3689dd28abb0001": "ddad0c0888eda7f5fe5142cbc203c536",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/a6/7b022758b633881bdadbc706de0cb874354fe3": "bf4672e4e8b393b4680f18b40c3c0eec",
".git/objects/b0/0c684d3ef14be87f0badd2eecc88babc70fea0": "7b995019412294d024b82f3c623c5831",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/719237c6cecaa3e92ec1148cea590ea66bab5b": "9ef91f591c5658ac97032244a895ffee",
".git/objects/b5/379d6e77fbfad10cad0ae3184363f6d1561036": "3080af10963ea38c151b75e2d931108c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/385b57f7d41851acf9f7dab5a39994addf769c": "541ad7adf13a6a0b12f89d2c54f0e27f",
".git/objects/bc/b4c6ae069cb21291fd67d418cc91fa218c498e": "7338c0ad87e7da916af12bad491e9de3",
".git/objects/bc/c4d3c27588a0e1e73345f7b1ae009e1fc3e7b4": "c565b2a2c5a664803c3087b32e8943a3",
".git/objects/be/a6ae1cc5aff5ef3111238782d513fa5b2d28b5": "0016b4bbcebd3221424d9648dbf495e5",
".git/objects/c0/ca0cd6a72990baa3bedf9013484153dacaaade": "46d6d59d34e4af32658e1a9f42d6451a",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/cb/51ce76c96fe15ce91231e3a9b558f7f99e77b2": "58c071f3bbb89093f9223c2daf9696f4",
".git/objects/cd/3e3b2c007152b26510ff8d2d1756726e49edd5": "c87502008374d8d57ac5d56de90acc44",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/70781a459f0c9d6f5549e27e17961227e2fefc": "17c6064d38e046ce273902c2488347c5",
".git/objects/d3/70ed698773ae53dbfddad2a7a97266b545eda4": "ee34e199c8a9f5ea0d8ca096cd727b53",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/4192fb6653daa1fc7fb4016c887bf2731085f4": "e5ece8d1af2a390a05ad762ea13e9e99",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/5d12458a0deae75b278b71dfa966fd4ad192a3": "9cef17bc04024093061aa8ac46f1eb03",
".git/objects/e1/006195a135efaeaf7f3b7a3ab534b4bf7d9623": "ca35935fd3d10b3442e3643c74146189",
".git/objects/e3/9c0fc1d46eb5362c83df348da54812074e2360": "004b969790737848d2b45e026cef1bf5",
".git/objects/ea/99f8990de53d7085fb9fc704ad2b2728a7c700": "c1065f1df5759d7094e0bf053a6a9351",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/a7e5711e8c05efc4a173e768855ad89c8f1ae0": "6a17b5940fab9f2289c85ff430d3a568",
".git/objects/ef/c585f66afe3d604fd315b7a68df4d346bd846f": "156ad9bb7c66f08413dc0b2f758c444d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/7201c580862824a2e8ab4d955c39599fbda1b2": "f883d7a9fb755083dba9084e5d79183f",
".git/objects/fb/f7cb76e2bc83663f74130edcd60a5b45174b5e": "d6159f45fa92183f01cd2bd29e3ebe7b",
".git/objects/fe/08e7307f8e9081d750cb7f58e4faf68c6cb715": "c2e9fc0f9f73e0b870b890c7e0b05da0",
".git/refs/heads/main": "0c9af3b65c80bb5a4b5585ce29502871",
".git/refs/remotes/origin/main": "0c9af3b65c80bb5a4b5585ce29502871",
".git/refs/remotes/origin1/main": "0c9af3b65c80bb5a4b5585ce29502871",
".git/refs/remotes/origin2/main": "0c9af3b65c80bb5a4b5585ce29502871",
"assets/AssetManifest.bin": "2da82290048613d813d11cdf01d566f5",
"assets/AssetManifest.bin.json": "62034575f413e7f934a893cb046cb0ed",
"assets/AssetManifest.json": "1a37e18ca68e67be329730885dac9f5d",
"assets/assets/icons/moon.png": "7dcd7cd8150660b2138e92c19f6e72fc",
"assets/assets/icons/sun.png": "4c95b9d600c250138d9a261bc821e546",
"assets/assets/images/login_image.jpg": "c8df53fea0fb9afa9c5b2a57f1b51fa6",
"assets/assets/images/logo-bg.png": "6ff239303e058682caa2f5364d366fc8",
"assets/assets/images/logo.jpeg": "eb46615b5615ef3f3be62b8ab5aa860d",
"assets/assets/images/register_image.jpg": "0c948b7e37afbf54d907c86fb42e3a5e",
"assets/FontManifest.json": "773645784d48c5a1fb6747893f087114",
"assets/fonts/MaterialIcons-Regular.otf": "2dba08a9bf4a06a8f3e421f36b932df9",
"assets/NOTICES": "2f7d80286b24cb579086a858a26ca2f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "566621e84f49c597c74a9aff2bc80b0d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "d20e00e401b15cc1d7f5751c4a01de38",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "647f8885c7ea85e977c8adeda91318ae",
"/": "647f8885c7ea85e977c8adeda91318ae",
"main.dart.js": "7fa608001fe30188595b0f344dde67be",
"manifest.json": "b50202dbc3181971a9114a731421a6e3",
"version.json": "9279217d53ade1237636f2fac5624233"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
