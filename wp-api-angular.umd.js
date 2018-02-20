/*!
 * wp-api-angular
 *  ---
 * WordPress WP-API v2 client for Angular2
 * @version: v3.0.0-beta8
 * @author: shprink <contact@julienrenaux.fr>
 * @link: https://github.com/shprink/wp-api-angular
 * @license: MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("rxjs"), require("@angular/http"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "rxjs", "@angular/http"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@angular/core"), require("rxjs"), require("@angular/http")) : factory(root["@angular/core"], root["rxjs"], root["@angular/http"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************************!*\
  !*** ./src/wp-api-angular.ts ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	__webpack_require__(/*! rxjs */ 2);
	var http_1 = __webpack_require__(/*! @angular/http */ 3);
	var Posts_1 = __webpack_require__(/*! ./Posts */ 4);
	var Pages_1 = __webpack_require__(/*! ./Pages */ 9);
	var Comments_1 = __webpack_require__(/*! ./Comments */ 10);
	var Types_1 = __webpack_require__(/*! ./Types */ 11);
	var Media_1 = __webpack_require__(/*! ./Media */ 12);
	var Users_1 = __webpack_require__(/*! ./Users */ 13);
	var Taxonomies_1 = __webpack_require__(/*! ./Taxonomies */ 14);
	var Statuses_1 = __webpack_require__(/*! ./Statuses */ 15);
	var Terms_1 = __webpack_require__(/*! ./Terms */ 16);
	var Custom_1 = __webpack_require__(/*! ./Custom */ 17);
	var Auth_1 = __webpack_require__(/*! ./Auth */ 18);
	var Loaders_1 = __webpack_require__(/*! ./Loaders */ 6);
	var Posts_2 = __webpack_require__(/*! ./Posts */ 4);
	exports.WpApiPosts = Posts_2.WpApiPosts;
	var Pages_2 = __webpack_require__(/*! ./Pages */ 9);
	exports.WpApiPages = Pages_2.WpApiPages;
	var Comments_2 = __webpack_require__(/*! ./Comments */ 10);
	exports.WpApiComments = Comments_2.WpApiComments;
	var Types_2 = __webpack_require__(/*! ./Types */ 11);
	exports.WpApiTypes = Types_2.WpApiTypes;
	var Media_2 = __webpack_require__(/*! ./Media */ 12);
	exports.WpApiMedia = Media_2.WpApiMedia;
	var Users_2 = __webpack_require__(/*! ./Users */ 13);
	exports.WpApiUsers = Users_2.WpApiUsers;
	var Taxonomies_2 = __webpack_require__(/*! ./Taxonomies */ 14);
	exports.WpApiTaxonomies = Taxonomies_2.WpApiTaxonomies;
	var Statuses_2 = __webpack_require__(/*! ./Statuses */ 15);
	exports.WpApiStatuses = Statuses_2.WpApiStatuses;
	var Terms_2 = __webpack_require__(/*! ./Terms */ 16);
	exports.WpApiTerms = Terms_2.WpApiTerms;
	var Custom_2 = __webpack_require__(/*! ./Custom */ 17);
	exports.WpApiCustom = Custom_2.WpApiCustom;
	var Auth_2 = __webpack_require__(/*! ./Auth */ 18);
	exports.WpApiAuth = Auth_2.WpApiAuth;
	var Loaders_2 = __webpack_require__(/*! ./Loaders */ 6);
	exports.WpApiLoader = Loaders_2.WpApiLoader;
	exports.WpApiStaticLoader = Loaders_2.WpApiStaticLoader;
	function WpApiLoaderFactory(http) {
	    return new Loaders_1.WpApiStaticLoader(http);
	}
	exports.WpApiLoaderFactory = WpApiLoaderFactory;
	var WpApiModule = (function () {
	    function WpApiModule() {
	    }
	    WpApiModule_1 = WpApiModule;
	    WpApiModule.forRoot = function (providedLoader) {
	        if (providedLoader === void 0) { providedLoader = {
	            provide: Loaders_1.WpApiLoader,
	            useFactory: WpApiLoaderFactory,
	            deps: [http_1.Http]
	        }; }
	        return {
	            ngModule: WpApiModule_1,
	            providers: [
	                providedLoader
	            ]
	        };
	    };
	    WpApiModule = WpApiModule_1 = __decorate([
	        core_1.NgModule({
	            imports: [
	                http_1.HttpModule
	            ],
	            exports: [
	                http_1.HttpModule
	            ],
	            providers: [
	                Posts_1.WpApiPosts,
	                Pages_1.WpApiPages,
	                Comments_1.WpApiComments,
	                Types_1.WpApiTypes,
	                Media_1.WpApiMedia,
	                Users_1.WpApiUsers,
	                Taxonomies_1.WpApiTaxonomies,
	                Statuses_1.WpApiStatuses,
	                Terms_1.WpApiTerms,
	                Custom_1.WpApiCustom,
	                Auth_1.WpApiAuth
	            ]
	        })
	    ], WpApiModule);
	    return WpApiModule;
	    var WpApiModule_1;
	}());
	exports.WpApiModule = WpApiModule;


/***/ },
/* 1 */
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/*!**********************!*\
  !*** ./src/Posts.ts ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

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
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var http_1 = __webpack_require__(/*! @angular/http */ 3);
	var Parent_1 = __webpack_require__(/*! ./Parent */ 5);
	var Loaders_1 = __webpack_require__(/*! ./Loaders */ 6);
	var WpApiPosts = (function (_super) {
	    __extends(WpApiPosts, _super);
	    function WpApiPosts(wpApiLoader, http) {
	        var _this = _super.call(this, wpApiLoader, http) || this;
	        _this.wpApiLoader = wpApiLoader;
	        _this.http = http;
	        return _this;
	    }
	    WpApiPosts.prototype.getList = function (options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts", options);
	    };
	    WpApiPosts.prototype.get = function (postId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts/" + postId, options);
	    };
	    WpApiPosts.prototype.create = function (body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/posts", body, options);
	    };
	    WpApiPosts.prototype.update = function (postId, body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/posts/" + postId, body, options);
	    };
	    WpApiPosts.prototype.delete = function (postId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpDelete("/posts/" + postId, options);
	    };
	    WpApiPosts.prototype.getMetaList = function (postId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts/" + postId + "/meta", options);
	    };
	    WpApiPosts.prototype.getMeta = function (postId, metaId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts/" + postId + "/meta/" + metaId, options);
	    };
	    WpApiPosts.prototype.getRevisionList = function (postId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts/" + postId + "/revisions", options);
	    };
	    WpApiPosts.prototype.getRevision = function (postId, revisionId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts/" + postId + "/revisions/" + revisionId, options);
	    };
	    WpApiPosts.prototype.getCategoryList = function (postId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts/" + postId + "/terms/category", options);
	    };
	    WpApiPosts.prototype.getCategory = function (postId, categoryId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts/" + postId + "/terms/category/" + categoryId, options);
	    };
	    WpApiPosts.prototype.getTagList = function (postId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts/" + postId + "/terms/tag", options);
	    };
	    WpApiPosts.prototype.getTag = function (postId, tagId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts/" + postId + "/terms/tag/" + tagId, options);
	    };
	    WpApiPosts = __decorate([
	        core_1.Injectable(),
	        __metadata("design:paramtypes", [Loaders_1.WpApiLoader,
	            http_1.Http])
	    ], WpApiPosts);
	    return WpApiPosts;
	}(Parent_1.WpApiParent));
	exports.WpApiPosts = WpApiPosts;


/***/ },
/* 5 */
/*!***********************!*\
  !*** ./src/Parent.ts ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var http_1 = __webpack_require__(/*! @angular/http */ 3);
	var Loaders_1 = __webpack_require__(/*! ./Loaders */ 6);
	var AuthSession_1 = __webpack_require__(/*! ./AuthSession */ 8);
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
	    WpApiParent = __decorate([
	        core_1.Injectable(),
	        __metadata("design:paramtypes", [Loaders_1.WpApiLoader,
	            http_1.Http])
	    ], WpApiParent);
	    return WpApiParent;
	}());
	exports.WpApiParent = WpApiParent;


/***/ },
/* 6 */
/*!************************!*\
  !*** ./src/Loaders.ts ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var utils_1 = __webpack_require__(/*! ./utils */ 7);
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


/***/ },
/* 7 */
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function stripTrailingSlash(value) {
	    if (value.substring(value.length - 1, value.length) === '/') {
	        return value.substring(0, value.length - 1);
	    }
	    else {
	        return value;
	    }
	}
	exports.stripTrailingSlash = stripTrailingSlash;


/***/ },
/* 8 */
/*!****************************!*\
  !*** ./src/AuthSession.ts ***!
  \****************************/
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var AuthSession = (function () {
	    function AuthSession() {
	    }
	    AuthSession.saveSession = function (credentials) {
	        localStorage.setItem('credentials', JSON.stringify(credentials));
	    };
	    AuthSession.getSession = function () {
	        return JSON.parse(localStorage.getItem('credentials'));
	    };
	    AuthSession.removeSession = function () {
	        localStorage.removeItem('credentials');
	    };
	    return AuthSession;
	}());
	exports.AuthSession = AuthSession;


/***/ },
/* 9 */
/*!**********************!*\
  !*** ./src/Pages.ts ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

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
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var http_1 = __webpack_require__(/*! @angular/http */ 3);
	var Parent_1 = __webpack_require__(/*! ./Parent */ 5);
	var Loaders_1 = __webpack_require__(/*! ./Loaders */ 6);
	var WpApiPages = (function (_super) {
	    __extends(WpApiPages, _super);
	    function WpApiPages(wpApiLoader, http) {
	        var _this = _super.call(this, wpApiLoader, http) || this;
	        _this.wpApiLoader = wpApiLoader;
	        _this.http = http;
	        return _this;
	    }
	    WpApiPages.prototype.getList = function (options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/pages", options);
	    };
	    WpApiPages.prototype.get = function (pageId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/pages/" + pageId, options);
	    };
	    WpApiPages.prototype.create = function (body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/pages", body, options);
	    };
	    WpApiPages.prototype.update = function (pageId, body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/pages/" + pageId, body, options);
	    };
	    WpApiPages.prototype.delete = function (pageId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpDelete("/pages/" + pageId, options);
	    };
	    WpApiPages.prototype.getMetaList = function (pageId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/pages/" + pageId + "/meta", options);
	    };
	    WpApiPages.prototype.getMeta = function (pageId, metaId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/pages/" + pageId + "/meta/" + metaId, options);
	    };
	    WpApiPages.prototype.getRevisionList = function (pageId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/pages/" + pageId + "/revisions", options);
	    };
	    WpApiPages.prototype.getRevision = function (pageId, revisionId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/pages/" + pageId + "/revisions/" + revisionId, options);
	    };
	    WpApiPages = __decorate([
	        core_1.Injectable(),
	        __metadata("design:paramtypes", [Loaders_1.WpApiLoader,
	            http_1.Http])
	    ], WpApiPages);
	    return WpApiPages;
	}(Parent_1.WpApiParent));
	exports.WpApiPages = WpApiPages;


/***/ },
/* 10 */
/*!*************************!*\
  !*** ./src/Comments.ts ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

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
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var http_1 = __webpack_require__(/*! @angular/http */ 3);
	var Parent_1 = __webpack_require__(/*! ./Parent */ 5);
	var Loaders_1 = __webpack_require__(/*! ./Loaders */ 6);
	var WpApiComments = (function (_super) {
	    __extends(WpApiComments, _super);
	    function WpApiComments(wpApiLoader, http) {
	        var _this = _super.call(this, wpApiLoader, http) || this;
	        _this.wpApiLoader = wpApiLoader;
	        _this.http = http;
	        return _this;
	    }
	    WpApiComments.prototype.getList = function (options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/comments", options);
	    };
	    WpApiComments.prototype.get = function (commentId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/comments/" + commentId, options);
	    };
	    WpApiComments.prototype.create = function (body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/comments", body, options);
	    };
	    WpApiComments.prototype.update = function (commentId, body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/comments/" + commentId, body, options);
	    };
	    WpApiComments.prototype.delete = function (commentId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpDelete("/comments/" + commentId, options);
	    };
	    WpApiComments = __decorate([
	        core_1.Injectable(),
	        __metadata("design:paramtypes", [Loaders_1.WpApiLoader,
	            http_1.Http])
	    ], WpApiComments);
	    return WpApiComments;
	}(Parent_1.WpApiParent));
	exports.WpApiComments = WpApiComments;


/***/ },
/* 11 */
/*!**********************!*\
  !*** ./src/Types.ts ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

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
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var http_1 = __webpack_require__(/*! @angular/http */ 3);
	var Parent_1 = __webpack_require__(/*! ./Parent */ 5);
	var Loaders_1 = __webpack_require__(/*! ./Loaders */ 6);
	var WpApiTypes = (function (_super) {
	    __extends(WpApiTypes, _super);
	    function WpApiTypes(wpApiLoader, http) {
	        var _this = _super.call(this, wpApiLoader, http) || this;
	        _this.wpApiLoader = wpApiLoader;
	        _this.http = http;
	        return _this;
	    }
	    WpApiTypes.prototype.getList = function (options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/types", options);
	    };
	    WpApiTypes.prototype.get = function (postType, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/types/" + postType, options);
	    };
	    WpApiTypes = __decorate([
	        core_1.Injectable(),
	        __metadata("design:paramtypes", [Loaders_1.WpApiLoader,
	            http_1.Http])
	    ], WpApiTypes);
	    return WpApiTypes;
	}(Parent_1.WpApiParent));
	exports.WpApiTypes = WpApiTypes;


/***/ },
/* 12 */
/*!**********************!*\
  !*** ./src/Media.ts ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

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
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var http_1 = __webpack_require__(/*! @angular/http */ 3);
	var Parent_1 = __webpack_require__(/*! ./Parent */ 5);
	var Loaders_1 = __webpack_require__(/*! ./Loaders */ 6);
	var WpApiMedia = (function (_super) {
	    __extends(WpApiMedia, _super);
	    function WpApiMedia(wpApiLoader, http) {
	        var _this = _super.call(this, wpApiLoader, http) || this;
	        _this.wpApiLoader = wpApiLoader;
	        _this.http = http;
	        return _this;
	    }
	    WpApiMedia.prototype.getList = function (options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/media", options);
	    };
	    WpApiMedia.prototype.get = function (mediaId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/media/" + mediaId, options);
	    };
	    WpApiMedia.prototype.create = function (body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/media", body, options);
	    };
	    WpApiMedia.prototype.update = function (mediaId, body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/media/" + mediaId, body, options);
	    };
	    WpApiMedia.prototype.delete = function (mediaId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpDelete("/media/" + mediaId, options);
	    };
	    WpApiMedia = __decorate([
	        core_1.Injectable(),
	        __metadata("design:paramtypes", [Loaders_1.WpApiLoader,
	            http_1.Http])
	    ], WpApiMedia);
	    return WpApiMedia;
	}(Parent_1.WpApiParent));
	exports.WpApiMedia = WpApiMedia;


/***/ },
/* 13 */
/*!**********************!*\
  !*** ./src/Users.ts ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

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
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var http_1 = __webpack_require__(/*! @angular/http */ 3);
	var Parent_1 = __webpack_require__(/*! ./Parent */ 5);
	var Loaders_1 = __webpack_require__(/*! ./Loaders */ 6);
	var WpApiUsers = (function (_super) {
	    __extends(WpApiUsers, _super);
	    function WpApiUsers(wpApiLoader, http) {
	        var _this = _super.call(this, wpApiLoader, http) || this;
	        _this.wpApiLoader = wpApiLoader;
	        _this.http = http;
	        return _this;
	    }
	    WpApiUsers.prototype.getList = function (options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/users", options);
	    };
	    WpApiUsers.prototype.me = function (options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/users/me", options);
	    };
	    WpApiUsers.prototype.get = function (userId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/users/" + userId, options);
	    };
	    WpApiUsers.prototype.create = function (body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/users", body, options);
	    };
	    WpApiUsers.prototype.update = function (userId, body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/users/" + userId, body, options);
	    };
	    WpApiUsers.prototype.delete = function (userId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpDelete("/users/" + userId, options);
	    };
	    WpApiUsers = __decorate([
	        core_1.Injectable(),
	        __metadata("design:paramtypes", [Loaders_1.WpApiLoader,
	            http_1.Http])
	    ], WpApiUsers);
	    return WpApiUsers;
	}(Parent_1.WpApiParent));
	exports.WpApiUsers = WpApiUsers;


/***/ },
/* 14 */
/*!***************************!*\
  !*** ./src/Taxonomies.ts ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

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
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var http_1 = __webpack_require__(/*! @angular/http */ 3);
	var Parent_1 = __webpack_require__(/*! ./Parent */ 5);
	var Loaders_1 = __webpack_require__(/*! ./Loaders */ 6);
	var WpApiTaxonomies = (function (_super) {
	    __extends(WpApiTaxonomies, _super);
	    function WpApiTaxonomies(wpApiLoader, http) {
	        var _this = _super.call(this, wpApiLoader, http) || this;
	        _this.wpApiLoader = wpApiLoader;
	        _this.http = http;
	        return _this;
	    }
	    WpApiTaxonomies.prototype.getList = function (options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/taxonomies", options);
	    };
	    WpApiTaxonomies.prototype.get = function (taxonomiesType, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/taxonomies/" + taxonomiesType, options);
	    };
	    WpApiTaxonomies = __decorate([
	        core_1.Injectable(),
	        __metadata("design:paramtypes", [Loaders_1.WpApiLoader,
	            http_1.Http])
	    ], WpApiTaxonomies);
	    return WpApiTaxonomies;
	}(Parent_1.WpApiParent));
	exports.WpApiTaxonomies = WpApiTaxonomies;


/***/ },
/* 15 */
/*!*************************!*\
  !*** ./src/Statuses.ts ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

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
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var http_1 = __webpack_require__(/*! @angular/http */ 3);
	var Parent_1 = __webpack_require__(/*! ./Parent */ 5);
	var Loaders_1 = __webpack_require__(/*! ./Loaders */ 6);
	var WpApiStatuses = (function (_super) {
	    __extends(WpApiStatuses, _super);
	    function WpApiStatuses(wpApiLoader, http) {
	        var _this = _super.call(this, wpApiLoader, http) || this;
	        _this.wpApiLoader = wpApiLoader;
	        _this.http = http;
	        return _this;
	    }
	    WpApiStatuses.prototype.getList = function (options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/statuses", options);
	    };
	    WpApiStatuses.prototype.get = function (statusesName, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/statuses/" + statusesName, options);
	    };
	    WpApiStatuses = __decorate([
	        core_1.Injectable(),
	        __metadata("design:paramtypes", [Loaders_1.WpApiLoader,
	            http_1.Http])
	    ], WpApiStatuses);
	    return WpApiStatuses;
	}(Parent_1.WpApiParent));
	exports.WpApiStatuses = WpApiStatuses;


/***/ },
/* 16 */
/*!**********************!*\
  !*** ./src/Terms.ts ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

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
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var http_1 = __webpack_require__(/*! @angular/http */ 3);
	var Parent_1 = __webpack_require__(/*! ./Parent */ 5);
	var Loaders_1 = __webpack_require__(/*! ./Loaders */ 6);
	var defaultTaxoType = 'categories';
	var WpApiTerms = (function (_super) {
	    __extends(WpApiTerms, _super);
	    function WpApiTerms(wpApiLoader, http) {
	        var _this = _super.call(this, wpApiLoader, http) || this;
	        _this.wpApiLoader = wpApiLoader;
	        _this.http = http;
	        return _this;
	    }
	    WpApiTerms.prototype.getList = function (taxonomiesType, options) {
	        if (taxonomiesType === void 0) { taxonomiesType = defaultTaxoType; }
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/" + taxonomiesType, options);
	    };
	    WpApiTerms.prototype.get = function (taxonomiesType, termId, options) {
	        if (taxonomiesType === void 0) { taxonomiesType = defaultTaxoType; }
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/" + taxonomiesType + "/" + termId, options);
	    };
	    WpApiTerms.prototype.create = function (taxonomiesType, body, options) {
	        if (taxonomiesType === void 0) { taxonomiesType = defaultTaxoType; }
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/" + taxonomiesType, body, options);
	    };
	    WpApiTerms.prototype.update = function (taxonomiesType, termId, body, options) {
	        if (taxonomiesType === void 0) { taxonomiesType = defaultTaxoType; }
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/" + taxonomiesType + "/" + termId, body, options);
	    };
	    WpApiTerms.prototype.delete = function (taxonomiesType, termId, options) {
	        if (taxonomiesType === void 0) { taxonomiesType = defaultTaxoType; }
	        if (options === void 0) { options = {}; }
	        return this.httpDelete("/" + taxonomiesType + "/" + termId, options);
	    };
	    WpApiTerms = __decorate([
	        core_1.Injectable(),
	        __metadata("design:paramtypes", [Loaders_1.WpApiLoader,
	            http_1.Http])
	    ], WpApiTerms);
	    return WpApiTerms;
	}(Parent_1.WpApiParent));
	exports.WpApiTerms = WpApiTerms;


/***/ },
/* 17 */
/*!***********************!*\
  !*** ./src/Custom.ts ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

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
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var http_1 = __webpack_require__(/*! @angular/http */ 3);
	var Parent_1 = __webpack_require__(/*! ./Parent */ 5);
	var Loaders_1 = __webpack_require__(/*! ./Loaders */ 6);
	var Custom = (function (_super) {
	    __extends(Custom, _super);
	    function Custom(wpApiLoader, http, entityName) {
	        var _this = _super.call(this, wpApiLoader, http) || this;
	        _this.wpApiLoader = wpApiLoader;
	        _this.http = http;
	        _this.entityName = entityName;
	        return _this;
	    }
	    Custom.prototype.getList = function (options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/" + this.entityName, options);
	    };
	    Custom.prototype.get = function (customId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/" + this.entityName + "/" + customId, options);
	    };
	    Custom.prototype.create = function (body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/" + this.entityName, body, options);
	    };
	    Custom.prototype.update = function (customId, body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/" + this.entityName + "/" + customId, body, options);
	    };
	    Custom.prototype.delete = function (customId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpDelete("/" + this.entityName + "/" + customId, options);
	    };
	    return Custom;
	}(Parent_1.WpApiParent));
	exports.Custom = Custom;
	var WpApiCustom = (function (_super) {
	    __extends(WpApiCustom, _super);
	    function WpApiCustom(wpApiLoader, http) {
	        var _this = _super.call(this, wpApiLoader, http) || this;
	        _this.wpApiLoader = wpApiLoader;
	        _this.http = http;
	        return _this;
	    }
	    WpApiCustom.prototype.getInstance = function (entityName) {
	        if (entityName === void 0) { entityName = ''; }
	        if (typeof entityName !== 'string') {
	            throw new Error("getInstance needs an entity name");
	        }
	        return new Custom(this.wpApiLoader, this.http, entityName);
	    };
	    WpApiCustom = __decorate([
	        core_1.Injectable(),
	        __metadata("design:paramtypes", [Loaders_1.WpApiLoader,
	            http_1.Http])
	    ], WpApiCustom);
	    return WpApiCustom;
	}(Parent_1.WpApiParent));
	exports.WpApiCustom = WpApiCustom;


/***/ },
/* 18 */
/*!*********************!*\
  !*** ./src/Auth.ts ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

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
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var http_1 = __webpack_require__(/*! @angular/http */ 3);
	var Parent_1 = __webpack_require__(/*! ./Parent */ 5);
	var AuthSession_1 = __webpack_require__(/*! ./AuthSession */ 8);
	var Loaders_1 = __webpack_require__(/*! ./Loaders */ 6);
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
	    WpApiAuth = __decorate([
	        core_1.Injectable(),
	        __metadata("design:paramtypes", [Loaders_1.WpApiLoader,
	            http_1.Http])
	    ], WpApiAuth);
	    return WpApiAuth;
	}(Parent_1.WpApiParent));
	exports.WpApiAuth = WpApiAuth;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=wp-api-angular.umd.js.map