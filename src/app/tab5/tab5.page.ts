import { Component } from '@angular/core';
import { Agency } from '../models/Agency';
import { ExchangeGift } from '../models/ExchangeGift';
import { ExchangeGiftService } from '../services/exchange-gift.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {
  public formTest:FormGroup;
  
  constructor(private ex: ExchangeGiftService,
    private fb: FormBuilder) {

      this.formTest=this.fb.group({
        
      });
    }

  public test_GetAll() {
    this.ex.getAll();
  }
  public test_GetAllPaged(limit: number, offset: number) {
    this.ex.getAllPaged(limit, offset);
  }
  public test_GetById(id: number) {
    this.ex.getById(id);
  }
  public test_getByDeliveredPaged(delivered:Boolean, element: number, page: number) {
    this.ex.getByDeliveredPaged(delivered,element,page);
  }
  public getByAgencyPaged(agency:Agency, element: number, page: number) {
    this.ex.getByAgencyPaged(agency,element,page);
  }
  public async test_Delete() {
    let toDrop: ExchangeGift[] = await this.ex.getAll();
    let last: ExchangeGift = toDrop[toDrop.length - 1];
    console.log(last);
    if (toDrop != null) {
      console.log(await this.ex.delete(last));
    }
  }
}
