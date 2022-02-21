import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarRepairSawPageRoutingModule } from './car-repair-saw-routing.module';

import { CarRepairSawPage } from './car-repair-saw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarRepairSawPageRoutingModule
  ],
  declarations: [CarRepairSawPage]
})
export class CarRepairSawPageModule {}
