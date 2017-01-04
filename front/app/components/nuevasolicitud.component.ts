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
	es: any;
	public tr;
	fechas: Date;
	minDate: Date;
	maxDate: Date;

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
		// this.fechaActual = {
			// 	'FActual' : new Date()
			// };


			this.transporte = {
				// 'solicitudid': "",
				// 'trarutaInicio' : "",
				// 'trarutaFin' : "",
				// 'trahoraInicio' : "",
				// 'trahoraFin' : "",
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

			this.comision = {
				'Fecha_sol' : this.fechahoy,
				'FechaDesde_sol' : "",
				'HoraDesde_sol' : "",
				'FechaHasta_sol' : "",
				'HoraHasta_sol' : "",
				// 'ciudades_sol' : "",
				// 'funcionarios_sol' : "",
				'actividadessol' : "",
				'trafechaSalida' : "",
				'trahoraSalida' : "",
				'trafechaLlegada' : "",
				'trahoraLlegada' : "",
				'vehiculo_solicitud' : "",
				'valorFondo' : "",
				// 'trarutaInicio' : "",
				// 'trarutaFin' : "",
				'trahoraInicio' : "",
				'trahoraFin' : ""
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
								this.perid1 = this.persona_mostrar[i].perId;
								this.personajson = {
									'label': this.personaparte1,
									'value': this.perid1
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

		Onpaso2(){
			this.OnDiferenciaFechas(this.comision.FechaDesde_sol,this.comision.FechaHasta_sol);
			let fechaactividades;
			var length = this.dias.length;
			fechaactividades = '';
			for (var i = 0; i < length; i++) {
				let fechas = this.dias[i];
				fechaactividades += '<p class="ql-align-center"><strong class="ql-size-large">'+fechas+'</strong></p><ul><li><br></li></ul>';

			};
			this.comision.actividadessol = fechaactividades;
			this.inicial = true;
		}

		Onpaso3(){
			this.paso2 = true;
			// console.log(this.comision);
		}

		Onpaso4(){
			// this.paso3 = true;
			console.log(this.comision);
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
			// console.log("tipo_trareq:"+(tipo_trareq));
			let modelo_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("combo_vehiculo")).value);
			// console.log("modelo_trareq:"+(modelo_trareq));
			// console.log("this.RinicioTran:"+(this.RinicioTrans));
			// let rutInicio_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("RinicioTrans")).value);
			// console.log("this.RinicioTrans:"+this.RinicioTrans);
			if(this.RinicioTrans === undefined || this.RinicioTrans == ""){
				this.RinicioTrans = "Cuenca-Azuay";
				rutInicio_trareq = document.createTextNode(this.RinicioTrans);
			}
			else{
				rutInicio_trareq = document.createTextNode(this.RinicioTrans);
			}
			// console.log("rutInicio_trareq:"+(rutInicio_trareq));
			// let rurFin_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("RfinTrans")).value);
			let rurFin_trareq;
			if(this.RfinTrans === undefined || this.RfinTrans == ""){
				this.RfinTrans = "Cuenca-Azuay";
				rurFin_trareq = document.createTextNode(this.RfinTrans);
			}
			else{
				rurFin_trareq = document.createTextNode(this.RfinTrans);
			}
			
			// console.log("rurFin_trareq:"+(rurFin_trareq));
			// let fInicio_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("FinicioTrans")).value);
			let nuevafechaIniciotransformar = new Date(this.FinicioTrans).toLocaleString();
			let fechaIniciotransformar = new Date(this.FinicioTrans).toLocaleDateString();
			let horaIniciotransformar = new Date(this.FinicioTrans).toLocaleTimeString();

			// console.log("nuevafechatransformar:"+nuevafechaIniciotransformar);
			// console.log("fechatransformar:"+fechaIniciotransformar);
			// console.log("horatransformar:"+horaIniciotransformar);
			// let fechaInicio = nuevafechatransformar;
			// console.log("fechaInicio:"+fechaInicio);
			let fInicio_trareq = document.createTextNode(fechaIniciotransformar);
			// let hInicio_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("HinicioTrans")).value);

			let hInicio_trareq = document.createTextNode(horaIniciotransformar);
			// console.log("hInicio_trareq:"+(hInicio_trareq));
			// let fFin_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("FfinTrans")).value);

			let nuevafechaFintransformar = new Date(this.FfinTrans).toLocaleString();
			let fechaFintransformar = new Date(this.FfinTrans).toLocaleDateString();
			let horaFintransformar = new Date(this.FfinTrans).toLocaleTimeString();
			let fFin_trareq = document.createTextNode(fechaFintransformar);

			// console.log("fFin_trareq:"+(fFin_trareq));
			// let hFin_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("HfinTrans")).value);
			let hFin_trareq = document.createTextNode(horaFintransformar);

			// console.log("hFin_trareq:"+(hFin_trareq));

			// console.log(new Date(JSON.stringify((<HTMLInputElement>document.getElementById("FinicioTrans")).value)));
			// console.log(new Date((<HTMLInputElement>document.getElementById("FfinTrans")).value));

			// let condiciontipo_trareq = (<HTMLInputElement>document.getElementById("combo_tiptra")).value;
			// let condicionfInicio_trareq = new Date((<HTMLInputElement>document.getElementById("FinicioTrans")).value);
			// let condicionfFin_trareq = new Date((<HTMLInputElement>document.getElementById("FfinTrans")).value);
			// // this.RinicioTrans = [];
			// // this.RfinTrans = [];
			// let condicionhInicio_trareq = (<HTMLInputElement>document.getElementById("HinicioTrans")).value;
			// let condicionhFin_trareq = (<HTMLInputElement>document.getElementById("HfinTrans")).value;

			// let condicionfInicio_tra = (<HTMLInputElement>document.getElementById("FinicioTrans")).value = "";
			// let condicionfFin_tra = (<HTMLInputElement>document.getElementById("FfinTrans")).value = "";

			// if(condiciontipo_trareq !== "0" && condicionfInicio_trareq >= condicionfFin_trareq && this.RinicioTrans !== [] && this.RfinTrans !== [] && condicionhInicio_trareq !== "" && condicionhFin_trareq !== "" && condicionfInicio_tra !== "" && condicionfFin_tra !== "" &&
			// 	/*JSON.stringify(this.RinicioTrans) !== JSON.stringify(this.RfinTrans)*/ condicionhInicio_trareq !== condicionhFin_trareq){
				// 	alert("cumple todo");
				// }else{
					// 	alert("no cumple");
					// }

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
					// console.log(this.comision);
					// console.log(this.RfinTrans);
					// console.log(this.RinicioTrans);

					(<HTMLInputElement>document.getElementById("combo_tiptra")).value = "0";
					this.modeltrans = false;
					(<HTMLInputElement>document.getElementById("combo_vehiculo")).value = "Escoja uno";
					// let rutInicio_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("RinicioTrans")).value);
					// (<HTMLInputElement>document.getElementById("RinicioTrans")).value = "Escoja";
					this.RinicioTrans = "";
					// let rurFin_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("RfinTrans")).value);
					// (<HTMLInputElement>document.getElementById("RfinTrans")).value ="Escoja";
					this.RfinTrans = "";
					this.FinicioTrans = "";
					// this.HinicioTrans = "";
					this.FfinTrans = "";
					// this.HfinTrans = "";
					// (<HTMLInputElement>document.getElementById("FinicioTrans")).value = "";
					// (<HTMLInputElement>document.getElementById("HinicioTrans")).value = "";
					// (<HTMLInputElement>document.getElementById("FfinTrans")).value = "";
					// (<HTMLInputElement>document.getElementById("HfinTrans")).value = "";

				}

				onSelect() {
					let tipotransporte = (<HTMLInputElement>document.getElementById("combo_tiptra")).value;
					// console.log(tipotransporte);
					if(tipotransporte === "0"){
						// console.log("ESTA EN 0");
						this.modeltra = {
							"tiptraId": 0,
							"tiptraNombre": "Escoja un",
							"tiptraTipo": "Escoja un",
							"tiptraSigla": "NA"
						}
					}else{
						// console.log("ESTA CON VALORES");
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

			}