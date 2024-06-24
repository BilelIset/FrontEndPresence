import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Users } from '../model/Users';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.css'
})
export class AgentComponent implements OnInit {
nouveauAgent= {idUser:'',login:'',password:'',isAdmin:''};
hideMsg() {
this.message=""}
message="";
verifPass(p:any) {
  const pass=window.prompt("Entrer le mot de passe actuelle de : "+this.AgentCourant.login)
  if(pass===p.password){
    this.logged=true
  }else{
    alert("Mot De Passe saisie incorrecte !!")
  }
}
  AgentCourant={idUser:'',login:'',password:'',isAdmin:''};
  idRechercher= {idUser:'',login:'',password:'',isAdmin:''};
ajoutMode=false;
  us1: any;
add=false;
logged=false;


  constructor(private logserv:LoginService){}
  loginList :any[]=[];
ngOnInit(): void {
  this.chargerListe();
}
chargerListe(){
  this.logserv.getUsers().subscribe(data=>{
    this.loginList=data;
    
  })
}
supprimerAgent(p: any) {
  let quest: boolean = confirm("voulez vous vraiment supprimer '"  + "'  '" + p.login + " '")
if(quest){this.logserv.deleteUsers(p.idUser).subscribe(data=>{
  if(data){
    alert("Supprimer avec success !")
    this.chargerListe();
  }
  else{
    alert("Echec de suppresion")
  }
})}
}
affPsw(){
  this.message="Cliquer et entrer le mot de passe du compte: "+this.AgentCourant.login

}
selectionnerAgent(p: any) {
this.AgentCourant={...p}
this.ajoutMode=true
this.add=false
}
applyFilter(): any {
throw new Error('Method not implemented.');
}
ajouterAgent(form: NgForm) {
  
  if(form.value.login=="" || form.value.password=="" || form.value.isAdmin==""){
    
    
   alert("Verifier les donné saisie")
  }else{
  this.logserv.addUsers(form.value).subscribe(data=>{
   let us:any;
   us=data
   if(us){
    alert("Utilisateur  est ajouté avec succés ")
    this.chargerListe()
    this.add=false;
    this.nouveauAgent= {idUser:'',login:'',password:'',isAdmin:''};
   this.chargerListe();

   }else if(!us){
    alert("nom d'utilsateur déja existant !")
   }else if(us==null){
    alert("Erreur inconnu c'est produite veuillez réessayer")
   }
  })
}}
fermerEdition() {
this.ajoutMode=false;
this.logged=false}
editerAgent(form: NgForm) {
 
let us=new Users();
us.setIdUser(form.value.idUser);
us.setLogin(form.value.login);
us.setPassword(form.value.password);
us.setIsAdmin(Boolean(form.value.isAdmin));
if(us.getIdUser()!=undefined){
  this.logserv.updateUsers(us.getIdUser(), us).subscribe(data=>{
   this.us1=data
   
  this.ajoutMode=false;

   if(this.us1.idUser==form.value.idUser){
    alert("L'utilisateur : "+this.us1.idUser+ " est modifié avec succés ")
    this.chargerListe();

   }


  })
}else{
  alert("Id Agent invalide")
}
}
filtre(): any[] {
  let filteredList = this.loginList;

  if (this.idRechercher.idUser !== null) {
    filteredList = filteredList.filter(item =>
      item.idUser.toString().includes(this.idRechercher.idUser.toString())
    );
  }

  if (this.idRechercher.login !== '') {
    filteredList = filteredList.filter(item =>
      item.login.toLowerCase().includes(this.idRechercher.login.toLowerCase())
    );
  }

  

  return filteredList;
}


}
