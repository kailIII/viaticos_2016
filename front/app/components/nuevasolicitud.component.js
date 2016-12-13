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
// import { Ng2TableModule } from 'ng2-table/ng2-table';
// class Trans implements Transporte{
// 	constructor(
// 		public combo_tiptra?,
// 		public combo_vehiculo?,
// 		public RinicioTrans?,
// 		public RfinTrans?,
// 		public FinicioTrans?,
// 		public HinicioTrans?,
// 		public FfinTrans?,
// 		public HfinTrans?,
// 		){}
// }
var NuevasolicitudComponent = (function () {
    // settings = {
    //    columns: {
    //      id: {
    //        title: 'ID'
    //      },
    //      name: {
    //        title: 'Full Name'
    //      },
    //      username: {
    //        title: 'User Name'
    //      },
    //      email: {
    //        title: 'Email'
    //      }
    //    }
    //  };
    // displayDialog: boolean;
    // car: Transporte = new Trans();
    // selectedCar: Transporte;
    // newCar: boolean;
    // cars: Transporte[];
    function NuevasolicitudComponent(_router, _route) {
        this._router = _router;
        this._route = _route;
        this.titulo = "Nueva Solicitud";
        this.mostrar_trareq = false;
    }
    NuevasolicitudComponent.prototype.ngOnInit = function () {
        this.ciudadComision = "";
        this.ciudadComisionJSON = "";
        this.inicial = false;
        this.paso2 = false;
        this.paso3 = false;
        this.transporte = {
            'tritra': ""
        };
        this.comision = {
            'PersonasComision': "",
            'FechaDesde_sol': "",
            'HoraDesde_sol': "",
            'FechaHasta_sol': "",
            'HoraHasta_sol': "",
            'actividadessol': "",
            'observacionsol': "",
            'ciudades_solicitud': "",
            'trafechaSalida': "",
            'trahoraSalida': "",
            'trafechaLlegada': "",
            'trahoraLlegada': "",
            'vehiculo_solicitud': "",
            'valorFondo': "",
            'trarutaInicio': "",
            'trarutaFin': "",
            'trahoraInicio': "",
            'trahoraFin': ""
        };
        this.tipotra = this.OnTipoTransporte();
    };
    NuevasolicitudComponent.prototype.Onpaso2 = function () {
        console.log(JSON.stringify(this.comision));
        this.inicial = true;
    };
    NuevasolicitudComponent.prototype.Onpaso3 = function () {
        console.log(JSON.stringify(this.comision));
        this.paso2 = true;
    };
    NuevasolicitudComponent.prototype.Onpaso4 = function () {
        console.log(JSON.stringify(this.comision));
        this.paso3 = true;
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
    NuevasolicitudComponent.prototype.OnTipoTransporte = function () {
        var tipotransporte = [
            { val: "Aereo", name: "Aereo" },
            { val: "Terrestre", name: "Terrestre" },
            { val: "Marítimo", name: "Marítimo" },
            { val: "Ferreo", name: "Ferreo" }
        ];
        return tipotransporte;
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
        alert("Eliminar vehiculo");
        // this.pedidovehiculo = {
        // 	'trafechaSalida' : "",
        // 	'trahoraSalida' : "",
        // 	'trafechaLlegada' : "",
        // 	'trahoraLlegada' : "",
        // 	'vehiculo_solicitud' : "",
        // 	'trarutaInicio' : "",
        // 	'trarutaFin' : "",
        // 	'trahoraInicio' : "",
        // 	'trahoraFin' : ""
        // };
        // document.removeChild(hilera.indexOf(),1);
        // <HTMLElement>document.getElementById("TransporteReqDet").deleteRow(0);
        // var filaborrar = (<HTMLElement>document.getElementById("TransporteReqDet"));
        // this.pedidovehiculo.splice(1, 1);
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
        var tipo_trareq = document.createTextNode(document.getElementById("combo_tiptra").value);
        var modelo_trareq = document.createTextNode(document.getElementById("combo_vehiculo").value);
        var rutInicio_trareq = document.createTextNode(document.getElementById("RinicioTrans").value);
        var rurFin_trareq = document.createTextNode(document.getElementById("RfinTrans").value);
        var fInicio_trareq = document.createTextNode(document.getElementById("FinicioTrans").value);
        var hInicio_trareq = document.createTextNode(document.getElementById("HinicioTrans").value);
        var fFin_trareq = document.createTextNode(document.getElementById("FfinTrans").value);
        var hFin_trareq = document.createTextNode(document.getElementById("HfinTrans").value);
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
        // aboton.addEventListener('click', function() {
        // 	alert("Eliminar vehiculo");
        // });
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
    };
    return NuevasolicitudComponent;
}());
NuevasolicitudComponent = __decorate([
    core_1.Component({
        selector: 'nueva_solicitud',
        templateUrl: 'app/view/nueva_solicitud.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute])
], NuevasolicitudComponent);
exports.NuevasolicitudComponent = NuevasolicitudComponent;
//# sourceMappingURL=nuevasolicitud.component.js.map