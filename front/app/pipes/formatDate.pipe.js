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
var DatePipe = (function () {
    function DatePipe() {
    }
    DatePipe.prototype.transform = function (date, args) {
        for (var i; i < date.length; i++) {
            var fecha = date[i].timestamp;
            console.log(fecha);
        }
        // let d = new Date(JSON.stringify(fecha)).toLocaleString("en-US");
        // return d
        // return moment(d).format('d/M/YYYY HH:mm:ss')
    };
    return DatePipe;
}());
DatePipe = __decorate([
    core_1.Pipe({
        name: 'formatDate'
    }),
    __metadata("design:paramtypes", [])
], DatePipe);
exports.DatePipe = DatePipe;
//# sourceMappingURL=formatDate.pipe.js.map