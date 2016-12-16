import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {LoginService} from './services/login.service';

@Component({
	selector: "mi-app",
	templateUrl: "app/view/home.html",
	providers: [LoginService]
})

export class AppComponent implements OnInit{ 
	public errorMessage;
	public identity;
	public token;
	public errorMsg = '';
	public funcionario;
	public idfuncionario;
	public info;
	public datoMenu;
	public datoMenuIteracion;
	public datoMenuMostrar: Array<any>;
	public user;

	constructor(
		private _loginService: LoginService,
		private _router: Router,
		private _route: ActivatedRoute
		){
	}

	ngOnInit(){
		this.user = {
			'email': "",
			'password': "",
			'gethash': "false"
		};
		this.identity = this._loginService.getIdentity();
		if(this.identity){
			// this.Onloguearse();
			this.menuUsuario();
		}else{
			this.Onloguearse();
			this.menuUsuario();
		}
	}
	menuUsuario(){
		this.identity = this._loginService.getIdentity();
		this.token = this._loginService.getToken();
		if(this._loginService.checkCredentials(this.token)){
			this.idfuncionario = {
				'id_fun': this.identity.sub
			};
			this._loginService.menuUsuario(this.idfuncionario).subscribe(
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
					// this.errorMessage = <any>error;

					// if(this.errorMessage != null){
					// 	console.log(this.errorMessage);
					// 	alert("Error en la peticion de OnMenu");
						// window.location.href='/principal';
						window.location.reload();
					// }
				});
		}
	}

	Onloguearse(){
		if(!this._loginService.checkCredentials(this._loginService.getToken())){
			this._loginService.signup(this.user).subscribe(
				response => {
					let identity = response;
					this.identity = identity;
					if(this.identity.length <= 1){
						alert("Error en el servidor 4");
					}else{ 	
						if(!this.identity.status){
							localStorage.setItem('identity', JSON.stringify(identity));
							// sessionStorage.setItem('identity', JSON.stringify(identity));
							this.user.gethash = "true";
							this._loginService.signup(this.user).subscribe(
								response => {
									let token = response;
									this.token = token;
									if(this.token.length <= 0){
										alert("Error en el servidor 3");
									}else{
										if(!this.token.status){
											localStorage.setItem('token',token);
											// sessionStorage.setItem('token',token);
											if(this._loginService.checkCredentials(this._loginService.getToken())){
												// this._router.navigate(['/principal']);
												window.location.href='/principal';

											}else{
												// this._router.navigate(['/']);
												window.location.href='/';
											}
										}
									}
								},
								error =>{
									this.errorMessage = <any>error;
									if(this.errorMessage != null){
										console.log(this.errorMessage);
										alert("Error en la petición 2");
									}
								}
								);
						}
					}
				},
				error => {
					this.errorMessage = <any>error;
					if(this.errorMessage != null){
						console.log(this.errorMessage);
						alert("Error en la petición 1");
					}
				}
				);
		}
	}

	logout() {
		localStorage.removeItem('identity');
		localStorage.removeItem('token');
		sessionStorage.removeItem('identity');
		sessionStorage.removeItem('token');
		this.identity = null;
		this.token = null;
		window.location.href='/';
	}
}
