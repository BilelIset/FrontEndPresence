import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ens } from '../model/Ens';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  url='https://back.apirest.tech/ens';

  constructor(private http :HttpClient)
  { }
   httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json'
    })
  
  }; 
   getEns() :Observable<Array<Ens>>
  {
     
  return this.http.post<Array<Ens>> (this.url,this.httpOptions);
  }
 
  
  updateEns(mat: number | undefined, nouveau: Ens)
   {
  return this.http.put(this.url+"/update?mat="+mat,nouveau);
  }
}
