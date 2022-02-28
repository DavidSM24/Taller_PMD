import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonInfiniteScroll, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Agency } from 'src/app/models/Agency';
import { AgencyService } from '../../../services/agency.service';
import { AgencyUpdatePage } from '../agency-update/agency-update.page';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.page.html',
  styleUrls: ['./agency-list.page.scss'],
})
export class AgencyListPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;

  private n:number=0;
  public agencies: Agency[] = [];

  searchStr = "";
  private miLoading: HTMLIonLoadingElement;

  constructor(
    private as: AgencyService,
    private toast: ToastController,
    private AlertCtrl: AlertController,
    private modalCtrl: ModalController,
    private loading: LoadingController) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    await this.loadAgencies();
    this.n=this.agencies.length;
  }

  public async loadAgencies(event?) {
    
    let newAgencies:Agency[]=[];
    
    if(this.agencies.length==0){ //inicio
      
      if(!event){ //si event, el reset ya tiene loading...
        this.presentLoading();
      }
      
      this.infinite.disabled=false;
      newAgencies=await this.as.getAllPaged(15,0);
      
      this.agencies=this.agencies.concat(newAgencies);

    }

    if(newAgencies.length<15){
      this.infinite.disabled=true;
    }

    if(event){
      event.target.complete();
    }
    else{
      this.loading.dismiss();
    }
  }

  public async edit(agency:Agency){
    const modal = await this.modalCtrl.create({
      component: AgencyUpdatePage,
      componentProps: {
        agency:agency
      }
    });

    await modal.present();

    const resp=await modal.onDidDismiss();

    if(resp.data!=null){
      let i:number=this.agencies.indexOf(agency);
      this.agencies[i]=resp.data.newAgency;
    }
  }

  public async delete(agency:Agency){
    await this.presentLoading();
    const result:boolean=await this.as.delete(agency);
    let i=this.agencies.indexOf(agency,0);
    
    await this.miLoading.dismiss();
    if(result){
      if(i>-1){
        this.agencies.splice(i,1);
      }
      this.presentToast("Agencia eliminada correctamente.","success");
    }
    else{
      this.presentToast("Error al eliminar la agencia...","danger");
    }
  }

  public async showDeleteMenu(agency: Agency) {
    const alert = await this.AlertCtrl.create({
      header: 'Confirmación',
      message: '¿Desea eliminar esta Agencia?',
      buttons: [
        {
          text: 'Eliminar',
          //cssClass: 'rojo',
          handler: () => {
            this.delete(agency);
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
    let newAgencies:Agency[]=[];
    if(!this.infinite.disabled){
      newAgencies=await this.as.getAllPaged(15,this.agencies.length);
      this.agencies=this.agencies.concat(newAgencies);

      if(newAgencies.length<15){
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
    this.agencies=[];
    this.loadAgencies(event);
  }
}
