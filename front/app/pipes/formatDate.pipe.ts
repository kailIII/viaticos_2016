import { Pipe, PipeTransform } from '@angular/core'
import * as moment from 'moment/moment'

@Pipe({
   name: 'formatDate'
})
export class DatePipe implements PipeTransform {
   transform(date: any, args?: any): any {

for(var i; i<date.length; i++){
   	var fecha = date[i].timestamp
   	console.log(fecha)
	
}


     // let d = new Date(JSON.stringify(fecha)).toLocaleString("en-US");
     // return d
     // return moment(d).format('d/M/YYYY HH:mm:ss')


   }
}