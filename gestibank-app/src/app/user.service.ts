import { Injectable } from '@angular/core';
import { User } from './model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  fakeUser = new User("admin", "admin");

  constructor(private route: Router) { }

  connection(fakeUser) {
    if(fakeUser.login == "admin" && fakeUser.motDePasse == "admin"){
      return this.route.navigate(['admin']);
    }
  }
}
