import { Component, OnInit, ViewChild } from '@angular/core';
import { ExchangeGift } from 'src/app/models/ExchangeGift';
import { ExchangeGiftService } from 'src/app/services/exchange-gift.service';
import { AlertController, IonInfiniteScroll, IonSelect, LoadingController, ModalController, Platform, ToastController, IonSearchbar } from '@ionic/angular';
import { ExchangeGifUpdatePage } from '../exchange-gif-update/exchange-gif-update.page';
import { ExchangeGifSawPage } from '../exchange-gif-saw/exchange-gif-saw.page';
import { UtilService } from 'src/app/services/util.service';
import { AuthService } from 'src/app/services/auth.service';
import { enGB } from 'date-fns/locale';
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
      this.exGifts=await this.exs.getAllPaged(this.niTems, this.exGifts.length);
      this.exGifts= this.sortList(this.exGifts);

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
      newExchange=this.sortList(newExchange);
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

    console.log("entro en searchbar");
    let resultFilter:ExchangeGift[]=[];
    let listS:ExchangeGift[]=[];
    let selectO=this.select.value;
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
        if(!resultFilter.includes(e)){

          resultFilter.push(e);
        }
      })

      //points
      if(+this.searchStr>=0){
        list=await this.exs.getByPoints(this.searchStr);
        list.forEach((e:ExchangeGift)=>{
          if(!resultFilter.includes(e)){

            resultFilter.push(e);
          }
        })
      }

      //gift-name
      list=await this.exs.getByGiftName(this.searchStr);
      list.forEach((e:ExchangeGift)=>{
        let result:boolean=true;
        resultFilter.forEach((x:ExchangeGift)=>{
          if(x.id=e.id) result=false;
        })
        if(result) resultFilter.push(e);
      })

      //agency-user-name
      list=await this.exs.getByAgencyUsername(this.searchStr);
      list.forEach((e:ExchangeGift)=>{
        if(!resultFilter.includes(e)){

          resultFilter.push(e);
        }
      })

      if(selectO=="true"){
        resultFilter.forEach((e:ExchangeGift)=>{
          if(e.delivered) listS.push(e);
        })
        this.exGifts=listS;
        this.exGifts=this.sortList(this.exGifts);

      }

      else if(selectO=="false"){
        resultFilter.forEach((e:ExchangeGift)=>{
          if(!e.delivered) listS.push(e);
        })
        this.exGifts=listS;
        this.exGifts=this.sortList(this.exGifts);

      }

      else{
        this.exGifts=resultFilter;
        this.exGifts=this.sortList(this.exGifts);

      }

      this.infinite.disabled=false
      await this.miLoading.dismiss();
    }
    else if(lenght<1){

      resultFilter=resultFilter.concat(this.oldExGifts);

      if(selectO=="true"){
        resultFilter.forEach((e:ExchangeGift)=>{
          if(e.delivered) listS.push(e);
        })
        this.exGifts=listS;
        this.exGifts=this.sortList(this.exGifts);
      }

      else if(selectO=="false"){
        resultFilter.forEach((e:ExchangeGift)=>{
          if(!e.delivered) listS.push(e);
        })
        this.exGifts=listS;
        this.exGifts=this.sortList(this.exGifts);

      }

      else{
        this.exGifts=resultFilter;
        this.exGifts=this.sortList(this.exGifts);

      }

      this.infinite.disabled=this.oldInfinite;
      await this.miLoading.dismiss();
    }


  }

  public async changeDeliveredAlert(eg:ExchangeGift){

    let del:string;
    if(!eg.delivered) del= "Entregado"
    else del="Pendiente"

    const alert = await this.alerta.create({
      header: 'Cambio de estado de pedido.',
      message: 'El estado de este pedido se cambiará a '+del+", ¿está seguro que quiere continuar?",
      buttons: [
        {text: 'Aceptar',
        cssClass: 'secondary',
          handler: () => {
            this.changeDelivered(eg);
          }
        },{
          text: 'Cancelar',
          cssClass: 'rojo',
          handler: (blah) => {}},

      ]
    });
   await alert.present();
  }

  public async changeDelivered(eg:ExchangeGift){
    if(eg!=null) {

      eg.delivered=!eg.delivered;

      let del:string;
      if(eg.delivered) del= "Entregado"
      else del="Pendiente"


      try {
        await this.presentLoading();
        eg=await this.exs.createOrUpdate(eg);

        if(eg!=null){
          this.presentToast("Se ha cambiado el estado del pedido a "+del+".","success");
        }
        await this.miLoading.dismiss();
      } catch (error) {
        console.log(error);
        this.presentToast("Ha habido un error al cambiar el estado del pedido.","danger");
        await this.miLoading.dismiss();
      }

    }
  }

  private sortList(eg:ExchangeGift[]):ExchangeGift[] {
    if(eg!=null&&eg.length>1){
      eg=eg.sort((n1,n2) => {
        if (n1.dateExchange > n2.dateExchange) {
            return 1;
        }

        else if (n1.dateExchange < n2.dateExchange) {
            return -1;
        }

        else {
          if (n1.id > n2.id) {
            return 1;
          }

          else if (n1.id < n2.id) {
              return -1;
          }
        }
        return 0;
    });
    }

    return eg;
  }
}
