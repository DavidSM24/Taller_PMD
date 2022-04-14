import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftSawPage } from './gift-saw.page';

const routes: Routes = [
  {
    path: '',
    component: GiftSawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftSawPageRoutingModule {}
