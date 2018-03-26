"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Props {
}
class State {
}
class Page extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = new State();
    }
    render() {
        return React.createElement("div", null, "Page not found");
    }
}
Page.defaultProps = new Props();
exports.default = Page;
//# sourceMappingURL=404.js.map