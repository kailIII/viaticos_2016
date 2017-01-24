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
var core_1 = require("@angular/core");
// import { Router, ActivatedRoute, Params } from '@angular/router';
var login_service_1 = require("../services/login.service");
var solicitud_service_1 = require("../services/solicitud.service");
// import * as $ from 'jquery';
var SolicitudComponent = (function () {
    // private activeItem: MenuItem;
    // public solicitudpropia;
    // private realizadas: any[];
    // @ViewChild('input') input: ElementRef;
    function SolicitudComponent(_loginService, _solicitudService) {
        this._loginService = _loginService;
        this._solicitudService = _solicitudService;
        this.titulo = "Solicitud";
    }
    SolicitudComponent.prototype.ngOnInit = function () {
        this.detalleSol = false;
        this.identity = this._loginService.getIdentity();
        this.token = this._loginService.getToken();
        this.funcionario = {
            'fun_id': this.identity.sub
        };
        this.OnVerDetalleSol();
        // this.OnTabSol();
        // this.OnPaginacion("muestra_datos");
    };
    // OnPaginacion(id){
    // 	$('#'+id+"'").DataTable( { //CONVERTIMOS NUESTRO LISTADO DE LA FORMA DEL JQUERY.DATATABLES- PASAMOS EL ID DE LA TABLA
    //        "sPaginationType": "full_numbers" //DAMOS FORMATO A LA PAGINACION(NUMEROS)
    //    } );
    // }
    SolicitudComponent.prototype.OnTabSol = function () {
        this.items = [
            { label: 'Solicitudes realizadas' },
            { label: 'Solicitudes por firmar' },
            { label: 'Historial de solicitudes' },
        ];
    };
    // OnDetalleSolicitudRealizados(){
    // 	$(document).ready(function(){
    //     $('#muestra_datos').dataTable();
    // });
    // }
    //esto es con subscribe
    SolicitudComponent.prototype.OnVerDetalleSol = function () {
        var _this = this;
        this._solicitudService.reporteSolicitud(this.token, this.funcionario).subscribe(function (response) {
            var info = response;
            _this.info = info;
            if (_this.info.length <= 0) {
                _this.NoMostrar = "No existen solicitudes realizadas";
                return _this.NoMostrar;
            }
            else {
                if (!_this.info.status) {
                    _this.datoSol = "";
                    var length = _this.info.length;
                    for (var i = 0; i < length; i++) {
                        _this.datoSolIteracion = JSON.stringify(_this.info[i]);
                        if (_this.datoSol == "") {
                            _this.datoSol = _this.datoSolIteracion;
                        }
                        else {
                            _this.datoSol = _this.datoSol + "," + _this.datoSolIteracion;
                        }
                    }
                    ;
                    _this.datoSolMostrar = JSON.parse("[" + _this.datoSol + "]");
                    // console.log("datoSolMostrar:"+this.datoSol);
                    // console.log("datoSolMostrar:"+new Date(this.datoSolMostrar[0].solFecharealizacion).toLocaleDateString());
                    // this.datoSolMostrar = this.datoSol;
                    return _this.datoSolMostrar;
                }
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la peticion de solicitudes");
            }
        });
    };
    SolicitudComponent.prototype.OnMostrarDetalle = function () {
        this.detalleSol = true;
    };
    SolicitudComponent.prototype.OnbotonAtrasSolicitud = function () {
        this.detalleSol = false;
    };
    return SolicitudComponent;
}());
SolicitudComponent = __decorate([
    core_1.Component({
        selector: 'solicitud',
        templateUrl: 'app/view/solicitud.html',
        providers: [login_service_1.LoginService, solicitud_service_1.SolicitudService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        solicitud_service_1.SolicitudService])
], SolicitudComponent);
exports.SolicitudComponent = SolicitudComponent;
//# sourceMappingURL=solicitud.component.js.map