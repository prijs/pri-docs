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
var BUNDLE_VERSION = BUNDLE_PREFIX + '6920';

var bundleCaches = [
  '/pri-docs/automaticOptimizationAutoCreateProjectFiles.6920.chunk.js',
  '/pri-docs/automaticOptimizationAutoDlls.6920.chunk.js',
  '/pri-docs/automaticOptimizationAutoPickSharedModules.6920.chunk.js',
  '/pri-docs/automaticOptimizationAutoPrefetch.6920.chunk.js',
  '/pri-docs/automaticOptimizationAutomaticCodeSplitting.6920.chunk.js',
  '/pri-docs/automaticOptimizationAutomaticHmr.6920.chunk.js',
  '/pri-docs/automaticOptimizationImportOnDemand.6920.chunk.js',
  '/pri-docs/automaticOptimizationScopeHoist.6920.chunk.js',
  '/pri-docs/automaticOptimizationTreeShaking.6920.chunk.js',
  '/pri-docs/automaticOptimizationTslintSupport.6920.chunk.js',
  '/pri-docs/automaticOptimizationTypescriptSupport.6920.chunk.js',
  '/pri-docs/config.6920.chunk.js',
  '/pri-docs/developmentBuild.6920.chunk.js',
  '/pri-docs/developmentCommands.6920.chunk.js',
  '/pri-docs/developmentContext.6920.chunk.js',
  '/pri-docs/developmentDevService.6920.chunk.js',
  '/pri-docs/developmentProject.6920.chunk.js',
  '/pri-docs/developmentServiceWorker.6920.chunk.js',
  '/pri-docs/developmentTest.6920.chunk.js',
  '/pri-docs/developmentWebUi.6920.chunk.js',
  '/pri-docs/developmentWriteAPlugin.6920.chunk.js',
  '/pri-docs/featuresBuiltInDataStream.6920.chunk.js',
  '/pri-docs/featuresDeployToGithubPages.6920.chunk.js',
  '/pri-docs/featuresDynamicImport.6920.chunk.js',
  '/pri-docs/featuresEnvironmentVariable.6920.chunk.js',
  '/pri-docs/featuresMarkdownSupport.6920.chunk.js',
  '/pri-docs/featuresMock.6920.chunk.js',
  '/pri-docs/featuresPageNotFound.6920.chunk.js',
  '/pri-docs/featuresProjectDashboard.6920.chunk.js',
  '/pri-docs/featuresScssLessCss.6920.chunk.js',
  '/pri-docs/featuresTestAndCodeCoverage.6920.chunk.js',
  '/pri-docs/layoutSupport.6920.chunk.js',
  '/pri-docs/pagesAreRoutes.6920.chunk.js',
  '/pri-docs/pluginsPriPluginDob.6920.chunk.js',
  '/pri-docs/index.6920.chunk.js',
  '/pri-docs/main.6920.js',
  '/pri-docs/main.6920.css'
];

self.addEventListener('install', event => {
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
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName.startsWith(BUNDLE_PREFIX))
          .filter(cacheName => cacheName != BUNDLE_VERSION)
          .map(cacheName => caches.delete(cacheName))
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
