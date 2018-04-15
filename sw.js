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
var BUNDLE_VERSION = BUNDLE_PREFIX + 'abef';

var bundleCaches = [
  '/pri-docs/automaticOptimizationAutoCreateProjectFiles.abef.chunk.js',
  '/pri-docs/automaticOptimizationAutoDlls.abef.chunk.js',
  '/pri-docs/automaticOptimizationAutoPickSharedModules.abef.chunk.js',
  '/pri-docs/automaticOptimizationAutoPrefetch.abef.chunk.js',
  '/pri-docs/automaticOptimizationAutomaticCodeSplitting.abef.chunk.js',
  '/pri-docs/automaticOptimizationAutomaticHmr.abef.chunk.js',
  '/pri-docs/automaticOptimizationImportOnDemand.abef.chunk.js',
  '/pri-docs/automaticOptimizationScopeHoist.abef.chunk.js',
  '/pri-docs/automaticOptimizationTreeShaking.abef.chunk.js',
  '/pri-docs/automaticOptimizationTslintSupport.abef.chunk.js',
  '/pri-docs/automaticOptimizationTypescriptSupport.abef.chunk.js',
  '/pri-docs/config.abef.chunk.js',
  '/pri-docs/developmentBuild.abef.chunk.js',
  '/pri-docs/developmentCommands.abef.chunk.js',
  '/pri-docs/developmentContext.abef.chunk.js',
  '/pri-docs/developmentDevService.abef.chunk.js',
  '/pri-docs/developmentProject.abef.chunk.js',
  '/pri-docs/developmentServiceWorker.abef.chunk.js',
  '/pri-docs/developmentTest.abef.chunk.js',
  '/pri-docs/developmentWebUi.abef.chunk.js',
  '/pri-docs/developmentWriteAPlugin.abef.chunk.js',
  '/pri-docs/featuresBuiltInDataStream.abef.chunk.js',
  '/pri-docs/featuresDeployToGithubPages.abef.chunk.js',
  '/pri-docs/featuresDynamicImport.abef.chunk.js',
  '/pri-docs/featuresEnvironmentVariable.abef.chunk.js',
  '/pri-docs/featuresMarkdownSupport.abef.chunk.js',
  '/pri-docs/featuresMock.abef.chunk.js',
  '/pri-docs/featuresPageNotFound.abef.chunk.js',
  '/pri-docs/featuresProjectDashboard.abef.chunk.js',
  '/pri-docs/featuresScssLessCss.abef.chunk.js',
  '/pri-docs/featuresTestAndCodeCoverage.abef.chunk.js',
  '/pri-docs/layoutSupport.abef.chunk.js',
  '/pri-docs/pagesAreRoutes.abef.chunk.js',
  '/pri-docs/pluginsPriPluginDob.abef.chunk.js',
  '/pri-docs/index.abef.chunk.js',
  '/pri-docs/main.abef.js',
  '/pri-docs/main.abef.css'
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
