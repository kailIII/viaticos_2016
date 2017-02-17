import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { Router, ActivatedRoute, Params } from '@angular/router';
import * as $ from 'jquery';
// import $ = require('jquery')
// declare var jQuery:any;
// var jQuery:any = require("jquery");
//

@Component({
	selector: 'informe',
	templateUrl: 'app/view/informe.html'
	// providers: [LoginService]
})

export class InformeComponent implements OnInit{

	public titulo = "Componente de Informe";
	public identity;
	public token;
	// public funcionario;
	// public errorMessage;
	// public status;
	// public info;
	// public datoMenu;
	// public datoMenuIteracion;
	// public datoMenuMostrar: Array<any>;
	// @ViewChild('input') input: ElementRef;
	// elementRef: ElementRef;
	public myRowData;
	public columnDefs;

	constructor(
		private elRef: ElementRef
		) { }
	 // ngAfterViewInit() {
  //       jQuery('button').click();
  //   }
	ngOnInit() { 
    this.myRowData = [
        {"name":"Ronald Bowman","country":"China","city":"Lutou","email":"rbowman0@spotify.com"},
        {"name":"Pamela Hill","country":"Russia","city":"Krylovskaya","email":"phill1@symantec.com"},
        {"name":"Robin Andrews","country":"Ukraine","city":"Korop","email":"randrews2@photobucket.com"},
        {"name":"Peter Kim","country":"Mexico","city":"San Jose","email":"pkim3@theatlantic.com"},
        {"name":"Carol Foster","country":"Mexico","city":"El Aguacate","email":"cfoster8@intel.com"},
        {"name":"Jimmy Burke","country":"Indonesia","city":"Banjarsari","email":"jburke9@over-blog.com"},
        {"name":"Jonathan Crawford","country":"Peru","city":"Alca","email":"jcrawforda@deliciousdays.com"},
        {"name":"Donald Montgomery","country":"Poland","city":"Działoszyce","email":"dmontgomeryb@google.com.br"},
        {"name":"Donna Shaw","country":"Japan","city":"Akune","email":"dshawc@chronoengine.com"},
        {"name":"Helen King","country":"United States","city":"Hollywood","email":"hkingd@devhub.com"},
        {"name":"Walter Myers","country":"China","city":"a ndaowa n", "email":"wmyerse@state.tx.us"},
        {"name":" Alice Collins","country":"Papua Nw  Guine a", "city":"Mendi","email":"acollinsf@npr.org"},
        {"name":"Anne Richards","country":"China","city":"Koramlik","email":"arichardsu@vinaora.com"},
        {"name":"Randy Miller","country":"Indonesia","city":"Trenggulunan","email":"rmillerv@oakley.com"},
        {"name":"Phillip Adams","country":"Bahamas","city":"Duncan Town","email":"padamsw@lycos.com"},
        {"name":"Nicholas Allen","country":"Philippines","city":"Bautista","email":"nallenx@aboutads.info"},
        {"name":"Lisa Willis","country":"Thailand","city":"Lat Yao","email":"lwillisy@istockphoto.com"},
        {"name":"Jeffrey Castillo","country":"Indonesia","city":"Karangsari","email":"jcastilloz@washington.edu"},
        {"name":"Michael Carpenter","country":"Colombia","city":"Cali","email":"mcarpenter13@prlog.org"},
        {"name":"Roger Lee","country":"France","city":"Courtaboeuf","email":"rlee14@earthlink.net"},
        {"name":"Steve Wallace","country":"Russia","city":"Novobeysugskaya","email":"swallace15@cisco.com"},
        {"name":"Shirley Patterson","country":"Peru","city":"La Tinguiña","email":"spatterson16@woothemes.com"},
        {"name":"Nancy Ward","country":"Sweden","city":"Båstad","email":"nward17@mapquest.com"}
    ];
 
    this.columnDefs = [
        {header: 'Nombre', field: "name", width: 200 },
        {header: 'Pais', field: "country" ,width:180},
        {header: 'Ciudad', field: "city" ,width:160},
        {header: 'correo', field: "email" ,width:300}
    ];

    // this.columnDefs = JSON.stringify(this.myRowData);

// this.columnDefs = this.myRowData;
		// jQuery(this.elRef.nativeElement).find('table').on('click',function(){
			// let tabla = (<HTMLInputElement>document.getElementById("hazclick")).value;
			// // console.log(tabla);
			//    $('#'+tabla+'').DataTable( { //CONVERTIMOS NUESTRO LISTADO DE LA FORMA DEL JQUERY.DATATABLES- PASAMOS EL ID DE LA TABLA
   //      "sPaginationType": "full_numbers" //DAMOS FORMATO A LA PAGINACION(NUMEROS)
   //  } );

		// });
// // $('#elemId')
// // css('color','red');
// $('button').click();
	}

}