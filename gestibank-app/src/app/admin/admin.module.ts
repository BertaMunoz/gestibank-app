import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AcueilComponent } from './acueil/acueil.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
          { 
            path: 'app-acueil', 
            component: AcueilComponent 
          }
            /*,
          { 
            path: 'edit/:id', 
            component: SessionEditFormComponent 
          },
          { 
            path: 'list', 
            component: SessionItemListComponent 
          },
          { 
            path: '',   
            redirectTo: 'list', 
            pathMatch: 'full' 
          }*/
    ],
  }
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [AdminComponent]

})
export class AdminModule { }
