import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GifSawPageRoutingModule } from './gif-saw-routing.module';

import { GifSawPage } from './gif-saw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GifSawPageRoutingModule
  ],
  declarations: [GifSawPage]
})
export class GifSawPageModule {}
