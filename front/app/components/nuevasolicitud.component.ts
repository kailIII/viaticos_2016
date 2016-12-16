import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {TransporteService} from '../services/transporte.service';

@Component({
	selector: 'nueva_solicitud',
	templateUrl: 'app/view/nueva_solicitud.html',
	providers: [TransporteService]
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

	constructor(
		private _TransporteService: TransporteService,
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
		this.tipotra = this._TransporteService.GetTransporte();
		// console.log("this.tipotra:"+this.tipotra);
	}

	OnTipoTransporte(){
		let tipotransporte = document.createTextNode((<HTMLInputElement>document.getElementById("combo_tiptra")).value);
		return tipotransporte;
	}

	Onpaso2(){
		// console.log(JSON.stringify(this.comision));
		this.inicial = true;
	}

	Onpaso3(){
		// console.log(JSON.stringify(this.comision));
		this.paso2 = true;
	}

	Onpaso4(){
		// console.log(JSON.stringify(this.comision));
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

	// OnTipoTransporte(){
		// 	var tipotransporte = [
		// 	{val: "Aereo", name: "Aereo"},
		// 	{val: "Terrestre", name: "Terrestre"},
		// 	{val: "Marítimo", name: "Marítimo"},
		// 	{val: "Ferreo", name: "Ferreo"}
		// 	];
		// 	return tipotransporte;
		// }

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


			let tipo_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("combo_tiptra")).value);
			let modelo_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("combo_vehiculo")).value);
			let rutInicio_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("RinicioTrans")).value);
			let rurFin_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("RfinTrans")).value);
			let fInicio_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("FinicioTrans")).value);
			let hInicio_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("HinicioTrans")).value);
			let fFin_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("FfinTrans")).value);
			let hFin_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("HfinTrans")).value);

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

		}

		onSelect() {

			let tipotransporte = (<HTMLInputElement>document.getElementById("combo_tiptra")).value;
			
			// a = this.tipotra.name;
			// console.log(a);
			// console.log("this.tipotra:"+this.tipotra)
			// console.log("tipotransporte:"+JSON.stringify(tipotransporte));
			this.moltra = {
				'tritra' : tipotransporte
			};
			// console.log("this.moltra:"+JSON.stringify(this.moltra));
			// this.modelotrans = this._TransporteService.GetModeloTransporte(this.moltra).filter((item)=> item.tiptraNombre == tipotransporte	);
			this._TransporteService.GetModeloTransporte(this.moltra).subscribe(
				response => {
					// this.modeltra = response;
					let modeltra = response;
					this.modeltra = modeltra;
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

		onImprimirSol(){
			// this._router.navigate(['/imprimir_solicitud']);
			this.imprimirsol = true;
			window.location.href='/imprimir_solicitud';
		}

	}