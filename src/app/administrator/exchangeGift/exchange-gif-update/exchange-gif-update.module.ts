import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExchangeGifUpdatePageRoutingModule } from './exchange-gif-update-routing.module';

import { ExchangeGifUpdatePage } from './exchange-gif-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExchangeGifUpdatePageRoutingModule
  ],
  declarations: [ExchangeGifUpdatePage]
})
export class ExchangeGifUpdatePageModule {}
