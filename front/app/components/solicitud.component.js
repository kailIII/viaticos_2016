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
var SolicitudComponent = (function () {
    function SolicitudComponent(_loginService) {
        this._loginService = _loginService;
        this.titulo = "Solicitud";
    }
    SolicitudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.identity = this._loginService.getIdentity();
        this.funcionario = {
            'id_fun': this.identity.sub
        };
        this._loginService.menuUsuario(this.funcionario).subscribe(function (response) {
            var info = response;
            _this.info = info;
            if (_this.info.length <= 0) {
                alert("Error en el servidor 5");
            }
            else {
                if (!_this.info.status) {
                    _this.datoMenu = "";
                    var length = _this.info.length;
                    for (var i = 0; i < length; i++) {
                        _this.datoMenuIteracion = JSON.stringify(_this.info[i].mod);
                        if (_this.datoMenu == "") {
                            _this.datoMenu = _this.datoMenuIteracion;
                        }
                        else {
                            _this.datoMenu = _this.datoMenu + "," + _this.datoMenuIteracion;
                        }
                    }
                    ;
                    _this.datoMenuMostrar = JSON.parse("[" + _this.datoMenu + "]");
                    return _this.datoMenuMostrar;
                }
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la peticion de OnMenu");
            }
        });
    };
    return SolicitudComponent;
}());
SolicitudComponent = __decorate([
    core_1.Component({
        selector: 'solicitud',
        templateUrl: 'app/view/solicitud.html',
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], SolicitudComponent);
exports.SolicitudComponent = SolicitudComponent;
//# sourceMappingURL=solicitud.component.js.map