import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/model/compte';
import { CompteService } from '../compte.service';
import { Operation } from 'src/app/model/operation';
import { OperationService } from '../operation.service';

@Component({
  selector: 'app-accueil-client',
  templateUrl: './accueil-client.component.html',
  styleUrls: ['./accueil-client.component.css']
})
export class AccueilClientComponent implements OnInit {


  private currentCompte: Compte;
  private listOperations: Operation[] = []; 
  
  constructor(private serviceCpt: CompteService, private serviceOp: OperationService) { }

  ngOnInit() {
    this.serviceCpt.getByNum().subscribe((data) =>{
      this.currentCompte = data;
    });

    this.serviceOp.getAll().subscribe(data =>this.listOperations = data);
  }

}