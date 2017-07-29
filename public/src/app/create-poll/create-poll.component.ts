import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service'
import {PollService} from '../poll.service'
import {User} from "../user"
import {Poll} from "../poll"
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
  user: User;
  gettinguserid;
  polls: Poll[] = []
  poll: Poll =  new Poll();
  constructor(public _http: HttpService, public _poll: PollService, private router: Router, private _route: ActivatedRoute) { 
    this.user = _http.currentUser;
  }

  ngOnInit() {
    console.log("in create poll")
      if(this.user){
      this._http.findtheUser(this.user).then(
        (data) => {
          console.log(data, "in callback dashboard method")
          console.log(data)
          this.gettinguserid = data.username;
        }
      )        
    }
  }

  CreatingPoll(){
    console.log("Creating bike", this.poll)
    console.log("the user of bike", this.gettinguserid)
    this.poll.userId = this.gettinguserid
    this._poll.create(this.poll)
      .then((data) => {
        console.log("calling in component data", data)
        console.log(data.bike, "dsdsdsd")
        console.log("bikes array", this.polls)
        this.polls.push(data.poll)
        this.poll = new Poll();
        this.router.navigate(['dashboard'])
      })
  }

}
