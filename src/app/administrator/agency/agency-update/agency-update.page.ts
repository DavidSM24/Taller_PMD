import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonToggle, ModalController, PickerColumnOption, PickerController, PickerOptions } from '@ionic/angular';
import { AgencyService } from 'src/app/services/agency.service';
import { Agency } from '../../../models/Agency';
import { UtilService } from '../../../services/util.service';
import { InsuranceCompany } from '../../../models/InsuranceCompany';
import { InsuranceCompanyService } from 'src/app/services/insurance-company.service';

@Component({
  selector: 'app-agency-update',
  templateUrl: './agency-update.page.html',
  styleUrls: ['./agency-update.page.scss'],
})
export class AgencyUpdatePage implements OnInit {

  @ViewChild(IonToggle) toggle: IonToggle;
  @Input() agency: Agency;

  public insurance:InsuranceCompany=null;
  public formAgency: FormGroup;
  public companies: InsuranceCompany[];

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private as: AgencyService,
    private uts:UtilService,
    private is: InsuranceCompanyService,
    private pickerController:PickerController,) {
      
     }

  ngOnInit() {
    
    try {
    this.insurance=this.agency.myInsuranceCompany;
    //this.uts.presentLoading();

    console.log(this.agency);

    this.formAgency = this.fb.group({
      zipCode: [this.agency.zipCode, Validators.required],
      address: [this.agency.address, Validators.required],
      location: [this.agency.location, Validators.required],
      phoneNumber: [this.agency.phoneNumber, Validators.required]
    });
    } catch (error) {
      console.log(error);
    }

    
  }

  async ionViewWillEnter() {

    
    this.companies=await this.is.getAll();
    if(this.companies.length<=0){
      this.uts.presentToast('Para crear agencias, deben existir compañías de seguros.','danger');
    }
    this.uts.hideLoading();
  }

  public async edit() {
    
    
    console.log(this.formAgency.get("zipCode").value);
    
    // let A: Agency = {
    //   id: this.agency.id,
    //   zipCode: this.formAgency.get("zipCode").value,
    //   address: this.formAgency.get("address").value,
    //   location: this.formAgency.get("location").value,
    //   phoneNumber: this.formAgency.get("phoneNumber").value,
    //   amount: 0,
    //   points: 0,
    //   pointsRedeemed: 0,
    //   myInsuranceCompany: this.agency.myInsuranceCompany,
    //   myCarRepairs: this.agency.myCarRepairs,
    //   myExchangesGifts: this.agency.myExchangesGifts,
    //   myUser: this.agency.myUser,
    //   active: this.toggle.checked
    // }

    // A = await this.as.createOrUpdate(A);
    
    // this.modalCtrl.dismiss({
    //   newNote:A
    // })
  }

  close() {
    this.modalCtrl.dismiss();
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

