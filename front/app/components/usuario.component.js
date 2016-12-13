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
var router_1 = require("@angular/router");
var login_service_1 = require("../services/login.service");
var UsuarioComponent = (function () {
    function UsuarioComponent(_loginService, _router, _route) {
        this._loginService = _loginService;
        this._router = _router;
        this._route = _route;
        this.titulo = "Usuario";
        this.errorMsg = '';
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.usuario = [];
        this.identity = this._loginService.getIdentity();
        var json_identity = JSON.stringify(this.identity);
        // console.log(json_identity);
        // alert("json_identity : "+json_identity);
        // alert("Punto 2");
        if (json_identity !== "null") {
            this.funcionario = {
                'id_fun': this.identity.sub
            };
            this._loginService.ver_user(this.funcionario).subscribe(function (response) {
                var info = response;
                _this.datoUsuario = info;
                // 	var length = this.datoUsuario.length;
                // 		for (var i = 0; i < length; i++) {
                // 	this.datoUsuarioIteracion = this.datoUsuario[i];
                // }
                // 	console.log(this.datoUsuarioIteracion);
                // 	return this.datoUsuarioIteracion;
                if (_this.datoUsuario.length <= 0) {
                    alert("Error en el servidor 5");
                }
                else {
                    if (!_this.datoUsuario.status) {
                        _this.UsuarioInicial = "";
                        var length = _this.datoUsuario.length;
                        // alert(length);
                        for (var i = 0; i < length; i++) {
                            _this.datoUsuarioIteracion = JSON.stringify(_this.datoUsuario[i]);
                            if (_this.UsuarioInicial == "") {
                                _this.UsuarioInicial = _this.datoUsuarioIteracion;
                            }
                            else {
                                _this.UsuarioInicial = _this.UsuarioInicial + "," + _this.datoUsuarioIteracion;
                            }
                        }
                        ;
                        _this.datoUsuarioMostrar = JSON.parse("[" + _this.UsuarioInicial + "]");
                        // console.log(this.datoUsuarioMostrar);
                        return _this.datoUsuarioMostrar;
                    }
                }
            }, function (error) {
                _this.errorMessage = error;
                if (_this.errorMessage != null) {
                    console.log(_this.errorMessage);
                    alert("Error en la peticion de OnMenu");
                }
            });
        }
    };
    return UsuarioComponent;
}());
UsuarioComponent = __decorate([
    core_1.Component({
        selector: 'usuario',
        templateUrl: 'app/view/usuario.html',
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        router_1.Router,
        router_1.ActivatedRoute])
], UsuarioComponent);
exports.UsuarioComponent = UsuarioComponent;
//# sourceMappingURL=usuario.component.js.map