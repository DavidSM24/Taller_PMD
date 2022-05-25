import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyListPageRoutingModule } from './company-list-routing.module';

import { CompanyListPage } from './company-list.page';
import { CompanyUpdatePage } from '../company-update/company-update.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CompanyListPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CompanyListPage,CompanyUpdatePage]
})
export class CompanyListPageModule {}
