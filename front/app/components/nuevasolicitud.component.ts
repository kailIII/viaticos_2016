import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {TransporteService} from '../services/transporte.service';
import {SolicitudService} from '../services/solicitud.service';
import {LoginService} from '../services/login.service';

import {SelectItem} from 'primeng/primeng';

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
	// public Fecha_sol_ini;
	// public FechaDesde_sol_ini;
	// public HoraDesde_sol_ini;
	// public FechaHasta_sol_ini;
	// public HoraHasta_sol_ini;
	public funcionarios_sol_ini;
	public ciudades_sol_ini;
	public Fecha_sol;
	public HoraDesde_sol;
	public HoraHasta_sol;
	public FechaDesde_solicitud;
	public FechaHasta_solicitud;
	public data2;

	constructor(
		private _TransporteService: TransporteService,
		private _SolicitudService: SolicitudService,
		private _loginService: LoginService,
		private _router: Router,
		private _route: ActivatedRoute,
		){
		this.mostrar_trareq = false;
	}

	ngOnInit(){
		this.ciudadComision ="";
		this.ciudadComisionJSON = "";
		this.inicial = false;
		this.paso2 = false;
		this.paso3 = false;
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
			"solotransporteSol":""

		};
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
					alert("Error en la petición 2");
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
		var fechaInicio = new Date(f1).getTime();
		var fechaFin    = new Date(f2).getTime();
		var diff = fechaFin - fechaInicio;
		let diasdiff = diff/(24*60*60*1000)
		for (var i = 0; i <= diasdiff; i++) {
			var date = new Date(f1);
			date.setDate(date.getDate() + i); 
			this.dias.push(date.toLocaleDateString());
		};
	}

	// 	OnAgregarVehiculoSol(){
		// 		// let tblBody = NodeListOf(<HTMLInputElement>document.getElementsByName("tbody_trareq_dialog"));
		// 		let tblBody = (<HTMLInputElement>document.getElementById("tbody_trareq_dialog")).rows.length;
		// 		var yea=tblBody;
		// alert(yea);
		// 	}

		Onpaso2(){

			this.comision.Fecha_sol = new Date(this.Fecha_sol).toLocaleDateString('en-US');
			this.comision.FechaDesde_sol = new Date(this.FechaDesde_solicitud).toLocaleDateString('en-US');
			this.comision.HoraDesde_sol = new Date(this.HoraDesde_sol).toLocaleTimeString();
			this.comision.FechaHasta_sol = new Date(this.FechaHasta_solicitud).toLocaleDateString('en-US');
			this.comision.HoraHasta_sol = new Date(this.HoraHasta_sol).toLocaleTimeString();

			this.OnDiferenciaFechas(this.FechaDesde_solicitud,this.FechaHasta_solicitud);
			let fechaactividades;
			var length = this.dias.length;
			fechaactividades = '';
			for (var i = 0; i < length; i++) {
				let fechas = this.dias[i];
				fechaactividades += '<p class="ql-align-center"><strong class="ql-size-large">'+fechas+'</strong></p><ul><li><br></li></ul>';

			};
			this.comision.actividadessol = fechaactividades;
			this.comision.correo = this._loginService.getIdentity().aperUsuario;
			// 	this.comision.Fecha_sol  = new Date(this.Fecha_sol_ini).toLocaleDateString();
			// 	this.comision.FechaDesde_sol  = new Date(this.FechaDesde_sol_ini).toLocaleDateString();
			// 	this.comision.HoraDesde_sol  = new Date(this.HoraDesde_sol_ini).toLocaleTimeString();
			// 	this.comision.FechaHasta_sol  = new Date(this.FechaHasta_sol_ini).toLocaleDateString();
			// 	this.comision.HoraHasta_sol  = new Date(this.HoraHasta_sol_ini).toLocaleTimeString();
			// console.log("this.funcionarios_sol_ini:"+this.funcionarios_sol_ini);
			if(this.funcionarios_sol_ini !== undefined){
				this.comision.funcionarios_sol  = ((JSON.stringify(this.funcionarios_sol_ini).replace('["','')).replace('"]','')).replace('","',',');
			}
			// this.comision.funcionarios_sol  = JSON.stringify(this.funcionarios_sol_ini);
			if(this.ciudades_sol_ini !== undefined){
				this.comision.ciudades_sol  = (JSON.stringify(this.ciudades_sol_ini).replace('[','')).replace(']','');
			}
			console.log(this.comision);
			this.inicial = true;
		}

		Onpaso3(){
			// this.comision.actividadessol = this.comisionInicial.actividadessol;
			// console.log(this.comision.actividadessol);

			this.paso2 = true;
		}

		Onpaso4(){
			let tblBody = (<HTMLTableCellElement>document.getElementById("tbody_trareq_dialog"));
			// let fila = tblBody.getElementById("TransporteReqDet");
			let hilera = tblBody.getElementsByTagName("tr")
			let filas = hilera.length;
			// alert("filas:"+filas);
			let vehiculo_solicitud;
			let ciudades_solicitud;
			let trahoraFin;
			let trahoraInicio;
			let trarutaFin;
			let trarutaInicio;

			// alert("columna:"+columna);


			for (var i = 0; i < filas; i++) {
				let datos = hilera[i].getElementsByTagName("td")
				let columna = datos.length;
				var data1;
				var data2;
				if(data1 !== undefined){
					data1 = data1+";";
				}
				for (var j = 0; j < columna - 1; j++) {
					let informaciontra = datos[j].firstChild.nodeValue;

					if(data1 == undefined){
						data1 = informaciontra;
					}else{

						data1 = data1.replace(";,",";")+","+informaciontra;
						// console.log(data1);
					data2 = data1;
					}
				}
			}
				// console.log("data2:"+data2);
				// console.log("data2:"+data2.replace(";,",";"));
					this.comision.solotransporteSol = data2;
			// for (var i = 0; i < filas; i++) {
			// }
				// console.log(data1);
			// var data3;
			// this.comision.solotransporteSol = data2;
			// console.log(data3);

		}

		OnbotonAtras(){
			if(this.inicial == false && this.paso2 == false && this.paso3 == false){
				this._router.navigate(['/solicitud']);
			}else if(this.inicial == true && this.paso2 == false && this.paso3 == false){
				this.inicial = false;
			}else if(this.inicial == true && this.paso2 == true && this.paso3 == false) { 
				this.paso2 = false;
			} else  if(this.inicial == true && this.paso2 == true && this.paso3 == true) { 
				this.paso3 = false;

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
			this.OnAgregarbtnEliminar();
		}

		OnEliminarTraReq(){
			let hilera = (<HTMLInputElement>document.getElementById("TransporteReqDet"));
			hilera.remove();
			let hileraactual = (<HTMLInputElement>document.getElementById("TransporteReqDet"));
			// console.log(hileraactual);
			if(hileraactual === null){
				this.mostrar_trareq = false;
				// let encabezado = (<HTMLInputElement>document.getElementById("TransporteReqEnc"));
				// encabezado.remove();
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
			let fechaIniciotransformar = new Date(this.FinicioTrans).toLocaleDateString();
			let horaIniciotransformar = new Date(this.FinicioTrans).toLocaleTimeString();
			let fInicio_trareq = document.createTextNode(fechaIniciotransformar);
			let hInicio_trareq = document.createTextNode(horaIniciotransformar);
			let nuevafechaFintransformar = new Date(this.FfinTrans).toLocaleString();
			let fechaFintransformar = new Date(this.FfinTrans).toLocaleDateString();
			let horaFintransformar = new Date(this.FfinTrans).toLocaleTimeString();
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
							alert("Error en la petición 2");
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

		onEnviarSol(){
			// console.log(this.comision);
			let token = this._loginService.getToken();
			this._SolicitudService.AddSolicitud(token,this.comision).subscribe(
				response =>{
					this.status = response.status;
					if(this.status != "success"){
						this.status = "error";
					}else{
						//van los errores de ingreso
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

	}