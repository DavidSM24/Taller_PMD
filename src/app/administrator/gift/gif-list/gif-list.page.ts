import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonInfiniteScroll, ModalController, Platform, IonSelect, IonSearchbar } from '@ionic/angular';
import { Gift } from 'src/app/models/Gift';
import { GiftService } from '../../../services/gift.service';
import { GifUpdatePage } from '../gif-update/gif-update.page';
import { UtilService } from '../../../services/util.service';
import { AuthService } from '../../../services/auth.service';
import subBusinessDays from 'date-fns/subBusinessDays';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.page.html',
  styleUrls: ['./gif-list.page.scss'],
})
export class GifListPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;
  @ViewChild(IonSelect) select:IonSelect;
  @ViewChild(IonSearchbar) sb:IonSearchbar;

  oldInfinite:boolean;

  private n:number=0;
  public gifts: Gift[] = [];
  public oldGifts: Gift []=[];

  searchStr = "";
  private niTems:number;

  constructor(
    private gs: GiftService,
    private AlertCtrl: AlertController,
    private modalCtrl: ModalController,
    private pt:Platform,
    private uts:UtilService,
    private authS:AuthService) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {

    this.niTems = Math.ceil(this.pt.height() / 20 + 10);
    console.log(this.niTems);

    if(this.gs.added){

      this.reset(null);
      this.gs.added=false;
    }
    else{
      await this.loadgifts();
    }

  }

  public getAdded(list:Gift[]){
    this.gifts=list;
  }

  public async loadgifts(event?) {

    let newGifts:Gift[]=[];

    if(this.gifts.length==0){ //inicio

      await this.uts.presentLoading();

      this.infinite.disabled=false;
      this.oldInfinite=false;
      newGifts=await this.gs.getAllPaged(this.niTems,0);

      this.gifts=this.gifts.concat(newGifts);
      this.gifts=this.sortList(this.gifts);

      this.oldGifts=[];
      this.oldGifts=this.oldGifts.concat(newGifts);

    }

    if(newGifts.length<this.niTems){
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
      this.oldGifts.forEach((e:Gift)=>{
        if(e.id==resp.data.newGift.id){
          let i2=this.oldGifts.indexOf(e);
          this.oldGifts[i2]=this.gifts[i];
        }
      })
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
      this.oldGifts.forEach((e:Gift)=>{
        if(e.id==gift.id){
          let i2=this.oldGifts.indexOf(e);
          this.oldGifts.splice(i2,1);
        }
      });
      this.uts.presentToast("Regalo eliminada correctamente.","success","checkmark-circle-outline");
    }
    else{
      this.uts.presentToast("No se pueden eliminar regalos con pedidos. Puede quitarlo de la lista para adquirirlo cambiandolo a No disponible.","danger","ban");
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
      console.log(this.niTems);
      newgifts=await this.gs.getAllPaged(this.niTems,this.gifts.length);
      newgifts=this.sortList(newgifts);
      this.gifts=this.gifts.concat(newgifts);
      this.oldGifts=this.oldGifts.concat(newgifts);

      if(newgifts.length<this.niTems){
        this.infinite.disabled=true;
        this.oldInfinite=true;
      }
    }
    this.infinite.complete();
  }

  public async onSearchChange() {

    let resultFilter:Gift[]=[];
    let listS:Gift[]=[];
    let selectO=this.select.value;
    this.searchStr=this.sb.value;

    let list:Gift[]=[];
    this.gifts=[];

    let lenght=this.searchStr.length;
    if(lenght>0){

      //consultar y cambiar lista
      await this.uts.presentLoading();

      //nombre
      list=await this.gs.getByNamePaged(this.searchStr,9999,0);
      list.forEach((e:Gift)=>{
        let result:boolean=true;
        resultFilter.forEach((x:Gift)=>{
          if(x.id==e.id) result=false;
        })
        if(result) resultFilter.push(e);
      })

      //points
      if(+this.searchStr>=0){
        list=await this.gs.getByPoints(+this.searchStr);
        list.forEach((e:Gift)=>{
          let result:boolean=true;
          resultFilter.forEach((x:Gift)=>{
            if(x.id==e.id) result=false;
          })
          if(result) resultFilter.push(e);
        })
      }

      if(selectO=="true"){
        resultFilter.forEach((e:Gift)=>{
          if(e.available) listS.push(e);
        })
        this.gifts=listS;

      }

      else if(selectO=="false"){
        resultFilter.forEach((e:Gift)=>{
          if(!e.available) listS.push(e);
        })
        this.gifts=listS;

      }

      else{
        this.gifts=resultFilter;

      }

      this.infinite.disabled=true;
      await this.uts.hideLoading()
    }
    else if(lenght<1){
      resultFilter=resultFilter.concat(this.oldGifts);
      this.infinite.disabled=this.oldInfinite;

      if(selectO=="true"){
        resultFilter.forEach((e:Gift)=>{
          if(e.available) listS.push(e);
        })
        this.gifts=listS;
      }

      else if(selectO=="false"){
        resultFilter.forEach((e:Gift)=>{
          if(!e.available) listS.push(e);
        })
        this.gifts=listS;

      }

      else{
        this.gifts=resultFilter;
      }

      this.gifts=this.sortList(this.gifts);
      await this.uts.hideLoading();
    }
  }

  public async reset(event){
    this.infinite.disabled = false;
    this.oldInfinite=false;
    this.gifts = [];
    this.loadgifts(event)
  }

  public logout(){
    this.authS.logout();
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

  public count(gifts:Gift[]){
    console.log(gifts.length);
  }
}
