import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {LoginService} from './services/login.service';
import {SolicitudService} from './services/solicitud.service';

@Component({
	selector: "mi-app",
	templateUrl: "app/view/home.html",
	providers: [LoginService, SolicitudService]
})

export class AppComponent implements OnInit{ 
	public errorMessage;
	public identity;
	public token;
	public je;
	public errorMsg = '';
	public funcionario;
	public idfuncionario;
	public info;
	public datoMenu;
	public datoMenuIteracion;
	public datoMenuMostrar: Array<any>;
	public user;
	public verificacion;
	public dias;
	public horas;
	public minutos;
	public segundos;
	public contador;
	public salida;
	public info15;
	@Output() progress: EventEmitter<any> = new EventEmitter();

	constructor(
		private _loginService: LoginService,
		private _solicitudService: SolicitudService,
		private _router: Router,
		private _route: ActivatedRoute
		){

	}
	ngOnInit(){
		this.salida = false;
		this.user = {
			'email': "",
			'password': "",
			'gethash': "false"
		};
		this.identity = this._loginService.getIdentity();
		if(this.identity){
			this.menuUsuario();
			this.OnCuenta();
		}
		// else{
		// 	// this.Onloguearse();
		// 	this.logout();
		// }
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
						// if(!this.info.status){
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

							// }
						}
					},error => {
						window.location.reload();
					});
		}else{
			alert("Su sesión ha expirado, por favor ingrese nuevamente sus credenciales");
			this.logout();
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
												// window.location.href='/principal';
												// this.funcionario = {
												// 	'fun_id': this.identity.sub
												// };
												// this._solicitudService.jefeSolicitud(this.token,this.funcionario).subscribe(
												// 	response => {
												// 		let info = response;
												// 		this.info15 = info;
												// 		if(this.info15 > 0){
												// 			localStorage.setItem('je', "S");
												// 		}else{
												// 			localStorage.setItem('je', "N");
												// 		}
														// if(this._loginService.checkCredentials(this._loginService.getToken())){
															// this._router.navigate(['/principal']);
															window.location.href='/principal';


															// else{
																// 	this.mostrarmenufirma = 0;
															// 	// }
															// },error => {
															// 	this.errorMessage = <any>error;
															// 	if(this.errorMessage != null){
															// 		console.log(this.errorMessage);
															// 		alert("Error en la peticion de solicitudes");
															// 	}
															// });
											}else{
												// this._router.navigate(['/']);
												window.location.href='/';
												this.logout();
											}
										}else{
											// this._router.navigate(['/']);
											window.location.href='/';
											this.logout();
										}
									}
								// }
							},
							error =>{
								this.errorMessage = <any>error;
								if(this.errorMessage != null){
									console.log(this.errorMessage);
									alert("Error en la petición 2");
									this.logout();
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
						alert("Error en al iniciar Apache");
					}
				}
				);
		}
	}

	logout() {
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
		this.salida= false;
		window.location.href='/';
	}

	Oncuentaregresiva(){
		// var fechasesioninicio = this._loginService.identity.iat;
		var fechasesionfin = this._loginService.identity.exp;

		var hoyini=new Date(new Date().toLocaleString("en-US")).getTime();
		var hoy = hoyini/1000; 
		var dias=0;
		var horas=0;
		var minutos=0;
		var segundos=0;

		var diferencia=(fechasesionfin-hoy)

		if (--diferencia > 0) {
			dias=Math.floor(diferencia/86400)
			diferencia=diferencia-(86400*dias)
			horas=Math.floor(diferencia/3600)
			diferencia=diferencia-(3600*horas)
			minutos=Math.floor(diferencia/60)
			diferencia=diferencia-(60*minutos)
			segundos=Math.floor(diferencia);

			if(horas > 0){
				this.contador =/*'Restan ' + dias + ' D&iacute;as, ' +*/ horas + ' Hora, ' + minutos + ' Minutos, ' + segundos + ' Segundos'
			}else if(minutos > 0){
				this.contador =/*'Restan ' + dias + ' D&iacute;as, ' + horas + ' Hora, ' +*/ minutos + ' Minutos, ' + segundos + ' Segundos'
			}else if(segundos > 1){
				this.contador =/*'Restan ' + dias + ' D&iacute;as, ' + horas + ' Hora, ' + minutos + ' Minutos, ' +*/ segundos + ' Segundos'
			}else if(segundos == 1){
				this.contador =/*'Restan ' + dias + ' D&iacute;as, ' + horas + ' Hora, ' + minutos + ' Minutos, ' +*/ segundos + ' Segundo'
			}else{
				this.contador =/*'Restan ' + dias + ' D&iacute;as, ' + horas + ' Hora, ' + minutos + ' Minutos, ' +*/ segundos + ' Segundos'
			}

			this.progress.emit(diferencia);
		}
		else{
			alert("Su sesión ha expirado, por favor ingresar nuevamente al sistema");
			this.logout();
		}

	}

	OnCuenta(){
		setInterval(() => this.Oncuentaregresiva(), 1000);
	}
}
// }
