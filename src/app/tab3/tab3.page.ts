import { Component, ViewChild } from '@angular/core';
import { Agency } from '../models/Agency';
import { AgencyService } from '../services/agency.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonToggle, PickerColumnOption, PickerController, PickerOptions } from '@ionic/angular';
import { InsuranceCompany } from '../models/InsuranceCompany';
import { InsuranceCompanyService } from '../services/insurance-company.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  @ViewChild(IonToggle) toggle: IonToggle;

  public insurance:InsuranceCompany=null;
  public formAgency: FormGroup;
  public companies: InsuranceCompany[];

  constructor(
    private as: AgencyService,
    private fb: FormBuilder,
    private is: InsuranceCompanyService,
    private pickerController:PickerController) {

    this.formAgency = this.fb.group({
      zipCode: ["", Validators.required],
      address: ["", Validators.required],
      location: ["", Validators.required],
      phoneNumber: ["", Validators.required]
    });
  }

  async ionViewWillEnter() {
    this.companies=await this.is.getAll();
    if(this.companies.length>0){
    }
  }

  public test_GetAll() {
    this.as.getAll();
  }

  public test_GetAllPaged(limit: number, offset: number) {
    this.as.getAllPaged(limit, offset);
  }

  public test_GetById(id: number) {
    this.as.getById(id);
  }

  public test_GetByUserNamePaged(username: string, limit: number, offset: number) {
    this.as.getByUserNamePaged(username, limit, offset);
  }

  public test_GetByisActivePaged(available: boolean, limit: number, offset: number) {
    this.as.getByisActivePaged(available, limit, offset);
  }

  public async test_Create(): Promise<void> {

    if(this.insurance!=null){
      let ag: Agency = await this.as.getById(7);


      let newGift: Agency = {
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
  
      console.log(newGift);
  
      newGift = await this.as.createOrUpdate(newGift);
    }

    
  }

  public async test_Update() {
    let toDrop: Agency[] = await this.as.getAll();
    let last: Agency = toDrop[toDrop.length - 1];
    last.address = "se ha modificadoo 666";
    console.log(last);
    if (toDrop != null) {
      console.log(await this.as.createOrUpdate(last));
    }
  }

  public async test_Delete() {
    let toDrop: Agency[] = await this.as.getAll();
    let last: Agency = toDrop[toDrop.length - 1];
    console.log(last);
    if (toDrop != null) {
      console.log(await this.as.delete(last));
    }
  }

  public segmentChanged(event) {

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
