import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarRepairCreatePage } from './car-repair-create.page';

const routes: Routes = [
  {
    path: '',
    component: CarRepairCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRepairCreatePageRoutingModule {}
