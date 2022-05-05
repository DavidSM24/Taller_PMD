import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonInfiniteScroll, ModalController, Platform} from '@ionic/angular';
import { Gift } from 'src/app/models/Gift';
import { GiftService } from '../../../services/gift.service';
import { GifUpdatePage } from '../gif-update/gif-update.page';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.page.html',
  styleUrls: ['./gif-list.page.scss'],
})
export class GifListPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;

  private n:number=0;
  public gifts: Gift[] = [];

  searchStr = "";
  private niTems:number;

  constructor(
    private gs: GiftService,
    private AlertCtrl: AlertController,
    private modalCtrl: ModalController,
    private pt:Platform,
    private uts:UtilService) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {

    if(this.gs.added){

      this.reset(null);
      this.gs.added=false;
    }
    else{
      this.niTems = Math.ceil(this.pt.height() / 20 + 10);
      await this.loadgifts();
    }

  }

  public getAdded(list:Gift[]){
    this.gifts=list;
  }

  public async loadgifts(event?) {

    let newGifts:Gift[]=[];

    if(this.gifts.length==0){ //inicio

      this.uts.presentLoading();

      this.infinite.disabled=false;
      newGifts=await this.gs.getAllPaged(this.niTems,0);

      this.gifts=this.gifts.concat(newGifts);

    }

    if(newGifts.length<this.niTems){
      this.infinite.disabled=true;
    }

    if(event){
      event.target.complete();
    }
    else{

    }
    this.uts.hideLoading();
  }

  public async edit(gift:Gift){
    const modal = await this.modalCtrl.create({
      component: GifUpdatePage,
      cssClass:"fullscreen",
      componentProps: {
        gift:gift
      }
    });

    await modal.present();

    const resp=await modal.onDidDismiss();

    if(resp.data!=null){
      let i:number=this.gifts.indexOf(gift);
      this.gifts[i]=resp.data.newGift;
    }
  }

  public async delete(gift:Gift){
    await this.uts.presentLoading();
    const result:boolean=await this.gs.delete(gift);
    let i=this.gifts.indexOf(gift,0);

    await this.uts.hideLoading();;
    if(result){
      if(i>-1){
        this.gifts.splice(i,1);
      }
      this.uts.presentToast("Regalo eliminada correctamente.","success");
    }
    else{
      this.uts.presentToast("Error al eliminar el regalo...","danger");
    }
  }

  public async showDeleteMenu(gift: Gift) {
    const alert = await this.AlertCtrl.create({
      header: 'Confirmación',
      message: '¿Desea eliminar este Regalo?',
      buttons: [
        {
          text: 'Eliminar',
          cssClass: 'rojo',
          handler: () => {
            this.delete(gift);
          }
        },

        {
          text: 'Cancelar',
          cssClass: 'secondary',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  public async infiniteLoad($event) {
    let newgifts:Gift[]=[];

    if(!this.infinite.disabled){
      newgifts=await this.gs.getAllPaged(this.niTems,this.gifts.length);
      this.gifts=this.gifts.concat(newgifts);

      if(newgifts.length<this.niTems){
        this.infinite.disabled=true;
      }
    }
  }

  public onSearchChange(event) {
    this.searchStr=event.detail.value;
    console.log(this.searchStr);

    let list:Gift[]=[];

    let lenght=this.searchStr.length;
    if(lenght>1){
      this.gifts.forEach(gift=>{
        if(gift.name.includes(this.searchStr)
        ||gift.points.toString().includes(this.searchStr)){
          list.push(gift);
        }

      })
      this.gifts=list;

    }
    else if(lenght<1){
      this.reset(null);
      this.uts.hideLoading();
    }
  }

  public async reset(event){
    this.infinite.disabled = false;
    this.gifts = [];
    this.loadgifts(event)
  }

}
