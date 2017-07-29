import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service'
import {PollService} from '../poll.service'
import {User} from "../user"
import {Poll} from "../poll"
import {FilterPipe} from '../filter.pipe';

import { Router, RouterModule, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = "Current Polls"
  polls: Poll[] = []
  user: User;
  searchStr: string = '';
  yours;
  constructor(public _http: HttpService, public _poll: PollService,  public _router: Router) {
    this.user = _http.currentUser;
   }

  ngOnInit() {
    console.log("dis you", this.user)
    this.findAllPolls();
  }

  findAllPolls(){
    this._poll.find()
    .then((data) => {
      console.log("this is calllback for error", data)
      this.polls = data;
      if(this.user){
        this.yours = true;
      }
    })
    .catch((err) => {
      console.log("error retrieving messages", err)

    })
  }

  deletingPoll(thatpoll){
    this._poll.delete(thatpoll)
    .then((data) => {
      console.log("this is calllback for error", data)
    })
    .catch((err) => {
      console.log("error retrieving messages", err)

    })
  }

  search;
  Search(){
    console.log(this.search)
    return this._poll.findQuestion(this.search)
    .then(
      (data) => {
        console.log("this is calllback for error", data)
        this.polls= data;  

   
         
      }
    )
    .catch((err) => {
      console.log("error retrieving bikes", err)

    })    
  }

}
