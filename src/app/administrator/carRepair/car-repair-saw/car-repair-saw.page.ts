import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarRepair } from 'src/app/models/CarRepair';
import { CarRepairService } from 'src/app/services/car-repair.service';

@Component({
  selector: 'app-car-repair-saw',
  templateUrl: './car-repair-saw.page.html',
  styleUrls: ['./car-repair-saw.page.scss'],
})
export class CarRepairSawPage implements OnInit {

  public formCarRepair:FormGroup;
  public id:number;
  private carRepair:CarRepair;

  constructor(
    private carRepairService:CarRepairService,
    private formBuilder:FormBuilder,
    private routes:Router,
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


  public goUpdatePage(){
    this.routes.navigateByUrl('tab-administrator/car-repair/update');
  }
}
