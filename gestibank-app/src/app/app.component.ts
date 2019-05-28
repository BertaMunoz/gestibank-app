import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gestibank-app';

  constructor(private userService: UserService){}
  
  ngOnInit(): void {
    
  }

  userConnect(UserItem) {
    console.log(UserItem['name']);

    const user = {
      "login": UserItem["login"],
      "motDePasse": UserItem["motDePasse"]
    };
    this.userService.connection(user);
  }

}
