(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{154:function(e,n,t){"use strict";t.r(n),n.default='# Pages are routes\n\n> You can also create pages by [project dashboard](../features/project-dashboard) easily!\n\n## Home page\n\nPopulate `./src/pages/index.tsx` inside your project:\n\n```tsx\nimport * as React from "react"\nexport default () => <div>Hello pri!</div>\n```\n\nThen this home page will route to `/`.\n\n## Other pages\n\nFor example, populate `./src/pages/some-one/index.tsx` inside your project:\n\n```tsx\nimport * as React from "react"\nexport default () => <div>Some one.</div>\n```\n\nThen this page will route to `/some-one`.\n\n## Router rules\n\nRoutes will be automatically created by the file\'s path in `./src/pages/**/index.tsx`.\n\n`index.tsx` will be read as router under each folders, The folder path is the URL path.\n\nFor example, file `./src/pages/user/about/index.tsx` will be found in route `/user/about`.\n\n## Layout\n\nSee [Layouts support](layout-support).\n'}}]);