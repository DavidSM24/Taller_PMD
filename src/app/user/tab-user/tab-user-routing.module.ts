import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabUserPage } from './tab-user.page';

const routes: Routes = [
  {
    path: '',
    component: TabUserPage,
    children:[
      //Agencia
      {
        path:'agency',
        children:[
          //Actualizar
          {
            path: 'update',
            loadChildren: () => import('../agency/agency-update/agency-update.module').then( m => m.AgencyUpdatePageModule)
          }

        ]
      },

      //Reparaciones
      {
        path:'car-repair',
        children:[
          //Lista
          {
            path: 'list',
            loadChildren: () => import('../carRepair/car-repair-list/car-repair-list.module').then( m => m.CarRepairListPageModule)
          },
          //Crear
          {
            path: 'create',
            loadChildren: () => import('../carRepair/car-repair-create/car-repair-create.module').then( m => m.CarRepairCreatePageModule)
          },
          //Ver
          {
            path: 'saw',
            loadChildren: () => import('../carRepair/car-repair-saw/car-repair-saw.module').then( m => m.CarRepairSawPageModule)
          },
          //Actualizar
          {
            path: 'update',
            loadChildren: () => import('../carRepair/car-repair-update/car-repair-update.module').then( m => m.CarRepairUpdatePageModule)
          }

        ]
      },

      //Pedido
      {
        path:'exchange-gift',
        children:[
          //Lista
          {
            path: 'list',
            loadChildren: () => import('../exchangeGift/exchange-gift-list/exchange-gift-list.module').then( m => m.ExchangeGiftListPageModule)
          },
          //Ver
          {
            path: 'saw',
            loadChildren: () => import('../exchangeGift/exchange-gift-saw/exchange-gift-saw.module').then( m => m.ExchangeGiftSawPageModule)
          }

        ]
      },
      //Regalos
      {
        path:'gift',
        children:[
          //Lista
          {
            path: 'list',
            loadChildren: () => import('../gift/gift-list/gift-list.module').then( m => m.GiftListPageModule)
          },
          //Ver
          {
            path: 'saw',
            loadChildren: () => import('../gift/gift-saw/gift-saw.module').then( m => m.GiftSawPageModule)
          },

        ]
      },
      {
        path: '',
        redirectTo: 'list',
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
export class TabUserPageRoutingModule {}
