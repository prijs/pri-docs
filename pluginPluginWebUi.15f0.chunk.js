(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[11],{322:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=t(0),c=(a=r)&&a.__esModule?a:{default:a};var m=c.default.createContext({}),p=m.Provider,i=m.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,a=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["components"]);return c.default.createElement(i,null,function(n){return c.default.createElement(e,o({components:t||n},a))})}};n.default=function(e){var n=e.components,t=e.children;return c.default.createElement(p,{value:n},t)}},323:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(324);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=t(322);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},324:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),c=t(0),m=(a=c)&&a.__esModule?a:{default:a},p=t(322);var i={inlineCode:"code",wrapper:"div"},s=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,c.Component),r(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,a=e.props,r=void 0===a?{}:a,c=e.children,p=e.components,s=void 0===p?{}:p,l=e.Layout,u=e.layoutProps,d=s[t+"."+n]||s[n]||i[n]||n;return l?m.default.createElement(l,o({components:s},u),m.default.createElement(d,r,c)):m.default.createElement(d,r,c)}}]),n}();n.default=(0,p.withMDXComponents)(s)},366:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return E});var a=t(30),o=t.n(a),r=t(5),c=t.n(r),m=t(7),p=t.n(m),i=t(8),s=t.n(i),l=t(9),u=t.n(l),d=t(10),g=t.n(d),f=t(0),D=t.n(f),h=t(323),E=function(e){function n(e){var t;return c()(this,n),(t=s()(this,u()(n).call(this,e))).layout=null,t}return g()(n,e),p()(n,[{key:"render",value:function(){var e=this.props,n=e.components;o()(e,["components"]);return D.a.createElement(h.MDXTag,{name:"wrapper",components:n},D.a.createElement(h.MDXTag,{name:"h1",components:n},"Web UI"),D.a.createElement(h.MDXTag,{name:"p",components:n},"You can extend web ui in your plugin. Pri load web ui plugin by implement ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"getUIPlugins")," function in ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"./src/index.ts"),"."),D.a.createElement(h.MDXTag,{name:"pre",components:n},D.a.createElement(h.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},".\n├── src\n│   ├── plugin\n│   ├── web-ui-one\n│   │       └── index.tsx    # WebUI plugin\n│   ├── web-ui-two\n│   │       └── index.tsx    # WebUI plugin\n│   └── index.ts\n└── priconfig.json\n")),D.a.createElement(h.MDXTag,{name:"p",components:n},"First, create some webui code into ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src")," folder. For example, create file ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"./src/plugin/web-ui-one/index.tsx"),":"),D.a.createElement(h.MDXTag,{name:"pre",components:n},D.a.createElement(h.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"import * as React from 'react';\n\nclass View extends React.Component<any, any> {\n  public render() {\n    return <div>Test</div>;\n  }\n}\n\nexport default {\n  position: 'menu',\n  view: View，\n  init: (applicationAction: any) => {}\n};\n")),D.a.createElement(h.MDXTag,{name:"p",components:n},"Then, you plugin will be loaded into the hole of ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"menu"),"."),D.a.createElement(h.MDXTag,{name:"p",components:n},"Finally, import to in ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"./src/index.ts"),":"),D.a.createElement(h.MDXTag,{name:"pre",components:n},D.a.createElement(h.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-ts"}},"export const getUIPlugins = () => [import('./web-ui-one'), import('./web-ui-two')];\n")),D.a.createElement(h.MDXTag,{name:"h2",components:n},"Debug webui"),D.a.createElement(h.MDXTag,{name:"p",components:n},"You can debug webui by execute ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npx pri dev -d")," in your project!"),D.a.createElement(h.MDXTag,{name:"p",components:n},"Don't forget to execute ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm start")," in your plugin's dir."),D.a.createElement(h.MDXTag,{name:"h2",components:n},"Position enums"),D.a.createElement(h.MDXTag,{name:"p",components:n},"Here is all positions in the webUI:"),D.a.createElement("img",{src:"https://user-images.githubusercontent.com/7970947/39683416-de6ba0f6-51e7-11e8-9a6e-124f63ba4415.png",width:800}),D.a.createElement(h.MDXTag,{name:"h3",components:n},D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"menu")),D.a.createElement(h.MDXTag,{name:"p",components:n},"Append menu on the top bar. You can add some operate button here."),D.a.createElement(h.MDXTag,{name:"h3",components:n},D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"tree-[name]")),D.a.createElement(h.MDXTag,{name:"p",components:n},"When user click the left tree, for example ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"routes"),", ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"tree-routes")," will be rendered on the right."),D.a.createElement(h.MDXTag,{name:"p",components:n},"So you can register both tree and ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"tree-[name]"),", and make sure they have same keys."),D.a.createElement(h.MDXTag,{name:"h2",components:n},"applicationAction"),D.a.createElement(h.MDXTag,{name:"p",components:n},"We can control webUI using ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"applicationAction"),", and we can get it on the ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"init")," callback:"),D.a.createElement(h.MDXTag,{name:"pre",components:n},D.a.createElement(h.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"import * as React from 'react';\n\nclass View extends React.Component<any, any> {}\n\nexport default {\n  position: 'menu',\n  view: View，\n  init: (applicationAction: any) => {\n    // Access applicationAction\n  }\n};\n")),D.a.createElement(h.MDXTag,{name:"h3",components:n},"get analyseInfo"),D.a.createElement(h.MDXTag,{name:"p",components:n},"we can get analyseInfo from webUI, you can access it in ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"applicationAction.applicationStore.status.analyseInfo"),"."),D.a.createElement(h.MDXTag,{name:"h3",components:n},"event"),D.a.createElement(h.MDXTag,{name:"p",components:n},"TODO"),D.a.createElement(h.MDXTag,{name:"h3",components:n},"pipeTreeNode"),D.a.createElement(h.MDXTag,{name:"p",components:n},"We can expend left tree on the webui:"),D.a.createElement(h.MDXTag,{name:"pre",components:n},D.a.createElement(h.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"import { Icon } from 'antd';\n\nconst TreeIcon = (props: any) => <Icon style={{ marginRight: 5 }} {...props} />;\n\napplicationAction.pipeTreeNode((treeData: any) => {\n  treeData[0].children.push({\n    key: 'project-analyse',\n    title: `ProjectAnalyse`,\n    icon: <TreeIcon type=\"setting\" />,\n    children: [\n      // The same structor with parent, and can be empty.\n    ]\n  });\n  return treeData;\n});\n")),D.a.createElement(h.MDXTag,{name:"p",components:n},"In above code, we register a new tree element:"),D.a.createElement("img",{src:"https://user-images.githubusercontent.com/7970947/39683744-c252c474-51e9-11e8-932c-de87f1aa3bcf.png",width:240}),D.a.createElement(h.MDXTag,{name:"p",components:n},"And when we click it, ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"tree-project-analyse")," will be loaded on the right area:"),D.a.createElement("img",{src:"https://user-images.githubusercontent.com/7970947/39683806-1b60d3a8-51ea-11e8-90df-3058941bcdd1.png",width:800}),D.a.createElement(h.MDXTag,{name:"p",components:n},"So we can set position to ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"tree-project-analyse")," to hold it:"),D.a.createElement(h.MDXTag,{name:"pre",components:n},D.a.createElement(h.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"export default {\n  position: 'tree-project-analyse',\n  view: View，\n  init: (applicationAction: any) => {\n    // Access applicationAction\n  }\n};\n")),D.a.createElement(h.MDXTag,{name:"h3",components:n},"fetch"),D.a.createElement(h.MDXTag,{name:"p",components:n},"We can communicatie with the node code in webUI."),D.a.createElement(h.MDXTag,{name:"p",components:n},"Here is an example, first, we register a web socket callback in ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/index.tsx"),":"),D.a.createElement(h.MDXTag,{name:"pre",components:n},D.a.createElement(h.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},"pri.devService.on('someName', async clientData => {\n  // Get data here\n  return 'nice to meet you';\n});\n")),D.a.createElement(h.MDXTag,{name:"p",components:n},"And we can trigger it, when calling ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fetch")," in webUI:"),D.a.createElement(h.MDXTag,{name:"pre",components:n},D.a.createElement(h.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},"import { Connect } from 'dob-react';\n\n@Connect\nclass WebuiPage extends React.PureComponent<Props, State> {\n  onClick = () => {\n    const serverData = await this.props.ApplicationAction.fetch('someName', 'hello');\n  };\n}\n")),D.a.createElement(h.MDXTag,{name:"p",components:n},"So, we send ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"hello")," to node from webUI, and the ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"clientData")," equals to ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"hello"),", and in webUI, the ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"serverData")," equals to ",D.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"nice to meet you")))}}]),n}(D.a.Component);E.isMDXComponent=!0}}]);