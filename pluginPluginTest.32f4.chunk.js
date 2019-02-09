(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[10],{319:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=t(0),s=(a=r)&&a.__esModule?a:{default:a};var c=s.default.createContext({}),p=c.Provider,l=c.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,a=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["components"]);return s.default.createElement(l,null,function(n){return s.default.createElement(e,o({components:t||n},a))})}};n.default=function(e){var n=e.components,t=e.children;return s.default.createElement(p,{value:n},t)}},320:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(321);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=t(319);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},321:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),s=t(0),c=(a=s)&&a.__esModule?a:{default:a},p=t(319);var l={inlineCode:"code",wrapper:"div"},m=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,s.Component),r(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,a=e.props,r=void 0===a?{}:a,s=e.children,p=e.components,m=void 0===p?{}:p,i=e.Layout,u=e.layoutProps,f=m[t+"."+n]||m[n]||l[n]||n;return i?c.default.createElement(i,o({components:m},u),c.default.createElement(f,r,s)):c.default.createElement(f,r,s)}}]),n}();n.default=(0,p.withMDXComponents)(m)},363:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return y});var a=t(30),o=t.n(a),r=t(5),s=t.n(r),c=t(7),p=t.n(c),l=t(8),m=t.n(l),i=t(9),u=t.n(i),f=t(10),d=t.n(f),g=t(0),h=t.n(g),v=t(320),y=function(e){function n(e){var t;return s()(this,n),(t=m()(this,u()(n).call(this,e))).layout=null,t}return d()(n,e),p()(n,[{key:"render",value:function(){var e=this.props,n=e.components;o()(e,["components"]);return h.a.createElement(v.MDXTag,{name:"wrapper",components:n},h.a.createElement(v.MDXTag,{name:"h1",components:n},"Plugin test"),h.a.createElement(v.MDXTag,{name:"p",components:n},"It's recommended to write plug-ins in units of function. For example judege whether there is a ",h.a.createElement(v.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"components")," folder:"),h.a.createElement(v.MDXTag,{name:"p",components:n},h.a.createElement(v.MDXTag,{name:"strong",components:n,parentName:"p"},h.a.createElement(v.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"src/methods.ts"))),h.a.createElement(v.MDXTag,{name:"pre",components:n},h.a.createElement(v.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},'export function judgeHasComponents(projectRootPath: string, files: path.ParsedPath[]) {\n  return files.some(file => {\n    const relativePath = path.relative(projectRootPath, path.join(file.dir, file.name))\n    if (relativePath.startsWith("src/components")) {\n      return true\n    }\n    return false\n  })\n}\n')),h.a.createElement(v.MDXTag,{name:"p",components:n},"So we can test it completely:"),h.a.createElement(v.MDXTag,{name:"p",components:n},h.a.createElement(v.MDXTag,{name:"strong",components:n,parentName:"p"},h.a.createElement(v.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"tests/index.ts"))),h.a.createElement(v.MDXTag,{name:"pre",components:n},h.a.createElement(v.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},'test("Multiple files", t => {\n  const relativeProjectFiles = [\n    "src/components/index.tsx",\n    "src/components/button/index.tsx",\n    "src/components/select/index.tsx"\n  ]\n  t.true(judgeHasComponents(testProjectRootPath, testFilePaths(relativeProjectFiles)))\n})\n')),h.a.createElement(v.MDXTag,{name:"p",components:n},"And we can safely use this ",h.a.createElement(v.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"judgeHasComponents")," function:"),h.a.createElement(v.MDXTag,{name:"p",components:n},h.a.createElement(v.MDXTag,{name:"strong",components:n,parentName:"p"},h.a.createElement(v.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"./src/plugin/index.ts"))),h.a.createElement(v.MDXTag,{name:"pre",components:n},h.a.createElement(v.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},"pri.project.onAnalyseProject(files => {\n  return {\n    customPlugin: {\n      hasComponents: judgeHasComponents(projectRootPath, files)\n    }\n  }\n})\n")),h.a.createElement(v.MDXTag,{name:"h2",components:n},"Run test"),h.a.createElement(v.MDXTag,{name:"pre",components:n},h.a.createElement(v.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"npm test\n")),h.a.createElement(v.MDXTag,{name:"pre",components:n},h.a.createElement(v.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"  3 passed\n------------|----------|----------|----------|----------|-------------------|\n| File         | % Stmts    | % Branch   | % Funcs    | % Lines    | Uncovered Line #s   |\n| ------------ | ---------- | ---------- | ---------- | ---------- | ------------------- |\n| All files    | 100        | 100        | 100        | 100        |                     |\n| methods.ts   | 100        | 100        | 100        | 100        |                     |\n| ------------ | ---------- | ---------- | ---------- | ---------- | ------------------- |\n")))}}]),n}(h.a.Component)}}]);