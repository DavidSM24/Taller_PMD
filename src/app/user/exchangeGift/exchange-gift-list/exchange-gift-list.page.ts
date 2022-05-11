import { ExchangeGift } from 'src/app/models/ExchangeGift';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ExchangeGiftService } from '../../../services/exchange-gift.service';
import { AlertController, IonInfiniteScroll, Platform } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-exchange-gift-list',
  templateUrl: './exchange-gift-list.page.html',
  styleUrls: ['./exchange-gift-list.page.scss'],
})
export class ExchangeGiftListPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;
  public exchanges: ExchangeGift[] = [];

  searchStr = "";
  niTems: number;


  filter:string;

  constructor(
    private exs: ExchangeGiftService,
    private AlertCtrl: AlertController,
    private pt: Platform,
    private uts: UtilService,
    private authS:AuthService
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

      this.uts.presentLoading();

      //this.infinite.disabled=false;
      newExchanges=await this.exs.getByAgencyPaged(null,this.niTems,0);

      this.exchanges=this.exchanges.concat(newExchanges);

    }

    if(newExchanges.length<this.niTems){
      //this.infinite.disabled=true;
    }

    if(event){
      event.target.complete();
    }
    else{

    }
    this.uts.hideLoading();
  }

  public async infiniteLoad($event) {
    let newExchanges: ExchangeGift[] = [];
    if (!this.infinite.disabled) {
      newExchanges = await this.exs.getAllPaged(this.niTems, this.exchanges.length);
      this.exchanges = this.exchanges.concat(newExchanges);

      if (newExchanges.length < 30) {
        this.infinite.disabled = true;
      }
    }
  }

  public onSearchChange(event) {
    this.searchStr = event.detail.value;
  }

  public async reset(event) {
    this.infinite.disabled = false;
    this.exchanges = [];
    this.loadExchanges(event);
  }

  async searchChange(event){
    this.searchStr=event.detail.value;
    console.log(this.searchStr);

    let list:ExchangeGift[]=[];

    let lenght=this.searchStr.length;
    if(lenght>1){
      this.exchanges.forEach(agency=>{
        if(true){
          list.push(agency);
        }

      })
      this.exchanges=list;

    }
    else if(lenght<1){
      this.reset(null);
      this.uts.hideLoading();
    }
  }

}
