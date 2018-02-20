"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var WpApiLoader = (function () {
    function WpApiLoader() {
    }
    return WpApiLoader;
}());
exports.WpApiLoader = WpApiLoader;
var WpApiStaticLoader = (function () {
    function WpApiStaticLoader(http, _baseUrl, _namespace) {
        if (_baseUrl === void 0) { _baseUrl = 'http://changeYourDomainHere.com/wp-json'; }
        if (_namespace === void 0) { _namespace = '/wp/v2'; }
        this.http = http;
        this._baseUrl = _baseUrl;
        this._namespace = _namespace;
        this.completeUrl = "" + utils_1.stripTrailingSlash(this.baseUrl) + this.namespace;
    }
    Object.defineProperty(WpApiStaticLoader.prototype, "baseUrl", {
        get: function () { return this._baseUrl; },
        set: function (val) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WpApiStaticLoader.prototype, "namespace", {
        get: function () { return this._namespace; },
        set: function (val) { },
        enumerable: true,
        configurable: true
    });
    WpApiStaticLoader.prototype.getWebServiceUrl = function (postfix) {
        return "" + this.completeUrl + postfix;
    };
    return WpApiStaticLoader;
}());
exports.WpApiStaticLoader = WpApiStaticLoader;
//# sourceMappingURL=Loaders.js.map