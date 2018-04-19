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
var BUNDLE_VERSION = BUNDLE_PREFIX + 'af62';

var bundleCaches = [
  '/pri-docs/404Page.af62.chunk.js',
  '/pri-docs/autoDlls.af62.chunk.js',
  '/pri-docs/autoPickSharedModules.af62.chunk.js',
  '/pri-docs/autoPrefetch.af62.chunk.js',
  '/pri-docs/automaticCodeSplitting.af62.chunk.js',
  '/pri-docs/automaticHmr.af62.chunk.js',
  '/pri-docs/bundleAnalyse.af62.chunk.js',
  '/pri-docs/config.af62.chunk.js',
  '/pri-docs/debugOnline.af62.chunk.js',
  '/pri-docs/deployToBackend.af62.chunk.js',
  '/pri-docs/deployToGithubPages.af62.chunk.js',
  '/pri-docs/dynamicImport.af62.chunk.js',
  '/pri-docs/env.af62.chunk.js',
  '/pri-docs/importOnDemand.af62.chunk.js',
  '/pri-docs/markdownPage.af62.chunk.js',
  '/pri-docs/mockRequest.af62.chunk.js',
  '/pri-docs/pageLayout.af62.chunk.js',
  '/pri-docs/pages.af62.chunk.js',
  '/pri-docs/pluginBuild.af62.chunk.js',
  '/pri-docs/pluginCommands.af62.chunk.js',
  '/pri-docs/pluginContext.af62.chunk.js',
  '/pri-docs/pluginDevService.af62.chunk.js',
  '/pri-docs/pluginProject.af62.chunk.js',
  '/pri-docs/pluginServiceWorker.af62.chunk.js',
  '/pri-docs/pluginSetup.af62.chunk.js',
  '/pri-docs/pluginTest.af62.chunk.js',
  '/pri-docs/pluginWebUi.af62.chunk.js',
  '/pri-docs/priPluginDob.af62.chunk.js',
  '/pri-docs/projectFiles.af62.chunk.js',
  '/pri-docs/scopeHoist.af62.chunk.js',
  '/pri-docs/styles.af62.chunk.js',
  '/pri-docs/test.af62.chunk.js',
  '/pri-docs/treeShaking.af62.chunk.js',
  '/pri-docs/tslint.af62.chunk.js',
  '/pri-docs/typescript.af62.chunk.js',
  '/pri-docs/webui.af62.chunk.js',
  '/pri-docs/index.af62.chunk.js',
  '/pri-docs/datawarActivityDetails.af62.chunk.js',
  '/pri-docs/main.af62.js',
  '/pri-docs/main.af62.css'
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
  if (
    event.request.destination === 'style' ||
    event.request.destination === 'script'
  ) {
    event.respondWith(
      caches
        .match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
        .catch(error => fetch(event.request))
    );
  }
});

var SSR_BUNDLE_PREFIX = '__ssr_bundle__';
var SSR_BUNDLE_VERSION = SSR_BUNDLE_PREFIX + 'af62';

var currentCacheSsrRequest = null;
var currentCacheSsrOriginHtml = null;

/**
 * Delete all bundle caches except current SSR_BUNDLE_VERSION.
 */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName.startsWith(SSR_BUNDLE_PREFIX))
          .filter(cacheName => cacheName !== SSR_BUNDLE_VERSION)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

// Get ssr content from client, and save to cache.
self.addEventListener('message', event => {
  if (
    event.data &&
    event.data.type &&
    event.data.type === 'serverRenderContent'
  ) {
    var responseInit = {
      status: 200,
      statusText: 'OK',
      headers: { 'Content-Type': 'text/html;charset=utf-8' }
    };

    var ssrFlag = '<script>window.enableSsr = true;</script>';
    var injectBodyContent = `<div id="root">${
      event.data.content
    }</div> \n ${ssrFlag} \n`;
    var htmlAddContent = currentCacheSsrOriginHtml.replace(
      /(\<body\>)/g,
      `$1${injectBodyContent}`
    );

    const ssrResponse = new Response(htmlAddContent, responseInit);

    caches.open(SSR_BUNDLE_VERSION).then(cache => {
      cache.put(currentCacheSsrRequest, ssrResponse);
    });
  }
});

// Replace entry html to ssr result.
self.addEventListener('fetch', event => {
  if (
    event.request.mode === 'navigate' &&
    event.request.method === 'GET' &&
    event.request.headers.get('accept').includes('text/html')
  ) {
    event.respondWith(
      caches.open(SSR_BUNDLE_VERSION).then(cache => {
        return cache.match(event.request).then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request).then(response => {
            const newResponse = response.clone();
            return newResponse
              .text()
              .then(text => {
                currentCacheSsrRequest = event.request;
                currentCacheSsrOriginHtml = text;

                // Tell client, i want ssrContent!
                setTimeout(() => {
                  self.clients.matchAll().then(clients => {
                    if (!clients || !clients.length) {
                      return;
                    }
                    clients.forEach(client => {
                      client.postMessage({
                        type: 'getServerRenderContent',
                        pathname: new URL(event.request.url, location).pathname
                      });
                    });
                  });
                }, 1000);

                return response;
              })
              .catch(err => response);
          });
        });
      })
    );
  }
});
