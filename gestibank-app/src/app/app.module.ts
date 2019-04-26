import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { rootRouterConfig } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCompteComponent } from './create-compte/create-compte.component';
import { IndexComponent } from './index/index.component';
import { AccueilConseillerComponent } from './conseiller/accueil-conseiller/accueil-conseiller.component';
import { GestionClientComponent } from './conseiller/gestion-client/gestion-client.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateCompteComponent,
    IndexComponent,
    AccueilConseillerComponent,
    GestionClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
