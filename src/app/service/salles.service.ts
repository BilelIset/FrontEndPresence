import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salle } from '../model/Salle';

@Injectable({
  providedIn: 'root'
})
export class SallesService {
  url='https://back.apirest.tech/salle';

  constructor(private http :HttpClient)
  { }
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json'
    })
  
  }; 
  getSalles() :Observable<Array<Salle>>
  {
  return this.http.post<Array<Salle>> (this.url,this.httpOptions);
  }
  

  
  
  
}