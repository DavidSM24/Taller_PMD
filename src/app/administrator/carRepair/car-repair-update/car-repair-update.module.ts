import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarRepairUpdatePageRoutingModule } from './car-repair-update-routing.module';

import { CarRepairUpdatePage } from './car-repair-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarRepairUpdatePageRoutingModule
  ],
  declarations: [CarRepairUpdatePage]
})
export class CarRepairUpdatePageModule {}
