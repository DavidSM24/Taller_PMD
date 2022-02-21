import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarRepairSawPage } from './car-repair-saw.page';

const routes: Routes = [
  {
    path: '',
    component: CarRepairSawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRepairSawPageRoutingModule {}
