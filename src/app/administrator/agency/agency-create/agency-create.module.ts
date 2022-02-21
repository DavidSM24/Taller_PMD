import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgencyCreatePageRoutingModule } from './agency-create-routing.module';

import { AgencyCreatePage } from './agency-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgencyCreatePageRoutingModule
  ],
  declarations: [AgencyCreatePage]
})
export class AgencyCreatePageModule {}
