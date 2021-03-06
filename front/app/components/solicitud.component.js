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
// import { Router, ActivatedRoute, Params } from '@angular/router';
var router_1 = require("@angular/router");
var login_service_1 = require("../services/login.service");
var solicitud_service_1 = require("../services/solicitud.service");
var SolicitudComponent = (function () {
    function SolicitudComponent(_loginService, _solicitudService, _router, _route) {
        this._loginService = _loginService;
        this._solicitudService = _solicitudService;
        this._router = _router;
        this._route = _route;
        this.titulo = "Solicitud";
    }
    ;
    SolicitudComponent.prototype.ngOnInit = function () {
        this.detalleSol = false;
        this.identity = this._loginService.getIdentity();
        this.token = this._loginService.getToken();
        this.je = this._loginService.getJe();
        this.funcionario = {
            'fun_id': this.identity.sub
        };
        this.OnVerDetalleSol();
        this.OnporFirmar();
        this.detalleSolicitudRealizadas = {
            'DetsolIdsolicitud': ''
        };
        this.equis = {
            'viaticos': '',
            'movilizaciones': '',
            'subsistencias': '',
            'alimentacion': ''
        };
        this.datoSolIteracion1 = {
            'solId': '',
            'solIdsolicitud': '',
            'solFecharealizacion': '',
            'solEstado': '',
            'solCiudades': '',
            'perNombrecompleto': ''
        };
        this.trasolId = '';
        this.trasolRutainicio = '';
        this.trasolRutafin = '';
        this.trasolFechasalida = '';
        this.trasolHorasalida = '';
        this.trasolFechallegada = '';
        this.trasolHorallegada = '';
        this.tiptraNombre = '';
        this.tiptraTipo = '';
        this.solifecfun2 = {
            'solSecuencial': [],
            'solIdsolicitud': [],
            'solFecharealizacion': '',
            'solNumeroactualizacion': '',
            'perIdentificacion': '',
            'perCorreoelectronico': '',
            'perCreado': '',
            'perNombrecompleto': ''
        };
        this.cargocotosol2 = {
            'carperId': [],
            'carperDesde': [],
            'carperHasta': [],
            'carperTipo': [],
            'carperEstado': [],
            'carNombre': [],
            'depNombre': [],
            'depSiglas': [],
            'depEstado': [],
            'perCorreoelectronico': [],
            'perNombrecompleto': []
        };
        this.cargojefesol2 = {
            'carperId': [],
            'carperDesde': [],
            'carperHasta': [],
            'carperTipo': [],
            'carperEstado': [],
            'carNombre': [],
            'depNombre': [],
            'depSiglas': [],
            'depEstado': [],
            'perCorreoelectronico': [],
            'perNombrecompleto': []
        };
        this.transportessol2 = {
            'trasolId': [],
            'trasolRutainicio': [],
            'trasolRutafin': [],
            'trasolFechasalida': [],
            'trasolHorasalida': [],
            'trasolFechallegada': [],
            'trasolHorallegada': [],
            'tiptraNombre': [],
            'tiptraTipo': []
        };
        this.solifecfun2 = {
            'solSecuencial': [],
            'solIdsolicitud': [],
            'solFecharealizacion': [],
            'solNumeroactualizacion': [],
            'perIdentificacion': [],
            'perCorreoelectronico': [],
            'perCreado': [],
            'perNombrecompleto': []
        };
        this.cardep2 = {
            'carId': [],
            'carNombre': [],
            'carJefe': [],
            'depNombre': [],
            'depSiglas': [],
            'depPadre': [],
            'depEstado': [],
            'rolNombre': [],
            'rolEstado': []
        };
        this.bancosol2 = {
            'banperId': [],
            'banperTipocuenta': [],
            'banperNumerocuenta': [],
            'banperEstado': [],
            'banNombre': []
        };
        this.datosPdf = {
            'Idsolicitud': ''
        };
    };
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
                _this.datoSol = "";
                _this.ciu1 = "";
                var estanterior = 0;
                var length1 = _this.info.length;
                var itemsiguiente;
                var itemsiguiente1;
                var anterior;
                var anterior1;
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
                        else if (_this.info[j][i].estsol.sol.solEstado === "C") {
                            _this.datoSolIteracion1 = {
                                'solId': _this.info[j][i].estsol.sol.solId,
                                'solIdsolicitud': _this.info[j][i].estsol.sol.solIdsolicitud,
                                'solFecharealizacion': _this.info[j][i].estsol.sol.solFecharealizacion,
                                'solEstado': 'CANCELADO',
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
                for (var l = 0; l < tamanodatos; l++) {
                    var datociudad1 = "";
                    itemsiguiente1 = l + 1;
                    anterior1 = l - 1;
                    _this.ciuIteracion = _this.datoSolMostrar1[l].solCiudades;
                    if (_this.ciu1 == "") {
                        _this.ciu1 = _this.ciuIteracion;
                    }
                    else {
                        _this.ciu1 = _this.ciu1 + "," + _this.ciuIteracion;
                    }
                    if (l > 0) {
                        if (_this.datoSolMostrar1[l].solId !== _this.datoSolMostrar1[anterior1].solId && itemsiguiente1 === tamanodatos) {
                            _this.datosciudad = {
                                'solId': _this.datoSolMostrar1[l].solId,
                                'solIdsolicitud': _this.datoSolMostrar1[l].solIdsolicitud,
                                'solFecharealizacion': _this.datoSolMostrar1[l].solFecharealizacion,
                                'solEstado': _this.datoSolMostrar1[l].solEstado,
                                'solCiudades': _this.ciu1,
                                'perNombrecompleto': _this.datoSolMostrar1[l].perNombrecompleto
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
                            for (var k = itemsiguiente1; k < tamanodatos; k++) {
                                if (_this.datoSolMostrar1[l].solId === _this.datoSolMostrar1[k].solId) {
                                    _this.ciuIteracion = _this.datoSolMostrar1[k].solCiudades;
                                    if (_this.ciu1 == "") {
                                        _this.ciu1 = _this.ciuIteracion;
                                    }
                                    else {
                                        _this.ciu1 = _this.ciu1 + "," + _this.ciuIteracion;
                                    }
                                    l = k;
                                    if (k === tamanodatos - 1) {
                                        _this.datosciudad = {
                                            'solId': _this.datoSolMostrar1[l].solId,
                                            'solIdsolicitud': _this.datoSolMostrar1[l].solIdsolicitud,
                                            'solFecharealizacion': _this.datoSolMostrar1[l].solFecharealizacion,
                                            'solEstado': _this.datoSolMostrar1[l].solEstado,
                                            'solCiudades': _this.ciu1,
                                            'perNombrecompleto': _this.datoSolMostrar1[l].perNombrecompleto
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
                                else {
                                    _this.datosciudad = {
                                        'solId': _this.datoSolMostrar1[l].solId,
                                        'solIdsolicitud': _this.datoSolMostrar1[l].solIdsolicitud,
                                        'solFecharealizacion': _this.datoSolMostrar1[l].solFecharealizacion,
                                        'solEstado': _this.datoSolMostrar1[l].solEstado,
                                        'solCiudades': _this.ciu1,
                                        'perNombrecompleto': _this.datoSolMostrar1[l].perNombrecompleto
                                    };
                                    datociudad1 = JSON.stringify(_this.datosciudad);
                                    if (_this.datociudadtodos == "") {
                                        _this.datociudadtodos = datociudad1;
                                    }
                                    else {
                                        _this.datociudadtodos = _this.datociudadtodos + "," + datociudad1;
                                    }
                                    _this.ciu1 = "";
                                    k = tamanodatos;
                                }
                            }
                            ;
                        }
                    }
                    else {
                        _this.datosciudad = {
                            'solId': _this.datoSolMostrar1[l].solId,
                            'solIdsolicitud': _this.datoSolMostrar1[l].solIdsolicitud,
                            'solFecharealizacion': _this.datoSolMostrar1[l].solFecharealizacion,
                            'solEstado': _this.datoSolMostrar1[l].solEstado,
                            'solCiudades': _this.ciu1,
                            'perNombrecompleto': _this.datoSolMostrar1[l].perNombrecompleto
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
                ;
                _this.datoSolMostrar = JSON.parse("[" + _this.datociudadtodos + "]");
                _this.datociudadtodos1 = "";
                _this.datociudadtodos2 = "";
                _this.datociudadtodos3 = "";
                var datociudad3;
                var datociudad2;
                var datociudad4;
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
                    else if (_this.datoSolMostrar[a].solEstado === "CANCELADO") {
                        _this.datosciudad1 = {
                            'solId': _this.datoSolMostrar[a].solId,
                            'solIdsolicitud': _this.datoSolMostrar[a].solIdsolicitud,
                            'solFecharealizacion': _this.datoSolMostrar[a].solFecharealizacion,
                            'solEstado': _this.datoSolMostrar[a].solEstado,
                            'solCiudades': _this.datoSolMostrar[a].solCiudades,
                            'perNombrecompleto': _this.datoSolMostrar[a].perNombrecompleto
                        };
                        datociudad4 = JSON.stringify(_this.datosciudad1);
                        if (_this.datociudadtodos3 == "") {
                            _this.datociudadtodos3 = datociudad4;
                        }
                        else {
                            _this.datociudadtodos3 = _this.datociudadtodos3 + "," + datociudad4;
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
                _this.datoSolMostrarc = JSON.parse("[" + _this.datociudadtodos3 + "]");
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la peticion de solicitudes");
            }
        });
    };
    SolicitudComponent.prototype.OnVerDetalleSol1 = function () {
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
                        else if (_this.info[j][i].estsol.sol.solEstado === "C") {
                            _this.datoSolIteracion1 = {
                                'solId': _this.info[j][i].estsol.sol.solId,
                                'solIdsolicitud': _this.info[j][i].estsol.sol.solIdsolicitud,
                                'solFecharealizacion': _this.info[j][i].estsol.sol.solFecharealizacion,
                                'solEstado': 'CANCELADO',
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
                                    k = l + 1;
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
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la peticion de solicitudes");
            }
        });
    };
    SolicitudComponent.prototype.Onequisviaticos = function () {
        this.equis = {
            'viaticos': '',
            'movilizaciones': '',
            'subsistencias': '',
            'alimentacion': ''
        };
    };
    SolicitudComponent.prototype.OnMostrarDetalleSol = function (valor) {
        var value = valor['solId'];
        this.solicitudInfo = value;
        this.equis_1 = this.equis;
        this._router.navigate(['/versolicitud', value]);
    };
    SolicitudComponent.prototype.OnListarFuncionariosComision = function () {
    };
    SolicitudComponent.prototype.OnbotonAtrasSolicitud = function () {
        this.detalleSol = false;
    };
    SolicitudComponent.prototype.OnporFirmar = function () {
        var _this = this;
        this._solicitudService.porfirmarSolicitud(this.token, this.funcionario).subscribe(function (response) {
            var info = response;
            _this.info11 = info;
            // console.log("this.info11.length:"+this.info11.length);
            if (_this.info11.length <= 0) {
                _this.NoMostrar1 = "No existen solicitudes realizadas";
                return _this.NoMostrar1;
            }
            else {
                _this.datoSol1 = "";
                // this.ciu11 = [];
                // this.ciu111 = [];
                var estanterior = 0;
                var length1 = _this.info11.length;
                var itemsiguiente;
                var anterior;
                var tamanodatos1;
                for (var j = 0; j < length1; j++) {
                    var length = _this.info11[j].length;
                    for (var i = 0; i < length; i++) {
                        if (_this.info11[j][i].estsol.sol.solEstado === "A") {
                            _this.datoSolIteracion11 = {
                                'solId': _this.info11[j][i].estsol.sol.solId,
                                'solIdsolicitud': _this.info11[j][i].estsol.sol.solIdsolicitud,
                                'solFecharealizacion': _this.info11[j][i].estsol.sol.solFecharealizacion,
                                'solEstado': 'APROBADO',
                                'solCiudades': _this.info11[j][i].ciu.ciuNombre,
                                'perNombrecompleto': _this.info11[j][i].estsol.sol.per.perNombrecompleto
                            };
                        }
                        else if (_this.info11[j][i].estsol.sol.solEstado === "C") {
                            _this.datoSolIteracion11 = {
                                'solId': _this.info11[j][i].estsol.sol.solId,
                                'solIdsolicitud': _this.info11[j][i].estsol.sol.solIdsolicitud,
                                'solFecharealizacion': _this.info11[j][i].estsol.sol.solFecharealizacion,
                                'solEstado': 'CANCELADO',
                                'solCiudades': _this.info11[j][i].ciu.ciuNombre,
                                'perNombrecompleto': _this.info11[j][i].estsol.sol.per.perNombrecompleto
                            };
                        }
                        else {
                            _this.datoSolIteracion11 = {
                                'solId': _this.info11[j][i].estsol.sol.solId,
                                'solIdsolicitud': _this.info11[j][i].estsol.sol.solIdsolicitud,
                                'solFecharealizacion': _this.info11[j][i].estsol.sol.solFecharealizacion,
                                'solEstado': 'PENDIENTE',
                                'solCiudades': _this.info11[j][i].ciu.ciuNombre,
                                'perNombrecompleto': _this.info11[j][i].estsol.sol.per.perNombrecompleto
                            };
                        }
                        _this.datoSolIteracion111 = JSON.stringify(_this.datoSolIteracion11);
                        if (_this.datoSol1 == "") {
                            _this.datoSol1 = _this.datoSolIteracion111;
                        }
                        else {
                            _this.datoSol1 = _this.datoSol1 + "," + _this.datoSolIteracion111;
                        }
                    }
                    ;
                }
                ;
                _this.datoSolMostrar12 = JSON.parse("[" + _this.datoSol1 + "]");
                var tamanodatos = _this.datoSolMostrar12.length;
                _this.datociudadtodos11 = "";
                for (var l = 0; l < tamanodatos; l++) {
                    var datociudad1 = "";
                    itemsiguiente = l + 1;
                    anterior = l - 1;
                    _this.ciuIteracion1 = _this.datoSolMostrar12[l].solCiudades;
                    if (_this.ciu11 == "") {
                        _this.ciu11 = _this.ciuIteracion1;
                    }
                    else {
                        _this.ciu11 = _this.ciu11 + "," + _this.ciuIteracion1;
                    }
                    // console.log(l+" this.datoSolMostrar1[l].solId:"+this.datoSolMostrar1[l].solId);
                    if (l > 0) {
                        if (_this.datoSolMostrar12[l].solId !== _this.datoSolMostrar12[anterior].solId && itemsiguiente === tamanodatos) {
                            _this.datosciudad = {
                                'solId': _this.datoSolMostrar12[l].solId,
                                'solIdsolicitud': _this.datoSolMostrar12[l].solIdsolicitud,
                                'solFecharealizacion': _this.datoSolMostrar12[l].solFecharealizacion,
                                'solEstado': _this.datoSolMostrar12[l].solEstado,
                                'solCiudades': _this.ciu11,
                                'perNombrecompleto': _this.datoSolMostrar12[l].perNombrecompleto
                            };
                            datociudad1 = JSON.stringify(_this.datosciudad);
                            if (_this.datociudadtodos11 == "") {
                                _this.datociudadtodos11 = datociudad1;
                            }
                            else {
                                _this.datociudadtodos11 = _this.datociudadtodos11 + "," + datociudad1;
                            }
                        }
                        else {
                            for (var k = itemsiguiente; k < tamanodatos; k++) {
                                if (_this.datoSolMostrar12[l].solId === _this.datoSolMostrar12[k].solId) {
                                    // console.log("igual al this.ciu1 de "+l+" :"+this.ciu1);
                                    _this.ciuIteracion1 = _this.datoSolMostrar12[k].solCiudades;
                                    if (_this.ciu11 == "") {
                                        _this.ciu11 = _this.ciuIteracion1;
                                    }
                                    else {
                                        _this.ciu11 = _this.ciu11 + "," + _this.ciuIteracion1;
                                    }
                                    l = k;
                                    // console.log("l:"+l);
                                    if (k === tamanodatos - 1) {
                                        _this.datosciudad = {
                                            'solId': _this.datoSolMostrar12[l].solId,
                                            'solIdsolicitud': _this.datoSolMostrar12[l].solIdsolicitud,
                                            'solFecharealizacion': _this.datoSolMostrar12[l].solFecharealizacion,
                                            'solEstado': _this.datoSolMostrar12[l].solEstado,
                                            'solCiudades': _this.ciu11,
                                            'perNombrecompleto': _this.datoSolMostrar12[l].perNombrecompleto
                                        };
                                        datociudad1 = JSON.stringify(_this.datosciudad);
                                        if (_this.datociudadtodos11 == "") {
                                            _this.datociudadtodos11 = datociudad1;
                                        }
                                        else {
                                            _this.datociudadtodos11 = _this.datociudadtodos11 + "," + datociudad1;
                                        }
                                    }
                                }
                                else {
                                    _this.datosciudad = {
                                        'solId': _this.datoSolMostrar12[l].solId,
                                        'solIdsolicitud': _this.datoSolMostrar12[l].solIdsolicitud,
                                        'solFecharealizacion': _this.datoSolMostrar12[l].solFecharealizacion,
                                        'solEstado': _this.datoSolMostrar12[l].solEstado,
                                        'solCiudades': _this.ciu11,
                                        'perNombrecompleto': _this.datoSolMostrar12[l].perNombrecompleto
                                    };
                                    datociudad1 = JSON.stringify(_this.datosciudad);
                                    if (_this.datociudadtodos11 == "") {
                                        _this.datociudadtodos11 = datociudad1;
                                    }
                                    else {
                                        _this.datociudadtodos11 = _this.datociudadtodos11 + "," + datociudad1;
                                    }
                                    // console.log("en el else de desiguales this.datociudadtodos:"+this.datociudadtodos);
                                    _this.ciu11 = "";
                                    k = tamanodatos;
                                }
                            }
                            ;
                        }
                    }
                }
                ;
                _this.datoSolMostrar3 = JSON.parse("[" + _this.datociudadtodos11 + "]");
                _this.datociudadtodos11 = "";
                _this.datociudadtodos21 = "";
                _this.datociudadtodos31 = "";
                var datociudad3;
                var datociudad2;
                var datociudad5;
                var todostamano = _this.datoSolMostrar3.length;
                for (var a = 0; a < todostamano; a++) {
                    datociudad3 = "";
                    if (_this.datoSolMostrar3[a].solEstado === "APROBADO") {
                        _this.datosciudad13 = {
                            'solId': _this.datoSolMostrar3[a].solId,
                            'solIdsolicitud': _this.datoSolMostrar3[a].solIdsolicitud,
                            'solFecharealizacion': _this.datoSolMostrar3[a].solFecharealizacion,
                            'solEstado': _this.datoSolMostrar3[a].solEstado,
                            'solCiudades': _this.datoSolMostrar3[a].solCiudades,
                            'perNombrecompleto': _this.datoSolMostrar3[a].perNombrecompleto
                        };
                        datociudad3 = JSON.stringify(_this.datosciudad13);
                        if (_this.datociudadtodos11 == "") {
                            _this.datociudadtodos11 = datociudad3;
                        }
                        else {
                            _this.datociudadtodos11 = _this.datociudadtodos11 + "," + datociudad3;
                        }
                    }
                    else if (_this.datoSolMostrar3[a].solEstado === "CANCELADO") {
                        _this.datosciudad13 = {
                            'solId': _this.datoSolMostrar3[a].solId,
                            'solIdsolicitud': _this.datoSolMostrar3[a].solIdsolicitud,
                            'solFecharealizacion': _this.datoSolMostrar3[a].solFecharealizacion,
                            'solEstado': _this.datoSolMostrar3[a].solEstado,
                            'solCiudades': _this.datoSolMostrar3[a].solCiudades,
                            'perNombrecompleto': _this.datoSolMostrar3[a].perNombrecompleto
                        };
                        datociudad5 = JSON.stringify(_this.datosciudad13);
                        if (_this.datociudadtodos31 == "") {
                            _this.datociudadtodos31 = datociudad5;
                        }
                        else {
                            _this.datociudadtodos31 = _this.datociudadtodos31 + "," + datociudad5;
                        }
                    }
                    else {
                        _this.datosciudad23 = {
                            'solId': _this.datoSolMostrar3[a].solId,
                            'solIdsolicitud': _this.datoSolMostrar3[a].solIdsolicitud,
                            'solFecharealizacion': _this.datoSolMostrar3[a].solFecharealizacion,
                            'solEstado': _this.datoSolMostrar3[a].solEstado,
                            'solCiudades': _this.datoSolMostrar3[a].solCiudades,
                            'perNombrecompleto': _this.datoSolMostrar3[a].perNombrecompleto
                        };
                        datociudad2 = JSON.stringify(_this.datosciudad23);
                        if (_this.datociudadtodos21 == "") {
                            _this.datociudadtodos21 = datociudad2;
                        }
                        else {
                            _this.datociudadtodos21 = _this.datociudadtodos21 + "," + datociudad2;
                        }
                    }
                }
                ;
                _this.datoSolMostrarha = JSON.parse("[" + _this.datociudadtodos11 + "]");
                _this.datoSolMostrarhp = JSON.parse("[" + _this.datociudadtodos21 + "]");
                _this.datoSolMostrarhc = JSON.parse("[" + _this.datociudadtodos31 + "]");
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la peticion de solicitudes");
            }
        });
    };
    SolicitudComponent.prototype.OnfirmarSolicitud = function () {
        // console.log("aqui va el codigo de la firma de la solicitud");
        var _this = this;
        // console.log("solicitud: "+this.detalleSolicitudRealizadas.DetsolIdsolicitud);
        this.firmaSolicitudRealizadas = {
            'Idsolicitud': this.detalleSolicitudRealizadas.DetsolIdsolicitud
        };
        this._solicitudService.firmarSolicitud(this.token, this.firmaSolicitudRealizadas).subscribe(function (response) {
            var info = response;
            _this.info9 = info;
            // console.log(this.info9);
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la peticion de solicitudes");
            }
        });
    };
    SolicitudComponent.prototype.generarPDFSolicitud = function (valor) {
        var _this = this;
        var value = valor['solIdsolicitud'];
        this.datosPdf = {
            'Idsolicitud': value
        };
        this._solicitudService.generapdfSolicitud(this.token, this.datosPdf).subscribe(function (response) {
            var info = response;
            _this.pdfmsg = info;
            if (_this.pdfmsg.status === "success") {
                console.log(_this.pdfmsg.msg);
            }
            else {
                console.log(_this.pdfmsg.msg);
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la peticion de solicitudes");
            }
        });
    };
    SolicitudComponent.prototype.verPdfSolicitud = function (valor) {
        var value = valor['solIdsolicitud'];
        this.pdfSrc = 'http://localhost/sistema_viaticos/back/web/pdfSol/' + value + '.pdf';
        window.open(this.pdfSrc);
    };
    return SolicitudComponent;
}());
SolicitudComponent = __decorate([
    core_1.Component({
        selector: 'solicitud',
        templateUrl: 'app/view/solicitud.html',
        providers: [login_service_1.LoginService, solicitud_service_1.SolicitudService] /*,
        outputs: ['solicitudInfolocal']*/
    })
    // @Directive({ selector: '[versolicitud]' })
    ,
    __metadata("design:paramtypes", [login_service_1.LoginService,
        solicitud_service_1.SolicitudService,
        router_1.Router,
        router_1.ActivatedRoute])
], SolicitudComponent);
exports.SolicitudComponent = SolicitudComponent;
//# sourceMappingURL=solicitud.component.js.map