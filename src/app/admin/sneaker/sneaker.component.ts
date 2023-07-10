import { Component, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/model/Sneaker';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-sneaker',
  templateUrl: './sneaker.component.html',
  styleUrls: ['./sneaker.component.css']
})
export class SneakerComponent implements OnInit {
  sneakers: Array<Sneaker> = new Array<Sneaker>();
  sneakerReceived: Array<Sneaker> = new Array<Sneaker>;
  selectedSneaker: Sneaker= new Sneaker();
  action:string="";
  constructor(
    private httpClientService:HttpClientService,

  ){

  }

  ngOnInit(){
    // this.sneakers = new Array<Sneaker>()
    this.httpClientService.getSneaker().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response:any){
    this.sneakers = response;
    if(this.sneakers.length ===0)
    this.sneakers.push(new Sneaker());
  }

  setSneaker(id:any){
    console.log("add id");
  }

}
