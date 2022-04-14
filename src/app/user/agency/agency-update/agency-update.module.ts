import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgencyUpdatePageRoutingModule } from './agency-update-routing.module';

import { AgencyUpdatePage } from './agency-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgencyUpdatePageRoutingModule
  ],
  declarations: [AgencyUpdatePage]
})
export class AgencyUpdatePageModule {}
