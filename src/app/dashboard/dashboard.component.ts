import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  listAbsence :any[]=[];
idRechercher: any;
  constructor(private abserv:DashboardService){}
  ngOnInit(): void {
this.abserv.getAbsence().subscribe(data=>{
  this.listAbsence=data;

})  }

}
