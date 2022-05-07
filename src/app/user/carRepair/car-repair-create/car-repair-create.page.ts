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
 
   //Guarda la fecha de la reparación con el formato de españa
   public spanishDateRepair:string;
   //Guarda la fecha de la reparación con un formato legible para el ion-dateTime
   public stringDateOrder:string;
   //variable que guarda los datos proporcionados por el evento del ion-dateTime
   public dateValue = '';
  //Variable que guarda la fecha de reparación con el formato correcto para ser enviado a la api 
  public formatedString;

  public myAgency:Agency;

  public formCarRepair:FormGroup;
  public carRepairs:CarRepair;

  private toast:ToastController;
  private loading:LoadingController;
  private miLoading:HTMLIonLoadingElement;


  

  constructor(
    private carRepairService:CarRepairService,
    private formBuilder:FormBuilder,
    private pickerController:PickerController,
    private utilService:UtilService,
    private authService:AuthService,
    private agencyService:AgencyService,
    private dateTimeService:DateTimeServiceService

  ) {
    this.createFormGroup();
    
   }

  ngOnInit() {
    this.getMyAgency();
  }
  
  public async create():Promise<void>{
    this.utilService.presentLoading();
    if(this.myAgency!=null){
      let newCarRepair:CarRepair={
        operation:0,
        carPlate:this.formCarRepair.get("carPlate").value,
        model:this.formCarRepair.get("model").value,
        brandCar:this.formCarRepair.get("brandCar").value,
        clienteName:this.formCarRepair.get("clienteName").value,
        dateOrder:new Date(Date.now()),
        nor:0,
        amount:0,
        dateRepair:null,
        asigPoints:0,
        repaired:false,
        myAgency:this.myAgency
      }

      newCarRepair=await this.carRepairService.createOrUpdate(newCarRepair);
      if(newCarRepair.id){
        this.formCarRepair.reset();
        this.utilService.presentToast("La reparación se ha guardado correctamente",'success');
      }else{
        this.utilService.presentToast("Ha surgido un error al intentar crear la reparacion",'danger')
      }
      this.utilService.hideLoading();
    }

    
  }

  /**
   * Método que obtiene el id de la agencia conectada
   */
  public async getMyAgency(){

    let agencys:Agency[];

    try{
      this.utilService.presentLoading();
      agencys= await this.agencyService.getByUserNamePaged(this.authService.user.name,100,0);
    if(agencys.length>0){
      agencys.forEach(agency=>{
        if(agency.myUser.id==this.authService.user.id){
          this.myAgency=agency;
          this.utilService.hideLoading();
        }
      });
    }
      
    }catch{
      this.utilService.presentToast("Fallo al cargar","danger");

    }

    
  }

  /**
   * Método que crea el FormGroup con los campos necesarios
   */
  public createFormGroup():void{
    this.formCarRepair=this.formBuilder.group({
    carPlate:["",Validators.required],
    model:["",Validators.required],
    brandCar:["",Validators.required],
    clienteName:["",Validators.required],
    dateOrder:["",Validators.required],
    myAgency:[this.authService.user.id,Validators.required]
    });
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
