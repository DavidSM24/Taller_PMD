import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonToggle, ModalController, LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { UtilService } from '../../../services/util.service';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.page.html',
  styleUrls: ['./user-update.page.scss'],
})
export class UserUpdatePage implements OnInit {

  @ViewChild(IonToggle) toggle: IonToggle;
  @Input() user: User;
  public miLoading: HTMLIonLoadingElement;
  public formEditUser: FormGroup;
  constructor(private modalCtrl: ModalController,
    private uts: UtilService,
    private userv: UserService,
    private fb: FormBuilder) {

  }
  ngOnInit() {
    try {

      this.formEditUser = this.fb.group({
        code: [this.user.code, [Validators.required,Validators.pattern("[0-9]{1,3}")]],
        password: [this.user.password, [Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{5,10}$")]],
        email: [this.user.email, [Validators.required,Validators.email, Validators.minLength(4),Validators.maxLength(50)]],
        name: [this.user.name, [Validators.required,Validators.minLength(3),Validators.maxLength(100)]]
      });
    } catch (error) {
      console.log(error);
    }
  }
  public async EditUser(): Promise<void> {

    await this.uts.presentLoading();

    let userCode:User=null;

    if(this.formEditUser.get('code').value!=this.user.code){
      userCode=await this.userv.getByCode(this.formEditUser.get('code').value);
    }


    if(!userCode){
      let userEditado: User = {
        id: this.user.id,
        code: this.formEditUser.get("code").value,
        password: this.formEditUser.get("password").value,
        administrator: this.toggle.checked,
        email: this.formEditUser.get("email").value,
        name: this.formEditUser.get("name").value
      }


      userEditado = await this.userv.createOrUpdate(userEditado);
      if (userEditado != null) this.modalCtrl.dismiss({
        newUser: userEditado
      })

      else {
        this.modalCtrl.dismiss();
        this.uts.presentToast("Ha habido un error al modificar el usuario. Compruebe longitud: código (<=3), contraseña: (<=10).", "danger", 'ban');
      }
    }

    else this.uts.presentToast("Ya existe un usuario con este código. Prueba con otro diferente.","danger","ban");

    this.uts.hideLoading();
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
