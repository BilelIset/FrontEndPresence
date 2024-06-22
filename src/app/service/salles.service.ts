import { HttpClient } from '@angular/common/http';
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
  getSalles() :Observable<Array<Salle>>
  {
  return this.http.get<Array<Salle>> (this.url);
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