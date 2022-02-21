import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarRepairListPage } from './car-repair-list.page';

const routes: Routes = [
  {
    path: '',
    component: CarRepairListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRepairListPageRoutingModule {}
