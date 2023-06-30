import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import {User} from '../../model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users?: Array<User>
  selectedUser?: User;
  action?: string;
  constructor(private httpClientService: HttpClientService,
    private router: Router,
    private acticatedRoute: ActivatedRoute){}


  handleSuccessfulResponse(response:any){
    this.users = response;
  }

  addUser(){
    this.selectedUser = new User();
    this.router.navigate(['admin','users'],{queryParams:{action:'add'}});
  }

  refreshData(){
    this.httpClientService.getUser().subscribe(
      response=> this.handleSuccessfulResponse(response),
    )

    this.acticatedRoute.queryParamMap.subscribe(params=>{
        this.action = params.get('action')!
    });
  }
  ngOnInit(){
    this.refreshData();
    // this.users = new Array<User>();

    // //dummy user
    // const user1 = new User();
    // user1.id = 1;
    // user1.name = "user1";
    // user1.password = "admin";
    // user1.password = "passAdmin";

    // const user2 = new User();
    // user2.id = 2;
    // user2.name = "user2";
    // user2.type = "user";
    // user2.password = "passUser"

    // //append elements to array
    // this.users.push(user1);
    // this.users.push(user2);

  }
}
