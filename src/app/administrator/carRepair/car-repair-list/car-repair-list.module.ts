import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarRepairListPageRoutingModule } from './car-repair-list-routing.module';

import { CarRepairListPage } from './car-repair-list.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarRepairListPageRoutingModule,

    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  declarations: [CarRepairListPage]
})
export class CarRepairListPageModule {}
