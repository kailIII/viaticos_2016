import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { Router, ActivatedRoute, Params } from '@angular/router';
import {LoginService} from '../services/login.service';
import {SolicitudService} from '../services/solicitud.service';
import {TabMenuModule,MenuItem} from 'primeng/primeng';

///<reference path="../typings/globals/jquery/index.d.ts">
// declare var jQuery:any;
declare var jQuery:any;
// import * as $ from 'jquery';

@Component({
	selector: 'solicitud',
	templateUrl: 'app/view/solicitud.html',
	providers: [LoginService, SolicitudService]
})

export class SolicitudComponent {

	public titulo = "Solicitud";
	public identity;
	public funcionario;
	public errorMessage;
	public status;
	public info;
	public datoSol;
	public datoSolIteracion;
	public datoSolMostrar: Array<any>;
	public NoMostrar;
	public token;
	public detalleSol: boolean;
	private items: MenuItem[];
	// private activeItem: MenuItem;
	// public solicitudpropia;
	// private realizadas: any[];
	// @ViewChild('input') input: ElementRef;



	constructor(
		private _loginService: LoginService,
		private _solicitudService: SolicitudService
		){
	}

	ngOnInit(){
		this.detalleSol = false;
		this.identity = this._loginService.getIdentity();
		this.token = this._loginService.getToken();

		this.funcionario = {
			'fun_id': this.identity.sub
		};
		this.OnVerDetalleSol();	

		// this.OnTabSol();
		// this.OnPaginacion("muestra_datos");
	}

	// OnPaginacion(id){
	// 	$('#'+id+"'").DataTable( { //CONVERTIMOS NUESTRO LISTADO DE LA FORMA DEL JQUERY.DATATABLES- PASAMOS EL ID DE LA TABLA
 //        "sPaginationType": "full_numbers" //DAMOS FORMATO A LA PAGINACION(NUMEROS)
 //    } );
	// }

OnTabSol(){
	this.items = [
            {label: 'Solicitudes realizadas'},
            {label: 'Solicitudes por firmar'},
            {label: 'Historial de solicitudes'},
            // {label: 'Support', icon: 'fa-support'},
            // {label: 'Social', icon: 'fa-twitter'}
        ];
}
// OnDetalleSolicitudRealizados(){
// 	$(document).ready(function(){
//     $('#muestra_datos').dataTable();
// });
// }

//esto es con subscribe
	OnVerDetalleSol(){
		this._solicitudService.reporteSolicitud(this.token,this.funcionario).subscribe(
			response => {
				let info = response;
				this.info = info;
				if(this.info.length <=0){
					this.NoMostrar = "No existen solicitudes realizadas";
					return this.NoMostrar;
				}else{ 	
					if(!this.info.status){
						this.datoSol = "";
						var length = this.info.length;
						for (var i = 0; i < length; i++) {
							this.datoSolIteracion = JSON.stringify(this.info[i]);
							if(this.datoSol == ""){
								this.datoSol = this.datoSolIteracion;
							}else{
								this.datoSol = this.datoSol+","+this.datoSolIteracion;
							}
						};  
						this.datoSolMostrar = JSON.parse("["+this.datoSol+"]");  
						// console.log("datoSolMostrar:"+this.datoSol);
						// console.log("datoSolMostrar:"+new Date(this.datoSolMostrar[0].solFecharealizacion).toLocaleDateString());
						// this.datoSolMostrar = this.datoSol;

						return this.datoSolMostrar;
						// return this.datoSol;

					}
				}
			},error => {
				this.errorMessage = <any>error;

				if(this.errorMessage != null){
					console.log(this.errorMessage);
					alert("Error en la peticion de solicitudes");
				}
			});
	}

	OnMostrarDetalle(){
		this.detalleSol = true;
	}

	OnbotonAtrasSolicitud(){
		this.detalleSol = false;
	}


}

