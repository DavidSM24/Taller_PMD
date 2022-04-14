import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExchangeGiftSawPageRoutingModule } from './exchange-gift-saw-routing.module';

import { ExchangeGiftSawPage } from './exchange-gift-saw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExchangeGiftSawPageRoutingModule
  ],
  declarations: [ExchangeGiftSawPage]
})
export class ExchangeGiftSawPageModule {}
