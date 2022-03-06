import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgencyCreatePageRoutingModule } from './agency-create-routing.module';

import { AgencyCreatePage } from './agency-create.page';
import { InsuranceCompanyService } from '../../../services/insurance-company.service';
import { AgencyService } from 'src/app/services/agency.service';
import { UserService } from '../../../services/user.service';
import { UtilService } from 'src/app/services/util.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AgencyCreatePageRoutingModule,

    FormsModule,
    ReactiveFormsModule

  ],
  providers:[AgencyService,InsuranceCompanyService,UtilService],
  declarations: [AgencyCreatePage]
})
export class AgencyCreatePageModule {}
