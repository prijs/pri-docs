(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{124:function(e,n,r){"use strict";r.r(n),n.default="# Service worker\n\nYou can use `.serviceWorker` to extend code in service worker.\n\n## pipe\n\n`pipe` to serviceWorker file, wether in local build or prod build. **`serviceWorker.pipe` must be wrapped in `onAnalyseProject`.**\n\n```typescript\nimport { pri } from 'pri';\n\nexport default (instance: typeof pri) => {\n  instance.project.onAnalyseProject(() => {\n    instance.serviceWorker.pipe(\n      text => `\n      ${text}\n      self.addEventListener(\"fetch\", event => {\n        // some code here..\n      })\n      `\n    );\n  });\n};\n```\n\n## pipeAfterProdBuild\n\n`pipeAfterProdBuild` allow you to extend code to serviceWorker after prod build, **`serviceWorker.pipeAfterProdBuild` must be wrapped in `afterProdBuild`.**\n\n```typescript\nimport { pri } from 'pri';\n\nexport default (instance: typeof pri) => {\n  instance.build.afterProdBuild(stats => {\n    instance.serviceWorker.pipeAfterProdBuild(\n      text => `\n      ${text}\n      // use stats.assetsByChunkName do something..\n    `\n    );\n  });\n};\n```\n"}}]);