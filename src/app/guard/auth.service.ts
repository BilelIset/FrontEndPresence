import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated=false;

  constructor() { }
  checkAuthentication(): boolean {
    return this.isAuthenticated;
    
 }
}
