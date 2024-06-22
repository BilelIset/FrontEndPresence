import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { SalleComponent } from './salle/salle.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AgentComponent } from './agent/agent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnseignantComponent } from './enseignant/enseignant.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    SalleComponent,
    NavBarComponent,
    AgentComponent,
    DashboardComponent,
    EnseignantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/tn'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
