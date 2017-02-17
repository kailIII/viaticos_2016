import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {PrincipalComponent} from "./components/principal.component";
import {InformeComponent} from "./components/informe.component";
import {PasajesComponent} from "./components/pasajes.component";
import {NuevasolicitudComponent} from "./components/nuevasolicitud.component";
import {SolicitudComponent} from "./components/solicitud.component";
import {LoginComponent} from "./components/login.component";
import {UsuarioComponent} from "./components/usuario.component";
import { AppComponent }  from './app.component';
import {ImprimirsolicitudComponent} from "./components/imprimirsolicitud.component";

import { routing, appRoutingProviders } from './app.routing';
// import {InputTextModule, DataTableModule, ButtonModule, DialogModule} from 'primeng/primeng';
// import {DataTableModule} from "angular2-datatable";
import {EditorModule, SharedModule, MultiSelectModule,CalendarModule, DropdownModule,TabViewModule,DataTableModule, PanelModule} from 'primeng/primeng';
// import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { CommonModule } from '@angular/common';

import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { DatePipe } from './pipes/formatDate.pipe';

import {ModalModule} from "ng2-modal";
// import { ModalModule } from 'angular2-modal';
// import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

// import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
// import { DatepickerModule } from 'ng2-bootstrap';
// import { Ng2SmartTableModule } from 'ng2-smart-table';
// import {InputTextModule} from 'primeng/components/inputtext/inputtext';
// import {DataTableModule} from 'primeng/components/datatable/datatable';
// import {ButtonModule} from 'primeng/components/button/button';
// import {DialogModule} from 'primeng/components/dialog/dialog';


// import {RestaurantesDetailComponent} from "./components/restaurantes-detail.component";
// import {RestauranteAddComponent} from "./components/restaurante-add.component";
// import {RestauranteEditComponent} from "./components/restaurante-edit.component";


@NgModule({
  imports:      [ 
              BrowserModule, 
              HttpModule, 
              FormsModule, 
              routing, 
              CommonModule,
              PanelModule,
              // InputTextModule, 
              // DataTableModule, 
              // ButtonModule, 
              // DialogModule 
              DataTableModule/*,
              DatepickerModule*/
              ,
              EditorModule,
              SharedModule,
              MultiSelectModule,
              CalendarModule,
              DropdownModule,
              TabViewModule/*,
              AlertComponent*/
    //           , 
    // ModalModule.forRoot(),
    // BootstrapModalModule
    ,
    ModalModule
  ],
  declarations: [ 
              AppComponent,
              LoginComponent,
              PrincipalComponent,
              SolicitudComponent,
              InformeComponent,
              PasajesComponent,
              NuevasolicitudComponent,
              UsuarioComponent,
              PdfViewerComponent,
              ImprimirsolicitudComponent,
              DatePipe
  ],
  providers:    [ appRoutingProviders],
  bootstrap:    [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]

})

export class AppModule { }
