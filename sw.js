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

var BUNDLE_VERSION = 'v1';

var bundleCaches = [
  '/pri-docs/automaticOptimizationAutoCreateProjectFiles.519c.chunk.js',
  '/pri-docs/automaticOptimizationAutoDlls.519c.chunk.js',
  '/pri-docs/automaticOptimizationAutoPickSharedModules.519c.chunk.js',
  '/pri-docs/automaticOptimizationAutoPrefetch.519c.chunk.js',
  '/pri-docs/automaticOptimizationAutomaticCodeSplitting.519c.chunk.js',
  '/pri-docs/automaticOptimizationAutomaticHmr.519c.chunk.js',
  '/pri-docs/automaticOptimizationImportOnDemand.519c.chunk.js',
  '/pri-docs/automaticOptimizationScopeHoist.519c.chunk.js',
  '/pri-docs/automaticOptimizationTreeShaking.519c.chunk.js',
  '/pri-docs/automaticOptimizationTslintSupport.519c.chunk.js',
  '/pri-docs/automaticOptimizationTypescriptSupport.519c.chunk.js',
  '/pri-docs/config.519c.chunk.js',
  '/pri-docs/developmentBuild.519c.chunk.js',
  '/pri-docs/developmentCommands.519c.chunk.js',
  '/pri-docs/developmentContext.519c.chunk.js',
  '/pri-docs/developmentDevService.519c.chunk.js',
  '/pri-docs/developmentProject.519c.chunk.js',
  '/pri-docs/developmentServiceWorker.519c.chunk.js',
  '/pri-docs/developmentTest.519c.chunk.js',
  '/pri-docs/developmentWebUi.519c.chunk.js',
  '/pri-docs/developmentWriteAPlugin.519c.chunk.js',
  '/pri-docs/featuresBuiltInDataStream.519c.chunk.js',
  '/pri-docs/featuresDeployToGithubPages.519c.chunk.js',
  '/pri-docs/featuresDynamicImport.519c.chunk.js',
  '/pri-docs/featuresEnvironmentVariable.519c.chunk.js',
  '/pri-docs/featuresMarkdownSupport.519c.chunk.js',
  '/pri-docs/featuresMock.519c.chunk.js',
  '/pri-docs/featuresPageNotFound.519c.chunk.js',
  '/pri-docs/featuresProjectDashboard.519c.chunk.js',
  '/pri-docs/featuresScssLessCss.519c.chunk.js',
  '/pri-docs/featuresTestAndCodeCoverage.519c.chunk.js',
  '/pri-docs/layoutSupport.519c.chunk.js',
  '/pri-docs/pagesAreRoutes.519c.chunk.js',
  '/pri-docs/pluginsPriPluginDob.519c.chunk.js',
  '/pri-docs/index.519c.chunk.js',
  '/pri-docs/main.519c.js',
  '/pri-docs/main.519c.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(BUNDLE_VERSION).then(cache => {
      return cache.addAll(bundleCaches);
    })
  );
});
