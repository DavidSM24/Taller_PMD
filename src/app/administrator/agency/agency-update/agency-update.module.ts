import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgencyUpdatePageRoutingModule } from './agency-update-routing.module';

import { AgencyUpdatePage } from './agency-update.page';
import { AgencyService } from '../../../services/agency.service';
import { UtilService } from '../../../services/util.service';
import { InsuranceCompanyService } from 'src/app/services/insurance-company.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AgencyUpdatePageRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    InsuranceCompanyService
  ],
  providers:[AgencyService,UtilService,InsuranceCompanyService],
  declarations: [AgencyUpdatePage]
})
export class AgencyUpdatePageModule {}
