import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LigneAbsence } from '../model/LigneAbsence';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url="https://back.apirest.tech/absence"

  constructor(private http :HttpClient)
  { }
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json'
    })
  
  };
  getAbsence() :Observable<Array<LigneAbsence>>{
  
  return this.http.post<Array<LigneAbsence>> (this.url,this.httpOptions);
}
}