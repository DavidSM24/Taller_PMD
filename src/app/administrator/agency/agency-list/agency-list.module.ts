import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgencyListPageRoutingModule } from './agency-list-routing.module';

import { AgencyListPage } from './agency-list.page';
import { AgencyService } from '../../../services/agency.service';
import { UtilService } from '../../../services/util.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgencyListPageRoutingModule
  ],
  providers:[AgencyService,UtilService],
  declarations: [AgencyListPage]
})
export class AgencyListPageModule {}
