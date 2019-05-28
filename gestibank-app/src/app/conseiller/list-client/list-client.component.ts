import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client/client.service';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  clients: Client[] = []; 
  // adresse: Adresse[] = [];
   client: Client; 
   constructor(private service:ClientService) {
     
   this.service.getAll().subscribe(data =>this.clients = data);

    }

  ngOnInit() {
  }

}
