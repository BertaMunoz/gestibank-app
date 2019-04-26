import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateCompteComponent } from './create-compte/create-compte.component';
import { RouterModule } from '@angular/router';

export const rootRouterConfig: Routes = [
  {
    path: '',  component: IndexComponent
  },
  {
    path: 'createCompte',   component: CreateCompteComponent
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }/*,
  {
    path: 'conseiller',
    loadChildren: ''
  },
  {
    path: 'client',
    loadChildren: ''
  }*/
];
