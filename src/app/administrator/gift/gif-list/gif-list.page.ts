import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonInfiniteScroll, IonRow, LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { Gift } from 'src/app/models/Gift';
import { GiftService } from '../../../services/gift.service';
import { GifUpdatePage } from '../gif-update/gif-update.page';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.page.html',
  styleUrls: ['./gif-list.page.scss'],
})
export class GifListPage implements OnInit {
  @ViewChild("rowItem") rowItem:HTMLElement;
  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;

  private n:number=0;
  public gifts: Gift[] = [];

  searchStr = "";
  private miLoading: HTMLIonLoadingElement;

  constructor(
    private gs: GiftService,
    private toast: ToastController,
    private AlertCtrl: AlertController,
    private modalCtrl: ModalController,
    private loading: LoadingController,
    private pt:Platform) { }

  ngOnInit() {
    let nItems=Math.ceil(this.pt.height()/this.rowItem.clientHeight)+20;
  }

  async ionViewWillEnter() {
    await this.loadgifts();
    this.n=this.gifts.length;

  }

  public async loadgifts(event?) {
    
    let newgifts:Gift[]=[];
    
    if(this.gifts.length==0){ //inicio
      
      if(!event){ //si event, el reset ya tiene loading...
        this.presentLoading();
      }
      
      this.infinite.disabled=false;
      newgifts=await this.gs.getAllPaged(15,0);
      
      this.gifts=this.gifts.concat(newgifts);

    }

    if(newgifts.length<15){
      this.infinite.disabled=true;
    }

    if(event){
      event.target.complete();
    }
    else{
      this.loading.dismiss();
    }
  }

  public async edit(gift:Gift){
    const modal = await this.modalCtrl.create({
      component: GifUpdatePage,
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
    await this.presentLoading();
    const result:boolean=await this.gs.delete(gift);
    let i=this.gifts.indexOf(gift,0);
    
    await this.miLoading.dismiss();
    if(result){
      if(i>-1){
        this.gifts.splice(i,1);
      }
      this.presentToast("Regalo eliminada correctamente.","success");
    }
    else{
      this.presentToast("Error al eliminar el regalo...","danger");
    }
  }

  public async showDeleteMenu(gift: Gift) {
    const alert = await this.AlertCtrl.create({
      header: 'Confirmación',
      message: '¿Desea eliminar este Regalo?',
      buttons: [
        {
          text: 'Eliminar',
          //cssClass: 'rojo',
          handler: () => {
            this.delete(gift);
          }
        },

        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  public async infiniteLoad($event) {
    let newgifts:Gift[]=[];
    if(!this.infinite.disabled){
      newgifts=await this.gs.getAllPaged(15,this.gifts.length);
      this.gifts=this.gifts.concat(newgifts);

      if(newgifts.length<15){
        this.infinite.disabled=true;
      }
    }
  }

  async presentLoading() {
    this.miLoading = await this.loading.create({
      message: ''
    });
    await this.miLoading.present();
  }

  async presentToast(msg: string, clr: string) {
    const miToast = await this.toast.create({
      message: msg,
      duration: 2000,
      color: clr
    });
    miToast.present();
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
