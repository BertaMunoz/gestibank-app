import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'createCompte',
  templateUrl: './create-compte.component.html',
  styleUrls: ['./create-compte.component.css']
})
export class CreateCompteComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }

  createCompteForm(compteItem) {
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
      "nombreEnfant": compteItem['nombreEnfant']
      
    };
  }
}
