import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonInfiniteScroll, LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { UserUpdatePage } from '../user-update/user-update.page';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage {
private niTems: number;
public users:User[]=[];
public usersx:User[]=[];
public searchTerm:string;
@ViewChild(IonInfiniteScroll) infinite:IonInfiniteScroll;
private miLoading:HTMLIonLoadingElement;
  constructor(private usser:UserService,private loading:LoadingController,
    private toast:ToastController,
    private pt: Platform,
    private modalCtrl: ModalController,
    private alerta: AlertController,
    private authS:AuthService) { }

    async ionViewDidEnter(){
      this.niTems = Math.ceil(this.pt.height() / 20 + 10);
      await this.cargaUsers();
    }

  public async cargaUsers(event?){
    if(this.infinite){
      this.infinite.disabled=false;
    }
    if(!event){
      await this.presentLoading();
    }
    this.users=[];
    try{
      this.users=await this.usser.getAllPaged(this.niTems,0);
      this.usersx=this.users;
    }catch(err){
      console.error(err);
      await this.presentToast("Error cargando datos","danger",'ban');
    } finally{
      if(event){
        event.target.complete();
      }else{
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

  public async borra(user:User){
    await this.presentLoading();

    let result:boolean=await this.usser.delete(user);

    if(result){
      let i=this.users.indexOf(user,0);
      if(i>-1){
        this.users.splice(i,1);
      };
      this.presentToast("Usuario eliminado correctamente.","success","checkmark-circle-outline")
    }
    else this.presentToast("No se ha podido eliminar el usuario. Compruebe que no está asociado a ninguna agencia con datos.","danger",'ban');


    await this.miLoading.dismiss();
  }

  async presentToast(msg:string,clr:string,icn?:string) {
    const miToast = await this.toast.create({
      message: msg,
      duration: 2000,
      color:clr,
      icon:icn
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
        this.presentToast("Usuario modificado correctamente.","success","checkmark-circle-outline")
      }
    } catch (error) {
      console.log(error);
    }

  }


  public async setbyUserRol(event?){

    let userol:User[]=[]
    const value:string=event.detail.value;


    if("false".match(value)){
      this.usersx.forEach(rol=>{
        if(!rol.administrator){
          userol.push(rol);
        }
      });
      this.users=userol;

    } else if("true".match(value)){
      this.usersx.forEach(rol=>{
        if(rol.administrator){
          userol.push(rol);
        }
      });
      this.users=userol;
    }else if("all".match(value)) {
      this.reset();
    }
  }

  public async mensagealerta(n:any){
    const alert = await this.alerta.create({
      header: 'Eliminar',
      message: '¿Desea eliminar Este Regalo Intercambiado?',
      buttons: [{text: 'Eliminar',
      cssClass: 'rojo',
      handler: () => {
        this.borra(n)
      }
      },{
          text: 'Cancelar',
          cssClass: 'secondary',
          handler: (blah) => {}}

      ]
    });
   await alert.present();
  }
  public async reset(event?){
    this.infinite.disabled=false;
    this.users=[];
    this.cargaUsers(event);
  }
  public async infiniteLoad($event) {
    let newUsers: User[] = [];
    if (!this.infinite.disabled) {
      newUsers = await this.usser.getAllPaged(this.niTems, this.users.length);
      this.users = this.users.concat(newUsers);

      if (newUsers.length < 30) {
        this.infinite.disabled = true;
      }
    }
  }
  public logout(){
    this.authS.logout();
  }

}
