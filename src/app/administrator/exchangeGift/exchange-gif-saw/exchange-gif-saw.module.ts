import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExchangeGifSawPageRoutingModule } from './exchange-gif-saw-routing.module';

import { ExchangeGifSawPage } from './exchange-gif-saw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExchangeGifSawPageRoutingModule
  ],
  declarations: [ExchangeGifSawPage]
})
export class ExchangeGifSawPageModule {}
