(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[40],{322:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(0),u=(o=a)&&o.__esModule?o:{default:o};var i=u.default.createContext({}),c=i.Provider,l=i.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["components"]);return u.default.createElement(l,null,function(t){return u.default.createElement(e,r({components:n||t},o))})}};t.default=function(e){var t=e.components,n=e.children;return u.default.createElement(c,{value:t},n)}},323:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(324);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(o).default}});var r=n(322);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(r).default}})},324:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),i=(o=u)&&o.__esModule?o:{default:o},c=n(322);var l={inlineCode:"code",wrapper:"div"},s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,u=e.children,c=e.components,s=void 0===c?{}:c,f=e.Layout,p=e.layoutProps,d=s[n+"."+t]||s[t]||l[t]||t;return f?i.default.createElement(f,r({components:s},p),i.default.createElement(d,a,u)):i.default.createElement(d,a,u)}}]),t}();t.default=(0,c.withMDXComponents)(s)},337:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var o=n(30),r=n.n(o),a=n(5),u=n.n(a),i=n(7),c=n.n(i),l=n(8),s=n.n(l),f=n(9),p=n.n(f),d=n(10),m=n.n(d),v=n(0),y=n.n(v),h=n(323),b=function(e){function t(e){var n;return u()(this,t),(n=s()(this,p()(t).call(this,e))).layout=null,n}return m()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.components;r()(e,["components"]);return y.a.createElement(h.MDXTag,{name:"wrapper",components:t},y.a.createElement(h.MDXTag,{name:"h1",components:t},"Scope Hoist"),y.a.createElement(h.MDXTag,{name:"p",components:t},"In comparison, tools like Closure Compiler and RollupJS ‘hoist’ or concatenate the scope of all your modules into one closure and allow for your code to have a faster execution time in the browser. Pri do this by using webpack."))}}]),t}(y.a.Component);b.isMDXComponent=!0}}]);