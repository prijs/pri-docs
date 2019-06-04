(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[37],{325:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=t(0),p=(a=r)&&a.__esModule?a:{default:a};var c=p.default.createContext({}),s=c.Provider,i=c.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,a=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["components"]);return p.default.createElement(i,null,function(n){return p.default.createElement(e,o({components:t||n},a))})}};n.default=function(e){var n=e.components,t=e.children;return p.default.createElement(s,{value:n},t)}},326:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(327);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=t(325);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},327:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),p=t(0),c=(a=p)&&a.__esModule?a:{default:a},s=t(325);var i={inlineCode:"code",wrapper:"div"},m=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,p.Component),r(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,a=e.props,r=void 0===a?{}:a,p=e.children,s=e.components,m=void 0===s?{}:s,l=e.Layout,u=e.layoutProps,f=m[t+"."+n]||m[n]||i[n]||n;return l?c.default.createElement(l,o({components:m},u),c.default.createElement(f,r,p)):c.default.createElement(f,r,p)}}]),n}();n.default=(0,s.withMDXComponents)(m)},345:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return M});var a=t(33),o=t.n(a),r=t(3),p=t.n(r),c=t(9),s=t.n(c),i=t(10),m=t.n(i),l=t(11),u=t.n(l),f=t(12),d=t.n(f),g=t(0),b=t.n(g),h=t(326),M=function(e){function n(e){var t;return p()(this,n),(t=m()(this,u()(n).call(this,e))).layout=null,t}return d()(n,e),s()(n,[{key:"render",value:function(){var e=this.props,n=e.components;o()(e,["components"]);return b.a.createElement(h.MDXTag,{name:"wrapper",components:n},b.a.createElement(h.MDXTag,{name:"h1",components:n},"pri-plugin-dob ","·"," ",b.a.createElement(h.MDXTag,{name:"a",components:n,parentName:"h1",props:{href:"https://www.npmjs.com/package/pri-plugin-dob"}},b.a.createElement(h.MDXTag,{name:"img",components:n,parentName:"a",props:{src:"https://img.shields.io/npm/v/pri-plugin-dob.svg?style=flat-square",alt:"npm version"}}))),b.a.createElement(h.MDXTag,{name:"p",components:n},b.a.createElement(h.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/dobjs/dob"}},"dob")," is a tool for monitoring object changes, and ",b.a.createElement(h.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/dobjs/dob-react"}},"dob-react")," can help you manage stores in react."),b.a.createElement(h.MDXTag,{name:"p",components:n},"We provide a pri-plugin for ",b.a.createElement(h.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/dobjs/dob"}},"dob"),"!"),b.a.createElement(h.MDXTag,{name:"h2",components:n},"Usage"),b.a.createElement(h.MDXTag,{name:"pre",components:n},b.a.createElement(h.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"npm i pri-plugin-dob\n")),b.a.createElement(h.MDXTag,{name:"pre",components:n},b.a.createElement(h.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},".\n├── src\n│    └── stores\n│          ├── application.ts      # store file\n│          └── user.ts             # store file\n└── priconfig.json\n")),b.a.createElement(h.MDXTag,{name:"h2",components:n},"Features"),b.a.createElement(h.MDXTag,{name:"ul",components:n},b.a.createElement(h.MDXTag,{name:"li",components:n,parentName:"ul"},"Extend webui for store operates."),b.a.createElement(h.MDXTag,{name:"li",components:n,parentName:"ul"},"Allow files in path ",b.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/stores/**"),", and automatic binding stores into entry.")),b.a.createElement(h.MDXTag,{name:"p",components:n},"Let's try it! For example, create a store named ",b.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"application"),":"),b.a.createElement(h.MDXTag,{name:"p",components:n},b.a.createElement(h.MDXTag,{name:"strong",components:n,parentName:"p"},"src/stores/application.tsx")),b.a.createElement(h.MDXTag,{name:"pre",components:n},b.a.createElement(h.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},"import { Action, inject, observable } from 'dob';\n\n@observable\nexport class ApplicationStore {\n  public testValue = 1;\n}\n\nexport class ApplicationAction {\n  @inject(ApplicationStore) public applicationStore: ApplicationStore;\n\n  @Action\n  public test() {\n    this.applicationStore.testValue++;\n  }\n}\n")),b.a.createElement(h.MDXTag,{name:"p",components:n},b.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pri-plugin-dob")," will automatic create ",b.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pri/stores")," for ts defintion, then you can use it like this:"),b.a.createElement(h.MDXTag,{name:"p",components:n},b.a.createElement(h.MDXTag,{name:"strong",components:n,parentName:"p"},"src/pages/index.tsx")),b.a.createElement(h.MDXTag,{name:"pre",components:n},b.a.createElement(h.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},"import * as React from 'react';\nimport { stores } from 'pri/stores';\n\nexport default class View extends React.PureComponent<typeof stores, any> {\n  render() {\n    // this.props.ApplicationStore.testValue\n    // this.props.ApplicationAction.test()\n  }\n}\n")),b.a.createElement(h.MDXTag,{name:"p",components:n},"For more skills about using dob in pri, please see ",b.a.createElement(h.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/dobjs/dob"}},"dob docs"),"."))}}]),n}(b.a.Component);M.isMDXComponent=!0}}]);