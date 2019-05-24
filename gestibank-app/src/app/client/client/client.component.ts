import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[] = []; 
 // adresse: Adresse[] = [];
  client: Client; 
  constructor(private service:ClientService) { }

  ngOnInit() {
    this.service.getAll().subscribe(data =>this.clients = data);

    //this.service.findById().subscribe(data =>this.client = data);
  }

}
