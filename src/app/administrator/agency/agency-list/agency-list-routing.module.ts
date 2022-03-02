import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgencyListPage } from './agency-list.page';

const routes: Routes = [
  {
    path: '',
    component: AgencyListPage,
    children:[
      {
        path: 'agency-saw',
        loadChildren: () => import('../agency-saw/agency-saw.module').then( m => m.AgencySawPageModule)
      },
      {
        path: 'agency-update',
        loadChildren: () => import('../agency-update/agency-update.module').then( m => m.AgencyUpdatePageModule)
      },
      {
        path: 'agency-create',
        loadChildren: () => import('../agency-create/agency-create.module').then( m => m.AgencyCreatePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgencyListPageRoutingModule {}
