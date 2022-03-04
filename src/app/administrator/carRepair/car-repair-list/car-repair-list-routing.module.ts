import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarRepairListPage } from './car-repair-list.page';

const routes: Routes = [
  {
    path: '',
    component: CarRepairListPage,
    children:[
      {
        path: 'car-repair-saw',
        loadChildren: () => import('../car-repair-saw/car-repair-saw.module').then( m => m.CarRepairSawPageModule)
      },
      {
        path: 'car-repair-update',
        loadChildren: () => import('../car-repair-update/car-repair-update.module').then( m => m.CarRepairUpdatePageModule)
      },
      {
        path: 'car-repair-create',
        loadChildren: () => import('../car-repair-create/car-repair-create.module').then( m => m.CarRepairCreatePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRepairListPageRoutingModule {}
