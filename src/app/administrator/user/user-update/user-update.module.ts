import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserUpdatePageRoutingModule } from './user-update-routing.module';

import { UserUpdatePage } from './user-update.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    UserUpdatePageRoutingModule
  ],
  declarations: []
})
export class UserUpdatePageModule {}
