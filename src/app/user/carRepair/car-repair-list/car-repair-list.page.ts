import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonInfiniteScroll, LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { id } from 'date-fns/locale';
import { Agency } from 'src/app/models/Agency';
import { CarRepair } from 'src/app/models/CarRepair';
import { AgencyService } from 'src/app/services/agency.service';
import { AuthService } from 'src/app/services/auth.service';
import { CarRepairService } from 'src/app/services/car-repair.service';
import { UtilService } from 'src/app/services/util.service';
import { CarRepairSawPage } from '../car-repair-saw/car-repair-saw.page';
import { CarRepairUpdatePage } from '../car-repair-update/car-repair-update.page';

@Component({
  selector: 'app-car-repair-list',
  templateUrl: './car-repair-list.page.html',
  styleUrls: ['./car-repair-list.page.scss'],
})
export class CarRepairListPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;

  private n: number = 0;
  //variable que muestra las reparaciones en pantalla
  public carRepairs: CarRepair[] = [];
  //variable que guarda las reparaciones mientras se muestran otras en pantalla
  public carRepairsStore: CarRepair[] = [];
  //variable que guarda las letras de la barra de busqueda
  private searchStr: string = "";
  private miLoading: HTMLIonLoadingElement;
  private nItems: number; //variable que almacena el número de elemetenos que caben dentro de la página

  private idAgency: Number;
  private myAgency: Agency;

  constructor(
    private cS: CarRepairService,
    private toast: ToastController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private loading: LoadingController,
    private utilService: UtilService,
    private agencyService: AgencyService,
    private routes: Router,
    private pt: Platform,//para saber el dispositivo
    private authService: AuthService
  ) { }

  ngOnInit() {


  }

  async ionViewWillEnter() {


  }

  async ionViewDidEnter() {


    if (this.cS.added) {
      this.reset(null);
      this.cS.added = false;

    } else {
      try {
        await this.getMyAgency();
        this.nItems = Math.ceil(this.pt.height() / 20 + 10);

        await this.loadCarRepair();
        this.n = this.carRepairs.length;
      } catch (error) {

      }

    }

  }

  //Métodos de los servicios

  /**
   * Método que carga las reparaciones de la base de datos
   * se llama la primera vez que carga la página
   * @param event
   */
  public async loadCarRepair(event?) {

    let newCarRepair: CarRepair[] = [];

    if (this.carRepairs.length == 0) {

      if (!event) {
        this.presentLoading();
      }

      this.infinite.disabled = false;

      try {

        newCarRepair = await this.cS.getByAgencyPaged(this.myAgency.id, this.nItems, 0);
        console.log(newCarRepair)
        this.carRepairs = this.carRepairs.concat(newCarRepair);
        this.storageCarRepairs();
        if (newCarRepair.length < this.nItems) {
          this.infinite.disabled = true;

        }
      } catch (error) {
        console.log(error);
        this.presentToast("Error de carga", "danger", 'ban');
      } finally {
        if (event) {

          event.target.complete();

        } else {
          this.loading.dismiss();
        }
      }
    }
  }

  /**
  * Método que actualiza una reparación mediante un modal
  * @param carRepair Reparación que se quiera modificar
  */
  public async edit(carRepair: CarRepair) {

    const modal = await this.modalCtrl.create({
      component: CarRepairUpdatePage,
      //hoja de estilos
      cssClass: 'fullscreen',
      //pasar datos al modal

      componentProps: {
        'carRepair': carRepair


      }
    });

    await modal.present();

    const resp = await modal.onDidDismiss();
    if (resp.data != null) {
      let i: number = this.carRepairs.indexOf(carRepair);
      this.carRepairs[i] = resp.data.newCarRepair;
    }

  }

  /**
   * Método que borra una reparación de la base de datos
   * @param carRepair reparación que se quiera eliminar
   */
  public async delete(carRepair: CarRepair) {
    try {
      await this.presentLoading();
      const result: boolean = await this.cS.delete(carRepair);//borra la reparación y guarda si se ha borrado
      let i = this.carRepairs.indexOf(carRepair, 0);//se comprueba si la reparación esta en la lista
      if (result) {
        if (i > -1) {
          this.carRepairs.splice(i, 1);//borra la reparación de la lista
        }

        this.presentToast("La reparación ha sido eliminada correctamente.", "success", "checkmark-circle-outline");
      } else {
        this.presentToast("Error al borrar la reparación", "danger", 'ban');
      }
    } catch (error) {
      this.presentToast("Nose ha podido borrar la reparación, intentelo más tarde", "danger", 'ban');
    } finally {
      try {
        await this.miLoading.dismiss();
      } catch (error) {

      }
    }
  }

  //Métodos que cargan los modales

  /**
  * Método que muestra una alerta cuando se quiere borrar una reparación
  * @param carRepair reparación que se quiere borrar
  */
  public async showDeleteMenu(carRepair: CarRepair) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmación',
      message: '¿Desea eliminar la reparación?',
      buttons: [
        {
          text: 'Eliminar',
          cssClass: 'rojo',
          handler: () => {
            this.delete(carRepair);
          }
        },
        {
          text: 'Cancelar',
          cssClass: 'secundary',
          role: 'cancel'

        }
      ]
    });

    try {

      await alert.present();

    } catch (error) {
      console.log(error);
    }
  }
  /**
  * Método que carga el modal de los datos de una reparación
  * @param carRepair
  * @returns
  */
  public async saw(carRepair: CarRepair) {

    const modal = await this.modalCtrl.create({
      component: CarRepairSawPage,
      //hoja de estilos
      cssClass: 'my-modal-class',
      //pasar datos al modal

      componentProps: {
        'carRepair': carRepair
      }
    });

    return await modal.present();

  }

  //Métodos de filtrado

  /**
   * Método que muestra en la vista los coches que correspondan con el estado seleccionado el Ion-Select
   * @param event
   */
  public async setCarByStatus(event?) {

    let carR: CarRepair[] = []
    const value: string = event.detail.value;

    try {
      await this.utilService.presentLoading();
      if ("false".match(value)) {
        let carRepairSearch = await this.cS.getByStatedPaged(false, 9999, 0);
        carR = this.addSearchedReparation(carRepairSearch, carR);

        this.carRepairs = carR;

      } else if ("true".match(value)) {
        let carRepairSearch = await this.cS.getByStatedPaged(true, 9999, 0);
        carR = this.addSearchedReparation(carRepairSearch, carR);

        this.carRepairs = carR;

      } else if ("all".match(value)) {
        this.reset();
      }

    } catch (error) {

    } finally {
      await this.utilService.hideLoading();
    }
  }
  /**
  * Método que se activa cuando se escribe algo en la barra de búsqueda
  * Para buscar reparaciones por matrícula, dueño del coche, operación
  * y nombre de la agencia
  * @param event
  */
  public async onSearchChange(event) {

    let carRepiarResult: CarRepair[] = [];
    let carRepairList: CarRepair[] = [];

    this.searchStr = event.detail.value;
    this.carRepairs = [];

    if (this.searchStr.length > 0) {
      try {
        await this.utilService.presentLoading();
        //operacion
        carRepairList = await this.cS.getByOperationFilter(this.searchStr);
        carRepiarResult = this.addSearchedReparation(carRepairList, carRepiarResult);
        //Matrícula
        carRepairList = await this.cS.getByCarPlate(this.searchStr, 9999, 0);
        carRepiarResult = this.addSearchedReparation(carRepairList, carRepiarResult);
        //Nombre del cliente
        carRepairList = await this.cS.getByClientName(this.searchStr, 9999, 0);
        carRepiarResult = this.addSearchedReparation(carRepairList, carRepiarResult);
        //Información de la agencia
        carRepairList = await this.cS.getByAgencyInfoFilter(this.searchStr);
        carRepiarResult = this.addSearchedReparation(carRepairList, carRepiarResult);

        this.carRepairs = carRepiarResult;

      } catch (error) {
        await this.utilService.presentToast("Se ha producido un error en la busqueda", "danger", 'ban');

      } finally {
        await this.utilService.hideLoading();

      }

    } else if (length < 1) {
      try {
        await this.reset();

      } catch (error) {

      }
    }


  }

  /**
   * Método que compara las dos listas de reparaciones y añade las que falten
   * @param carRepairSearch Reparaciones traidas de la base de datos
   * @param resultFilter Reparaciones que ya se han filtrado
   * @returns CarRepair[] Lista de reparaciones con el añadido de las reparaciones faltantes
   */
  private addSearchedReparation(carRepairSearch: CarRepair[], resultFilter: CarRepair[]): CarRepair[] {
    let result: boolean;

    carRepairSearch.forEach((search: CarRepair) => {
      result = true;
      if (this.myAgency.id == search.myAgency.id) {

        resultFilter.forEach((carRepiarResult: CarRepair) => {

          if (carRepiarResult.id == search.id) {
            result = false;
          }

        });
        if (result) {
          console.log("ID buscado -->" + search.myAgency.id + "ID lista-->" + this.myAgency.id);
          resultFilter.push(search);

        }
      }



    });
    return resultFilter;
  }

  /**
  * Método que reinicia la lista de reparaciones
  * @param event
  */
  public async reset(event?) {
    this.n = 0;
    this.infinite.disabled = false;
    this.carRepairs = [];
    this.loadCarRepair(event);

  }

  /**
   * Método que guarda las reparaciones en un almacen
   */
  public storageCarRepairs() {
    this.carRepairsStore = this.carRepairs;
  }

  /**
   * Método que permite al usuario cerrar la sesión
   */
  public logout() {
    this.authService.logout();
  }

  /**
  * Método que obtiene el id de la agencia conectada
  */
  public async getMyAgency() {
    let agency: Agency;

    try {
      await this.utilService.presentLoading();
      agency = this.authService.agency;

      this.myAgency = this.authService.agency;
      this.idAgency = this.authService.agency.id;

      await this.utilService.hideLoading();




    } catch {
      await this.utilService.presentToast("Fallo al cargar", "danger", 'ban');
      await this.utilService.hideLoading();
    }


  }


  //Métodos auxiliares

  /**
 * Método que carga más reparaciones cuando se llega al final de la pantalla
 * @param $event
 */
  public async infiniteLoad($event) {

    let newCarRepairs: CarRepair[] = [];

    if (!this.infinite.disabled) {

      try {
        newCarRepairs = await this.cS.getByAgencyPaged(this.myAgency.id, this.nItems, this.carRepairs.length);
        this.carRepairs = this.carRepairs.concat(newCarRepairs);
        if (newCarRepairs.length < 30) {
          this.infinite.disabled = true;
        }

      } catch (error) {
        console.log(error);

      }
    }
    this.infinite.complete();
  }





  //Metodo que muestra el loading
  public async presentLoading() {
    this.miLoading = await this.loading.create({
      message: ''
    });
    await this.miLoading.present();
  }

  //Método que muestra un toast
  public async presentToast(msg: string, clr: string, icn?: string) {
    const miToast = await this.toast.create({
      message: msg,
      duration: 2000,
      color: clr,
      icon: icn
    });
    miToast.present();
  }
}
