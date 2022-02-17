import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agency } from '../models/Agency';
import { ExchangeGift } from '../models/ExchangeGift';

@Injectable({
  providedIn: 'root'
})
export class ExchangeGiftService {

  endpoint: string = "/exchangegift";

  URLDatabase: string;
  constructor(public http: HttpClient) {
    this.URLDatabase = environment.herokuConfig.url;
   }
private async getListData(endpoint: string): Promise<ExchangeGift[]> {
    let users: ExchangeGift[] = [];

    return new Promise(resolve => {
      this.http.get(endpoint).subscribe((data: any[]) => {

        if (data != null && data.length > 0) {

          for (let miexgift of data) {
            const tmp: ExchangeGift = {
              id: miexgift.id,
              dateEchange: miexgift.dateEchange,
              observations:miexgift.observations,
              isDelivered: miexgift.isDelivered,
              agency: miexgift.agency,
              gift: miexgift.gift
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
  public getAllPaged(element: number, page: number):Promise<ExchangeGift[]>{
    return this.getListData("http://localhost:8080" + this.endpoint + "/element/" + element + "/page/" + page);
  }
  public getAll():Promise<ExchangeGift[]>{
    return this.getListData("http://localhost:8080" + this.endpoint);
  }
  public async getById(id: number): Promise<ExchangeGift> {

    let exchangegift: ExchangeGift = null;

    return new Promise(resolve => {
      this.http.get("http://localhost:8080" + this.endpoint + "/id/" + id).subscribe((miexgift: any) => {

        if (miexgift.id) {
          const tmp: ExchangeGift = {
            id: miexgift.id,
              dateEchange: miexgift.dateEchange,
              observations:miexgift.observations,
              isDelivered: miexgift.isDelivered,
              agency: miexgift.agency,
              gift: miexgift.gift
          }
          exchangegift = tmp;
        }
        console.log(exchangegift);
        resolve(exchangegift);
      }, error => {
        console.log(error);
        console.log(exchangegift);
        resolve(exchangegift);
      });
    });
  }
  public getByDeliveredPaged(delivered:Boolean, element: number, page: number):Promise<ExchangeGift[]>{
    return this.getListData("http://localhost:8080" + this.endpoint +"/delivered/"+ delivered + "/element/" + element + "/page/" + page);
  }
  public getByAgencyPaged(agency:Agency, element: number, page: number):Promise<ExchangeGift[]>{
    if(agency!=null){
      return this.getListData("http://localhost:8080" + this.endpoint +"/id_agency/"+ agency.id + "/element/" + element + "/page/" + page);
    }else{
      let result:Promise<ExchangeGift[]>
      return result;
    }
    
  }
}
