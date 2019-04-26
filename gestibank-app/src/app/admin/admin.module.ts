import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AcueilComponent } from './acueil/acueil.component';
import { GestionConseillerComponent } from './gestion-conseiller/gestion-conseiller.component';
import { ListClientComponent } from './list-client/list-client.component';
import { ConseillerService } from '../conseiller/conseiller.service';
import { AddConseillerComponent } from './add-conseiller/add-conseiller.component';


const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
          { 
            path: '',
            component: AcueilComponent
          },
          { 
            path: 'app-gestion-conseiller', 
            component: GestionConseillerComponent
          },
          { 
            path: 'app-list-client', 
            component: ListClientComponent
          }
          /*,
          { 
            path: 'app-gestion-conseiller/app-add-conseiller', 
            component: AddConseillerComponent
          }*/
          
    ],
  }
];

@NgModule({
  declarations: [
    AdminComponent,
    AcueilComponent,
    GestionConseillerComponent,
    ListClientComponent,
    AddConseillerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(adminRoutes),
  ],
  providers: [ConseillerService],
  bootstrap: [AdminComponent]

})
export class AdminModule { }
