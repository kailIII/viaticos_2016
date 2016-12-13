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
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var principal_component_1 = require("./components/principal.component");
var informe_component_1 = require("./components/informe.component");
var pasajes_component_1 = require("./components/pasajes.component");
var nuevasolicitud_component_1 = require("./components/nuevasolicitud.component");
var solicitud_component_1 = require("./components/solicitud.component");
var login_component_1 = require("./components/login.component");
var usuario_component_1 = require("./components/usuario.component");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var primeng_1 = require("primeng/primeng");
// import {DataTableModule} from "angular2-datatable";
// import { Ng2SmartTableModule } from 'ng2-smart-table';
// import {InputTextModule} from 'primeng/components/inputtext/inputtext';
// import {DataTableModule} from 'primeng/components/datatable/datatable';
// import {ButtonModule} from 'primeng/components/button/button';
// import {DialogModule} from 'primeng/components/dialog/dialog';
// import {RestaurantesDetailComponent} from "./components/restaurantes-detail.component";
// import {RestauranteAddComponent} from "./components/restaurante-add.component";
// import {RestauranteEditComponent} from "./components/restaurante-edit.component";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            app_routing_1.routing,
            primeng_1.InputTextModule,
            primeng_1.DataTableModule,
            primeng_1.ButtonModule,
            primeng_1.DialogModule
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            principal_component_1.PrincipalComponent,
            solicitud_component_1.SolicitudComponent,
            informe_component_1.InformeComponent,
            pasajes_component_1.PasajesComponent,
            nuevasolicitud_component_1.NuevasolicitudComponent,
            usuario_component_1.UsuarioComponent
        ],
        providers: [app_routing_1.appRoutingProviders],
        bootstrap: [app_component_1.AppComponent],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map