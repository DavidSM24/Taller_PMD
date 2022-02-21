import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GifUpdatePage } from './gif-update.page';

const routes: Routes = [
  {
    path: '',
    component: GifUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GifUpdatePageRoutingModule {}
