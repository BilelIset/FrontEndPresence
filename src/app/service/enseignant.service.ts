import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ens } from '../model/Ens';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  url='https://back.apirest.tech/ens';

  constructor(private http :HttpClient)
  { }
  getEns() :Observable<Array<Ens>>
  {
  return this.http.get<Array<Ens>> (this.url);
  }
 
  
  updateEns(mat: number | undefined, nouveau: Ens)
   {
  return this.http.put(this.url+"/update?mat="+mat,nouveau);
  }
}
