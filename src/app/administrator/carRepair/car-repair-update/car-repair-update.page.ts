import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonDatetime, ModalController } from '@ionic/angular';
import { CarRepair } from 'src/app/models/CarRepair';
import { CarRepairService } from 'src/app/services/car-repair.service';
import { UtilService } from 'src/app/services/util.service';

import { format, parseISO } from 'date-fns';

import { DateTimeServiceService } from 'src/app/services/date-time-service.service';
import { AgencyService } from '../../../services/agency.service';
import { Agency } from 'src/app/models/Agency';

@Component({
  selector: 'app-car-repair-update',
  templateUrl: './car-repair-update.page.html',
  styleUrls: ['./car-repair-update.page.scss'],
})
export class CarRepairUpdatePage implements OnInit {

  @Input() carRepair: CarRepair;
  //variables para la fecha
  @ViewChild(IonDatetime) datetime: IonDatetime;
  //Guarda la fecha con el formato de españa
  public spanishDateOrder: string;

  //Guarda la fecha de la reparación con el formato de españa
  public spanishDateRepair: string;
  //Guarda la fecha de la reparación con un formato legible para el ion-dateTime
  public stringDateRepair: string;
  //variable que guarda los datos proporcionados por el evento del ion-dateTime
  public dateValue = '';
  //Variable que guarda la fecha de reparación con el formato correcto para ser enviado a la api
  public formatedString;
  public formCarRepair: FormGroup;
  public id: number;
  private newCarRepair: CarRepair;

  public errorForm:boolean;


  constructor(
    private modalController: ModalController,
    private carRepairService: CarRepairService,
    private formBuilder: FormBuilder,
    private uts: UtilService,
    public dateTimeService: DateTimeServiceService,
    private as:AgencyService

  ) {


  }

  ngOnInit() {
    //se crea la fecha en formato español
    this.spanishDateOrder = this.dateTimeService.formatSpanishDateString("" + this.carRepair.dateOrder);
    //compruba si exite una fecha de reparación previa, en caso de que exista se preparan las variables para mostrarlas en el html
    if (this.carRepair.dateRepair) {
      this.spanishDateRepair = this.dateTimeService.formatSpanishDateString("" + this.carRepair.dateRepair);
      this.formatedString = this.dateTimeService.formatString("" + this.carRepair.dateRepair);
    }



    this.formCarRepair = this.formBuilder.group({

      operation: [this.carRepair.operation, [Validators.required]],
      carPlate: [this.carRepair.carPlate.toUpperCase(), [Validators.required]],
      model: [this.carRepair.model, [Validators.required]],
      brandCar: [this.carRepair.brandCar, [Validators.required]],
      clienteName: [this.carRepair.clienteName, [Validators.required]],
      nor: [this.carRepair.nor, [Validators.required]],
      amount: [this.carRepair.amount,Validators.required],
      asigPoints: [this.carRepair.asigPoints, [Validators.required,Validators.pattern("[0-9]+")]],
      myAgency: [this.carRepair.myAgency.myUser.name],
      dateOrder: [this.carRepair.dateOrder, [Validators.required]],
      //esta variable solo se usa para mostrar la fecha de la orden con el formato de España en el html
      spanishDateOrder: [this.spanishDateOrder],
      dateRepair: [this.carRepair.dateRepair],
      repaired: [this.carRepair.repaired, [Validators.required]]


    });
  }
  async ionViewDidEnter() {

  }


  /**
   * Método que guarda la nota una vez editada
   */
  public async editCarRepair() {

    await this.uts.presentLoading();

    let result: boolean = true;

    
    if (this.formatedString!=null && !this.dateTimeService.validateDates(this.dateTimeService.formatString(this.carRepair.dateOrder.toString()), this.dateTimeService.formatString(this.formatedString))) {
      result = false;
      this.uts.presentToast("La fecha de reparación no puede ser anterior a la de alta.", "danger", "ban");
    }

    if (this.formCarRepair.get("asigPoints").value < 1 && this.formCarRepair.get("repaired").value == true) {
      result = false;
      this.uts.presentToast("No se puede asignar una reparación como terminada a 0 puntos.", "danger", "ban");
    }

    if (this.formCarRepair.get("amount").value == 0 && this.formCarRepair.get("repaired").value == true) {
      result = false;
      this.uts.presentToast("No se puede asignar una reparación como terminada con un coste de 0 €.", "danger", "ban");
    }

    if (result) {
      //se asigna los datos
      this.newCarRepair = {

        id: this.carRepair.id,
        operation: this.formCarRepair.get("operation").value,
        carPlate: this.carRepair.carPlate,
        model: this.carRepair.model,
        brandCar: this.carRepair.brandCar,
        clienteName: this.formCarRepair.get("clienteName").value,
        dateOrder: this.formCarRepair.get("dateOrder").value,
        nor: this.formCarRepair.get("nor").value,
        amount: this.formCarRepair.get("amount").value,
        dateRepair: this.formatedString,
        asigPoints: this.formCarRepair.get("asigPoints").value,
        repaired: this.formCarRepair.get("repaired").value,
        myAgency: this.carRepair.myAgency

      }
      try {
        //Guarda la reparación en la base de datos
        this.newCarRepair = await this.carRepairService.createOrUpdate(this.newCarRepair);

        if (this.newCarRepair) {
          
          //Cierra el modal pasando la reparación guardada a la página con las reparaciones
          this.modalController.dismiss({
            newCarRepair: this.newCarRepair
          })
          this.uts.presentToast("Se ha gurdadado correctamente.", "success", "checkmark-circle-outline");
          this.as.added=true;
        }
        else {
          this.uts.presentToast("Fallo al actualizar la reparación. Inténtelo más tarde.", "danger", 'ban');
          this.closeModal();
        }

        //presenta el toast para que el usuario sepa que se ha guardado con  éxito




      } catch (error) {
        this.uts.presentToast("Fallo al actualizar la reparación. Inténtelo más tarde.", "danger", 'ban');
        
      }
    }

    this.uts.hideLoading();

  }

  /**
   * Método para cerrar el modal
   */
  public closeModal() {
    this.modalController.dismiss();
  }

  /**
   * Metodo que se usa en el ion-DateTime para confirmar la fecha elegida
   */
  confirm() {
    this.datetime.confirm(true);
    this.validateForm();
  }
  /**
   * Método que se usa en ion-DateTime para cerrar la ventana
   */
  reset() {
    this.datetime.cancel(true);
  }

  /**
   * Metodo para darle formato a la fecha y que se pueda guardar en la base de datos
   * @param value
   * @returns fecha con el formato yyyy-MM-ddTHH:mm
   */
  formatDate(value: string): string {
    return format(parseISO(value), 'yyyy-MM-dd HH:mm:SS');
  }




  /**
   * Método que asigna la fecha de reparación cuando el usuario pulsa el botón de aceptar en el ión date time
   * @param event
   */
  changeDateRepair(event) {
    this.spanishDateRepair = this.dateTimeService.formatSpanishDateString(event);
    this.stringDateRepair = this.dateTimeService.formatString(event);
    this.dateValue = event;
    this.formatedString = this.formatDate(this.dateValue);
    this.validateForm();
  }

  public validateForm(){

    this.errorForm=false;
    if(this.formCarRepair.get("repaired").value==true){

      if (this.formatedString==null ||!this.dateTimeService.validateDates(this.dateTimeService.formatString(this.carRepair.dateOrder.toString()), this.dateTimeService.formatString(this.formatedString))) {
        this.errorForm = true;
      }

      if (this.formCarRepair.get("asigPoints").value == 0 && this.formCarRepair.get("repaired").value == true) {
        this.errorForm = true;
      }

      if (this.formCarRepair.get("amount").value < 1 && this.formCarRepair.get("repaired").value == true) {
        this.errorForm = true;
      }
    }
  }


}
