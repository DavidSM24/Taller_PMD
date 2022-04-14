import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
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
    path: 'tab-administrator',
    loadChildren: () => import('./administrator/tab-administrator/tab-administrator.module').then( m => m.TabAdministratorPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user-create',
    loadChildren: () => import('./administrator/user/user-create/user-create.module').then( m => m.UserCreatePageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./administrator/user/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'user-update',
    loadChildren: () => import('./administrator/user/user-update/user-update.module').then( m => m.UserUpdatePageModule)
  },  {
    path: 'tab-user',
    loadChildren: () => import('./user/tab-user/tab-user.module').then( m => m.TabUserPageModule)
  },
  {
    path: 'gift-list',
    loadChildren: () => import('./user/gift/gift-list/gift-list.module').then( m => m.GiftListPageModule)
  },
  {
    path: 'gift-saw',
    loadChildren: () => import('./user/gift/gift-saw/gift-saw.module').then( m => m.GiftSawPageModule)
  },
  {
    path: 'exchange-gift-list',
    loadChildren: () => import('./user/exchangeGift/exchange-gift-list/exchange-gift-list.module').then( m => m.ExchangeGiftListPageModule)
  },
  {
    path: 'exchange-gift-saw',
    loadChildren: () => import('./user/exchangeGift/exchange-gift-saw/exchange-gift-saw.module').then( m => m.ExchangeGiftSawPageModule)
  },
  {
    path: 'car-repair-list',
    loadChildren: () => import('./user/carRepair/car-repair-list/car-repair-list.module').then( m => m.CarRepairListPageModule)
  },
  {
    path: 'car-repair-create',
    loadChildren: () => import('./user/carRepair/car-repair-create/car-repair-create.module').then( m => m.CarRepairCreatePageModule)
  },
  {
    path: 'car-repair-saw',
    loadChildren: () => import('./user/carRepair/car-repair-saw/car-repair-saw.module').then( m => m.CarRepairSawPageModule)
  },
  {
    path: 'car-repair-update',
    loadChildren: () => import('./user/carRepair/car-repair-update/car-repair-update.module').then( m => m.CarRepairUpdatePageModule)
  },
  {
    path: 'agency-update',
    loadChildren: () => import('./user/agency/agency-update/agency-update.module').then( m => m.AgencyUpdatePageModule)
  },


  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
