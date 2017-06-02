import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ClaveService{

	public url = "http://localhost/sistema_viaticos/back/web/app_dev.php";
	public identity;
	public token;

	constructor(private _http: Http){}

	CambiarClave(token_to_check){
		let json = JSON.stringify(token_to_check);
		let token = localStorage.getItem('token');
		let params = "json="+json+"&authorization="+token;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+"/clave/cambiar", params, {headers: headers})
		.map(res => res.json());
	}
}