import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { NgForm } from '@angular/forms';
import { Resp } from '../../model/Resp';
import { User } from '../../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private logserv:LoginService){}
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
