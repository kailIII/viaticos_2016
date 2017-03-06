import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService{

	public url = "http://localhost/sistema_viaticos/back/web/app_dev.php";
	public identity;
	public token;
	public je;

	constructor(private _http: Http){}

	signup(user_to_login){
		let json = JSON.stringify(user_to_login);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+"/login", params, {headers: headers})
		.map(res => res.json());

	}

	getIdentity(){
		let identity = JSON.parse(localStorage.getItem('identity'));
		// let identity = JSON.parse(sessionStorage.getItem('identity'));
		if(identity != "undefined"){
			this.identity = identity;
		}else{
			this.identity = null;
		}

		return this.identity;
	}

	getJe(){
		let je = localStorage.getItem('je');
		// console.log(je);
		// let identity = JSON.parse(sessionStorage.getItem('identity'));
		if(je != "undefined"){
			this.je = je;
		}else{
			this.je = null;
		}

		return this.je;
	}

	getToken(){
		let token = localStorage.getItem('token');
		// let token = sessionStorage.getItem('token');
		if(token != "undefined"){
			this.token = token;
		}else{
			this.token = null;
		}

		return this.token;
	}

	checkCredentials(token_to_check){

		let token = JSON.stringify(token_to_check);
		let params = "authorizarion="+token;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+"/revisar", params, {headers: headers})
		.map(res => res.json());
	} 

	menuUsuario(user_to_search){
		let json = JSON.stringify(user_to_search);
		let params = "json="+json+"&authorization="+this.getToken();
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+"/modulo_rol/buscar", params, {headers: headers})
		.map(res => res.json());

	}

	register(user_to_register){
		let json = JSON.stringify(user_to_register);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+"/user/new", params, {headers: headers})
		.map(res => res.json());

	}

	update_user(user_to_update){
		let json = JSON.stringify(user_to_update);
		let params = "json="+json+"&authorization="+this.getToken();
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+"/user/edit", params, {headers: headers})
		.map(res => res.json());

	}
	ver_user(user_to_view){
		let json = JSON.stringify(user_to_view);
		let params = "json="+json+"&authorization="+this.getToken();
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+"/persona/ver", params, {headers: headers})
		.map(res => res.json());

	}
}