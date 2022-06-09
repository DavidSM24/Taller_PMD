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
  public errorCompany:boolean;

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

    

    this.formAgency = this.fb.group({
      zipCode: [this.agency.zipCode,  [Validators.required, Validators.pattern("[0-9]{2,21}")]],
      address: [this.agency.address, [Validators.required,Validators.maxLength(50),Validators.minLength(4)]],
      location: [this.agency.location, [Validators.required,Validators.maxLength(50),Validators.minLength(4)]],
      phoneNumber: [this.agency.phoneNumber, [Validators.required,Validators.pattern("[0-9]{9}")]],
      points:[this.agency.points, Validators.required]

    });

    } catch (error) {
      
    }
  }

  async ionViewWillEnter() {


    this.companies=await this.is.getAll();
    if(this.companies.length<=0){
      this.uts.presentToast('Para crear agencias, deben existir compañías de seguros.','danger','ban');
    }
    await this.uts.hideLoading();
  }

  public async edit() {

    await this.uts.presentLoading();

     let A: Agency = {
       id: this.agency.id,
       zipCode: this.formAgency.get("zipCode").value,
       address: this.formAgency.get("address").value,
       location: this.formAgency.get("location").value,
       phoneNumber: this.formAgency.get("phoneNumber").value,
       amount: this.agency.amount,
       points: this.agency.points,
       pointsRedeemed: this.agency.pointsRedeemed,
       myInsuranceCompany: this.insurance,
       myCarRepairs: this.agency.myCarRepairs,
       myExchangesGifts: this.agency.myExchangesGifts,
       myUser: this.agency.myUser,
       active: this.toggle.checked
     }

     try {

      A = await this.as.createOrUpdate(A);

      await this.uts.hideLoading();

      if(A.id){
        this.uts.presentToast("Agencia modificada correctamente.","success","checkmark-circle-outline");

      }
      else{
        this.uts.presentToast("Ha surgido un error al intentar modificar la agencia. Compruebe todos los campos","danger",'ban');
        A=null;
      }

     } catch (error) {
       
       this.uts.presentToast("Ha surgido un error al intentar modificar la agencia. Compruebe todos los campos","danger",'ban');
       await this.uts.hideLoading();
     }

     if(A!=null) this.modalCtrl.dismiss({
      newAgency:A
        });
      else this.modalCtrl.dismiss();

  }

  close() {
    this.modalCtrl.dismiss();
  }
  async showPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel',
          handler: (value: any) => {
            if(!this.insurance) this.errorCompany=true;
          }
        },
        {
          text:'Ok',
          handler:(value:any) => {
            this.insurance=value.Compañías.value;
            this.errorCompany=false;
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

