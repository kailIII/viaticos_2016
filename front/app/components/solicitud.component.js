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
var core_1 = require("@angular/core");
// import { Router, ActivatedRoute, Params } from '@angular/router';
var login_service_1 = require("../services/login.service");
var solicitud_service_1 = require("../services/solicitud.service");
var SolicitudComponent = (function () {
    // public solicitudpropia;
    function SolicitudComponent(_loginService, _solicitudService) {
        this._loginService = _loginService;
        this._solicitudService = _solicitudService;
        this.titulo = "Solicitud";
    }
    SolicitudComponent.prototype.ngOnInit = function () {
        this.detalleSol = false;
        this.identity = this._loginService.getIdentity();
        this.token = this._loginService.getToken();
        this.funcionario = {
            'fun_id': this.identity.sub
        };
        this.OnVerDetalleSol();
    };
    SolicitudComponent.prototype.OnVerDetalleSol = function () {
        var _this = this;
        this._solicitudService.reporteSolicitud(this.token, this.funcionario).subscribe(function (response) {
            var info = response;
            _this.info = info;
            if (_this.info.length <= 0) {
                _this.NoMostrar = "No existen solicitudes realizadas";
                return _this.NoMostrar;
            }
            else {
                if (!_this.info.status) {
                    _this.datoSol = "";
                    var length = _this.info.length;
                    for (var i = 0; i < length; i++) {
                        _this.datoSolIteracion = JSON.stringify(_this.info[i]);
                        if (_this.datoSol == "") {
                            _this.datoSol = _this.datoSolIteracion;
                        }
                        else {
                            _this.datoSol = _this.datoSol + "," + _this.datoSolIteracion;
                        }
                    }
                    ;
                    _this.datoSolMostrar = JSON.parse("[" + _this.datoSol + "]");
                    return _this.datoSolMostrar;
                }
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la peticion de solicitudes");
            }
        });
    };
    SolicitudComponent.prototype.OnMostrarDetalle = function () {
        this.detalleSol = true;
    };
    SolicitudComponent.prototype.OnbotonAtrasSolicitud = function () {
        this.detalleSol = false;
    };
    return SolicitudComponent;
}());
SolicitudComponent = __decorate([
    core_1.Component({
        selector: 'solicitud',
        templateUrl: 'app/view/solicitud.html',
        providers: [login_service_1.LoginService, solicitud_service_1.SolicitudService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        solicitud_service_1.SolicitudService])
], SolicitudComponent);
exports.SolicitudComponent = SolicitudComponent;
//# sourceMappingURL=solicitud.component.js.map