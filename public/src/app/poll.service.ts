import { Injectable } from '@angular/core';
import {User} from "./user";
import 'rxjs/Rx'
import {Http} from '@angular/http';
import {Poll} from './poll';
@Injectable()
export class PollService {

  constructor(public _http: Http) { }

  create(thepoll){
    console.log(thepoll, "this is create method for poll")
    return this._http.post('/creatingpoll', thepoll)
    .map(data => data.json())
    .toPromise();
  }

  find(){
    console.log("this is find method for poll")
    return this._http.get('/findallpolls')
    .map(data => data.json())
    .toPromise();
  }

  delete(thepoll){
    console.log(thepoll, "this is delete method for poll")
    return this._http.post('/deletinggpoll', thepoll)
    .map(data => data.json())
    .toPromise();
    
  }

  specificPoll(thatpoll){
    console.log(thatpoll)
    return this._http.post('/gettingthatgpoll', {thatpoll: thatpoll})
    .map(data => data.json())
    .toPromise();
  }

  voteOption(thatpoll, theoption, index){
    console.log(thatpoll)
    console.log(theoption)
    return this._http.post('/voting', {thatpoll: thatpoll, theoption: theoption, index: index})
    .map(data => data.json())
    .toPromise();
  }

  findQuestion(thatsearch){
    console.log("finding question in poll.service")
    return this._http.post('/searchquestion', {thatsearch: thatsearch})
    .map(data => data.json())
    .toPromise(); 
  }

}
