import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { InsuranceCompany } from 'src/app/models/InsuranceCompany';
import { InsuranceCompanyService } from 'src/app/services/insurance-company.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.page.html',
  styleUrls: ['./company-create.page.scss'],
})
export class CompanyCreatePage implements OnInit {

  public formCompany: FormGroup;

  constructor(
    private cs: InsuranceCompanyService,
    private fb: FormBuilder,
    private uts:UtilService,
    private modalCtrl: ModalController) {

     }

  ngOnInit() {
    this.formCompany = this.fb.group({
      name: ["", [Validators.required,Validators.minLength(3),Validators.maxLength(50)]]
    });
  }

  async create(){

    await this.uts.presentLoading();
    let ic:InsuranceCompany[]=await this.cs.getByCiaName(this.formCompany.get("name").value);
    await this.uts.hideLoading();

    if(ic.length>0){
      this.uts.presentToast('Ya existe una compañia con este nombre, prueba con otro diferente.','danger','ban');
    }
    else{
      await this.uts.presentLoading();

      let editCompany:InsuranceCompany = {
        cia_Name: this.formCompany.get("name").value
      }

      editCompany=await this.cs.createOrUpdate(editCompany);
      if(editCompany){
        this.formCompany.reset();
        this.cs.added=true;
        this.uts.presentToast('La compañía se ha creado correctamente.','success',"checkmark-circle-outline");
      }
      else{
        this.uts.presentToast('Un error ha surgido al intentar crear la compañía.','danger','ban');
        editCompany=null;
      }

      await this.uts.hideLoading();
    }



  }

}
