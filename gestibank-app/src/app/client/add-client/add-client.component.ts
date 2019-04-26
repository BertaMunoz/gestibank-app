import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '../client.service'

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

  onSubmit(compteItem) {
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
    this.clientService.addClient(compte);
  }
}

