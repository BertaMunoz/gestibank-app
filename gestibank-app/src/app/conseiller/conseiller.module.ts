import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ConseillerComponent } from './conseiller/conseiller.component';
import { ConseillerService } from './conseiller.service';
import { GestionConseillerComponent } from './gestion-conseiller/gestion-conseiller.component';
import { AccueilConseillerComponent } from './accueil-conseiller/accueil-conseiller.component';
import { ListClientComponent } from './list-client/list-client.component';

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
            path: 'app-gestion-conseiller', 
            component: GestionConseillerComponent
          },
          {
            path: 'app-list-client',
            component: ListClientComponent
          }
    ],
  }
];
 
@NgModule({
  declarations: [
    ConseillerComponent,
    AccueilConseillerComponent,
    GestionConseillerComponent,
    ListClientComponent
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
