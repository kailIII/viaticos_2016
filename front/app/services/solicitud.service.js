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
var SolicitudService = (function () {
    function SolicitudService(_http) {
        this._http = _http;
        this.url = "http://localhost/sistema_viaticos/back/web/app_dev.php";
    }
    SolicitudService.prototype.GetCiudad = function () {
        // let json = JSON.stringify(user_to_login);
        // let params = "authorizarion="+token;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.get(this.url + "/buscar/ciudad")
            .map(function (res) { return res.json(); });
    };
    SolicitudService.prototype.GetComisionado = function () {
        // let json = JSON.stringify(trans_to_search);
        // console.log(json);
        // let params = "authorizarion="+token;
        // let params = "json="+json+"&authorization="+token;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.get(this.url + "/buscar/persona")
            .map(function (res) { return res.json(); });
    };
    SolicitudService.prototype.AddSolicitud = function (token, data) {
        var json = JSON.stringify(data);
        var params = "json=" + json + "&authorization=" + token;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/solicitud/nuevo", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SolicitudService.prototype.reporteSolicitud = function (token, data) {
        var json = JSON.stringify(data);
        var params = "json=" + json + "&authorization=" + token;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/solicitud/reporte", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SolicitudService.prototype.detallesolrealizadas = function (token, data) {
        var json = JSON.stringify(data);
        var params = "json=" + json + "&authorization=" + token;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/solicitud/detallesolicitud", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SolicitudService.prototype.porfirmarSolicitud = function (token, data) {
        var json = JSON.stringify(data);
        var params = "json=" + json + "&authorization=" + token;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/solicitud/porfirmar", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SolicitudService.prototype.jefeSolicitud = function (token, data) {
        var json = JSON.stringify(data);
        var params = "json=" + json + "&authorization=" + token;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/solicitud/esjefe", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SolicitudService.prototype.firmarSolicitud = function (token, data) {
        var json = JSON.stringify(data);
        var params = "json=" + json + "&authorization=" + token;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/solicitud/firmar", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return SolicitudService;
}());
SolicitudService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SolicitudService);
exports.SolicitudService = SolicitudService;
//# sourceMappingURL=solicitud.service.js.map