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
var clave_service_1 = require("../services/clave.service");
var app_component_1 = require("../app.component");
// var AES = require("crypto-js/aes");
// var SHA256 = require("crypto-js/sha256");
var sha256 = require('js-sha256');
// var SHA256 = require("crypto-js/sha256");
// import {SolicitudService} from '../services/solicitud.service';
var CambiarclaveComponent = (function () {
    // public cambiocla;
    // hash: string;
    function CambiarclaveComponent(_loginService, _ClaveService, _AppComponent, 
        // private _LoginComponent: LoginComponent,
        _router, _route) {
        this._loginService = _loginService;
        this._ClaveService = _ClaveService;
        this._AppComponent = _AppComponent;
        this._router = _router;
        this._route = _route;
        this.titulo = "Componente de Cambiar Clave";
    }
    CambiarclaveComponent.prototype.ngOnInit = function () {
        this.identity = this._loginService.getIdentity();
        this.cla = {
            'antpass': "",
            'newpass': "",
            'renewpass': ""
        };
        this.user = {
            'email': this.identity.aperUsuario,
            'password': "",
            'gethash': "false"
        };
        this.clave = {
            'clave': "",
            'correopersona': ""
        };
        // this.cambiocla = this._LoginComponent.paracambiar;
        // 		var createHash = require('sha.js')
        // var sha256 = createHash('sha256')
        // var sha512 = createHash('sha512')
        // var h = sha256.update('abc', 'utf8').digest('hex')
        // console.log(h) //ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad 
        // console.log(sha256('hello'));
    };
    // public ClaveAnterior(){
    // 	// this.hash = SHA256(this.user.password);
    // 	//     console.log(this.hash.toString());
    // 	console.log(this.user.password);
    // 	// console.log(SHA256());
    // 	// this.GuardarCambioClave(this.user);
    // 	console.log(sha256(this.user.password));
    // }
    CambiarclaveComponent.prototype.GuardarCambioClave = function () {
        var _this = this;
        this.user.password = (this.cla.antpass).trim();
        this.clavenc = sha256(this.user.password);
        if (this.clavenc == this.identity.aperClave) {
            // console.log("Claves iguales");
            this.newpass = (this.cla.newpass).trim();
            this.renewpass = (this.cla.renewpass).trim();
            // console.log(this.renewpass);
            // console.log(this.newpass);
            if (this.newpass == this.renewpass) {
                this.clave = {
                    'clave': this.newpass,
                    'correopersona': this.identity.aperUsuario
                };
                // this.clave.clave = sha256(this.newpass);
                // this.clave.correopersona = this.identity.aperUsuario;
                // console.log(this.clave);
                var token = this._loginService.getToken();
                this._ClaveService.CambiarClave(this.clave).subscribe(function (response) {
                    var guardar = response;
                    _this.guardar = guardar;
                    if (_this.guardar.status === "success") {
                        // alert("La solicitud ha sido creada satisfactoriamente");
                        alert(_this.guardar.msg);
                        // window.location.href='/solicitud';
                        _this._AppComponent.logout();
                    }
                    else {
                        alert(_this.guardar.msg);
                    }
                    // this._router.navigate(['/solicitud']);
                    // }
                }, function (error) {
                    _this.errorMessage = error;
                    if (_this.errorMessage != null) {
                        console.log(_this.errorMessage);
                        alert("Error al guardar datos");
                    }
                });
            }
            else {
                this.claveIguales = "Las nuevas claves no coinciden";
                console.log(this.claveIguales);
            }
        }
        else {
            // this.cla.antpass.focus();
            this.mensajeIguales = "Clave anterior incorrecta";
            console.log(this.mensajeIguales);
        }
        // if(this.user.password == ""){
        // 	console.log("password vacio");
        // 	this.user.password = this.cla.antpass;
        // }else{
        // 	console.log("password lleno");
        // }
        // console.log(a);
        // this._loginService.signup(a).subscribe(
        // 	response => {
        // 		let datoscla = response;
        // 		this.datoscla = datoscla;
        // 	// 	console.log(this.datoscla);
        // 	// console.log(this.identity.aperClave);
        // 	},
        // 	error => {
        // 		this.errorMessage = <any>error;
        // 		if(this.errorMessage != null){
        // 			console.log(this.errorMessage);
        // 			alert("Error en la petición 1");
        // 		}
        // 	}
        // 	);
        // console.log(this.datoscla);
        // if(this.datoscla !== undefined){
        // 	console.log(this.datoscla);
        // 	if(this.datoscla == this.identity.aperClave){
        // 		console.log("Claves iguales");
        // 	}else{
        // 		console.log("Claves diferentes");
        // 	}
        // }else{
        // 	this.user.password = "";
        // 	// alert("La Contraseña esta erronea");
        // 	console.log("Por favor ingrese la contraseña antigua");
        // }
    };
    CambiarclaveComponent = __decorate([
        core_1.Component({
            selector: 'cambiarclave',
            templateUrl: 'app/view/cambiarclave.html',
            providers: [login_service_1.LoginService, clave_service_1.ClaveService]
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService,
            clave_service_1.ClaveService,
            app_component_1.AppComponent,
            router_1.Router,
            router_1.ActivatedRoute])
    ], CambiarclaveComponent);
    return CambiarclaveComponent;
}());
exports.CambiarclaveComponent = CambiarclaveComponent;
//# sourceMappingURL=cambiarclave.component.js.map