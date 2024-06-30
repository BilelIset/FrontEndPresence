import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
loggedUser=localStorage.getItem('login')?.toUpperCase();
  isMobile: boolean=false;

  constructor(private router: Router) {}
  ngOnInit(): void {
this.checkScreenSize()  }
  

  deconnecter() {
    localStorage.removeItem('login');
    this.router.navigate(['/login']);
  }
  checkScreenSize() {
    if(  window.matchMedia('(max-width: 600px)').matches  )
      this.isMobile=true;
    
  }

}
