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
var router_1 = require("@angular/router");
var login_service_1 = require("../services/login.service");
var solicitud_service_1 = require("../services/solicitud.service");
var LoginComponent = (function () {
    function LoginComponent(_loginService, _solicitudService, _router, _route) {
        this._loginService = _loginService;
        this._solicitudService = _solicitudService;
        this._router = _router;
        this._route = _route;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errorMsg = false;
        this.user = {
            'email': "",
            'password': "",
            'gethash': "false"
        };
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._loginService.signup(this.user).subscribe(function (response) {
            var identity = response;
            _this.identity = identity;
            if (_this.identity.length <= 1) {
                alert("Error en el servidor 4");
            }
            else {
                if (!_this.identity.status) {
                    localStorage.setItem('identity', JSON.stringify(identity));
                    // sessionStorage.setItem('identity', JSON.stringify(identity));
                    _this.user.gethash = "true";
                    _this._loginService.signup(_this.user).subscribe(function (response) {
                        var token = response;
                        _this.token = token;
                        if (_this.token.length <= 0) {
                            alert("Error en el servidor 3");
                        }
                        else {
                            if (!_this.token.status) {
                                localStorage.setItem('token', token);
                                // sessionStorage.setItem('token',token);
                                if (_this._loginService.checkCredentials(_this._loginService.getToken())) {
                                    // this._router.navigate(['/principal']);
                                    _this.funcionario = {
                                        'fun_id': _this.identity.sub
                                    };
                                    _this._solicitudService.jefeSolicitud(_this.token, _this.funcionario).subscribe(function (response) {
                                        var info = response;
                                        _this.info15 = info;
                                        if (_this.info15 > 0) {
                                            localStorage.setItem('je', "S");
                                            // this.je="S";
                                        }
                                        else {
                                            localStorage.setItem('je', "N");
                                            // this.je="N";
                                        }
                                        window.location.href = '/principal';
                                    }, function (error) {
                                        _this.errorMessage = error;
                                        if (_this.errorMessage != null) {
                                            console.log(_this.errorMessage);
                                            alert("Error en la peticion de solicitudes");
                                        }
                                    });
                                }
                                else {
                                    // this._router.navigate(['/']);
                                    window.location.href = '/';
                                }
                            }
                        }
                    }, function (error) {
                        _this.errorMessage = error;
                        if (_this.errorMessage != null) {
                            console.log(_this.errorMessage);
                            alert("Error en la petición 2");
                        }
                    });
                }
                else {
                    _this.errorMsg = true;
                }
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la petición 1");
            }
        });
    };
    LoginComponent.prototype.corregirDatos = function () {
        this.errorMsg = false;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "login",
        templateUrl: "app/view/login.html",
        providers: [login_service_1.LoginService, solicitud_service_1.SolicitudService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        solicitud_service_1.SolicitudService,
        router_1.Router,
        router_1.ActivatedRoute])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map