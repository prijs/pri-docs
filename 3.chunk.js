(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(e,n,o){"use strict";o.r(n),n.default='# Auto pick shared modules\n\n## Isolated dependence\n\nIf `jquery` and `lodash` are either dependent by each files like following code:\n\n```typescript\n// src/pages/foo.tsx\nimport * as $ from "jquery"\n\n// src/pages/bar.tsx\nimport * as _ from "lodash"\n```\n\n`JQuery` will be packaged into the `foo.tsx`, and `lodash` will be packaged into the `bar.tsx`.\n\n## Shared dependence\n\nIf `jquery` is both dependent by each files like following code:\n\n```typescript\n// src/pages/foo.tsx\nimport * as $ from "jquery"\n\n// src/pages/bar.tsx\nimport * as $ from "jquery"\n```\n\nNeither `foo.tsx` nor `bar.tsx` will package `jquery`, instand, `jquery` will be packaged into `chunk` file.\n'}}]);