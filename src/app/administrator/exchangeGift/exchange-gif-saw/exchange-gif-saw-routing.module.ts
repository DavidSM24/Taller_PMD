import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExchangeGifSawPage } from './exchange-gif-saw.page';

const routes: Routes = [
  {
    path: '',
    component: ExchangeGifSawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExchangeGifSawPageRoutingModule {}
