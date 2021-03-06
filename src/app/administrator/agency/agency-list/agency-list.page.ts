import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonInfiniteScroll, ModalController, Platform, ToastController } from '@ionic/angular';
import { Agency } from 'src/app/models/Agency';
import { AgencyService } from '../../../services/agency.service';
import { AgencyUpdatePage } from '../agency-update/agency-update.page';
import { UtilService } from '../../../services/util.service';
import { AuthService } from '../../../services/auth.service';
import { User } from 'src/app/models/User';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.page.html',
  styleUrls: ['./agency-list.page.scss'],
})
export class AgencyListPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;
  oldInfinite:boolean;

  public agencies: Agency[] = [];
  public oldAgencies: Agency []=[];

  searchStr = "";
  niTems: number;


  filter:string;

  constructor(
    private as: AgencyService,
    private AlertCtrl: AlertController,
    private modalCtrl: ModalController,
    private pt: Platform,
    private uts: UtilService,
    private authS:AuthService,
    private us:UserService) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {

    this.niTems = Math.ceil(this.pt.height() / 20 + 10);
    

    if(this.as.added){

      this.reset(null);
      this.as.added=false;
    }
    else{

      await this.loadAgencies();
    }
  }

  public async loadAgencies(event?) {

    let newAgencies:Agency[]=[];

    if(this.agencies.length==0){ //inicio

      await this.uts.presentLoading();

      this.infinite.disabled=false;
      this.oldInfinite=false;
      newAgencies=await this.as.getAllPaged(this.niTems,0);

      this.agencies=this.agencies.concat(newAgencies);
      this.agencies=this.sortList(this.agencies);
      this.oldAgencies=[];
      this.oldAgencies=this.oldAgencies.concat(newAgencies);

    }

    if(newAgencies.length<this.niTems){
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
        this.oldAgencies.forEach((e:Agency)=>{
          if(e.id==resp.data.newAgency.id){
            let i2=this.oldAgencies.indexOf(e);
            this.oldAgencies[i2]=this.agencies[i];
          }
        })
      }
    } catch (error) {
      
    }

  }

  public async delete(agency: Agency) {

    if(agency.myCarRepairs.length>0||agency.myExchangesGifts.length>0){

      let msg:string='Error. ';
      if(agency.myCarRepairs.length>0&&agency.myExchangesGifts.length>0){
        msg+="No se puede eliminar la agencia porque tiene reparaciones y pedidos asociados.";
      }
      else if(agency.myCarRepairs.length>0){
        msg+="No se puede eliminar la agencia porque tiene reparaciones asociadas.";
      }
      else if(agency.myExchangesGifts.length>0){
        msg+="No se puede eliminar la agencia porque tiene pedidos asociados.";
      }

      this.uts.presentToast(msg, "danger",'ban');
    }

    else {

      let user:User=agency.myUser;

      await this.uts.presentLoading();
      const result: boolean = await this.as.delete(agency);
      let i = this.agencies.indexOf(agency, 0);

      await this.uts.hideLoading();
      if (result) {
        if (i > -1) {
          this.agencies.splice(i, 1);
          this.oldAgencies.forEach((e:Agency)=>{
            if(e.id==agency.id){
              let i2=this.oldAgencies.indexOf(e);
              this.oldAgencies.splice(i2,1);
            }
          });

          let result2:boolean=await this.us.delete(user);
          if(!result2) this.uts.presentToast("Error al eliminar el usuario asociado.","danger","ban");
        }

        this.uts.presentToast("Agencia eliminada correctamente.", "success","checkmark-circle-outline");
      }
      else {
        this.uts.presentToast("Error al eliminar la agencia...", "danger",'ban');
      }
    }
  }

  public async showDeleteMenu(agency: Agency) {
    const alert = await this.AlertCtrl.create({
      header: 'Confirmaci??n',
      message: '??Desea eliminar esta Agencia? Tambi??n se eliminar?? el usuario asociado.',
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
      this.oldAgencies=this.oldAgencies.concat(newAgencies);

      if (newAgencies.length < 30) {
        this.infinite.disabled = true;
        this.oldInfinite=true;
      }
    }
    this.infinite.complete();
  }

  public onSearchChange(event) {
    this.searchStr = event.detail.value;
  }

  public async reset(event) {
    this.infinite.disabled = false;
    this.oldInfinite=false;
    this.agencies = [];
    this.loadAgencies(event);
  }

  public logout(){
    this.authS.logout();
  }

  async searchChange(event){
    this.searchStr=event.detail.value;
    let regex: RegExp = new RegExp("^[ ]");

    try {
      if(!this.searchStr.match(regex)){

        let resultFilter:Agency[]=[];
        let list:Agency[]=[];
        this.agencies=[];

        let lenght=this.searchStr.length;

        if(lenght>0){

          //consultar y cambiar lista
          await this.uts.presentLoading();
          //username
          list=await this.as.getByUserNamePaged(this.searchStr,99999,0);
          list.forEach((e: Agency) => {
            let result: boolean = true;
            resultFilter.forEach((x: Agency) => {
              if (x.id == e.id) result = false;
            })
            if (result) resultFilter.push(e);
          })

          //address
          list=await this.as.getByAddress(this.searchStr);
          list.forEach((e: Agency) => {
            let result: boolean = true;
            resultFilter.forEach((x: Agency) => {
              if (x.id == e.id) result = false;
            })
            if (result) resultFilter.push(e);
          })

          //company
          list=await this.as.getByCompany(this.searchStr);
          list.forEach((e: Agency) => {
            let result: boolean = true;
            resultFilter.forEach((x: Agency) => {
              if (x.id == e.id) result = false;
            })
            if (result) resultFilter.push(e);
          })

          //location
          list=await this.as.getByLocation(this.searchStr);
          list.forEach((e: Agency) => {
            let result: boolean = true;
            resultFilter.forEach((x: Agency) => {
              if (x.id == e.id) result = false;
            })
            if (result) resultFilter.push(e);
          })

          //points
          if(+this.searchStr>=0){
            list=await this.as.getByPoints(+this.searchStr);
            list.forEach((e: Agency) => {
              let result: boolean = true;
              resultFilter.forEach((x: Agency) => {
                if (x.id == e.id) result = false;
              })
              if (result) resultFilter.push(e);
            })
          }

          //zipcode
          if(+this.searchStr>=0){
            list=await this.as.getByZipcode(+this.searchStr);
            list.forEach((e: Agency) => {
              let result: boolean = true;
              resultFilter.forEach((x: Agency) => {
                if (x.id == e.id) result = false;
              })
              if (result) resultFilter.push(e);
            })
          }

          this.agencies=resultFilter;
          this.agencies=this.sortList(this.agencies);
          this.infinite.disabled=true;
          await this.uts.hideLoading()
        }
        else if(lenght<1){
          this.agencies=[];
          this.agencies=this.agencies.concat(this.oldAgencies);
          this.agencies=this.sortList(this.agencies);
          this.infinite.disabled=this.oldInfinite;
          await this.uts.hideLoading();
        }

      }else this.uts.presentToast("La b??squeda no puede comenzar por espacios en blanco.","danger","ban");

    } catch (error) {

    }


  }

  private sortList(eg:Agency[]):Agency[] {
    if(eg!=null&&eg.length>1){
      eg=eg.sort((n1,n2) => {
        if (n1.myInsuranceCompany.cia_Name > n2.myInsuranceCompany.cia_Name) {
            return 1;
        }

        else if (n1.myInsuranceCompany.cia_Name < n2.myInsuranceCompany.cia_Name) {
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
