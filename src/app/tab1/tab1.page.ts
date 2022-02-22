import { Component } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  msg:string="";

  constructor(private us: UserService) {}
  public async test_GetAll() {
    let user:User[] = await this.us.getAll();
    this.msg=user[0].name;
    console.log(this.msg);
    
  }
  public test_GetAllPaged(limit: number, offset: number) {
    this.us.getAllPaged(limit, offset);
  }
  public test_GetById(id: number) {
    this.us.getById(id);
  }
  public test_GetByName(name: string) {
    this.us.getByName(name);
  }
  public test_getAllUserAgenciesPaged(administrator:boolean, element: number, page: number) {
    this.us.getAllUserAgenciesPaged(administrator,element,page);
  }
  public test_getAllAdminPaged(administrator:boolean, element: number, page: number) {
    this.us.getAllAdminPaged(administrator,element,page);
  }
  public async test_Update() {
    let toDrop: User[] = await this.us.getAll();
    let last: User = toDrop[toDrop.length - 1];
    last.email="hola@gmail.es";
    console.log(last);
    if (toDrop != null) {
      console.log(await this.us.createOrUpdate(last));
    }
  }

  public async test_Delete() {
    let toDrop: User[] = await this.us.getAll();
    let last: User = toDrop[toDrop.length - 1];
    console.log(last);
    if (toDrop != null) {
      console.log(await this.us.delete(last));
    }
  }
}
