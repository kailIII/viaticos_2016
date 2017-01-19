import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, Params } from '@angular/router';
import {LoginService} from '../services/login.service';
import {SolicitudService} from '../services/solicitud.service';

@Component({
	selector: 'solicitud',
	templateUrl: 'app/view/solicitud.html',
	providers: [LoginService, SolicitudService]
})

export class SolicitudComponent {

	public titulo = "Solicitud";
	public identity;
	public funcionario;
	public errorMessage;
	public status;
	public info;
	public datoSol;
	public datoSolIteracion;
	public datoSolMostrar: Array<any>;
	public NoMostrar;
	public token;
	public detalleSol: boolean;
	// public solicitudpropia;

	constructor(
		private _loginService: LoginService,
		private _solicitudService: SolicitudService
		){}

	ngOnInit(){
		this.detalleSol = false;
		this.identity = this._loginService.getIdentity();
		this.token = this._loginService.getToken();

		this.funcionario = {
			'fun_id': this.identity.sub
		};
		this.OnVerDetalleSol();	
	}

	OnVerDetalleSol(){
		this._solicitudService.reporteSolicitud(this.token,this.funcionario).subscribe(
			response => {
				let info = response;
				this.info = info;
				if(this.info.length <=0){
					this.NoMostrar = "No existen solicitudes realizadas";
					return this.NoMostrar;
				}else{ 	
					if(!this.info.status){
						this.datoSol = "";
						var length = this.info.length;
						for (var i = 0; i < length; i++) {
							this.datoSolIteracion = JSON.stringify(this.info[i]);
							if(this.datoSol == ""){
								this.datoSol = this.datoSolIteracion;
							}else{
								this.datoSol = this.datoSol+","+this.datoSolIteracion;
							}
						};  
						this.datoSolMostrar = JSON.parse("["+this.datoSol+"]");  
						return this.datoSolMostrar;
					}
				}
			},error => {
				this.errorMessage = <any>error;

				if(this.errorMessage != null){
					console.log(this.errorMessage);
					alert("Error en la peticion de solicitudes");
				}
			});
	}

	OnMostrarDetalle(){
		this.detalleSol = true;
	}

	OnbotonAtrasSolicitud(){
		this.detalleSol = false;
	}


}

