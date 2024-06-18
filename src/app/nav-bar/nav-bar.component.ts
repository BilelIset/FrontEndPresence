import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
loggedUser=localStorage.getItem('login')?.toUpperCase();

  constructor(private router: Router) {}
  

  deconnecter() {
    localStorage.removeItem('login');
    this.router.navigate(['/login']);
  }

}
