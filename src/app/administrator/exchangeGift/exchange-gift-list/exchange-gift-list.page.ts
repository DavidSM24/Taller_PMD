import { Component, OnInit, ViewChild } from '@angular/core';
import { ExchangeGift } from 'src/app/models/ExchangeGift';
import { ExchangeGiftService } from 'src/app/services/exchange-gift.service';
import { AlertController, IonInfiniteScroll, LoadingController, ModalController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-exchange-gift-list',
  templateUrl: './exchange-gift-list.page.html',
  styleUrls: ['./exchange-gift-list.page.scss'],
})
export class ExchangeGiftListPage {
  public exGifts:ExchangeGift[]=[];
  @ViewChild(IonInfiniteScroll) infinite:IonInfiniteScroll;
  private miLoading:HTMLIonLoadingElement;
  constructor(private exs:ExchangeGiftService,
    private loading:LoadingController,
    private toast:ToastController,
    private alerta: AlertController,) { }

    async ionViewDidEnter(){
      await this.cargaExGifts();
    }
  public async cargaExGifts(event?){
    if(this.infinite){
      this.infinite.disabled=false;
    }
    if(!event){
      await this.presentLoading();
    }
    this.exGifts=[];
    try{
      this.exGifts=await this.exs.getAll();
    }catch(err){
      console.error(err);
      await this.presentToast("Error cargando datos","danger");
    } finally{
      if(event){
        event.target.complete();
      }else{
        await this.miLoading.dismiss();
      }
    }
  }
  public async borra(exgift:ExchangeGift){
    await this.presentLoading();
    await this.exs.delete(exgift);
    let i=this.exGifts.indexOf(exgift,0);
    if(i>-1){
      this.exGifts.splice(i,1);
    }
    await this.miLoading.dismiss();
  }
  public async cargaInfinita($event){
    console.log("CARGAND");
    let nuevosExGifts=await this.exs.getAll();
    if(nuevosExGifts.length<10){
      $event.target.disabled=true;
    }
    this.exGifts=this.exGifts.concat(nuevosExGifts);
    $event.target.complete();
  }
  async presentLoading() {
    this.miLoading = await this.loading.create({
      message: ''
    });
    await this.miLoading.present();
  }
  async presentToast(msg:string,clr:string) {
    const miToast = await this.toast.create({
      message: msg,
      duration: 2000,
      color:clr
    });
    miToast.present();
  }
  public async mensagealerta(n:any){
    const alert = await this.alerta.create({
      header: 'Eliminar',
      message: '¿Desea eliminar Este Regalo Intercambiado?',
      buttons: [{
          text: 'Cancelar',
          handler: (blah) => {}},
          {text: 'Eliminar',
          handler: () => {
            this.borra(n)
          }
        }
      ]
    });
   await alert.present();
  }

  public async reset(event){
    this.infinite.disabled=false;
    this.exGifts=[];
    this.cargaExGifts(event);
  }
}
