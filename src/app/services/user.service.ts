import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint: string = "/users";

  URLDatabase: string;
  constructor(public http: HttpClient) {
    this.URLDatabase = environment.herokuConfig.url;
   }

  private async getListData(endpoint: string): Promise<User[]> {
    let users: User[] = [];

    return new Promise(resolve => {
      this.http.get(endpoint).subscribe((data: any[]) => {

        if (data != null && data.length > 0) {

          for (let miuser of data) {
            const tmp: User = {
              id: miuser.id,
              code: miuser.code,
              password: miuser.password,
              administrator: miuser.administrator,
              email: miuser.email,
              name: miuser.name
            }

            users.push(tmp);
          }
        }
        console.log(data);
        resolve(users);
      }, error => {
        console.log(error);
      });
    });
  }
  public async getAllPaged(element: number, page: number):Promise<User[]>{
    return this.getListData(this.URLDatabase + this.endpoint + "/element/" + element + "/page/" + page);
  }

  public async getAll():Promise<User[]>{
    return this.getListData(this.URLDatabase + this.endpoint);
  }


  public async getById(id: number): Promise<User> {

    let user: User = null;

    return new Promise(resolve => {
      this.http.get(this.URLDatabase + this.endpoint + "/id/" + id).subscribe((miuser: any) => {

        if (miuser.id) {
          const tmp: User = {
            id: miuser.id,
            code: miuser.code,
            password: miuser.password,
            administrator: miuser.administrator,
            email: miuser.email,
            name: miuser.name
          }
          user = tmp;
        }
        console.log(user);
        resolve(user);
      }, error => {
        console.log(error);
        console.log(user);
        resolve(null);
      });
    });
  }

  public async getByMail(mail:string):Promise<User[]>{
    return this.getListData(this.URLDatabase + this.endpoint + "/mail/"+mail);
  }

  public async getFilterCode(code:string):Promise<User[]>{
    return this.getListData(this.URLDatabase + this.endpoint + "/fcode/"+code);
  }

  public async getByAvailable():Promise<User[]>{
    return this.getListData(this.URLDatabase + this.endpoint + "/available");
  }

  public async getByCode(code:number):Promise<User>{
    let user: User = null;

    return new Promise(resolve => {
      this.http.get(this.URLDatabase + this.endpoint + "/code/" + code).subscribe((miuser: any) => {
        if (miuser&&miuser.code) {
          const tmp: User = {
            id: miuser.id,
            code: miuser.code,
            password: miuser.password,
            administrator: miuser.administrator,
            email: miuser.email,
            name: miuser.name
          }
          user = tmp;
        }
        console.log(user);
        resolve(user);
      }, error => {
        console.log(error);
        console.log(user);
        resolve(null);
      });
    });
  }
  public async getByName(name:string):Promise<User[]>{
    return this.getListData(this.URLDatabase+this.endpoint+"/name/"+name);
  }

  public async getByAdministrator(administrator:boolean, element: number, page: number):Promise<User[]>{
    return this.getListData(this.URLDatabase + this.endpoint + "/administrator/" + administrator + "/element/" + element + "/page/" + page);
  }

  public async createOrUpdate(user:User):Promise<User>{

    if (user != null) {
      const body=user;
      return new Promise(resolve => {

        this.http.post(this.URLDatabase + this.endpoint, body).subscribe((miuser: any) => {
          let result: User = {
            id: miuser.id,
            code: miuser.code,
            password: miuser.password,
            administrator: miuser.administrator,
            email: miuser.email,
            name: miuser.name
          }
          resolve(result);
        }, error => {
          console.log(error);
          resolve(null);
        });
      });
    }
  }


  public async delete(user:User):Promise<boolean>{
    return new Promise(resolve => {
      this.http.delete<User>(this.URLDatabase + this.endpoint, { body: user }).subscribe(() => {
        resolve(true);
      }, error => {
        console.log(error);
        resolve(false);
      });
    });
  }
}
