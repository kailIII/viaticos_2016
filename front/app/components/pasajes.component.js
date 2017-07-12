"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { Router, ActivatedRoute, Params } from '@angular/router';
var PasajesComponent = (function () {
    function PasajesComponent() {
        this.titulo = "Componente de Pasajes";
        // public identity;
        // public funcionario;
        // public errorMessage;
        // public status;
        // public info;
        // public datoMenu;
        // public datoMenuIteracion;
        // public datoMenuMostrar: Array<any>;
        // constructor(
        // 	private _loginService: LoginService
        // 	){}
        // ngOnInit(){
        // 	this.identity = this._loginService.getIdentity();
        // 	this.funcionario = {
        // 		'id_fun': this.identity.sub
        // 	};
        // 	this._loginService.menuUsuario(this.funcionario).subscribe(
        // 		response => {
        // 			let info = response;
        // 			this.info = info;
        // 			if(this.info.length <=0){
        // 				alert("Error en el servidor 5");
        // 			}else{ 	
        // 				if(!this.info.status){
        // 					this.datoMenu = "";
        // 					var length = this.info.length;
        // 					for (var i = 0; i < length; i++) {
        // 						this.datoMenuIteracion = JSON.stringify(this.info[i].mod);
        // 						if(this.datoMenu == ""){
        // 							this.datoMenu = this.datoMenuIteracion;
        // 						}else{
        // 							this.datoMenu = this.datoMenu+","+this.datoMenuIteracion;
        // 						}
        // 					};  
        // 					this.datoMenuMostrar = JSON.parse("["+this.datoMenu+"]");  
        // 					return this.datoMenuMostrar;
        // 				}
        // 			}
        // 		},error => {
        // 			this.errorMessage = <any>error;
        // 			if(this.errorMessage != null){
        // 				console.log(this.errorMessage);
        // 				alert("Error en la peticion de OnMenu")
        // 			}
        // 		});
        // }
    }
    PasajesComponent = __decorate([
        core_1.Component({
            selector: 'pasajes',
            templateUrl: 'app/view/pasajes.html'
            // providers: [LoginService]
        })
    ], PasajesComponent);
    return PasajesComponent;
}());
exports.PasajesComponent = PasajesComponent;
//# sourceMappingURL=pasajes.component.js.map