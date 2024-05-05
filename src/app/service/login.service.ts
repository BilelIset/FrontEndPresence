import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url='https://ba31-196-187-152-254.ngrok-free.app/';

  constructor(private http:HttpClient) { }
  connect(user:any):Observable<any>{
    return this.http.post(this.url+'login',user)
  }
  
}
