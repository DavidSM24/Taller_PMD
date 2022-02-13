import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getAllPaged(all?):Observable<User[]>{
    return null;
  }

  public getAll():Observable<User[]>{
    return null;
  }
  public getByCode(code:number):Promise<User>{
    return null;
  }
  public getByName(name:string):Promise<User>{
    return null;
  }
  public getAllUserAgenciesPaged(administrator:boolean):Observable<User[]>{
    return null;
  }

  public getAllAdminPaged(administrator:boolean):Observable<User[]>{
    return null;
  }

  public createOrUpdate(user:User):Promise<User>{
    return null;
  }
  public delete(user:User):Promise<void>{
    return null;
  }
}
