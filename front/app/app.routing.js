"use strict";
var router_1 = require("@angular/router");
var principal_component_1 = require("./components/principal.component");
var informe_component_1 = require("./components/informe.component");
var pasajes_component_1 = require("./components/pasajes.component");
var solicitud_component_1 = require("./components/solicitud.component");
var usuario_component_1 = require("./components/usuario.component");
var nuevasolicitud_component_1 = require("./components/nuevasolicitud.component");
var login_component_1 = require("./components/login.component");
var imprimirsolicitud_component_1 = require("./components/imprimirsolicitud.component");
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
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map