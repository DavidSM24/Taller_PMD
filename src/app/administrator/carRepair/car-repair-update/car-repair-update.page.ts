import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonDatetime, ModalController } from '@ionic/angular';
import { CarRepair } from 'src/app/models/CarRepair';
import { CarRepairService } from 'src/app/services/car-repair.service';
import { UtilService } from 'src/app/services/util.service';

import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-car-repair-update',
  templateUrl: './car-repair-update.page.html',
  styleUrls: ['./car-repair-update.page.scss'],
})
export class CarRepairUpdatePage implements OnInit {

  @Input() carRepair:CarRepair;
  //variables para la fecha
  @ViewChild(IonDatetime) datetime: IonDatetime;
  public dateValue = '';
  public dateRepair;
  public dateOrder:Date;
  public value;
  public formatedString;

  public formCarRepair:FormGroup;
  public id:number; 
  
  
  private newCarRepair:CarRepair;


  constructor(
    private modalController: ModalController,
    private carRepairService:CarRepairService,
    private formBuilder:FormBuilder,
    private uts:UtilService
  ) {
    
   
   }

  ngOnInit() {
    
    //console.log("Init "+this.dateOrder.getDay);
    if(this.carRepair.dateRepair){
      this.change(this.carRepair.dateRepair)
    }

    this.formCarRepair=this.formBuilder.group({

    operation:[this.carRepair.operation,[Validators.required]],
    carPlate:[this.carRepair.carPlate,[Validators.required]],
    model:[this.carRepair.model,[Validators.required]],
    brandCar:[this.carRepair.brandCar,[Validators.required]],
    clienteName:[this.carRepair.clienteName,[Validators.required]],
    nor:[this.carRepair.nor,[Validators.required]],
    amount:[this.carRepair.amount],
    asigPoints:[this.carRepair.asigPoints],
    myAgency:[this.carRepair.myAgency.myUser.name],
    dateOrder:[this.carRepair.dateOrder,[Validators.required]],
    dateRepair:[this.carRepair.dateRepair],
    repaired:[this.carRepair.repaired,[Validators.required]]
    
  });
  }
  async ionViewDidEnter(){     
   
  }


  /**
   * Método que guarda la nota una vez editada
   */
  public async editCarRepair(){
    
    this.newCarRepair={

      id:this.carRepair.id,
      operation:this.formCarRepair.get("operation").value,
      carPlate:this.carRepair.carPlate,
      model:this.carRepair.model,
      brandCar:this.carRepair.brandCar,
      clienteName:this.formCarRepair.get("clienteName").value,
      dateOrder:this.formCarRepair.get("dateOrder").value,
      nor:this.formCarRepair.get("nor").value,
      amount:this.formCarRepair.get("amount").value,
      dateRepair:this.formatedString,
      asigPoints:this.formCarRepair.get("asigPoints").value,
      repaired:this.formCarRepair.get("repaired").value,
      myAgency:this.carRepair.myAgency
   
    }
    try {
      
      this.newCarRepair=await this.carRepairService.createOrUpdate(this.newCarRepair);
      
      this.uts.presentToast("Se ha gurdadado correctamente","success");
      this.closeModal();
    } catch (error) {
      this.uts.presentToast("Fallo al guradar","danger");
      console.log(error);
    }
  }

  public closeModal(){
    this.modalController.dismiss();
  }

  confirm() {
    this.datetime.confirm(true);
  }
  
  reset() {
    this.datetime.reset();
  }

  formatDate(value: string) {
    return format(parseISO(value), 'yyyy-MM-dd HH:mm:SS');
  }

  




  change(event){
    console.log(event);
    this.dateValue=event;
    this.formatedString=this.formatDate(this.dateValue);    
    this.dateRepair=this.formatedString;
    
   
  }
  

}
