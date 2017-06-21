import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import {LoginComponent} from '../components/login.component';

import {LoginService} from '../services/login.service';
import {SolicitudService} from '../services/solicitud.service';
import {TabMenuModule,MenuItem} from 'primeng/primeng';

@Component({
	selector: "principal",
	templateUrl: "app/view/principal.html",
	providers: [LoginService, SolicitudService]
})

export class PrincipalComponent implements OnInit{
	public titulo = "Componente Principal";
	public identity;
	public token;
	public funcionario;
	public errorMessage;
	public status;
	public info;
	public datoMenu;
	public datoMenuIteracion;
	public datoMenuMostrar: Array<any>;

	public NoMostrar;
	public datoSol;
	public datoSolIteracion;
	public datoSolIteracion1;
	public datoSolMostrar1: Array<any>;
	public datociudadtodos;
	public ciuIteracionl;
	public ciuIteracion;
	public ciu1;
	public datosciudad;
	public datoSolMostrar: Array<any>;
	public datosciudad1;
	public datociudadtodos1;
	public datosciudad2;
	public datociudadtodos2;
	public datoSolMostrara: Array<any>;
	public datoSolMostrarp: Array<any>;
	public transporte;

	constructor(
		private _loginService: LoginService,
		private _solicitudService: SolicitudService,
		private _router: Router,
		private _route: ActivatedRoute
		){
	}
	ngOnInit(){
		// this.menuUsuario();
		this.identity = this._loginService.getIdentity();
		this.token = this._loginService.getToken();
		this.funcionario = {
			'fun_id': this.identity.sub
		};
		this.datoSolIteracion1 = {
			'solId' : '',
			'solIdsolicitud' : '',
			'solFecharealizacion' : '',
			'solEstado' : '',
			'solCiudades' : '',
			'perNombrecompleto' : ''
		};
		this.OnVerDetalleSol();
		this.transporte = 1;
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
					this.datoSol = "";
					// this.ciu = [];
					// this.ciu1 = [];
					var estanterior = 0;
					var length1 = this.info.length;
					var itemsiguiente;
					var anterior;
					var tamanodatos1;
					for(var j = 0; j < length1; j++){
						var length = this.info[j].length;
						for (var i = 0; i < length; i++) {
							if(this.info[j][i].estsol.sol.solEstado === "A"){
								this.datoSolIteracion1 = {
									'solId' : this.info[j][i].estsol.sol.solId,
									'solIdsolicitud' : this.info[j][i].estsol.sol.solIdsolicitud,
									'solFecharealizacion' : this.info[j][i].estsol.sol.solFecharealizacion,
									'solEstado' : 'APROBADO',
									'solCiudades' : this.info[j][i].ciu.ciuNombre,
									'perNombrecompleto' : this.info[j][i].estsol.sol.per.perNombrecompleto
								};
							}
							else{
								this.datoSolIteracion1 = {
									'solId' : this.info[j][i].estsol.sol.solId,
									'solIdsolicitud' : this.info[j][i].estsol.sol.solIdsolicitud,
									'solFecharealizacion' : this.info[j][i].estsol.sol.solFecharealizacion,
									'solEstado' : 'PENDIENTE',
									'solCiudades' : this.info[j][i].ciu.ciuNombre,
									'perNombrecompleto' : this.info[j][i].estsol.sol.per.perNombrecompleto
								};
							}

							this.datoSolIteracion = JSON.stringify(this.datoSolIteracion1);
							if(this.datoSol == ""){
								this.datoSol = this.datoSolIteracion;
							}else{
								this.datoSol = this.datoSol+","+this.datoSolIteracion;
							}
						};
					};
					this.datoSolMostrar1 = JSON.parse("["+this.datoSol+"]");  
					var tamanodatos = this.datoSolMostrar1.length
					this.datociudadtodos = "";
					for(var k=0; k<tamanodatos ; k++){
						var datociudad1 = "";
						itemsiguiente = k + 1;
						anterior = k-1;
						this.ciu1 = "";
						tamanodatos1 = tamanodatos;
						if(itemsiguiente < tamanodatos){
							if(this.datoSolMostrar1[k].solIdsolicitud === this.datoSolMostrar1[itemsiguiente].solIdsolicitud){
								for(var l=itemsiguiente ; l<tamanodatos1 ; l++){
									this.ciuIteracion = this.datoSolMostrar1[k].solCiudades;
									this.ciuIteracionl = this.datoSolMostrar1[l].solCiudades;
									if(this.datoSolMostrar1[k].solIdsolicitud === this.datoSolMostrar1[l].solIdsolicitud){
										if(this.ciu1 == ""){
											this.ciu1 = this.ciuIteracion+","+this.ciuIteracionl;
										}else{
											this.ciu1 = this.ciu1+","+this.ciuIteracionl;
										}
									}else{
										l = tamanodatos1;
									}
								};
								this.datosciudad = {
									'solId':this.datoSolMostrar1[k].solId,
									'solIdsolicitud': this.datoSolMostrar1[k].solIdsolicitud,
									'solFecharealizacion' :this.datoSolMostrar1[k].solFecharealizacion,
									'solEstado' : this.datoSolMostrar1[k].solEstado,
									'solCiudades' : this.ciu1,
									'perNombrecompleto' : this.datoSolMostrar1[k].perNombrecompleto
								};
								datociudad1 = JSON.stringify(this.datosciudad);
								if(this.datociudadtodos == ""){
									this.datociudadtodos = datociudad1;
								}else{
									this.datociudadtodos = this.datociudadtodos+","+datociudad1;
								}
							}else{
								if(anterior > -1){
									if(this.datoSolMostrar1[k].solIdsolicitud !== this.datoSolMostrar1[itemsiguiente].solIdsolicitud){
										if(this.datoSolMostrar1[k].solIdsolicitud !== this.datoSolMostrar1[anterior].solIdsolicitud){
											this.datosciudad = {
												'solId':this.datoSolMostrar1[k].solId,
												'solIdsolicitud': this.datoSolMostrar1[k].solIdsolicitud,
												'solFecharealizacion' :this.datoSolMostrar1[k].solFecharealizacion,
												'solEstado' : this.datoSolMostrar1[k].solEstado,
												'solCiudades' : this.datoSolMostrar1[k].solCiudades,
												'perNombrecompleto' : this.datoSolMostrar1[k].perNombrecompleto
											};
											datociudad1 = JSON.stringify(this.datosciudad);
											if(this.datociudadtodos == ""){
												this.datociudadtodos = datociudad1;
											}else{
												this.datociudadtodos = this.datociudadtodos+","+datociudad1;
											}
										}
									}
								}else{
									this.datosciudad = {
										'solId':this.datoSolMostrar1[k].solId,
										'solIdsolicitud': this.datoSolMostrar1[k].solIdsolicitud,
										'solFecharealizacion' :this.datoSolMostrar1[k].solFecharealizacion,
										'solEstado' : this.datoSolMostrar1[k].solEstado,
										'solCiudades' : this.datoSolMostrar1[k].solCiudades,
										'perNombrecompleto' : this.datoSolMostrar1[k].perNombrecompleto
									};
									datociudad1 = JSON.stringify(this.datosciudad);
									if(this.datociudadtodos == ""){
										this.datociudadtodos = datociudad1;
									}else{
										this.datociudadtodos = this.datociudadtodos+","+datociudad1;
									}
								}
							}
						}
					};
					this.datoSolMostrar = JSON.parse("["+this.datociudadtodos+"]");
					this.datociudadtodos1 = "";
					this.datociudadtodos2 = "";
					var datociudad3;
					var datociudad2;
					var todostamano = this.datoSolMostrar.length;
					for(var a=0; a<todostamano; a++){
						datociudad3 = "";
						if(this.datoSolMostrar[a].solEstado === "APROBADO"){
							this.datosciudad1 = {
								'solId':this.datoSolMostrar[a].solId,
								'solIdsolicitud': this.datoSolMostrar[a].solIdsolicitud,
								'solFecharealizacion' :this.datoSolMostrar[a].solFecharealizacion,
								'solEstado' : this.datoSolMostrar[a].solEstado,
								'solCiudades' : this.datoSolMostrar[a].solCiudades,
								'perNombrecompleto' : this.datoSolMostrar[a].perNombrecompleto
							};
							datociudad3 = JSON.stringify(this.datosciudad1);
							if(this.datociudadtodos1 == ""){
								this.datociudadtodos1 = datociudad3;
							}else{
								this.datociudadtodos1 = this.datociudadtodos1+","+datociudad3;
							}
						}else{
							this.datosciudad2 = {
								'solId':this.datoSolMostrar[a].solId,
								'solIdsolicitud': this.datoSolMostrar[a].solIdsolicitud,
								'solFecharealizacion' :this.datoSolMostrar[a].solFecharealizacion,
								'solEstado' : this.datoSolMostrar[a].solEstado,
								'solCiudades' : this.datoSolMostrar[a].solCiudades,
								'perNombrecompleto' : this.datoSolMostrar[a].perNombrecompleto
							};
							datociudad2 = JSON.stringify(this.datosciudad2);
							if(this.datociudadtodos2 == ""){
								this.datociudadtodos2 = datociudad2;
							}else{
								this.datociudadtodos2 = this.datociudadtodos2+","+datociudad2;
							}
						}
					};
					this.datoSolMostrara = JSON.parse("["+this.datociudadtodos1+"]");
					this.datoSolMostrarp = JSON.parse("["+this.datociudadtodos2+"]");

					// console.log("this.datoSolMostrarp:"+JSON.stringify(this.datoSolMostrarp));
				}
			},error => {
				this.errorMessage = <any>error;
				if(this.errorMessage != null){
					console.log(this.errorMessage);
					alert("Error en la peticion de solicitudes");
				}
			});
}


}