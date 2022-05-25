import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { InsuranceCompanyService } from 'src/app/services/insurance-company.service';
import { UtilService } from 'src/app/services/util.service';
import { InsuranceCompany } from '../../../models/InsuranceCompany';

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
    private modalCtrl: ModalController) {

     }

  ngOnInit() {
    this.formCompany = this.fb.group({
      name: [this.company.cia_Name, Validators.required]
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
