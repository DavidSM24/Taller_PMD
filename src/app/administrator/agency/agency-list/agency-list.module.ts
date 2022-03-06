import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgencyListPageRoutingModule } from './agency-list-routing.module';

import { AgencyListPage } from './agency-list.page';
import { AgencyService } from '../../../services/agency.service';
import { UtilService } from '../../../services/util.service';
import { AgencyUpdatePage } from '../agency-update/agency-update.page';
import { Agency } from '../../../models/Agency';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AgencyListPageRoutingModule,

    FormsModule
    

  ],
  providers:[AgencyService,UtilService],
  declarations: [AgencyListPage]
})
export class AgencyListPageModule {}
