import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GifCreatePageRoutingModule } from './gif-create-routing.module';

import { GifCreatePage } from './gif-create.page';
import { GiftService } from '../../../services/gift.service';
import { UtilService } from '../../../services/util.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GifCreatePageRoutingModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers:[GiftService,UtilService],
  declarations: [GifCreatePage]
})
export class GifCreatePageModule {}
