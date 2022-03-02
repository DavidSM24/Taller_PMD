import { Component } from '@angular/core';
import { Agency } from '../models/Agency';
import { AgencyService } from '../services/agency.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public formTest:FormGroup;

  constructor(private as:AgencyService,
    private fb: FormBuilder) {

      this.formTest = this.fb.group({
        img: ["", Validators.required]
      });
    }

  public test_GetAll() {
    this.as.getAll();
  }

  public test_GetAllPaged(limit: number, offset: number) {
    this.as.getAllPaged(limit, offset);
  }

  public test_GetById(id: number) {
    this.as.getById(id);
  }

  public test_GetByUserNamePaged(username: string, limit: number, offset: number) {
    this.as.getByUserNamePaged(username, limit, offset);
  }

  public test_GetByisActivePaged(available: boolean, limit: number, offset: number) {
    this.as.getByisActivePaged(available, limit, offset);
  }

  public async test_Create(): Promise<void> {
    
  }

  public async test_Update() {
    let toDrop: Agency[] = await this.as.getAll();
    let last: Agency = toDrop[toDrop.length - 1];
    last.address="se ha modificadoo 666";
    console.log(last);
    if (toDrop != null) {
      console.log(await this.as.createOrUpdate(last));
    }
  }

  public async test_Delete() {
    let toDrop: Agency[] = await this.as.getAll();
    let last: Agency = toDrop[toDrop.length - 1];
    console.log(last);
    if (toDrop != null) {
      console.log(await this.as.delete(last));
    }
  }
  
  public segmentChanged(event){
    
  }

}
