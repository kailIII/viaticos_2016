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
// import {LoginComponent} from '../components/login.component';
var login_service_1 = require("../services/login.service");
var PrincipalComponent = (function () {
    function PrincipalComponent(_loginService, _router, _route) {
        this._loginService = _loginService;
        this._router = _router;
        this._route = _route;
        this.titulo = "Componente Principal";
    }
    PrincipalComponent.prototype.ngOnInit = function () {
        // this.menuUsuario();
    };
    return PrincipalComponent;
}());
PrincipalComponent = __decorate([
    core_1.Component({
        selector: "principal",
        templateUrl: "app/view/principal.html",
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        router_1.Router,
        router_1.ActivatedRoute])
], PrincipalComponent);
exports.PrincipalComponent = PrincipalComponent;
//# sourceMappingURL=principal.component.js.map