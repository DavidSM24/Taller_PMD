import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GifCreatePageRoutingModule } from './gif-create-routing.module';

import { GifCreatePage } from './gif-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GifCreatePageRoutingModule
  ],
  declarations: [GifCreatePage]
})
export class GifCreatePageModule {}
