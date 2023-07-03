import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/User';
import { Sneaker } from '../model/Sneaker';

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

  addUser(newUser:User){
    return this.httpClient.post<User>("add user url",newUser);
  }

  deleteUser(id: any){
    return this.httpClient.delete<User>("localhost//"+id);
  }

  getBooks(){
    return this.httpClient.get<Sneaker[]>("urllinkto get all books");
  }

}
