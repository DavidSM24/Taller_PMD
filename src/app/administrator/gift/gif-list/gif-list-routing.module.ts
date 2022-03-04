import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GifListPage } from './gif-list.page';

const routes: Routes = [
  {
    path: '',
    component: GifListPage,
    children:[
      {
        path: 'gift-create',
        loadChildren: () => import('../gif-create/gif-create.module').then( m => m.GifCreatePageModule)
      },
      {
        path: 'gift-saw',
        loadChildren: () => import('../gif-saw/gif-saw.module').then( m => m.GifSawPageModule)
      },
      {
        path: 'gift-update',
        loadChildren: () => import('../gif-update/gif-update.module').then( m => m.GifUpdatePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GifListPageRoutingModule {}
