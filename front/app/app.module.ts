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
import {VersolicitudComponent} from "./components/versolicitud.component";

import { routing, appRoutingProviders } from './app.routing';
import {EditorModule, SharedModule, MultiSelectModule,CalendarModule, DropdownModule,TabViewModule,DataTableModule, PanelModule} from 'primeng/primeng';
import { CommonModule } from '@angular/common';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { DatePipe } from './pipes/formatDate.pipe';
import {ModalModule} from "ng2-modal";
import {FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports:      [ 
              BrowserModule, 
              HttpModule, 
              FormsModule, 
              routing, 
              CommonModule,
              PanelModule,
              DataTableModule,
              EditorModule,
              SharedModule,
              MultiSelectModule,
              CalendarModule,
              DropdownModule,
              TabViewModule,
              FileUploadModule,
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
              DatePipe,
              VersolicitudComponent
  ],
  providers:    [ appRoutingProviders],
  bootstrap:    [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]

})

export class AppModule { }
