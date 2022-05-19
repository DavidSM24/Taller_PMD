import { Component, OnInit, ViewChild } from '@angular/core';
import { ExchangeGift } from 'src/app/models/ExchangeGift';
import { ExchangeGiftService } from 'src/app/services/exchange-gift.service';
import { AlertController, IonInfiniteScroll, IonSelect, LoadingController, ModalController, Platform, ToastController, IonSearchbar } from '@ionic/angular';
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
  @ViewChild(IonInfiniteScroll) infinite:IonInfiniteScroll;
  @ViewChild(IonSelect) select:IonSelect;
  @ViewChild(IonSearchbar) sb:IonSearchbar;

  oldInfinite:boolean;

  public searchStr:any;
  public exGifts:ExchangeGift[]=[];
  public oldExGifts:ExchangeGift[]=[];

  public exGiftsx:ExchangeGift[]=[];
  private niTems:number;
  public searchTerm:string;
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

          let i2: number = this.oldExGifts.indexOf(exchange);
          this.oldExGifts[i2] = resp.data.newExchange;
        }
      } catch (error) {
        console.log(error);
      }

    }

    public async setbyExGiftByStatus(event?){
      this.searchChange();
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

          let i2: number = this.oldExGifts.indexOf(exchangesaw);
          this.oldExGifts[i2] = resp.data.newExchange;
        }
      } catch (error) {
        console.log(error);
      }

    }

  public async cargaExGifts(event?){
    if(this.infinite){
      this.infinite.disabled=false;
      this.oldInfinite=false;
    }
    if(!event){
      await this.presentLoading();
    }
    this.exGifts=[];
    this.oldExGifts=[];
    try{
      this.exGifts=await this.exs.getAllPaged(this.niTems, this.exGifts.length);;
      this.oldExGifts=this.oldExGifts.concat(this.exGifts)
      this.exGiftsx=this.exGifts;
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
    let i2=this.oldExGifts.indexOf(exgift,0);
    if(i>-1){
      this.exGifts.splice(i,1);
    }
    if(i2>-1){
      this.oldExGifts.splice(i2,1);
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
      this.oldExGifts=this.oldExGifts.concat(newExchange);

      if (newExchange.length < 30) {
        this.infinite.disabled = true;
        this.oldInfinite=true;
      }
    }
  }
  public async reset(event?){
    this.infinite.disabled=false;
    this.oldInfinite=false;
    this.exGifts=[];
    this.oldExGifts=[];
    this.cargaExGifts(event);
  }

  public logout(){
    this.authS.logout();
  }

  public onSearchChange(event) {
    this.searchStr = event.detail.value;
  }

  async searchChange(){

    let selectO=this.select.value;;
    this.searchStr=this.sb.value;
    let list:ExchangeGift[]=[];
    this.exGifts=[];


    let lenght=this.searchStr.length;

    if(lenght>0){

      //consultar y cambiar lista
      await this.presentLoading();

      //date
      list=await this.exs.getByDateFilter(this.searchStr);
      list.forEach((e:ExchangeGift)=>{
        if(!this.exGifts.includes(e)){

          this.exGifts.push(e);
        }
      })

      //points
      if(+this.searchStr>=0){
        list=await this.exs.getByPoints(this.searchStr);
        list.forEach((e:ExchangeGift)=>{
          if(!this.exGifts.includes(e)){

            this.exGifts.push(e);
          }
        })
      }

      //gift-name
      list=await this.exs.getByGiftName(this.searchStr);
      list.forEach((e:ExchangeGift)=>{
        if(!this.exGifts.includes(e)){

          this.exGifts.push(e);
        }
      })

      //agency-user-name
      list=await this.exs.getByAgencyUsername(this.searchStr);
      list.forEach((e:ExchangeGift)=>{
        if(!this.exGifts.includes(e)){

          this.exGifts.push(e);
        }
      })

      if(selectO=="true"){
        for(let i:number=0;i<this.exGifts.length;i++){
          this.exGifts.forEach((e:ExchangeGift)=>{
            if(!e.delivered){
              let i:number=this.exGifts.indexOf(e);
              this.exGifts.splice(i,1);
            }
          })
        }

      }

      if(selectO=="false"){
        for(let i:number=0;i<this.exGifts.length;i++){
          this.exGifts.forEach((e:ExchangeGift)=>{
            if(e.delivered){
              let i:number=this.exGifts.indexOf(e);
              this.exGifts.splice(i,1);
            }
          })
        }

      }

      this.infinite.disabled=false
      await this.miLoading.dismiss();
    }
    else if(lenght<1){
      this.exGifts=[];
      this.exGifts=this.exGifts.concat(this.oldExGifts);


      this.infinite.disabled=this.oldInfinite;
      await this.miLoading.dismiss();
    }

    if(selectO=="true"){
      for(let i:number=0;i<this.exGifts.length;i++){
        this.exGifts.forEach((e:ExchangeGift)=>{
          if(!e.delivered){
            let i:number=this.exGifts.indexOf(e);
            this.exGifts.splice(i,1);
          }
        })
      }

    }

    if(selectO=="false"){
      for(let i:number=0;i<this.exGifts.length;i++){
        this.exGifts.forEach((e:ExchangeGift)=>{
          if(e.delivered){
            let i:number=this.exGifts.indexOf(e);
            this.exGifts.splice(i,1);
          }
        })
      }

    }
  }
}
