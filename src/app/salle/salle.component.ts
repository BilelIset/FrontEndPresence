import { Component, OnInit } from '@angular/core';
import { SallesService } from '../service/salles.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrl: './salle.component.css'
})
export class SalleComponent implements OnInit {
  salleList :any[]=[];

  constructor(private salleserv:SallesService){}
  ngOnInit(): void {
    this.chargerSalles();
  }
;


 chargerSalles() {
this.salleserv.getSalles().subscribe(data=>{
  this.salleList=data;
  console.log(this.salleList)
})}

}