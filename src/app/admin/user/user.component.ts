import { Component } from '@angular/core';
import {User} from '../../model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users?: Array<User>
  constructor(){}

  ngOnInit(){
    this.users = new Array<User>();

    //dummy user
    const user1 = new User();
    user1.id = 1;
    user1.name = "user1";
    user1.password = "admin";
    user1.password = "passAdmin";

    const user2 = new User();
    user2.id = 2;
    user2.name = "user2";
    user2.type = "user";
    user2.password = "passUser"

    //append elements to array
    this.users.push(user1);
    this.users.push(user2);

  }
}
