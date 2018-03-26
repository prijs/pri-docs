"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const antd_1 = require("antd");
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const S = require("./markdown.style");
require("antd/dist/antd.css");
const SubMenu = antd_1.Menu.SubMenu;
const MenuItemGroup = antd_1.Menu.ItemGroup;
const { Header, Content, Footer, Sider } = antd_1.Layout;
class Props {
}
class State {
}
let Page = class Page extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = new State();
    }
    render() {
        const menuKeyPrefix = "/pri-docs";
        const selectedKeys = (menuKeyPrefix + this.props.location.pathname).replace(/\/$/g, "");
        return (React.createElement(antd_1.Layout, null,
            React.createElement(Header, null,
                React.createElement(antd_1.Menu, { mode: "horizontal" },
                    React.createElement(S.Logo, null, "Pri"))),
            React.createElement(Content, { style: { padding: "0 50px 0 50px" } },
                React.createElement(antd_1.Layout, { style: { padding: "24px 0", background: "#fff" } },
                    React.createElement(Sider, { width: 200, style: { background: "#fff" } },
                        React.createElement(antd_1.Menu, { mode: "inline", selectedKeys: [selectedKeys] },
                            React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}` },
                                React.createElement(react_router_dom_1.Link, { to: "/" }, "Setup")),
                            React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/pages-are-routes` },
                                React.createElement(react_router_dom_1.Link, { to: "/pages-are-routes" }, "Pages are routes")),
                            React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/layout-support` },
                                React.createElement(react_router_dom_1.Link, { to: "/layout-support" }, "Layout support")),
                            React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/config` },
                                React.createElement(react_router_dom_1.Link, { to: "/config" }, "Config")),
                            React.createElement(MenuItemGroup, { key: `${menuKeyPrefix}/features`, title: "Features" },
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/features/markdown-support` },
                                    React.createElement(react_router_dom_1.Link, { to: "/features/markdown-support" }, "Markdown support")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/features/scss-less-css` },
                                    React.createElement(react_router_dom_1.Link, { to: "/features/scss-less-css" }, "Scss/Less/Css support")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/features/page-not-found` },
                                    React.createElement(react_router_dom_1.Link, { to: "/features/page-not-found" }, "Page not found")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/features/built-in-data-stream` },
                                    React.createElement(react_router_dom_1.Link, { to: "/features/built-in-data-stream" }, "Built-in data stream")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/features/environment-variable` },
                                    React.createElement(react_router_dom_1.Link, { to: "/features/environment-variable" }, "Environment variable")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/features/deploy-to-github-pages` },
                                    React.createElement(react_router_dom_1.Link, { to: "/features/deploy-to-github-pages" }, "Deploy to github pages")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/features/project-dashboard` },
                                    React.createElement(react_router_dom_1.Link, { to: "/features/project-dashboard" }, "Project Dashboard")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/features/dynamic-import` },
                                    React.createElement(react_router_dom_1.Link, { to: "/features/dynamic-import" }, "Dynamic import"))),
                            React.createElement(MenuItemGroup, { key: `${menuKeyPrefix}/automatic-optimization`, title: React.createElement("span", null,
                                    "Automatic optimization\u00A0",
                                    React.createElement(antd_1.Tooltip, { title: "You don't need extra code configuration, these optimizations are done automatically." },
                                        React.createElement(antd_1.Icon, { type: "question-circle-o" }))) },
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/automatic-optimization/typescript-support` },
                                    React.createElement(react_router_dom_1.Link, { to: "/automatic-optimization/typescript-support" }, "Typescript support")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/automatic-optimization/tslint-support` },
                                    React.createElement(react_router_dom_1.Link, { to: "/automatic-optimization/tslint-support" }, "Tslint support")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/automatic-optimization/import-on-demand` },
                                    React.createElement(react_router_dom_1.Link, { to: "/automatic-optimization/import-on-demand" }, "Import on demand")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/automatic-optimization/auto-create-project-files` },
                                    React.createElement(react_router_dom_1.Link, { to: "/automatic-optimization/auto-create-project-files" }, "Auto create project files")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/automatic-optimization/auto-pick-shared-modules` },
                                    React.createElement(react_router_dom_1.Link, { to: "/automatic-optimization/auto-pick-shared-modules" }, "Auto pick shared modules")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/automatic-optimization/automatic-hmr` },
                                    React.createElement(react_router_dom_1.Link, { to: "/automatic-optimization/automatic-hmr" }, "Automatic HMR")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/automatic-optimization/automatic-code-splitting` },
                                    React.createElement(react_router_dom_1.Link, { to: "/automatic-optimization/automatic-code-splitting" }, "Automatic code splitting")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/automatic-optimization/tree-shaking` },
                                    React.createElement(react_router_dom_1.Link, { to: "/automatic-optimization/tree-shaking" }, "Tree shaking")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/automatic-optimization/scope-hoist` },
                                    React.createElement(react_router_dom_1.Link, { to: "/automatic-optimization/scope-hoist" }, "Scope hoist")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/automatic-optimization/auto-dlls` },
                                    React.createElement(react_router_dom_1.Link, { to: "/automatic-optimization/auto-dlls" }, "Auto dlls")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/automatic-optimization/auto-prefetch` },
                                    React.createElement(react_router_dom_1.Link, { to: "/automatic-optimization/auto-prefetch" }, "Auto prefetch"))),
                            React.createElement(MenuItemGroup, { key: `${menuKeyPrefix}/plugin`, title: "Plugin" },
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/plugin/write-plugin` },
                                    React.createElement(react_router_dom_1.Link, { to: "/plugin/write-plugin" }, "Write plugin")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/plugin/commands` },
                                    React.createElement(react_router_dom_1.Link, { to: "/plugin/commands" }, "Commands")),
                                React.createElement(antd_1.Menu.Item, { key: `${menuKeyPrefix}/plugin/project` },
                                    React.createElement(react_router_dom_1.Link, { to: "/plugin/project" }, "Project"))))),
                    React.createElement(Content, { style: { padding: "0 24px", minHeight: 280 } },
                        React.createElement(S.Content, null,
                            this.props.children,
                            React.createElement(antd_1.Divider, { style: { marginTop: 50 } },
                                React.createElement("a", { href: `https://github.com/ascoders/pri-docs/blob/master/src/pages${this.props.location.pathname === "/" ? "" : this.props.location.pathname}/index.md`, target: "_blank" },
                                    React.createElement(antd_1.Button, { type: "dashed", icon: "edit" }, "Edit this page on github."))))))),
            React.createElement(Footer, { style: { textAlign: "center" } }, "Pri \u00A92018 Created by Pri")));
    }
};
Page.defaultProps = new Props();
Page = __decorate([
    react_router_dom_1.withRouter
], Page);
exports.default = Page;
//# sourceMappingURL=markdown.js.map