import { Component, OnInit } from '@angular/core';
import { ConseillerService } from 'src/app/conseiller/conseiller.service';

@Component({
  selector: 'app-add-conseiller',
  templateUrl: './add-conseiller.component.html',
  styleUrls: ['./add-conseiller.component.css']
})
export class AddConseillerComponent implements OnInit {

  constructor(private conseillerService: ConseillerService) { }
  
  ngOnInit() {
  }

  /*
  addConseiller(conseillerItem) {
    console.log(conseillerItem['mle']);
    const conseiller = {
      "mle": conseillerItem['mle'],
      "dateEmbauche": conseillerItem['dateEmbauche'],
      "nom": conseillerItem['nom'],
      "prenom": conseillerItem['prenom'],
      "email": conseillerItem['email'],
      "tel": conseillerItem['tel'],
      "adresse": conseillerItem['adresse'],
      "ville": conseillerItem['ville']
    };
    
    this.conseillerService.addConseiller(conseiller).subscribe(res => {
      console.log(res);
    }, (err) => {
      console.log(err);
    })
  }
  */

}
