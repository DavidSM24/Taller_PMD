import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarRepairListPageRoutingModule } from './car-repair-list-routing.module';

import { CarRepairListPage } from './car-repair-list.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarRepairListPageRoutingModule,

    ReactiveFormsModule
  ],
  declarations: [CarRepairListPage]
})
export class CarRepairListPageModule {}
