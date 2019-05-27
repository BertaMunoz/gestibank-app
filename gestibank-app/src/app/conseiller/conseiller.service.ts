import { Injectable } from '@angular/core';
import { Conseiller} from "../model/conseiller";
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class ConseillerService {
  private url = "http://localhost:8080/GestiBank-back/conseiller/"
/*private fakeConseillers : any = [
      new Conseiller(0,"24/04/2019","TARDIOU","kim","tk@gmail.com","0700000000","5 rue de la fontaine",69000,"Lyon"),
      new Conseiller(1,"12/03/2019","stephane","stephane","stephane@gmail.com","0711111111","10 rue jean jaures",69000,"Lyon")
    ];*/
  constructor(private http:HttpClient ) { }

  getAll():Observable<Conseiller[]>  {
    return this.http.get<Conseiller[]>(this.url + "getAll");
    //return this.fakeConseillers;
   
  }
  addConseiller(conseiller):Observable<Conseiller[]>{
    return this.http.post<Conseiller[]>(this.url + "create",conseiller)
  }
 /* addConseiller(conseiller: { "mle": any; "dateEmbauche": any; "nom": any; "prenom": any; "email": any; "tel": any; "adresse": any; "codePostale": any; "ville": any; }) {
    throw new Error("Method not implemented.");
    return conseiller;
  }*/
 // addConseiller(conseiller){
   // this.fakeConseillers.push(conseiller);
   
  //  console.log(this.fakeConseillers);
 // }

 findConseillerById(mle):Observable<Conseiller[]>{
  return this.http.get<Conseiller[]>(this.url + mle);
 }

  delete(mle){
    return this.http.delete<Conseiller[]>(this.url +"delete/"+mle);
  /*  for(let i = 0; i < this.fakeConseillers.length; ++i){
      
      if (this.fakeConseillers[i].mle == mle) { 
        this.fakeConseillers.splice(i,1);
      }
    }
    console.log(this.fakeConseillers);*/
  }
}
