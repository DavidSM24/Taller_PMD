import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { LocalStorageService } from './local-storage.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: any;
  private isAndroid = false;

  constructor(
    private storage: LocalStorageService,
    private platform: Platform,
    private router: Router) {
    
      this.loadSession();
    }
  public async loadSession() {
    let user = await this.storage.getItem('tallerUser');
    console.log(user);
    if (user) {
      try{
        user = JSON.parse(user);
        this.user = user;
      }
      catch(error){
        this.user=null;
      }
      
    }
  }
  
  public async logout() {
    await this.storage.removeItem('tallerUser');
    this.user = null;
    this.router.navigate([''])
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
