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
var login_service_1 = require("./services/login.service");
var AppComponent = (function () {
    function AppComponent(_loginService, _router, _route) {
        this._loginService = _loginService;
        this._router = _router;
        this._route = _route;
        this.errorMsg = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.user = {
            'email': "",
            'password': "",
            'gethash': "false"
        };
        this.identity = this._loginService.getIdentity();
        this.token = this._loginService.getToken();
        this.verificacion = this._loginService.checkCredentials(this.token);
        if (this.identity) {
            // this.Onloguearse();
            this.menuUsuario();
        }
        else {
            this.Onloguearse();
        }
    };
    AppComponent.prototype.menuUsuario = function () {
        var _this = this;
        this.identity = this._loginService.getIdentity();
        this.token = this._loginService.getToken();
        if (this._loginService.checkCredentials(this.token)) {
            this.idfuncionario = {
                'id_fun': this.identity.sub
            };
            this._loginService.menuUsuario(this.idfuncionario).subscribe(function (response) {
                var info = response;
                _this.info = info;
                if (_this.info.length <= 0) {
                    alert("Error en el servidor 5");
                }
                else {
                    // if(!this.info.status){
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
            }, function (error) {
                // this.errorMessage = <any>error;
                // if(this.errorMessage != null){
                // 	console.log(this.errorMessage);
                // 	alert("Error en la peticion de OnMenu");
                // window.location.href='/principal';
                window.location.reload();
                // }
            });
        }
        else {
            alert("Su sesión ha expirado, por favor ingrese nuevamente sus credenciales");
            this.logout();
        }
    };
    AppComponent.prototype.Onloguearse = function () {
        var _this = this;
        if (!this._loginService.checkCredentials(this._loginService.getToken())) {
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
                                        window.location.href = '/principal';
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
                }
            }, function (error) {
                _this.errorMessage = error;
                if (_this.errorMessage != null) {
                    console.log(_this.errorMessage);
                    alert("Error en al iniciar Apache");
                }
            });
        }
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        sessionStorage.removeItem('identity');
        sessionStorage.removeItem('token');
        this.identity = null;
        this.token = null;
        window.location.href = '/';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "mi-app",
        templateUrl: "app/view/home.html",
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        router_1.Router,
        router_1.ActivatedRoute])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map