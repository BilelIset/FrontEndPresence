import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { User } from './model/User';
import { NgForm } from '@angular/forms';
import { LoginService } from './service/login.service';
import { Resp } from './model/Resp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,OnDestroy {

  constructor(){}
  ngOnDestroy(): void {
localStorage.removeItem("mat")  }
  ngOnInit(): void {
  }
user:any;
  isLoggedIn(): boolean {
    if(localStorage.getItem('login')!=null){
      this.user=localStorage.getItem('login')?.toUpperCase()

      return true
    }else{
      return false}
     
  }
resp=new Resp();
  title = 'presence';
userToLog=new User();
}