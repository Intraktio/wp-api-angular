"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Parent_1 = require("./Parent");
var AuthSession_1 = require("./AuthSession");
var Loaders_1 = require("./Loaders");
var WpApiAuth = (function (_super) {
    __extends(WpApiAuth, _super);
    function WpApiAuth(wpApiLoader, http) {
        var _this = _super.call(this, wpApiLoader, http) || this;
        _this.wpApiLoader = wpApiLoader;
        _this.http = http;
        return _this;
    }
    WpApiAuth.prototype.getWebServiceUrl = function (postfix) {
        return _super.prototype.getWebServiceUrl.call(this, postfix).replace(this.wpApiLoader.namespace, '/jwt-auth/v1');
    };
    WpApiAuth.prototype.saveSession = function (credentials) {
        AuthSession_1.AuthSession.saveSession(credentials);
    };
    WpApiAuth.prototype.getSession = function () {
        return AuthSession_1.AuthSession.getSession();
    };
    WpApiAuth.prototype.removeSession = function () {
        AuthSession_1.AuthSession.removeSession();
    };
    WpApiAuth.prototype.auth = function (authCredentials, options) {
        if (options === void 0) { options = { headers: new http_1.Headers() }; }
        if (!options.headers) {
            options.headers = new http_1.Headers();
        }
        options.headers.append('Authorization', '');
        return this.httpPost("/token", authCredentials, options);
    };
    WpApiAuth.prototype.validate = function (options) {
        if (options === void 0) { options = {}; }
        return this.httpPost("/token/validate", {}, options);
    };
    WpApiAuth.decorators = [
        { type: core_1.Injectable },
    ];
    WpApiAuth.ctorParameters = function () { return [
        { type: Loaders_1.WpApiLoader, },
        { type: http_1.Http, },
    ]; };
    return WpApiAuth;
}(Parent_1.WpApiParent));
exports.WpApiAuth = WpApiAuth;
//# sourceMappingURL=Auth.js.map