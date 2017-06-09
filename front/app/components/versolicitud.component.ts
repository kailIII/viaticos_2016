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

	public titulo = "Ver Solicitud";
	public equis;
	public solifecfun2;
	public cargocotosol2;
	public cargojefesol2;
	public transportessol2;
	public cardep2;
	public bancosol2;
	public detalleSolicitudRealizadas;
	public token;
	public NoMostrar;
	public info;
	public info1;
	public transportessol;
	public transportessol1;
	public personasssol;
	public personasssol1;
	public ciudadessol;
	public ciudadessol1;
	public estadosol;
	public estadosol1;
	public estsolActividades;
	public cardep;
	public cardep1;
	public errorMessage;
	public detalle;

	// @Input() a: Array<any>;
	public solicitudInfolocal: Array<any>;
	
	constructor(
		private _TransporteService: TransporteService,
		private _SolicitudService: SolicitudService,
		private _loginService: LoginService,
		private _router: Router,
		private _route: ActivatedRoute,
		){
	}

	ngOnInit(){

		// this.solicitudInfolocal = this.a;
		// console.log("solicitudInfolocal: "+ JSON.stringify(this.solicitudInfolocal));

		// @Input('equis')   this.equis ;
		// @Input('cargocotosol2')  this.cargocotosol2 ;
		// @Input('cargojefesol2')  this.cargojefesol2 ;
		// @Input('transportessol2')  this.transportessol2 ;
		// @Input('solifecfun2')  this.solifecfun2 ;
		// @Input('cardep2')  this.cardep2 ;
		// @Input('bancosol2')   this.bancosol2 ;

		// // console.log("this.equis:"+this.equis);
		// // console.log("this.solifecfun2:"+this.solifecfun2);

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


// 	OnMostrarDetalle(Det){
// 		this.detalleSolicitudRealizadas = {
// 			'DetsolIdsolicitud': Det
// 			// 'DetsolIdsolicitud': DetalleSolMostrar.solIdsolicitud

// 		};
// 		this._SolicitudService.detallesolrealizadas(this.token,this.detalleSolicitudRealizadas).subscribe(
// 			response => {
// 				let info = response;
// 				this.info1 = JSON.stringify(info);
// 				this.info = JSON.parse("["+this.info1+"]"); 
// 				if(this.info.length <=0){
// 					this.NoMostrar = "No existen solicitudes realizadas";
// 					return this.NoMostrar;
// 				}else{ 	
// 					this.cargocotosol2 = {
// 						'carperId' : this.info[0].cargocotosol.carperId,
// 						'carperDesde' : this.info[0].cargocotosol.carperDesde,
// 						'carperHasta' : this.info[0].cargocotosol.carperHasta,
// 						'carperTipo' : this.info[0].cargocotosol.carperTipo,
// 						'carperEstado' : this.info[0].cargocotosol.carperEstado,
// 						'carNombre' : this.info[0].cargocotosol.car.carNombre,
// 						'depNombre' :this.info[0].cargocotosol.car.dep.depNombre,
// 						'depSiglas' : this.info[0].cargocotosol.car.dep.depSiglas,
// 						'depEstado' : this.info[0].cargocotosol.car.dep.depEstado,
// 						'rolNombre' : this.info[0].cargocotosol.car.rol.rolNombre,
// 						'rolEstado' : this.info[0].cargocotosol.car.rol.rolEstado,
// 						'perCorreoelectronico' : this.info[0].cargocotosol.per.perCorreoelectronico,
// 						'perNombrecompleto' : this.info[0].cargocotosol.per.perNombrecompleto
// 					};

// 					this.cargojefesol2 = {
// 						'carperId' : this.info[0].cargojefesol.carperId,
// 						'carperDesde' : this.info[0].cargojefesol.carperDesde,
// 						'carperHasta' : this.info[0].cargojefesol.carperHasta,
// 						'carperTipo' : this.info[0].cargojefesol.carperTipo,
// 						'carperEstado' : this.info[0].cargojefesol.carperEstado,
// 						'carNombre' : this.info[0].cargojefesol.car.carNombre,
// 						'depNombre' :this.info[0].cargojefesol.car.dep.depNombre,
// 						'depSiglas' : this.info[0].cargojefesol.car.dep.depSiglas,
// 						'depEstado' : this.info[0].cargojefesol.car.dep.depEstado,
// 						'rolNombre' : this.info[0].cargojefesol.car.rol.rolNombre,
// 						'rolEstado' : this.info[0].cargojefesol.car.rol.rolEstado,
// 						'perCorreoelectronico' : this.info[0].cargojefesol.per.perCorreoelectronico,
// 						'perNombrecompleto' : this.info[0].cargojefesol.per.perNombrecompleto
// 					};

// 					if(this.info[0].transportessol.length >0){
// 						this.transportessol = this.info[0].transportessol;

// 					}else if(this.info[0].transportessol.length == 0){
// 						this.transportessol = this.info[0].transportessol;

// 					}else{
// 						this.transportessol1 = JSON.stringify(this.info[0].transportessol);
// 						this.transportessol = JSON.parse("["+this.transportessol1+"]");
// 					}
// 					if(this.info[0].bancosol.banperTipocuenta == "A"){
// 						this.bancosol2 = {
// 							'banperId': this.info[0].bancosol.banperId,
// 							'banperTipocuenta': 'AHORROS',
// 							'banperNumerocuenta': this.info[0].bancosol.banperNumerocuenta,
// 							'banperEstado': this.info[0].bancosol.banperEstado,
// 							'banNombre': this.info[0].bancosol.ban.banNombre
// 						};
// 					}else{
// 						this.bancosol2 = {
// 							'banperId': this.info[0].bancosol.banperId,
// 							'banperTipocuenta': 'CORRIENTE',
// 							'banperNumerocuenta': this.info[0].bancosol.banperNumerocuenta,
// 							'banperEstado': this.info[0].bancosol.banperEstado,
// 							'banNombre': this.info[0].bancosol.ban.banNombre
// 						};
// 					}

// 					if(this.info[0].personasssol.length > 0){
// 						// console.log("personasssol.length no undefined");
// 						this.personasssol = this.info[0].personasssol;
// 						// console.log("this.personasssol[0]:"+JSON.stringify(this.personasssol[0]));

// 					}else if(this.info[0].personasssol.length == 0){
// 						// console.log("personasssol.length no undefined");
// 						this.personasssol = this.info[0].personasssol;
// 					}else{
// 						// console.log("personasssol.length == undefined");
// 						this.personasssol1 = JSON.stringify(this.info[0].personasssol);
// 						this.personasssol = JSON.parse("["+this.personasssol1+"]");
// 					}
// 					console.log("this.personasssol:"+JSON.stringify(this.personasssol));

// 					if(this.info[0].ciudadessol.length>0){
// 						// console.log("ciudadessol.length no undefined");
// 						this.ciudadessol = this.info[0].ciudadessol;
// 						// console.log("this.ciudadessol[0]:"+JSON.stringify(this.ciudadessol[0]));

// 					}else if(this.info[0].ciudadessol.length == 0){
// 						// console.log("ciudadessol.length no undefined");
// 						this.ciudadessol = this.info[0].ciudadessol;

// 					}else{
// 						// console.log("ciudadessol.length == undefined");
// 						this.ciudadessol1 = JSON.stringify(this.info[0].ciudadessol);
// 						this.ciudadessol = JSON.parse("["+this.ciudadessol1+"]");
// 					}

// 					if(this.info[0].estadosol.length>0){
// 						this.estadosol = this.info[0].estadosol;
// 						this.estsolActividades = this.estadosol[0].estsolActividades;
// 						if(JSON.stringify(this.estadosol[0].estsolFechasalida) === JSON.stringify(this.estadosol[0].estsolFechallegada) ){
// 							this.equis = {
// 								'viaticos': '',
// 								'movilizaciones':'X',
// 								'subsistencias':'X',
// 								'alimentacion':'X'
// 							};
// 						}else{
// 							this.equis = {
// 								'viaticos':'X',
// 								'movilizaciones':'X',
// 								'subsistencias':'X',
// 								'alimentacion':'X'
// 							};
// 						}
// 						// console.log("this.estadosol[0]:"+JSON.stringify(this.estadosol[0]));	
// 					}else if(this.info[0].estadosol.length == 0){
// 						// console.log("estadosol.length no undefined");
// 						this.estadosol = this.info[0].estadosol;
// 						// this.estsolActividades = (JSON.stringify(this.info[0].estadosol.estsolActividades).replace('"<p','<p')).replace('ul>"','ul>');
// 						// console.log("this.estadosol:"+JSON.stringify(this.estadosol));
// 					}else{
// 						// console.log("estadosol.length == undefined");
// 						this.estadosol1 = JSON.stringify(this.info[0].estadosol);
// 						this.estadosol = JSON.parse("["+this.estadosol1+"]");
// 						// this.estsolActividades = (JSON.stringify(this.info[0].estadosol.estsolActividades).replace('"<p','<p')).replace('ul>"','ul>');
// 						// console.log("this.estadosol:"+JSON.stringify(this.estadosol));
// 					}

// 					if(this.info[0].cardep.length >0){
// 						// console.log("cardep.length no undefined");
// 						this.cardep = this.info[0].cardep;

// 					}else if(this.info[0].cardep.length == 0){
// 						// console.log("cardep.length no undefined");
// 						this.cardep = this.info[0].cardep;

// 					}else{
// 						// console.log("cardep.length == undefined");
// 						this.cardep1 = JSON.stringify(this.info[0].cardep);
// 						this.cardep = JSON.parse("["+this.cardep1+"]");

// 						this.cardep2 = {
// 							'carId':this.info[0].cardep.carId,
// 							'carNombre':this.info[0].cardep.carNombre,
// 							'carJefe':this.info[0].cardep.carJefe,
// 							'depNombre':this.info[0].cardep.dep.depNombre,
// 							'depSiglas':this.info[0].cardep.dep.depSiglas,
// 							'depPadre':this.info[0].cardep.dep.depPadre,
// 							'depEstado':this.info[0].cardep.dep.depEstado,
// 							'rolNombre':this.info[0].cardep.rol.rolNombre,
// 							'rolEstado':this.info[0].cardep.rol.rolEstado
// 						};
// 						// console.log("this.cardep1:"+this.cardep1);
// 					}

// 					if(this.info[0].solifecfun.length>0){
// 						// console.log("solifecfun.length no undefined");

// 					}else if(this.info[0].solifecfun.length == 0){
// 						// console.log("solifecfun.length no undefined");

// 					}else{
// 						this.solifecfun2 = {
// 							'solSecuencial':this.info[0].solifecfun.solSecuencial,
// 							'solIdsolicitud':this.info[0].solifecfun.solIdsolicitud,
// 							'solFecharealizacion':this.info[0].solifecfun.solFecharealizacion,
// 							'solNumeroactualizacion':this.info[0].solifecfun.solNumeroactualizacion,
// 							'perIdentificacion': this.info[0].solifecfun.per.perIdentificacion,
// 							'perCorreoelectronico':this.info[0].solifecfun.per.perIdentificacion,
// 							'perCreado': this.info[0].solifecfun.per.perCreado,
// 							'perNombrecompleto':this.info[0].solifecfun.per.perNombrecompleto
// 						};
// 					}
// 				}
// 			},error => {
// 				this.errorMessage = <any>error;

// 				if(this.errorMessage != null){
// 					console.log(this.errorMessage);
// 					alert("Error en la peticion de solicitudes");
// 				}
// 			});

// this.detalle = {
// 	'DetsolIdsolicitud': DetalleSolMostrar.solIdsolicitud
// };
// }

OnRegresar(){
	this._router.navigate(['/solicitud']);
	// window.location.href='/solicitud';
}
}