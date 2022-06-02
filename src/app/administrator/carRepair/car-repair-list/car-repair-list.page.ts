import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonInfiniteScroll, IonSearchbar, IonSelect, LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { CarRepair } from 'src/app/models/CarRepair';
import { AuthService } from 'src/app/services/auth.service';
import { CarRepairService } from 'src/app/services/car-repair.service';
import { CarRepairSawPage } from '../car-repair-saw/car-repair-saw.page';
import { CarRepairUpdatePage } from '../car-repair-update/car-repair-update.page';

@Component({
  selector: 'app-car-repair-list',
  templateUrl: './car-repair-list.page.html',
  styleUrls: ['./car-repair-list.page.scss'],
})
export class CarRepairListPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;
  @ViewChild(IonSelect) select: IonSelect;
  @ViewChild(IonSearchbar) sb: IonSearchbar;

  oldInifinte: boolean;

  private n: number = 0;
  //variable que muestra las reparaciones en pantalla
  public carRepairs: CarRepair[] = [];
  //variable que guarda las reparaciones mientras se muestran otras en pantalla
  public carRepairsStore: CarRepair[] = [];
  //variable que guarda las letras de la barra de busqueda
  private searchStr: string = "";
  private miLoading: HTMLIonLoadingElement;
  private nItems: number; //variable que almacena el número de elemetenos que caben dentro de la página

  constructor(
    private cS: CarRepairService,
    private toast: ToastController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private loading: LoadingController,
    private routes: Router,
    private pt: Platform,//para saber el dispositivo
    private authS: AuthService

  ) {

  }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.nItems = Math.ceil(this.pt.height() / 20 + 10);
    try {
      await this.loadCarRepair();
      this.n = this.carRepairs.length;
    } catch (error) {

    }

  }

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
      this.oldInifinte = false;

      try {
        newCarRepair = await this.cS.getAllPaged(this.nItems, 0);
        this.carRepairs = this.carRepairs.concat(newCarRepair);
        this.storageCarRepairs(this.carRepairs);
        if (newCarRepair.length < this.nItems) {
          this.infinite.disabled = true;
          this.oldInifinte = true;

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

      this.carRepairsStore.forEach((e: CarRepair) => {
        if (e.id == resp.data.newCarRepair.id) {
          let i2 = this.carRepairsStore.indexOf(e);
          this.carRepairsStore[i2] = this.carRepairs[i];
        }
      })
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
      //pasar datos al modal

      componentProps: {
        'carRepair': carRepair
      }
    });

    return await modal.present();

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
        this.carRepairsStore.forEach((e: CarRepair) => {
          if (e.id == carRepair.id) {
            let i2 = this.carRepairsStore.indexOf(e);
            this.carRepairsStore.splice(i2, 1);
          }
        });
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
          cssClass: 'secondary',
          role: 'cancel',

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
   * Método que carga más reparaciones cuando se llega al final de la pantalla
   * @param $event
   */
  public async infiniteLoad($event) {

    let newCarRepairs: CarRepair[] = [];

    if (!this.infinite.disabled) {

      try {
        newCarRepairs = await this.cS.getAllPaged(this.nItems, this.carRepairs.length);
        this.carRepairs = this.carRepairs.concat(newCarRepairs);
        this.carRepairsStore = this.carRepairsStore.concat(newCarRepairs);
        if (newCarRepairs.length < 30) {
          this.infinite.disabled = true;
          this.oldInifinte = true;
        }

      } catch (error) {
        console.log(error);

      }
    }
    this.infinite.complete();
  }


  /**
   * Método que te redirige a la página de crear
   */
  public goCreatePage() {
    this.routes.navigateByUrl('tab-administrator/car-repair/create');
  }

  /**
   * Método que redirige a la página de actualizar reparaciones
   */
  public goUpdatePage(id: number) {
    this.routes.navigateByUrl('tab-administrator/car-repair/update/' + id);
  }

  /**
   * Método que redirige a la página de ver
   */
  public goSawPage(id: number) {
    this.routes.navigateByUrl('tab-administrator/car-repair/saw/' + id);

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

  /**
   * Método que se activa cuando se escribe algo en la barra de búsqueda
   * Para buscar reparaciones por matrícula, dueño del coche, operación
   * y nombre de la agencia
   * @param event
   */
  public async onSearchChange() {

    this.searchStr = this.sb.value;
    let regex: RegExp = new RegExp("^[ ]");

    try {

      if (!this.searchStr.match(regex)) {


        let resultFilter: CarRepair[] = [];
        let listS: CarRepair[] = [];
        let selectO = this.select.value;
        let list: CarRepair[] = [];
        this.carRepairs = [];


        let lenght = this.searchStr.length;

        if (lenght > 0) {

          //consultar y cambiar lista
          await this.presentLoading();

          //operation
          list = await this.cS.getByOperationFilter(this.searchStr);
          list.forEach((e: CarRepair) => {
            let result: boolean = true;
            resultFilter.forEach((x: CarRepair) => {
              if (x.id == e.id) result = false;
            })
            if (result) resultFilter.push(e);
          })

          //car_plate
          list = await this.cS.getByCarPlate(this.searchStr, 9999, 0);
          list.forEach((e: CarRepair) => {
            let result: boolean = true;
            resultFilter.forEach((x: CarRepair) => {
              if (x.id == e.id) result = false;
            })
            if (result) resultFilter.push(e);
          })

          //client_name
          list = await this.cS.getByClientName(this.searchStr, 9999, 0);
          list.forEach((e: CarRepair) => {
            let result: boolean = true;
            resultFilter.forEach((x: CarRepair) => {
              if (x.id == e.id) result = false;
            })
            if (result) resultFilter.push(e);
          })

          //agency_info
          list = await this.cS.getByAgencyInfoFilter(this.searchStr);
          list.forEach((e: CarRepair) => {
            let result: boolean = true;
            resultFilter.forEach((x: CarRepair) => {
              if (x.id == e.id) result = false;
            })
            if (result) resultFilter.push(e);
          })

          if (selectO == "true") {
            resultFilter.forEach((e: CarRepair) => {
              if (e.repaired) listS.push(e);
            })
            this.carRepairs = listS;

          }

          else if (selectO == "false") {
            resultFilter.forEach((e: CarRepair) => {
              if (!e.repaired) listS.push(e);
            })
            this.carRepairs = listS;

          }

          else {
            this.carRepairs = resultFilter;

          }

          this.infinite.disabled = false
          await this.miLoading.dismiss();
        }

        else if (lenght < 1) {

          await this.presentLoading();

          if (selectO == "true") {
            resultFilter = await this.cS.getByStatedPaged(true, 9999, 0);
            resultFilter.forEach((e: CarRepair) => {
              if (e.repaired) listS.push(e);
            })
            this.carRepairs = listS;
            this.infinite.disabled = true;
          }

          else if (selectO == "false") {
            resultFilter = await this.cS.getByStatedPaged(false, 9999, 0);
            resultFilter.forEach((e: CarRepair) => {
              if (!e.repaired) listS.push(e);
            })
            this.carRepairs = listS;
            this.infinite.disabled = true;
          }

          else {
            this.carRepairs = this.carRepairsStore;
            this.infinite.disabled = this.oldInifinte;
          }


          await this.miLoading.dismiss();
        }
      } else this.presentToast("La búsqueda no puede comenzar por espacios en blanco.", "danger", "ban");


    } catch (error) {

    }
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
  public storageCarRepairs(list: CarRepair[]) {
    this.carRepairsStore = this.carRepairsStore.concat(list);
  }

  /**
   * Método que permite al usuario cerrar la sesión
   */
  public logout() {
    this.authS.logout();
  }

}
