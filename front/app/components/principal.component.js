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
// import {LoginComponent} from '../components/login.component';
var login_service_1 = require("../services/login.service");
var solicitud_service_1 = require("../services/solicitud.service");
var PrincipalComponent = (function () {
    function PrincipalComponent(_loginService, _solicitudService, _router, _route) {
        this._loginService = _loginService;
        this._solicitudService = _solicitudService;
        this._router = _router;
        this._route = _route;
        this.titulo = "Componente Principal";
    }
    PrincipalComponent.prototype.ngOnInit = function () {
        // this.menuUsuario();
        this.identity = this._loginService.getIdentity();
        this.token = this._loginService.getToken();
        this.funcionario = {
            'fun_id': this.identity.sub
        };
        this.datoSolIteracion1 = {
            'solId': '',
            'solIdsolicitud': '',
            'solFecharealizacion': '',
            'solEstado': '',
            'solCiudades': '',
            'perNombrecompleto': ''
        };
        this.OnVerDetalleSol();
    };
    PrincipalComponent.prototype.OnVerDetalleSol = function () {
        var _this = this;
        this._solicitudService.reporteSolicitud(this.token, this.funcionario).subscribe(function (response) {
            var info = response;
            _this.info = info;
            if (_this.info.length <= 0) {
                _this.NoMostrar = "No existen solicitudes realizadas";
                return _this.NoMostrar;
            }
            else {
                _this.datoSol = "";
                // this.ciu = [];
                // this.ciu1 = [];
                var estanterior = 0;
                var length1 = _this.info.length;
                var itemsiguiente;
                var anterior;
                var tamanodatos1;
                for (var j = 0; j < length1; j++) {
                    var length = _this.info[j].length;
                    for (var i = 0; i < length; i++) {
                        if (_this.info[j][i].estsol.sol.solEstado === "A") {
                            _this.datoSolIteracion1 = {
                                'solId': _this.info[j][i].estsol.sol.solId,
                                'solIdsolicitud': _this.info[j][i].estsol.sol.solIdsolicitud,
                                'solFecharealizacion': _this.info[j][i].estsol.sol.solFecharealizacion,
                                'solEstado': 'APROBADO',
                                'solCiudades': _this.info[j][i].ciu.ciuNombre,
                                'perNombrecompleto': _this.info[j][i].estsol.sol.per.perNombrecompleto
                            };
                        }
                        else {
                            _this.datoSolIteracion1 = {
                                'solId': _this.info[j][i].estsol.sol.solId,
                                'solIdsolicitud': _this.info[j][i].estsol.sol.solIdsolicitud,
                                'solFecharealizacion': _this.info[j][i].estsol.sol.solFecharealizacion,
                                'solEstado': 'PENDIENTE',
                                'solCiudades': _this.info[j][i].ciu.ciuNombre,
                                'perNombrecompleto': _this.info[j][i].estsol.sol.per.perNombrecompleto
                            };
                        }
                        _this.datoSolIteracion = JSON.stringify(_this.datoSolIteracion1);
                        if (_this.datoSol == "") {
                            _this.datoSol = _this.datoSolIteracion;
                        }
                        else {
                            _this.datoSol = _this.datoSol + "," + _this.datoSolIteracion;
                        }
                    }
                    ;
                }
                ;
                _this.datoSolMostrar1 = JSON.parse("[" + _this.datoSol + "]");
                var tamanodatos = _this.datoSolMostrar1.length;
                _this.datociudadtodos = "";
                for (var k = 0; k < tamanodatos; k++) {
                    var datociudad1 = "";
                    itemsiguiente = k + 1;
                    anterior = k - 1;
                    _this.ciu1 = "";
                    tamanodatos1 = tamanodatos;
                    if (itemsiguiente < tamanodatos) {
                        if (_this.datoSolMostrar1[k].solIdsolicitud === _this.datoSolMostrar1[itemsiguiente].solIdsolicitud) {
                            for (var l = itemsiguiente; l < tamanodatos1; l++) {
                                _this.ciuIteracion = _this.datoSolMostrar1[k].solCiudades;
                                _this.ciuIteracionl = _this.datoSolMostrar1[l].solCiudades;
                                if (_this.datoSolMostrar1[k].solIdsolicitud === _this.datoSolMostrar1[l].solIdsolicitud) {
                                    if (_this.ciu1 == "") {
                                        _this.ciu1 = _this.ciuIteracion + "," + _this.ciuIteracionl;
                                    }
                                    else {
                                        _this.ciu1 = _this.ciu1 + "," + _this.ciuIteracionl;
                                    }
                                }
                                else {
                                    l = tamanodatos1;
                                }
                            }
                            ;
                            _this.datosciudad = {
                                'solId': _this.datoSolMostrar1[k].solId,
                                'solIdsolicitud': _this.datoSolMostrar1[k].solIdsolicitud,
                                'solFecharealizacion': _this.datoSolMostrar1[k].solFecharealizacion,
                                'solEstado': _this.datoSolMostrar1[k].solEstado,
                                'solCiudades': _this.ciu1,
                                'perNombrecompleto': _this.datoSolMostrar1[k].perNombrecompleto
                            };
                            datociudad1 = JSON.stringify(_this.datosciudad);
                            if (_this.datociudadtodos == "") {
                                _this.datociudadtodos = datociudad1;
                            }
                            else {
                                _this.datociudadtodos = _this.datociudadtodos + "," + datociudad1;
                            }
                        }
                        else {
                            if (anterior > -1) {
                                if (_this.datoSolMostrar1[k].solIdsolicitud !== _this.datoSolMostrar1[itemsiguiente].solIdsolicitud) {
                                    if (_this.datoSolMostrar1[k].solIdsolicitud !== _this.datoSolMostrar1[anterior].solIdsolicitud) {
                                        _this.datosciudad = {
                                            'solId': _this.datoSolMostrar1[k].solId,
                                            'solIdsolicitud': _this.datoSolMostrar1[k].solIdsolicitud,
                                            'solFecharealizacion': _this.datoSolMostrar1[k].solFecharealizacion,
                                            'solEstado': _this.datoSolMostrar1[k].solEstado,
                                            'solCiudades': _this.datoSolMostrar1[k].solCiudades,
                                            'perNombrecompleto': _this.datoSolMostrar1[k].perNombrecompleto
                                        };
                                        datociudad1 = JSON.stringify(_this.datosciudad);
                                        if (_this.datociudadtodos == "") {
                                            _this.datociudadtodos = datociudad1;
                                        }
                                        else {
                                            _this.datociudadtodos = _this.datociudadtodos + "," + datociudad1;
                                        }
                                    }
                                }
                            }
                            else {
                                _this.datosciudad = {
                                    'solId': _this.datoSolMostrar1[k].solId,
                                    'solIdsolicitud': _this.datoSolMostrar1[k].solIdsolicitud,
                                    'solFecharealizacion': _this.datoSolMostrar1[k].solFecharealizacion,
                                    'solEstado': _this.datoSolMostrar1[k].solEstado,
                                    'solCiudades': _this.datoSolMostrar1[k].solCiudades,
                                    'perNombrecompleto': _this.datoSolMostrar1[k].perNombrecompleto
                                };
                                datociudad1 = JSON.stringify(_this.datosciudad);
                                if (_this.datociudadtodos == "") {
                                    _this.datociudadtodos = datociudad1;
                                }
                                else {
                                    _this.datociudadtodos = _this.datociudadtodos + "," + datociudad1;
                                }
                            }
                        }
                    }
                }
                ;
                _this.datoSolMostrar = JSON.parse("[" + _this.datociudadtodos + "]");
                _this.datociudadtodos1 = "";
                _this.datociudadtodos2 = "";
                var datociudad3;
                var datociudad2;
                var todostamano = _this.datoSolMostrar.length;
                for (var a = 0; a < todostamano; a++) {
                    datociudad3 = "";
                    if (_this.datoSolMostrar[a].solEstado === "APROBADO") {
                        _this.datosciudad1 = {
                            'solId': _this.datoSolMostrar[a].solId,
                            'solIdsolicitud': _this.datoSolMostrar[a].solIdsolicitud,
                            'solFecharealizacion': _this.datoSolMostrar[a].solFecharealizacion,
                            'solEstado': _this.datoSolMostrar[a].solEstado,
                            'solCiudades': _this.datoSolMostrar[a].solCiudades,
                            'perNombrecompleto': _this.datoSolMostrar[a].perNombrecompleto
                        };
                        datociudad3 = JSON.stringify(_this.datosciudad1);
                        if (_this.datociudadtodos1 == "") {
                            _this.datociudadtodos1 = datociudad3;
                        }
                        else {
                            _this.datociudadtodos1 = _this.datociudadtodos1 + "," + datociudad3;
                        }
                    }
                    else {
                        _this.datosciudad2 = {
                            'solId': _this.datoSolMostrar[a].solId,
                            'solIdsolicitud': _this.datoSolMostrar[a].solIdsolicitud,
                            'solFecharealizacion': _this.datoSolMostrar[a].solFecharealizacion,
                            'solEstado': _this.datoSolMostrar[a].solEstado,
                            'solCiudades': _this.datoSolMostrar[a].solCiudades,
                            'perNombrecompleto': _this.datoSolMostrar[a].perNombrecompleto
                        };
                        datociudad2 = JSON.stringify(_this.datosciudad2);
                        if (_this.datociudadtodos2 == "") {
                            _this.datociudadtodos2 = datociudad2;
                        }
                        else {
                            _this.datociudadtodos2 = _this.datociudadtodos2 + "," + datociudad2;
                        }
                    }
                }
                ;
                _this.datoSolMostrara = JSON.parse("[" + _this.datociudadtodos1 + "]");
                _this.datoSolMostrarp = JSON.parse("[" + _this.datociudadtodos2 + "]");
                // console.log("this.datoSolMostrarp:"+JSON.stringify(this.datoSolMostrarp));
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la peticion de solicitudes");
            }
        });
    };
    return PrincipalComponent;
}());
PrincipalComponent = __decorate([
    core_1.Component({
        selector: "principal",
        templateUrl: "app/view/principal.html",
        providers: [login_service_1.LoginService, solicitud_service_1.SolicitudService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        solicitud_service_1.SolicitudService,
        router_1.Router,
        router_1.ActivatedRoute])
], PrincipalComponent);
exports.PrincipalComponent = PrincipalComponent;
//# sourceMappingURL=principal.component.js.map