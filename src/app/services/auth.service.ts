import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { LocalStorageService } from './local-storage.service';
import { User } from '../models/User';
import { UtilService } from './util.service';
import { Agency } from '../models/Agency';
import { AgencyService } from './agency.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: User;
  public agency?:Agency;
  private isAndroid = false;

  constructor(
    private storage: LocalStorageService,
    private platform: Platform,
    private router: Router,
    private as:AgencyService,
    private us:UserService,
    private uts:UtilService) {

      this.loadSession();
    }
  public async loadSession() {
    let user:any = await this.storage.getItem('tallerUser');

    if (user) {
      try{
        user = JSON.parse(user);
        this.user = user;

        let bdUser=await this.us.getByCode(this.user.code);
        if(bdUser&&this.user.password==bdUser.password){
          if(user&&user.administrator==false){
            let agency:Agency=await this.as.getByUsercode(user.code);
            if(agency){
              this.agency=agency;
              console.log(this.agency);
            }
          }
        }
        else {
          this.uts.presentToast("Las credenciales del usuario han cambiado, inicie sesión de nuevo.","danger","person");
          this.logout();
        }

      }
      catch(error){
        this.user=null;
      }

    }
  }

  public async logout() {
    await this.storage.removeItem('tallerUser');
    this.user = null;
    this.router.navigate(['']);
  }

  public async keepSession() {
    await this.storage.setItem('tallerUser', JSON.stringify(this.user));
  }

  public isLogged(): boolean {
    if (this.user) return true; else return false;
  }

  async createUser(email: string, password: string): Promise<boolean> {
    return true;
  }
}
