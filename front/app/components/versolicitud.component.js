"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var transporte_service_1 = require("../services/transporte.service");
var solicitud_service_1 = require("../services/solicitud.service");
var login_service_1 = require("../services/login.service");
var VersolicitudComponent = (function () {
    function VersolicitudComponent(_TransporteService, _SolicitudService, _loginService, _router, _route) {
        this._TransporteService = _TransporteService;
        this._SolicitudService = _SolicitudService;
        this._loginService = _loginService;
        this._router = _router;
        this._route = _route;
        this.titulo = "Nueva Solicitud";
    }
    VersolicitudComponent.prototype.ngOnInit = function () {
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
    };
    VersolicitudComponent.prototype.OnRegresar = function () {
        this._router.navigate(['/solicitud']);
        // window.location.href='/solicitud';
    };
    return VersolicitudComponent;
}());
VersolicitudComponent = __decorate([
    core_1.Component({
        selector: 'versolicitud',
        templateUrl: 'app/view/versolicitud.html',
        providers: [transporte_service_1.TransporteService, solicitud_service_1.SolicitudService, login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [transporte_service_1.TransporteService,
        solicitud_service_1.SolicitudService,
        login_service_1.LoginService,
        router_1.Router,
        router_1.ActivatedRoute])
], VersolicitudComponent);
exports.VersolicitudComponent = VersolicitudComponent;
//# sourceMappingURL=versolicitud.component.js.map