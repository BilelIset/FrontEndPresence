import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { Router } from '@angular/router';
import { EnseignantService } from '../service/enseignant.service';

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

  constructor(private abserv: DashboardService, private router: Router, private ensServ: EnseignantService) {}

  ngOnInit(): void {
    this.abserv.getAbsence().subscribe(data => {
      this.listAbsence = data;
    });
  }

  renvoyerMail(p: any) {
    this.matRecup = p.ensi1.toString();
    this.idAbs=p.num

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
    }
  }

  checkNotif(p: any): { text: string, color: string } {
    if (p.notified) {
      return { text: 'Oui', color: 'green' };
    } else {
      return { text: 'Non', color: 'red' };
    }
  }
}
