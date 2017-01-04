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
	public verificacion;
	public dias;
    public horas;
    public minutos;
    public segundos;

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
		this.token = this._loginService.getToken();
		this.verificacion = this._loginService.checkCredentials(this.token);
		if(this.identity){
			// this.Onloguearse();
			this.menuUsuario();
			// this.OnTiempoSesion();
		}else{
			this.Onloguearse();
			// this.menuUsuario();
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
					// this.errorMessage = <any>error;

					// if(this.errorMessage != null){
					// 	console.log(this.errorMessage);
					// 	alert("Error en la peticion de OnMenu");
						// window.location.href='/principal';
						window.location.reload();
					// }
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
						alert("Error en al iniciar Apache");
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

// 	OnTiempoSesion(){
//     let fecha=new Date(this.identity.exp).getTime();
//     console.log(this.identity.exp);
//     console.log(fecha);
//     // var fecha=new Date(2012,1,10,21,1,1);
//     let hoy=new Date();

//     console.log(hoy);
//     this.dias=0;
//     this.horas=0;
//     this.minutos=0;
//     this.segundos=0;

//     // if (fecha>hoy){
//     //     var diferencia=(fecha.getTime()-hoy.getTime())/1000;
//     //     this.dias=Math.floor(diferencia/86400);
//     //     diferencia=diferencia-(86400*this.dias);
//     //     this.horas=Math.floor(diferencia/3600);
//     //     diferencia=diferencia-(3600*this.horas);
//     //     this.minutos=Math.floor(diferencia/60);
//     //     diferencia=diferencia-(60*this.minutos);
//     //     this.segundos=Math.floor(diferencia);

//     //     document.getElementById("tiemposesion").innerHTML='Quedan ' + this.dias + ' D&iacute;as, ' + this.horas + ' Horas, ' + this.minutos + ' Minutos, ' + this.segundos + ' Segundos'

//     //     if (this.dias>0 || this.horas>0 || this.minutos>0 || this.segundos>0){
//     //         setTimeout("countdown(\"" + id + "\")",1000)
//     //     }
//     // }
//     // else{
//     // 	document.getElementById("tiemposesion").innerHTML='Quedan ' + this.dias + ' D&iacute;as, ' + this.horas + ' Horas, ' + this.minutos + ' Minutos, ' + this.segundos + ' Segundos'
//     //     // document.getElementById('restante').innerHTML='Quedan ' + dias + ' D&iacute;as, ' + horas + ' Horas, ' + minutos + ' Minutos, ' + segundos + ' Segundos'
//     //     // this.logout();
//     // }
// }
	
}
