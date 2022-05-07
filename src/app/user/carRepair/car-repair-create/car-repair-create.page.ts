import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonToggle, LoadingController, PickerController, ToastController } from '@ionic/angular';
import { Agency } from 'src/app/models/Agency';
import { CarRepair } from 'src/app/models/CarRepair';
import { AgencyService } from 'src/app/services/agency.service';
import { AuthService } from 'src/app/services/auth.service';
import { CarRepairService } from 'src/app/services/car-repair.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-car-repair-create',
  templateUrl: './car-repair-create.page.html',
  styleUrls: ['./car-repair-create.page.scss'],
})
export class CarRepairCreatePage implements OnInit {

  @ViewChild(IonToggle) toggle: IonToggle;

  public myAgency:Agency;

  public carRepair:CarRepair;
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
    private agencyService:AgencyService

  ) {
    this.createFormGroup();
    
   }

  ngOnInit() {
    this.getMyAgency();
  }
  
  public async create():Promise<void>{
    this.utilService.presentLoading();

    
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


}
