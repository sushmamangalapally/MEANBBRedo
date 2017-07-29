import { Injectable } from '@angular/core';
import {User} from "./user";
import 'rxjs/Rx'
import {Http} from '@angular/http';
@Injectable()
export class HttpService {

  currentUser: User = null;
  constructor(public _http: Http) { }
  loginUser(user: User){
    console.log(user, "user registeration from service")
    this.currentUser = user;
    return this._http.post('/register', user).map(data => data.json()).toPromise();
  }

  findtheUser(thatuser){
    console.log("we're finding user for logging in from http.service.ts")
    this.currentUser = thatuser;
    return this._http.post('/findinguser', thatuser).map(data=>data.json()).toPromise();
  }

}
