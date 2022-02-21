import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgencyCreatePage } from './agency-create.page';

const routes: Routes = [
  {
    path: '',
    component: AgencyCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgencyCreatePageRoutingModule {}
