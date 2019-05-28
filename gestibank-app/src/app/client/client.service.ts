import { Injectable } from '@angular/core';
import { Client} from '../model/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
	private url = ' http://localhost:8080/GestiBank-back/client/';


	/* private fakeClient: any = [
		new Client(0, "pwd", "Leault", "Jérémie", "jeremie.leault@gmail.com", "0706060606", "28 rue de GK", 69007, "Lyon", "celibataire", 0, 0 ),
		  new Client(1, "stephane", "Indienne", "Ananthee", "ana@gmail.com", "0606060606", "8 rue GK", 69007, "Lyon", "celibataire", 0, 1)
	]; */
	
  constructor(private http:HttpClient) { }



    getAll() :Observable<Client[]>  {
		/*const fakeClient = [
		  new Client(0, "pwd", "Leault", "Jérémie", "jeremie.leault@gmail.com", "0706060606", "28 rue de GK", 69007, "Lyon", "celibataire", 0, 0 ),
		  new Client(1, "stephane", "Indienne", "Ananthee", "ana@gmail.com", "0606060606", "8 rue GK", 69007, "Lyon", "celibataire", 0, 1)
		]*/
		return this.http.get<Client[]>(this.url + "getALL");
		}
		
		findById() :Observable<Client>  {
		
			return this.http.get<Client>(this.url + "id");
			}

	/*	addClient(client){
			this.fakeClient.push(client);
			console.log(this.fakeClient)
		}*/
}
