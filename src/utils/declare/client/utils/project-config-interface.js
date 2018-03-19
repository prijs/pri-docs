"use strict";
exports.__esModule = true;
var IProjectConfig = /** @class */ (function () {
    function IProjectConfig() {
        /**
         * Title for html <title>.
         */
        this.title = "pri";
        /**
         * Dist dir path.
         * Only take effect on `npm run build` | `pri build`.
         */
        this.distDir = "dist";
        /**
         * Dist main file name.
         * Only take effect on `npm run build` | `pri build`.
         */
        this.distFileName = "main";
        /**
         * Assets public path. `"some.com"`, `"some.com/somePath"`, `"/somePath"`.
         * If not set, result: `/<distPath>`.
         * If set /somePath for example, result: `/somePath/<distPath>`.
         * If set some.com for example, result: `//some.com/<distPath>`.
         * If set some.com/somePath for example, result: `//some.com/somePath/<distPath>`.
         * Only take effect on `npm run build` | `pri build`.
         */
        this.publicPath = null;
        /**
         * Base href for all pages.
         * For example, `/admin` is the root path after deploy, you should set baseHref to `/admin`.
         * There is no need to modify the code, routing `/` can automatically maps to `/admin`.
         * Only take effect on `npm run build` | `pri build`
         */
        this.baseHref = "/";
        /**
         * Generate static index file for each route, when building.
         * Usefal for static service who don't serve fallback html, like github-pages.
         */
        this.staticBuild = false;
        /**
         * Using https for server.
         */
        this.useHttps = true;
    }
    return IProjectConfig;
}());
exports.IProjectConfig = IProjectConfig;
