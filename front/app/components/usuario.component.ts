import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {LoginService} from '../services/login.service';

declare var JQuery:any;
declare var $:any;

@Component({
	selector: 'usuario',
	templateUrl: 'app/view/usuario.html' ,
	providers: [LoginService]
})

export class UsuarioComponent implements OnInit { 
	public titulo = "Usuario";
	public user;
	public errorMessage;
	public identity;
	public token;
	public ide;
	public tk;
	public errorMsg = '';
	public usuario:Array<any>;
	public funcionario;
	public status;
	public UsuarioInicial;
	public datoUsuario;
	public datoUsuarioIteracion;
	public datoUsuarioMostrar: Array<any>;

	constructor(
		private _loginService: LoginService,
		private _router: Router,
		private _route: ActivatedRoute
		){}

	ngOnInit(){
		this.identity = this._loginService.getIdentity();
		let json_identity = JSON.stringify(this.identity);
		if(json_identity !== "null"){
			this.funcionario = {
				'id_fun': this.identity.sub
			};

			this._loginService.ver_user(this.funcionario).subscribe(
				response => {
					let info = response;
					this.datoUsuario = info;
						if(this.datoUsuario.length <=0){
							alert("Error en el servidor 5");
						}else{ 	
							if(!this.datoUsuario.status){
								this.UsuarioInicial = "";
								var length = this.datoUsuario.length;
								// alert(length);
								for (var i = 0; i < length; i++) {
									this.datoUsuarioIteracion = JSON.stringify(this.datoUsuario[i]);
									if(this.UsuarioInicial == ""){
										this.UsuarioInicial = this.datoUsuarioIteracion;
									}else{
										this.UsuarioInicial = this.UsuarioInicial+","+this.datoUsuarioIteracion;
									}
								};  
								this.datoUsuarioMostrar = JSON.parse("["+this.UsuarioInicial+"]");  
							}
						}
					},error => {
						this.errorMessage = <any>error;

						if(this.errorMessage != null){
							console.log(this.errorMessage);
							alert("Error en la peticion de OnMenu usuario");
						}
					});
		}
	}

	toggleTitle(){
		$('.title').slideToggle();
	}
}