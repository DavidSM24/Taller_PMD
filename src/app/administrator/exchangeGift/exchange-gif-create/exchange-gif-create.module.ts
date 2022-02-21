import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExchangeGifCreatePageRoutingModule } from './exchange-gif-create-routing.module';

import { ExchangeGifCreatePage } from './exchange-gif-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExchangeGifCreatePageRoutingModule
  ],
  declarations: [ExchangeGifCreatePage]
})
export class ExchangeGifCreatePageModule {}
