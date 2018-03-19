"use strict";
exports.__esModule = true;
var GlobalEnv = /** @class */ (function () {
    function GlobalEnv() {
        var _this = this;
        this.isLocal = false;
        this.isProd = false;
        this.customEnv = {};
        this.get = function (name) {
            return _this.customEnv[name];
        };
    }
    return GlobalEnv;
}());
exports.GlobalEnv = GlobalEnv;
var env = new GlobalEnv();
exports.env = env;
var tag = "priEnv";
if (window[tag]) {
    exports.env = env = window[tag];
}
else {
    window[tag] = env;
}
function setEnvLocal() {
    env.isLocal = true;
}
exports.setEnvLocal = setEnvLocal;
function setEnvProd() {
    env.isProd = true;
}
exports.setEnvProd = setEnvProd;
function setCustomEnv(info) {
    env.customEnv = info;
}
exports.setCustomEnv = setCustomEnv;
