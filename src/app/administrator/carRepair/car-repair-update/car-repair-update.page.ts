import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarRepairService } from 'src/app/services/car-repair.service';

@Component({
  selector: 'app-car-repair-update',
  templateUrl: './car-repair-update.page.html',
  styleUrls: ['./car-repair-update.page.scss'],
})
export class CarRepairUpdatePage implements OnInit {

  public formCarRepair:FormGroup;

  constructor(
    private carRepairService:CarRepairService,
    private formBuilder:FormBuilder
  ) {
    
   }

  ngOnInit() {
  }

}
