import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CarRepair } from 'src/app/models/CarRepair';
import { CarRepairService } from 'src/app/services/car-repair.service';

@Component({
  selector: 'app-car-repair-update',
  templateUrl: './car-repair-update.page.html',
  styleUrls: ['./car-repair-update.page.scss'],
})
export class CarRepairUpdatePage implements OnInit {

  @Input() carRepair:CarRepair;

  public formCarRepair:FormGroup;
  public id:number;
  private oldCarRepair:CarRepair;
  private newCarRepair:CarRepair;
  public validator=this.formBuilder.group({
    operation:['',[Validators.required]],
    carPlate:['',[Validators.required]],
    model:['',[Validators.required]],
    brandCar:['',[Validators.required]],
    clientName:['',[Validators.required]],
    nor:['',[Validators.required]],
    amount:[''],
    asigPoints:[''],
    myAgency:[''],
    dateOrder:['',[Validators.required]],
    dateRepair:[''],
    repaired:['',[Validators.required]]

  });

  constructor(
    private modalController: ModalController,
    private carRepairService:CarRepairService,
    private formBuilder:FormBuilder,
    private activateRoute:ActivatedRoute,
  ) {
   
   }

  ngOnInit() {
    this.formCarRepair=this.formBuilder.group({
      operation:[this.carRepair.operation,[Validators.required]],
    carPlate:[this.carRepair.carPlate,[Validators.required]],
    model:[this.carRepair.model,[Validators.required]],
    brandCar:[this.carRepair.brandCar,[Validators.required]],
    clientName:[this.carRepair.clientName,[Validators.required]],
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
     
    this.oldCarRepair={
      id:this.carRepair.id,
    operation:this.carRepair.operation,
    carPlate:this.carRepair.carPlate,
    model:this.carRepair.model,
    brandCar:this.carRepair.brandCar,
    clientName:this.carRepair.clientName,
    dateOrder:this.carRepair.dateOrder,
    nor:this.carRepair.nor,
    amount:this.carRepair.amount,
    dateRepair:this.carRepair.dateRepair,
    asigPoints:this.carRepair.asigPoints,
    repaired:this.carRepair.repaired,
    myAgency:this.carRepair.myAgency

    }
  }

  public setCarRepair():void{
    this.validator=this.formBuilder.group({
    operation:[this.carRepair?.operation,[Validators.required]],
    carPlate:[this.carRepair?.carPlate,[Validators.required]],
    model:[this.carRepair?.model,[Validators.required]],
    brandCar:[this.carRepair?.brandCar,[Validators.required]],
    clientName:[this.carRepair?.clientName,[Validators.required]],
    nor:[this.carRepair?.nor,[Validators.required]],
    amount:[this.carRepair?.amount],
    asigPoints:[this.carRepair?.asigPoints],
    myAgency:[this.carRepair?.myAgency.myUser.name],
    dateOrder:[this.carRepair?.dateOrder,[Validators.required]],
    dateRepair:[this.carRepair?.dateRepair],
    repaired:[this.carRepair?.repaired,[Validators.required]]
    });
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
      clientName:this.formCarRepair.get("clientName").value,
      dateOrder:this.carRepair.dateOrder,
      nor:this.formCarRepair.get("nor").value,
      amount:this.formCarRepair.get("amount").value,
      dateRepair:this.formCarRepair.get("dateRepair").value,
      asigPoints:this.formCarRepair.get("asigPoints").value,
      repaired:this.formCarRepair.get("repaired").value,
      myAgency:this.carRepair.myAgency
    }
    try {
      console.log("Nuevo"+this.newCarRepair.operation);
      this.carRepairService.createOrUpdate(this.newCarRepair);
      //añadir un toast
      console.log(this.carRepairService.getById(this.newCarRepair.id));
      this.closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  public closeModal(){
    this.modalController.dismiss();
  }
}
