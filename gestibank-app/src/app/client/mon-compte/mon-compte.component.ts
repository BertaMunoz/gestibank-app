import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  modifCompteForm(compteItem) {
    console.log(compteItem['name']);
    const compte = {
      "id": compteItem['id'],
      "motDePasse": compteItem['motDePasse'],
      "nom": compteItem['nom'],
      "prenom": compteItem['prenom'],
      "email": compteItem['email'],
      "telephone": compteItem['telephone'],
      "adresse": compteItem['adresse'],
      "codePostale": compteItem['codePostale'],
      "ville": compteItem['ville'],
      "situation": compteItem['situation'],
      "nombreEnfant": compteItem['nombreEnfant'],
      "nameConseiller": compteItem['nameConseiller'],
      "nCompte": compteItem['nCompte'],
      "typeCompte": compteItem['typeCompte'],
      "decouvert": compteItem['decouvert'],
      "plafond": compteItem['plafond']
    };
  }
}
