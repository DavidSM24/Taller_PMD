import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarRepairSawPageRoutingModule } from './car-repair-saw-routing.module';

import { CarRepairSawPage } from './car-repair-saw.page';
import { CarRepairService } from 'src/app/services/car-repair.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarRepairSawPageRoutingModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    CarRepairService
  ],
  declarations: [CarRepairSawPage]
})
export class CarRepairSawPageModule {}
