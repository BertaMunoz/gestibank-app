import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ClientComponent } from './client/client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { AccueilClientComponent } from './accueil-client/accueil-client.component';
import { VirementComponent } from './virement/virement.component';
import { HistoriqueComponent } from './historique/historique.component';
import { CommandeChequierComponent } from './commande-chequier/commande-chequier.component';

const clientRoutes: Routes = [
  {
    path:'',
    component: ClientComponent,
    children: [
      { 
        path: '',
        component: AccueilClientComponent
      },
      {
        path: 'app-mon-compte',
        component: MonCompteComponent
      },
      { 
        path: 'app-virement',
        component: VirementComponent
      },
      { 
        path: 'app-historique',
        component: HistoriqueComponent
      },
      { 
        path: 'app-commande-chequier',
        component: CommandeChequierComponent
      }        
    ]
  }
]

@NgModule({
  declarations: [
    ClientComponent,
    MonCompteComponent,
    AccueilClientComponent,
    VirementComponent,
    HistoriqueComponent,
    CommandeChequierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(clientRoutes),
  ], 
  bootstrap: [ClientComponent]
})
export class ClientModule { }
