import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {TransporteService} from '../services/transporte.service';
import {SolicitudService} from '../services/solicitud.service';
import {LoginService} from '../services/login.service';

import {SelectItem, OrderListModule, DataTable} from 'primeng/primeng';
import {FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

declare var JQuery:any;
declare var $:any;
declare var moment: any;

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
	// public bntIngresar: boolean;
	// public btnAceptar: boolean;

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
	public nuevahorafinanterior;
	public nuevafechafinanterior;
	public nuevafechafinanterior1: Array<any>;
	public nuevahorainicioanterior;
	public nuevafechainicioanterior;
	public nuevafechainicioanterior1: Array<any>;
	public nuevafechamas: Array<any>;
	public nuevafechamenos: Array<any>;
	public datoscorreo;
	public guardar1;
	public guardar2;
	public datosfun;
	public datoscorreoAJefe;
	public existenDatosGenerales: boolean;
	public mensajeGuardado;
	public fechaminimaSol;
	public fechamaximaSol;
	public fechamaximaTransporte;
	public ciuFaltante: Array<any>;

	public OpcWarning: boolean;
	public OpcBien: boolean;
	// @Output() mensajeGuardado: EventEmitter<string> = new EventEmitter();

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

		this.fechaminimaSol = moment().subtract(15, 'd').format('YYYY-MM-DD');
		this.fechamaximaSol = moment().format('YYYY-MM-DD');
		this.fechamaximaTransporte = moment().add(15, 'd').format('YYYY-MM-DD');
		this.mensajeGuardado = "false";
		(<HTMLInputElement>document.getElementById("Fecha_sol")).setAttribute("min", this.fechaminimaSol);
		(<HTMLInputElement>document.getElementById("Fecha_sol")).setAttribute("max", this.fechamaximaSol);
		// (<HTMLInputElement>document.getElementById("FinicioTrans1")).setAttribute("min", this.fechaminimaSol);
		// (<HTMLInputElement>document.getElementById("FinicioTrans1")).setAttribute("max", this.fechamaximaTransporte);
		// (<HTMLInputElement>document.getElementById("FfinTrans1")).setAttribute("min", this.fechaminimaSol);
		// (<HTMLInputElement>document.getElementById("FfinTrans1")).setAttribute("max", this.fechamaximaTransporte);
		
		
		// this.mensajeGuardado.emit("true");
		// console.log("this.mensajeGuardado:"+JSON.stringify(this.mensajeGuardado));
		// console.log("this.mensajeGuardado:"+this.mensajeGuardado);
		this.ciudadComision = "";
		this.ciudadComisionJSON = "";
		this.inicial = false;
		this.paso2 = false;
		this.paso3 = false;
		this.paso4 = false;
		this.modeltrans = false;
		this.existenDatosGenerales = false;
		this.transporte = {
			'tritra':""
		};
		this.tipotra = this._TransporteService.GetTransporte();

		this.OnCiudad();
		this.OnPersona();
		this.OnCiudadTransporte();
		// this.expanderBloqueNuevaSol();

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

		this.datoscorreo = {
			'sendTo':""
		};

		this.datosfun = {
			'nombre': this._loginService.getIdentity().perNombre+" "+this._loginService.getIdentity().perApellido
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
			'timestamp': "",
			'timestampf': "",
			'estado':""
		};
		this.transporteSol = [];
		this.ciuFaltante = [];
		// this.bntIngresar= true;
		// this.btnAceptar= false;

		this.datoscorreoAJefe = {
			'solicitud': "",
			'sendToFun2':""
		};

		this.OpcWarning = true;
		this.OpcBien = false;
		// this.OnHoraFinicioTra();
		// this.OnHoraFfinTra();
		// $('#seccion2').transition = false;
		$(function() { $('#seccion2').transition = false; })

	}

	toggleTitle(){
		$('.title').slideToggle();
	}

	borrarruta(i) {
		this.transporteSol.splice(this.transporteSol.indexOf(i),1);
	} 
	aceptarruta() {

			let j;
			let resta;
			let fechaInicial;
			let fechaFinal;
			let transportetamano;

			transportetamano = this.transporteSol.length;
			for(j=0 ; j< transportetamano-1 ; j++){
				fechaInicial = new Date(this.transporteSol[j+1].trafechaInicio+" "+this.transporteSol[j+1].trahoraInicio).getTime();
				fechaFinal = new Date(this.transporteSol[j].trafechaFin+" "+this.transporteSol[j].trahoraFin).getTime();
				resta = fechaInicial-fechaFinal;
				if(resta < 0){
					this.transporteSol[j].trafechaFin = this.transporteSol[j+1].trafechaInicio;
					this.transporteSol[j].trahoraFin = this.transporteSol[j+1].trahoraInicio;
					this.transporteSol[j].timestampf = this.transporteSol[j+1].timestamp;
				}
			}
			this.FechaDesde_solicitud = this.transporteSol[0].trafechaInicio;
			this.HoraDesde_sol = this.transporteSol[0].trahoraInicio;
			this.FechaHasta_solicitud = this.transporteSol[transportetamano-1].trafechaFin;
			this.HoraHasta_sol = this.transporteSol[transportetamano-1].trahoraFin;
	} 
	editarruta(i) {
		// this.transporteSol.splice(this.transporteSol.indexOf(i),1);
		console.log("car:"+JSON.stringify(i));
	} 

	mensajeTransporte(i){
		let j;
		for(j=0; j<this.transporteSol.length; j++){

		console.log("i.estado:"+i.estado);
		if(i.estado === 'ERROR'){
			return 'color-tabla-transporte';
		}
		}
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
	// esta ciudad se debe mostrar deacuerdo a cada tipo de transporte
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
	// se muestra persona del mismo departamento
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
		// let tipotransporte = document.createTextNode((<HTMLInputElement>document.getElementById("combo_tiptra")).value);
		let tipotransporte = (<HTMLInputElement>document.getElementById("combo_tiptra")).value;
		return tipotransporte;
	}

	public today():void {
		this.dt = new Date();
	}

	OnDiferenciaFechas(f1,f2){
		this.dias = [];
		var fechaInicio = new Date(f1).toLocaleDateString();
		var fechaFin    = new Date(f2).getTime();
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
		solotransporteSolConvert = solotransporteSol+'"';
		this.comision.solotransporteSol = (solotransporteSolConvert.replace(';"',''));
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
		// this.bntIngresar= true;
		// this.btnAceptar= false;
		// if(this.transporteSol.length > 0){

		// 	let error= "Hay error"
		// 	if(error){
		// 		console.log("Aqui enviar a tra war");
		// 	}else{
		// 		this.OnAgregarRuta();
		// 	}
		// }else{
			this.OnAgregarRuta();
		// }
	}

	// OnAgregarTraWar(){
	// 	let error= "Hay error"
	// 	if(error){
	// 		alert("Persiste el error en las rutas, por favor corregirlo");
	// 	}else{
	// 		this.OnAgregarRutaWar();
	// 	}
	// }

	OnValidadCiudades(){
		// let valor_textarea1 = (<HTMLInputElement>document.getElementById("ingresarCiudad")).value;
		// console.log("valor_textarea1:"+JSON.stringify(valor_textarea1));

		console.log("this.comision.ciudades_sol:"+JSON.stringify(this.comision.ciudades_sol));

	}
	// OnAgregarRutaWar(){}

	OnAgregarRuta(){

		let Fechainicio11 = moment(this.FinicioTrans +" "+this.HinicioTrans);
		let Fechafin11 = moment(this.FfinTrans +" "+this.HfinTrans);
		
		this.nuevafechafin = (Fechafin11.add(1,"hour")).format('YYYY-MM-DD/HH:mm');
		this.nuevafechainicio1 = (this.nuevafechafin).split("/");

		if(Fechainicio11<Fechafin11){
			if(this.transporteSol.length == 0 && this.RinicioTrans === "Quito-Pichincha" && (<HTMLInputElement>document.getElementById("combo_tiptra")).value ==="Aereo"){
				this.transporteSol1 = {
					'tratipo': (<HTMLInputElement>document.getElementById("combo_tiptra")).value,
					'tramodelo': (<HTMLInputElement>document.getElementById("combo_vehiculo")).value,
					'trarutaInicio': "Tababela-Pichincha",
					'trarutaFin': this.RfinTrans,
					'trafechaInicio': this.FinicioTrans,
					'trahoraInicio': this.HinicioTrans,
					'trafechaFin': this.FfinTrans,
					'trahoraFin': this.HfinTrans,
					'timestamp': new Date(this.FinicioTrans+" "+this.HinicioTrans).getTime(),
					'timestampf': new Date(this.FfinTrans+" "+this.HfinTrans).getTime()
				};
				this.transporteSolInicial = {
					'tratipo': "Terrestre",
					'tramodelo': "Institucional",
					'trarutaInicio': "Quito-Pichincha",
					'trarutaFin': "Tababela-Pichincha",
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
					'trafechaInicio': this.FinicioTrans,
					'trahoraInicio': this.HinicioTrans,
					'trafechaFin': this.FfinTrans,
					'trahoraFin': this.HfinTrans,
					'timestamp': new Date(this.FinicioTrans+" "+this.HinicioTrans).getTime(),
					'timestampf': new Date(this.FfinTrans+" "+this.HfinTrans).getTime()
				};
				this.transporteSolInicial = {
					'tratipo': "Terrestre",
					'tramodelo': "Institucional",
					'trarutaInicio': "Tababela-Pichincha",
					'trarutaFin': "Quito-Pichincha",
					'trafechaInicio': this.FfinTrans,
					'trahoraInicio': this.HfinTrans,
					'trafechaFin': this.nuevafechafin1[0],
					'trahoraFin': this.nuevafechafin1[1]
				};
				this.transporteSol.push(this.transporteSol1);
				this.transporteSol.push(this.transporteSolInicial);
			}else{
				this.transporteSol1 = {
					'tratipo': (<HTMLInputElement>document.getElementById("combo_tiptra")).value,
					'tramodelo': (<HTMLInputElement>document.getElementById("combo_vehiculo")).value,
					'trarutaInicio': this.RinicioTrans,
					'trarutaFin': this.RfinTrans,
					'trafechaInicio': this.FinicioTrans,
					'trahoraInicio': this.HinicioTrans,
					'trafechaFin': this.FfinTrans,
					'trahoraFin': this.HfinTrans,
					'timestamp': new Date(this.FinicioTrans+" "+this.HinicioTrans).getTime(),
					'timestampf': new Date(this.FfinTrans+" "+this.HfinTrans).getTime()
				}
				this.transporteSol.push(this.transporteSol1);
				this.FechaDesde_solicitud = this.FinicioTrans;
				this.HoraDesde_sol = this.HinicioTrans;
			}
			this.RinicioTrans = this.RfinTrans;

			this.transporteSol.sort( function (a1, a2) {
				if ( a1.timestamp < a2.timestamp ){
					return -1;
				}else if( a1.timestamp > a2.timestamp ){
					return 1;
				}else{
					return 0;	
				}
			});
if(this.transporteSol.length == 1){
	this.transporteSol[0].estado = 'BIEN'
}

			let j;
			let k;
			let resta;
			let restaInicio;
			let restaFin;
			let fechaInicial;
			let fechaFinal;
			let fechaInicialj1;
			let fechaFinalj1;
			let transportetamano;

			transportetamano = this.transporteSol.length;
			for(j=0 ; j< transportetamano ; j++){
				for(k=j+1 ; k < transportetamano ; k++){

				// fechaInicial = new Date(this.transporteSol[j+1].trafechaInicio+" "+this.transporteSol[j+1].trahoraInicio).getTime();
				// fechaFinal = new Date(this.transporteSol[j].trafechaFin+" "+this.transporteSol[j].trahoraFin).getTime();

				// fechaInicialj1 = new Date(this.transporteSol[k].trafechaInicio+" "+this.transporteSol[k].trahoraInicio).getTime();
				// fechaFinalj1 = new Date(this.transporteSol[k].trafechaFin+" "+this.transporteSol[k].trahoraFin).getTime();

				fechaFinal = this.transporteSol[j].timestampf;

				fechaInicialj1 = this.transporteSol[k].timestamp;
				fechaFinalj1 = this.transporteSol[k].timestampf;

				// resta = fechaInicial-fechaFinal;
				restaInicio = fechaInicialj1-fechaFinal;
				restaFin = fechaFinalj1-fechaFinal;
				if(restaInicio < 0 && restaFin > 0){
					this.transporteSol[k].estado = 'ERROR'

			// 		this.transporteSol[j].trafechaFin = this.transporteSol[j+1].trafechaInicio;
			// 		this.transporteSol[j].trahoraFin = this.transporteSol[j+1].trahoraInicio;
			// 		this.transporteSol[j].timestampf = this.transporteSol[j+1].timestamp;
				}else if(restaInicio < 0 && restaFin < 0){
					this.transporteSol[k].estado = 'ERROR'
				}else{
					this.transporteSol[k].estado = 'BIEN'
				}
				}
			}
			this.FechaDesde_solicitud = this.transporteSol[0].trafechaInicio;
			this.HoraDesde_sol = this.transporteSol[0].trahoraInicio;
			this.FechaHasta_solicitud = this.transporteSol[transportetamano-1].trafechaFin;
			this.HoraHasta_sol = this.transporteSol[transportetamano-1].trahoraFin;
			this.FinicioTrans = "";
			this.HinicioTrans = "";
			this.FfinTrans = "";
			this.HfinTrans = "";

		}else{
			alert("Estan mal las fechas y horas, por favor modificar estos datos");
		}
	}

	OnVerificarRuta(){
		let j;
		let resta;
		let fechaInicial;
		let fechaFinal;
		let transportetamano;

		transportetamano = this.transporteSol.length;
		for(j=0 ; j< transportetamano-1 ; j++){
				fechaInicial = new Date(this.transporteSol[j+1].trafechaInicio+" "+this.transporteSol[j+1].trahoraInicio).getTime();
				fechaFinal = new Date(this.transporteSol[j].trafechaFin+" "+this.transporteSol[j].trahoraFin).getTime();
				resta = fechaInicial-fechaFinal;
				if(resta < 0){
					this.transporteSol[j].trafechaFin = this.transporteSol[j+1].trafechaInicio;
					this.transporteSol[j].trahoraFin = this.transporteSol[j+1].trahoraInicio;
					this.transporteSol[j].timestampf = this.transporteSol[j+1].timestamp;
				}
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
		// this.OnOrdernarTransporte();
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

	// OnOrdernarTransporte(){
		// 	var table, rows, switching, i, x, y, k, shouldSwitch, RutaFin, RutaIniSig;
		// 	var FechaHoraInicio,FechaHoraInicioSig;
		// 	table = document.getElementById("tbody_trareq_dialog");
		// 	switching = true;
		// 	while (switching) {
			// 		switching = false;
			// 		rows = table.getElementsByTagName("TR");
			// 		for (i = 1; i < rows.length-1; i++) {

				// 			console.log("celdas:"+(<HTMLInputElement>rows[i].getElementsByTagName("TD")[4]).value);
				// 			shouldSwitch = false;
				// 			FechaHoraInicio = (new Date((rows[i].getElementsByTagName("TD")[4]).innerText+"T"+(rows[i].getElementsByTagName("TD")[5]).innerText).getTime() / 1000);
				// 			FechaHoraInicioSig = (new Date((rows[i+1].getElementsByTagName("TD")[4]).innerText+"T"+(rows[i+1].getElementsByTagName("TD")[5]).innerText).getTime() / 1000);
				// 			console.log("Fecha en ordenado:"+FechaHoraInicio);
				// 			if (FechaHoraInicio > FechaHoraInicioSig) {
					// 				shouldSwitch= true;
					// 				break;
					// 			}
					// 		}
					// 		if (shouldSwitch) {
						// 			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
						// 			switching = true;
						// 		}
						// 	}
						// }

						onEnviarSol(){
							// this.Onpaso5();
							let token = this._loginService.getToken();
							let nombrecompleto = this._loginService.getIdentity().perNombre+" "+this._loginService.getIdentity().perApellido;
							this._SolicitudService.AddSolicitud(token,this.comision).subscribe(
								response =>{
									let guardar = response;
									this.guardar = guardar;
									if(this.guardar.status === "success"){
										this.datoscorreoAJefe.solicitud = this.guardar.code;
										this.mensajeGuardado = "true";
										// this.OnEnviarCorreoAfun(this.comision.funcionarios_sol);
									}else{
										alert(this.guardar.msg);
									}
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

						OnEnviarCorreoAfun(a){
							let token = this._loginService.getToken();
							if(a === ""){
								this.datoscorreo = {
									'sendTo': this.datosfun.nombre,
									'sendToFun': this.datosfun.nombre
								};
							}else{

								this.datoscorreo = {
									'sendTo': this.datosfun.nombre+","+a,
									'sendToFun': this.datosfun.nombre
								};
							}
							this._SolicitudService.enviar1Solicitud(token,this.datoscorreo).subscribe(
								response =>{
									let guardar1 = response;
									this.guardar1 = guardar1;
									if(this.guardar1.status === "success"){
										this.OnEnviarCorreofunAJefe();
									}else{
										this.mensajeGuardado = "error";
									}
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
						OnEnviaraRaizSolicitud(){
							this._router.navigate(['/solicitud']);
						}

						OnEnviarCorreofunAJefe(){
							let token = this._loginService.getToken();
							this.datoscorreoAJefe.sendToFun2 = this.datosfun.nombre;
							this._SolicitudService.enviarjiSolicitud(token,this.datoscorreoAJefe).subscribe(
								response =>{
									let guardar1 = response;
									this.guardar2 = guardar1;
									if(this.guardar2.status === "success"){
										this.mensajeGuardado = "true";
									}else{
										this.mensajeGuardado = "error";
									}
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

						onGuardarSol(){

							let Fecha_sol  = (<HTMLInputElement>document.getElementById("Fecha_sol")).value;
							let FechaDesde_sol  = (<HTMLInputElement>document.getElementById("FechaDesde_solicitud")).value;
							let HoraDesde_sol  = (<HTMLInputElement>document.getElementById("HoraDesde_sol")).value;
							let FechaHasta_sol  = (<HTMLInputElement>document.getElementById("FechaHasta_solicitud")).value;
							let HoraHasta_sol  = (<HTMLInputElement>document.getElementById("HoraHasta_sol")).value;
							let actividadessol  = (<HTMLInputElement>document.getElementById("actividadesRealizar")).value;
							let ciudades_sol = this.ciudades_sol_ini;
							let tablaTransporte = this.transporteSol.length;

							// if(Fecha_sol === "" || FechaDesde_sol === "" || HoraDesde_sol === "" || FechaHasta_sol === "" || HoraHasta_sol === "" || this.comision.actividadessol === undefined || this.comision.actividadessol === null || this.comision.actividadessol === "" || ciudades_sol === undefined || ciudades_sol === null || ciudades_sol === "" || tablaTransporte == 0){
								if(Fecha_sol == "" || FechaDesde_sol == "" || HoraDesde_sol == "" || FechaHasta_sol == "" || HoraHasta_sol == "" || ciudades_sol === undefined || ciudades_sol === null || ciudades_sol == ""){
									alert("Faltan datos en la seccion Datos Generales");
								}else if(this.comision.actividadessol === undefined || this.comision.actividadessol === null || this.comision.actividadessol == ""){
									alert("Faltan datos en la seccion Actividades");
								}else if(tablaTransporte == 0){
									alert("Faltan datos en la seccion Transporte");
								}else{
									this.Onpaso4();
									this.onEnviarSol();
								}
							}

							datosGenerales(){
								// $('#seccion2').transition = true;
								// $(function() { $('#seccion2').transition = true; })
								// if(this.FechaDesde_solicitud === undefined || this.FechaDesde_solicitud === "" || this.HoraDesde_sol === undefined || this.HoraDesde_sol === "" || this.FechaHasta_solicitud === undefined || this.FechaHasta_solicitud === "" || this.HoraHasta_sol === undefined || this.HoraHasta_sol === "" || this.ciudades_sol_ini === undefined || this.ciudades_sol_ini === ""){
									if(this.Fecha_sol === undefined || this.Fecha_sol === "" || this.ciudades_sol_ini === undefined || this.ciudades_sol_ini === ""){

										alert("Falta ingresar datos requeridos, por favor ingrese los campos de la Sección DATOS GENERALES");
										this.existenDatosGenerales = false;
									}else{
										this.existenDatosGenerales = true;
										// this.comision.Fecha_sol = this.Fecha_sol;
										// this.comision.FechaDesde_sol = this.FechaDesde_solicitud;
										// this.comision.HoraDesde_sol = this.HoraDesde_sol;
										// this.comision.FechaHasta_sol = this.FechaHasta_solicitud;
										// this.comision.HoraHasta_sol = this.HoraHasta_sol;

										this.comision.correo = this._loginService.getIdentity().aperUsuario;
										if(this.funcionarios_sol_ini !== undefined){
											this.comision.funcionarios_sol  = (((JSON.stringify(this.funcionarios_sol_ini).replace('["','')).replace('"]','')).replace('","',',')).replace(/\"/g,'');
										}
										if(this.ciudades_sol_ini !== undefined){
											this.comision.ciudades_sol  = (JSON.stringify(this.ciudades_sol_ini).replace('[','')).replace(']','');
										}
									}
									console.log("this.comision.ciudades_sol:"+JSON.stringify(this.ciudades_sol_ini));
								}

							}