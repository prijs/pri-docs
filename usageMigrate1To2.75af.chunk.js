(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[32],{325:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=t(0),c=(a=r)&&a.__esModule?a:{default:a};var i=c.default.createContext({}),l=i.Provider,m=i.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,a=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["components"]);return c.default.createElement(m,null,function(n){return c.default.createElement(e,o({components:t||n},a))})}};n.default=function(e){var n=e.components,t=e.children;return c.default.createElement(l,{value:n},t)}},326:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(327);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=t(325);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},327:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),c=t(0),i=(a=c)&&a.__esModule?a:{default:a},l=t(325);var m={inlineCode:"code",wrapper:"div"},p=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,c.Component),r(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,a=e.props,r=void 0===a?{}:a,c=e.children,l=e.components,p=void 0===l?{}:l,s=e.Layout,u=e.layoutProps,f=p[t+"."+n]||p[n]||m[n]||n;return s?i.default.createElement(s,o({components:p},u),i.default.createElement(f,r,c)):i.default.createElement(f,r,c)}}]),n}();n.default=(0,l.withMDXComponents)(p)},350:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return v});var a=t(33),o=t.n(a),r=t(3),c=t.n(r),i=t(9),l=t.n(i),m=t(10),p=t.n(m),s=t(11),u=t.n(s),f=t(12),d=t.n(f),g=t(0),h=t.n(g),y=t(326),v=function(e){function n(e){var t;return c()(this,n),(t=p()(this,u()(n).call(this,e))).layout=null,t}return d()(n,e),l()(n,[{key:"render",value:function(){var e=this.props,n=e.components;o()(e,["components"]);return h.a.createElement(y.MDXTag,{name:"wrapper",components:n},h.a.createElement(y.MDXTag,{name:"h1",components:n},"Migrate from 1.x to 2.x"),h.a.createElement(y.MDXTag,{name:"p",components:n},"Two steps:"),h.a.createElement(y.MDXTag,{name:"ol",components:n},h.a.createElement(y.MDXTag,{name:"li",components:n,parentName:"ol"},"Run ",h.a.createElement(y.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"npx pri-migrate-one-to-two")," in your project root path."),h.a.createElement(y.MDXTag,{name:"li",components:n,parentName:"ol"},"Reinstall node_modules.")),h.a.createElement(y.MDXTag,{name:"h2",components:n},"Upgrates"),h.a.createElement(y.MDXTag,{name:"p",components:n},"The main feature for ",h.a.createElement(y.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pri2.0")," is performance optimization."),h.a.createElement(y.MDXTag,{name:"h3",components:n},"Features"),h.a.createElement(y.MDXTag,{name:"ul",components:n},h.a.createElement(y.MDXTag,{name:"li",components:n,parentName:"ul"},"Refactoring plug-in loading mechanism to make plug-ins more extensible, and all command line class commands are loaded on demand."),h.a.createElement(y.MDXTag,{name:"li",components:n,parentName:"ul"},"Optimizing command line performance and improving response can be seen by naked eyes. ",h.a.createElement(y.MDXTag,{name:"strong",components:n,parentName:"li"},"The execution speed of general commands is increased ten times"),". The efficiency of ",h.a.createElement(y.MDXTag,{name:"strong",components:n,parentName:"li"},"NPM start construction commands is increased by 140%-1000%"),"."),h.a.createElement(y.MDXTag,{name:"li",components:n,parentName:"ul"},"More.. has been incorporated into the document.")),h.a.createElement(y.MDXTag,{name:"h3",components:n},"Break changes"),h.a.createElement(y.MDXTag,{name:"ul",components:n},h.a.createElement(y.MDXTag,{name:"li",components:n,parentName:"ul"},"Rename config file from ",h.a.createElement(y.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"pri.config.ts")," to ",h.a.createElement(y.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"priconfig.json"),". (If you run migrate scripts, it will be automatic renamed.)")))}}]),n}(h.a.Component);v.isMDXComponent=!0}}]);