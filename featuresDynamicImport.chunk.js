(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{112:function(n,e,a){"use strict";a.r(e),e.default='# Dynamic import\n\n**Dynamic package**\n\nUse `import()` to load packages!\n\n```typescript\nasync function mergeObject(source: object, target: object) {\n  const _ = await import("lodash")\n  return _.mergeDeep(source, target)\n}\n```\n\n**Dynamic component**\n\nUse `react-loadable` to load component dynamically.\n\n```typescript\nimport Loadable from "react-loadable"\n\nconst SomePage = Loadable({\n  loader: () => import("../components/some-page"),\n  loading: () => <div>loading..</div>\n})\n\nfunction renderDynamicPage() {\n  return <SomePage />\n}\n```\n\nSee more in [react-loadable](https://github.com/thejameskyle/react-loadable).\n'}}]);