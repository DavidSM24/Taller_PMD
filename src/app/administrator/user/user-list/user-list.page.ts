import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonInfiniteScroll, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage {
public users:User[]=[];
@ViewChild(IonInfiniteScroll) infinite:IonInfiniteScroll;
private miLoading:HTMLIonLoadingElement;
  constructor(private usser:UserService,private loading:LoadingController,
    private toast:ToastController,
    private alerta: AlertController) { }

    async ionViewDidEnter(){
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
      this.users=await this.usser.getAll();
    }catch(err){
      console.error(err);
      await this.presentToast("Error cargando datos","danger");
    } finally{
      if(event){
        event.target.complete();
      }else{
        await this.miLoading.dismiss();
      }
    }
  }

  public async cargaInfinita($event){
    console.log("CARGAND");
    let nuevosExGifts=await this.usser.getAll();
    if(nuevosExGifts.length<10){
      $event.target.disabled=true;
    }
    this.users=this.users.concat(nuevosExGifts);
    $event.target.complete();
  }
  async presentLoading() {
    this.miLoading = await this.loading.create({
      message: ''
    });
    await this.miLoading.present();
  }
  public async borra(user:User){
    await this.presentLoading();
    await this.usser.delete(user);
    let i=this.users.indexOf(user,0);
    if(i>-1){
      this.users.splice(i,1);
    }
    await this.miLoading.dismiss();
  }
  async presentToast(msg:string,clr:string) {
    const miToast = await this.toast.create({
      message: msg,
      duration: 2000,
      color:clr
    });
    miToast.present();
  }
  public async mensagealerta(n:any){
    const alert = await this.alerta.create({
      header: 'Eliminar',
      message: '¿Desea eliminar Este Regalo Intercambiado?',
      buttons: [{
          text: 'Cancelar',
          handler: (blah) => {}},
          {text: 'Eliminar',
          handler: () => {
            this.borra(n)
          }
        }
      ]
    });
   await alert.present();
  }
}
