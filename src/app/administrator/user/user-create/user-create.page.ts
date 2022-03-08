import { Component, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonToggle, LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { UtilService } from '../../../services/util.service';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.page.html',
  styleUrls: ['./user-create.page.scss'],
})
export class UserCreatePage  {
  @ViewChild(IonToggle) toggle: IonToggle;
  public miLoading:HTMLIonLoadingElement;
  public formUser:FormGroup;
  constructor(private usserv: UserService,
    private fb: FormBuilder,
    private uts:UtilService) {
    this.formUser=this.fb.group({
        code: ["",Validators.required],
        password: ["",Validators.required],
        email: ["",Validators.required],
        name: ["",Validators.required]
    });
  }

  public async CreateUser(): Promise<void> {
    this.uts.presentLoading();
      try {
        let newUser: User = {
          code:this.formUser.get("code").value,
          password:this.formUser.get("password").value,
          administrator:this.toggle.checked,
          email:this.formUser.get("email").value,
          name:this.formUser.get("name").value
        }
        
        
        try{
          await this.usserv.createOrUpdate(newUser);
          
          this.uts.presentToast("Regalo agregada correctamente","success");
          this.formUser.reset();
        }catch(err){
          this.uts.presentToast("Error agregando Regalo","danger");
        }
        
      } catch (error) {
        this.uts.hideLoading();
        console.log(error)
      }
      this.uts.hideLoading();
  }
}
