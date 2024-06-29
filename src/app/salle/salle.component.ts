import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { SallesService } from '../service/salles.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrl: './salle.component.css'
})
export class SalleComponent implements OnInit {
  size=0
  salleList :any[]=[];
idRechercher={salle1:'',nom_salle:'',nomdepsalle:''};
  needsChangeDetection: boolean=false;

  constructor(private salleserv:SallesService,private change:ChangeDetectorRef ){}
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

  if (this.idRechercher.salle1 !== null && this.idRechercher.salle1 !== undefined) {
    filteredList = filteredList.filter(item =>
      item.salle1.toString().includes(this.idRechercher.salle1.toString())
    );
  }

  if (this.idRechercher.nom_salle && this.idRechercher.nom_salle !== '') {
    filteredList = filteredList.filter(item =>
      item.nom_salle.toLowerCase().includes(this.idRechercher.nom_salle.toLowerCase())
    );
  }

  if (this.idRechercher.nomdepsalle && this.idRechercher.nomdepsalle !== '') {
    filteredList = filteredList.filter(item =>
      item.nomdepsalle.toLowerCase().includes(this.idRechercher.nomdepsalle.toLowerCase())
    );
  }

  this.size = filteredList.length;

  // Run the change detection in a safe manner
  this.needsChangeDetection = true;

  console.log(this.size);
  return filteredList;
}
ngAfterViewChecked() {
  if (this.needsChangeDetection) {
    this.needsChangeDetection = false;
    this.change.detectChanges();
  }


}

}
