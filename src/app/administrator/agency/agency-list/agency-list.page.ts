import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonInfiniteScroll, ModalController, Platform, ToastController } from '@ionic/angular';
import { Agency } from 'src/app/models/Agency';
import { AgencyService } from '../../../services/agency.service';
import { AgencyUpdatePage } from '../agency-update/agency-update.page';
import { UtilService } from '../../../services/util.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.page.html',
  styleUrls: ['./agency-list.page.scss'],
})
export class AgencyListPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;

  public agencies: Agency[] = [];

  searchStr = "";
  niTems: number;


  filter:string;

  constructor(
    private as: AgencyService,
    private AlertCtrl: AlertController,
    private modalCtrl: ModalController,
    private pt: Platform,
    private uts: UtilService,
    private authS:AuthService) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    
    console.log(this.as.added);
    
    if(this.as.added){
      
      this.reset(null);
      this.as.added=false;
    }
    else{
      this.niTems = Math.ceil(this.pt.height() / 20 + 10);
      await this.loadAgencies();
    }
  }

  public async loadAgencies(event?) {

    let newAgencies:Agency[]=[];
    
    if(this.agencies.length==0){ //inicio
      
      this.uts.presentLoading();
      
      this.infinite.disabled=false;
      newAgencies=await this.as.getAllPaged(this.niTems,0);
      
      this.agencies=this.agencies.concat(newAgencies);

    }

    if(newAgencies.length<this.niTems){
      this.infinite.disabled=true;
    }

    if(event){
      event.target.complete();
    }
    else{
     
    }
    this.uts.hideLoading();
  }

  public async edit(agency: Agency) {
    try {
      const modal = await this.modalCtrl.create({
        component: AgencyUpdatePage,
        cssClass: 'fullscreen',
        componentProps: {
          'agency': agency
        }
        //
      });

      await modal.present();

      const resp = await modal.onDidDismiss();

      if (resp.data != null) {
        let i: number = this.agencies.indexOf(agency);
        this.agencies[i] = resp.data.newAgency;
      }
    } catch (error) {
      console.log(error);
    }

  }

  public async delete(agency: Agency) {
    await this.uts.presentLoading();
    const result: boolean = await this.as.delete(agency);
    let i = this.agencies.indexOf(agency, 0);

    await this.uts.hideLoading();
    if (result) {
      if (i > -1) {
        this.agencies.splice(i, 1);
      }
      this.uts.presentToast("Agencia eliminada correctamente.", "success");
    }
    else {
      this.uts.presentToast("Error al eliminar la agencia...", "danger");
    }
  }

  public async showDeleteMenu(agency: Agency) {
    const alert = await this.AlertCtrl.create({
      header: 'Confirmación',
      message: '¿Desea eliminar esta Agencia?',
      buttons: [
        {
          text: 'Eliminar',
          cssClass: 'rojo',
          handler: () => {
            this.delete(agency);
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
    let newAgencies: Agency[] = [];
    if (!this.infinite.disabled) {
      newAgencies = await this.as.getAllPaged(this.niTems, this.agencies.length);
      this.agencies = this.agencies.concat(newAgencies);

      if (newAgencies.length < 30) {
        this.infinite.disabled = true;
      }
    }
  }

  public onSearchChange(event) {
    this.searchStr = event.detail.value;
  }

  public async reset(event) {
    this.infinite.disabled = false;
    this.agencies = [];
    this.loadAgencies(event);
  }

  public logout(){
    this.authS.logout();
  }

  async searchChange(event){
    this.searchStr=event.detail.value;
    console.log(this.searchStr);

    let list:Agency[]=[];

    let lenght=this.searchStr.length;
    if(lenght>1){
      this.agencies.forEach(agency=>{
        if(agency.location.includes(this.searchStr)){
          list.push(agency);
        }
        
      })
      this.agencies=list;

    }
    else if(lenght<1){
      this.reset(null); 
      this.uts.hideLoading();
    }
  }
}
