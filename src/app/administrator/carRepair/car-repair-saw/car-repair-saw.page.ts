import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CarRepair } from 'src/app/models/CarRepair';
import { CarRepairService } from 'src/app/services/car-repair.service';
import { CarRepairUpdatePage } from '../car-repair-update/car-repair-update.page';

@Component({
  selector: 'app-car-repair-saw',
  templateUrl: './car-repair-saw.page.html',
  styleUrls: ['./car-repair-saw.page.scss'],
})
export class CarRepairSawPage implements OnInit {

  @Input() carRepair:CarRepair;

  public formCarRepair:FormGroup;
  public id:number;
  private oldCarRepair:CarRepair;
  public validator=this.formBuilder.group({
    operation:['',[Validators.required]],
    carPlate:['',[Validators.required]],
    model:['',[Validators.required]],
    brandCar:['',[Validators.required]],
    clienteName:['',[Validators.required]],
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
    private routes:Router,
    private activateRoute:ActivatedRoute,

  ) { }

  ngOnInit() {
    console.log(this.carRepair);
    this.formCarRepair=this.formBuilder.group({
      operation:[this.carRepair.operation,[Validators.required]],
    carPlate:[this.carRepair.carPlate,[Validators.required]],
    model:[this.carRepair.model,[Validators.required]],
    brandCar:[this.carRepair.brandCar,[Validators.required]],
    clientName:[this.carRepair.clienteName,[Validators.required]],
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
    clienteName:this.carRepair.clienteName,
    dateOrder:this.carRepair.dateOrder,
    nor:this.carRepair.nor,
    amount:this.carRepair.amount,
    dateRepair:this.carRepair.dateRepair,
    asigPoints:this.carRepair.asigPoints,
    repaired:this.carRepair.repaired,
    myAgency:this.carRepair.myAgency

    }
  }

  public goUpdatePage(){
    this.routes.navigateByUrl('tab-administrator/car-repair/update');
  }

  
  /**
   * Método que actualiza una reparación mediante un modal
   * @param carRepair Reparación que se quiera modificar
   */
   public async edit(){

    const modal = await this.modalController.create({
      component: CarRepairUpdatePage,
      //hoja de estilos
      cssClass: 'my-modal-class',
      //pasar datos al modal
      
      componentProps: {
        'carRepair':this.carRepair
        
        
      }
    });
   
  try {
    return await modal.present();
    this.modalController.dismiss();
    
  } catch (error) {
    
  }

  }
  public closeModal(){
    this.modalController.dismiss();
  }
}
