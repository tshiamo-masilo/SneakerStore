import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import {User} from "../../../model/User";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  @Input()
  user?: User;

  @Output()
  userAddEvent = new EventEmitter();

  newUser?: User;
  message?: string;
  password?: string;

  constructor(private httpClientService:HttpClientService,
    private router:Router){

  }

  ngOnInit(){
    this.newUser = Object.assign({},this.user);
  }

  addUser(){
    if(this.user ===undefined){
      this.user = new User();
    }
    this.httpClientService.addUser(this.user).subscribe(
      (user)=>{
        this.router.navigate(['admin','users']);
      }
    )
  }


}
