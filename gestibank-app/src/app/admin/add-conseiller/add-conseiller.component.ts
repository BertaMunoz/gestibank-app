import { Component, OnInit } from '@angular/core';
import { ConseillerService } from 'src/app/conseiller/conseiller.service';
import { Conseiller } from 'src/app/model/conseiller';

@Component({
  selector: 'app-add-conseiller',
  templateUrl: './add-conseiller.component.html',
  styleUrls: ['./add-conseiller.component.css']
})
export class AddConseillerComponent implements OnInit {

  listConseillers : Conseiller[] = [];
  constructor(private conseillerService: ConseillerService) { }
  
  ngOnInit() {
    //this.conseillerService.getAll().subscribe(data =>this.listConseillers = data);
  }


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
    this.conseillerService.addConseiller(conseiller).subscribe(data =>this.listConseillers = data);
  }
}