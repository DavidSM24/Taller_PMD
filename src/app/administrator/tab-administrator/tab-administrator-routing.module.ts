import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabAdministratorPage } from './tab-administrator.page';

const routes: Routes = [
  {
    path: '',
    component: TabAdministratorPage,
    children:[
      //pedidos
      {
        path:'exchange-gift',
        children:[
          {
            path: 'list',
            loadChildren: () => import('../exchangeGift/exchange-gift-list/exchange-gift-list.module').then( m => m.ExchangeGiftListPageModule)
          },
          {
            path: 'update',
            loadChildren: () => import('../exchangeGift/exchange-gif-update/exchange-gif-update.module').then( m => m.ExchangeGifUpdatePageModule)
          },
          {
            path: 'saw',
            loadChildren: () => import('../exchangeGift/exchange-gif-saw/exchange-gif-saw.module').then( m => m.ExchangeGifSawPageModule)
          },
          {
            path: 'create',
            loadChildren: () => import('../exchangeGift/exchange-gif-create/exchange-gif-create.module').then( m => m.ExchangeGifCreatePageModule)
          }
        ]
      },
      //Reparaciones
      {
        path:'car-repair',
        children:[
          {
            path: 'list',
            loadChildren: () => import('../carRepair/car-repair-list/car-repair-list.module').then( m => m.CarRepairListPageModule)
          },
          {
            path: 'saw/:id',
            loadChildren: () => import('../carRepair/car-repair-saw/car-repair-saw.module').then( m => m.CarRepairSawPageModule)
          },
          {
            path: 'update/:id',
            loadChildren: () => import('../carRepair/car-repair-update/car-repair-update.module').then( m => m.CarRepairUpdatePageModule)
          }
        ]

      },
      //Agencias
      {
        path:'agency',
        children:[
          {
            path: 'list',
            loadChildren: () => import('../agency/agency-list/agency-list.module').then( m => m.AgencyListPageModule)
          },
          {
            path: 'saw',
            loadChildren: () => import('../agency/agency-saw/agency-saw.module').then( m => m.AgencySawPageModule)
          },
          {
            path: 'update',
            loadChildren: () => import('../agency/agency-update/agency-update.module').then( m => m.AgencyUpdatePageModule)
          },
          {
            path: 'create',
            loadChildren: () => import('../agency/agency-create/agency-create.module').then( m => m.AgencyCreatePageModule)
          }
        ]
      },

      //Regalos
      {
        path:'gift',
        children:[
          {
            path: 'list',
            loadChildren: () => import('../gift/gif-list/gif-list.module').then( m => m.GifListPageModule)
          }, {
            path: 'create',
            loadChildren: () => import('../gift/gif-create/gif-create.module').then( m => m.GifCreatePageModule)
          },
          {
            path: 'saw',
            loadChildren: () => import('../gift/gif-saw/gif-saw.module').then( m => m.GifSawPageModule)
          },
          {
            path: 'update',
            loadChildren: () => import('../gift/gif-update/gif-update.module').then( m => m.GifUpdatePageModule)
          }
        ]
      },

      //Users
      {
        path:'user',
        children:[
          {
            path: 'list',
            loadChildren: () => import('../user/user-list/user-list.module').then( m => m.UserListPageModule)
          }, {
            path: 'create',
            loadChildren: () => import('../user/user-create/user-create.module').then( m => m.UserCreatePageModule)
          },
          {
            path: 'update',
            loadChildren: () => import('../user/user-update/user-update.module').then( m => m.UserUpdatePageModule)
          }
        ]
      },
      //companies
      {
        path:'company',
        children:[
          {
            path: 'list',
            loadChildren: () => import('../company/company-list/company-list.module').then( m => m.CompanyListPageModule)
          },
          {
            path: 'create',
            loadChildren: () => import('../company/company-create/company-create.module').then( m => m.CompanyCreatePageModule)
          }
        ]
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
