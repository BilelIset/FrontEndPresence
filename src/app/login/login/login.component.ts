import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { NgForm } from '@angular/forms';
import { Resp } from '../../model/Resp';
import { User } from '../../model/User';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Notez le 's' manquant précédemment
})
export class LoginComponent {
  resp: Resp = new Resp();
  userToLog: User = new User();

  constructor(private logserv: LoginService, private router: Router) {}

  connecter(form: NgForm) {
    if (form.invalid) {
alert("Formulaire invalide !!")   
   return;
    }
    this.logserv.connect(form.value).subscribe(
      data => {
        this.resp = data;
        localStorage.setItem("login",form.value.login)
        this.verifLogin(this.resp);
       
      }
    );
  }

  verifLogin(resp: Resp) {
    if (resp.admin && resp.statue) {
      this.router.navigate(['/menu']);
    } else {
    }
  }
}