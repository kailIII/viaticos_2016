import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {LoginService} from '../services/login.service';

import {ClaveService} from '../services/clave.service';

import { AppComponent }  from '../app.component';
import {LoginComponent} from "../components/login.component";


// var AES = require("crypto-js/aes");
// var SHA256 = require("crypto-js/sha256");

var sha256 = require('js-sha256');

// var SHA256 = require("crypto-js/sha256");
// import {SolicitudService} from '../services/solicitud.service';

@Component({
	selector: 'cambiarclave',
	templateUrl: 'app/view/cambiarclave.html',
	providers: [LoginService, ClaveService]
})

export class CambiarclaveComponent {

	public titulo = "Componente de Cambiar Clave";
	public identity;
	public user;
	public cla;
	public mensajeIguales;
	public clave;
	public clavenc;
	public guardar;
	public errorMessage;
	public claveIguales;
	public newpass;
	public renewpass;
	// public cambiocla;
	// hash: string;

	constructor(
		private _loginService: LoginService,
		private _ClaveService: ClaveService,
		private _AppComponent: AppComponent,
		// private _LoginComponent: LoginComponent,
		private _router: Router,
		private _route: ActivatedRoute
		){
	}

	ngOnInit(){
		this.identity = this._loginService.getIdentity();
		this.cla = {
			'antpass': "",
			'newpass':"",
			'renewpass':""
		};
		this.user = {
			'email': this.identity.aperUsuario,
			'password': "",
			'gethash': "false"
		};
		this.clave = {
			'clave' : "",
			'correopersona': ""
		}
		// this.cambiocla = this._LoginComponent.paracambiar;


		// 		var createHash = require('sha.js')

		// var sha256 = createHash('sha256')
		// var sha512 = createHash('sha512')

		// var h = sha256.update('abc', 'utf8').digest('hex')
		// console.log(h) //ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad 

		// console.log(sha256('hello'));

	}

	// public ClaveAnterior(){
		// 	// this.hash = SHA256(this.user.password);
		// 	//     console.log(this.hash.toString());

		// 	console.log(this.user.password);

		// 	// console.log(SHA256());

		// 	// this.GuardarCambioClave(this.user);
		// 	console.log(sha256(this.user.password));
		// }

		public GuardarCambioClave(){
			this.user.password = (this.cla.antpass).trim();

			this.clavenc = sha256(this.user.password);


			if(this.clavenc == this.identity.aperClave){
				// console.log("Claves iguales");
				this.newpass = (this.cla.newpass).trim();
				this.renewpass = (this.cla.renewpass).trim();

				// console.log(this.renewpass);
				// console.log(this.newpass);

				if(this.newpass == this.renewpass){

					this.clave = {
						'clave' : this.newpass,
						'correopersona': this.identity.aperUsuario
					}
					// this.clave.clave = sha256(this.newpass);
					// this.clave.correopersona = this.identity.aperUsuario;
					// console.log(this.clave);

					let token = this._loginService.getToken();
					this._ClaveService.CambiarClave(this.clave).subscribe(
						response =>{
							let guardar = response;
							this.guardar = guardar;

							if(this.guardar.status === "success"){

								// alert("La solicitud ha sido creada satisfactoriamente");
								alert(this.guardar.msg);
								// window.location.href='/solicitud';
								this._AppComponent.logout();
							}else{
								alert(this.guardar.msg);
							}
							// this._router.navigate(['/solicitud']);
							// }
						},
						error =>{
							this.errorMessage = <any>error;
							if(this.errorMessage != null){
								console.log(this.errorMessage);
								alert("Error al guardar datos");
							}
						}
						);

				}else{
					this.claveIguales = "Las nuevas claves no coinciden";
					console.log(this.claveIguales);
				}

			}else{
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
											}
										}

