import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GifListPageRoutingModule } from './gif-list-routing.module';

import { GifListPage } from './gif-list.page';
import { GiftService } from '../../../services/gift.service';
import { UtilService } from '../../../services/util.service';
import { GifUpdatePage } from '../gif-update/gif-update.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    GifListPageRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [
    GiftService,
    UtilService],
  declarations: [GifListPage,GifUpdatePage]
})
export class GifListPageModule {}
