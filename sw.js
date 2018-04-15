self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  self.clients.claim();
});

// Get mock list start

var allMocks = {};
var mockList = [];

Object.keys(allMocks).forEach(mockKey => {
  var mock = allMocks[mockKey];
  mockList.push({ url: new URL(mockKey, location), value: mock });
});
// Get mock list end

self.addEventListener('fetch', event => {
  var requestUrl = new URL(event.request.url);

  const mockInfo = mockList.find(
    mock =>
      requestUrl.hostname === mock.url.hostname &&
      requestUrl.pathname === mock.url.pathname
  );

  if (mockInfo) {
    var responseInit = {
      status: 200,
      statusText: 'OK',
      headers: { 'Content-Type': 'application/json' }
    };

    var responseBody =
      typeof mockInfo.value === 'function' ? mockInfo.value() : mockInfo.value;

    var mockResponse = new Response(JSON.stringify(responseBody), responseInit);

    event.respondWith(mockResponse);
  }
});

var BUNDLE_PREFIX = '__bundle__';
var BUNDLE_VERSION = BUNDLE_PREFIX + '17cb';

var bundleCaches = [
  '/pri-docs/automaticOptimizationAutoCreateProjectFiles.17cb.chunk.js',
  '/pri-docs/automaticOptimizationAutoDlls.17cb.chunk.js',
  '/pri-docs/automaticOptimizationAutoPickSharedModules.17cb.chunk.js',
  '/pri-docs/automaticOptimizationAutoPrefetch.17cb.chunk.js',
  '/pri-docs/automaticOptimizationAutomaticCodeSplitting.17cb.chunk.js',
  '/pri-docs/automaticOptimizationAutomaticHmr.17cb.chunk.js',
  '/pri-docs/automaticOptimizationImportOnDemand.17cb.chunk.js',
  '/pri-docs/automaticOptimizationScopeHoist.17cb.chunk.js',
  '/pri-docs/automaticOptimizationTreeShaking.17cb.chunk.js',
  '/pri-docs/automaticOptimizationTslintSupport.17cb.chunk.js',
  '/pri-docs/automaticOptimizationTypescriptSupport.17cb.chunk.js',
  '/pri-docs/config.17cb.chunk.js',
  '/pri-docs/developmentBuild.17cb.chunk.js',
  '/pri-docs/developmentCommands.17cb.chunk.js',
  '/pri-docs/developmentContext.17cb.chunk.js',
  '/pri-docs/developmentDevService.17cb.chunk.js',
  '/pri-docs/developmentProject.17cb.chunk.js',
  '/pri-docs/developmentServiceWorker.17cb.chunk.js',
  '/pri-docs/developmentTest.17cb.chunk.js',
  '/pri-docs/developmentWebUi.17cb.chunk.js',
  '/pri-docs/developmentWriteAPlugin.17cb.chunk.js',
  '/pri-docs/featuresBuiltInDataStream.17cb.chunk.js',
  '/pri-docs/featuresDeployToGithubPages.17cb.chunk.js',
  '/pri-docs/featuresDynamicImport.17cb.chunk.js',
  '/pri-docs/featuresEnvironmentVariable.17cb.chunk.js',
  '/pri-docs/featuresMarkdownSupport.17cb.chunk.js',
  '/pri-docs/featuresMock.17cb.chunk.js',
  '/pri-docs/featuresPageNotFound.17cb.chunk.js',
  '/pri-docs/featuresProjectDashboard.17cb.chunk.js',
  '/pri-docs/featuresScssLessCss.17cb.chunk.js',
  '/pri-docs/featuresTestAndCodeCoverage.17cb.chunk.js',
  '/pri-docs/layoutSupport.17cb.chunk.js',
  '/pri-docs/pagesAreRoutes.17cb.chunk.js',
  '/pri-docs/pluginsPriPluginDob.17cb.chunk.js',
  '/pri-docs/index.17cb.chunk.js',
  '/pri-docs/main.17cb.js',
  '/pri-docs/main.17cb.css'
];

self.addEventListener('install', event => {
  console.log('install');
  event.waitUntil(
    caches.open(BUNDLE_VERSION).then(cache => {
      return cache.addAll(bundleCaches);
    })
  );
});

/**
 * Delete all bundle caches except current BUNDLE_VERSION.
 */
self.addEventListener('activate', event => {
  console.log('activate');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName.startsWith(BUNDLE_PREFIX))
          .filter(cacheName => cacheName !== BUNDLE_VERSION)
          .map(cacheName => {
            console.log('delete cacheName');
            caches.delete(cacheName);
          })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
