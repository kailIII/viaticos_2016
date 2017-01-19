import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SolicitudService{

	public url = "http://localhost/sistema_viaticos/back/web/app_dev.php";
	public identity;
	public token;

	constructor(private _http: Http){}

	GetCiudad(){
		// let json = JSON.stringify(user_to_login);
		// let params = "authorizarion="+token;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.get(this.url+"/buscar/ciudad")
		.map(res => res.json());
	}

	GetComisionado(){
		// let json = JSON.stringify(trans_to_search);
		// console.log(json);
		// let params = "authorizarion="+token;
		// let params = "json="+json+"&authorization="+token;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.get(this.url+"/buscar/persona")
		.map(res => res.json());

	}

	AddSolicitud(token,data){
		let json = JSON.stringify(data);
		// console.log(json);
		// let token = localStorage.getItem('token');
		let params = "json="+json+"&authorization="+token;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+"/solicitud/nuevo", params, {headers: headers})
		.map(res => res.json());

	}

		reporteSolicitud(token,data){
		let json = JSON.stringify(data);
		let params = "json="+json+"&authorization="+token;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
		return this._http.post(this.url+"/solicitud/reporte", params, {headers: headers})
		.map(res => res.json());

	}
}