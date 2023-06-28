import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {

  }

  getUser(){
    console.log("test call");
    //TODO add localhost url
    return this.httpClient.get<User[]>("url");
  }
}
