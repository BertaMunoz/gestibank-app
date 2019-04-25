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
  }
  /*,
  {
    path: 'conseillerDasboard',
    loadChildren: ''
  },
  { path: 'github', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent },
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]
  },
  {
    path: 'clientDasboard',
    loadChildren: ''
  }*/
];
