import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Operation } from '../model/operation';

@Injectable({
  providedIn: 'root'
})

export class OperationService {
  
  private url = 'http://localhost:8080/GestiBank-back/operation';
  
  constructor(private http:HttpClient) { }
  
  getAll():Observable<Operation[]>  {
    return this.http.get<Operation[]>(this.url + "/getAll");
  }

  addOperation():Observable<Operation[]>{
    return this.http.get<Operation[]>(this.url + "/create");
  }
}
