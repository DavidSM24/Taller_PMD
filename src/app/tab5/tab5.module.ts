import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5PageRoutingModule } from './tab5-routing.module';

import { Tab5Page } from './tab5.page';
import { AgencyService } from '../services/agency.service';
import { GiftService } from '../services/gift.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5PageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AgencyService, GiftService],
  declarations: [Tab5Page]
})
export class Tab5PageModule {}
