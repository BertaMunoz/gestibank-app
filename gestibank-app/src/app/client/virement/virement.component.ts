import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  demandeVirementForm(dmdItem) {
    console.log(dmdItem['name']);
    const dmd = {
      "date": dmdItem['date'],
      "numeroCompte": dmdItem['numeroCompte'],
      "libelle": dmdItem['libelle'],
      "somme": dmdItem['somme']
    };
  }
}
