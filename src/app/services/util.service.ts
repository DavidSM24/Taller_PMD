import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public active:boolean;
  private miLoading: HTMLIonLoadingElement;
  private miToast: HTMLIonToastElement;

  constructor(
    private loading: LoadingController,
    private toast: ToastController
  ) { }

  async presentLoading() {

    if(!this.active){
      this.miLoading = await this.loading.create({
        message: ''
      });
      await this.miLoading.present();
      this.active=true;
    }

  }

  async hideLoading(){
    await this.miLoading.dismiss();
    this.active=false;
  }

  async presentToast(msg: string, clr: string) {
    const miToast = await this.toast.create({
      message: msg,
      duration: 3000,
      color: clr
    });
    miToast.present();
  }
}
