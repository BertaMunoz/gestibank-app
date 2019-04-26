import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { RouterModule, Routes } from '@angular/router';
import { MonCompteComponent } from './mon-compte/mon-compte.component';

const clientRoutes: Routes = [
  {
    path:'',
    component: ClientComponent,
    children: [
        {
          path: 'app-add-client',
          component: AddClientComponent
        }
        
    ]
  }
]

@NgModule({
  declarations: [
    ClientComponent,
    AddClientComponent,
    MonCompteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(clientRoutes),
  ], 
  bootstrap: [ClientComponent]
})
export class ClientModule { }
