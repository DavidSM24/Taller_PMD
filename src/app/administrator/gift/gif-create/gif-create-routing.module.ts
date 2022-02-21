import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GifCreatePage } from './gif-create.page';

const routes: Routes = [
  {
    path: '',
    component: GifCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GifCreatePageRoutingModule {}
