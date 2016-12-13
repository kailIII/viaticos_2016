import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {Transporte} from '../services/transporte';

// import { Ng2TableModule } from 'ng2-table/ng2-table';
// class Trans implements Transporte{
// 	constructor(
// 		public combo_tiptra?,
// 		public combo_vehiculo?,
// 		public RinicioTrans?,
// 		public RfinTrans?,
// 		public FinicioTrans?,
// 		public HinicioTrans?,
// 		public FfinTrans?,
// 		public HfinTrans?,
// 		){}
// }

@Component({
	selector: 'nueva_solicitud',
	templateUrl: 'app/view/nueva_solicitud.html'
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

	// settings = {
 //    columns: {
 //      id: {
 //        title: 'ID'
 //      },
 //      name: {
 //        title: 'Full Name'
 //      },
 //      username: {
 //        title: 'User Name'
 //      },
 //      email: {
 //        title: 'Email'
 //      }
 //    }
 //  };

	// displayDialog: boolean;

	// car: Transporte = new Trans();

	// selectedCar: Transporte;

	// newCar: boolean;

	// cars: Transporte[];


	constructor(
		private _router: Router,
		private _route: ActivatedRoute

		){
		this.mostrar_trareq = false;
	}

	ngOnInit(){
		this.ciudadComision ="";
		this.ciudadComisionJSON = "";
		this.inicial = false;
		this.paso2 = false;
		this.paso3 = false;
		this.transporte = {
			'tritra': ""
		};
		this.comision = {
			'PersonasComision' : "",
			'FechaDesde_sol' : "",
			'HoraDesde_sol' : "",
			'FechaHasta_sol' : "",
			'HoraHasta_sol' : "",
			'actividadessol' : "",
			'observacionsol' : "",
			'ciudades_solicitud' : "",
			'trafechaSalida' : "",
			'trahoraSalida' : "",
			'trafechaLlegada' : "",
			'trahoraLlegada' : "",
			'vehiculo_solicitud' : "",
			'valorFondo' : "",
			'trarutaInicio' : "",
			'trarutaFin' : "",
			'trahoraInicio' : "",
			'trahoraFin' : ""
		};
		this.tipotra = this.OnTipoTransporte();
	}

	Onpaso2(){
		console.log(JSON.stringify(this.comision));
		this.inicial = true;
	}

	Onpaso3(){
		console.log(JSON.stringify(this.comision));
		this.paso2 = true;
	}

	Onpaso4(){
		console.log(JSON.stringify(this.comision));
		this.paso3 = true;
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

	OnTipoTransporte(){
		var tipotransporte = [
		{val: "Aereo", name: "Aereo"},
		{val: "Terrestre", name: "Terrestre"},
		{val: "Marítimo", name: "Marítimo"},
		{val: "Ferreo", name: "Ferreo"}
		];
		return tipotransporte;
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
		alert("Eliminar vehiculo");

		// this.pedidovehiculo = {
			// 	'trafechaSalida' : "",
			// 	'trahoraSalida' : "",
			// 	'trafechaLlegada' : "",
			// 	'trahoraLlegada' : "",
			// 	'vehiculo_solicitud' : "",
			// 	'trarutaInicio' : "",
			// 	'trarutaFin' : "",
			// 	'trahoraInicio' : "",
			// 	'trahoraFin' : ""
			// };

			// document.removeChild(hilera.indexOf(),1);
			// <HTMLElement>document.getElementById("TransporteReqDet").deleteRow(0);
			// var filaborrar = (<HTMLElement>document.getElementById("TransporteReqDet"));
			// this.pedidovehiculo.splice(1, 1);
		}
		OnAgregarbtnEliminar(){
			var tblBody = (<HTMLInputElement>document.getElementById("tbody_trareq_dialog"));
			var hilera = (<HTMLTableRowElement>document.createElement("tr"));

			var tipo = document.createElement("td");
			var modelo = document.createElement("td");
			var rutInicio = document.createElement("td");
			var rurFin = document.createElement("td");
			var fInicio = document.createElement("td");
			var hInicio = document.createElement("td");
			var fFin = document.createElement("td");
			var hFin = document.createElement("td");
			var tdboton = document.createElement("td");
			var aboton = document.createElement("a");


			var tipo_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("combo_tiptra")).value);
			var modelo_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("combo_vehiculo")).value);
			var rutInicio_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("RinicioTrans")).value);
			var rurFin_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("RfinTrans")).value);
			var fInicio_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("FinicioTrans")).value);
			var hInicio_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("HinicioTrans")).value);
			var fFin_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("FfinTrans")).value);
			var hFin_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("HfinTrans")).value);

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
			// aboton.addEventListener('click', function() {
				// 	alert("Eliminar vehiculo");
				// });
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

			}
			// showDialogToAdd() {
			// 	this.newCar = true;
			// 	this.car = new Trans();
			// 	this.displayDialog = true;
			// }
			// save() {
			// 	if(this.newCar)
			// 		this.cars.push(this.car);
			// 	else
			// 		this.cars[this.findSelectedCarIndex()] = this.car;

			// 	this.car = null;
			// 	this.displayDialog = false;
			// }

			// delete() {
			// 	this.cars.splice(this.findSelectedCarIndex(), 1);
			// 	this.car = null;
			// 	this.displayDialog = false;
			// }

			// onRowSelect(event) {
			// 	this.newCar = false;
			// 	this.car = this.cloneCar(event.data);
			// 	this.displayDialog = true;
			// }

			// cloneCar(c: Transporte): Transporte {
			// 	let car = new Trans();
			// 	for(let prop in c) {
			// 		car[prop] = c[prop];
			// 	}
			// 	return car;
			// }

			// findSelectedCarIndex(): number {
			// 	return this.cars.indexOf(this.selectedCar);
			// }
		}