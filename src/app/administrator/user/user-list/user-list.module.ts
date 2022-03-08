import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserListPageRoutingModule } from './user-list-routing.module';

import { UserListPage } from './user-list.page';
import { UserUpdatePage } from '../user-update/user-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserListPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UserListPage, UserUpdatePage]
})
export class UserListPageModule {}
