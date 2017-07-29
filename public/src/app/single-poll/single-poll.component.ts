import { Component, OnInit } from '@angular/core';
import {User} from "../user"
import {Router, ActivatedRoute} from '@angular/router'
import {HttpService} from '../http.service'
import {PollService} from '../poll.service'
import {Poll} from '../poll'
@Component({
  selector: 'app-single-poll',
  templateUrl: './single-poll.component.html',
  styleUrls: ['./single-poll.component.css']
})
export class SinglePollComponent implements OnInit {
  pollid;
  info;
  question;
  options;
  constructor(public _http: HttpService, public _poll: PollService, private _route: ActivatedRoute, public _router: Router) { 
    this._route.params.subscribe((param)=>{
      console.log(param.id);
      this.pollid = param.id
    }) 
   }

  ngOnInit() {
    this.getthepoll(this.pollid);
  }

  getthepoll(pollid){
    this._poll.specificPoll(pollid)
    .then(data => {
      console.log("getting data from signle", data)
      this.info = data.thatpoll;
      this.question = data.thatpoll.question
      this.options = data.thatpoll.fouroptions
    })
  }

  voting(datoption, index){
    console.log(index)
    this._poll.voteOption(this.pollid, datoption ,index)
    .then(data => {
      console.log("getting data from voting", data)
    })
  }

}
