import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabAdministratorPage } from './tab-administrator.page';

const routes: Routes = [
  {
    path: '',
    component: TabAdministratorPage,
    children:[
      {
        path: 'exchange-gift-list',
        loadChildren: () => import('../exchangeGift/exchange-gift-list/exchange-gift-list.module').then( m => m.ExchangeGiftListPageModule)
      },
      {
        path: 'car-repair-list',
        loadChildren: () => import('../carRepair/car-repair-list/car-repair-list.module').then( m => m.CarRepairListPageModule)
      },
      {
        path: 'agency-list',
        loadChildren: () => import('../agency/agency-list/agency-list.module').then( m => m.AgencyListPageModule)
      },
      {
        path: 'gif-list',
        loadChildren: () => import('../gift/gif-list/gif-list.module').then( m => m.GifListPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/about',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/about',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabAdministratorPageRoutingModule {}
