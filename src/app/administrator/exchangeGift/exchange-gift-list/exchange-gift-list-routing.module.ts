import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExchangeGiftListPage } from './exchange-gift-list.page';

const routes: Routes = [
  {
    path: '',
    component: ExchangeGiftListPage,
    children:[
      {
        path: 'exchange-gif-update',
        loadChildren: () => import('../exchange-gif-update/exchange-gif-update.module').then( m => m.ExchangeGifUpdatePageModule)
      },
      {
        path: 'exchange-gif-saw',
        loadChildren: () => import('../exchange-gif-saw/exchange-gif-saw.module').then( m => m.ExchangeGifSawPageModule)
      },
      {
        path: 'exchange-gif-create',
        loadChildren: () => import('../exchange-gif-create/exchange-gif-create.module').then( m => m.ExchangeGifCreatePageModule)
      },

    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExchangeGiftListPageRoutingModule {}
