import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router) {}

  deconnecter() {
    localStorage.removeItem('login');
    this.router.navigate(['/login']);
  }
loggedUser=localStorage.getItem('login')?.toUpperCase();
  isLoggedIn(): boolean {
    return !!localStorage.getItem('login'); // Vérifie si 'login' est présent dans localStorage
  }
}
