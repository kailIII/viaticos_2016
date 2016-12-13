import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TransporteService{

	public url = "http://localhost/sistema_viaticos/back/web/app_dev.php";
	public identity;
	public token;

	constructor(private _http: Http){}

	getTipoTransporte(trans_to_search){
		let json = JSON.stringify(trans_to_search);
		let token = sessionStorage.getItem('token');
		let params = "json="+json+"&authorization="+token;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+"/transporte/buscar", params, {headers: headers})
		.map(res => res.json());

	}
}