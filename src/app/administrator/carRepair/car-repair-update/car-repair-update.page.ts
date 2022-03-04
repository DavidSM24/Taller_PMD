import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarRepair } from 'src/app/models/CarRepair';
import { CarRepairService } from 'src/app/services/car-repair.service';

@Component({
  selector: 'app-car-repair-update',
  templateUrl: './car-repair-update.page.html',
  styleUrls: ['./car-repair-update.page.scss'],
})
export class CarRepairUpdatePage implements OnInit {

  public formCarRepair:FormGroup;
  public id:number;
  private carRepair:CarRepair;

  constructor(
    private carRepairService:CarRepairService,
    private formBuilder:FormBuilder,
    private activateRoute:ActivatedRoute,
  ) {
    this.activateRoute.params.subscribe(parametros=>{
      
      this.id=parametros['id'];
      console.log(this.id);
      
      (async ()=>{
        try{
          this.carRepair=await this.carRepairService.getById(this.id);
          this.carRepair.id=this.id;
          
          console.log(this.carRepair);
        }catch(err){
          console.log(err+"Fallo al cargar el presupuesto")
        }
      })();
    })
   }

  ngOnInit() {
  }

}
