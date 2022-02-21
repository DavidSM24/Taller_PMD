import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgencySawPage } from './agency-saw.page';

const routes: Routes = [
  {
    path: '',
    component: AgencySawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgencySawPageRoutingModule {}
