import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExchangeGiftListPageRoutingModule } from './exchange-gift-list-routing.module';

import { ExchangeGiftListPage } from './exchange-gift-list.page';
import { ExchangeGifUpdatePage } from '../exchange-gif-update/exchange-gif-update.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ExchangeGifSawPage } from '../exchange-gif-saw/exchange-gif-saw.page';
import { UtilService } from '../../../services/util.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExchangeGiftListPageRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers:[UtilService],
  declarations: [ExchangeGiftListPage ,ExchangeGifUpdatePage, ExchangeGifSawPage]
})
export class ExchangeGiftListPageModule {}
