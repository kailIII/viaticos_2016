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
    function SolicitudComponent(_loginService, _solicitudService) {
        this._loginService = _loginService;
        this._solicitudService = _solicitudService;
        this.titulo = "Solicitud";
    }
    ;
    SolicitudComponent.prototype.ngOnInit = function () {
        this.detalleSol = false;
        this.identity = this._loginService.getIdentity();
        this.token = this._loginService.getToken();
        this.funcionario = {
            'fun_id': this.identity.sub
        };
        this.OnVerDetalleSol();
        this.OnMenuFirma();
        // this.OnporFirmar();
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
            // 'solSecuencial' : '',
            'solIdsolicitud': '',
            'solFecharealizacion': '',
            // 'solNumeroactualizacion' : '',
            'solEstado': '',
            'solCiudades': '',
            // 'solAnio' : '',
            // 'perId' : '',
            // 'perNombre' : '',
            // 'perApellido' : '',
            // 'perIdentificacion' : '',
            // 'perEstado' : '',
            // 'perCorreoelectronico' : '',
            // 'perIniciales' : '''',
            // 'perCreado' : '',
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
    };
    SolicitudComponent.prototype.OnMenuFirma = function () {
        var _this = this;
        this._solicitudService.jefeSolicitud(this.token, this.funcionario).subscribe(function (response) {
            var info = response;
            _this.info15 = info;
            // this.mostrarmenufirma = this.info15;
            // var tamano = this.info15;
            // console.log("this.info15:"+this.info15);
            if (_this.info15 > 0) {
                _this.mostrarmenufirma = _this.info15;
                _this.OnporFirmar();
            }
            else {
                _this.mostrarmenufirma = 0;
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la peticion de solicitudes");
            }
        });
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
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la peticion de solicitudes");
            }
        });
    };
    SolicitudComponent.prototype.OnMostrarDetalle = function (DetalleSolMostrar) {
        var _this = this;
        this.detalleSolicitudRealizadas = {
            'DetsolIdsolicitud': DetalleSolMostrar.solIdsolicitud
        };
        this._solicitudService.detallesolrealizadas(this.token, this.detalleSolicitudRealizadas).subscribe(function (response) {
            var info = response;
            _this.info1 = JSON.stringify(info);
            _this.info = JSON.parse("[" + _this.info1 + "]");
            if (_this.info.length <= 0) {
                _this.NoMostrar = "No existen solicitudes realizadas";
                return _this.NoMostrar;
            }
            else {
                _this.cargocotosol2 = {
                    'carperId': _this.info[0].cargocotosol.carperId,
                    'carperDesde': _this.info[0].cargocotosol.carperDesde,
                    'carperHasta': _this.info[0].cargocotosol.carperHasta,
                    'carperTipo': _this.info[0].cargocotosol.carperTipo,
                    'carperEstado': _this.info[0].cargocotosol.carperEstado,
                    'carNombre': _this.info[0].cargocotosol.car.carNombre,
                    'depNombre': _this.info[0].cargocotosol.car.dep.depNombre,
                    'depSiglas': _this.info[0].cargocotosol.car.dep.depSiglas,
                    'depEstado': _this.info[0].cargocotosol.car.dep.depEstado,
                    'rolNombre': _this.info[0].cargocotosol.car.rol.rolNombre,
                    'rolEstado': _this.info[0].cargocotosol.car.rol.rolEstado,
                    'perCorreoelectronico': _this.info[0].cargocotosol.per.perCorreoelectronico,
                    'perNombrecompleto': _this.info[0].cargocotosol.per.perNombrecompleto
                };
                _this.cargojefesol2 = {
                    'carperId': _this.info[0].cargojefesol.carperId,
                    'carperDesde': _this.info[0].cargojefesol.carperDesde,
                    'carperHasta': _this.info[0].cargojefesol.carperHasta,
                    'carperTipo': _this.info[0].cargojefesol.carperTipo,
                    'carperEstado': _this.info[0].cargojefesol.carperEstado,
                    'carNombre': _this.info[0].cargojefesol.car.carNombre,
                    'depNombre': _this.info[0].cargojefesol.car.dep.depNombre,
                    'depSiglas': _this.info[0].cargojefesol.car.dep.depSiglas,
                    'depEstado': _this.info[0].cargojefesol.car.dep.depEstado,
                    'rolNombre': _this.info[0].cargojefesol.car.rol.rolNombre,
                    'rolEstado': _this.info[0].cargojefesol.car.rol.rolEstado,
                    'perCorreoelectronico': _this.info[0].cargojefesol.per.perCorreoelectronico,
                    'perNombrecompleto': _this.info[0].cargojefesol.per.perNombrecompleto
                };
                if (_this.info[0].transportessol.length > 0) {
                    _this.transportessol = _this.info[0].transportessol;
                }
                else if (_this.info[0].transportessol.length == 0) {
                    _this.transportessol = _this.info[0].transportessol;
                }
                else {
                    _this.transportessol1 = JSON.stringify(_this.info[0].transportessol);
                    _this.transportessol = JSON.parse("[" + _this.transportessol1 + "]");
                }
                if (_this.info[0].bancosol.banperTipocuenta == "A") {
                    _this.bancosol2 = {
                        'banperId': _this.info[0].bancosol.banperId,
                        'banperTipocuenta': 'AHORROS',
                        'banperNumerocuenta': _this.info[0].bancosol.banperNumerocuenta,
                        'banperEstado': _this.info[0].bancosol.banperEstado,
                        'banNombre': _this.info[0].bancosol.ban.banNombre
                    };
                }
                else {
                    _this.bancosol2 = {
                        'banperId': _this.info[0].bancosol.banperId,
                        'banperTipocuenta': 'CORRIENTE',
                        'banperNumerocuenta': _this.info[0].bancosol.banperNumerocuenta,
                        'banperEstado': _this.info[0].bancosol.banperEstado,
                        'banNombre': _this.info[0].bancosol.ban.banNombre
                    };
                }
                if (_this.info[0].personasssol.length > 0) {
                    // console.log("personasssol.length no undefined");
                    _this.personasssol = _this.info[0].personasssol;
                }
                else if (_this.info[0].personasssol.length == 0) {
                    // console.log("personasssol.length no undefined");
                    _this.personasssol = _this.info[0].personasssol;
                }
                else {
                    // console.log("personasssol.length == undefined");
                    _this.personasssol1 = JSON.stringify(_this.info[0].personasssol);
                    _this.personasssol = JSON.parse("[" + _this.personasssol1 + "]");
                }
                if (_this.info[0].ciudadessol.length > 0) {
                    // console.log("ciudadessol.length no undefined");
                    _this.ciudadessol = _this.info[0].ciudadessol;
                }
                else if (_this.info[0].ciudadessol.length == 0) {
                    // console.log("ciudadessol.length no undefined");
                    _this.ciudadessol = _this.info[0].ciudadessol;
                }
                else {
                    // console.log("ciudadessol.length == undefined");
                    _this.ciudadessol1 = JSON.stringify(_this.info[0].ciudadessol);
                    _this.ciudadessol = JSON.parse("[" + _this.ciudadessol1 + "]");
                }
                if (_this.info[0].estadosol.length > 0) {
                    _this.estadosol = _this.info[0].estadosol;
                    _this.estsolActividades = _this.estadosol[0].estsolActividades;
                    if (JSON.stringify(_this.estadosol[0].estsolFechasalida) === JSON.stringify(_this.estadosol[0].estsolFechallegada)) {
                        _this.equis = {
                            'viaticos': '',
                            'movilizaciones': 'X',
                            'subsistencias': 'X',
                            'alimentacion': 'X'
                        };
                    }
                    else {
                        _this.equis = {
                            'viaticos': 'X',
                            'movilizaciones': 'X',
                            'subsistencias': 'X',
                            'alimentacion': 'X'
                        };
                    }
                }
                else if (_this.info[0].estadosol.length == 0) {
                    // console.log("estadosol.length no undefined");
                    _this.estadosol = _this.info[0].estadosol;
                }
                else {
                    // console.log("estadosol.length == undefined");
                    _this.estadosol1 = JSON.stringify(_this.info[0].estadosol);
                    _this.estadosol = JSON.parse("[" + _this.estadosol1 + "]");
                }
                if (_this.info[0].cardep.length > 0) {
                    // console.log("cardep.length no undefined");
                    _this.cardep = _this.info[0].cardep;
                }
                else if (_this.info[0].cardep.length == 0) {
                    // console.log("cardep.length no undefined");
                    _this.cardep = _this.info[0].cardep;
                }
                else {
                    // console.log("cardep.length == undefined");
                    _this.cardep1 = JSON.stringify(_this.info[0].cardep);
                    _this.cardep = JSON.parse("[" + _this.cardep1 + "]");
                    _this.cardep2 = {
                        'carId': _this.info[0].cardep.carId,
                        'carNombre': _this.info[0].cardep.carNombre,
                        'carJefe': _this.info[0].cardep.carJefe,
                        'depNombre': _this.info[0].cardep.dep.depNombre,
                        'depSiglas': _this.info[0].cardep.dep.depSiglas,
                        'depPadre': _this.info[0].cardep.dep.depPadre,
                        'depEstado': _this.info[0].cardep.dep.depEstado,
                        'rolNombre': _this.info[0].cardep.rol.rolNombre,
                        'rolEstado': _this.info[0].cardep.rol.rolEstado
                    };
                }
                if (_this.info[0].solifecfun.length > 0) {
                }
                else if (_this.info[0].solifecfun.length == 0) {
                }
                else {
                    _this.solifecfun2 = {
                        'solSecuencial': _this.info[0].solifecfun.solSecuencial,
                        'solIdsolicitud': _this.info[0].solifecfun.solIdsolicitud,
                        'solFecharealizacion': _this.info[0].solifecfun.solFecharealizacion,
                        'solNumeroactualizacion': _this.info[0].solifecfun.solNumeroactualizacion,
                        'perIdentificacion': _this.info[0].solifecfun.per.perIdentificacion,
                        'perCorreoelectronico': _this.info[0].solifecfun.per.perIdentificacion,
                        'perCreado': _this.info[0].solifecfun.per.perCreado,
                        'perNombrecompleto': _this.info[0].solifecfun.per.perNombrecompleto
                    };
                }
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la peticion de solicitudes");
            }
        });
        this.detalle = {
            'DetsolIdsolicitud': DetalleSolMostrar.solIdsolicitud
        };
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
                for (var k = 0; k < tamanodatos; k++) {
                    var datociudad1 = "";
                    itemsiguiente = k + 1;
                    anterior = k - 1;
                    _this.ciu11 = "";
                    tamanodatos1 = tamanodatos;
                    if (itemsiguiente < tamanodatos) {
                        if (_this.datoSolMostrar12[k].solIdsolicitud === _this.datoSolMostrar12[itemsiguiente].solIdsolicitud) {
                            for (var l = itemsiguiente; l < tamanodatos1; l++) {
                                _this.ciuIteracion1 = _this.datoSolMostrar12[k].solCiudades;
                                _this.ciuIteracionl1 = _this.datoSolMostrar12[l].solCiudades;
                                if (_this.datoSolMostrar12[k].solIdsolicitud === _this.datoSolMostrar12[l].solIdsolicitud) {
                                    if (_this.ciu11 == "") {
                                        _this.ciu11 = _this.ciuIteracion1 + "," + _this.ciuIteracionl1;
                                    }
                                    else {
                                        _this.ciu11 = _this.ciu11 + "," + _this.ciuIteracionl1;
                                    }
                                }
                                else {
                                    l = tamanodatos1;
                                }
                            }
                            ;
                            _this.datosciudad12 = {
                                'solId': _this.datoSolMostrar12[k].solId,
                                'solIdsolicitud': _this.datoSolMostrar12[k].solIdsolicitud,
                                'solFecharealizacion': _this.datoSolMostrar12[k].solFecharealizacion,
                                'solEstado': _this.datoSolMostrar12[k].solEstado,
                                'solCiudades': _this.ciu11,
                                'perNombrecompleto': _this.datoSolMostrar12[k].perNombrecompleto
                            };
                            datociudad1 = JSON.stringify(_this.datosciudad12);
                            if (_this.datociudadtodos11 == "") {
                                _this.datociudadtodos11 = datociudad1;
                            }
                            else {
                                _this.datociudadtodos11 = _this.datociudadtodos11 + "," + datociudad1;
                            }
                        }
                        else {
                            if (anterior > -1) {
                                if (_this.datoSolMostrar12[k].solIdsolicitud !== _this.datoSolMostrar12[itemsiguiente].solIdsolicitud) {
                                    if (_this.datoSolMostrar12[k].solIdsolicitud !== _this.datoSolMostrar12[anterior].solIdsolicitud) {
                                        _this.datosciudad12 = {
                                            'solId': _this.datoSolMostrar12[k].solId,
                                            'solIdsolicitud': _this.datoSolMostrar12[k].solIdsolicitud,
                                            'solFecharealizacion': _this.datoSolMostrar12[k].solFecharealizacion,
                                            'solEstado': _this.datoSolMostrar12[k].solEstado,
                                            'solCiudades': _this.datoSolMostrar12[k].solCiudades,
                                            'perNombrecompleto': _this.datoSolMostrar12[k].perNombrecompleto
                                        };
                                        datociudad1 = JSON.stringify(_this.datosciudad12);
                                        if (_this.datociudadtodos11 == "") {
                                            _this.datociudadtodos11 = datociudad1;
                                        }
                                        else {
                                            _this.datociudadtodos11 = _this.datociudadtodos11 + "," + datociudad1;
                                        }
                                    }
                                }
                            }
                            else {
                                _this.datosciudad12 = {
                                    'solId': _this.datoSolMostrar12[k].solId,
                                    'solIdsolicitud': _this.datoSolMostrar12[k].solIdsolicitud,
                                    'solFecharealizacion': _this.datoSolMostrar12[k].solFecharealizacion,
                                    'solEstado': _this.datoSolMostrar12[k].solEstado,
                                    'solCiudades': _this.datoSolMostrar12[k].solCiudades,
                                    'perNombrecompleto': _this.datoSolMostrar12[k].perNombrecompleto
                                };
                                datociudad1 = JSON.stringify(_this.datosciudad12);
                                if (_this.datociudadtodos11 == "") {
                                    _this.datociudadtodos11 = datociudad1;
                                }
                                else {
                                    _this.datociudadtodos11 = _this.datociudadtodos11 + "," + datociudad1;
                                }
                            }
                        }
                    }
                }
                ;
                _this.datoSolMostrar3 = JSON.parse("[" + _this.datociudadtodos11 + "]");
                // console.log("this.datociudadtodos11:"+this.datociudadtodos11);
                _this.datociudadtodos11 = "";
                _this.datociudadtodos21 = "";
                var datociudad3;
                var datociudad2;
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
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la peticion de solicitudes");
            }
        });
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