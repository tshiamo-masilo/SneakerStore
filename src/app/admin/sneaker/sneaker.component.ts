import { Component, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/model/Sneaker';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-sneaker',
  templateUrl: './sneaker.component.html',
  styleUrls: ['./sneaker.component.css']
})
export class SneakerComponent implements OnInit {
  sneakers?: Array<Sneaker>;

  constructor(
    private httpClientService:HttpClientService,

  ){

  }

  ngOnInit(){
    // this.sneakers = new Array<Sneaker>()
    this.httpClientService.getBooks().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response:any){
    this.sneakers = response;
  }

}
