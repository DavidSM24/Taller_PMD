import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonInfiniteScroll, IonSearchbar, IonSelect, LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { UserUpdatePage } from '../user-update/user-update.page';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage {
  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;
  @ViewChild(IonSelect) select: IonSelect;
  @ViewChild(IonSearchbar) sb: IonSearchbar;

  oldInfinite: boolean;

  private niTems: number;
  public users: User[] = [];
  public oldUsers: User[] = [];
  public searchTerm: string;
  private miLoading: HTMLIonLoadingElement;
  public bdUser:User;

  constructor(private usser: UserService, private loading: LoadingController,

    private toast: ToastController,
    private pt: Platform,
    private modalCtrl: ModalController,
    private alerta: AlertController,
    public authS: AuthService) { }

  async ionViewDidEnter() {
    this.niTems = Math.ceil(this.pt.height() / 20 + 10);
    await this.cargaUsers();
    this.users.forEach((e:User)=>{
      if(e.id==this.authS.user.id){
        this.bdUser=e;
      }
    })
  }

  public async cargaUsers(event?) {
    if (this.infinite) {
      this.infinite.disabled = false;
      this.oldInfinite = false;
    }
    if (!event) {
      await this.presentLoading();
    }
    this.users = [];
    this.oldUsers = [];
    try {
      this.users = await this.usser.getAllPaged(this.niTems, 0);
      this.oldUsers = this.oldUsers.concat(this.users);
    } catch (err) {
      console.error(err);
      await this.presentToast("Error cargando datos", "danger", 'ban');
    } finally {
      if (event) {
        event.target.complete();
      } else {
        await this.miLoading.dismiss();
      }
    }
  }


  async presentLoading() {
    this.miLoading = await this.loading.create({
      message: ''
    });
    await this.miLoading.present();
  }

  public async borra(user: User) {
    await this.presentLoading();

    let result: boolean = await this.usser.delete(user);

    if (result) {
      let i = this.users.indexOf(user, 0);
      if (i > -1) {
        this.users.splice(i, 1);
      };
      this.oldUsers.forEach((e:User)=>{
        if(e.id==user.id){
          let i2=this.oldUsers.indexOf(e);
          this.oldUsers.splice(i2,1);
        }
      });
      this.presentToast("Usuario eliminado correctamente.", "success", "checkmark-circle-outline");

      //deslogear si se ha eliminado el admin logeado
      if(user.administrator&&user.id==this.authS.user.id){
        this.logout();
      }
    }
    else this.presentToast("No se ha podido eliminar el usuario. Compruebe que no está asociado a ninguna agencia con datos.", "danger", 'ban');


    await this.miLoading.dismiss();
  }

  async presentToast(msg: string, clr: string, icn?: string) {
    const miToast = await this.toast.create({
      message: msg,
      duration: 2000,
      color: clr,
      icon: icn
    });
    miToast.present();
  }
  public async edit(user: User) {
    try {
      const modal = await this.modalCtrl.create({
        component: UserUpdatePage,
        cssClass: 'fullscreen',
        componentProps: {
          'user': user
        }
      });

      await modal.present();

      const resp = await modal.onDidDismiss();

      if (resp.data != null) {
        let i: number = this.users.indexOf(user);
        this.users[i] = resp.data.newUser;
        this.oldUsers.forEach((e:User)=>{
          if(e.id==resp.data.newUser.id){
            let i2=this.oldUsers.indexOf(e);
            this.oldUsers[i2]=this.users[i];
          }
        })
        this.presentToast("Usuario modificado correctamente.", "success", "checkmark-circle-outline")
      }
    } catch (error) {
      console.log(error);
    }

  }

  public async mensagealerta(n: any) {
    const alert = await this.alerta.create({
      header: 'Eliminar',
      message: '¿Desea eliminar Este Regalo Intercambiado?',
      buttons: [{
        text: 'Eliminar',
        cssClass: 'rojo',
        handler: () => {
          this.borra(n)
        }
      }, {
        text: 'Cancelar',
        cssClass: 'secondary',
        handler: (blah) => { }
      }

      ]
    });
    await alert.present();
  }
  public async reset(event?) {
    this.infinite.disabled = false;
    this.oldInfinite = false;
    this.users = [];
    this.cargaUsers(event);
  }
  public async infiniteLoad($event) {
    let newUsers: User[] = [];
    if (!this.infinite.disabled) {
      newUsers = await this.usser.getAllPaged(this.niTems, this.users.length);
      this.users = this.users.concat(newUsers);
      this.oldUsers.concat(newUsers);

      if (newUsers.length < 30) {
        this.infinite.disabled = true;
        this.oldInfinite = true;
      }
    }
    this.infinite.complete();
  }
  public logout() {
    this.authS.logout();
  }

  searchStr:string;

  public async searchAction() {

    let resultFilter: User[] = [];
    let listS: User[] = [];
    let selectO = this.select.value;
    this.searchStr = this.sb.value;
    let list: User[] = [];
    this.users=[];


    let lenght = this.searchStr.length;

    if (lenght > 0) {

      //consultar y cambiar lista
      await this.presentLoading();

      //name
      list = await this.usser.getByName(this.searchStr);
      list.forEach((e: User) => {
        let result: boolean = true;
        resultFilter.forEach((x: User) => {
          if (x.id == e.id) result = false;
        })
        if (result) resultFilter.push(e);
      })

      //code
      if (+this.searchStr >= 0) {
        list = await this.usser.getFilterCode(this.searchStr);
        list.forEach((e: User) => {
          let result: boolean = true;
          resultFilter.forEach((x: User) => {
            if (x.id == e.id) result = false;
          })
          if (result) resultFilter.push(e);
        })
      }

      //mail
      list = await this.usser.getByMail(this.searchStr);
      list.forEach((e: User) => {
        let result: boolean = true;
        resultFilter.forEach((x: User) => {
          if (x.id == e.id) result = false;
        })
        if (result) resultFilter.push(e);
      })

      if (selectO == "true") {

        resultFilter.forEach((e: User) => {
          if (e.administrator) listS.push(e);
        })
        this.users = listS;

      }

      else if (selectO == "false") {
        console.log(resultFilter)
        resultFilter.forEach((e: User) => {
          if (!e.administrator) listS.push(e);
        })
        this.users = listS;
      }

      else {
        this.users = resultFilter;

      }

      this.infinite.disabled = false
      await this.miLoading.dismiss();
    }
    else if (lenght < 1) {

      await this.presentLoading();

      if(selectO=="true"){
        resultFilter=await this.usser.getByAdministrator(true,9999,0);
        resultFilter.forEach((e:User)=>{
          if(e.administrator) listS.push(e);
        })
        this.users=listS;
        this.infinite.disabled=true;
      }

      else if(selectO=="false"){
        resultFilter=await this.usser.getByAdministrator(false,9999,0);
        resultFilter.forEach((e:User)=>{
          if(!e.administrator) listS.push(e);
        })
        this.users=listS;
        this.infinite.disabled=true;
      }

      else{
        this.users=this.oldUsers;
        this.infinite.disabled=this.oldInfinite;
      }

      await this.miLoading.dismiss();
    }
    await this.miLoading.dismiss();
  }

}
