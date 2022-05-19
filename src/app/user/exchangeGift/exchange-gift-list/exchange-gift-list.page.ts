import { ExchangeGift } from 'src/app/models/ExchangeGift';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ExchangeGiftService } from '../../../services/exchange-gift.service';
import { AlertController, IonInfiniteScroll, Platform, ModalController, IonSearchbar, IonSelect } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { AuthService } from 'src/app/services/auth.service';
import { ExchangeGiftSawPage } from '../exchange-gift-saw/exchange-gift-saw.page';

@Component({
  selector: 'app-exchange-gift-list',
  templateUrl: './exchange-gift-list.page.html',
  styleUrls: ['./exchange-gift-list.page.scss'],
})
export class ExchangeGiftListPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infinite:IonInfiniteScroll;
  @ViewChild(IonSelect) select:IonSelect;
  @ViewChild(IonSearchbar) sb:IonSearchbar;

  oldInfinite:boolean;

  public exchanges: ExchangeGift[] = [];
  oldExchanges: ExchangeGift[] = [];

  searchStr = "";
  niTems: number;


  filter:string;

  constructor(
    private exs: ExchangeGiftService,
    private AlertCtrl: AlertController,
    private pt: Platform,
    private uts: UtilService,
    private authS:AuthService,
    private modalCtrl:ModalController
  ) { }

  ngOnInit() {

  }

  async ionViewWillEnter(){
    this.niTems = Math.ceil(this.pt.height() / 20 + 10);
    await this.loadExchanges();

    console.log(this.exchanges)
  }

  async loadExchanges(event?){
    let newExchanges:ExchangeGift[]=[];

    if(this.exchanges.length==0){ //inicio

      await this.uts.presentLoading();

      //this.infinite.disabled=false;
      console.log(this.authS.agency);
      newExchanges=await this.exs.getByAgencyPaged(this.authS.agency,this.niTems,0);
      //newExchanges=await this.exs.getAll();
      this.exchanges=this.exchanges.concat(newExchanges);
      this.oldExchanges=[];
      this.oldExchanges=this.oldExchanges.concat(newExchanges);

    }

    if(newExchanges.length<this.niTems){
      this.infinite.disabled=true;
      this.oldInfinite=true;
    }

    if(event){
      event.target.complete();
    }
    else{

    }
    await this.uts.hideLoading();
  }

  public async infiniteLoad($event) {
    let newExchanges: ExchangeGift[] = [];
    if (!this.infinite.disabled) {
      newExchanges = await this.exs.getAllPaged(this.niTems, this.exchanges.length);
      this.exchanges = this.exchanges.concat(newExchanges);
      this.oldExchanges=this.oldExchanges.concat(newExchanges);

      if (newExchanges.length < 30) {
        this.infinite.disabled = true;
        this.oldInfinite=true;
      }
    }
  }

  public async reset(event) {
    this.infinite.disabled = false;
    this.oldInfinite=false;
    this.exchanges = [];
    this.oldExchanges=[];
    this.loadExchanges(event);
  }

  async searchChange(){
    let selectO=this.select.value;;
    this.searchStr=this.sb.value;

    let list:ExchangeGift[]=[];
    this.exchanges=[];

    let lenght=this.searchStr.length;

    if(lenght>0){

      //consultar y cambiar lista
      await this.uts.presentLoading();

      //date
      list=await this.exs.getByDateFilter(this.searchStr);
      list.forEach((e:ExchangeGift)=>{
        if(!this.exchanges.includes(e)){

          //filtrar por agencia
          if(e.agency.id==this.authS.agency.id){
            this.exchanges.push(e);
          }
        }
      })

      //points
      if(+this.searchStr>=0){
        list=await this.exs.getByPoints(this.searchStr);
        list.forEach((e:ExchangeGift)=>{
          if(!this.exchanges.includes(e)){

            //filtrar por agencia
            if(e.agency.id==this.authS.agency.id){
              this.exchanges.push(e);
            }
          }
        })
      }

      //gift-name
      list=await this.exs.getByGiftName(this.searchStr);
      list.forEach((e:ExchangeGift)=>{
        if(!this.exchanges.includes(e)){

          //filtrar por agencia
          if(e.agency.id==this.authS.agency.id){
            this.exchanges.push(e);
          }
        }
      })

      if(selectO=="true"){
        this.exchanges.forEach((e:ExchangeGift)=>{
          if(!e.delivered){
            let i:number=this.exchanges.indexOf(e);
            this.exchanges.splice(i,1);
          }
        })
      }

      else if(selectO=="false"){
        this.exchanges.forEach((e:ExchangeGift)=>{
          if(e.delivered){
            let i:number=this.exchanges.indexOf(e);
            this.exchanges.splice(i,1);
          }
        })
      }


      this.infinite.disabled=true;
      await this.uts.hideLoading()
    }
    else if(lenght<1){
      this.exchanges=[];
      this.exchanges=this.exchanges.concat(this.oldExchanges);
      this.infinite.disabled=this.oldInfinite;
      await this.uts.hideLoading();
    }

    if(selectO=="true"){
      for(let i:number=0;i<this.exchanges.length;i++){
        this.exchanges.forEach((e:ExchangeGift)=>{
          if(!e.delivered){
            let i:number=this.exchanges.indexOf(e);
            this.exchanges.splice(i,1);
          }
        })
      }

    }

    if(selectO=="false"){
      for(let i:number=0;i<this.exchanges.length;i++){
        this.exchanges.forEach((e:ExchangeGift)=>{
          if(e.delivered){
            let i:number=this.exchanges.indexOf(e);
            this.exchanges.splice(i,1);
          }
        })
      }

    }
  }

  public async show(exchangesaw: ExchangeGift) {
    try {
      const modal = await this.modalCtrl.create({
        component: ExchangeGiftSawPage,
        componentProps: {
          'exchangesaw': exchangesaw
        }
      });

      await modal.present();

      const resp = await modal.onDidDismiss();

      if (resp.data != null) {

        let i: number = this.exchanges.indexOf(exchangesaw);
        let i2: number = this.oldExchanges.indexOf(exchangesaw);

        await this.uts.presentLoading();
        this.exchanges.splice(i,1);
        this.oldExchanges.splice(i2,1);
        await this.uts.hideLoading();

      }

    } catch (error) {
      console.log(error);
    }

  }

}
