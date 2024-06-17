import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SalleComponent } from './salle/salle.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AgentComponent } from './agent/agent.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginService } from './service/login.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  {path:"salle",component:SalleComponent ,canActivate:[AuthGuard]},
  {path:"menu",component:MenuComponent,canActivate:[AuthGuard]},
  {path:"nav",component:NavBarComponent,canActivate:[AuthGuard]},
  {path:"agent",component:AgentComponent,canActivate:[AuthGuard]},

  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
