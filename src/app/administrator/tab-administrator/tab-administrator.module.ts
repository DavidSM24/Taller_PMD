import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabAdministratorPageRoutingModule } from './tab-administrator-routing.module';

import { TabAdministratorPage } from './tab-administrator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TabAdministratorPageRoutingModule,


  ],
  declarations: [TabAdministratorPage]
})
export class TabAdministratorPageModule {}
