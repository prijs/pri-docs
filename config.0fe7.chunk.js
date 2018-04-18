(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,n,t){"use strict";t.r(n),n.default='# Config\n\n> You can also create config files by [project dashboard](../features/project-dashboard) easily!\n\nYou can create these files to config `pri`:\n\n* `./config/config.default.ts`.\n* `./config/config.local.ts`, enable when exec `npm start`.\n* `./config/config.prod.ts`, enable when exec `npm run build`.\n\n`config.local.ts` and `config.prod.ts` have a higher priority than `config.default.ts`\n\n## Example\n\n```typescript\n// ./config/config.default.ts\nimport { ProjectConfig } from \'pri\';\n\nexport default {\n  distDir: \'output\'\n} as ProjectConfig;\n```\n\n## Config options &lt;type&gt; &lt;defaultValue&gt;\n\n### title `string` `"pri"`\n\nTitle for html &lt;title&gt;.\n\n### devPort `number` `[Auto get free port]`\n\nlocalhost port when execute `npm start`. pri will find a free port by default, and for a special case, you can change it to a fixed port:\n\n```js\n{\n  devPort: 9999;\n}\n```\n\n### distDir `string` `"dist"`\n\nDist main file name.\n\n> Only take effect on `npm run build` | `pri build`.\n\n### distFileName `string` `"main"`\n\nDist main file name.\n\n> Only take effect on `npm run build` | `pri build`.\n\n### publicPath `string` `null`\n\nAssets public path. eg: `"https://www.some.com"`, `"https://www.some.com/somePath"`, `"/somePath"`.\n\n* If not set, result: `/<distPath>`.\n* If set /somePath for example, result: `/somePath/<distPath>`.\n* If set some.com for example, result: `https://www.some.com/<distPath>`.\n* If set some.com/somePath for example, result: `https://www.some.com/somePath/<distPath>`.\n\n> Only take effect on `npm run build` | `pri build`.\n\n### baseHref `string` `"/"`\n\nBase href for all pages.\n\nFor example, `/admin` is the root path after deploy, you should set baseHref to `/admin`.\n\nThere is no need to modify the code, routing `/` can automatically maps to `/admin`.\n\nOnly take effect on `npm run build` | `pri build`\n\n### customEnv `{ [key: string]: any }` `undefined`\n\nCustom env. For example:\n\n```typescript\n// ./config/config.default.ts\nexport default {\n  customEnv: {\n    user: \'ascoders\'\n  }\n} as ProjectConfig;\n```\n\nThen you can use it in pages:\n\n```typescript\n// ./pages/index.tsx\nimport { env } from \'pri/client\';\nconsole.log(env.get(\'user\'));\n```\n\n### useHttps `boolean` `true`\n\nWhether use https for dev server and preview server.\n\n### useServiceWorker `boolean` `false`\n\n**Experiment**\n\nWether use service worker.\n\n> Warning: if disable it, mocks, prefetch, serverRender will become invalid.\n\n### prefetchChunks `boolean` `false`\n\n**Experiment**\n\nWether pre fetch all chunks by service worker.\n\n> Warning: depend on service worker, should set useServiceWorker=true first.\n\n### clientServerRender `boolean` `false`\n\n**Experiment**\n\nWether enable client server render by service worker.\n\n> Warning: depend on service worker, should set useServiceWorker=true first.\n'}}]);