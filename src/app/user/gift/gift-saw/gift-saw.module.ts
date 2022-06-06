import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftSawPageRoutingModule } from './gift-saw-routing.module';

import { GiftSawPage } from './gift-saw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftSawPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GiftSawPage]
})
export class GiftSawPageModule {}
