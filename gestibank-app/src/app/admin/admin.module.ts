import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AcueilComponent } from './acueil/acueil.component';
import { RouterModule } from '@angular/router';
import { GestionConseillerComponent } from './gestion-conseiller/gestion-conseiller.component';
import { ListClientComponent } from './list-client/list-client.component';


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
    ],
  }
];

@NgModule({
  declarations: [
    AdminComponent,
    AcueilComponent,
    GestionConseillerComponent,
    ListClientComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
  ],
  bootstrap: [AdminComponent]

})
export class AdminModule { }
