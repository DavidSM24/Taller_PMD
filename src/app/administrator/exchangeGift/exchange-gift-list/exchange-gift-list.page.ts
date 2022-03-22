import { Component, OnInit, ViewChild } from '@angular/core';
import { ExchangeGift } from 'src/app/models/ExchangeGift';
import { ExchangeGiftService } from 'src/app/services/exchange-gift.service';
import { AlertController, IonInfiniteScroll, LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { ExchangeGifUpdatePage } from '../exchange-gif-update/exchange-gif-update.page';
import { ExchangeGifSawPage } from '../exchange-gif-saw/exchange-gif-saw.page';
@Component({
  selector: 'app-exchange-gift-list',
  templateUrl: './exchange-gift-list.page.html',
  styleUrls: ['./exchange-gift-list.page.scss'],
})
export class ExchangeGiftListPage {
  public exGifts:ExchangeGift[]=[];
  private niTems:number;
  public searchTerm:string;
  @ViewChild(IonInfiniteScroll) infinite:IonInfiniteScroll;
  private miLoading:HTMLIonLoadingElement;
  constructor(private exs:ExchangeGiftService,
    private loading:LoadingController,
    private toast:ToastController,
    private alerta: AlertController,
    private pt: Platform,
    private modalCtrl: ModalController) { }

    async ionViewDidEnter(){
      this.niTems = Math.ceil(this.pt.height() / 20 + 10);
      await this.cargaExGifts();
    }

    public async edit(exchange: ExchangeGift) {
      try {
        const modal = await this.modalCtrl.create({
          component: ExchangeGifUpdatePage,
          cssClass: 'fullscreen',
          componentProps: {
            'exchange': exchange
          }
        });
  
        await modal.present();
  
        const resp = await modal.onDidDismiss();
  
        if (resp.data != null) {
          let i: number = this.exGifts.indexOf(exchange);
          this.exGifts[i] = resp.data.newExchange;
        }
      } catch (error) {
        console.log(error);
      }
  
    }

    public async saw(exchangesaw: ExchangeGift) {
      try {
        const modal = await this.modalCtrl.create({
          component: ExchangeGifSawPage,
          cssClass: 'fullscreen',
          componentProps: {
            'exchangesaw': exchangesaw
          }
        });
  
        await modal.present();
  
        const resp = await modal.onDidDismiss();
  
        if (resp.data != null) {
          let i: number = this.exGifts.indexOf(exchangesaw);
          this.exGifts[i] = resp.data.newExchange;
        }
      } catch (error) {
        console.log(error);
      }
  
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
      this.exGifts=await this.exs.getAllPaged(this.niTems, this.exGifts.length);;
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
  public async infiniteLoad($event) {
    let newExchange: ExchangeGift[] = [];
    if (!this.infinite.disabled) {
      newExchange = await this.exs.getAllPaged(this.niTems, this.exGifts.length);
      this.exGifts = this.exGifts.concat(newExchange);

      if (newExchange.length < 30) {
        this.infinite.disabled = true;
      }
    }
  }
  public async reset(event){
    this.infinite.disabled=false;
    this.exGifts=[];
    this.cargaExGifts(event);
  }
}
