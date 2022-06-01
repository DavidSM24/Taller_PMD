import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonDatetime, IonToggle, LoadingController, PickerController, ToastController } from '@ionic/angular';
import { Agency } from 'src/app/models/Agency';
import { CarRepair } from 'src/app/models/CarRepair';
import { AgencyService } from 'src/app/services/agency.service';
import { AuthService } from 'src/app/services/auth.service';
import { CarRepairService } from 'src/app/services/car-repair.service';
import { DateTimeServiceService } from 'src/app/services/date-time-service.service';
import { UtilService } from 'src/app/services/util.service';
import { format, parseISO } from 'date-fns';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-car-repair-create',
  templateUrl: './car-repair-create.page.html',
  styleUrls: ['./car-repair-create.page.scss'],
})
export class CarRepairCreatePage implements OnInit {

  @ViewChild(IonToggle) toggle: IonToggle;
   //variables para la fecha
   @ViewChild(IonDatetime) datetime: IonDatetime;
   //Guarda la fecha con el formato de españa
   public spanishDateOrder:string;

   //Guarda la fecha de la reparación con un formato legible para el ion-dateTime
   public stringDateOrder:string;
   //variable que guarda los datos proporcionados por el evento del ion-dateTime
   public dateValue = '';
  //Variable que guarda la fecha de reparación con el formato correcto para ser enviado a la api
  public formatedString;

  public myAgency:Agency;

  public formCarRepair:FormGroup;
  public validator;
  public carRepairs:CarRepair;



  constructor(
    private carRepairService:CarRepairService,
    private formBuilder:FormBuilder,
    private pickerController:PickerController,
    private utilService:UtilService,
    private authService:AuthService,
    private agencyService:AgencyService,
    private dateTimeService:DateTimeServiceService,
    private router:Router

  ) {
    this.createFormGroup();

   }

  ngOnInit() {
    this.myAgency=this.authService.agency;
    this.setDate();
  }

  onSubmit(){
    this.create();
  }

  /**
   * Método que guarda la reparación en la base de datos
   */
  public async create():Promise<void>{

    await this.utilService.presentLoading();
    if(this.authService.agency!=null){

      let cp:string=this.formCarRepair.get("carPlate").value;
      cp=cp.toUpperCase();

      let newCarRepair:CarRepair={
        operation:0,
        carPlate:cp,
        model:this.formCarRepair.get("model").value,
        brandCar:this.formCarRepair.get("brandCar").value,
        clienteName:this.formCarRepair.get("clienteName").value,
        dateOrder:this.formatedString,
        nor:0,
        amount:0,
        dateRepair:null,
        asigPoints:0,
        repaired:false,
        myAgency:this.authService.agency
      }
      try {
        if(newCarRepair.carPlate.length>4){
          newCarRepair=await this.carRepairService.createOrUpdate(newCarRepair);
          if(newCarRepair.id){
            this.formCarRepair.reset();
            this.utilService.presentToast("La reparación se ha guardado correctamente",'success',"checkmark-circle-outline");
            this.carRepairService.added=true;
            this.routeCarRepairList();
          }else{
            this.utilService.presentToast("Ha surgido un error al intentar crear la reparacion",'danger','ban');
          }
        }else{
          this.utilService.presentToast("La matrícula debe tener más de cuatro caracteres",'danger','ban')
        }



      } catch (error) {

      }finally{
        await this.utilService.hideLoading();
      }

    }

    else {
      this.utilService.presentToast("Ha habido un error relacionado con su agencia. Inténtelo más tarde.","danger","ban");
    }

  }

  /**
   * Método que crea el FormGroup con los campos necesarios
   */
  public createFormGroup():void{
    this.formCarRepair=this.formBuilder.group({
    carPlate:["",[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
    model:["",[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    brandCar:["",[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    clienteName:["",[Validators.required, Validators.minLength(2),Validators.maxLength(50)]],
    dateOrder:["",Validators.required],
    myAgency:[this.authService.agency]
    });
  }

  /**
   * Método que devuelve un booleano que muestra esta bien relleno el formulario
   */
  get errorControl() {
    return this.formCarRepair.controls;
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
    setDate(){
      let date:Date=new Date(Date.now());
      this.spanishDateOrder=this.dateTimeService.formatSpanishDateString(date.toISOString());
      this.formatedString=this.dateTimeService.formatString(date.toISOString());


    }
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

  /**
   * Método que cambia a la página con todas las reparaciones
   */
  public routeCarRepairList(){
    this.router.navigateByUrl('tab-user/car-repair/list');
  }

}
