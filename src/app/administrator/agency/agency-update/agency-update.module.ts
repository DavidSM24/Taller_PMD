import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AgencyUpdatePageRoutingModule } from './agency-update-routing.module';

import { AgencyService } from '../../../services/agency.service';
import { UtilService } from '../../../services/util.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AgencyUpdatePageRoutingModule
  ],
  providers:[AgencyService,UtilService],
  declarations: []
})
export class AgencyUpdatePageModule {}
