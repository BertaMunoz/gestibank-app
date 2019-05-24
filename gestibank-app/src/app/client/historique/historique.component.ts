import { Component, OnInit } from '@angular/core';
import { Operation } from 'src/app/model/operation';
import { OperationService } from '../operation.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  operation: Operation[] = []; 

  //operation: Operation; 
  constructor(private service: OperationService) { }

  ngOnInit() {
    this.service.getAll().subscribe(data =>this.operation = data);
  }

}
