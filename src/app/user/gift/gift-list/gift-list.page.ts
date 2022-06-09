import { Agency } from './../../../models/Agency';
import { GiftSawPage } from './../gift-saw/gift-saw.page';
import { IonInfiniteScroll, Platform, ModalController, IonSelect, IonSearchbar } from '@ionic/angular';
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

  @ViewChild(IonSearchbar) sb:IonSearchbar;
  public searchStr = "";
  public searchTerm: string;
  private niTems: number;
  public img:string;
  public gifts: Gift[] = [];
  public oldInfinite:boolean;
  public oldGifts: Gift []=[];
  public actualpoints:number;
  constructor(private gs: GiftService,
    private modalCtrl: ModalController,
    private uts: UtilService,
    private pt: Platform,
    public ats:AuthService) { 

      this.actualpoints=-1;
    }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    
    console.log(this.gs.added);

    if (this.gs.added) {

      this.actualpoints=this.ats.agency.points;
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
      newGifts = await this.gs.getByAvailablePaged(true,this.niTems, 0);

      this.gifts = this.gifts.concat(newGifts);
      this.oldGifts=this.oldGifts.concat(this.gifts);
      this.actualpoints=this.ats.agency.points;

    }

    if (newGifts.length < this.niTems) {
      this.infinite.disabled = true;
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
      newgifts = await this.gs.getByAvailablePaged(true,this.niTems, this.gifts.length);
      this.gifts = this.gifts.concat(newgifts);
      this.oldGifts=this.oldGifts.concat(newgifts);

      if (newgifts.length < this.niTems) {
        this.infinite.disabled = true;
      }
    }
    this.infinite.complete();
  }

  public async reset(event) {
    this.infinite.disabled = false;
    this.gifts = [];
    this.loadgifts(event)
  }

  public logout() {
    this.ats.logout();
  }

  public async buy(giftsaw: Gift) {
    let agency:Agency
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
        agency=resp.data.nagency
        this.actualpoints=this.ats.agency.points;
      }
    } catch (error) {
      console.log(error);
    }
  }



  public async searchChange() {

    this.searchStr = this.sb.value;
    let regex: RegExp = new RegExp("^[ ]");

    try {
      if (!this.searchStr.match(regex)) {
        let resultFilter: Gift[] = [];
        let listS: Gift[] = [];

        let list: Gift[] = [];
        this.gifts = [];

        let lenght = this.searchStr.length;
        if (lenght > 0) {

          //consultar y cambiar lista
          await this.uts.presentLoading();

          //nombre
          list = await this.gs.getByNamePaged(this.searchStr, 9999, 0);
          list.forEach((e: Gift) => {
            let result: boolean = true;
            resultFilter.forEach((x: Gift) => {
              if (x.id == e.id || x.available==false) result = false;
            })
            if (result) resultFilter.push(e);
          })

          //points
          if (+this.searchStr >= 0) {
            list = await this.gs.getByPoints(this.searchStr);
            list.forEach((e: Gift) => {
              let result: boolean = true;
              resultFilter.forEach((x: Gift) => {
                if (x.id == e.id || x.available==false) result = false;
              })
              if (result) resultFilter.push(e);
            })
          }

          resultFilter.forEach((e:Gift)=>{
            if(!e.available){
              resultFilter.splice(resultFilter.indexOf(e),1);
            }
          })
          this.gifts=resultFilter;
          this.infinite.disabled = true;
          await this.uts.hideLoading()
        }

        else if (lenght < 1) {
          await this.uts.presentLoading();

          this.gifts = this.oldGifts;
          this.infinite.disabled = this.oldInfinite;
          await this.uts.hideLoading();
        }
      }
      else this.uts.presentToast("La búsqueda no puede comenzar por espacios en blanco.","danger","ban");


    }catch (error) {

    }
  }

  private sortList(eg:Gift[]):Gift[] {
    if(eg!=null&&eg.length>1){
      eg=eg.sort((n1,n2) => {
        if (n1.name > n2.name) {
            return 1;
        }

        else if (n1.name < n2.name) {
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