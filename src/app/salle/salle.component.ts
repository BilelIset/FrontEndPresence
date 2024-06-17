import { Component, OnInit } from '@angular/core';
import { SallesService } from '../service/salles.service';
import { Salle } from '../model/Salle';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrl: './salle.component.css'
})
export class SalleComponent implements OnInit {
  salleList :any[]=[];
idRechercher={salle1:'',nom_salle:'',nomdepsalle:''};

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
filtre(): any[] {
  let filteredList = this.salleList;

  if (this.idRechercher.salle1 !== null) {
    filteredList = filteredList.filter(item =>
      item.salle1.toString().includes(this.idRechercher.salle1.toString())
    );
  }

  if (this.idRechercher.nom_salle !== '') {
    filteredList = filteredList.filter(item =>
      item.nom_salle.toLowerCase().includes(this.idRechercher.nom_salle.toLowerCase())
    );
  }

  if (this.idRechercher.nomdepsalle !== '') {
    filteredList = filteredList.filter(item =>
      item.nomdepsalle.toLowerCase().includes(this.idRechercher.nomdepsalle.toLowerCase())
    );
  }

  return filteredList;
}

}