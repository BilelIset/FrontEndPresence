import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn() {
    throw new Error('Method not implemented.');
  }
  url='http://localhost:8085/';

  constructor(private http:HttpClient) { }
  connect(user:any):Observable<any>{
    return this.http.post(this.url+'login',user)
  }
  getUsers() :Observable<Array<Users>>
  {
  return this.http.get<Array<Users>> (this.url+'login/all');
  }
  deleteUsers(idP: number|undefined)
  {
  return this.http.delete (this.url+'login/delete?idUser='+idP);
  }
  addUsers(nouveau: Users) 
   {
  return this.http.post<Array<Users>> (this.url+'login/add',nouveau);
  }
  updateUsers(idP: number | undefined, nouveau: Users)
   {
  return this.http.put(this.url+'update?idUser='+idP,nouveau);
  }
  
}
