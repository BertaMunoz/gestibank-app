import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande-chequier',
  templateUrl: './commande-chequier.component.html',
  styleUrls: ['./commande-chequier.component.css']
})
export class CommandeChequierComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  commandeChequierForm(cmdItem) {
    console.log(cmdItem['name']);
    const cmd = {
      "TypeChequier": cmdItem['TypeChequier'],
      "nombrePages": cmdItem['nombrePages']
    };
  }
}
