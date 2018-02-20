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
//# sourceMappingURL=AuthSession.js.map