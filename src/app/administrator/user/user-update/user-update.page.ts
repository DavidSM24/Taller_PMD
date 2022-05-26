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
    this.formEditUser = this.fb.group({
      code: ["", Validators.required],
      password: ["", Validators.required],
      email: ["", Validators.required],
      name: ["", Validators.required]
    });
  }
  ngOnInit() {
    try {

      this.formEditUser = this.fb.group({
        code: [this.user.code, Validators.required],
        password: [this.user.password, Validators.required],
        administrator: [this.user.administrator, Validators.required],
        email: [this.user.email, Validators.required],
        name: [this.user.name, Validators.required]
      });
    } catch (error) {
      console.log(error);
    }
  }
  public async EditUser(): Promise<void> {

    await this.uts.presentLoading();
    let userCode:User=await this.userv.getByCode(this.formEditUser.get('code').value);
    await this.uts.hideLoading();

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


  }

  close() {
    this.modalCtrl.dismiss();
  }
}
