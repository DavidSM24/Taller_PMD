import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgencySawPageRoutingModule } from './agency-saw-routing.module';

import { AgencySawPage } from './agency-saw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgencySawPageRoutingModule
  ],
  declarations: [AgencySawPage]
})
export class AgencySawPageModule {}
