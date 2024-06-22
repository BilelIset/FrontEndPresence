import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LigneAbsence } from '../model/LigneAbsence';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url="http://localhost:8085/absence"

  constructor(private http :HttpClient)
  { }
  getAbsence() :Observable<Array<LigneAbsence>>{
  
  return this.http.get<Array<LigneAbsence>> (this.url);
}
}