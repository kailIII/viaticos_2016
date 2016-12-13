import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, Params } from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
	selector: 'solicitud',
	templateUrl: 'app/view/solicitud.html',
	providers: [LoginService]
})

export class SolicitudComponent {

	public titulo = "Solicitud";
	public identity;
	public funcionario;
	public errorMessage;
	public status;
	public info;
	public datoMenu;
	public datoMenuIteracion;
	public datoMenuMostrar: Array<any>;

	constructor(
		private _loginService: LoginService
		){}

	ngOnInit(){
		this.identity = this._loginService.getIdentity();

		this.funcionario = {
			'id_fun': this.identity.sub
		};

		this._loginService.menuUsuario(this.funcionario).subscribe(
			response => {
				let info = response;
				this.info = info;
				if(this.info.length <=0){
					alert("Error en el servidor 5");
				}else{ 	
					if(!this.info.status){
						this.datoMenu = "";
						var length = this.info.length;
						for (var i = 0; i < length; i++) {
							this.datoMenuIteracion = JSON.stringify(this.info[i].mod);
							if(this.datoMenu == ""){
								this.datoMenu = this.datoMenuIteracion;
							}else{
								this.datoMenu = this.datoMenu+","+this.datoMenuIteracion;
							}
						};  
						this.datoMenuMostrar = JSON.parse("["+this.datoMenu+"]");  
						return this.datoMenuMostrar;
					}
				}
			},error => {
				this.errorMessage = <any>error;

				if(this.errorMessage != null){
					console.log(this.errorMessage);
					alert("Error en la peticion de OnMenu")
				}
			});
	}


}

