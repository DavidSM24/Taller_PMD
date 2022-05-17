import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NavControlService } from './services/nav-control.service';
import { AgencyService } from './services/agency.service';
import { GiftService } from './services/gift.service';
import { AuthService } from './services/auth.service';
import { UtilService } from './services/util.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },NavControlService, AgencyService,GiftService, AuthService,UtilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
