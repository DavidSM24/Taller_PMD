import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CarRepairService } from 'src/app/services/car-repair.service';

@Component({
  selector: 'app-car-repair-saw',
  templateUrl: './car-repair-saw.page.html',
  styleUrls: ['./car-repair-saw.page.scss'],
})
export class CarRepairSawPage implements OnInit {

  public formCarRepair:FormGroup;

  constructor(
    private carRepairService:CarRepairService,
    private formBuilder:FormBuilder,
    private routes:Router
  ) { }

  ngOnInit() {
  }


  public goUpdatePage(){
    this.routes.navigateByUrl('tab-administrator/car-repair/update');
  }
}
