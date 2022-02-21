import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgencyUpdatePage } from './agency-update.page';

const routes: Routes = [
  {
    path: '',
    component: AgencyUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgencyUpdatePageRoutingModule {}
