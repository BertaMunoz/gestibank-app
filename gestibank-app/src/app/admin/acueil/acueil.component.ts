import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acueil',
  templateUrl: './acueil.component.html',
  styleUrls: ['./acueil.component.css']
})
export class AcueilComponent implements OnInit {

  listeNotif = [
    {
      date : "2018-04-21", nom : "tardiou", prenom : "kim", choix: "choisir conseiler"
    },
    {
      date : "2018-04-21", nom : "munoz", prenom : "berta", choix: "choisir conseiler"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
