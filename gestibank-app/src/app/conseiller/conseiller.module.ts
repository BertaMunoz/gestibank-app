import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ConseillerComponent } from './conseiller/conseiller.component';
import { ConseillerService } from './conseiller.service';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { AccueilConseillerComponent } from './accueil-conseiller/accueil-conseiller.component';
import { FormsModule } from '@angular/forms';

const conseillerRoutes: Routes = [
  {
    path: '',
    component: ConseillerComponent,
    children: [
          { 
            path: '', 
            component: AccueilConseillerComponent
          },
          { 
            path: 'app-gestion-client', 
            component: GestionClientComponent
          }
    ],
  }
];
 
@NgModule({
  declarations: [
    ConseillerComponent,
    AccueilConseillerComponent,
    GestionClientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(conseillerRoutes),
  ],
  providers: [ConseillerService],
  bootstrap: [ConseillerComponent]
})
export class ConseillerModule { }
