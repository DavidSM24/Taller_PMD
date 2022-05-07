import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarRepairCreatePageRoutingModule } from './car-repair-create-routing.module';

import { CarRepairCreatePage } from './car-repair-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarRepairCreatePageRoutingModule,

    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CarRepairCreatePage]
})
export class CarRepairCreatePageModule {}
