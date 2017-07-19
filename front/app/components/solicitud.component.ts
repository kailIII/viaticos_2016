import { Directive,Component, OnInit, ViewChild, ElementRef, AfterViewInit,Input, EventEmitter, Output } from '@angular/core';
// import { Router, ActivatedRoute, Params } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {LoginService} from '../services/login.service';
import {SolicitudService} from '../services/solicitud.service';
import {TabMenuModule,MenuItem} from 'primeng/primeng';

// import {VersolicitudComponent} from './versolicitud.component';

declare var jQuery:any;
declare var $:any;

@Component({
	selector: 'solicitud',
	templateUrl: 'app/view/solicitud.html',
	providers: [LoginService, SolicitudService]/*,
	outputs: ['solicitudInfolocal']*/
})

// @Directive({ selector: '[versolicitud]' })

export class SolicitudComponent {

	public titulo = "Solicitud";
	public identity;
	public je;
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
	public datoSolMostrarhc: Array<any>;
	public datosciudad13;
	public datosciudad23;
	public ciuIteracionl1;
	public info15;
	public mostrarmenufirma: number;
	public estsolActividades;
	public firmaSolicitudRealizadas;
	public datoSolMostrarc;
	public datociudadtodos3;
	public datociudadtodos31;
	public info9;
	public SolAJefe;
	public equis_1;
	public datosPdf;
	public pdfmsg;
	public pdfSrc;
	public solicitudInfo;

	constructor(
		private _loginService: LoginService,
		private _solicitudService: SolicitudService,
		private _router: Router,
		private _route: ActivatedRoute
		){
	}

	ngOnInit(){
		this.detalleSol = false;
		this.identity = this._loginService.getIdentity();
		this.token = this._loginService.getToken();
		this.je = this._loginService.getJe();
		this.funcionario = {
			'fun_id': this.identity.sub
		};
		this.OnVerDetalleSol();	
		this.OnporFirmar();

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
			'solIdsolicitud' : '',
			'solFecharealizacion' : '',
			'solEstado' : '',
			'solCiudades' : '',
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

		this.datosPdf= {
			'Idsolicitud': ''
		};
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
					this.ciu1 = "";
					var estanterior = 0;
					var length1 = this.info.length;
					var itemsiguiente;
					var itemsiguiente1;
					var anterior;
					var anterior1;
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
							}else if(this.info[j][i].estsol.sol.solEstado === "C"){
								this.datoSolIteracion1 = {
									'solId' : this.info[j][i].estsol.sol.solId,
									'solIdsolicitud' : this.info[j][i].estsol.sol.solIdsolicitud,
									'solFecharealizacion' : this.info[j][i].estsol.sol.solFecharealizacion,
									'solEstado' : 'CANCELADO',
									'solCiudades' : this.info[j][i].ciu.ciuNombre,
									'perNombrecompleto' : this.info[j][i].estsol.sol.per.perNombrecompleto
								};
							}else{
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

					for(var l=0; l<tamanodatos; l++){
						var datociudad1 = "";
						itemsiguiente1 = l + 1;
						anterior1 = l - 1;
						this.ciuIteracion = this.datoSolMostrar1[l].solCiudades;
						if(this.ciu1 == ""){
							this.ciu1 = this.ciuIteracion;
						}else{
							this.ciu1 = this.ciu1+","+this.ciuIteracion;
						}
						if(l > 0){

							if(this.datoSolMostrar1[l].solId !== this.datoSolMostrar1[anterior1].solId && itemsiguiente1 === tamanodatos){
								this.datosciudad = {
									'solId':this.datoSolMostrar1[l].solId,
									'solIdsolicitud': this.datoSolMostrar1[l].solIdsolicitud,
									'solFecharealizacion' :this.datoSolMostrar1[l].solFecharealizacion,
									'solEstado' : this.datoSolMostrar1[l].solEstado,
									'solCiudades' : this.ciu1,
									'perNombrecompleto' : this.datoSolMostrar1[l].perNombrecompleto
								};
								datociudad1 = JSON.stringify(this.datosciudad);
								if(this.datociudadtodos == ""){
									this.datociudadtodos = datociudad1;
								}else{
									this.datociudadtodos = this.datociudadtodos+","+datociudad1;
								}
							}else{

								for(var k=itemsiguiente1; k<tamanodatos; k++){
									if(this.datoSolMostrar1[l].solId === this.datoSolMostrar1[k].solId){
										this.ciuIteracion = this.datoSolMostrar1[k].solCiudades;
										if(this.ciu1 == ""){
											this.ciu1 = this.ciuIteracion;
										}else{
											this.ciu1 = this.ciu1+","+this.ciuIteracion;
										}
										l = k;
										if(k === tamanodatos -1){
											this.datosciudad = {
												'solId':this.datoSolMostrar1[l].solId,
												'solIdsolicitud': this.datoSolMostrar1[l].solIdsolicitud,
												'solFecharealizacion' :this.datoSolMostrar1[l].solFecharealizacion,
												'solEstado' : this.datoSolMostrar1[l].solEstado,
												'solCiudades' : this.ciu1,
												'perNombrecompleto' : this.datoSolMostrar1[l].perNombrecompleto
											};
											datociudad1 = JSON.stringify(this.datosciudad);
											if(this.datociudadtodos == ""){
												this.datociudadtodos = datociudad1;
											}else{
												this.datociudadtodos = this.datociudadtodos+","+datociudad1;
											}
										}
									}else{
										this.datosciudad = {
											'solId':this.datoSolMostrar1[l].solId,
											'solIdsolicitud': this.datoSolMostrar1[l].solIdsolicitud,
											'solFecharealizacion' :this.datoSolMostrar1[l].solFecharealizacion,
											'solEstado' : this.datoSolMostrar1[l].solEstado,
											'solCiudades' : this.ciu1,
											'perNombrecompleto' : this.datoSolMostrar1[l].perNombrecompleto
										};
										datociudad1 = JSON.stringify(this.datosciudad);
										if(this.datociudadtodos == ""){
											this.datociudadtodos = datociudad1;
										}else{
											this.datociudadtodos = this.datociudadtodos+","+datociudad1;
										}
										this.ciu1 = "";
										k = tamanodatos; 
									}
								};
							}
						}else{
							this.datosciudad = {
								'solId':this.datoSolMostrar1[l].solId,
								'solIdsolicitud': this.datoSolMostrar1[l].solIdsolicitud,
								'solFecharealizacion' :this.datoSolMostrar1[l].solFecharealizacion,
								'solEstado' : this.datoSolMostrar1[l].solEstado,
								'solCiudades' : this.ciu1,
								'perNombrecompleto' : this.datoSolMostrar1[l].perNombrecompleto
							};
							datociudad1 = JSON.stringify(this.datosciudad);
							if(this.datociudadtodos == ""){
								this.datociudadtodos = datociudad1;
							}else{
								this.datociudadtodos = this.datociudadtodos+","+datociudad1;
							}
						}
						
					};

					this.datoSolMostrar = JSON.parse("["+this.datociudadtodos+"]");
					this.datociudadtodos1 = "";
					this.datociudadtodos2 = "";
					this.datociudadtodos3 = "";
					var datociudad3;
					var datociudad2;
					var datociudad4;
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
						}else if(this.datoSolMostrar[a].solEstado === "CANCELADO"){
							this.datosciudad1 = {
								'solId':this.datoSolMostrar[a].solId,
								'solIdsolicitud': this.datoSolMostrar[a].solIdsolicitud,
								'solFecharealizacion' :this.datoSolMostrar[a].solFecharealizacion,
								'solEstado' : this.datoSolMostrar[a].solEstado,
								'solCiudades' : this.datoSolMostrar[a].solCiudades,
								'perNombrecompleto' : this.datoSolMostrar[a].perNombrecompleto
							};
							datociudad4 = JSON.stringify(this.datosciudad1);
							if(this.datociudadtodos3 == ""){
								this.datociudadtodos3 = datociudad4;
							}else{
								this.datociudadtodos3 = this.datociudadtodos3+","+datociudad4;
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
					this.datoSolMostrarc = JSON.parse("["+this.datociudadtodos3+"]");
				}
			},error => {
				this.errorMessage = <any>error;
				if(this.errorMessage != null){
					console.log(this.errorMessage);
					alert("Error en la peticion de solicitudes");
				}
			});
}

OnVerDetalleSol1(){
	this._solicitudService.reporteSolicitud(this.token,this.funcionario).subscribe(
		response => {
			let info = response;
			this.info = info;
			if(this.info.length <=0){
				this.NoMostrar = "No existen solicitudes realizadas";
				return this.NoMostrar;
			}else{ 	
				this.datoSol = "";
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
						}else if(this.info[j][i].estsol.sol.solEstado === "C"){
							this.datoSolIteracion1 = {
								'solId' : this.info[j][i].estsol.sol.solId,
								'solIdsolicitud' : this.info[j][i].estsol.sol.solIdsolicitud,
								'solFecharealizacion' : this.info[j][i].estsol.sol.solFecharealizacion,
								'solEstado' : 'CANCELADO',
								'solCiudades' : this.info[j][i].ciu.ciuNombre,
								'perNombrecompleto' : this.info[j][i].estsol.sol.per.perNombrecompleto
							};
						}else{
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
									k = l+1;
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
			}
		},error => {
			this.errorMessage = <any>error;
			if(this.errorMessage != null){
				console.log(this.errorMessage);
				alert("Error en la peticion de solicitudes");
			}
		});
}

Onequisviaticos(){
	this.equis = {
		'viaticos':'',
		'movilizaciones':'',
		'subsistencias':'',
		'alimentacion':''
	};
}
OnMostrarDetalleSol(valor:Array<any>){

	let value = valor['solId'];
	this.solicitudInfo = value;
	this.equis_1 = this.equis;
	this._router.navigate(['/versolicitud',value]);
}

OnListarFuncionariosComision(){

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
						}else if(this.info11[j][i].estsol.sol.solEstado === "C"){
							this.datoSolIteracion11 = {
								'solId' : this.info11[j][i].estsol.sol.solId,
								'solIdsolicitud' : this.info11[j][i].estsol.sol.solIdsolicitud,
								'solFecharealizacion' : this.info11[j][i].estsol.sol.solFecharealizacion,
								'solEstado' : 'CANCELADO',
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

				for(var l=0; l<tamanodatos; l++){
					var datociudad1 = "";
					itemsiguiente = l + 1;
					anterior = l - 1;
					this.ciuIteracion1 = this.datoSolMostrar12[l].solCiudades;
					if(this.ciu11 == ""){
						this.ciu11 = this.ciuIteracion1;
					}else{
						this.ciu11 = this.ciu11+","+this.ciuIteracion1;
					}

					// console.log(l+" this.datoSolMostrar1[l].solId:"+this.datoSolMostrar1[l].solId);
					if(l > 0){

						if(this.datoSolMostrar12[l].solId !== this.datoSolMostrar12[anterior].solId && itemsiguiente === tamanodatos){
							this.datosciudad = {
								'solId':this.datoSolMostrar12[l].solId,
								'solIdsolicitud': this.datoSolMostrar12[l].solIdsolicitud,
								'solFecharealizacion' :this.datoSolMostrar12[l].solFecharealizacion,
								'solEstado' : this.datoSolMostrar12[l].solEstado,
								'solCiudades' : this.ciu11,
								'perNombrecompleto' : this.datoSolMostrar12[l].perNombrecompleto
							};
							datociudad1 = JSON.stringify(this.datosciudad);
							if(this.datociudadtodos11 == ""){
								this.datociudadtodos11 = datociudad1;
							}else{
								this.datociudadtodos11 = this.datociudadtodos11+","+datociudad1;
							}
						}else{

							for(var k=itemsiguiente; k<tamanodatos; k++){
								if(this.datoSolMostrar12[l].solId === this.datoSolMostrar12[k].solId){
									// console.log("igual al this.ciu1 de "+l+" :"+this.ciu1);
									this.ciuIteracion1 = this.datoSolMostrar12[k].solCiudades;
									if(this.ciu11 == ""){
										this.ciu11 = this.ciuIteracion1;
									}else{
										this.ciu11 = this.ciu11+","+this.ciuIteracion1;
									}
									l = k;
									// console.log("l:"+l);
									if(k === tamanodatos -1){
										this.datosciudad = {
											'solId':this.datoSolMostrar12[l].solId,
											'solIdsolicitud': this.datoSolMostrar12[l].solIdsolicitud,
											'solFecharealizacion' :this.datoSolMostrar12[l].solFecharealizacion,
											'solEstado' : this.datoSolMostrar12[l].solEstado,
											'solCiudades' : this.ciu11,
											'perNombrecompleto' : this.datoSolMostrar12[l].perNombrecompleto
										};
										datociudad1 = JSON.stringify(this.datosciudad);
										if(this.datociudadtodos11 == ""){
											this.datociudadtodos11 = datociudad1;
										}else{
											this.datociudadtodos11 = this.datociudadtodos11+","+datociudad1;
										}
									}
								}else{
									this.datosciudad = {
										'solId':this.datoSolMostrar12[l].solId,
										'solIdsolicitud': this.datoSolMostrar12[l].solIdsolicitud,
										'solFecharealizacion' :this.datoSolMostrar12[l].solFecharealizacion,
										'solEstado' : this.datoSolMostrar12[l].solEstado,
										'solCiudades' : this.ciu11,
										'perNombrecompleto' : this.datoSolMostrar12[l].perNombrecompleto
									};
									datociudad1 = JSON.stringify(this.datosciudad);
									if(this.datociudadtodos11 == ""){
										this.datociudadtodos11 = datociudad1;
									}else{
										this.datociudadtodos11 = this.datociudadtodos11+","+datociudad1;
									}

									// console.log("en el else de desiguales this.datociudadtodos:"+this.datociudadtodos);
									this.ciu11 = "";
									k = tamanodatos; 
								}
							};
						}
					}

				};

				this.datoSolMostrar3 = JSON.parse("["+this.datociudadtodos11+"]");
				this.datociudadtodos11 = "";
				this.datociudadtodos21 = "";
				this.datociudadtodos31 = "";
				var datociudad3;
				var datociudad2;
				var datociudad5;
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
					}else if(this.datoSolMostrar3[a].solEstado === "CANCELADO"){
						this.datosciudad13 = {
							'solId':this.datoSolMostrar3[a].solId,
							'solIdsolicitud': this.datoSolMostrar3[a].solIdsolicitud,
							'solFecharealizacion' :this.datoSolMostrar3[a].solFecharealizacion,
							'solEstado' : this.datoSolMostrar3[a].solEstado,
							'solCiudades' : this.datoSolMostrar3[a].solCiudades,
							'perNombrecompleto' : this.datoSolMostrar3[a].perNombrecompleto
						};
						datociudad5 = JSON.stringify(this.datosciudad13);
						if(this.datociudadtodos31 == ""){
							this.datociudadtodos31 = datociudad5;
						}else{
							this.datociudadtodos31 = this.datociudadtodos31+","+datociudad5;
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
				this.datoSolMostrarhc = JSON.parse("["+this.datociudadtodos31+"]");
			}
		},error => {
			this.errorMessage = <any>error;
			if(this.errorMessage != null){
				console.log(this.errorMessage);
				alert("Error en la peticion de solicitudes");
			}
		});
}


OnfirmarSolicitud(){
	// console.log("aqui va el codigo de la firma de la solicitud");

	// console.log("solicitud: "+this.detalleSolicitudRealizadas.DetsolIdsolicitud);

	this.firmaSolicitudRealizadas = {
		'Idsolicitud': this.detalleSolicitudRealizadas.DetsolIdsolicitud
	};
	this._solicitudService.firmarSolicitud(this.token,this.firmaSolicitudRealizadas).subscribe(
		response => {
			let info = response;
			this.info9 = info;
			// console.log(this.info9);
		},error => {
			this.errorMessage = <any>error;
			if(this.errorMessage != null){
				console.log(this.errorMessage);
				alert("Error en la peticion de solicitudes");
			}
		});
}


generarPDFSolicitud(valor:Array<any>){
	let value = valor['solIdsolicitud'];
	this.datosPdf = {
		'Idsolicitud': value
	};

	this._solicitudService.generapdfSolicitud(this.token,this.datosPdf).subscribe(
		response => {
			let info = response;
			this.pdfmsg = info;
			if(this.pdfmsg.status === "success"){
				console.log(this.pdfmsg.msg);
			}else{
				console.log(this.pdfmsg.msg);

			}
		},error => {
			this.errorMessage = <any>error;
			if(this.errorMessage != null){
				console.log(this.errorMessage);
				alert("Error en la peticion de solicitudes");
			}
		});
}

verPdfSolicitud(valor:Array<any>){
	let value = valor['solIdsolicitud'];
	this.pdfSrc = 'http://localhost/sistema_viaticos/back/web/pdfSol/'+value+'.pdf';
	window.open(this.pdfSrc);
}



}

