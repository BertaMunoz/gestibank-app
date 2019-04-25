import { Component, OnInit } from '@angular/core';
import {  ConseillerService } from '../../conseiller/conseiller.service';
import {Conseiller} from '../../model/conseiller';

@Component({
  selector: 'app-gestion-conseiller',
  templateUrl: './gestion-conseiller.component.html',
  styleUrls: ['./gestion-conseiller.component.css']
})
export class GestionConseillerComponent implements OnInit {


  listConseillers = [
    new Conseiller(0,"24/04/2019","TARDIOU","kim","tk@gmail.com","0700000000","5 rue de la fontaine",69000,"Lyon"),
    new Conseiller(1,"12/03/2019","stephane","stephane","stephane@gmail.com","0711111111","10 rue jean jaures",69000,"Lyon")
  ];
  constructor( ) {
  }

  ngOnInit() {}


}
