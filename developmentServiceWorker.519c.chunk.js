(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{115:function(e,n,t){"use strict";t.r(n),n.default="# Service worker\n\nYou can use `.serviceWorker` to extend code in service worker.\n\n## pipe\n\n`pipe` to serviceWorker file, wether in local build or prod build.\n\n```typescript\nimport { pri } from 'pri';\n\nexport default (instance: typeof pri) => {\n  instance.serviceWorker.pipe(\n    text => `\n      ${text}\n      self.addEventListener(\"fetch\", event => {\n        // some code here..\n      })\n      `\n  );\n};\n```\n\n## pipeAfterProdBuild\n\n`pipeAfterProdBuild` allow you to extend code to serviceWorker after prod build, so you can use it together with `afterProdBuild`:\n\n```typescript\nimport { pri } from 'pri';\n\nexport default (instance: typeof pri) => {\n  instance.build.afterProdBuild(stats => {\n    instance.serviceWorker.pipeAfterProdBuild(\n      text => `\n      ".concat(text,"\n      // use stats.assetsByChunkName do something..\n    `\n    );\n  });\n};\n```\n")}}]);