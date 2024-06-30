import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SalleComponent } from './salle/salle.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AgentComponent } from './agent/agent.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginService } from './service/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnseignantComponent } from './enseignant/enseignant.component';

const routes: Routes = [
  
  {path:"salle",component:SalleComponent ,canActivate:[AuthGuard]},
  {path:"enseignant",component:EnseignantComponent ,canActivate:[AuthGuard]},
  {path:"menu",component:MenuComponent,canActivate:[AuthGuard]},
  {path:"nav",component:NavBarComponent,canActivate:[AuthGuard]},
  {path:"agent",component:AgentComponent,canActivate:[AuthGuard]},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
