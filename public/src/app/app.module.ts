import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { SinglePollComponent } from './single-poll/single-poll.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import {HttpService } from './http.service';
import {PollService } from './poll.service';
const routes: Routes = [
    {path: "", pathMatch: 'full', component: LandingComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "poll/:id", component: SinglePollComponent},
  {path: "create", component: CreatePollComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreatePollComponent,
    DashboardComponent,
    LandingComponent,
    SinglePollComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpService, PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
