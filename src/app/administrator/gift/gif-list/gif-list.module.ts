import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GifListPageRoutingModule } from './gif-list-routing.module';

import { GifListPage } from './gif-list.page';
import { GiftService } from '../../../services/gift.service';
import { UtilService } from '../../../services/util.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GifListPageRoutingModule
  ],
  providers: [
    GiftService,
    UtilService],
  declarations: [GifListPage]
})
export class GifListPageModule {}
