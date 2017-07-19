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
var login_service_1 = require("./services/login.service");
var solicitud_service_1 = require("./services/solicitud.service");
var AppComponent = (function () {
    function AppComponent(_loginService, _solicitudService, _router, _route) {
        this._loginService = _loginService;
        this._solicitudService = _solicitudService;
        this._router = _router;
        this._route = _route;
        this.errorMsg = '';
        this.progress = new core_1.EventEmitter();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.salida = false;
        this.user = {
            'email': "",
            'password': "",
            'gethash': "false"
        };
        this.identity = this._loginService.getIdentity();
        if (this.identity) {
            this.menuUsuario();
            this.OnCuenta();
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
                window.location.reload();
            });
        }
        else {
            alert("Su sesión ha expirado, por favor ingrese nuevamente sus credenciales");
            this.logout();
        }
    };
    // Onloguearse(){
    // 	if(!this._loginService.checkCredentials(this._loginService.getToken())){
    // 		this._loginService.signup(this.user).subscribe(
    // 			response => {
    // 				let identity = response;
    // 				this.identity = identity;
    // 				if(this.identity.length <= 1){
    // 					alert("Error en el servidor 4");
    // 				}else{ 	
    // 					if(!this.identity.status){
    // 						localStorage.setItem('identity', JSON.stringify(identity));
    // 						this.user.gethash = "true";
    // 						this._loginService.signup(this.user).subscribe(
    // 							response => {
    // 								let token = response;
    // 								this.token = token;
    // 								if(this.token.length <= 0){
    // 									alert("Error en el servidor 3");
    // 								}else{
    // 									if(!this.token.status){
    // 										localStorage.setItem('token',token);
    // 										if(this._loginService.checkCredentials(this._loginService.getToken())){
    // 											// this._router.navigate(['/principal']);
    // 											// window.location.href='/principal';
    // 											// this.funcionario = {
    // 												// 	'fun_id': this.identity.sub
    // 												// };
    // 												// this._solicitudService.jefeSolicitud(this.token,this.funcionario).subscribe(
    // 												// 	response => {
    // 													// 		let info = response;
    // 													// 		this.info15 = info;
    // 													// 		if(this.info15 > 0){
    // 														// 			localStorage.setItem('je', "S");
    // 														// 		}else{
    // 															// 			localStorage.setItem('je', "N");
    // 															// 		}
    // 															// if(this._loginService.checkCredentials(this._loginService.getToken())){
    // 																// this._router.navigate(['/principal']);
    // 														// 		this._loginService.forzarcambio(this.user).subscribe(
    // 														// 			response => {
    // 														// 				let cambio = response;
    // 														// 				this.cambio = cambio;
    // 														// 				if(this.cambio.aperCambioclave == 1){
    // 														// 	window.location.href='/principal';
    // 														// }else{
    // 														// 	window.location.href='/principal';
    // 														// 	this._router.navigate(['/cambiarclave']);
    // 														// }
    // 																		window.location.href='/principal';
    // 																		// else{
    // 																			// 	this.mostrarmenufirma = 0;
    // 																			// 	// }
    // 																			// },error => {
    // 																				// 	this.errorMessage = <any>error;
    // 																				// 	if(this.errorMessage != null){
    // 																					// 		console.log(this.errorMessage);
    // 																					// 		alert("Error en la peticion de solicitudes");
    // 																					// 	}
    // 																					// });
    // 																				// },
    // 																				// error => {
    // 																				// 	this.errorMessage = <any>error;
    // 																				// 	if(this.errorMessage != null){
    // 																				// 		console.log(this.errorMessage);
    // 																				// 		alert("Error en al iniciar Apache");
    // 																				// 	}
    // 																				// }
    // 																				// );
    // 															}else{
    // 																window.location.href='/';
    // 																this.logout();
    // 															}
    // 														}else{
    // 															window.location.href='/';
    // 															this.logout();
    // 														}
    // 													}
    // 												},
    // 												error =>{
    // 													this.errorMessage = <any>error;
    // 													if(this.errorMessage != null){
    // 														console.log(this.errorMessage);
    // 														alert("Error en la petición 2");
    // 														this.logout();
    // 													}
    // 												}
    // 												);
    // 					}
    // 				}
    // 			},
    // 			error => {
    // 				this.errorMessage = <any>error;
    // 				if(this.errorMessage != null){
    // 					console.log(this.errorMessage);
    // 					alert("Error en al iniciar Apache");
    // 				}
    // 			}
    // 			);
    // 	}
    // }
    AppComponent.prototype.logout = function () {
        this.salida = true;
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        localStorage.removeItem('je');
        sessionStorage.removeItem('je');
        sessionStorage.removeItem('identity');
        sessionStorage.removeItem('token');
        this.identity = null;
        this.token = null;
        this.je = null;
        this.salida = false;
        window.location.href = '/';
    };
    AppComponent.prototype.Oncuentaregresiva = function () {
        var fechasesionfin = this._loginService.identity.exp;
        var hoyini = new Date(new Date().toLocaleString("en-US")).getTime();
        var hoy = hoyini / 1000;
        var dias = 0;
        var horas = 0;
        var minutos = 0;
        var segundos = 0;
        var diferencia = (fechasesionfin - hoy);
        if (--diferencia > 0) {
            dias = Math.floor(diferencia / 86400);
            diferencia = diferencia - (86400 * dias);
            horas = Math.floor(diferencia / 3600);
            diferencia = diferencia - (3600 * horas);
            minutos = Math.floor(diferencia / 60);
            diferencia = diferencia - (60 * minutos);
            segundos = Math.floor(diferencia);
            if (horas > 0) {
                this.contador = horas + ' Hora, ' + minutos + ' Minutos, ' + segundos + ' Segundos';
            }
            else if (minutos > 0) {
                this.contador = minutos + ' Minutos, ' + segundos + ' Segundos';
            }
            else if (segundos > 1) {
                this.contador = segundos + ' Segundos';
            }
            else if (segundos == 1) {
                this.contador = segundos + ' Segundo';
            }
            else {
                this.contador = segundos + ' Segundos';
            }
            this.progress.emit(diferencia);
        }
        else {
            alert("Su sesión ha expirado, por favor ingresar nuevamente al sistema");
            this.logout();
        }
    };
    AppComponent.prototype.OnCuenta = function () {
        var _this = this;
        setInterval(function () { return _this.Oncuentaregresiva(); }, 1000);
    };
    return AppComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AppComponent.prototype, "progress", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: "mi-app",
        templateUrl: "app/view/home.html",
        providers: [login_service_1.LoginService, solicitud_service_1.SolicitudService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        solicitud_service_1.SolicitudService,
        router_1.Router,
        router_1.ActivatedRoute])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map