import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ens } from '../model/Ens';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  url='https://back.apirest.tech/';

  constructor(private http :HttpClient)
  { }
   httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json'
    })
  
  }; 
   getEns() :Observable<Array<Ens>>
  {
     
  return this.http.post<Array<Ens>> (this.url+"ens",this.httpOptions);
  }
  sendEmail(to:string,subject:string,text:string,mat:string):Observable<any>{
    const params = new HttpParams()
    .set('to', to)
    .set('subject', subject)
    .set('text', text)
    .set('mat',mat);
    return this.http.post(this.url+"sendemail",params)

  }
 
  
  updateEns(mat: number | undefined, nouveau: Ens)
   {
  return this.http.put(this.url+"ens/update?mat="+mat,nouveau);
  }
}
