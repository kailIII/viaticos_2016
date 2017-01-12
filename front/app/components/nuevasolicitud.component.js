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
        this.transporte = {
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
        this.Fecha_sol = new Date();
        this.comision = {
            'correo': "",
            'Fecha_sol': "",
            'FechaDesde_sol': "",
            'HoraDesde_sol': "",
            'FechaHasta_sol': "",
            'HoraHasta_sol': "",
            'actividadessol': "",
            'trarutaInicio': "",
            'trarutaFin': "",
            'trafechaInicio': "",
            'trafechaFin': "",
            'trahoraInicio': "",
            'trahoraFin': "",
            'valorFondo': "",
            'ciudades_sol': "",
            'vehiculo_solicitud': "",
            'funcionarios_sol': "",
            "solotransporteSol": ""
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
                        // this.perid1 = this.persona_mostrar[i].perId;
                        _this.personajson = {
                            'label': _this.personaparte1,
                            'value': _this.personaparte1
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
    // 	OnAgregarVehiculoSol(){
    // 		// let tblBody = NodeListOf(<HTMLInputElement>document.getElementsByName("tbody_trareq_dialog"));
    // 		let tblBody = (<HTMLInputElement>document.getElementById("tbody_trareq_dialog")).rows.length;
    // 		var yea=tblBody;
    // alert(yea);
    // 	}
    NuevasolicitudComponent.prototype.Onpaso2 = function () {
        this.comision.Fecha_sol = new Date(this.Fecha_sol).toLocaleDateString('en-US');
        this.comision.FechaDesde_sol = new Date(this.FechaDesde_solicitud).toLocaleDateString('en-US');
        this.comision.HoraDesde_sol = new Date(this.HoraDesde_sol).toLocaleTimeString();
        this.comision.FechaHasta_sol = new Date(this.FechaHasta_solicitud).toLocaleDateString('en-US');
        this.comision.HoraHasta_sol = new Date(this.HoraHasta_sol).toLocaleTimeString();
        this.OnDiferenciaFechas(this.FechaDesde_solicitud, this.FechaHasta_solicitud);
        var fechaactividades;
        var length = this.dias.length;
        fechaactividades = '';
        for (var i = 0; i < length; i++) {
            var fechas = this.dias[i];
            fechaactividades += '<p class="ql-align-center"><strong class="ql-size-large">' + fechas + '</strong></p><ul><li><br></li></ul>';
        }
        ;
        this.comision.actividadessol = fechaactividades;
        this.comision.correo = this._loginService.getIdentity().aperUsuario;
        // 	this.comision.Fecha_sol  = new Date(this.Fecha_sol_ini).toLocaleDateString();
        // 	this.comision.FechaDesde_sol  = new Date(this.FechaDesde_sol_ini).toLocaleDateString();
        // 	this.comision.HoraDesde_sol  = new Date(this.HoraDesde_sol_ini).toLocaleTimeString();
        // 	this.comision.FechaHasta_sol  = new Date(this.FechaHasta_sol_ini).toLocaleDateString();
        // 	this.comision.HoraHasta_sol  = new Date(this.HoraHasta_sol_ini).toLocaleTimeString();
        // console.log("this.funcionarios_sol_ini:"+this.funcionarios_sol_ini);
        if (this.funcionarios_sol_ini !== undefined) {
            this.comision.funcionarios_sol = ((JSON.stringify(this.funcionarios_sol_ini).replace('["', '')).replace('"]', '')).replace('","', ',');
        }
        // this.comision.funcionarios_sol  = JSON.stringify(this.funcionarios_sol_ini);
        if (this.ciudades_sol_ini !== undefined) {
            this.comision.ciudades_sol = (JSON.stringify(this.ciudades_sol_ini).replace('[', '')).replace(']', '');
        }
        console.log(this.comision);
        this.inicial = true;
    };
    NuevasolicitudComponent.prototype.Onpaso3 = function () {
        // this.comision.actividadessol = this.comisionInicial.actividadessol;
        // console.log(this.comision.actividadessol);
        this.paso2 = true;
    };
    NuevasolicitudComponent.prototype.Onpaso4 = function () {
        var tblBody = document.getElementById("tbody_trareq_dialog");
        // let fila = tblBody.getElementById("TransporteReqDet");
        var hilera = tblBody.getElementsByTagName("tr");
        var filas = hilera.length;
        // alert("filas:"+filas);
        var vehiculo_solicitud;
        var ciudades_solicitud;
        var trahoraFin;
        var trahoraInicio;
        var trarutaFin;
        var trarutaInicio;
        // alert("columna:"+columna);
        for (var i = 0; i < filas; i++) {
            var datos = hilera[i].getElementsByTagName("td");
            var columna = datos.length;
            var data1;
            var data2;
            if (data1 !== undefined) {
                data1 = data1 + ";";
            }
            for (var j = 0; j < columna - 1; j++) {
                var informaciontra = datos[j].firstChild.nodeValue;
                if (data1 == undefined) {
                    data1 = informaciontra;
                }
                else {
                    data1 = data1.replace(";,", ";") + "," + informaciontra;
                    // console.log(data1);
                    data2 = data1;
                }
            }
        }
        // console.log("data2:"+data2);
        // console.log("data2:"+data2.replace(";,",";"));
        this.comision.solotransporteSol = data2;
        // for (var i = 0; i < filas; i++) {
        // }
        // console.log(data1);
        // var data3;
        // this.comision.solotransporteSol = data2;
        // console.log(data3);
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
        var modelo_trareq = document.createTextNode(document.getElementById("combo_vehiculo").value);
        if (this.RinicioTrans === undefined || this.RinicioTrans == "") {
            this.RinicioTrans = "Cuenca-Azuay";
            rutInicio_trareq = document.createTextNode(this.RinicioTrans);
        }
        else {
            rutInicio_trareq = document.createTextNode(this.RinicioTrans);
        }
        var rurFin_trareq;
        if (this.RfinTrans === undefined || this.RfinTrans == "") {
            this.RfinTrans = "Cuenca-Azuay";
            rurFin_trareq = document.createTextNode(this.RfinTrans);
        }
        else {
            rurFin_trareq = document.createTextNode(this.RfinTrans);
        }
        var nuevafechaIniciotransformar = new Date(this.FinicioTrans).toLocaleString();
        var fechaIniciotransformar = new Date(this.FinicioTrans).toLocaleDateString();
        var horaIniciotransformar = new Date(this.FinicioTrans).toLocaleTimeString();
        var fInicio_trareq = document.createTextNode(fechaIniciotransformar);
        var hInicio_trareq = document.createTextNode(horaIniciotransformar);
        var nuevafechaFintransformar = new Date(this.FfinTrans).toLocaleString();
        var fechaFintransformar = new Date(this.FfinTrans).toLocaleDateString();
        var horaFintransformar = new Date(this.FfinTrans).toLocaleTimeString();
        var fFin_trareq = document.createTextNode(fechaFintransformar);
        var hFin_trareq = document.createTextNode(horaFintransformar);
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
        document.getElementById("combo_tiptra").value = "0";
        this.modeltrans = false;
        document.getElementById("combo_vehiculo").value = "Escoja uno";
        this.RinicioTrans = "";
        this.RfinTrans = "";
        this.FinicioTrans = "";
        this.FfinTrans = "";
    };
    NuevasolicitudComponent.prototype.onSelect = function () {
        var _this = this;
        var tipotransporte = document.getElementById("combo_tiptra").value;
        if (tipotransporte === "0") {
            this.modeltra = {
                "tiptraId": 0,
                "tiptraNombre": "Escoja un",
                "tiptraTipo": "Escoja un",
                "tiptraSigla": "NA"
            };
        }
        else {
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
    NuevasolicitudComponent.prototype.onEnviarSol = function () {
        var _this = this;
        // console.log(this.comision);
        var token = this._loginService.getToken();
        this._SolicitudService.AddSolicitud(token, this.comision).subscribe(function (response) {
            _this.status = response.status;
            if (_this.status != "success") {
                _this.status = "error";
            }
            else {
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error al guardar datos");
            }
        });
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