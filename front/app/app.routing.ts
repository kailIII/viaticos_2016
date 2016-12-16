import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PrincipalComponent} from "./components/principal.component";
import {InformeComponent} from "./components/informe.component";
import {PasajesComponent} from "./components/pasajes.component";
import {SolicitudComponent} from "./components/solicitud.component";
import {UsuarioComponent} from "./components/usuario.component";
import {NuevasolicitudComponent} from "./components/nuevasolicitud.component";
import {LoginComponent} from "./components/login.component";
import {ImprimirsolicitudComponent} from "./components/imprimirsolicitud.component";
// import { AppComponent }  from './app.component';

// import {AppComponent} from "./app.component";

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	},
	// {path: "/", component: LoginComponent},
	{path: "", component: LoginComponent},
	{path: "principal", component: PrincipalComponent},
	{path: "solicitud", component: SolicitudComponent},
	{path: "informe", component: InformeComponent},
	{path: "pasajes", component: PasajesComponent},
	{path: "nueva_solicitud", component: NuevasolicitudComponent},
	{path: "usuario", component: UsuarioComponent},
	{path: "imprimir_solicitud", component: ImprimirsolicitudComponent},

	// {path: "crear-restaurante", component: RestauranteAddComponent},
	// {path: "editar-restaurante/:id", component: RestauranteEditComponent},
	// {path: "donde-como-hoy/:random", component: RestaurantesDetailComponent},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);