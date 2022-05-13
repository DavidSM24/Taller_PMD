import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Agency } from '../models/Agency';
import { ExchangeGift } from '../models/ExchangeGift';

@Injectable({
  providedIn: 'root'
})
export class ExchangeGiftService {

  endpoint: string = "/exchangeGifts";

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
              dateExchange: miexgift.dateExchange,
              observations:miexgift.observations,
              delivered: miexgift.delivered,
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
    return this.getListData(this.URLDatabase + this.endpoint + "/element/" + element + "/page/" + page);
  }
  public getAll():Promise<ExchangeGift[]>{
    return this.getListData(this.URLDatabase + this.endpoint);
  }
  public async getById(id: number): Promise<ExchangeGift> {

    let exchangegift: ExchangeGift = null;

    return new Promise(resolve => {
      this.http.get(this.URLDatabase + this.endpoint + "/id/" + id).subscribe((miexgift: any) => {

        if (miexgift.id) {
          const tmp: ExchangeGift = {
            id: miexgift.id,
            dateExchange: miexgift.dateExchange,
              observations:miexgift.observations,
              delivered: miexgift.delivered,
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
    return this.getListData(this.URLDatabase + this.endpoint +"/delivered/"+ delivered + "/element/" + element + "/paged/" + page);
  }
  public getByAgencyPaged(agency:Agency, element: number, page: number):Promise<ExchangeGift[]>{
    if(agency!=null){
      return this.getListData(this.URLDatabase + this.endpoint +"/id_agency/"+ agency.id + "/element/" + element + "/paged/" + page);
    }else{
      let result:Promise<ExchangeGift[]>
      return result;
    }

  }
  public async createOrUpdate(exgift:ExchangeGift):Promise<ExchangeGift>{

    console.log(exgift)

    if (exgift != null) {
      const body=exgift;
      return new Promise(resolve => {

        this.http.post(this.URLDatabase + this.endpoint, body).subscribe((miexgift: any) => {
          let result: ExchangeGift = {
            id: miexgift.id,
            dateExchange: miexgift.dateExchange,
            observations:miexgift.observations,
            delivered: miexgift.delivered,
            agency: miexgift.agency,
            gift: miexgift.gift
          }
          resolve(result);
        }, error => {
          console.log(error);
          resolve(exgift);
        });
      });
    }
  }

  public async delete(exgift:ExchangeGift):Promise<boolean>{
    return new Promise(resolve => {
      this.http.delete<ExchangeGift>(this.URLDatabase + this.endpoint, { body: exgift }).subscribe(() => {
        resolve(true);
      }, error => {
        console.log(error);
        resolve(false);
      });
    });
  }
}
