import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url='http://back.apirest.tech/';

  constructor(private http:HttpClient) { }
  connect(user:any):Observable<any>{
    return this.http.post(this.url+'login',user)
  }
  
}
