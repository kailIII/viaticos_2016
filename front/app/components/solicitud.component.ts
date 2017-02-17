import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { Router, ActivatedRoute, Params } from '@angular/router';
import {LoginService} from '../services/login.service';
import {SolicitudService} from '../services/solicitud.service';
import {TabMenuModule,MenuItem} from 'primeng/primeng';

// import { Overlay, overlayConfigFactory } from 'angular2-modal';
// import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

///<reference path="../typings/globals/jquery/index.d.ts">
// declare var jQuery:any;
declare var jQuery:any;
// import * as $ from 'jquery';

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
	public datoSolIteracion1;
	public infofirmar;
	public datoSolfirmar;
	public datoSolIteracionfirmar;
	public datoSolIteracionfirmar1;
	public datoSolMostrar: Array<any>;
	public datoSolMostrara: Array<any>;
	public datoSolMostrarp: Array<any>;
	public datoSolMostrar1: Array<any>;
	public datoSolMostrarFirmar: Array<any>;
	public NoMostrar;
	public token;
	public detalleSol: boolean;
	private items: MenuItem[];
	public MostrardetalleSol;
	public detalle;
	public detalleSolicitudRealizadas;
	public detalleSolicitud: Array<any>;
	public cargocotosol: Array<any>;
	public cargojefesol: Array<any>;
	public transportessol: Array<any>;
	public bancosol: Array<any>;
	public personasssol: Array<any>;
	public ciudadessol: Array<any>;
	// public estadosol;
	public estadosol: Array<any>;
	public cardep: Array<any>;
	public solifecfun: Array<any>;
	public detalleSolicitud1;
	public cargocotosol1;
	public cargocotosol2;
	public cargojefesol1;
	public transportessol1;
	public bancosol1;
	public personasssol1;
	public ciudadessol1;
	public estadosol1;
	public cardep1;
	public solifecfun1;
	public info1;
	public cargojefesol2;
	public transportessol2;
	public solifecfun2;
	public cardep2;
	public bancosol2;
	public equis
	public trasolId;
	public trasolRutainicio;
	public trasolRutafin;
	public trasolFechasalida;
	public trasolHorasalida;
	public trasolFechallegada;
	public trasolHorallegada;
	public tiptraNombre;
	public tiptraTipo;
	public ciu: Array<any>;
	public soli: Array<any>;
	public ciu1;
	public ciuIteracion;
	public provIteracion;
	public trasolId1;
	public trasolRutainicio1;
	public trasolRutafin1;
	public trasolFechasalida1;
	public trasolHorasalida1;
	public trasolFechallegada1;
	public trasolHorallegada1;
	public tiptraNombre1;
	public tiptraTipo1;

	public trasolId2;
	public trasolRutainicio2;
	public trasolRutafin2;
	public trasolFechasalida2;
	public trasolHorasalida2;
	public trasolFechallegada2;
	public trasolHorallegada2;
	public tiptraNombre2;
	public tiptraTipo2;

	public actividades;
	public datoSolIteracion2;
	public datosciudad;
	public ciuIteracionl;
	public ciuIteracionk1;
	public datociudadtodos;
	public datosciudad1;
	public datociudadtodos1;
	public datosciudad2;
	public datociudadtodos2;
	// private activeItem: MenuItem;
	// public solicitudpropia;
	// private realizadas: any[];
	// @ViewChild('input') input: ElementRef;
	public info11;
	public NoMostrar1;
	public datoSol1;
	public datoSolIteracion11;
	public datoSolIteracion111;
	public datoSolMostrar12: Array<any>;;
	public datociudadtodos11;
	public ciu11;
	public ciuIteracion1;
	public datosciudad12;
	public datoSolMostrar3: Array<any>;
	public datociudadtodos21;
	public datoSolMostrarha: Array<any>;
	public datoSolMostrarhp: Array<any>;
	public datosciudad13;
	public datosciudad23;
	public ciuIteracionl1;
	public info15;
	public mostrarmenufirma: number;
	public estsolActividades;



	constructor(
		private _loginService: LoginService,
		private _solicitudService: SolicitudService
		){
	}

	ngOnInit(){
		this.detalleSol = false;
		this.identity = this._loginService.getIdentity();
		this.token = this._loginService.getToken();

		this.funcionario = {
			'fun_id': this.identity.sub
		};
		this.OnVerDetalleSol();	

		this.OnMenuFirma();

		// this.OnporFirmar();

		this.detalleSolicitudRealizadas = {
			'DetsolIdsolicitud': ''
		};
		this.equis = {
			'viaticos':'',
			'movilizaciones':'',
			'subsistencias':'',
			'alimentacion':''
		};

		this.datoSolIteracion1 = {
			'solId' : '',
			// 'solSecuencial' : '',
			'solIdsolicitud' : '',
			'solFecharealizacion' : '',
			// 'solNumeroactualizacion' : '',
			'solEstado' : '',
			'solCiudades' : '',
			// 'solAnio' : '',
			// 'perId' : '',
			// 'perNombre' : '',
			// 'perApellido' : '',
			// 'perIdentificacion' : '',
			// 'perEstado' : '',
			// 'perCorreoelectronico' : '',
			// 'perIniciales' : '''',
			// 'perCreado' : '',
			'perNombrecompleto' : ''
		};

		this.trasolId = '';
		this.trasolRutainicio = '';
		this.trasolRutafin = '';
		this.trasolFechasalida = '';
		this.trasolHorasalida = '';
		this.trasolFechallegada = '';
		this.trasolHorallegada = '';
		this.tiptraNombre = '';
		this.tiptraTipo = '';

		this.solifecfun2 = {
			'solSecuencial': [],
			'solIdsolicitud': [],
			'solFecharealizacion':'',
			'solNumeroactualizacion':'',
			'perIdentificacion': '',
			'perCorreoelectronico':'',
			'perCreado':'',
			'perNombrecompleto':''
		};

		this.cargocotosol2 = {
			'carperId' : [],
			'carperDesde' : [],
			'carperHasta' : [],
			'carperTipo' : [],
			'carperEstado' : [],
			'carNombre' : [],
			'depNombre' :[],
			'depSiglas' : [],
			'depEstado' : [],
			'perCorreoelectronico' : [],
			'perNombrecompleto' : []
		};
		this.cargojefesol2 = {
			'carperId' : [],
			'carperDesde' : [],
			'carperHasta' : [],
			'carperTipo' : [],
			'carperEstado' : [],
			'carNombre' : [],
			'depNombre' :[],
			'depSiglas' : [],
			'depEstado' : [],
			'perCorreoelectronico' : [],
			'perNombrecompleto' : []
		};
		this.transportessol2 = {
			'trasolId':[],
			'trasolRutainicio':[],
			'trasolRutafin':[],
			'trasolFechasalida':[],
			'trasolHorasalida':[],
			'trasolFechallegada':[],
			'trasolHorallegada':[],
			'tiptraNombre':[],
			'tiptraTipo':[]
		};

		this.solifecfun2 = {
			'solSecuencial':[],
			'solIdsolicitud':[],
			'solFecharealizacion':[],
			'solNumeroactualizacion':[],
			'perIdentificacion': [],
			'perCorreoelectronico':[],
			'perCreado': [],
			'perNombrecompleto':[]
		};

		this.cardep2 = {
			'carId':[],
			'carNombre':[],
			'carJefe':[],
			'depNombre':[],
			'depSiglas':[],
			'depPadre':[],
			'depEstado':[],
			'rolNombre':[],
			'rolEstado':[]
		};

		this.bancosol2 = {
			'banperId':[],
			'banperTipocuenta':[],
			'banperNumerocuenta':[],
			'banperEstado':[],
			'banNombre':[]
		};

		this.transportessol2 = {
			'trasolId':[],
			'trasolRutainicio':[],
			'trasolRutafin':[],
			'trasolFechasalida':[],
			'trasolHorasalida':[],
			'trasolFechallegada':[],
			'trasolHorallegada':[],
			'tiptraNombre':[],
			'tiptraTipo':[]
		};
	}

	OnMenuFirma(){
		this._solicitudService.jefeSolicitud(this.token,this.funcionario).subscribe(
			response => {
				let info = response;
				this.info15 = info;
				// this.mostrarmenufirma = this.info15;
				// var tamano = this.info15;

				// console.log("this.info15:"+this.info15);
				if(this.info15 > 0){
					this.mostrarmenufirma = this.info15;
					this.OnporFirmar();

				}else{
					this.mostrarmenufirma = 0;
				}
			},error => {
				this.errorMessage = <any>error;
				if(this.errorMessage != null){
					console.log(this.errorMessage);
					alert("Error en la peticion de solicitudes");
				}
			});
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

OnMostrarDetalle(DetalleSolMostrar){
	this.detalleSolicitudRealizadas = {
		'DetsolIdsolicitud': DetalleSolMostrar.solIdsolicitud
	};
	this._solicitudService.detallesolrealizadas(this.token,this.detalleSolicitudRealizadas).subscribe(
		response => {
			let info = response;
			this.info1 = JSON.stringify(info);
			this.info = JSON.parse("["+this.info1+"]"); 
			if(this.info.length <=0){
				this.NoMostrar = "No existen solicitudes realizadas";
				return this.NoMostrar;
			}else{ 	
				this.cargocotosol2 = {
					'carperId' : this.info[0].cargocotosol.carperId,
					'carperDesde' : this.info[0].cargocotosol.carperDesde,
					'carperHasta' : this.info[0].cargocotosol.carperHasta,
					'carperTipo' : this.info[0].cargocotosol.carperTipo,
					'carperEstado' : this.info[0].cargocotosol.carperEstado,
					'carNombre' : this.info[0].cargocotosol.car.carNombre,
					'depNombre' :this.info[0].cargocotosol.car.dep.depNombre,
					'depSiglas' : this.info[0].cargocotosol.car.dep.depSiglas,
					'depEstado' : this.info[0].cargocotosol.car.dep.depEstado,
					'rolNombre' : this.info[0].cargocotosol.car.rol.rolNombre,
					'rolEstado' : this.info[0].cargocotosol.car.rol.rolEstado,
					'perCorreoelectronico' : this.info[0].cargocotosol.per.perCorreoelectronico,
					'perNombrecompleto' : this.info[0].cargocotosol.per.perNombrecompleto
				};

				this.cargojefesol2 = {
					'carperId' : this.info[0].cargojefesol.carperId,
					'carperDesde' : this.info[0].cargojefesol.carperDesde,
					'carperHasta' : this.info[0].cargojefesol.carperHasta,
					'carperTipo' : this.info[0].cargojefesol.carperTipo,
					'carperEstado' : this.info[0].cargojefesol.carperEstado,
					'carNombre' : this.info[0].cargojefesol.car.carNombre,
					'depNombre' :this.info[0].cargojefesol.car.dep.depNombre,
					'depSiglas' : this.info[0].cargojefesol.car.dep.depSiglas,
					'depEstado' : this.info[0].cargojefesol.car.dep.depEstado,
					'rolNombre' : this.info[0].cargojefesol.car.rol.rolNombre,
					'rolEstado' : this.info[0].cargojefesol.car.rol.rolEstado,
					'perCorreoelectronico' : this.info[0].cargojefesol.per.perCorreoelectronico,
					'perNombrecompleto' : this.info[0].cargojefesol.per.perNombrecompleto
				};

				if(this.info[0].transportessol.length >0){
					this.transportessol = this.info[0].transportessol;

				}else if(this.info[0].transportessol.length == 0){
					this.transportessol = this.info[0].transportessol;

				}else{
					this.transportessol1 = JSON.stringify(this.info[0].transportessol);
					this.transportessol = JSON.parse("["+this.transportessol1+"]");
				}
				if(this.info[0].bancosol.banperTipocuenta == "A"){
					this.bancosol2 = {
						'banperId': this.info[0].bancosol.banperId,
						'banperTipocuenta': 'AHORROS',
						'banperNumerocuenta': this.info[0].bancosol.banperNumerocuenta,
						'banperEstado': this.info[0].bancosol.banperEstado,
						'banNombre': this.info[0].bancosol.ban.banNombre
					};
				}else{
					this.bancosol2 = {
						'banperId': this.info[0].bancosol.banperId,
						'banperTipocuenta': 'CORRIENTE',
						'banperNumerocuenta': this.info[0].bancosol.banperNumerocuenta,
						'banperEstado': this.info[0].bancosol.banperEstado,
						'banNombre': this.info[0].bancosol.ban.banNombre
					};
				}

				if(this.info[0].personasssol.length > 0){
					// console.log("personasssol.length no undefined");
					this.personasssol = this.info[0].personasssol;
					// console.log("this.personasssol[0]:"+JSON.stringify(this.personasssol[0]));

				}else if(this.info[0].personasssol.length == 0){
					// console.log("personasssol.length no undefined");
					this.personasssol = this.info[0].personasssol;
				}else{
					// console.log("personasssol.length == undefined");
					this.personasssol1 = JSON.stringify(this.info[0].personasssol);
					this.personasssol = JSON.parse("["+this.personasssol1+"]");
				}

				if(this.info[0].ciudadessol.length>0){
					// console.log("ciudadessol.length no undefined");
					this.ciudadessol = this.info[0].ciudadessol;
					// console.log("this.ciudadessol[0]:"+JSON.stringify(this.ciudadessol[0]));


				}else if(this.info[0].ciudadessol.length == 0){
					// console.log("ciudadessol.length no undefined");
					this.ciudadessol = this.info[0].ciudadessol;

				}else{
					// console.log("ciudadessol.length == undefined");
					this.ciudadessol1 = JSON.stringify(this.info[0].ciudadessol);
					this.ciudadessol = JSON.parse("["+this.ciudadessol1+"]");
				}

				if(this.info[0].estadosol.length>0){
					this.estadosol = this.info[0].estadosol;
					this.estsolActividades = this.estadosol[0].estsolActividades;
					if(JSON.stringify(this.estadosol[0].estsolFechasalida) === JSON.stringify(this.estadosol[0].estsolFechallegada) ){
						this.equis = {
							'viaticos': '',
							'movilizaciones':'X',
							'subsistencias':'X',
							'alimentacion':'X'
						};
					}else{
						this.equis = {
							'viaticos':'X',
							'movilizaciones':'X',
							'subsistencias':'X',
							'alimentacion':'X'
						};
					}
					// console.log("this.estadosol[0]:"+JSON.stringify(this.estadosol[0]));	
				}else if(this.info[0].estadosol.length == 0){
					// console.log("estadosol.length no undefined");
					this.estadosol = this.info[0].estadosol;
					// this.estsolActividades = (JSON.stringify(this.info[0].estadosol.estsolActividades).replace('"<p','<p')).replace('ul>"','ul>');
					// console.log("this.estadosol:"+JSON.stringify(this.estadosol));
				}else{
					// console.log("estadosol.length == undefined");
					this.estadosol1 = JSON.stringify(this.info[0].estadosol);
					this.estadosol = JSON.parse("["+this.estadosol1+"]");
					// this.estsolActividades = (JSON.stringify(this.info[0].estadosol.estsolActividades).replace('"<p','<p')).replace('ul>"','ul>');
					// console.log("this.estadosol:"+JSON.stringify(this.estadosol));
				}

				if(this.info[0].cardep.length >0){
					// console.log("cardep.length no undefined");
					this.cardep = this.info[0].cardep;

				}else if(this.info[0].cardep.length == 0){
					// console.log("cardep.length no undefined");
					this.cardep = this.info[0].cardep;

				}else{
					// console.log("cardep.length == undefined");
					this.cardep1 = JSON.stringify(this.info[0].cardep);
					this.cardep = JSON.parse("["+this.cardep1+"]");

					this.cardep2 = {
						'carId':this.info[0].cardep.carId,
						'carNombre':this.info[0].cardep.carNombre,
						'carJefe':this.info[0].cardep.carJefe,
						'depNombre':this.info[0].cardep.dep.depNombre,
						'depSiglas':this.info[0].cardep.dep.depSiglas,
						'depPadre':this.info[0].cardep.dep.depPadre,
						'depEstado':this.info[0].cardep.dep.depEstado,
						'rolNombre':this.info[0].cardep.rol.rolNombre,
						'rolEstado':this.info[0].cardep.rol.rolEstado
					};
					// console.log("this.cardep1:"+this.cardep1);
				}

				if(this.info[0].solifecfun.length>0){
					// console.log("solifecfun.length no undefined");

				}else if(this.info[0].solifecfun.length == 0){
					// console.log("solifecfun.length no undefined");

				}else{
					this.solifecfun2 = {
						'solSecuencial':this.info[0].solifecfun.solSecuencial,
						'solIdsolicitud':this.info[0].solifecfun.solIdsolicitud,
						'solFecharealizacion':this.info[0].solifecfun.solFecharealizacion,
						'solNumeroactualizacion':this.info[0].solifecfun.solNumeroactualizacion,
						'perIdentificacion': this.info[0].solifecfun.per.perIdentificacion,
						'perCorreoelectronico':this.info[0].solifecfun.per.perIdentificacion,
						'perCreado': this.info[0].solifecfun.per.perCreado,
						'perNombrecompleto':this.info[0].solifecfun.per.perNombrecompleto
					};
				}
			}
		},error => {
			this.errorMessage = <any>error;

			if(this.errorMessage != null){
				console.log(this.errorMessage);
				alert("Error en la peticion de solicitudes");
			}
		});

this.detalle = {
	'DetsolIdsolicitud': DetalleSolMostrar.solIdsolicitud
};
}

OnbotonAtrasSolicitud(){
	this.detalleSol = false;
}

OnporFirmar(){
	this._solicitudService.porfirmarSolicitud(this.token,this.funcionario).subscribe(
		response => {
			let info = response;
			this.info11 = info;
			// console.log("this.info11.length:"+this.info11.length);
			if(this.info11.length <=0){
				this.NoMostrar1 = "No existen solicitudes realizadas";
				return this.NoMostrar1;
			}else{ 	
				this.datoSol1 = "";
				// this.ciu11 = [];
				// this.ciu111 = [];
				var estanterior = 0;
				var length1 = this.info11.length;
				var itemsiguiente;
				var anterior;
				var tamanodatos1;
				for(var j = 0; j < length1; j++){
					var length = this.info11[j].length;
					for (var i = 0; i < length; i++) {
						if(this.info11[j][i].estsol.sol.solEstado === "A"){
							this.datoSolIteracion11 = {
								'solId' : this.info11[j][i].estsol.sol.solId,
								'solIdsolicitud' : this.info11[j][i].estsol.sol.solIdsolicitud,
								'solFecharealizacion' : this.info11[j][i].estsol.sol.solFecharealizacion,
								'solEstado' : 'APROBADO',
								'solCiudades' : this.info11[j][i].ciu.ciuNombre,
								'perNombrecompleto' : this.info11[j][i].estsol.sol.per.perNombrecompleto
							};
						}
						else{
							this.datoSolIteracion11 = {
								'solId' : this.info11[j][i].estsol.sol.solId,
								'solIdsolicitud' : this.info11[j][i].estsol.sol.solIdsolicitud,
								'solFecharealizacion' : this.info11[j][i].estsol.sol.solFecharealizacion,
								'solEstado' : 'PENDIENTE',
								'solCiudades' : this.info11[j][i].ciu.ciuNombre,
								'perNombrecompleto' : this.info11[j][i].estsol.sol.per.perNombrecompleto
							};
						}

						this.datoSolIteracion111 = JSON.stringify(this.datoSolIteracion11);
						if(this.datoSol1 == ""){
							this.datoSol1 = this.datoSolIteracion111;
						}else{
							this.datoSol1 = this.datoSol1+","+this.datoSolIteracion111;
						}
					};
				};
				this.datoSolMostrar12 = JSON.parse("["+this.datoSol1+"]");  

				var tamanodatos = this.datoSolMostrar12.length
				this.datociudadtodos11 = "";
				for(var k=0; k<tamanodatos ; k++){
					var datociudad1 = "";
					itemsiguiente = k + 1;
					anterior = k-1;
					this.ciu11 = "";
					tamanodatos1 = tamanodatos;
					if(itemsiguiente < tamanodatos){
						if(this.datoSolMostrar12[k].solIdsolicitud === this.datoSolMostrar12[itemsiguiente].solIdsolicitud){
							for(var l=itemsiguiente ; l<tamanodatos1 ; l++){
								this.ciuIteracion1 = this.datoSolMostrar12[k].solCiudades;
								this.ciuIteracionl1 = this.datoSolMostrar12[l].solCiudades;
								if(this.datoSolMostrar12[k].solIdsolicitud === this.datoSolMostrar12[l].solIdsolicitud){
									if(this.ciu11 == ""){
										this.ciu11 = this.ciuIteracion1+","+this.ciuIteracionl1;
									}else{
										this.ciu11 = this.ciu11+","+this.ciuIteracionl1;
									}
								}else{
									l = tamanodatos1;
								}
							};
							this.datosciudad12 = {
								'solId':this.datoSolMostrar12[k].solId,
								'solIdsolicitud': this.datoSolMostrar12[k].solIdsolicitud,
								'solFecharealizacion' :this.datoSolMostrar12[k].solFecharealizacion,
								'solEstado' : this.datoSolMostrar12[k].solEstado,
								'solCiudades' : this.ciu11,
								'perNombrecompleto' : this.datoSolMostrar12[k].perNombrecompleto
							};
							datociudad1 = JSON.stringify(this.datosciudad12);
							if(this.datociudadtodos11 == ""){
								this.datociudadtodos11 = datociudad1;
							}else{
								this.datociudadtodos11 = this.datociudadtodos11+","+datociudad1;
							}
						}else{
							if(anterior > -1){
								if(this.datoSolMostrar12[k].solIdsolicitud !== this.datoSolMostrar12[itemsiguiente].solIdsolicitud){
									if(this.datoSolMostrar12[k].solIdsolicitud !== this.datoSolMostrar12[anterior].solIdsolicitud){
										this.datosciudad12 = {
											'solId':this.datoSolMostrar12[k].solId,
											'solIdsolicitud': this.datoSolMostrar12[k].solIdsolicitud,
											'solFecharealizacion' :this.datoSolMostrar12[k].solFecharealizacion,
											'solEstado' : this.datoSolMostrar12[k].solEstado,
											'solCiudades' : this.datoSolMostrar12[k].solCiudades,
											'perNombrecompleto' : this.datoSolMostrar12[k].perNombrecompleto
										};
										datociudad1 = JSON.stringify(this.datosciudad12);
										if(this.datociudadtodos11 == ""){
											this.datociudadtodos11 = datociudad1;
										}else{
											this.datociudadtodos11 = this.datociudadtodos11+","+datociudad1;
										}
									}
								}
							}else{
								this.datosciudad12 = {
									'solId':this.datoSolMostrar12[k].solId,
									'solIdsolicitud': this.datoSolMostrar12[k].solIdsolicitud,
									'solFecharealizacion' :this.datoSolMostrar12[k].solFecharealizacion,
									'solEstado' : this.datoSolMostrar12[k].solEstado,
									'solCiudades' : this.datoSolMostrar12[k].solCiudades,
									'perNombrecompleto' : this.datoSolMostrar12[k].perNombrecompleto
								};
								datociudad1 = JSON.stringify(this.datosciudad12);
								if(this.datociudadtodos11 == ""){
									this.datociudadtodos11 = datociudad1;
								}else{
									this.datociudadtodos11 = this.datociudadtodos11+","+datociudad1;
								}
							}
						}
					}
				};
				this.datoSolMostrar3 = JSON.parse("["+this.datociudadtodos11+"]");
				// console.log("this.datociudadtodos11:"+this.datociudadtodos11);
				this.datociudadtodos11 = "";
				this.datociudadtodos21 = "";
				var datociudad3;
				var datociudad2;
				var todostamano = this.datoSolMostrar3.length;
				for(var a=0; a<todostamano; a++){
					datociudad3 = "";
					if(this.datoSolMostrar3[a].solEstado === "APROBADO"){
						this.datosciudad13 = {
							'solId':this.datoSolMostrar3[a].solId,
							'solIdsolicitud': this.datoSolMostrar3[a].solIdsolicitud,
							'solFecharealizacion' :this.datoSolMostrar3[a].solFecharealizacion,
							'solEstado' : this.datoSolMostrar3[a].solEstado,
							'solCiudades' : this.datoSolMostrar3[a].solCiudades,
							'perNombrecompleto' : this.datoSolMostrar3[a].perNombrecompleto
						};
						datociudad3 = JSON.stringify(this.datosciudad13);
						if(this.datociudadtodos11 == ""){
							this.datociudadtodos11 = datociudad3;
						}else{
							this.datociudadtodos11 = this.datociudadtodos11+","+datociudad3;
						}
					}else{
						this.datosciudad23 = {
							'solId':this.datoSolMostrar3[a].solId,
							'solIdsolicitud': this.datoSolMostrar3[a].solIdsolicitud,
							'solFecharealizacion' :this.datoSolMostrar3[a].solFecharealizacion,
							'solEstado' : this.datoSolMostrar3[a].solEstado,
							'solCiudades' : this.datoSolMostrar3[a].solCiudades,
							'perNombrecompleto' : this.datoSolMostrar3[a].perNombrecompleto
						};
						datociudad2 = JSON.stringify(this.datosciudad23);
						if(this.datociudadtodos21 == ""){
							this.datociudadtodos21 = datociudad2;
						}else{
							this.datociudadtodos21 = this.datociudadtodos21+","+datociudad2;
						}
					}
				};
				this.datoSolMostrarha = JSON.parse("["+this.datociudadtodos11+"]");
				this.datoSolMostrarhp = JSON.parse("["+this.datociudadtodos21+"]");
			}
		},error => {
			this.errorMessage = <any>error;
			if(this.errorMessage != null){
				console.log(this.errorMessage);
				alert("Error en la peticion de solicitudes");
			}
		});
}
// 	this._solicitudService.porfirmarSolicitud(this.token,this.funcionario).subscribe(
// 		response => {
	// 			let info = response;
	// 			this.infofirmar = info;
	// 			console.log("this.infofirmar.status:"+this.infofirmar.status);
	// 			// console.log("this.infofirmar:"+JSON.stringify(this.infofirmar[1]));
	// 			if(this.infofirmar.length <=0){
		// 				this.NoMostrar = "No existen solicitudes pendientes";
		// 				return this.NoMostrar;
		// 			}else{ 	
			// 				// if(!this.infofirmar.status){
				// 					this.datoSolfirmar = "";
				// 					var length = this.infofirmar.length;
				// 					for (var i = 0; i < length; i++) {
					// 						if(this.infofirmar[i].solEstado === "A"){

						// 							this.datoSolIteracionfirmar1 = {
							// 								'solId' : this.infofirmar[i].solId,
							// 								'solIdsolicitud' : this.infofirmar[i].solIdsolicitud,
							// 								'solFecharealizacion' : this.infofirmar[i].solFecharealizacion,
							// 								'solDepartamento' : this.infofirmar[i].solFecharealizacion,
							// 								'solEstado' : 'APROBADO',
							// 								'perNombrecompleto' : this.infofirmar[i].per.perNombrecompleto
							// 							};
							// 						}else{
								// 							this.datoSolIteracionfirmar1 = {
									// 								'solId' : this.infofirmar[i].solId,
									// 								'solIdsolicitud' : this.infofirmar[i].solIdsolicitud,
									// 								'solFecharealizacion' : this.infofirmar[i].solFecharealizacion,
									// 								'solDepartamento' : this.infofirmar[i].solFecharealizacion,
									// 								'solEstado' : 'PENDIENTE',
									// 								'perNombrecompleto' : this.infofirmar[i].per.perNombrecompleto
									// 							};
									// 						}
									// 						this.datoSolIteracionfirmar = JSON.stringify(this.datoSolIteracionfirmar1);
									// 						if(this.datoSolfirmar == ""){
										// 							this.datoSolfirmar = this.datoSolIteracionfirmar;
										// 						}else{
											// 							this.datoSolfirmar = this.datoSolfirmar+","+this.datoSolIteracionfirmar;
											// 						}
											// 					};  
											// 					var MostrarFirmar = JSON.parse("["+this.datoSolfirmar+"]");  

											// 					var firmarlenght = MostrarFirmar.length;
											// 					// console.log("firmarlenght:"+firmarlenght);

											// 					console.log("MostrarFirmar:"+JSON.stringify(MostrarFirmar));
											// 					// for(var firmai = 0; firmai < firmarlenght; firmai++){

												// 						// return this.datoSolMostrarFirmar;
												// 						// }

												// 						// }
												// 					}
												// 				},error => {
													// 					this.errorMessage = <any>error;

													// 					if(this.errorMessage != null){
														// 						console.log(this.errorMessage);
														// 						alert("Error en la peticion de solicitudes");
														// 					}
														// 				});
														// }

													}

