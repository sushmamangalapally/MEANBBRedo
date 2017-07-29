import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import {HttpService} from '../http.service'
import {Router} from "@angular/router"

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  user: User = new User();
  constructor(public _http: HttpService, public _router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log("what's up in login from landing.component.ts")
    console.log(this.user, "logging in")
    this._http.loginUser(this.user)
    .then((data) =>{
      console.log(data, "callback from login request")
      this._router.navigate(['dashboard'])
    })
    .catch((err) => {
      console.log(err, "status was an error catch trigger")
    })
  }

}
