import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExchangeGiftListPageRoutingModule } from './exchange-gift-list-routing.module';

import { ExchangeGiftListPage } from './exchange-gift-list.page';
import { ExchangeGifUpdatePage } from '../exchange-gif-update/exchange-gif-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExchangeGiftListPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ExchangeGiftListPage ,ExchangeGifUpdatePage]
})
export class ExchangeGiftListPageModule {}
