import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {TransporteService} from '../services/transporte.service';
import {SolicitudService} from '../services/solicitud.service';
import {LoginService} from '../services/login.service';

import {SelectItem} from 'primeng/primeng';
import {FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

// import {SolicitudComponent} from './solicitud.component';

declare var JQuery:any;
declare var $:any;

@Component({
	selector: 'versolicitud',
	templateUrl: 'app/view/versolicitud.html',
	providers: [TransporteService, SolicitudService, LoginService]
})

export class VersolicitudComponent implements OnInit{

	public titulo = "Nueva Solicitud";
	public equis;
	public solifecfun2;
	public cargocotosol2;
	public cargojefesol2;
	public transportessol2;
	public cardep2;
	public bancosol2;
	
	constructor(
		private _TransporteService: TransporteService,
		private _SolicitudService: SolicitudService,
		private _loginService: LoginService,
		private _router: Router,
		private _route: ActivatedRoute,
		){
	}

	ngOnInit(){

		// @Input('equis')   this.equis ;
		// @Input('cargocotosol2')  this.cargocotosol2 ;
		// @Input('cargojefesol2')  this.cargojefesol2 ;
		// @Input('transportessol2')  this.transportessol2 ;
		// @Input('solifecfun2')  this.solifecfun2 ;
		// @Input('cardep2')  this.cardep2 ;
		// @Input('bancosol2')   this.bancosol2 ;

		// console.log("this.equis:"+this.equis);
		// console.log("this.solifecfun2:"+this.solifecfun2);

		// this.equis = {
		// 	'viaticos':'',
		// 	'movilizaciones':'',
		// 	'subsistencias':'',
		// 	'alimentacion':''
		// };
		// this.solifecfun2 = {
		// 	'solSecuencial': [],
		// 	'solIdsolicitud': [],
		// 	'solFecharealizacion':'',
		// 	'solNumeroactualizacion':'',
		// 	'perIdentificacion': '',
		// 	'perCorreoelectronico':'',
		// 	'perCreado':'',
		// 	'perNombrecompleto':''
		// };

		// this.cargocotosol2 = {
		// 	'carperId' : [],
		// 	'carperDesde' : [],
		// 	'carperHasta' : [],
		// 	'carperTipo' : [],
		// 	'carperEstado' : [],
		// 	'carNombre' : [],
		// 	'depNombre' :[],
		// 	'depSiglas' : [],
		// 	'depEstado' : [],
		// 	'perCorreoelectronico' : [],
		// 	'perNombrecompleto' : []
		// };
		// this.cargojefesol2 = {
		// 	'carperId' : [],
		// 	'carperDesde' : [],
		// 	'carperHasta' : [],
		// 	'carperTipo' : [],
		// 	'carperEstado' : [],
		// 	'carNombre' : [],
		// 	'depNombre' :[],
		// 	'depSiglas' : [],
		// 	'depEstado' : [],
		// 	'perCorreoelectronico' : [],
		// 	'perNombrecompleto' : []
		// };
		// this.transportessol2 = {
		// 	'trasolId':[],
		// 	'trasolRutainicio':[],
		// 	'trasolRutafin':[],
		// 	'trasolFechasalida':[],
		// 	'trasolHorasalida':[],
		// 	'trasolFechallegada':[],
		// 	'trasolHorallegada':[],
		// 	'tiptraNombre':[],
		// 	'tiptraTipo':[]
		// };

		// this.solifecfun2 = {
		// 	'solSecuencial':[],
		// 	'solIdsolicitud':[],
		// 	'solFecharealizacion':[],
		// 	'solNumeroactualizacion':[],
		// 	'perIdentificacion': [],
		// 	'perCorreoelectronico':[],
		// 	'perCreado': [],
		// 	'perNombrecompleto':[]
		// };

		// this.cardep2 = {
		// 	'carId':[],
		// 	'carNombre':[],
		// 	'carJefe':[],
		// 	'depNombre':[],
		// 	'depSiglas':[],
		// 	'depPadre':[],
		// 	'depEstado':[],
		// 	'rolNombre':[],
		// 	'rolEstado':[]
		// };

		// this.bancosol2 = {
		// 	'banperId':[],
		// 	'banperTipocuenta':[],
		// 	'banperNumerocuenta':[],
		// 	'banperEstado':[],
		// 	'banNombre':[]
		// };

		}

		OnRegresar(){
			this._router.navigate(['/solicitud']);
			// window.location.href='/solicitud';
		}
	}