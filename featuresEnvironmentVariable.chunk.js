(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{121:function(n,e,i){"use strict";i.r(e),e.default='# Environment variable\n\nYou can use environment variable from `pri/client`:\n\n```typescript\n// ./src/pages/index.tsx\nimport { env } from "pri/client"\n\nif (env.isLocal) {\n  console.log("I\'m running in local now!")\n}\n\nif (env.isProd) {\n  console.log("I\'m running in production now!")\n}\n\nconsole.log("Custom env", env.get("theme"))\n```\n\n`pri/client` has some built-in env, like `isLocal` and `isProd`.\n\nWhen execute `npm start`, `env.isLocal === true`, when execute `npm run build` or `npm run preview`, `env.isProd === true`.\n\nYou can also set your own custom env variable in config files, and get them by using `env.get()`.\n\n```typescript\n// ./src/config/config.default.ts\nimport { ProjectConfig } from "pri/client"\n\nexport default {\n  env: {\n    theme: "One Dark"\n  }\n} as ProjectConfig\n```\n\n* After running `npm start`, `env.get()` will get from the map merged by `config.local.ts` and `config.default.ts`\n* After running `npm run build`, `env.get()` will get from the map merged by `config.prod.ts` and `config.default.ts`\n'}}]);