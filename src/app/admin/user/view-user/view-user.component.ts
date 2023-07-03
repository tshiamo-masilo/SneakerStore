import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input()
  user: User = new User();

  @Output()
  userDeletedEvent = new EventEmitter();

  deleteUser(){
    this.httpClientService.deleteUser(this.user.id).subscribe(
      (user)=>{
        this.router.navigate(['admin', 'users']);
      }
    )
  }
}
