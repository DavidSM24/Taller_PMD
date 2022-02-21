import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GifSawPage } from './gif-saw.page';

const routes: Routes = [
  {
    path: '',
    component: GifSawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GifSawPageRoutingModule {}
