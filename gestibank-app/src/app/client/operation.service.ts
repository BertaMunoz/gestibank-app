import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operation } from '../model/operation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  
  private url = 'http://localhost:8081/GestiBank-back/operation';
  
  constructor(private http:HttpClient) { }
  
  getAll():Observable<Operation[]>  {
    return this.http.get<Operation[]>(this.url + "/getAll");
  }

  addOperation():Observable<Operation[]>{
    return this.http.get<Operation[]>(this.url + "/create");
  }
}
