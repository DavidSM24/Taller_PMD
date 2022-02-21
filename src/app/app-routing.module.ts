import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'tab6',
    loadChildren: () => import('./tab6/tab6.module').then( m => m.Tab6PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
  ,
  {
    path: '**',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'agency-list',
    loadChildren: () => import('./administrator/agency/agency-list/agency-list.module').then( m => m.AgencyListPageModule)
  },
  {
    path: 'agency-saw',
    loadChildren: () => import('./administrator/agency/agency-saw/agency-saw.module').then( m => m.AgencySawPageModule)
  },
  {
    path: 'agency-update',
    loadChildren: () => import('./administrator/agency/agency-update/agency-update.module').then( m => m.AgencyUpdatePageModule)
  },
  {
    path: 'agency-create',
    loadChildren: () => import('./administrator/agency/agency-create/agency-create.module').then( m => m.AgencyCreatePageModule)
  },
  {
    path: 'gif-create',
    loadChildren: () => import('./administrator/gift/gif-create/gif-create.module').then( m => m.GifCreatePageModule)
  },
  {
    path: 'gif-saw',
    loadChildren: () => import('./administrator/gift/gif-saw/gif-saw.module').then( m => m.GifSawPageModule)
  },
  {
    path: 'gif-update',
    loadChildren: () => import('./administrator/gift/gif-update/gif-update.module').then( m => m.GifUpdatePageModule)
  },
  {
    path: 'gif-list',
    loadChildren: () => import('./administrator/gift/gif-list/gif-list.module').then( m => m.GifListPageModule)
  },
  {
    path: 'car-repair-list',
    loadChildren: () => import('./administrator/carRepair/car-repair-list/car-repair-list.module').then( m => m.CarRepairListPageModule)
  },
  {
    path: 'car-repair-saw',
    loadChildren: () => import('./administrator/carRepair/car-repair-saw/car-repair-saw.module').then( m => m.CarRepairSawPageModule)
  },
  {
    path: 'car-repair-update',
    loadChildren: () => import('./administrator/carRepair/car-repair-update/car-repair-update.module').then( m => m.CarRepairUpdatePageModule)
  },
  {
    path: 'car-repair-create',
    loadChildren: () => import('./administrator/carRepair/car-repair-create/car-repair-create.module').then( m => m.CarRepairCreatePageModule)
  },
  {
    path: 'exchange-gift-list',
    loadChildren: () => import('./administrator/exchangeGift/exchange-gift-list/exchange-gift-list.module').then( m => m.ExchangeGiftListPageModule)
  },
  {
    path: 'exchange-gif-update',
    loadChildren: () => import('./administrator/exchangeGift/exchange-gif-update/exchange-gif-update.module').then( m => m.ExchangeGifUpdatePageModule)
  },
  {
    path: 'exchange-gif-saw',
    loadChildren: () => import('./administrator/exchangeGift/exchange-gif-saw/exchange-gif-saw.module').then( m => m.ExchangeGifSawPageModule)
  },
  {
    path: 'exchange-gif-create',
    loadChildren: () => import('./administrator/exchangeGift/exchange-gif-create/exchange-gif-create.module').then( m => m.ExchangeGifCreatePageModule)
  },
  {
    path: 'tab-administrator',
    loadChildren: () => import('./administrator/tab-administrator/tab-administrator.module').then( m => m.TabAdministratorPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
