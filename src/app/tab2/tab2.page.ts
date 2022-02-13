import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Gift } from '../models/Gift';
import { GiftService } from '../services/gift.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public formTest: FormGroup;

  constructor(private gs: GiftService) { }

  public test_GetAll() {
    this.gs.getAll();
  }

  public test_GetAllPaged(limit: number, offset: number) {
    this.gs.getAllPaged(limit, offset);
  }

  public test_GetById(id: number) {
    this.gs.getById(id);
  }

  public test_GetByNamePaged(name: string, limit: number, offset: number) {
    this.gs.getByNamePaged(name, limit, offset);
  }

  public test_GetByAvailablePaged(available: boolean, limit: number, offset: number) {
    this.gs.getByAvailablePaged(available, limit, offset);
  }

  public async test_Create(): Promise<void> {
    
  }

  public async test_Update() {
    let newGift: Gift = await this.gs.getById(19);
    newGift.name="pantalon";
    newGift=await this.gs.createOrUpdate(newGift);
    console.log(newGift);
  }

  public async test_Delete() {
    let toDrop: Gift[] = await this.gs.getAll();
    let last: Gift = toDrop[toDrop.length - 1];
    console.log(last);
    if (toDrop != null) {
      console.log(await this.gs.delete(last));
    }
  }
}
