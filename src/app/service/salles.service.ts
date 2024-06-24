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
  deleteSalle(idP: number|undefined)
  {
  return this.http.delete (this.url+idP);
  }
  addSalle(nouveau: Salle) 
   {
  return this.http.post<Array<Salle>> (this.url,nouveau);
  }
  updateSalle(idP: number | undefined, nouveau: Salle)
   {
  return this.http.put(this.url+idP,nouveau);
  }
  
}