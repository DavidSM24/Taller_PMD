import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gift } from '../models/Gift';
import { environment } from 'src/environments/environment';
import { ExchangeGift } from '../models/ExchangeGift';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  endpoint: string = "/gifts";

  URLDatabase: string;

  constructor(public http: HttpClient) {
    this.URLDatabase = environment.herokuConfig.url;
  }

  private async getListData(endpoint: string): Promise<Gift[]> {
    let gifts: Gift[] = [];

    return new Promise(resolve => {
      this.http.get(endpoint).subscribe((data: any[]) => {

        if (data != null && data.length > 0) {

          for (let g of data) {
            const tmp: Gift = {
              id: g.id,
              name: g.name,
              points: g.points,
              picture: g.picture,
              exchangeGifts: [],
              isAvailable: g.available
            }

            for (let eg of g.exchangeGifts) {
              tmp.exchangeGifts.push(eg);
            }

            gifts.push(tmp);
          }
        }
        console.log(data);
        resolve(gifts);
      }, error => {
        console.log(error);
      });
    });
  }

  public async getAll(): Promise<Gift[]> {

    return this.getListData("http://localhost:8080" + this.endpoint);
  }

  public async getAllPaged(limit: number, offset: number): Promise<Gift[]> {
    return this.getListData("http://localhost:8080" + this.endpoint + "/element/" + limit + "/page/" + offset);
  }

  public async getById(id: number): Promise<Gift> {

    let gift: Gift = null;

    return new Promise(resolve => {
      this.http.get(/*this.URLDatabase*/"http://localhost:8080" + this.endpoint + "/id/" + id).subscribe((data: any) => {

        if (data.id) {
          const tmp: Gift = {
            id: data.id,
            name: data.name,
            points: data.points,
            picture: data.picture,
            exchangeGifts: [],
            isAvailable: data.available
          }

          for (let eg of data.exchangeGifts) {
            tmp.exchangeGifts.push(eg);
          }

          gift = tmp;
        }

        console.log(gift);

        resolve(gift);
      }, error => {
        console.log(error);
        console.log(gift);
        resolve(gift);
      });
    });
  }

  public async getByNamePaged(name: string, limit: number, offset: number): Promise<Gift[]> {
    return this.getListData("http://localhost:8080" + this.endpoint + "/name/" + name + "/element/" + limit + "/page/" + offset);
  }

  public async getByAvailablePaged(available: boolean, limit: number, offset: number): Promise<Gift[]> {
    return this.getListData("http://localhost:8080" + this.endpoint + "/available/" + available + "/element/" + limit + "/page/" + offset);
  }

  public async createOrUpdate(gift: Gift): Promise<Gift> {
    console.log(gift);
    if (gift != null) {
      const body=gift;
      return new Promise(resolve => {

        this.http.post("http://localhost:8080" + this.endpoint, body).subscribe((data: any) => {

          console.log(data);

          let result: Gift = {
            id: data.id,
            name: data.name,
            points: data.points,
            picture: data.picture,
            exchangeGifts: [],
            isAvailable: data.available

          }
          resolve(result);
        }, error => {
          console.log(error);
          resolve(gift);
        });
      });
    }

    else {
      return gift;
    }


  }

  public delete(gift: Gift): Promise<boolean> {

    return new Promise(resolve => {

      this.http.delete<Gift>("http://localhost:8080" + this.endpoint, { body:gift}).subscribe(() => {
        resolve(true);
      }, error => {
        console.log(error);
        resolve(false);
      });
    });
  }

  
}
