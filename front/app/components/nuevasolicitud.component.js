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
var ng2_file_upload_1 = require("ng2-file-upload/ng2-file-upload");
// var moment = require('moment/moment');
// var moment = Moment;
var URLupload = 'file://localhost:3000/pdfSol1/';
var NuevasolicitudComponent = (function () {
    // @Output() mensajeGuardado: EventEmitter<string> = new EventEmitter();
    // filesToUpload: Array<File>;
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
        // public item: {firstName: string, lastName: string} = {firstName: 'Peter', lastName: 'Parker'};
        // public pdf: any;
        // public buildPdf: any = new buildPdf();
        // public uploader:FileUploader;
        // public URLupload: string;
        // public uploader:FileUploader = new FileUploader({url: URLupload});
        this.uploader = new ng2_file_upload_1.FileUploader({ url: URLupload /*,
                autoUpload: true,*/
            /*allowedMimeType: ['image/png', 'image/jpg', 'image/bmp', 'application/pdf'],
            maxFileSize: 510241024 // 5 MB*/
        });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.mostrar_trareq = false;
        // this.filesToUpload = [];
    }
    NuevasolicitudComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    NuevasolicitudComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    NuevasolicitudComponent.prototype.ngOnInit = function () {
        this.mensajeGuardado = "false";
        // this.mensajeGuardado.emit("true");
        // console.log("this.mensajeGuardado:"+JSON.stringify(this.mensajeGuardado));
        // console.log("this.mensajeGuardado:"+this.mensajeGuardado);
        this.ciudadComision = "";
        this.ciudadComisionJSON = "";
        this.inicial = false;
        this.paso2 = false;
        this.paso3 = false;
        this.paso4 = false;
        this.modeltrans = false;
        this.existenDatosGenerales = false;
        this.transporte = {
            'tritra': ""
        };
        this.tipotra = this._TransporteService.GetTransporte();
        this.OnCiudad();
        this.OnPersona();
        this.OnCiudadTransporte();
        // this.expanderBloqueNuevaSol();
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
            'solotransporteSol': "",
            'fondovalor': "",
            'fondoobservacion': "",
            'anexotitulo': "",
            'aneodescripcion': "",
            'anexoruta': ""
        };
        this.datoscorreo = {
            'sendTo': ""
        };
        this.datosfun = {
            'nombre': this._loginService.getIdentity().perNombre + " " + this._loginService.getIdentity().perApellido
        };
        this.transporteSol1 = {
            'tratipo': "",
            'tramodelo': "",
            'trarutaInicio': "",
            'trarutaFin': "",
            'trafechaInicio': "",
            'trafechaFin': "",
            'trahoraInicio': "",
            'trahoraFin': "",
        };
        this.transporteSol = [];
        this.datoscorreoAJefe = {
            'solicitud': "",
            'sendToFun2': ""
        };
        // this.OnHoraFinicioTra();
        // this.OnHoraFfinTra();
        // $('#seccion2').transition = false;
        $(function () { $('#seccion2').transition = false; });
        this.bloquear_manana();
    };
    // openPdf() {
    // 	this.pdf = pdfMake;
    // 	this.buildPdf = buildPdf;
    // 	this.pdf.createPdf(buildPdf(this.item)).open();
    // 	// this.pdf.createPdf(buildPdf(this.item)).print();
    // 	this.pdf.createPdf(buildPdf(this.item)).download();
    // }
    NuevasolicitudComponent.prototype.bloquear_manana = function () {
        // var today1 = new Date();
        // var dd = today1.getDate();
        // var mm = today1.getMonth()+1;
        // var yyyy = today1.getFullYear();
        // if(dd<10){
        // 	dd='0'+dd
        // } 
        // if(mm<10){
        // 	mm='0'+mm
        // } 
        // today1 = yyyy+'-'+mm+'-'+dd;
        // document.getElementById("Fecha_sol").setAttribute("max", today1);
    };
    NuevasolicitudComponent.prototype.toggleTitle = function () {
        $('.title').slideToggle();
        // console.log(i);
    };
    NuevasolicitudComponent.prototype.delete = function (i) {
        this.transporteSol.splice(this.transporteSol.indexOf(i), 1);
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
                alert("Error en la petición 2Per");
            }
        });
    };
    NuevasolicitudComponent.prototype.OnTipoTransporte = function () {
        // let tipotransporte = document.createTextNode((<HTMLInputElement>document.getElementById("combo_tiptra")).value);
        var tipotransporte = document.getElementById("combo_tiptra").value;
        return tipotransporte;
    };
    NuevasolicitudComponent.prototype.today = function () {
        this.dt = new Date();
    };
    NuevasolicitudComponent.prototype.OnDiferenciaFechas = function (f1, f2) {
        this.dias = [];
        // console.log("f1:"+f1);
        // console.log("f2:"+f2);
        var fechaInicio = new Date(f1).toLocaleDateString();
        // var fechaInicio = new Date(f1).getUTCDate();
        var fechaFin = new Date(f2).getTime();
        // console.log("fechaInicio:"+fechaInicio);
        // console.log("fechaFin:"+fechaFin);
        // var diff = fechaFin - fechaInicio;
        // let diasdiff = diff/(24*60*60*1000)
        // for (var i = 0; i <= diasdiff; i++) {
        // 	// var date = f1;
        // 	var date = new Date(f1);
        // 	console.log("date:"+date);
        // 	date.setDate(date.getDate() + i); 
        // 	this.dias.push(date.toLocaleDateString());
        // };
    };
    NuevasolicitudComponent.prototype.Onpaso2 = function () {
        this.comision.Fecha_sol = this.Fecha_sol;
        this.comision.FechaDesde_sol = this.FechaDesde_solicitud;
        this.comision.HoraDesde_sol = this.HoraDesde_sol;
        this.comision.FechaHasta_sol = this.FechaHasta_solicitud;
        this.comision.HoraHasta_sol = this.HoraHasta_sol;
        this.comision.correo = this._loginService.getIdentity().aperUsuario;
        if (this.funcionarios_sol_ini !== undefined) {
            this.comision.funcionarios_sol = (((JSON.stringify(this.funcionarios_sol_ini).replace('["', '')).replace('"]', '')).replace('","', ',')).replace(/\"/g, '');
        }
        if (this.ciudades_sol_ini !== undefined) {
            this.comision.ciudades_sol = (JSON.stringify(this.ciudades_sol_ini).replace('[', '')).replace(']', '');
        }
        // console.log("this.comision:"+JSON.stringify(this.comision));
        this.inicial = true;
    };
    NuevasolicitudComponent.prototype.Onpaso3 = function () {
        // console.log("this.comision:"+JSON.stringify(this.comision));
        this.paso2 = true;
    };
    NuevasolicitudComponent.prototype.Onpaso4 = function () {
        var solotransporteSol = "";
        var solotransporteSolConvert = "";
        var registros = this.transporteSol.length;
        for (var l = 0; l < registros; l++) {
            if (solotransporteSol == "") {
                solotransporteSol = this.transporteSol[l].tratipo + "," + this.transporteSol[l].tramodelo + "," + this.transporteSol[l].trarutaInicio + "," + this.transporteSol[l].trarutaFin + "," + this.transporteSol[l].trafechaInicio + "," + this.transporteSol[l].trahoraInicio + "," + this.transporteSol[l].trafechaFin + "," + this.transporteSol[l].trahoraFin + ";";
            }
            else {
                solotransporteSol = solotransporteSol + this.transporteSol[l].tratipo + "," + this.transporteSol[l].tramodelo + "," + this.transporteSol[l].trarutaInicio + "," + this.transporteSol[l].trarutaFin + "," + this.transporteSol[l].trafechaInicio + "," + this.transporteSol[l].trahoraInicio + "," + this.transporteSol[l].trafechaFin + "," + this.transporteSol[l].trahoraFin + ";";
            }
        }
        // solotransporteSolConvert = '"'+solotransporteSol+'"';
        solotransporteSolConvert = solotransporteSol + '"';
        this.comision.solotransporteSol = (solotransporteSolConvert.replace(';"', ''));
        // console.log("this.comision.solotransporteSol:"+this.comision.solotransporteSol);
        // console.log(this.comision);
        console.log("this.comision:" + JSON.stringify(this.comision));
        this.paso3 = true;
    };
    NuevasolicitudComponent.prototype.Onpaso5 = function () {
        if (this.fondovalor == undefined) {
            this.comision.fondovalor = 0;
        }
        else {
            this.comision.fondovalor = this.fondovalor;
        }
        if (this.fondoobservacion == undefined) {
            this.comision.fondoobservacion = "N/A";
        }
        else {
            this.comision.fondoobservacion = this.fondoobservacion;
        }
    };
    NuevasolicitudComponent.prototype.OnbotonAtras = function () {
        if (this.inicial == false && this.paso2 == false && this.paso3 == false && this.paso4 == false) {
            this._router.navigate(['/solicitud']);
        }
        else if (this.inicial == true && this.paso2 == false && this.paso3 == false && this.paso4 == false) {
            this.inicial = false;
        }
        else if (this.inicial == true && this.paso2 == true && this.paso3 == false && this.paso4 == false) {
            this.paso2 = false;
        }
        else if (this.inicial == true && this.paso2 == true && this.paso3 == true && this.paso4 == false) {
            this.paso3 = false;
        }
        else if (this.inicial == true && this.paso2 == true && this.paso3 == true && this.paso4 == true) {
            this.paso4 = false;
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
        // this.OnAgregarbtnEliminar();
        this.OnAgregarRuta();
    };
    NuevasolicitudComponent.prototype.OnAgregarRuta = function () {
        if (this.transporteSol.length > 0) {
            var filas = this.transporteSol.length;
            // console.log("filas:"+filas);
            // console.log("this.transporteSol:"+JSON.stringify(this.transporteSol[filas-1].trarutaFin));
            if (this.transporteSol[filas - 1].trarutaFin === this.RinicioTrans) {
                this.nuevahorainicio = moment(this.comision.FechaDesde_sol + " " + this.comision.HoraDesde_sol);
                this.nuevafechainicio = (this.nuevahorainicio.add(1, "hour")).format('YYYY-MM-DD/HH:mm');
                this.nuevafechamas = (this.nuevafechainicio).split("/");
                this.nuevafechainicioanterior = moment(this.comision.FechaDesde_sol + " " + this.comision.HoraDesde_sol).subtract(60, "minutes").format('YYYY-MM-DD/HH:mm');
                this.nuevahorafin = moment(this.FfinTrans + " " + this.HfinTrans);
                this.nuevafechafin = (this.nuevahorafin.add(1, "hour")).format('YYYY-MM-DD/HH:mm');
                this.nuevafechamenos = (this.nuevafechafin).split("/");
                this.nuevafechafinanterior = (this.nuevahorafin.subtract(1, "hour")).format('YYYY-MM-DD/HH:mm');
                this.nuevafechafinanterior1 = (this.nuevafechafinanterior).split("/");
                var nuevafechainicio2 = void 0;
                var FechaSolSalidaCompleta = moment(this.comision.FechaDesde_sol + " " + this.comision.HoraDesde_sol).format('YYYY-MM-DD/HH:mm');
                var FechaSolLlegadaCompleta = moment(this.comision.FechaHasta_sol + " " + this.comision.HoraHasta_sol).format('YYYY-MM-DD/HH:mm');
                var FechaTraSalidaCompleta = moment(this.FinicioTrans + " " + this.HinicioTrans).format('YYYY-MM-DD/HH:mm');
                var FechaTraLlegadaCompleta = moment(this.FfinTrans + " " + this.HfinTrans).format('YYYY-MM-DD/HH:mm');
                var FechaTraSalidaCompletaAnterior1 = moment(this.FinicioTrans + " " + this.HinicioTrans).subtract(30, "minutes").format('YYYY-MM-DD/HH:mm');
                // let FechaTraLlegadaCompletaAnterior1 = moment(this.FfinTrans +" "+this.HfinTrans).subtract(30, "minutes").format('YYYY-MM-DD/HH:mm');
                var FechaTraSalidaCompletaAnterior2 = moment(this.FinicioTrans + " " + this.HinicioTrans).subtract(90, "minutes").format('YYYY-MM-DD/HH:mm');
                // let FechaTraLlegadaCompletaAnterior2 = moment(this.FfinTrans +" "+this.HfinTrans).subtract(90, "minutes").format('YYYY-MM-DD/HH:mm');
                if (this.nuevafechainicio >= FechaTraSalidaCompletaAnterior1) {
                    this.nuevafechainicio = FechaTraSalidaCompletaAnterior1;
                    nuevafechainicio2 = (FechaTraSalidaCompletaAnterior2).split("/");
                    this.comision.FechaDesde_sol = nuevafechainicio2[0];
                    this.comision.HoraDesde_sol = nuevafechainicio2[1];
                }
                this.nuevafechainicio1 = (this.nuevafechainicio).split("/");
                this.nuevafechafin1 = (this.nuevafechafin).split("/");
                if (this.RinicioTrans === undefined || this.RinicioTrans == "") {
                    this.RinicioTrans = "Cuenca-Azuay";
                }
                var rurFin_trareq = void 0;
                if (this.RfinTrans === undefined || this.RfinTrans == "") {
                    this.RfinTrans = "Cuenca-Azuay";
                }
                if (this.transporteSol.length == 0 && this.RinicioTrans === "Quito-Pichincha" && document.getElementById("combo_tiptra").value === "Aereo") {
                    this.transporteSol1 = {
                        'tratipo': document.getElementById("combo_tiptra").value,
                        'tramodelo': document.getElementById("combo_vehiculo").value,
                        'trarutaInicio': "Tababela-Pichincha",
                        'trarutaFin': this.RfinTrans,
                        'trafechaInicio': this.FinicioTrans,
                        'trahoraInicio': this.HinicioTrans,
                        'trafechaFin': this.FfinTrans,
                        'trahoraFin': this.HfinTrans
                    };
                    this.transporteSolInicial = {
                        'tratipo': "Terrestre",
                        'tramodelo': "Institucional",
                        'trarutaInicio': "Quito-Pichincha",
                        'trarutaFin': "Tababela-Pichincha",
                        'trafechaInicio': this.comision.FechaDesde_sol,
                        'trahoraInicio': this.comision.HoraDesde_sol,
                        'trafechaFin': this.nuevafechainicio1[0],
                        'trahoraFin': this.nuevafechainicio1[1]
                    };
                    this.transporteSol.push(this.transporteSolInicial);
                    this.transporteSol.push(this.transporteSol1);
                }
                else if (this.transporteSol.length > 0 && this.RfinTrans === "Quito-Pichincha" && document.getElementById("combo_tiptra").value === "Aereo") {
                    this.transporteSol1 = {
                        'tratipo': document.getElementById("combo_tiptra").value,
                        'tramodelo': document.getElementById("combo_vehiculo").value,
                        'trarutaInicio': this.RinicioTrans,
                        'trarutaFin': "Tababela-Pichincha",
                        'trafechaInicio': this.FinicioTrans,
                        'trahoraInicio': this.HinicioTrans,
                        'trafechaFin': this.FfinTrans,
                        'trahoraFin': this.HfinTrans
                    };
                    this.transporteSolInicial = {
                        'tratipo': "Terrestre",
                        'tramodelo': "Institucional",
                        'trarutaInicio': "Tababela-Pichincha",
                        'trarutaFin': "Quito-Pichincha",
                        'trafechaInicio': this.FfinTrans,
                        'trahoraInicio': this.HfinTrans,
                        'trafechaFin': this.nuevafechafin1[0],
                        'trahoraFin': this.nuevafechafin1[1]
                    };
                    this.transporteSol.push(this.transporteSol1);
                    this.transporteSol.push(this.transporteSolInicial);
                    this.comision.FechaHasta_sol = this.nuevafechafin1[0];
                    this.comision.HoraHasta_sol = this.nuevafechafin1[1];
                }
                else {
                    this.transporteSol1 = {
                        'tratipo': document.getElementById("combo_tiptra").value,
                        'tramodelo': document.getElementById("combo_vehiculo").value,
                        'trarutaInicio': this.RinicioTrans,
                        'trarutaFin': this.RfinTrans,
                        'trafechaInicio': this.FinicioTrans,
                        'trahoraInicio': this.HinicioTrans,
                        'trafechaFin': this.FfinTrans,
                        'trahoraFin': this.HfinTrans
                    };
                    this.transporteSol.push(this.transporteSol1);
                    this.comision.FechaHasta_sol = this.FfinTrans;
                    this.comision.HoraHasta_sol = this.HfinTrans;
                }
            }
            else {
                alert("Existe un error en la ruta ingresada, por favor corrija la ruta de inicio debe ser igual que la ruta fin anterior");
            }
        }
        else {
            this.nuevahorainicio = moment(this.comision.FechaDesde_sol + " " + this.comision.HoraDesde_sol);
            this.nuevafechainicio = (this.nuevahorainicio.add(1, "hour")).format('YYYY-MM-DD/HH:mm');
            this.nuevafechamas = (this.nuevafechainicio).split("/");
            this.nuevafechainicioanterior = moment(this.comision.FechaDesde_sol + " " + this.comision.HoraDesde_sol).subtract(60, "minutes").format('YYYY-MM-DD/HH:mm');
            this.nuevahorafin = moment(this.FfinTrans + " " + this.HfinTrans);
            this.nuevafechafin = (this.nuevahorafin.add(1, "hour")).format('YYYY-MM-DD/HH:mm');
            this.nuevafechamenos = (this.nuevafechafin).split("/");
            this.nuevafechafinanterior = (this.nuevahorafin.subtract(1, "hour")).format('YYYY-MM-DD/HH:mm');
            this.nuevafechafinanterior1 = (this.nuevafechafinanterior).split("/");
            var nuevafechainicio2 = void 0;
            var FechaSolSalidaCompleta = moment(this.comision.FechaDesde_sol + " " + this.comision.HoraDesde_sol).format('YYYY-MM-DD/HH:mm');
            var FechaSolLlegadaCompleta = moment(this.comision.FechaHasta_sol + " " + this.comision.HoraHasta_sol).format('YYYY-MM-DD/HH:mm');
            var FechaTraSalidaCompleta = moment(this.FinicioTrans + " " + this.HinicioTrans).format('YYYY-MM-DD/HH:mm');
            var FechaTraLlegadaCompleta = moment(this.FfinTrans + " " + this.HfinTrans).format('YYYY-MM-DD/HH:mm');
            var FechaTraSalidaCompletaAnterior1 = moment(this.FinicioTrans + " " + this.HinicioTrans).subtract(30, "minutes").format('YYYY-MM-DD/HH:mm');
            var FechaTraSalidaCompletaAnterior2 = moment(this.FinicioTrans + " " + this.HinicioTrans).subtract(90, "minutes").format('YYYY-MM-DD/HH:mm');
            // let FechaTraLlegadaCompletaAnterior2 = moment(this.FfinTrans +" "+this.HfinTrans).subtract(90, "minutes").format('YYYY-MM-DD/HH:mm');
            if (this.nuevafechainicio >= FechaTraSalidaCompletaAnterior1) {
                this.nuevafechainicio = FechaTraSalidaCompletaAnterior1;
                nuevafechainicio2 = (FechaTraSalidaCompletaAnterior2).split("/");
                this.comision.FechaDesde_sol = nuevafechainicio2[0];
                this.comision.HoraDesde_sol = nuevafechainicio2[1];
            }
            this.nuevafechainicio1 = (this.nuevafechainicio).split("/");
            this.nuevafechafin1 = (this.nuevafechafin).split("/");
            if (this.RinicioTrans === undefined || this.RinicioTrans == "") {
                this.RinicioTrans = "Cuenca-Azuay";
            }
            var rurFin_trareq = void 0;
            if (this.RfinTrans === undefined || this.RfinTrans == "") {
                this.RfinTrans = "Cuenca-Azuay";
            }
            if (this.transporteSol.length == 0 && this.RinicioTrans === "Quito-Pichincha" && document.getElementById("combo_tiptra").value === "Aereo") {
                this.transporteSol1 = {
                    'tratipo': document.getElementById("combo_tiptra").value,
                    'tramodelo': document.getElementById("combo_vehiculo").value,
                    'trarutaInicio': "Tababela-Pichincha",
                    'trarutaFin': this.RfinTrans,
                    'trafechaInicio': this.FinicioTrans,
                    'trahoraInicio': this.HinicioTrans,
                    'trafechaFin': this.FfinTrans,
                    'trahoraFin': this.HfinTrans
                };
                this.transporteSolInicial = {
                    'tratipo': "Terrestre",
                    'tramodelo': "Institucional",
                    'trarutaInicio': "Quito-Pichincha",
                    'trarutaFin': "Tababela-Pichincha",
                    'trafechaInicio': this.comision.FechaDesde_sol,
                    'trahoraInicio': this.comision.HoraDesde_sol,
                    'trafechaFin': this.nuevafechainicio1[0],
                    'trahoraFin': this.nuevafechainicio1[1]
                };
                this.transporteSol.push(this.transporteSolInicial);
                this.transporteSol.push(this.transporteSol1);
            }
            else if (this.transporteSol.length > 0 && this.RfinTrans === "Quito-Pichincha" && document.getElementById("combo_tiptra").value === "Aereo") {
                this.transporteSol1 = {
                    'tratipo': document.getElementById("combo_tiptra").value,
                    'tramodelo': document.getElementById("combo_vehiculo").value,
                    'trarutaInicio': this.RinicioTrans,
                    'trarutaFin': "Tababela-Pichincha",
                    'trafechaInicio': this.FinicioTrans,
                    'trahoraInicio': this.HinicioTrans,
                    'trafechaFin': this.FfinTrans,
                    'trahoraFin': this.HfinTrans
                };
                this.transporteSolInicial = {
                    'tratipo': "Terrestre",
                    'tramodelo': "Institucional",
                    'trarutaInicio': "Tababela-Pichincha",
                    'trarutaFin': "Quito-Pichincha",
                    'trafechaInicio': this.FfinTrans,
                    'trahoraInicio': this.HfinTrans,
                    'trafechaFin': this.nuevafechafin1[0],
                    'trahoraFin': this.nuevafechafin1[1]
                };
                this.transporteSol.push(this.transporteSol1);
                this.transporteSol.push(this.transporteSolInicial);
                this.comision.FechaHasta_sol = this.nuevafechafin1[0];
                this.comision.HoraHasta_sol = this.nuevafechafin1[1];
            }
            else {
                this.transporteSol1 = {
                    'tratipo': document.getElementById("combo_tiptra").value,
                    'tramodelo': document.getElementById("combo_vehiculo").value,
                    'trarutaInicio': this.RinicioTrans,
                    'trarutaFin': this.RfinTrans,
                    'trafechaInicio': this.FinicioTrans,
                    'trahoraInicio': this.HinicioTrans,
                    'trafechaFin': this.FfinTrans,
                    'trahoraFin': this.HfinTrans
                };
                this.transporteSol.push(this.transporteSol1);
                this.comision.FechaHasta_sol = this.FfinTrans;
                this.comision.HoraHasta_sol = this.HfinTrans;
            }
        }
    };
    NuevasolicitudComponent.prototype.OnEliminarTraReq = function () {
        var hilera = document.getElementById("TransporteReqDet");
        hilera.remove();
        var hileraactual = document.getElementById("TransporteReqDet");
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
        var fechaIniciotransformar = (((JSON.stringify(new Date(this.FinicioTrans).toLocaleDateString()).replace('"', '')).replace('"', '')).replace('/', '-')).replace('/', '-');
        var horaIniciotransformar = (JSON.stringify(new Date(this.FinicioTrans).toLocaleTimeString()).replace('"', '')).replace('"', '');
        var fInicio_trareq = document.createTextNode(fechaIniciotransformar);
        var hInicio_trareq = document.createTextNode(horaIniciotransformar);
        var nuevafechaFintransformar = (JSON.stringify(new Date(this.FfinTrans).toLocaleString()).replace('"', '')).replace('"', '');
        var fechaFintransformar = (((JSON.stringify(new Date(this.FfinTrans).toLocaleDateString()).replace('"', '')).replace('"', '')).replace('/', '-')).replace('/', '-');
        var horaFintransformar = (JSON.stringify(new Date(this.FfinTrans).toLocaleTimeString()).replace('"', '')).replace('"', '');
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
                    alert("Error en la petición 212");
                }
            });
        }
    };
    NuevasolicitudComponent.prototype.onCambiarModelTra = function () {
        this.modeltrans = false;
    };
    NuevasolicitudComponent.prototype.OnImprimirSol = function () {
        // this._router.navigate(['/imprimir_solicitud']);
        // window.location.href='/principal';
    };
    NuevasolicitudComponent.prototype.OnOrdernarTransporte1 = function () {
        //     $("#tbody_trareq_dialog").dataTable({
        //     order: [[2, "desc"], [3, "desc"], [4, "desc"], [5, "desc"], [6, "desc"], [7, "desc"]]
        // });
        var table, rows, switching, i, x, y, shouldSwitch, RutaFin, RutaIniSig;
        var FechaHoraInicio, FechaHoraInicioSig;
        table = document.getElementById("tbody_trareq_dialog");
        switching = true;
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.getElementsByTagName("TR");
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 1; i < (rows.length - 1); i++) {
                //start by saying there should be no switching:
                shouldSwitch = false;
                /*Get the two elements you want to compare,
                one from current row and one from the next:*/
                // FechaRutaFin = rows[i].getElementsByTagName("TD")[3];
                // HoraRutaFin = rows[i].getElementsByTagName("TD")[3];
                // FechaRuta = rows[i].getElementsByTagName("TD")[3];
                // HoraRuta = rows[i].getElementsByTagName("TD")[3];
                FechaHoraInicio = (new Date((rows[i].getElementsByTagName("TD")[4]).innerText + "T" + (rows[i].getElementsByTagName("TD")[5]).innerText).getTime() / 1000);
                FechaHoraInicioSig = (new Date((rows[i + 1].getElementsByTagName("TD")[4]).innerText + "T" + (rows[i + 1].getElementsByTagName("TD")[5]).innerText).getTime() / 1000);
                // FechaRuta = new Date(FechaHoraInicio.split(' ').join('T'));
                // FechaHoraInicioSig
                // y = rows[i + 1].getElementsByTagName("TD")[2];
                // RutaIniSig = rows[i + 1].getElementsByTagName("TD")[2];
                //check if the two rows should switch place:
                // console.log("FechaHoraInicio:"+FechaHoraInicio);
                // console.log("FechaHoraInicio:"+(new Date(FechaHoraInicio)).getTime() / 1000);
                // console.log("FechaHoraInicio:"+FechaHoraInicio.getTime());
                // console.log("RutaIniSig.value:"+RutaIniSig.innerText);
                if (FechaHoraInicio > FechaHoraInicioSig) {
                    // if (RutaFin.innerText !== RutaIniSig.innerText) {
                    // 	//if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                //     If a switch has been marked, make the switch
                //     and mark that a switch has been done:
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    };
    NuevasolicitudComponent.prototype.OnOrdenarTransporte = function () {
        // this.Onpaso4();
        // console.log("this.comision:"+JSON.stringify(this.comision));
        // console.log("this.transporteSol:"+JSON.stringify(this.transporteSol));
        var table, rows, switching, i, x, y, shouldSwitch, RutaFin, RutaIniSig;
        table = document.getElementById("tbody_trareq_dialog");
        switching = true;
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.getElementsByTagName("TR");
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 1; i < (rows.length - 1); i++) {
                //start by saying there should be no switching:
                shouldSwitch = false;
                /*Get the two elements you want to compare,
                one from current row and one from the next:*/
                RutaFin = rows[i].getElementsByTagName("TD")[3];
                // y = rows[i + 1].getElementsByTagName("TD")[2];
                RutaIniSig = rows[i + 1].getElementsByTagName("TD")[2];
                //check if the two rows should switch place:
                console.log("RutaFin.value:" + RutaFin.innerText);
                console.log("RutaIniSig.value:" + RutaIniSig.innerText);
                // if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                if (RutaFin.innerText !== RutaIniSig.innerText) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                /*If a switch has been marked, make the switch
                and mark that a switch has been done:*/
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    };
    NuevasolicitudComponent.prototype.onEnviarSol = function () {
        var _this = this;
        this.Onpaso5();
        var token = this._loginService.getToken();
        var nombrecompleto = this._loginService.getIdentity().perNombre + " " + this._loginService.getIdentity().perApellido;
        this._SolicitudService.AddSolicitud(token, this.comision).subscribe(function (response) {
            var guardar = response;
            _this.guardar = guardar;
            if (_this.guardar.status === "success") {
                _this.datoscorreoAJefe.solicitud = _this.guardar.code;
                _this.mensajeGuardado = "true";
                // this.OnEnviarCorreoAfun(this.comision.funcionarios_sol);
            }
            else {
                alert(_this.guardar.msg);
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error al guardar datos");
            }
        });
    };
    NuevasolicitudComponent.prototype.OnEnviarCorreoAfun = function (a) {
        var _this = this;
        var token = this._loginService.getToken();
        if (a === "") {
            this.datoscorreo = {
                'sendTo': this.datosfun.nombre,
                'sendToFun': this.datosfun.nombre
            };
        }
        else {
            this.datoscorreo = {
                'sendTo': this.datosfun.nombre + "," + a,
                'sendToFun': this.datosfun.nombre
            };
        }
        this._SolicitudService.enviar1Solicitud(token, this.datoscorreo).subscribe(function (response) {
            var guardar1 = response;
            _this.guardar1 = guardar1;
            if (_this.guardar1.status === "success") {
                _this.OnEnviarCorreofunAJefe();
            }
            else {
                _this.mensajeGuardado = "error";
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error al guardar datos");
            }
        });
    };
    NuevasolicitudComponent.prototype.OnEnviaraRaizSolicitud = function () {
        this._router.navigate(['/solicitud']);
    };
    NuevasolicitudComponent.prototype.OnEnviarCorreofunAJefe = function () {
        var _this = this;
        var token = this._loginService.getToken();
        this.datoscorreoAJefe.sendToFun2 = this.datosfun.nombre;
        this._SolicitudService.enviarjiSolicitud(token, this.datoscorreoAJefe).subscribe(function (response) {
            var guardar1 = response;
            _this.guardar2 = guardar1;
            if (_this.guardar2.status === "success") {
                _this.mensajeGuardado = "true";
            }
            else {
                _this.mensajeGuardado = "error";
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error al guardar datos");
            }
        });
    };
    NuevasolicitudComponent.prototype.onGuardarSol = function () {
        var Fecha_sol = document.getElementById("Fecha_sol").value;
        var FechaDesde_sol = document.getElementById("FechaDesde_solicitud").value;
        var HoraDesde_sol = document.getElementById("HoraDesde_sol").value;
        var FechaHasta_sol = document.getElementById("FechaHasta_solicitud").value;
        var HoraHasta_sol = document.getElementById("HoraHasta_sol").value;
        var actividadessol = document.getElementById("actividadesRealizar").value;
        var ciudades_sol = this.ciudades_sol_ini;
        var tablaTransporte = this.transporteSol.length;
        // if(Fecha_sol === "" || FechaDesde_sol === "" || HoraDesde_sol === "" || FechaHasta_sol === "" || HoraHasta_sol === "" || this.comision.actividadessol === undefined || this.comision.actividadessol === null || this.comision.actividadessol === "" || ciudades_sol === undefined || ciudades_sol === null || ciudades_sol === "" || tablaTransporte == 0){
        if (Fecha_sol == "" || FechaDesde_sol == "" || HoraDesde_sol == "" || FechaHasta_sol == "" || HoraHasta_sol == "" || ciudades_sol === undefined || ciudades_sol === null || ciudades_sol == "") {
            alert("Faltan datos en la seccion Datos Generales");
        }
        else if (this.comision.actividadessol === undefined || this.comision.actividadessol === null || this.comision.actividadessol == "") {
            // console.log("ciudades_sol:"+ciudades_sol);
            // console.log("actividadessol:"+this.comision.actividadessol);
            alert("Faltan datos en la seccion Actividades");
        }
        else if (tablaTransporte == 0) {
            // console.log("tablaTransporte:"+tablaTransporte);
            alert("Faltan datos en la seccion Transporte");
        }
        else {
            this.Onpaso4();
            this.onEnviarSol();
        }
    };
    NuevasolicitudComponent.prototype.datosGenerales = function () {
        // $('#seccion2').transition = true;
        // $(function() { $('#seccion2').transition = true; })
        // if(this.FechaDesde_solicitud === undefined || this.FechaDesde_solicitud === "" || this.HoraDesde_sol === undefined || this.HoraDesde_sol === "" || this.FechaHasta_solicitud === undefined || this.FechaHasta_solicitud === "" || this.HoraHasta_sol === undefined || this.HoraHasta_sol === "" || this.ciudades_sol_ini === undefined || this.ciudades_sol_ini === ""){
        if (this.Fecha_sol === undefined || this.Fecha_sol === "" || this.ciudades_sol_ini === undefined || this.ciudades_sol_ini === "") {
            alert("Falta ingresar datos requeridos, por favor ingrese los campos de la Sección DATOS GENERALES");
            this.existenDatosGenerales = false;
        }
        else {
            this.existenDatosGenerales = true;
            // this.comision.Fecha_sol = this.Fecha_sol;
            // this.comision.FechaDesde_sol = this.FechaDesde_solicitud;
            // this.comision.HoraDesde_sol = this.HoraDesde_sol;
            // this.comision.FechaHasta_sol = this.FechaHasta_solicitud;
            // this.comision.HoraHasta_sol = this.HoraHasta_sol;
            this.comision.correo = this._loginService.getIdentity().aperUsuario;
            if (this.funcionarios_sol_ini !== undefined) {
                this.comision.funcionarios_sol = (((JSON.stringify(this.funcionarios_sol_ini).replace('["', '')).replace('"]', '')).replace('","', ',')).replace(/\"/g, '');
            }
            if (this.ciudades_sol_ini !== undefined) {
                this.comision.ciudades_sol = (JSON.stringify(this.ciudades_sol_ini).replace('[', '')).replace(']', '');
            }
        }
        // console.log("comision:"+JSON.stringify(this.comision));
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