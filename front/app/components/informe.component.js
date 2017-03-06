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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import $ = require('jquery')
// declare var jQuery:any;
// var jQuery:any = require("jquery");
//
var InformeComponent = (function () {
    function InformeComponent(elRef) {
        this.elRef = elRef;
        this.titulo = "Componente de Informe";
    }
    // ngAfterViewInit() {
    //       jQuery('button').click();
    //   }
    InformeComponent.prototype.ngOnInit = function () {
        this.myRowData = [
            { "name": "Ronald Bowman", "country": "China", "city": "Lutou", "email": "rbowman0@spotify.com" },
            { "name": "Pamela Hill", "country": "Russia", "city": "Krylovskaya", "email": "phill1@symantec.com" },
            { "name": "Robin Andrews", "country": "Ukraine", "city": "Korop", "email": "randrews2@photobucket.com" },
            { "name": "Peter Kim", "country": "Mexico", "city": "San Jose", "email": "pkim3@theatlantic.com" },
            { "name": "Carol Foster", "country": "Mexico", "city": "El Aguacate", "email": "cfoster8@intel.com" },
            { "name": "Jimmy Burke", "country": "Indonesia", "city": "Banjarsari", "email": "jburke9@over-blog.com" },
            { "name": "Jonathan Crawford", "country": "Peru", "city": "Alca", "email": "jcrawforda@deliciousdays.com" },
            { "name": "Donald Montgomery", "country": "Poland", "city": "Działoszyce", "email": "dmontgomeryb@google.com.br" },
            { "name": "Donna Shaw", "country": "Japan", "city": "Akune", "email": "dshawc@chronoengine.com" },
            { "name": "Helen King", "country": "United States", "city": "Hollywood", "email": "hkingd@devhub.com" },
            { "name": "Walter Myers", "country": "China", "city": "a ndaowa n", "email": "wmyerse@state.tx.us" },
            { "name": " Alice Collins", "country": "Papua Nw  Guine a", "city": "Mendi", "email": "acollinsf@npr.org" },
            { "name": "Anne Richards", "country": "China", "city": "Koramlik", "email": "arichardsu@vinaora.com" },
            { "name": "Randy Miller", "country": "Indonesia", "city": "Trenggulunan", "email": "rmillerv@oakley.com" },
            { "name": "Phillip Adams", "country": "Bahamas", "city": "Duncan Town", "email": "padamsw@lycos.com" },
            { "name": "Nicholas Allen", "country": "Philippines", "city": "Bautista", "email": "nallenx@aboutads.info" },
            { "name": "Lisa Willis", "country": "Thailand", "city": "Lat Yao", "email": "lwillisy@istockphoto.com" },
            { "name": "Jeffrey Castillo", "country": "Indonesia", "city": "Karangsari", "email": "jcastilloz@washington.edu" },
            { "name": "Michael Carpenter", "country": "Colombia", "city": "Cali", "email": "mcarpenter13@prlog.org" },
            { "name": "Roger Lee", "country": "France", "city": "Courtaboeuf", "email": "rlee14@earthlink.net" },
            { "name": "Steve Wallace", "country": "Russia", "city": "Novobeysugskaya", "email": "swallace15@cisco.com" },
            { "name": "Shirley Patterson", "country": "Peru", "city": "La Tinguiña", "email": "spatterson16@woothemes.com" },
            { "name": "Nancy Ward", "country": "Sweden", "city": "Båstad", "email": "nward17@mapquest.com" }
        ];
        this.columnDefs = [
            { header: 'Nombre', field: "name", width: 200 },
            { header: 'Pais', field: "country", width: 180 },
            { header: 'Ciudad', field: "city", width: 160 },
            { header: 'correo', field: "email", width: 300 }
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
    };
    return InformeComponent;
}());
InformeComponent = __decorate([
    core_1.Component({
        selector: 'informe',
        templateUrl: 'app/view/informe.html'
        // providers: [LoginService]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], InformeComponent);
exports.InformeComponent = InformeComponent;
//# sourceMappingURL=informe.component.js.map