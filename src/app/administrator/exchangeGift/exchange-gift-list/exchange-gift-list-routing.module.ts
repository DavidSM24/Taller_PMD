import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExchangeGiftListPage } from './exchange-gift-list.page';

const routes: Routes = [
  {
    path: '',
    component: ExchangeGiftListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExchangeGiftListPageRoutingModule {}
