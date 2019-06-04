(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[5],{325:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var a,r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=t(0),m=(a=o)&&a.__esModule?a:{default:a};var p=m.default.createContext({}),c=p.Provider,l=p.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,a=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["components"]);return m.default.createElement(l,null,function(n){return m.default.createElement(e,r({components:t||n},a))})}};n.default=function(e){var n=e.components,t=e.children;return m.default.createElement(c,{value:n},t)}},326:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(327);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return o(a).default}});var r=t(325);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})},327:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),m=t(0),p=(a=m)&&a.__esModule?a:{default:a},c=t(325);var l={inlineCode:"code",wrapper:"div"},s=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,m.Component),o(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,a=e.props,o=void 0===a?{}:a,m=e.children,c=e.components,s=void 0===c?{}:c,i=e.Layout,u=e.layoutProps,d=s[t+"."+n]||s[n]||l[n]||n;return i?p.default.createElement(i,r({components:s},u),p.default.createElement(d,o,m)):p.default.createElement(d,o,m)}}]),n}();n.default=(0,c.withMDXComponents)(s)},377:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return D});var a=t(33),r=t.n(a),o=t(3),m=t.n(o),p=t(9),c=t.n(p),l=t(10),s=t.n(l),i=t(11),u=t.n(i),d=t(12),g=t.n(d),f=t(0),M=t.n(f),E=t(326),D=function(e){function n(e){var t;return m()(this,n),(t=s()(this,u()(n).call(this,e))).layout=null,t}return g()(n,e),c()(n,[{key:"render",value:function(){var e=this.props,n=e.components;r()(e,["components"]);return M.a.createElement(E.MDXTag,{name:"wrapper",components:n},M.a.createElement(E.MDXTag,{name:"h1",components:n},"Commands"),M.a.createElement(E.MDXTag,{name:"p",components:n},"Use ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".commands")," to extend the commander."),M.a.createElement(E.MDXTag,{name:"h2",components:n},"registerCommand"),M.a.createElement(E.MDXTag,{name:"p",components:n},"Register new command by using ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"registerCommand")," method."),M.a.createElement(E.MDXTag,{name:"p",components:n},M.a.createElement(E.MDXTag,{name:"strong",components:n,parentName:"p"},M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"./src/plugin/index.ts"))),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},"import { pri } from 'pri';\n\n// Add new commander: pri deploy\npri.commands.registerCommand({\n  name: 'deploy',\n  description: 'desc',\n  options:[['-d', '--debug', 'deploy debug']]\n  action: async () => {}\n});\n")),M.a.createElement(E.MDXTag,{name:"p",components:n},"Then you can use ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pri deploy"),"."),M.a.createElement(E.MDXTag,{name:"table",components:n},M.a.createElement(E.MDXTag,{name:"thead",components:n,parentName:"table"},M.a.createElement(E.MDXTag,{name:"tr",components:n,parentName:"thead"},M.a.createElement(E.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Option"),M.a.createElement(E.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),M.a.createElement(E.MDXTag,{name:"tbody",components:n,parentName:"table"},M.a.createElement(E.MDXTag,{name:"tr",components:n,parentName:"tbody"},M.a.createElement(E.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"name"),M.a.createElement(E.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Command name, ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pri <name>"),".")),M.a.createElement(E.MDXTag,{name:"tr",components:n,parentName:"tbody"},M.a.createElement(E.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"description"),M.a.createElement(E.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Description for command, when excute ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pri -h"),".")),M.a.createElement(E.MDXTag,{name:"tr",components:n,parentName:"tbody"},M.a.createElement(E.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"options"),M.a.createElement(E.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Command options")),M.a.createElement(E.MDXTag,{name:"tr",components:n,parentName:"tbody"},M.a.createElement(E.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"action"),M.a.createElement(E.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Action for command, when excute ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pri <name>."))))),M.a.createElement(E.MDXTag,{name:"h2",components:n},"expandCommand"),M.a.createElement(E.MDXTag,{name:"p",components:n},"Expand commander which already exist."),M.a.createElement(E.MDXTag,{name:"p",components:n},M.a.createElement(E.MDXTag,{name:"strong",components:n,parentName:"p"},M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"./src/plugin/index.ts"))),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},'import { pri } from "pri"\n\n// Run extra code between pri init\npri.commands.expandCommand({\n  name: "init",\n  beforeAction: async (...args: any[]) => {}\n  afterAction: async (...args: any[]) => {}\n})\n')),M.a.createElement(E.MDXTag,{name:"table",components:n},M.a.createElement(E.MDXTag,{name:"thead",components:n,parentName:"table"},M.a.createElement(E.MDXTag,{name:"tr",components:n,parentName:"thead"},M.a.createElement(E.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Option"),M.a.createElement(E.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),M.a.createElement(E.MDXTag,{name:"tbody",components:n,parentName:"table"},M.a.createElement(E.MDXTag,{name:"tr",components:n,parentName:"tbody"},M.a.createElement(E.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"name"),M.a.createElement(E.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Exist command name, ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pri <name>"),".")),M.a.createElement(E.MDXTag,{name:"tr",components:n,parentName:"tbody"},M.a.createElement(E.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"beforeAction"),M.a.createElement(E.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Action before ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pri <name>"),".")),M.a.createElement(E.MDXTag,{name:"tr",components:n,parentName:"tbody"},M.a.createElement(E.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"afterAction"),M.a.createElement(E.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Action after ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pri <name>"),".")),M.a.createElement(E.MDXTag,{name:"tr",components:n,parentName:"tbody"},M.a.createElement(E.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"options"),M.a.createElement(E.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Command options")))))}}]),n}(M.a.Component);D.isMDXComponent=!0}}]);