import { Component, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonToggle, LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.page.html',
  styleUrls: ['./user-create.page.scss'],
})
export class UserCreatePage  {
  @ViewChild(IonToggle) toggle: IonToggle;
  private myuser:User
  public miLoading:HTMLIonLoadingElement;
  private miToast:HTMLIonToastElement;
  public formUser:FormGroup;
  constructor(private usserv: UserService,
    private fb: FormBuilder,
    private loading:LoadingController,
    private toast:ToastController) {
    this.formUser=this.fb.group({
        code: ["",Validators.required],
        password: ["",Validators.required],
        email: ["",Validators.required],
        name: ["",Validators.required]
    });
  }

  public async CreateUser(): Promise<void> {
      let newUser: User = {
        code:this.formUser.get("code").value,
        password:this.formUser.get("password").value,
        administrator:this.toggle.checked,
        email:this.formUser.get("email").value,
        name:this.formUser.get("name").value
      }
      await this.presentLoading();
      
      try{
        let id=await this.usserv.createOrUpdate(newUser);
        this.miLoading && this.miLoading.dismiss();
        await this.presentToast("Regalo agregada correctamente","success");
        this.formUser.reset();
      }catch(err){
        
        this.miLoading && this.miLoading.dismiss();
        await this.presentToast("Error agregando Regalo","danger");
      }
  }
  async presentLoading() {
    this.miLoading = await this.loading.create({
      message: ''
    });
    await this.miLoading.present();
  }
  async presentToast(msg:string,clr:string) {
    this.miToast = await this.toast.create({
      message: msg,
      duration: 2000,
      color:clr
    });
    this.miToast.present();
  }
}