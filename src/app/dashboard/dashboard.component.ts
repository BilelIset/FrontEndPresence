import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { Router } from '@angular/router';
import { EnseignantService } from '../service/enseignant.service';
import { LigneAbsence } from '../model/LigneAbsence';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listEns: any[] = [];
  mat2: any[] = [];
  respEmail: any;
  matRecup: any;
  listAbsence: any[] = [];
  idAbs:any;
  size: any;
  needsChangeDetection: boolean=false;

  constructor(private abserv: DashboardService, private router: Router, private ensServ: EnseignantService,private change:ChangeDetectorRef) {}
  idRechercher={
    "num" : '',
    "nom_salle" : '',
    "nom_matiere": '',
    "ensi1" : '',
    "nom_seance" : '',
    "seanceDouble": '',
    "annee1" : '',
    "semestre1" : '',
    "nom_jour" : '',
    "date" : '',
    "notified" : ''
  }
  ngOnInit(): void {
    this.abserv.getAbsence().subscribe(data => {
      this.listAbsence = data;
      let matEns=localStorage.getItem("mat")
      console.log("matricule recupéré"+matEns)

      if(matEns!=null){
        this.idRechercher={
          "num" : '',
          "nom_salle" : '',
          "nom_matiere": '',
          "ensi1" : matEns,
          "nom_seance" : '',
          "seanceDouble": '',
          "annee1" : '',
          "semestre1" : '',
          "nom_jour" : '',
          "date" : '',
          "notified" : ''
        }
      }
    });
  }

  renvoyerMail(p: any) {
    this.matRecup = p.ensi1.toString();
    this.idAbs=p.num
    let matEmail=localStorage.getItem("mat")
    if(matEmail!=undefined){
      this.ensServ.getEns().subscribe(data => {
        this.listEns = data;
        this.mat2 = this.listEns.filter(item => item.matEnseignant.toString() === this.matRecup);
        if (this.mat2.length > 0) {
          const to = this.mat2[0].email_enseignant.toString();
          const subject = "Service Scolarité ISET Sfax: Notification d'absence";
          const text = `Mr ${this.mat2[0].nomEnseignant}, On vous informe que vous êtes absent le ${p.date} à la salle ${p.nom_salle}, séance de ${p.nom_seance}.`;
          this.ensServ.sendEmail(to, subject, text,this.idAbs).subscribe(data => {
            this.respEmail = data;
            if(this.respEmail==true){
              localStorage.removeItem("mat");
              this.idRechercher={
                "num" : '',
                "nom_salle" : '',
                "nom_matiere": '',
                "ensi1" : '',
                "nom_seance" : '',
                "seanceDouble": '',
                "annee1" : '',
                "semestre1" : '',
                "nom_jour" : '',
                "date" : '',
                "notified" : ''
              }
            
              document.location.reload();
            }
            else{
              alert("echec d'envoie de l'email ")
              localStorage.removeItem("mat")
              this.idRechercher={
                "num" : '',
                "nom_salle" : '',
                "nom_matiere": '',
                "ensi1" : '',
                "nom_seance" : '',
                "seanceDouble": '',
                "annee1" : '',
                "semestre1" : '',
                "nom_jour" : '',
                "date" : '',
                "notified" : ''
              }
            }
            console.log(data);
          });
        } else {
          console.error("Enseignant non trouvé");
        }
      });
    }else{

    let quest: boolean = confirm("Vérifier d'abord si l'email enregistré est correct:\n Si vous voulez vérifier l'email d'abord, cliquez sur Ok\n Si vous voulez renvoyer directement l'email, cliquez sur Annuler");
    if (quest) {
      localStorage.setItem("mat", p.ensi1);
      this.router.navigate(['enseignant']);
    } else {
      this.ensServ.getEns().subscribe(data => {
        this.listEns = data;
        this.mat2 = this.listEns.filter(item => item.matEnseignant.toString() === this.matRecup);
        if (this.mat2.length > 0) {
          const to = this.mat2[0].email_enseignant.toString();
          const subject = "Service Scolarité ISET Sfax: Notification d'absence";
          const text = `Mr ${this.mat2[0].nomEnseignant}, On vous informe que vous êtes absent le ${p.date} à la salle ${p.nom_salle}, séance de ${p.nom_seance}.`;
          this.ensServ.sendEmail(to, subject, text,this.idAbs).subscribe(data => {
            this.respEmail = data;
            if(this.respEmail==true){
              document.location.reload();
            }
            else{
              alert("echec d'envoie de l'email ")
            }
            console.log(data);
          });
        } else {
          console.error("Enseignant non trouvé");
        }
      });
    }}
  }

  checkNotif(p: any){
    if (p.notified) {
      return "Oui";
    } else {
      return "Non";
    }
  }
  filtre(): any[] {
    let filteredList = this.listAbsence;
  
    if (this.idRechercher.num !== null && this.idRechercher.num !== undefined) {
      filteredList = filteredList.filter(item =>
        item.num.toString().includes(this.idRechercher.num.toString())
      );
    }
  
    if (this.idRechercher.nom_salle && this.idRechercher.nom_salle !== '') {
      filteredList = filteredList.filter(item =>
        item.nom_salle.toLowerCase().includes(this.idRechercher.nom_salle.toLowerCase())
      );
    }
  
    
    if (this.idRechercher.ensi1 && this.idRechercher.ensi1 !== '') {
      filteredList = filteredList.filter(item =>
        item.ensi1.toLowerCase().includes(this.idRechercher.ensi1.toLowerCase())
      );
    }
    if (this.idRechercher.notified !=='') {
      filteredList = filteredList.filter(item =>
        item.notified.toString().includes(this.idRechercher.notified.toString())
      );
    }
    if (this.idRechercher.date && this.idRechercher.date !== '') {
      filteredList = filteredList.filter(item =>
        item.date.toLowerCase().includes(this.idRechercher.date.toLowerCase())
      );
    }
    if (this.idRechercher.nom_jour && this.idRechercher.nom_jour !== '') {
      filteredList = filteredList.filter(item =>
        item.nom_jour.toLowerCase().includes(this.idRechercher.nom_jour.toLowerCase())
      );
    }
    if (this.idRechercher.nom_seance && this.idRechercher.nom_seance !== '') {
      filteredList = filteredList.filter(item =>
        item.nom_seance.toLowerCase().includes(this.idRechercher.nom_seance.toLowerCase())
      );
    }
  
    this.size = filteredList.length;
  
    this.needsChangeDetection = true;
  
    console.log(this.size);
    return filteredList.sort((a,b)=>b.num-a.num);
  }
  ngAfterViewChecked() {
    if (this.needsChangeDetection) {
      this.needsChangeDetection = false;
      this.change.detectChanges();
    }
}}
