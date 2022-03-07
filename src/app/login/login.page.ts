import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { UtilService } from '../services/util.service';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private us: UserService,
    private uts: UtilService,
    private authS:AuthService,
    private router:Router) {

    this.formLogin = this.fb.group({
      code: ["", Validators.required, Validators.pattern("[0-9]*")],
      pass: ["", Validators.required]
    });
  }

  ngOnInit() {
    if(this.authS.isLogged()){
      this.router.navigate(['/tab-administrator/agency/list']);
    }
  }

  ionViewWillEnter(){
    if(this.authS.isLogged()){
      console.log(this.authS.isLogged());
      try {
        this.router.navigate(['/tab-administrator/agency/list']); 
      } catch (error) {
        
      }
      
    }
  }

  public async login() {

    let user: User
    let correct: boolean = false;

      this.uts.presentLoading();
      try {
        let code = await this.formLogin.get("code").value;
        user = await this.us.getByCode(code);
        if (user.id && this.formLogin.get("pass").value == user.password) {
          correct = true;

        }
        this.uts.hideLoading();
        if (correct) {
          //iniciar sesión... 
          
          try {
            this.authS.user=user;
            await this.authS.keepSession();
            console.log("inciando...")
            this.router.navigate(['/tab-administrator/agency/list']);
          } catch (error) {
            console.log(error);
          }
          
        }
        else {
          this.uts.presentToast("Usuario o contraseña incorrecta...", "danger")
        }

        this.uts.hideLoading();
      } catch (error) {
        this.uts.hideLoading();
        this.uts.presentToast("Usuario o contraseña incorrecta...", "danger")
      }

  }

}
