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
var BUNDLE_VERSION = BUNDLE_PREFIX + '243c';

var bundleCaches = [
  '/pri-docs/automaticOptimizationAutoCreateProjectFiles.243c.chunk.js',
  '/pri-docs/automaticOptimizationAutoDlls.243c.chunk.js',
  '/pri-docs/automaticOptimizationAutoPickSharedModules.243c.chunk.js',
  '/pri-docs/automaticOptimizationAutoPrefetch.243c.chunk.js',
  '/pri-docs/automaticOptimizationAutomaticCodeSplitting.243c.chunk.js',
  '/pri-docs/automaticOptimizationAutomaticHmr.243c.chunk.js',
  '/pri-docs/automaticOptimizationImportOnDemand.243c.chunk.js',
  '/pri-docs/automaticOptimizationScopeHoist.243c.chunk.js',
  '/pri-docs/automaticOptimizationTreeShaking.243c.chunk.js',
  '/pri-docs/automaticOptimizationTslintSupport.243c.chunk.js',
  '/pri-docs/automaticOptimizationTypescriptSupport.243c.chunk.js',
  '/pri-docs/config.243c.chunk.js',
  '/pri-docs/developmentBuild.243c.chunk.js',
  '/pri-docs/developmentCommands.243c.chunk.js',
  '/pri-docs/developmentContext.243c.chunk.js',
  '/pri-docs/developmentDevService.243c.chunk.js',
  '/pri-docs/developmentProject.243c.chunk.js',
  '/pri-docs/developmentServiceWorker.243c.chunk.js',
  '/pri-docs/developmentTest.243c.chunk.js',
  '/pri-docs/developmentWebUi.243c.chunk.js',
  '/pri-docs/developmentWriteAPlugin.243c.chunk.js',
  '/pri-docs/featuresBuiltInDataStream.243c.chunk.js',
  '/pri-docs/featuresDeployToGithubPages.243c.chunk.js',
  '/pri-docs/featuresDynamicImport.243c.chunk.js',
  '/pri-docs/featuresEnvironmentVariable.243c.chunk.js',
  '/pri-docs/featuresMarkdownSupport.243c.chunk.js',
  '/pri-docs/featuresMock.243c.chunk.js',
  '/pri-docs/featuresPageNotFound.243c.chunk.js',
  '/pri-docs/featuresProjectDashboard.243c.chunk.js',
  '/pri-docs/featuresScssLessCss.243c.chunk.js',
  '/pri-docs/featuresTestAndCodeCoverage.243c.chunk.js',
  '/pri-docs/layoutSupport.243c.chunk.js',
  '/pri-docs/pagesAreRoutes.243c.chunk.js',
  '/pri-docs/pluginsPriPluginDob.243c.chunk.js',
  '/pri-docs/index.243c.chunk.js',
  '/pri-docs/main.243c.js',
  '/pri-docs/main.243c.css'
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
