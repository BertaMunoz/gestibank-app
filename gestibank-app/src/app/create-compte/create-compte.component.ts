import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-compte',
  templateUrl: './create-compte.component.html',
  styleUrls: ['./create-compte.component.css']
})
export class CreateCompteComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }

  addSession(sessionItem) {
    console.log(sessionItem['name']);
    const session = {
      "name": sessionItem['name'],
      "theme": sessionItem['theme'],
      "date": sessionItem['date'],
      "duree": sessionItem['duree'],
      "adress": sessionItem['adress'],
      "participants": sessionItem['participants'],
      "isCompleted": false
    };
  }
}
