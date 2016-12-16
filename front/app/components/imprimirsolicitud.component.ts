import {Component} from '@angular/core';

@Component({
	selector: 'imprimir_solicitud',
	templateUrl: 'app/view/imprimirsolicitud.html',
})
export class ImprimirsolicitudComponent {
  pdfSrc: string = '/pdf-test.pdf';
  page: number = 1;
}
