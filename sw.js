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
var BUNDLE_VERSION = BUNDLE_PREFIX + 'v1';

var bundleCaches = [
  '/pri-docs/automaticOptimizationAutoCreateProjectFiles.ca39.chunk.js',
  '/pri-docs/automaticOptimizationAutoDlls.ca39.chunk.js',
  '/pri-docs/automaticOptimizationAutoPickSharedModules.ca39.chunk.js',
  '/pri-docs/automaticOptimizationAutoPrefetch.ca39.chunk.js',
  '/pri-docs/automaticOptimizationAutomaticCodeSplitting.ca39.chunk.js',
  '/pri-docs/automaticOptimizationAutomaticHmr.ca39.chunk.js',
  '/pri-docs/automaticOptimizationImportOnDemand.ca39.chunk.js',
  '/pri-docs/automaticOptimizationScopeHoist.ca39.chunk.js',
  '/pri-docs/automaticOptimizationTreeShaking.ca39.chunk.js',
  '/pri-docs/automaticOptimizationTslintSupport.ca39.chunk.js',
  '/pri-docs/automaticOptimizationTypescriptSupport.ca39.chunk.js',
  '/pri-docs/config.ca39.chunk.js',
  '/pri-docs/developmentBuild.ca39.chunk.js',
  '/pri-docs/developmentCommands.ca39.chunk.js',
  '/pri-docs/developmentContext.ca39.chunk.js',
  '/pri-docs/developmentDevService.ca39.chunk.js',
  '/pri-docs/developmentProject.ca39.chunk.js',
  '/pri-docs/developmentServiceWorker.ca39.chunk.js',
  '/pri-docs/developmentTest.ca39.chunk.js',
  '/pri-docs/developmentWebUi.ca39.chunk.js',
  '/pri-docs/developmentWriteAPlugin.ca39.chunk.js',
  '/pri-docs/featuresBuiltInDataStream.ca39.chunk.js',
  '/pri-docs/featuresDeployToGithubPages.ca39.chunk.js',
  '/pri-docs/featuresDynamicImport.ca39.chunk.js',
  '/pri-docs/featuresEnvironmentVariable.ca39.chunk.js',
  '/pri-docs/featuresMarkdownSupport.ca39.chunk.js',
  '/pri-docs/featuresMock.ca39.chunk.js',
  '/pri-docs/featuresPageNotFound.ca39.chunk.js',
  '/pri-docs/featuresProjectDashboard.ca39.chunk.js',
  '/pri-docs/featuresScssLessCss.ca39.chunk.js',
  '/pri-docs/featuresTestAndCodeCoverage.ca39.chunk.js',
  '/pri-docs/layoutSupport.ca39.chunk.js',
  '/pri-docs/pagesAreRoutes.ca39.chunk.js',
  '/pri-docs/pluginsPriPluginDob.ca39.chunk.js',
  '/pri-docs/index.ca39.chunk.js',
  '/pri-docs/main.ca39.js',
  '/pri-docs/main.ca39.css'
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
