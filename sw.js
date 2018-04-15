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
var BUNDLE_VERSION = BUNDLE_PREFIX + '3786';

var bundleCaches = [
  '/pri-docs/automaticOptimizationAutoCreateProjectFiles.3786.chunk.js',
  '/pri-docs/automaticOptimizationAutoDlls.3786.chunk.js',
  '/pri-docs/automaticOptimizationAutoPickSharedModules.3786.chunk.js',
  '/pri-docs/automaticOptimizationAutoPrefetch.3786.chunk.js',
  '/pri-docs/automaticOptimizationAutomaticCodeSplitting.3786.chunk.js',
  '/pri-docs/automaticOptimizationAutomaticHmr.3786.chunk.js',
  '/pri-docs/automaticOptimizationImportOnDemand.3786.chunk.js',
  '/pri-docs/automaticOptimizationScopeHoist.3786.chunk.js',
  '/pri-docs/automaticOptimizationTreeShaking.3786.chunk.js',
  '/pri-docs/automaticOptimizationTslintSupport.3786.chunk.js',
  '/pri-docs/automaticOptimizationTypescriptSupport.3786.chunk.js',
  '/pri-docs/config.3786.chunk.js',
  '/pri-docs/developmentBuild.3786.chunk.js',
  '/pri-docs/developmentCommands.3786.chunk.js',
  '/pri-docs/developmentContext.3786.chunk.js',
  '/pri-docs/developmentDevService.3786.chunk.js',
  '/pri-docs/developmentProject.3786.chunk.js',
  '/pri-docs/developmentServiceWorker.3786.chunk.js',
  '/pri-docs/developmentTest.3786.chunk.js',
  '/pri-docs/developmentWebUi.3786.chunk.js',
  '/pri-docs/developmentWriteAPlugin.3786.chunk.js',
  '/pri-docs/featuresBuiltInDataStream.3786.chunk.js',
  '/pri-docs/featuresDeployToGithubPages.3786.chunk.js',
  '/pri-docs/featuresDynamicImport.3786.chunk.js',
  '/pri-docs/featuresEnvironmentVariable.3786.chunk.js',
  '/pri-docs/featuresMarkdownSupport.3786.chunk.js',
  '/pri-docs/featuresMock.3786.chunk.js',
  '/pri-docs/featuresPageNotFound.3786.chunk.js',
  '/pri-docs/featuresProjectDashboard.3786.chunk.js',
  '/pri-docs/featuresScssLessCss.3786.chunk.js',
  '/pri-docs/featuresTestAndCodeCoverage.3786.chunk.js',
  '/pri-docs/layoutSupport.3786.chunk.js',
  '/pri-docs/pagesAreRoutes.3786.chunk.js',
  '/pri-docs/pluginsPriPluginDob.3786.chunk.js',
  '/pri-docs/index.3786.chunk.js',
  '/pri-docs/main.3786.js',
  '/pri-docs/main.3786.css'
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
          .filter(cacheName => cacheName !== BUNDLE_VERSION)
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
