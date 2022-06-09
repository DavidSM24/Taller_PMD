import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonInfiniteScroll, ModalController, Platform, IonSearchbar } from '@ionic/angular';
import { Agency } from 'src/app/models/Agency';
import { AgencyService } from 'src/app/services/agency.service';
import { AuthService } from 'src/app/services/auth.service';
import { InsuranceCompanyService } from 'src/app/services/insurance-company.service';
import { UserService } from 'src/app/services/user.service';
import { UtilService } from 'src/app/services/util.service';
import { InsuranceCompany } from '../../../models/InsuranceCompany';
import { CompanyUpdatePage } from '../company-update/company-update.page';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.page.html',
  styleUrls: ['./company-list.page.scss'],
})
export class CompanyListPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;
  @ViewChild(IonSearchbar) sb: IonSearchbar
  oldInfinite: boolean;

  public companies: InsuranceCompany[] = [];
  public oldCompanies: InsuranceCompany[] = [];

  searchStr = "";
  niTems: number;

  constructor(private is: InsuranceCompanyService,
    private as: AgencyService,
    private AlertCtrl: AlertController,
    private modalCtrl: ModalController,
    private pt: Platform,
    private uts: UtilService,
    private authS: AuthService,
    private us: UserService) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {

    this.niTems = Math.ceil(this.pt.height() / 20 + 10);
    

    if (this.is.added) {

      this.reset(null);
      this.is.added = false;
    }
    else {

      await this.loadCompanies();
    }
  }

  public async loadCompanies(event?) {

    let newCompanies: InsuranceCompany[] = [];

    if (this.companies.length == 0) { //inicio

      await this.uts.presentLoading();

      this.infinite.disabled = false;
      this.oldInfinite = false;
      newCompanies = await this.is.getAllPaged(this.niTems, 1);

      this.companies = this.companies.concat(newCompanies);
      this.companies = this.sortList(this.companies);
      this.oldCompanies = [];
      this.oldCompanies = this.oldCompanies.concat(newCompanies);

    }

    if (newCompanies.length < this.niTems) {
      this.infinite.disabled = true;
      this.oldInfinite = true;
    }

    if (event) {
      event.target.complete();
    }
    else {

    }
    await this.uts.hideLoading();
  }

  public async edit(company: InsuranceCompany) {
    try {
      const modal = await this.modalCtrl.create({
        component: CompanyUpdatePage,
        cssClass: 'fullscreen',
        componentProps: {
          'company': company
        }
        //
      });

      await modal.present();

      const resp = await modal.onDidDismiss();

      if (resp.data != null) {
        let i: number = this.companies.indexOf(company);
        this.companies[i] = resp.data.newCompany;
        this.oldCompanies.forEach((e: InsuranceCompany) => {
          if (e.id == resp.data.newCompany.id) {
            let i2 = this.oldCompanies.indexOf(e);
            this.oldCompanies[i2] = this.companies[i];
          }
        })
      }
    } catch (error) {
      
    }

  }

  public async delete(company: InsuranceCompany) {

    await this.uts.presentLoading();
    let list: Agency[] = await this.as.getByCompany(company.cia_Name);
    await this.uts.hideLoading();

    if (list.length > 0) {

      this.uts.presentToast("No se puede eliminar la Compañia de Seguros porque existen agencias relacionadas.", "danger", 'ban');
    }

    else {

      await this.uts.presentLoading();
      const result: boolean = await this.is.delete(company);
      let i = this.companies.indexOf(company);
      await this.uts.hideLoading();

      if (result) {
        if (i > -1) {
          this.companies.splice(i, 1);
        }
        this.oldCompanies.forEach((e: InsuranceCompany) => {
          if (e.id == company.id) {
            let i2 = this.oldCompanies.indexOf(e);
            this.oldCompanies.splice(i2, 1);
          }
        });
        this.uts.presentToast("Compaía eliminada correctamente.", "success", "checkmark-circle-outline");
      }
      else this.uts.presentToast("Error al eliminar la compañia.", "danger", "ban");
    }
  }

  public async showDeleteMenu(company: InsuranceCompany) {
    const alert = await this.AlertCtrl.create({
      header: 'Confirmación',
      message: '¿Desea eliminar esta compañia?',
      buttons: [
        {
          text: 'Eliminar',
          cssClass: 'rojo',
          handler: () => {
            this.delete(company);
          }
        },

        {
          text: 'Cancelar',
          cssClass: 'secondary',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  public async infiniteLoad($event) {
    let newCompanies: InsuranceCompany[] = [];
    if (!this.infinite.disabled) {
      newCompanies = await this.is.getAllPaged(this.niTems, this.companies.length);
      newCompanies = this.sortList(newCompanies);
      this.companies = this.companies.concat(newCompanies);
      this.oldCompanies = this.oldCompanies.concat(newCompanies);

      if (newCompanies.length < 30) {
        this.infinite.disabled = true;
        this.oldInfinite = true;
      }
    }
    this.infinite.complete();
  }

  public async reset(event) {
    this.infinite.disabled = false;
    this.oldInfinite = false;
    this.companies = [];
    this.loadCompanies(event);
  }

  public logout() {
    this.authS.logout();
  }

  async searchChange() {
    this.searchStr = this.sb.value;
    let regex: RegExp = new RegExp("^[ ]");

    try {

      if (!this.searchStr.match(regex)) {
        let resultFilter: InsuranceCompany[] = [];
        let list: InsuranceCompany[] = [];
        this.companies = [];

        let lenght = this.searchStr.length;

        if (lenght > 0) {

          //consultar y cambiar lista
          await this.uts.presentLoading();

          //cia_name
          list = await this.is.getByCiaName(this.searchStr);
          list.forEach((e: InsuranceCompany) => {
            let result: boolean = true;
            resultFilter.forEach((x: InsuranceCompany) => {
              if (x.id == e.id) result = false;
            })
            if (result) resultFilter.push(e);
          })

          this.companies = resultFilter;
          this.companies = this.sortList(this.companies);
          this.infinite.disabled = true;
          await this.uts.hideLoading();
        }
        else if (lenght < 1) {
          this.companies = [];
          this.companies = this.companies.concat(this.oldCompanies);
          this.companies = this.sortList(this.companies);
          this.infinite.disabled = this.oldInfinite;
          await this.uts.hideLoading();
        }
      } else this.uts.presentToast("La búsqueda no puede comenzar por espacios en blanco.","danger","ban");

    } catch (error) {

    }


  }

  private sortList(eg: InsuranceCompany[]): InsuranceCompany[] {
    if (eg != null && eg.length > 1) {
      eg = eg.sort((n1, n2) => {
        if (n1.cia_Name > n2.cia_Name) {
          return 1;
        }

        else if (n1.cia_Name < n2.cia_Name) {
          return -1;
        }

        else {
          if (n1.id > n2.id) {
            return 1;
          }

          else if (n1.id < n2.id) {
            return -1;
          }
        }
        return 0;
      });
    }

    return eg;
  }
}
