import { Component, OnInit, ViewChild } from '@angular/core';
import { ExchangeGift } from 'src/app/models/ExchangeGift';
import { ExchangeGiftService } from 'src/app/services/exchange-gift.service';
import { AlertController, IonInfiniteScroll, LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { ExchangeGifUpdatePage } from '../exchange-gif-update/exchange-gif-update.page';
import { ExchangeGifSawPage } from '../exchange-gif-saw/exchange-gif-saw.page';
import { UtilService } from 'src/app/services/util.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-exchange-gift-list',
  templateUrl: './exchange-gift-list.page.html',
  styleUrls: ['./exchange-gift-list.page.scss'],
})
export class ExchangeGiftListPage {
  public exGifts:ExchangeGift[]=[];
  public exGiftsx:ExchangeGift[]=[];
  private niTems:number;
  public searchTerm:string;
  @ViewChild(IonInfiniteScroll) infinite:IonInfiniteScroll;
  private miLoading:HTMLIonLoadingElement;
  constructor(private exs:ExchangeGiftService,
    private loading:LoadingController,
    private toast:ToastController,
    private alerta: AlertController,
    private pt: Platform,
    private modalCtrl: ModalController,
    private authS:AuthService) { }
    private uts:UtilService
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
            exchange: exchange
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

    public async setbyExGiftByStatus(event?){
    
      let exgif:ExchangeGift[]=[]
      const value:string=event.detail.value;
       
  
      if("false".match(value)){
        this.exGiftsx.forEach(repair=>{
          if(!repair.delivered){
            exgif.push(repair);
          }
        });
        this.exGifts=exgif;
  
      } else if("true".match(value)){
        this.exGiftsx.forEach(x=>{
          if(x.delivered){
            exgif.push(x);
          }
        });
        console.log(exgif);
        this.exGifts=exgif;
      }else if("all".match(value)) {
        this.reset();
      }
    }
    public async saw(exchangesaw: ExchangeGift) {
      try {
        const modal = await this.modalCtrl.create({
          component: ExchangeGifSawPage,
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
    public storageexchanges(){
      this.exGiftsx=this.exGifts;
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
      this.storageexchanges();
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
      message: '¿Desea eliminar este Pedido?',
      buttons: [
        {text: 'Eliminar',
        cssClass: 'rojo',
          handler: () => {
            this.borra(n)
          }
        },{
          text: 'Cancelar',
          cssClass: 'secondary',
          handler: (blah) => {}},
          
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
  public async reset(event?){
    this.infinite.disabled=false;
    this.exGifts=[];
    this.cargaExGifts(event);
  }
  public logout(){
    this.authS.logout();
  }
}
