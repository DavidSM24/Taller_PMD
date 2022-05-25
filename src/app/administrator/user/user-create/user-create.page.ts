import { Component, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonToggle, LoadingController, PickerColumnOption, PickerController, PickerOptions, ToastController } from '@ionic/angular';
import { Agency } from 'src/app/models/Agency';
import { InsuranceCompany } from 'src/app/models/InsuranceCompany';
import { User } from 'src/app/models/User';
import { AgencyService } from 'src/app/services/agency.service';
import { InsuranceCompanyService } from 'src/app/services/insurance-company.service';
import { UserService } from 'src/app/services/user.service';
import { UtilService } from '../../../services/util.service';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.page.html',
  styleUrls: ['./user-create.page.scss'],
})
export class UserCreatePage {
  @ViewChild(IonToggle) toggle: IonToggle;

  public admin: boolean = false;
  public active: boolean = false;

  public miLoading: HTMLIonLoadingElement;
  public formUser: FormGroup;

  public insurance: InsuranceCompany = null;
  public formAgency: FormGroup;
  public companies: InsuranceCompany[];

  constructor(
    private usserv: UserService,
    private as: AgencyService,
    private is: InsuranceCompanyService,
    private fb: FormBuilder,
    private uts: UtilService,
    private pickerController: PickerController,) {

    this.formUser = this.fb.group({
      code: ["", Validators.required],
      password: ["", Validators.required],
      email: ["", Validators.required],
      name: ["", Validators.required]
    });

    this.formAgency = this.fb.group({
      zipCode: ["", Validators.required],
      address: ["", Validators.required],
      location: ["", Validators.required],
      phoneNumber: ["", Validators.required]
    });
  }

  async ionViewWillEnter() {

    await this.uts.presentLoading();
    this.companies = [];
    this.companies = await this.is.getAll();
    if (this.companies.length <= 0) {
      this.uts.presentToast('Para crear agencias, deben existir compañías de seguros. Solo podrá crear usuarios administradores.', 'danger', 'ban');
      this.admin = true;
      this.toggle.checked = true;
      this.toggle.disabled = true;
    }
    await this.uts.hideLoading();
  }

  public async CreateUser(): Promise<void> {

    //existe codigo igual

    await this.uts.presentLoading();
    let findByCode:User=await this.usserv.getByCode(this.formUser.get('code').value);
    await this.uts.hideLoading();

    if (findByCode) {
      this.uts.presentToast("Ya existe un usuario con ese código, prueba con otro diferente.","danger","ban");
    }

    //insertar
    else {
      await this.uts.presentLoading();
      try {
        let newUser: User = {
          code: this.formUser.get("code").value,
          password: this.formUser.get("password").value,
          administrator: this.admin,
          email: this.formUser.get("email").value,
          name: this.formUser.get("name").value
        }

        try {
          newUser = await this.usserv.createOrUpdate(newUser);

          if(this.admin){
            this.uts.presentToast("Usuario agregado correctamente", "success", "checkmark-circle-outline");
          }
          this.formUser.reset();

          if (!this.admin) {
            if (this.insurance != null) {

              let newAgency: Agency = {
                zipCode: this.formAgency.get("zipCode").value,
                address: this.formAgency.get("address").value,
                location: this.formAgency.get("location").value,
                phoneNumber: this.formAgency.get("phoneNumber").value,
                amount: 0,
                points: 0,
                pointsRedeemed: 0,
                myInsuranceCompany: this.insurance,
                myCarRepairs: [],
                myExchangesGifts: [],
                myUser: newUser,
                active: this.active
              }

              console.log(newAgency);
              newAgency = await this.as.createOrUpdate(newAgency);
              this.as.added = true;

              if (newAgency.id) {
                this.formAgency.reset();
                this.uts.presentToast('La agencia se ha creado correctamente.', 'success', "checkmark-circle-outline");
              }
              else {
                this.uts.presentToast('Un error ha surgido al intentar crear la agencia.', 'danger', 'ban');
              }

            }
          }
        } catch (err) {
          this.uts.presentToast("Ha habido un error al crear el usuario. Compruebe longitud: código (<=3), contraseña: (<=10).", "danger", 'ban');
        }

      } catch (error) {
        await this.uts.hideLoading();
        console.log(error)
      }
      await this.uts.hideLoading();
    }

  }


  async showPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: (value: any) => {
            this.insurance = value.Compañías.value;
          }
        }
      ],
      columns: [{
        name: 'Compañías',
        options: this.getColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getColumnOptions() {
    let options = [];
    this.companies.forEach(x => {
      options.push({ text: x.cia_Name, value: x });
    });
    return options;
  }

  public changeAdmin() {
    this.admin = !this.admin;
  }

  public changeActive() {
    this.active = !this.active;
  }
}
export interface PickerColumn {
  name: string;
  align?: string;
  selectedIndex?: number;
  prevSelected?: number;
  prefix?: string;
  suffix?: string;
  options: PickerColumnOption[];
  cssClass?: string | string[];
  columnWidth?: string;
  prefixWidth?: string;
  suffixWidth?: string;
  optionsWidth?: string;
  refresh?: () => void;
}
