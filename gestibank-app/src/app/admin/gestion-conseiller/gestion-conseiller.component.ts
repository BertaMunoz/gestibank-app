import { Component, OnInit } from '@angular/core';
import {  ConseillerService } from '../../conseiller/conseiller.service';
import {Conseiller} from '../../model/conseiller';

@Component({
  selector: 'app-gestion-conseiller',
  templateUrl: './gestion-conseiller.component.html',
  styleUrls: ['./gestion-conseiller.component.css']
})
export class GestionConseillerComponent implements OnInit {


  listConseillers =  [];
  lcs: ConseillerService;

  constructor(  ) {
    
    this.lcs = new ConseillerService();
  }

  ngOnInit() {
    this.listConseillers = this.lcs.getAll();
    console.log(this.listConseillers);
  }
  deleteRow(mle){
    for(let i = 0; i < this.listConseillers.length; ++i){
        if (this.listConseillers[i].mle === mle) {
            this.listConseillers.splice(i,1);
        }
    }
  }
}
