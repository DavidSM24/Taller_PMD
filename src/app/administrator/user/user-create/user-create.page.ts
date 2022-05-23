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

    this.uts.presentLoading();
    this.companies = await this.is.getAll();
    if (this.companies.length <= 0) {
      this.uts.presentToast('Para crear agencias, deben existir compañías de seguros.', 'danger','ban');
    }
    this.uts.hideLoading();
  }

  public async CreateUser(): Promise<void> {
    this.uts.presentLoading();
    try {
      let newUser: User = {
        code: this.formUser.get("code").value,
        password: this.formUser.get("password").value,
        administrator: this.admin,
        email: this.formUser.get("email").value,
        name: this.formUser.get("name").value
      }

      try {
        newUser=await this.usserv.createOrUpdate(newUser);

        this.uts.presentToast("Usuario agregado correctamente", "success");
        this.formUser.reset();

        if (!this.admin) {
          if (this.insurance != null) {
            let ag: Agency = await this.as.getById(7);


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
            this.as.added=true;
            console.log("he cambiado added a true");
            console.log(this.as.added);
            if (newAgency.id) {
              this.formAgency.reset();
              this.uts.presentToast('La agencia se ha creado correctamente.', 'success');
            }
            else {
              this.uts.presentToast('Un error ha surgido al intentar crear la agencia.', 'danger','ban');
            }

          }
        }
      } catch (err) {
        this.uts.presentToast("Error agregando Usuario", "danger",'ban');
      }

    } catch (error) {
      this.uts.hideLoading();
      console.log(error)
    }
    this.uts.hideLoading();
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
