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
        
        resolve(users);
      }, error => {
        
      });
    });
  }
  public getAllPaged(element: number, page: number):Promise<ExchangeGift[]>{
    return this.getListData(this.URLDatabase + this.endpoint + "/element/" + element + "/page/" + page);
  }
  public getAll():Promise<ExchangeGift[]>{
    return this.getListData(this.URLDatabase + this.endpoint);
  }

  public getByDateFilter(date:string):Promise<ExchangeGift[]>{
    return this.getListData(this.URLDatabase + this.endpoint+ "/date/"+ date);
  }

  public getByPoints(points:string):Promise<ExchangeGift[]>{
    return this.getListData(this.URLDatabase + this.endpoint+ "/points/"+ points);
  }

  public getByAgencyUsername(auname:string):Promise<ExchangeGift[]>{
    return this.getListData(this.URLDatabase + this.endpoint+ "/auname/"+ auname);
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
        
        resolve(exchangegift);
      }, error => {
        
        
        resolve(exchangegift);
      });
    });
  }
  public getByDeliveredPaged(delivered:Boolean, element: number, page: number):Promise<ExchangeGift[]>{
    return this.getListData(this.URLDatabase + this.endpoint +"/delivered/"+ delivered + "/element/" + element + "/paged/" + page);
  }

  public getByGiftName(gname:string):Promise<ExchangeGift[]>{
    return this.getListData(this.URLDatabase + this.endpoint +"/gname/"+ gname);
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

    

    if (exgift != null) {

      const body={
        id:exgift.id,
        dateExchange:exgift.dateExchange,
        observations:exgift.observations,
        delivered:exgift.delivered,
        agency:{
          id:exgift.agency.id
        },
        gift:{
          id:exgift.gift.id
        }
      }

      return new Promise(resolve => {

        this.http.post(this.URLDatabase + this.endpoint, body).subscribe((data: any) => {
          exgift.id=data.id;
          resolve(exgift);
        }, error => {
          
          resolve(null);
        });
      });
    }
  }

  public async delete(exgift:ExchangeGift):Promise<boolean>{

    if(exgift!=null){
      const body={
        id:exgift.id
      }

      return new Promise(resolve => {
        this.http.delete<ExchangeGift>(this.URLDatabase + this.endpoint, {body}).subscribe(() => {
          resolve(true);
        }, error => {
          
          resolve(false);
        });
      });
    }


  }
}
