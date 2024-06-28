import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ens } from '../model/Ens';
import { EnseignantService } from '../service/enseignant.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrl: './enseignant.component.css'
})
export class EnseignantComponent implements OnInit {
  EnseignantCourant= new Ens();
ajoutMode= false;
idRechercher={matEnseignant:'',nomEnseignant:'',depEnseignant:'',email_enseignant:'',tel_enseignant:''}
listEns:any[]=[];
modif=false
 mat2 :any[] = []
  constructor(private ensServ:EnseignantService){}
  
  ngOnInit(): void {
    this.chargerListe();
    
    
  }
  filtreEmail(){
    let mat=localStorage.getItem("mat")?.toString()
    localStorage.removeItem("mat")
    console.log("matricule récupéré : "+mat)
    
    this.mat2=this.listEns.filter(item => item.matEnseignant.toString() == mat);
    this.idRechercher.nomEnseignant=this.mat2[0].nomEnseignant.toString()
    this.idRechercher.matEnseignant=this.mat2[0].matEnseignant.toString()

    console.log(this.mat2)
  }
chargerListe(){
  this.ensServ.getEns().subscribe(data=>{
    this.listEns=data;
    this.filtreEmail()

  })
}
editerEnseignant(form: NgForm) {
  let quest: boolean = confirm("voulez vous Confirmer les modification apportés à : \n "+form.value.nomEnseignant  + "\n  Email : "+form.value.email_enseignant  +" \n Tel° :  "+form.value.tel_enseignant)
if(quest)
{this.ensServ.updateEns(Number(form.value.matEnseignant),form.value).subscribe(data=>{
if(data){
  this.ajoutMode=true;
  alert("Modification enregistré avec succées")
  this.modif=false;
  this.chargerListe()
}else{
  this.ajoutMode=false;
  alert("Echec de modification de l'enseignant")
}
})}
}


fermerEdition() {
this.modif=false;
this.EnseignantCourant=new Ens();
}
filtre(): any[] {
  let filteredList = this.listEns;

  if (this.idRechercher.matEnseignant !== null) {
    filteredList = filteredList.filter(item =>
      item.matEnseignant.toString().includes(this.idRechercher.matEnseignant?.toString())
    );
  }

  if (this.idRechercher.nomEnseignant !== '') {
    filteredList = filteredList.filter(item =>
      item.nomEnseignant.toLowerCase().includes(this.idRechercher.nomEnseignant?.toLowerCase())
    );
  }

  if (this.idRechercher.depEnseignant !== '') {
    filteredList = filteredList.filter(item =>
      item.depEnseignant.toLowerCase().includes(this.idRechercher.depEnseignant?.toLowerCase())
    );
  }
  if (this.idRechercher.email_enseignant !== '') {
    filteredList = filteredList.filter(item =>
      item.email_enseignant.toLowerCase().includes(this.idRechercher.email_enseignant?.toLowerCase())
    );
  }
  if (this.idRechercher.tel_enseignant !== '') {
    filteredList = filteredList.filter(item =>
      item.tel_enseignant.toLowerCase().includes(this.idRechercher.tel_enseignant?.toLowerCase())
    );
  }

  return filteredList.sort((a=new Ens(), b=new Ens()) => a.nomEnseignant.localeCompare(b.nomEnseignant));

}
selectionnerEnseignant(p: any) {
this.EnseignantCourant={... p}
  this.modif=true;
}
;

}
