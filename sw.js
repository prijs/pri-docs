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
var BUNDLE_VERSION = BUNDLE_PREFIX + '0fe7';

var bundleCaches = [
  '/pri-docs/404Page.0fe7.chunk.js',
  '/pri-docs/autoDlls.0fe7.chunk.js',
  '/pri-docs/autoPickSharedModules.0fe7.chunk.js',
  '/pri-docs/autoPrefetch.0fe7.chunk.js',
  '/pri-docs/automaticCodeSplitting.0fe7.chunk.js',
  '/pri-docs/automaticHmr.0fe7.chunk.js',
  '/pri-docs/config.0fe7.chunk.js',
  '/pri-docs/deployToGithubPages.0fe7.chunk.js',
  '/pri-docs/dynamicImport.0fe7.chunk.js',
  '/pri-docs/env.0fe7.chunk.js',
  '/pri-docs/importOnDemand.0fe7.chunk.js',
  '/pri-docs/markdownPage.0fe7.chunk.js',
  '/pri-docs/mockRequest.0fe7.chunk.js',
  '/pri-docs/pageLayout.0fe7.chunk.js',
  '/pri-docs/pages.0fe7.chunk.js',
  '/pri-docs/pluginBuild.0fe7.chunk.js',
  '/pri-docs/pluginCommands.0fe7.chunk.js',
  '/pri-docs/pluginContext.0fe7.chunk.js',
  '/pri-docs/pluginDevService.0fe7.chunk.js',
  '/pri-docs/pluginProject.0fe7.chunk.js',
  '/pri-docs/pluginServiceWorker.0fe7.chunk.js',
  '/pri-docs/pluginSetup.0fe7.chunk.js',
  '/pri-docs/pluginTest.0fe7.chunk.js',
  '/pri-docs/pluginWebUi.0fe7.chunk.js',
  '/pri-docs/priPluginDob.0fe7.chunk.js',
  '/pri-docs/projectFiles.0fe7.chunk.js',
  '/pri-docs/scopeHoist.0fe7.chunk.js',
  '/pri-docs/styles.0fe7.chunk.js',
  '/pri-docs/test.0fe7.chunk.js',
  '/pri-docs/treeShaking.0fe7.chunk.js',
  '/pri-docs/tslint.0fe7.chunk.js',
  '/pri-docs/typescript.0fe7.chunk.js',
  '/pri-docs/webui.0fe7.chunk.js',
  '/pri-docs/index.0fe7.chunk.js',
  '/pri-docs/main.0fe7.js',
  '/pri-docs/main.0fe7.css'
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
var SSR_BUNDLE_VERSION = SSR_BUNDLE_PREFIX + '0fe7';

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

    var textAddContent = currentCacheSsrOriginHtml.replace(
      /(\<div\sid\=\"root\"\>)(\<\/div\>)/g,
      `$1${event.data.content}$2`
    );
    var textAddScript = textAddContent.replace(
      /(\<script\sid\=\"script-before\"\>)(\<\/script\>)/g,
      `$1\nwindow.enableSsr = true;\n$2`
    );

    const ssrResponse = new Response(textAddScript, responseInit);

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
