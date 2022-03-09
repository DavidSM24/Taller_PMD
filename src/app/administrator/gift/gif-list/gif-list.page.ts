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
    this.niTems=  Math.ceil(this.pt.height()/20+10);
    await this.loadgifts();
    this.n=this.gifts.length;

  }

  public async loadgifts(event?) {
    
    let newgifts:Gift[]=[];
    
    if(this.gifts.length==0){ //inicio
      
      this.uts.presentLoading();
      
      this.infinite.disabled=false;
      newgifts=await this.gs.getAllPaged(this.niTems,0);
      
      this.gifts=this.gifts.concat(newgifts);

    }

    if(newgifts.length<this.niTems){
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
    this.searchStr = event.detail.value;
  }

  public async reset(event){
    this.n=0;
    this.infinite.disabled=false;
    this.gifts=[];
    this.loadgifts(event);
  }

}
