import { Component } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private us: UserService) {}
  public test_GetAll() {
    this.us.getAll();
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
  public getAllUserAgenciesPaged(administrator:boolean, element: number, page: number) {
    this.us.getAllUserAgenciesPaged(administrator,element,page);
  }
  public getAllAdminPaged(administrator:boolean, element: number, page: number) {
    this.us.getAllAdminPaged(administrator,element,page);
  }
  
}
