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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var LoginService = (function () {
    function LoginService(_http) {
        this._http = _http;
        this.url = "http://localhost/sistema_viaticos/back/web/app_dev.php";
    }
    LoginService.prototype.signup = function (user_to_login) {
        var json = JSON.stringify(user_to_login);
        var params = "json=" + json;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/login", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.getIdentity = function () {
        var identity = JSON.parse(localStorage.getItem('identity'));
        // let identity = JSON.parse(sessionStorage.getItem('identity'));
        if (identity != "undefined") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    };
    LoginService.prototype.getJe = function () {
        var je = localStorage.getItem('je');
        // console.log(je);
        // let identity = JSON.parse(sessionStorage.getItem('identity'));
        if (je != "undefined") {
            this.je = je;
        }
        else {
            this.je = null;
        }
        return this.je;
    };
    LoginService.prototype.getToken = function () {
        var token = localStorage.getItem('token');
        // let token = sessionStorage.getItem('token');
        if (token != "undefined") {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    };
    LoginService.prototype.checkCredentials = function (token_to_check) {
        var token = JSON.stringify(token_to_check);
        var params = "authorizarion=" + token;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/revisar", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.menuUsuario = function (user_to_search) {
        var json = JSON.stringify(user_to_search);
        var params = "json=" + json + "&authorization=" + this.getToken();
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/modulo_rol/buscar", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.register = function (user_to_register) {
        var json = JSON.stringify(user_to_register);
        var params = "json=" + json;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/user/new", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.update_user = function (user_to_update) {
        var json = JSON.stringify(user_to_update);
        var params = "json=" + json + "&authorization=" + this.getToken();
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/user/edit", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.ver_user = function (user_to_view) {
        var json = JSON.stringify(user_to_view);
        var params = "json=" + json + "&authorization=" + this.getToken();
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/persona/ver", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map