(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{118:function(e,n,a){"use strict";a.r(n),n.default='# Layout support\n\n> You can also create layout by [project dashboard](features/project-dashboard) easily!\n\nPopulate `./src/layouts/index.tsx` inside your project:\n\n```tsx\nimport * as React from "react"\n\nexport default (props: React.Props<any>) => (\n  <div>\n    <p>Layout header</p>\n    {props.children}\n  </div>\n)\n```\n\nThis file will automatically become the layout file, and `props.children` are the content of the files in `./src/pages`\n'}}]);