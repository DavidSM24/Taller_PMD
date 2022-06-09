import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { InsuranceCompanyService } from 'src/app/services/insurance-company.service';
import { UtilService } from 'src/app/services/util.service';
import { InsuranceCompany } from '../../../models/InsuranceCompany';
import { AgencyService } from '../../../services/agency.service';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.page.html',
  styleUrls: ['./company-update.page.scss'],
})
export class CompanyUpdatePage implements OnInit {

  @Input() company: InsuranceCompany;
  public formCompany: FormGroup;

  constructor(
    private cs: InsuranceCompanyService,
    private fb: FormBuilder,
    private uts:UtilService,
    private modalCtrl: ModalController,
    private as:AgencyService) {

     }

  ngOnInit() {
    this.formCompany = this.fb.group({
      name: [this.company.cia_Name,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]]
    });
  }

  async create(){
    await this.uts.presentLoading();

    let editCompany:InsuranceCompany = {
      id:this.company.id,
      cia_Name: this.formCompany.get("name").value
    }

    editCompany=await this.cs.createOrUpdate(editCompany);
    if(editCompany){
      this.as.added=true;
      this.formCompany.reset();
      this.uts.presentToast('La compañía se ha modificado correctamente.','success',"checkmark-circle-outline");
    }
    else{
      this.uts.presentToast('Un error ha surgido al intentar modificar la compañía.','danger','ban');
      editCompany=null;
    }

    await this.uts.hideLoading();

    if(editCompany){
      this.modalCtrl.dismiss({
        newCompany:editCompany
      })
    }
    else this.modalCtrl.dismiss();
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
