import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {TransporteService} from '../services/transporte.service';
import {SolicitudService} from '../services/solicitud.service';
import {LoginService} from '../services/login.service';

import {SelectItem} from 'primeng/primeng';
import {FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

// declare var pdfMake: any;
// declare var buildPdf: any;

declare var JQuery:any;
declare var $:any;

var moment = require('moment');

const URLupload = 'file://localhost:3000/pdfSol1/';

@Component({
	selector: 'nueva_solicitud',
	templateUrl: 'app/view/nueva_solicitud.html',
	providers: [TransporteService, SolicitudService, LoginService]
})

export class NuevasolicitudComponent implements OnInit{

	public titulo = "Nueva Solicitud";
	public status;
	public inicial: boolean;
	public paso2: boolean;
	public paso3: boolean;
	public paso4: boolean;
	public comision;
	public ciudadcom;
	public personacom;
	public solicitud;
	public transporteCom;
	public ciudadComision;
	public ciuNombre;
	public CiudadSolicitud: Array<any>;
	public ciudadComisionJSON;
	public accion;
	public CiudadNombre;
	public valor_textarea;
	public numero;
	public textarea_comisionados;
	public comisionadoComision;
	public transporte;
	public comboTritra;
	public info;
	public errorMessage;
	public mostrar_trareq: boolean;
	public registro;
	public pedidovehiculo;
	public tipotra;
	public modelotrans;
	public moltra;
	public modeltra;
	public datomodeltra;
	public datotra;
	public datoModelTransporte;
	public TransporteInicial;
	public datoTransporteMostrar;
	public imprimirsol;
	public modeltrans;
	public dt:Date = new Date();
	public fechaActual;
	public personas;
	public ciudades;
	public persona = [];
	public ciudad_mostrar;
	public ciudad = [];
	public personasel: SelectItem[];
	public RinicioTrans;
	public RfinTrans;
	public FechaDesde_sol:  string[] = [];
	public FechaHasta_sol:  string[] = [];
	public FinicioTrans;
	public HinicioTrans;
	public FfinTrans;
	public HfinTrans;
	public ciudad1;
	public ciudadparte1;
	public ciudadjson;
	public provparte1;
	public ciuid1;
	public persona_mostrar;
	public personaparte1;
	public perid1;
	public personajson;
	public ciudadjsontra;
	public ciudadtra = [];
	public dias;
	public fechahoy;
	public comisionInicial;
	es: any;
	public tr;
	fechas: Date;
	minDate: Date;
	maxDate: Date;
	public funcionarios_sol_ini;
	public ciudades_sol_ini;
	public Fecha_sol;
	public HoraDesde_sol;
	public HoraHasta_sol;
	public FechaDesde_solicitud;
	public FechaHasta_solicitud;
	public data2;
	public fondovalor;
	public fondoobservacion;
	public anexotitulo;
	public aneodescripcion;
	public anexoruta;
	public guardar;

	// public item: {firstName: string, lastName: string} = {firstName: 'Peter', lastName: 'Parker'};
	// public pdf: any;
	// public buildPdf: any = new buildPdf();

	// public uploader:FileUploader;
	// public URLupload: string;

	// public uploader:FileUploader = new FileUploader({url: URLupload});

	public uploader:FileUploader = new FileUploader({url: URLupload/*,
		autoUpload: true,*/
	/*allowedMimeType: ['image/png', 'image/jpg', 'image/bmp', 'application/pdf'],
	maxFileSize: 510241024 // 5 MB*/
});

	public hasBaseDropZoneOver:boolean = false;
	public hasAnotherDropZoneOver:boolean = false;

	public fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}

	public fileOverAnother(e:any):void {
		this.hasAnotherDropZoneOver = e;
	}

	public transporteSol: Array<any>;
	public transporteSol1;
	public transporteSolInicial;
	public ciudadestra: Array<any>;
	public nuevahorafin;
	public nuevafechafin;
	public nuevafechafin1: Array<any>;
	public nuevahorainicio;
	public nuevafechainicio;
	public nuevafechainicio1: Array<any>;

	// filesToUpload: Array<File>;

	constructor(
		private _TransporteService: TransporteService,
		private _SolicitudService: SolicitudService,
		private _loginService: LoginService,
		private _router: Router,
		private _route: ActivatedRoute,
		){
		this.mostrar_trareq = false;
		// this.filesToUpload = [];
	}

	ngOnInit(){
		this.ciudadComision ="";
		this.ciudadComisionJSON = "";
		this.inicial = false;
		this.paso2 = false;
		this.paso3 = false;
		this.paso4 = false;
		this.modeltrans = false;
		this.transporte = {
			'tritra':""
		};
		this.tipotra = this._TransporteService.GetTransporte();

		this.OnCiudad();
		this.OnPersona();
		this.OnCiudadTransporte();

		this.es = {
			firstDayOfWeek: 1,
			dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
			dayNamesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
			dayNamesMin: ["Do","Lu","Ma","Mi","Ju","Vi","Sa"],
			monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ],
			monthNamesShort: [ "Ene", "Feb", "Mar", "Abr", "May", "Jun","Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ]
		}

		this.tr = {
			firstDayOfWeek : 1
		}

		this.fechahoy = new Date();
		let month = this.fechahoy.getMonth();
		let prevMonth = (month === 0) ? 11 : month -1;
		let nextMonth = (month === 11) ? 0 : month + 1;
		this.minDate = new Date();
		this.minDate.setMonth(prevMonth);
		this.maxDate = new Date();
		this.maxDate.setMonth(nextMonth);
		this.Fecha_sol = new Date();

		this.comision = {
			'correo':"",
			'Fecha_sol' : "",
			'FechaDesde_sol' : "",
			'HoraDesde_sol' : "",
			'FechaHasta_sol' : "",
			'HoraHasta_sol' : "",
			'actividadessol' : "",
			'trarutaInicio':"",
			'trarutaFin':"",
			'trafechaInicio':"",
			'trafechaFin':"",
			'trahoraInicio':"",
			'trahoraFin':"",
			'valorFondo' : "",
			'ciudades_sol' : "",
			'vehiculo_solicitud' : "",
			'funcionarios_sol' : "",
			'solotransporteSol':"",
			'fondovalor':"",
			'fondoobservacion':"",
			'anexotitulo':"",
			'aneodescripcion':"",
			'anexoruta':""
		};

		this.transporteSol1 = {
			'tratipo':"",
			'tramodelo':"",
			'trarutaInicio':"",
			'trarutaFin':"",
			'trafechaInicio':"",
			'trafechaFin':"",
			'trahoraInicio':"",
			'trahoraFin':"",
		};
		this.transporteSol = [];

		// this.OnHoraFinicioTra();
		// this.OnHoraFfinTra();

	}

	// openPdf() {
		// 	this.pdf = pdfMake;
		// 	this.buildPdf = buildPdf;
		// 	this.pdf.createPdf(buildPdf(this.item)).open();
		// 	// this.pdf.createPdf(buildPdf(this.item)).print();
		// 	this.pdf.createPdf(buildPdf(this.item)).download();
		// }


		toggleTitle(){
			$('.title').slideToggle();
			// console.log(i);
		}

		delete(i) {
			this.transporteSol.splice(this.transporteSol.indexOf(i),1);
		} 

		OnCiudad(){
			this._SolicitudService.GetCiudad().subscribe(
				response => {
					let cuidad_mostrar = response;
					this.ciudad_mostrar = cuidad_mostrar;
					if(this.ciudad_mostrar.length <=0){
						alert("Error en el servidor 5");
					}else{ 	
						if(!this.ciudad_mostrar.status){
							var length = this.ciudad_mostrar.length;
							for (var i = 0; i < length; i++) {
								this.ciudadparte1 = this.ciudad_mostrar[i].ciuCanton;
								this.provparte1 = this.ciudad_mostrar[i].prov.provNombre;
								this.ciuid1 = this.ciudad_mostrar[i].ciuId;
								this.ciudadjson = {
									'label': this.ciudadparte1+"-"+this.provparte1,
									'value': this.ciuid1
								};
								this.ciudad.push(this.ciudadjson);
							};  
							return this.ciudad;
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

		OnCiudadTransporte(){
			this._SolicitudService.GetCiudad().subscribe(
				response => {
					let cuidad_mostrar = response;
					this.ciudad_mostrar = cuidad_mostrar;
					if(this.ciudad_mostrar.length <=0){
						alert("Error en el servidor 5");
					}else{ 	
						if(!this.ciudad_mostrar.status){
							var length = this.ciudad_mostrar.length;
							for (var i = 0; i < length; i++) {
								this.ciudadparte1 = this.ciudad_mostrar[i].ciuCanton;
								this.provparte1 = this.ciudad_mostrar[i].prov.provNombre;
								this.ciuid1 = this.ciudad_mostrar[i].ciuId;
								this.ciudadjsontra = {
									'label': this.ciudadparte1+"-"+this.provparte1,
									'value': this.ciudadparte1+"-"+this.provparte1
								};
								this.ciudadtra.push(this.ciudadjsontra);
							};  
							return this.ciudadtra;
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

		OnPersona(){
			this._SolicitudService.GetComisionado().subscribe(
				response => {
					let persona_mostrar = response;
					this.persona_mostrar = persona_mostrar;
					if(this.persona_mostrar.length <=0){
						alert("Error en el servidor 5");
					}else{ 	
						if(!this.persona_mostrar.status){
							var length = this.persona_mostrar.length;
							for (var i = 0; i < length; i++) {
								this.personaparte1 = this.persona_mostrar[i].perNombrecompleto;
								// this.perid1 = this.persona_mostrar[i].perId;
								this.personajson = {
									'label': this.personaparte1,
									'value': this.personaparte1
								};
								this.persona.push(this.personajson);
							};  
							return this.persona;
						}
					}
				},
				error =>{
					this.errorMessage = <any>error;
					if(this.errorMessage != null){
						console.log(this.errorMessage);
						alert("Error en la petición 2Per");
					}
				}
				);
		}

		OnTipoTransporte(){
			let tipotransporte = document.createTextNode((<HTMLInputElement>document.getElementById("combo_tiptra")).value);
			return tipotransporte;
		}

		public today():void {
			this.dt = new Date();
		}

		OnDiferenciaFechas(f1,f2){
			this.dias = [];
			console.log("f1:"+f1);
			console.log("f2:"+f2);
			var fechaInicio = new Date(f1).toLocaleDateString();
			// var fechaInicio = new Date(f1).getUTCDate();
			var fechaFin    = new Date(f2).getTime();
			console.log("fechaInicio:"+fechaInicio);
			console.log("fechaFin:"+fechaFin);
			// var diff = fechaFin - fechaInicio;
			// let diasdiff = diff/(24*60*60*1000)
			// for (var i = 0; i <= diasdiff; i++) {
				// 	// var date = f1;
				// 	var date = new Date(f1);
				// 	console.log("date:"+date);
				// 	date.setDate(date.getDate() + i); 
				// 	this.dias.push(date.toLocaleDateString());
				// };
			}

			Onpaso2(){

				this.comision.Fecha_sol = this.Fecha_sol;
				this.comision.FechaDesde_sol = this.FechaDesde_solicitud;
				this.comision.HoraDesde_sol = this.HoraDesde_sol;
				this.comision.FechaHasta_sol = this.FechaHasta_solicitud;
				this.comision.HoraHasta_sol = this.HoraHasta_sol;
				// this.comision.Fecha_sol = (((JSON.stringify(new Date(this.Fecha_sol).toLocaleDateString()).replace('"','')).replace('"','')).replace('/','-')).replace('/','-');
				// this.comision.FechaDesde_sol = (((JSON.stringify(new Date(this.FechaDesde_solicitud).toLocaleDateString()).replace('"','')).replace('"','')).replace('/','-')).replace('/','-');
				// this.comision.HoraDesde_sol = (JSON.stringify(new Date(this.HoraDesde_sol).toLocaleTimeString()).replace('"','')).replace('"','');
				// this.comision.FechaHasta_sol = (((JSON.stringify(new Date(this.FechaHasta_solicitud).toLocaleDateString()).replace('"','')).replace('"','')).replace('/','-')).replace('/','-');
				// this.comision.HoraHasta_sol = (JSON.stringify(new Date(this.HoraHasta_sol).toLocaleTimeString()).replace('"','')).replace('"','');

				// this.OnDiferenciaFechas(this.FechaDesde_solicitud,this.FechaHasta_solicitud);
				// let fechaactividades;
				// var length = this.dias.length;
				// fechaactividades = '';
				// for (var i = 0; i < length; i++) {
					// 	let fechas = this.dias[i];
					// 	// fechaactividades += '<p class="ql-align-center"><strong>'+fechas+'</strong></p><ul><li></li></ul>';
					// 	fechaactividades += '<p class="centrado ql-align-center"><strong>'+fechas+'</strong></p><ul><li></li></ul>';
					// };
					// this.comision.actividadessol = fechaactividades;
					this.comision.correo = this._loginService.getIdentity().aperUsuario;
					if(this.funcionarios_sol_ini !== undefined){
						this.comision.funcionarios_sol  = (((JSON.stringify(this.funcionarios_sol_ini).replace('["','')).replace('"]','')).replace('","',',')).replace(/\"/g,'');
					}
					if(this.ciudades_sol_ini !== undefined){
						this.comision.ciudades_sol  = (JSON.stringify(this.ciudades_sol_ini).replace('[','')).replace(']','');
					}
					// console.log("this.comision:"+JSON.stringify(this.comision));
					this.inicial = true;

					// alert(this.FechaHasta_solicitud+"T"+this.HoraHasta_sol);
					// alert((Date.parse(this.FechaHasta_solicitud+"T"+this.HoraHasta_sol)));

				}

				Onpaso3(){
					// console.log("this.comision:"+JSON.stringify(this.comision));
					this.paso2 = true;
				}

				Onpaso4(){
					let solotransporteSol = "";
					let solotransporteSolConvert = "";
					let registros = this.transporteSol.length;

					for(var l=0; l < registros; l++){
						if(solotransporteSol == ""){
							solotransporteSol = this.transporteSol[l].tratipo+","+this.transporteSol[l].tramodelo+","+this.transporteSol[l].trarutaInicio+","+this.transporteSol[l].trarutaFin+","+this.transporteSol[l].trafechaInicio+","+this.transporteSol[l].trahoraInicio+","+this.transporteSol[l].trafechaFin+","+this.transporteSol[l].trahoraFin+";"
						}else{
							solotransporteSol = solotransporteSol + this.transporteSol[l].tratipo+","+this.transporteSol[l].tramodelo+","+this.transporteSol[l].trarutaInicio+","+this.transporteSol[l].trarutaFin+","+this.transporteSol[l].trafechaInicio+","+this.transporteSol[l].trahoraInicio+","+this.transporteSol[l].trafechaFin+","+this.transporteSol[l].trahoraFin+";"
						}
					}

					// solotransporteSolConvert = '"'+solotransporteSol+'"';
					solotransporteSolConvert = solotransporteSol+'"';

					this.comision.solotransporteSol = (solotransporteSolConvert.replace(';"',''));

					// console.log("this.comision.solotransporteSol:"+this.comision.solotransporteSol);

					// console.log(this.comision);
					console.log("this.comision:"+JSON.stringify(this.comision));
					this.paso3 = true;
				}
				Onpaso5(){
					// this.fondovalor = 0;
					// this.fondoobservacion = "";
					// this.anexotitulo = "";
					// this.aneodescripcion = "";
					// this.anexoruta = "";

					if(this.fondovalor == undefined){
						this.comision.fondovalor = 0;
					}else{
						this.comision.fondovalor = this.fondovalor;
					}
					if(this.fondoobservacion == undefined){
						this.comision.fondoobservacion = "N/A";
					}else{
						this.comision.fondoobservacion = this.fondoobservacion;
					}
					// console.log("this.comision:"+JSON.stringify(this.comision));

				}

				OnbotonAtras(){
					if(this.inicial == false && this.paso2 == false && this.paso3 == false && this.paso4 == false){
						this._router.navigate(['/solicitud']);
					}else if(this.inicial == true && this.paso2 == false && this.paso3 == false && this.paso4 == false){
						this.inicial = false;
					}else if(this.inicial == true && this.paso2 == true && this.paso3 == false && this.paso4 == false) { 
						this.paso2 = false;
					} else  if(this.inicial == true && this.paso2 == true && this.paso3 == true && this.paso4 == false) { 
						this.paso3 = false;
					}else  if(this.inicial == true && this.paso2 == true && this.paso3 == true && this.paso4 == true) { 
						this.paso4 = false;

					}
				}

				OnAgregarCiudad(title:string){
					this.valor_textarea = (<HTMLInputElement>document.getElementById("ciudades_solicitud")).value;
					this.ciudadComision = this.valor_textarea;
					if(this.ciudadComision == ""){
						this.ciudadComision = title;
					}else{
						this.ciudadComision = this.ciudadComision+","+title;
					}
					this.comision.ciudades_solicitud = this.ciudadComision;
					(<HTMLInputElement>document.getElementById('ciudades_solicitud')).focus();
					(<HTMLInputElement>document.getElementById('ingresarCiudad')).focus();
				}

				OnAgregarComisionado(title:string){
					this.textarea_comisionados = (<HTMLInputElement>document.getElementById("comisionados_solicitud")).value;
					this.comisionadoComision = this.textarea_comisionados;

					if(this.comisionadoComision == ""){
						this.comisionadoComision = title;
					}else{
						this.comisionadoComision = this.comisionadoComision+","+title;
					}
					this.comision.PersonasComision = this.comisionadoComision;

				}

				OnAgregarTraReq(){
					if(this.mostrar_trareq === false){
						this.mostrar_trareq = true;	
					}
					// this.OnAgregarbtnEliminar();
					this.OnAgregarRuta();
				}

				OnAgregarRuta(){

					this.nuevahorainicio = moment(this.comision.FechaDesde_sol +" "+this.comision.HoraDesde_sol);
					this.nuevafechainicio = (this.nuevahorainicio.add(1,"hour")).format('YYYY-MM-DD/HH:mm');
					this.nuevafechainicio1 = (this.nuevafechainicio).split("/");

					this.nuevahorafin = moment(this.FfinTrans +" "+this.HfinTrans);
					this.nuevafechafin = (this.nuevahorafin.add(1,"hour")).format('YYYY-MM-DD/HH:mm');
					// this.nuevafechafin = (this.nuevahorafin.subtract(1,"hour")).format('YYYY-MM-DD/HH:mm');
					this.nuevafechafin1 = (this.nuevafechafin).split("/");

					// alert(this.nuevafecha);
					// console.log(this.nuevafechafin1[0]);
					// console.log(this.nuevafechafin1[1]);

					if(this.RinicioTrans === undefined || this.RinicioTrans == ""){
						this.RinicioTrans = "Cuenca-Azuay";
					}
					let rurFin_trareq;
					if(this.RfinTrans === undefined || this.RfinTrans == ""){
						this.RfinTrans = "Cuenca-Azuay";
					}

					if(this.transporteSol.length == 0 && this.RinicioTrans === "Quito-Pichincha" && (<HTMLInputElement>document.getElementById("combo_tiptra")).value ==="Aereo"){

						this.transporteSol1 = {
							'tratipo': (<HTMLInputElement>document.getElementById("combo_tiptra")).value,
							'tramodelo': (<HTMLInputElement>document.getElementById("combo_vehiculo")).value,
							'trarutaInicio': "Tababela-Pichincha",
							'trarutaFin': this.RfinTrans,
							// 'trafechaInicio': new Date(this.FinicioTrans).toLocaleDateString(),
							// 'trahoraInicio': new Date(this.FinicioTrans).toLocaleTimeString(),
							// 'trafechaFin': new Date(this.FfinTrans).toLocaleDateString(),
							// 'trahoraFin': new Date(this.FfinTrans).toLocaleTimeString()
							'trafechaInicio': this.FinicioTrans,
							'trahoraInicio': this.HinicioTrans,
							'trafechaFin': this.FfinTrans,
							'trahoraFin': this.HfinTrans
						};

						this.transporteSolInicial = {
							'tratipo': "Terrestre",
							'tramodelo': "Institucional",
							'trarutaInicio': "Quito-Pichincha",
							'trarutaFin': "Tababela-Pichincha",
							// 'trafechaInicio': this.comision.FechaDesde_sol,
							// 'trahoraInicio': this.comision.HoraDesde_sol,
							// 'trafechaFin': this.comision.FechaHasta_sol,
							// 'trahoraFin': this.comision.HoraHasta_sol
							'trafechaInicio': this.comision.FechaDesde_sol,
							'trahoraInicio': this.comision.HoraDesde_sol,
							'trafechaFin': this.nuevafechainicio1[0],
							'trahoraFin': this.nuevafechainicio1[1]
						};

						this.transporteSol.push(this.transporteSolInicial);
						this.transporteSol.push(this.transporteSol1);
					}else if(this.transporteSol.length > 0 && this.RfinTrans === "Quito-Pichincha" && (<HTMLInputElement>document.getElementById("combo_tiptra")).value ==="Aereo"){

						this.transporteSol1 = {
							'tratipo': (<HTMLInputElement>document.getElementById("combo_tiptra")).value,
							'tramodelo': (<HTMLInputElement>document.getElementById("combo_vehiculo")).value,
							'trarutaInicio': this.RinicioTrans,
							'trarutaFin': "Tababela-Pichincha",
							// 'trafechaInicio': new Date(this.FinicioTrans).toLocaleDateString(),
							// 'trahoraInicio': new Date(this.FinicioTrans).toLocaleTimeString(),
							// 'trafechaFin': new Date(this.FfinTrans).toLocaleDateString(),
							// 'trahoraFin': new Date(this.FfinTrans).toLocaleTimeString()
							'trafechaInicio': this.FinicioTrans,
							'trahoraInicio': this.HinicioTrans,
							'trafechaFin': this.FfinTrans,
							'trahoraFin': this.HfinTrans
						};
						this.transporteSolInicial = {
							'tratipo': "Terrestre",
							'tramodelo': "Institucional",
							'trarutaInicio': "Tababela-Pichincha",
							'trarutaFin': "Quito-Pichincha",
							// 'trafechaInicio': this.comision.FechaDesde_sol,
							// 'trahoraInicio': this.comision.HoraDesde_sol,
							// 'trafechaFin': this.comision.FechaHasta_sol,
							// 'trahoraFin': this.comision.HoraHasta_sol
							'trafechaInicio': this.FfinTrans,
							'trahoraInicio': this.HfinTrans,
							'trafechaFin': this.nuevafechafin1[0],
							'trahoraFin': this.nuevafechafin1[1]
						};

						this.transporteSol.push(this.transporteSol1);
						this.transporteSol.push(this.transporteSolInicial);

						this.comision.FechaHasta_sol = this.nuevafechafin1[0];
						this.comision.HoraHasta_sol = this.nuevafechafin1[1];

					}else{
						this.transporteSol1 = {
							'tratipo': (<HTMLInputElement>document.getElementById("combo_tiptra")).value,
							'tramodelo': (<HTMLInputElement>document.getElementById("combo_vehiculo")).value,
							'trarutaInicio': this.RinicioTrans,
							'trarutaFin': this.RfinTrans,
							'trafechaInicio': this.FinicioTrans,
							'trahoraInicio': this.HinicioTrans,
							'trafechaFin': this.FfinTrans,
							'trahoraFin': this.HfinTrans
						}
						this.transporteSol.push(this.transporteSol1);
					}

					
				}

				OnEliminarTraReq(){
					let hilera = (<HTMLInputElement>document.getElementById("TransporteReqDet"));
					hilera.remove();
					let hileraactual = (<HTMLInputElement>document.getElementById("TransporteReqDet"));
					if(hileraactual === null){
						this.mostrar_trareq = false;
					}
				}
				OnAgregarbtnEliminar(){
					let tblBody = (<HTMLInputElement>document.getElementById("tbody_trareq_dialog"));
					let hilera = (<HTMLTableRowElement>document.createElement("tr"));
					let tipo = document.createElement("td");
					let modelo = document.createElement("td");
					let rutInicio = document.createElement("td");
					let rurFin = document.createElement("td");
					let fInicio = document.createElement("td");
					let hInicio = document.createElement("td");
					let fFin = document.createElement("td");
					let hFin = document.createElement("td");
					let tdboton = document.createElement("td");
					let aboton = document.createElement("a");
					let rutInicio_trareq;
					let tipo_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("combo_tiptra")).value);
					let modelo_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("combo_vehiculo")).value);
					if(this.RinicioTrans === undefined || this.RinicioTrans == ""){
						this.RinicioTrans = "Cuenca-Azuay";
						rutInicio_trareq = document.createTextNode(this.RinicioTrans);
					}
					else{
						rutInicio_trareq = document.createTextNode(this.RinicioTrans);
					}
					let rurFin_trareq;
					if(this.RfinTrans === undefined || this.RfinTrans == ""){
						this.RfinTrans = "Cuenca-Azuay";
						rurFin_trareq = document.createTextNode(this.RfinTrans);
					}
					else{
						rurFin_trareq = document.createTextNode(this.RfinTrans);
					}
					let nuevafechaIniciotransformar = new Date(this.FinicioTrans).toLocaleString();
					let fechaIniciotransformar = (((JSON.stringify(new Date(this.FinicioTrans).toLocaleDateString()).replace('"','')).replace('"','')).replace('/','-')).replace('/','-');
					let horaIniciotransformar = (JSON.stringify(new Date(this.FinicioTrans).toLocaleTimeString()).replace('"','')).replace('"','');
					let fInicio_trareq = document.createTextNode(fechaIniciotransformar);
					let hInicio_trareq = document.createTextNode(horaIniciotransformar);
					let nuevafechaFintransformar = (JSON.stringify(new Date(this.FfinTrans).toLocaleString()).replace('"','')).replace('"','');
					let fechaFintransformar = (((JSON.stringify(new Date(this.FfinTrans).toLocaleDateString()).replace('"','')).replace('"','')).replace('/','-')).replace('/','-');
					let horaFintransformar = (JSON.stringify(new Date(this.FfinTrans).toLocaleTimeString()).replace('"','')).replace('"','');
					let fFin_trareq = document.createTextNode(fechaFintransformar);
					let hFin_trareq = document.createTextNode(horaFintransformar);
					tipo.appendChild(tipo_trareq);
					modelo.appendChild(modelo_trareq);
					rutInicio.appendChild(rutInicio_trareq);
					rurFin.appendChild(rurFin_trareq);
					fInicio.appendChild(fInicio_trareq);
					hInicio.appendChild(hInicio_trareq);
					fFin.appendChild(fFin_trareq);
					hFin.appendChild(hFin_trareq);
					tdboton.appendChild(aboton);
					aboton.setAttribute("class","btn btn-danger btn-xs glyphicon glyphicon-minus");
					aboton.addEventListener('click', this.OnEliminarTraReq);

					tipo.setAttribute("id","tipo_trareq");
					modelo.setAttribute("id","modelo_trareq");
					rutInicio.setAttribute("id","rutInicio_trareq");
					rurFin.setAttribute("id","rurFin_trareq");
					fInicio.setAttribute("id","fInicio_trareq");
					hInicio.setAttribute("id","hInicio_trareq");
					fFin.setAttribute("id","fFin_trareq");
					hFin.setAttribute("id","hFin_trareq");
					tdboton.setAttribute("id","botoneliminarTraReq");
					hilera.appendChild(tipo);
					hilera.appendChild(modelo);
					hilera.appendChild(rutInicio);
					hilera.appendChild(rurFin);
					hilera.appendChild(fInicio);
					hilera.appendChild(hInicio);
					hilera.appendChild(fFin);
					hilera.appendChild(hFin);
					hilera.appendChild(tdboton);
					hilera.setAttribute("id","TransporteReqDet");
					tblBody.appendChild(hilera);
					(<HTMLInputElement>document.getElementById("combo_tiptra")).value = "0";
					this.modeltrans = false;
					(<HTMLInputElement>document.getElementById("combo_vehiculo")).value = "Escoja uno";
					this.RinicioTrans = "";
					this.RfinTrans = "";
					this.FinicioTrans = "";
					this.FfinTrans = "";
				}

				onSelect() {
					let tipotransporte = (<HTMLInputElement>document.getElementById("combo_tiptra")).value;
					if(tipotransporte === "0"){
						this.modeltra = {
							"tiptraId": 0,
							"tiptraNombre": "Escoja un",
							"tiptraTipo": "Escoja un",
							"tiptraSigla": "NA"
						}
					}else{
						this.moltra = {
							'tritra' : tipotransporte
						};
						this._TransporteService.GetModeloTransporte(this.moltra).subscribe(
							response => {
								let modeltra = response;
								this.modeltra = modeltra;

								this.modeltrans = true;
							},
							error =>{

								this.errorMessage = <any>error;
								if(this.errorMessage != null){
									console.log(this.errorMessage);
									alert("Error en la petición 212");
								}
							}
							);

					}
				}

				onCambiarModelTra(){
					this.modeltrans = false;
				}

				OnImprimirSol(){
					this._router.navigate(['/imprimir_solicitud']);
					// window.location.href='/principal';
				}
				OnBloquearBotones(){

				}

				onEnviarSol(){
					// console.log("this.fondovalor:"+JSON.stringify(this.fondovalor));
					// console.log("this.fondoobservacion:"+JSON.stringify(this.fondoobservacion));
					// console.log("this.comision.fondovalor:"+JSON.stringify(this.comision.fondovalor));
					// console.log("this.comision.fondoobservacion:"+JSON.stringify(this.comision.fondoobservacion));
					// console.log("this.comision:"+JSON.stringify(this.comision));

					let token = this._loginService.getToken();
					this._SolicitudService.AddSolicitud(token,this.comision).subscribe(
						response =>{
							let guardar = response;
							this.guardar = guardar;

							if(this.guardar.status === "success"){

								// alert("La solicitud ha sido creada satisfactoriamente");
								alert(this.guardar.msg);
								window.location.href='/solicitud';
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


				}



			}