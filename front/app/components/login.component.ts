import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {LoginService} from '../services/login.service';
import {SolicitudService} from '../services/solicitud.service';


@Component({
	selector: "login",
	templateUrl: "app/view/login.html",
	providers: [LoginService, SolicitudService]
})

export class LoginComponent implements OnInit { 
	public user;
	public errorMessage;
	public identity;
	public token;
	public ide;
	public tk;
	public errorMsg: boolean;
	public funcionario;
	public info;
	public datoMenu;
	public datoMenuIteracion;
	public datoMenuMostrar: Array<any>;
	public validaridentity;
	public info15;

	constructor(
		private _loginService: LoginService,
		private _solicitudService: SolicitudService,
		private _router: Router,
		private _route: ActivatedRoute
		){}

	ngOnInit(){
		this.errorMsg = false;
		this.user = {
			'email': "",
			'password': "",
			'gethash': "false"
		};
	}
	onSubmit(){
		this._loginService.signup(this.user).subscribe(
			response => {
				let identity = response;
				this.identity = identity;
				if(this.identity.length <=1){
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

											this.funcionario = {
													'fun_id': this.identity.sub
												};
												this._solicitudService.jefeSolicitud(this.token,this.funcionario).subscribe(
													response => {
														let info = response;
														this.info15 = info;
														if(this.info15 > 0){
															localStorage.setItem('je', "S");
															// this.je="S";
														}else{
															localStorage.setItem('je', "N");
															// this.je="N";
														}
											window.location.href='/principal';
											},error => {
																this.errorMessage = <any>error;
																if(this.errorMessage != null){
																	console.log(this.errorMessage);
																	alert("Error en la peticion de solicitudes");
																}
															});

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
					}else{
						this.errorMsg = true;
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

	corregirDatos(){
		this.errorMsg = false;
	}
	// menuUsuario(idpersona:any){
	// 	// this.identity = this._loginService.getIdentity();
	// 	let json_identity = JSON.stringify(idpersona);
	// 	if(json_identity !== "null"){
	// 		this.funcionario = {
	// 			'id_fun': this.identity.sub
	// 		};
	// 		this._loginService.menuUsuario(this.funcionario).subscribe(
	// 			response => {
	// 				let info = response;
	// 				this.info = info;
	// 				if(this.info.length <=0){
	// 					alert("Error en el servidor 5");
	// 				}else{ 	
	// 					if(!this.info.status){
	// 						this.datoMenu = "";
	// 						var length = this.info.length;
	// 						for (var i = 0; i < length; i++) {
	// 							this.datoMenuIteracion = JSON.stringify(this.info[i].mod);
	// 							if(this.datoMenu == ""){
	// 								this.datoMenu = this.datoMenuIteracion;
	// 							}else{
	// 								this.datoMenu = this.datoMenu+","+this.datoMenuIteracion;
	// 							}
	// 						};  
	// 						this.datoMenuMostrar = JSON.parse("["+this.datoMenu+"]");  
	// 						return this.datoMenuMostrar;
	// 					}
	// 				}
	// 			},error => {
	// 				this.errorMessage = <any>error;

	// 				if(this.errorMessage != null){
	// 					console.log(this.errorMessage);
	// 					alert("Error en la peticion de OnMenu")
	// 				}
	// 			});
	// 	}
	// }
	// logout() {
	// 	//      		this._route.params.subscribe(params => {
	// 		// let logout = +params["id"];
	// 		// if(logout == 1){
	// 			localStorage.removeItem('identity');
	// 			localStorage.removeItem('token');
	// 			sessionStorage.removeItem('identity');
	// 			sessionStorage.removeItem('token');
	// 			this.identity = null;
	// 			this.token = null;
	// 			this._router.navigate(['']);
	// 			// 	// }
	// 			// });
	// 		}
}
