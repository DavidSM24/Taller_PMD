import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExchangeGiftListPageRoutingModule } from './exchange-gift-list-routing.module';

import { ExchangeGiftListPage } from './exchange-gift-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExchangeGiftListPageRoutingModule
  ],
  declarations: [ExchangeGiftListPage]
})
export class ExchangeGiftListPageModule {}
