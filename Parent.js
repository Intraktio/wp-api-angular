"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Loaders_1 = require("./Loaders");
var AuthSession_1 = require("./AuthSession");
var WpApiParent = (function () {
    function WpApiParent(wpApiLoader, http) {
        this.wpApiLoader = wpApiLoader;
        this.http = http;
    }
    WpApiParent.prototype.getToken = function () {
        var sessionCredentials = AuthSession_1.AuthSession.getSession();
        return sessionCredentials ? sessionCredentials.token : null;
    };
    WpApiParent.prototype.hasToken = function () {
        return this.getToken() ? true : false;
    };
    WpApiParent.prototype.getWebServiceUrl = function (postfix) {
        return this.wpApiLoader.getWebServiceUrl(postfix);
    };
    WpApiParent.prototype.getDefaultOptions = function (options) {
        if (options === void 0) { options = { headers: new http_1.Headers() }; }
        if (!options.headers) {
            options.headers = new http_1.Headers();
        }
        if (!options.headers.has('Authorization') && this.hasToken()) {
            options.headers.append('Authorization', "Bearer " + this.getToken());
        }
        return options;
    };
    WpApiParent.prototype.httpGet = function (url, options) {
        if (options === void 0) { options = {}; }
        options = this.getDefaultOptions(options);
        return this.http.get(this.getWebServiceUrl(url), options);
    };
    WpApiParent.prototype.httpHead = function (url, options) {
        if (options === void 0) { options = {}; }
        options = this.getDefaultOptions(options);
        return this.http.head(this.getWebServiceUrl(url), options);
    };
    WpApiParent.prototype.httpDelete = function (url, options) {
        if (options === void 0) { options = {}; }
        options = this.getDefaultOptions(options);
        return this.http.delete(this.getWebServiceUrl(url), options);
    };
    WpApiParent.prototype.httpPost = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        options = this.getDefaultOptions(options);
        return this.http.post(this.getWebServiceUrl(url), body, options);
    };
    WpApiParent.prototype.httpPut = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        options = this.getDefaultOptions(options);
        return this.http.put(this.getWebServiceUrl(url), body, options);
    };
    WpApiParent.prototype.httpPatch = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        options = this.getDefaultOptions(options);
        return this.http.patch(this.getWebServiceUrl(url), body, options);
    };
    WpApiParent.decorators = [
        { type: core_1.Injectable },
    ];
    WpApiParent.ctorParameters = function () { return [
        { type: Loaders_1.WpApiLoader, },
        { type: http_1.Http, },
    ]; };
    return WpApiParent;
}());
exports.WpApiParent = WpApiParent;
//# sourceMappingURL=Parent.js.map