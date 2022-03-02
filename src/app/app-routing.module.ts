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
  },
  {
    path: 'agency-list',
    loadChildren: () => import('./administrator/agency/agency-list/agency-list.module').then( m => m.AgencyListPageModule)
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
    path: 'exchange-gift-list',
    loadChildren: () => import('./administrator/exchangeGift/exchange-gift-list/exchange-gift-list.module').then( m => m.ExchangeGiftListPageModule)
  },  
  {
    path: 'tab-administrator',
    loadChildren: () => import('./administrator/tab-administrator/tab-administrator.module').then( m => m.TabAdministratorPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
