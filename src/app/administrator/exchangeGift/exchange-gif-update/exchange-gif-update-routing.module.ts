import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExchangeGifUpdatePage } from './exchange-gif-update.page';

const routes: Routes = [
  {
    path: '',
    component: ExchangeGifUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExchangeGifUpdatePageRoutingModule {}
