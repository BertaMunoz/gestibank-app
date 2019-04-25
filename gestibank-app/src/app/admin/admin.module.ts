import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AcueilComponent } from './acueil/acueil.component';
import { RouterModule } from '@angular/router';



const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
          {        path: '',
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
  declarations: [
    AdminComponent,
    AcueilComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
  ],
  bootstrap: [AdminComponent]

})
export class AdminModule { }
