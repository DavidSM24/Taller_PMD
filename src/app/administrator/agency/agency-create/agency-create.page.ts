import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonToggle, NavController, PickerColumnOption, PickerController, PickerOptions } from '@ionic/angular';
import { Agency } from 'src/app/models/Agency';
import { InsuranceCompany } from 'src/app/models/InsuranceCompany';
import { AgencyService } from 'src/app/services/agency.service';
import { InsuranceCompanyService } from 'src/app/services/insurance-company.service';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-agency-create',
  templateUrl: './agency-create.page.html',
  styleUrls: ['./agency-create.page.scss'],
})
export class AgencyCreatePage {

  @ViewChild(IonToggle) toggle: IonToggle;

  public insurance:InsuranceCompany=null;
  public formAgency: FormGroup;
  public companies: InsuranceCompany[];

  constructor(
    private as: AgencyService,
    private fb: FormBuilder,
    private is: InsuranceCompanyService,
    private pickerController:PickerController,
    private uts:UtilService,
    private nav:NavController) {

    this.formAgency = this.fb.group({
      zipCode: ["", Validators.required],
      address: ["", Validators.required],
      location: ["", Validators.required],
      phoneNumber: ["", Validators.required]
    });
  }

  async ionViewWillEnter() {

    console.log("en agency-cretae");

    await this.uts.presentLoading();
    this.companies=await this.is.getAll();
    if(this.companies.length<=0){
      await this.uts.hideLoading();
      this.uts.presentToast('Para crear agencias, deben existir compañías de seguros.','danger','ban');
      this.nav.back();
    }
    await this.uts.hideLoading();
  }

  public async create(): Promise<void> {

    await this.uts.presentLoading();

    if(this.insurance!=null){
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
        myUser: ag.myUser,
        active: this.toggle.checked
      }

      console.log(newAgency);

      newAgency = await this.as.createOrUpdate(newAgency);
      if(newAgency.id){
        this.formAgency.reset();
        this.uts.presentToast('La agencia se ha creado correctamente.','success',"checkmark-circle-outline");
        this.as.added=true;

      }
      else{
        this.uts.presentToast('Un error ha surgido al intentar crear la agencia.','danger','ban');
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
          text:'Ok',
          handler:(value:any) => {
            this.insurance=value.Compañías.value;
          }
        }
      ],
      columns:[{
        name:'Compañías',
        options:this.getColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getColumnOptions(){
    let options = [];
    this.companies.forEach(x => {
      options.push({text:x.cia_Name,value:x});
    });
    return options;
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
