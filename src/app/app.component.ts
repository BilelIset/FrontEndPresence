import { Component, Inject } from '@angular/core';
import { User } from './model/User';
import { NgForm } from '@angular/forms';
import { LoginService } from './service/login.service';
import { Resp } from './model/Resp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private  logserv:LoginService){}
connecter(form:NgForm) {
  this.logserv.connect(form.value).subscribe(data=>{
    this.resp=data;
    console.log(this.resp)

  })
  
  
}
resp=new Resp();
  title = 'presence';
userToLog=new User();
}
