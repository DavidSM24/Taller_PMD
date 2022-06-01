import { GiftSawPage } from './../gift-saw/gift-saw.page';
import { IonInfiniteScroll, Platform, ModalController } from '@ionic/angular';
import { UtilService } from './../../../services/util.service';
import { GiftService } from './../../../services/gift.service';
import { Gift } from 'src/app/models/Gift';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.page.html',
  styleUrls: ['./gift-list.page.scss'],
})
export class GiftListPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;
  public searchTerm: string;
  private niTems: number;
  public img:string;
  public gifts: Gift[] = [];
  public horizontalCol:number;

  constructor(private authS: AuthService, private gs: GiftService,
    private modalCtrl: ModalController,
    private uts: UtilService,
    private pt: Platform) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {

    this.horizontalCol = Math.ceil(this.pt.height() / 540);

    console.log(this.gs.added);

    if (this.gs.added) {

      this.reset(null);
      this.gs.added = false;
    }
    else {
      this.niTems = Math.ceil(this.pt.height() / 20 + 10);
      await this.loadgifts();
    }

  }

  public async loadgifts(event?) {

    let newGifts: Gift[] = [];

    if (this.gifts.length == 0) { //inicio

      await this.uts.presentLoading();

      this.infinite.disabled = false;
      newGifts = await this.gs.getAllPaged(this.niTems, 0);

      if (newGifts.length < this.niTems) {
        this.infinite.disabled = true;
      }

      newGifts.forEach((e:Gift)=>{
        if(!e.available) newGifts.splice(newGifts.indexOf(e),1);
      })

      this.gifts = this.gifts.concat(newGifts);

    }

    if (event) {
      event.target.complete();
    }
    else {

    }
    await this.uts.hideLoading();
  }
  public async infiniteLoad($event) {
    let newgifts: Gift[] = [];

    if (!this.infinite.disabled) {
      newgifts = await this.gs.getAllPaged(this.niTems, this.gifts.length);
      this.gifts = this.gifts.concat(newgifts);

      if (newgifts.length < this.niTems) {
        this.infinite.disabled = true;
      }

      newgifts.forEach((e:Gift)=>{
        if(!e.available) newgifts.splice(newgifts.indexOf(e),1);
      })
    }

    this.infinite.complete();


  }

  public async reset(event) {
    this.infinite.disabled = false;
    this.gifts = [];
    this.loadgifts(event)
  }

  public logout() {
    this.authS.logout();
  }
  public async buy(giftsaw: Gift) {
    try {
      const modal = await this.modalCtrl.create({
        component: GiftSawPage,
        cssClass: "fullscreen",
        componentProps: {
          'giftsaw': giftsaw
        }
      });
      await modal.present();
      const resp = await modal.onDidDismiss();
      if (resp.data != null) {
        let i: number = this.gifts.indexOf(giftsaw);
        this.gifts[i] = resp.data.newGift;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
