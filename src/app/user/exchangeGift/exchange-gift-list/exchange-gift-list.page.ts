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
      this.exchanges=this.sortList(this.exchanges);
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
      newExchanges=this.sortList(newExchanges);
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

    console.log("entro en searchbar");
    let resultFilter:ExchangeGift[]=[];
    let listS:ExchangeGift[]=[];
    let selectO=this.select.value;
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
        if(!resultFilter.includes(e)){

          if(e.agency.id==this.authS.agency.id){
            resultFilter.push(e);
          }
        }
      })

      //points
      if(+this.searchStr>=0){
        list=await this.exs.getByPoints(this.searchStr);
        list.forEach((e:ExchangeGift)=>{
          if(!resultFilter.includes(e)){

            if(e.agency.id==this.authS.agency.id){
              resultFilter.push(e);
            }
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
        if(result && e.agency.id==this.authS.agency.id) resultFilter.push(e);
      })

      //agency-user-name
      list=await this.exs.getByAgencyUsername(this.searchStr);
      list.forEach((e:ExchangeGift)=>{
        if(!resultFilter.includes(e)){

          if(e.agency.id==this.authS.agency.id){
            resultFilter.push(e);
          }
        }
      })

      if(selectO=="true"){
        resultFilter.forEach((e:ExchangeGift)=>{
          if(e.delivered) listS.push(e);
        })
        this.exchanges=listS;
      }

      else if(selectO=="false"){
        resultFilter.forEach((e:ExchangeGift)=>{
          if(!e.delivered) listS.push(e);
        })
        this.exchanges=listS;
      }

      else{
        this.exchanges=resultFilter;
      }

      this.infinite.disabled=false
      await this.uts.hideLoading();
    }
    else if(lenght<1){

      resultFilter=resultFilter.concat(this.oldExchanges);

      if(selectO=="true"){
        resultFilter.forEach((e:ExchangeGift)=>{
          if(e.delivered) listS.push(e);
        })
        this.exchanges=listS;
      }

      else if(selectO=="false"){
        resultFilter.forEach((e:ExchangeGift)=>{
          if(!e.delivered) listS.push(e);
        })
        this.exchanges=listS;
      }

      else{
        this.exchanges=resultFilter;
      }

      this.infinite.disabled=this.oldInfinite;
      await this.uts.hideLoading();
    }

    this.exchanges=this.sortList(this.exchanges);

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

  public logout() {
    this.authS.logout();
  }
}
