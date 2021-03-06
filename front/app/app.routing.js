"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var principal_component_1 = require("./components/principal.component");
var informe_component_1 = require("./components/informe.component");
var pasajes_component_1 = require("./components/pasajes.component");
var solicitud_component_1 = require("./components/solicitud.component");
var usuario_component_1 = require("./components/usuario.component");
var nuevasolicitud_component_1 = require("./components/nuevasolicitud.component");
var login_component_1 = require("./components/login.component");
var imprimirsolicitud_component_1 = require("./components/imprimirsolicitud.component");
var versolicitud_component_1 = require("./components/versolicitud.component");
var configuracion_component_1 = require("./components/configuracion.component");
var cambiarclave_component_1 = require("./components/cambiarclave.component");
// import { AppComponent }  from './app.component';
// import {AppComponent} from "./app.component";
var appRoutes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    // {path: "/", component: LoginComponent},
    { path: "", component: login_component_1.LoginComponent },
    { path: "principal", component: principal_component_1.PrincipalComponent },
    { path: "solicitud", component: solicitud_component_1.SolicitudComponent },
    { path: "informe", component: informe_component_1.InformeComponent },
    { path: "pasajes", component: pasajes_component_1.PasajesComponent },
    { path: "nueva_solicitud", component: nuevasolicitud_component_1.NuevasolicitudComponent },
    { path: "usuario", component: usuario_component_1.UsuarioComponent },
    { path: "imprimir_solicitud", component: imprimirsolicitud_component_1.ImprimirsolicitudComponent },
    { path: "versolicitud", component: versolicitud_component_1.VersolicitudComponent },
    { path: 'versolicitud/:id', component: versolicitud_component_1.VersolicitudComponent },
    { path: "configuracion", component: configuracion_component_1.ConfiguracionComponent },
    { path: "cambiarclave", component: cambiarclave_component_1.CambiarclaveComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map