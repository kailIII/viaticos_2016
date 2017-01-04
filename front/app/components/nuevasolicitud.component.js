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
var router_1 = require("@angular/router");
var transporte_service_1 = require("../services/transporte.service");
var solicitud_service_1 = require("../services/solicitud.service");
var login_service_1 = require("../services/login.service");
var NuevasolicitudComponent = (function () {
    function NuevasolicitudComponent(_TransporteService, _SolicitudService, _loginService, _router, _route) {
        this._TransporteService = _TransporteService;
        this._SolicitudService = _SolicitudService;
        this._loginService = _loginService;
        this._router = _router;
        this._route = _route;
        this.titulo = "Nueva Solicitud";
        this.dt = new Date();
        this.persona = [];
        this.ciudad = [];
        this.FechaDesde_sol = [];
        this.FechaHasta_sol = [];
        this.ciudadtra = [];
        this.mostrar_trareq = false;
    }
    NuevasolicitudComponent.prototype.ngOnInit = function () {
        this.ciudadComision = "";
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
            'tritra': ""
        };
        this.tipotra = this._TransporteService.GetTransporte();
        this.OnCiudad();
        this.OnPersona();
        this.OnCiudadTransporte();
        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
            dayNamesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
            dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
        };
        this.tr = {
            firstDayOfWeek: 1
        };
        this.fechahoy = new Date();
        var month = this.fechahoy.getMonth();
        var prevMonth = (month === 0) ? 11 : month - 1;
        var nextMonth = (month === 11) ? 0 : month + 1;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.comision = {
            'Fecha_sol': this.fechahoy,
            'FechaDesde_sol': "",
            'HoraDesde_sol': "",
            'FechaHasta_sol': "",
            'HoraHasta_sol': "",
            // 'ciudades_sol' : "",
            // 'funcionarios_sol' : "",
            'actividadessol': "",
            'trafechaSalida': "",
            'trahoraSalida': "",
            'trafechaLlegada': "",
            'trahoraLlegada': "",
            'vehiculo_solicitud': "",
            'valorFondo': "",
            // 'trarutaInicio' : "",
            // 'trarutaFin' : "",
            'trahoraInicio': "",
            'trahoraFin': ""
        };
    };
    NuevasolicitudComponent.prototype.OnCiudad = function () {
        var _this = this;
        this._SolicitudService.GetCiudad().subscribe(function (response) {
            var cuidad_mostrar = response;
            _this.ciudad_mostrar = cuidad_mostrar;
            if (_this.ciudad_mostrar.length <= 0) {
                alert("Error en el servidor 5");
            }
            else {
                if (!_this.ciudad_mostrar.status) {
                    var length = _this.ciudad_mostrar.length;
                    for (var i = 0; i < length; i++) {
                        _this.ciudadparte1 = _this.ciudad_mostrar[i].ciuCanton;
                        _this.provparte1 = _this.ciudad_mostrar[i].prov.provNombre;
                        _this.ciuid1 = _this.ciudad_mostrar[i].ciuId;
                        _this.ciudadjson = {
                            'label': _this.ciudadparte1 + "-" + _this.provparte1,
                            'value': _this.ciuid1
                        };
                        _this.ciudad.push(_this.ciudadjson);
                    }
                    ;
                    return _this.ciudad;
                }
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la petición 2");
            }
        });
    };
    NuevasolicitudComponent.prototype.OnCiudadTransporte = function () {
        var _this = this;
        this._SolicitudService.GetCiudad().subscribe(function (response) {
            var cuidad_mostrar = response;
            _this.ciudad_mostrar = cuidad_mostrar;
            if (_this.ciudad_mostrar.length <= 0) {
                alert("Error en el servidor 5");
            }
            else {
                if (!_this.ciudad_mostrar.status) {
                    var length = _this.ciudad_mostrar.length;
                    for (var i = 0; i < length; i++) {
                        _this.ciudadparte1 = _this.ciudad_mostrar[i].ciuCanton;
                        _this.provparte1 = _this.ciudad_mostrar[i].prov.provNombre;
                        _this.ciuid1 = _this.ciudad_mostrar[i].ciuId;
                        _this.ciudadjsontra = {
                            'label': _this.ciudadparte1 + "-" + _this.provparte1,
                            'value': _this.ciudadparte1 + "-" + _this.provparte1
                        };
                        _this.ciudadtra.push(_this.ciudadjsontra);
                    }
                    ;
                    return _this.ciudadtra;
                }
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la petición 2");
            }
        });
    };
    NuevasolicitudComponent.prototype.OnPersona = function () {
        var _this = this;
        this._SolicitudService.GetComisionado().subscribe(function (response) {
            var persona_mostrar = response;
            _this.persona_mostrar = persona_mostrar;
            if (_this.persona_mostrar.length <= 0) {
                alert("Error en el servidor 5");
            }
            else {
                if (!_this.persona_mostrar.status) {
                    var length = _this.persona_mostrar.length;
                    for (var i = 0; i < length; i++) {
                        _this.personaparte1 = _this.persona_mostrar[i].perNombrecompleto;
                        _this.perid1 = _this.persona_mostrar[i].perId;
                        _this.personajson = {
                            'label': _this.personaparte1,
                            'value': _this.perid1
                        };
                        _this.persona.push(_this.personajson);
                    }
                    ;
                    return _this.persona;
                }
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la petición 2");
            }
        });
    };
    NuevasolicitudComponent.prototype.OnTipoTransporte = function () {
        var tipotransporte = document.createTextNode(document.getElementById("combo_tiptra").value);
        return tipotransporte;
    };
    NuevasolicitudComponent.prototype.today = function () {
        this.dt = new Date();
    };
    NuevasolicitudComponent.prototype.OnDiferenciaFechas = function (f1, f2) {
        this.dias = [];
        var fechaInicio = new Date(f1).getTime();
        var fechaFin = new Date(f2).getTime();
        var diff = fechaFin - fechaInicio;
        var diasdiff = diff / (24 * 60 * 60 * 1000);
        for (var i = 0; i <= diasdiff; i++) {
            var date = new Date(f1);
            date.setDate(date.getDate() + i);
            this.dias.push(date.toLocaleDateString());
        }
        ;
    };
    NuevasolicitudComponent.prototype.Onpaso2 = function () {
        this.OnDiferenciaFechas(this.comision.FechaDesde_sol, this.comision.FechaHasta_sol);
        var fechaactividades;
        var length = this.dias.length;
        fechaactividades = '';
        for (var i = 0; i < length; i++) {
            var fechas = this.dias[i];
            fechaactividades += '<p class="ql-align-center"><strong class="ql-size-large">' + fechas + '</strong></p><ul><li><br></li></ul>';
        }
        ;
        this.comision.actividadessol = fechaactividades;
        this.inicial = true;
    };
    NuevasolicitudComponent.prototype.Onpaso3 = function () {
        this.paso2 = true;
        // console.log(this.comision);
    };
    NuevasolicitudComponent.prototype.Onpaso4 = function () {
        // this.paso3 = true;
        console.log(this.comision);
    };
    NuevasolicitudComponent.prototype.OnbotonAtras = function () {
        if (this.inicial == false && this.paso2 == false && this.paso3 == false) {
            this._router.navigate(['/solicitud']);
        }
        else if (this.inicial == true && this.paso2 == false && this.paso3 == false) {
            this.inicial = false;
        }
        else if (this.inicial == true && this.paso2 == true && this.paso3 == false) {
            this.paso2 = false;
        }
        else if (this.inicial == true && this.paso2 == true && this.paso3 == true) {
            this.paso3 = false;
        }
    };
    NuevasolicitudComponent.prototype.OnAgregarCiudad = function (title) {
        this.valor_textarea = document.getElementById("ciudades_solicitud").value;
        this.ciudadComision = this.valor_textarea;
        if (this.ciudadComision == "") {
            this.ciudadComision = title;
        }
        else {
            this.ciudadComision = this.ciudadComision + "," + title;
        }
        this.comision.ciudades_solicitud = this.ciudadComision;
        document.getElementById('ciudades_solicitud').focus();
        document.getElementById('ingresarCiudad').focus();
    };
    NuevasolicitudComponent.prototype.OnAgregarComisionado = function (title) {
        this.textarea_comisionados = document.getElementById("comisionados_solicitud").value;
        this.comisionadoComision = this.textarea_comisionados;
        if (this.comisionadoComision == "") {
            this.comisionadoComision = title;
        }
        else {
            this.comisionadoComision = this.comisionadoComision + "," + title;
        }
        this.comision.PersonasComision = this.comisionadoComision;
    };
    NuevasolicitudComponent.prototype.OnAgregarTraReq = function () {
        if (this.mostrar_trareq === false) {
            this.mostrar_trareq = true;
        }
        this.OnAgregarbtnEliminar();
    };
    NuevasolicitudComponent.prototype.OnEliminarTraReq = function () {
        var hilera = document.getElementById("TransporteReqDet");
        hilera.remove();
        var hileraactual = document.getElementById("TransporteReqDet");
        // console.log(hileraactual);
        if (hileraactual === null) {
            this.mostrar_trareq = false;
        }
    };
    NuevasolicitudComponent.prototype.OnAgregarbtnEliminar = function () {
        var tblBody = document.getElementById("tbody_trareq_dialog");
        var hilera = document.createElement("tr");
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
        var rutInicio_trareq;
        var tipo_trareq = document.createTextNode(document.getElementById("combo_tiptra").value);
        // console.log("tipo_trareq:"+(tipo_trareq));
        var modelo_trareq = document.createTextNode(document.getElementById("combo_vehiculo").value);
        // console.log("modelo_trareq:"+(modelo_trareq));
        // console.log("this.RinicioTran:"+(this.RinicioTrans));
        // let rutInicio_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("RinicioTrans")).value);
        // console.log("this.RinicioTrans:"+this.RinicioTrans);
        if (this.RinicioTrans === undefined || this.RinicioTrans == "") {
            this.RinicioTrans = "Cuenca-Azuay";
            rutInicio_trareq = document.createTextNode(this.RinicioTrans);
        }
        else {
            rutInicio_trareq = document.createTextNode(this.RinicioTrans);
        }
        // console.log("rutInicio_trareq:"+(rutInicio_trareq));
        // let rurFin_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("RfinTrans")).value);
        var rurFin_trareq;
        if (this.RfinTrans === undefined || this.RfinTrans == "") {
            this.RfinTrans = "Cuenca-Azuay";
            rurFin_trareq = document.createTextNode(this.RfinTrans);
        }
        else {
            rurFin_trareq = document.createTextNode(this.RfinTrans);
        }
        // console.log("rurFin_trareq:"+(rurFin_trareq));
        // let fInicio_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("FinicioTrans")).value);
        var nuevafechaIniciotransformar = new Date(this.FinicioTrans).toLocaleString();
        var fechaIniciotransformar = new Date(this.FinicioTrans).toLocaleDateString();
        var horaIniciotransformar = new Date(this.FinicioTrans).toLocaleTimeString();
        // console.log("nuevafechatransformar:"+nuevafechaIniciotransformar);
        // console.log("fechatransformar:"+fechaIniciotransformar);
        // console.log("horatransformar:"+horaIniciotransformar);
        // let fechaInicio = nuevafechatransformar;
        // console.log("fechaInicio:"+fechaInicio);
        var fInicio_trareq = document.createTextNode(fechaIniciotransformar);
        // let hInicio_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("HinicioTrans")).value);
        var hInicio_trareq = document.createTextNode(horaIniciotransformar);
        // console.log("hInicio_trareq:"+(hInicio_trareq));
        // let fFin_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("FfinTrans")).value);
        var nuevafechaFintransformar = new Date(this.FfinTrans).toLocaleString();
        var fechaFintransformar = new Date(this.FfinTrans).toLocaleDateString();
        var horaFintransformar = new Date(this.FfinTrans).toLocaleTimeString();
        var fFin_trareq = document.createTextNode(fechaFintransformar);
        // console.log("fFin_trareq:"+(fFin_trareq));
        // let hFin_trareq = document.createTextNode((<HTMLInputElement>document.getElementById("HfinTrans")).value);
        var hFin_trareq = document.createTextNode(horaFintransformar);
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
        aboton.setAttribute("class", "btn btn-danger btn-xs glyphicon glyphicon-minus");
        aboton.addEventListener('click', this.OnEliminarTraReq);
        tipo.setAttribute("id", "tipo_trareq");
        modelo.setAttribute("id", "modelo_trareq");
        rutInicio.setAttribute("id", "rutInicio_trareq");
        rurFin.setAttribute("id", "rurFin_trareq");
        fInicio.setAttribute("id", "fInicio_trareq");
        hInicio.setAttribute("id", "hInicio_trareq");
        fFin.setAttribute("id", "fFin_trareq");
        hFin.setAttribute("id", "hFin_trareq");
        tdboton.setAttribute("id", "botoneliminarTraReq");
        hilera.appendChild(tipo);
        hilera.appendChild(modelo);
        hilera.appendChild(rutInicio);
        hilera.appendChild(rurFin);
        hilera.appendChild(fInicio);
        hilera.appendChild(hInicio);
        hilera.appendChild(fFin);
        hilera.appendChild(hFin);
        hilera.appendChild(tdboton);
        hilera.setAttribute("id", "TransporteReqDet");
        tblBody.appendChild(hilera);
        // console.log(this.comision);
        // console.log(this.RfinTrans);
        // console.log(this.RinicioTrans);
        document.getElementById("combo_tiptra").value = "0";
        this.modeltrans = false;
        document.getElementById("combo_vehiculo").value = "Escoja uno";
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
    };
    NuevasolicitudComponent.prototype.onSelect = function () {
        var _this = this;
        var tipotransporte = document.getElementById("combo_tiptra").value;
        // console.log(tipotransporte);
        if (tipotransporte === "0") {
            // console.log("ESTA EN 0");
            this.modeltra = {
                "tiptraId": 0,
                "tiptraNombre": "Escoja un",
                "tiptraTipo": "Escoja un",
                "tiptraSigla": "NA"
            };
        }
        else {
            // console.log("ESTA CON VALORES");
            this.moltra = {
                'tritra': tipotransporte
            };
            this._TransporteService.GetModeloTransporte(this.moltra).subscribe(function (response) {
                var modeltra = response;
                _this.modeltra = modeltra;
                _this.modeltrans = true;
            }, function (error) {
                _this.errorMessage = error;
                if (_this.errorMessage != null) {
                    console.log(_this.errorMessage);
                    alert("Error en la petición 2");
                }
            });
        }
    };
    NuevasolicitudComponent.prototype.onCambiarModelTra = function () {
        this.modeltrans = false;
    };
    NuevasolicitudComponent.prototype.OnImprimirSol = function () {
        this._router.navigate(['/imprimir_solicitud']);
        // window.location.href='/principal';
    };
    return NuevasolicitudComponent;
}());
NuevasolicitudComponent = __decorate([
    core_1.Component({
        selector: 'nueva_solicitud',
        templateUrl: 'app/view/nueva_solicitud.html',
        providers: [transporte_service_1.TransporteService, solicitud_service_1.SolicitudService, login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [transporte_service_1.TransporteService,
        solicitud_service_1.SolicitudService,
        login_service_1.LoginService,
        router_1.Router,
        router_1.ActivatedRoute])
], NuevasolicitudComponent);
exports.NuevasolicitudComponent = NuevasolicitudComponent;
//# sourceMappingURL=nuevasolicitud.component.js.map