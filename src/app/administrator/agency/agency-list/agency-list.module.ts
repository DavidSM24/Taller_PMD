import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgencyListPageRoutingModule } from './agency-list-routing.module';

import { AgencyListPage } from './agency-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgencyListPageRoutingModule
  ],
  declarations: [AgencyListPage]
})
export class AgencyListPageModule {}
