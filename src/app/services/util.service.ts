import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Mail } from '../models/Mail';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public active:boolean;
  private miLoading: HTMLIonLoadingElement;
  private miToast: HTMLIonToastElement;

  constructor(
    private loading: LoadingController,
    private toast: ToastController,
    public http: HttpClient
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

  async presentToast(msg: string, clr: string, icn?:string) {
    const miToast = await this.toast.create({
      message: msg,
      duration: 6000,
      color: clr,
      icon:icn
    });
    miToast.present();
  }

  public async sendMail(mail: Mail): Promise<boolean> {

    if (mail != null &&
      mail.message != null && mail.receiver != null && mail.subject) {

        const body=mail;
        return new Promise(resolve => {

          this.http.post('localhost:8080' + '/mailSender', body).subscribe((data: any) => {

            resolve(data);
          }, error => {
            console.log(error);
            resolve(false);
          });
        });

    }
    else return new Promise(resolve => { resolve(false) });

  }
}
