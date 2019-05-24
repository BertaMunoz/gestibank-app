import { Injectable } from '@angular/core';
import { Compte } from "../model/compte";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private url = 'http://localhost:8081/GestiBank-back/compte';
  
  constructor(private http:HttpClient) { }
  
  getAll():Observable<Compte[]>  {
    return this.http.get<Compte[]>(this.url + "/getAll");
  }

  getByNum():Observable<Compte[]>{
    return this.http.get<Compte[]>(this.url + "/getByNum");
  }

  addCompte():Observable<Compte[]>{
    return this.http.get<Compte[]>(this.url + "/create");
  }

  updateCompte():Observable<Compte[]>{
    return this.http.get<Compte[]>(this.url + "/update/{numCompte}");
  }

  deleteCompte():Observable<Compte[]>{
    return this.http.delete<Compte[]>(this.url + "/delete/{numCompte}");
  }

}
