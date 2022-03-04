import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgencyCreatePageRoutingModule } from './agency-create-routing.module';

import { AgencyCreatePage } from './agency-create.page';
import { InsuranceCompanyService } from '../../../services/insurance-company.service';
import { AgencyService } from 'src/app/services/agency.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgencyCreatePageRoutingModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[AgencyService,InsuranceCompanyService],
  declarations: [AgencyCreatePage]
})
export class AgencyCreatePageModule {}
