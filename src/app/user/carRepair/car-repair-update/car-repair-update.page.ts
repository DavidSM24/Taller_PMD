import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonDatetime, ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { CarRepair } from 'src/app/models/CarRepair';
import { CarRepairService } from 'src/app/services/car-repair.service';
import { DateTimeServiceService } from 'src/app/services/date-time-service.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-car-repair-update',
  templateUrl: './car-repair-update.page.html',
  styleUrls: ['./car-repair-update.page.scss'],
})
export class CarRepairUpdatePage implements OnInit {

  @Input() carRepair:CarRepair;
  //variables para la fecha
  @ViewChild(IonDatetime) datetime: IonDatetime;
  //Guarda la fecha con el formato de españa
  public spanishDateOrder:string;

  //Guarda la fecha de la reparación con el formato de españa
  public spanishDateRepair:string;
  //Guarda la fecha de la reparación con un formato legible para el ion-dateTime
  public stringDateOrder:string;
  //variable que guarda los datos proporcionados por el evento del ion-dateTime
  public dateValue = '';
 //Variable que guarda la fecha de reparación con el formato correcto para ser enviado a la api
 public formatedString;
 public formCarRepair:FormGroup;
 public id:number;
 private newCarRepair:CarRepair;
  constructor(
    private modalController: ModalController,
    private carRepairService:CarRepairService,
    private formBuilder:FormBuilder,
    private uts:UtilService,
    private dateTimeService:DateTimeServiceService
  ) { }

  ngOnInit() {
     //se crea la fecha en formato español
     if(this.carRepair.dateOrder){
       this.spanishDateOrder=this.dateTimeService.formatSpanishDateString(""+this.carRepair.dateOrder);
       this.formatedString=this.dateTimeService.formatString(""+this.carRepair.dateOrder);

      }
     //compruba si exite una fecha de reparación previa, en caso de que exista se preparan las variables para mostrarlas en el html
     if(this.carRepair.dateRepair){
       this.spanishDateRepair=this.dateTimeService.formatSpanishDateString(""+this.carRepair.dateRepair);
     }



     this.formCarRepair=this.formBuilder.group({

     operation:[this.carRepair.operation],
     carPlate:[this.carRepair.carPlate,[Validators.required]],
     model:[this.carRepair.model,[Validators.required]],
     brandCar:[this.carRepair.brandCar,[Validators.required]],
     clienteName:[this.carRepair.clienteName,[Validators.required]],
     nor:[this.carRepair.nor],
     amount:[this.carRepair.amount],
     asigPoints:[this.carRepair.asigPoints],
     myAgency:[this.carRepair.myAgency.myUser.name],
     dateOrder:[this.carRepair.dateOrder,[Validators.required]],
     //esta variable solo se usa para mostrar la fecha de la orden con el formato de España en el html
     spanishDateRepair:[this.spanishDateRepair],
     dateRepair:[this.carRepair.dateRepair],
     repaired:[this.carRepair.repaired,[Validators.required]]


   });
  }

   /**
   * Método que guarda la nota una vez editada
   */
    public async editCarRepair(){

      let cp:string=this.formCarRepair.get("carPlate").value;
      cp=cp.toUpperCase();

      //se asigna los datos
      this.newCarRepair={

        id:this.carRepair.id,
        operation:this.carRepair.operation,
        carPlate:cp,
        model:this.formCarRepair.get("model").value,
        brandCar:this.formCarRepair.get("brandCar").value,
        clienteName:this.formCarRepair.get("clienteName").value,
        dateOrder:this.formatedString,
        nor:this.carRepair.nor,
        amount:this.carRepair.amount,
        dateRepair:this.carRepair.dateRepair,
        asigPoints:this.carRepair.asigPoints,
        repaired:this.carRepair.repaired,
        myAgency:this.carRepair.myAgency

      }
      console.log(this.newCarRepair);
      try {
        //Guarda la reparación en la base de datos
        this.newCarRepair=await this.carRepairService.createOrUpdate(this.newCarRepair);
        //presenta el toast para que el usuario sepa que se ha guardado con  éxito
       await this.uts.presentToast("Se ha gurdadado correctamente","success","checkmark-circle-outline");

        //Cierra el modal pasando la reparación guardada a la página con las reparaciones
        this.modalController.dismiss({
          newCarRepair:this.newCarRepair
        })

      } catch (error) {
        this.uts.presentToast("Fallo al guradar","danger",'ban');
        console.log(error);
      }
    }

   /**
   * Método para cerrar el modal
   */
    public closeModal(){
      this.modalController.dismiss();
    }

  //Métodos para cerrar y abrir el modal de DateTime
   /**
   * Metodo que se usa en el ion-DateTime para confirmar la fecha elegida
   */
    confirm() {
      this.datetime.confirm(true);
    }
    /**
     * Método que se usa en ion-DateTime para cerrar la ventana
     */
    reset() {
      this.datetime.cancel(true);
    }

    ////Métodos para cambiar la fecha
   /**
   * Método que asigna la fecha de reparación cuando el usuario pulsa el botón de aceptar en el ión date time
   * @param event
   */
    changeDateRepair(event){
      this.spanishDateOrder=this.dateTimeService.formatSpanishDateString(event);
      this.stringDateOrder=this.dateTimeService.formatString(event);
      this.dateValue=event;
      this.formatedString=this.formatDate(this.dateValue);

    }
     /**
   * Metodo para darle formato a la fecha y que se pueda guardar en la base de datos
   * @param value
   * @returns fecha con el formato yyyy-MM-ddTHH:mm
   */
  formatDate(value: string):string {
    return format(parseISO(value), 'yyyy-MM-dd HH:mm:SS');
  }
}
