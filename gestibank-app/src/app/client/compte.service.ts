import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Compte } from "../model/compte";

@Injectable({
  providedIn: 'root'
})

export class CompteService {
  private url = 'http://localhost:8080/GestiBank-back/compte';
 //private numCompte : numCompte;
  
  constructor(private http:HttpClient) { }
  
  getAll():Observable<Compte[]>  {
    return this.http.get<Compte[]>(this.url + "/getAll");
  }

  getByNum():Observable<Compte>{
    return this.http.get<Compte>(this.url + "/1");
  }

  addCompte():Observable<Compte[]>{
    return this.http.get<Compte[]>(this.url + "/create");
  }

  /*updateCompte():Observable<Compte[]>{
    return this.http.get<Compte[]>(this.url + "/update/" + numCompte);
  }

  deleteCompte():Observable<Compte[]>{
    return this.http.delete<Compte[]>(this.url + "/delete/" + numCompte);
  }*/

}
