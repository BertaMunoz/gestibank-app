import { Component, OnInit } from '@angular/core';
import {  ConseillerService } from '../../conseiller/conseiller.service';
import {Conseiller} from '../../model/conseiller';

@Component({
  selector: 'app-gestion-conseiller',
  templateUrl: './gestion-conseiller.component.html',
  styleUrls: ['./gestion-conseiller.component.css']
})
export class GestionConseillerComponent implements OnInit {


  listConseillers : Conseiller[] = [];
// lcs: ConseillerService;
  conseiller: Conseiller ;

  constructor( private service:ConseillerService ) {
    
    //this.lcs = new ConseillerService();
  }
  

  ngOnInit() {
    this.service.getAll().subscribe(data =>this.listConseillers = data);
 /*   this.listConseillers = this.lcs.getAll();
    console.log(this.listConseillers);*/
  }
  deleteRow(mle){    
  
   //  this.lcs.delete(mle);
     this.service.delete(mle).subscribe(data =>this.listConseillers = data);
  }
 /* update(){
    this.listConseillers = this.lcs.getAll();

    console.log("coucou");
    console.log(this.lcs.getAll());
  }*/
  addNewConseiller(conseillerItem) {
    console.log(conseillerItem['mle']);

    const conseiller = {
     /* "mle": conseillerItem['mle'],
      "dateEmbauche": conseillerItem['dateEmbauche'],*/
      "nom": conseillerItem['nom'],
      "prenom": conseillerItem['prenom'],
      "email": conseillerItem['email'],
      "tel": conseillerItem['tel'],
     /* "adresse": conseillerItem['adresse'],
      "codePostale": conseillerItem['codePostale'],
      "ville": conseillerItem['ville']*/
    };    
    this.service.addConseiller(conseiller).subscribe(data =>this.listConseillers = data);
  }
  
}
