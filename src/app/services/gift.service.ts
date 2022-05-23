import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gift } from '../models/Gift';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  public added:boolean=false;

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
              available: g.available
            }

            for (let eg of g.exchangeGifts) {
              tmp.exchangeGifts.push(eg);
            }

            gifts.push(tmp);
          }
        }
        resolve(gifts);
      }, error => {
        console.log(error);
      });
    });
  }

  public async getAll(): Promise<Gift[]> {

    return this.getListData(this.URLDatabase + this.endpoint);
  }

  public async getAllPaged(limit: number, offset: number): Promise<Gift[]> {
    return this.getListData(this.URLDatabase + this.endpoint + "/element/" + limit + "/page/" + offset);
  }

  public async getById(id: number): Promise<Gift> {

    let gift: Gift = null;

    return new Promise(resolve => {
      this.http.get(this.URLDatabase + this.endpoint + "/id/" + id).subscribe((data: any) => {

        if (data.id) {
          const tmp: Gift = {
            id: data.id,
            name: data.name,
            points: data.points,
            picture: data.picture,
            exchangeGifts: [],
            available: data.available
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
    return this.getListData(this.URLDatabase+ this.endpoint + "/name/" + name + "/element/" + limit + "/page/" + offset);
  }

  public async getByPoints(points:number): Promise<Gift[]> {
    return this.getListData(this.URLDatabase+ this.endpoint + "/points/" + points);
  }

  public async getByAvailablePaged(available: boolean, limit: number, offset: number): Promise<Gift[]> {
    return this.getListData(this.URLDatabase + this.endpoint + "/available/" + available + "/element/" + limit + "/page/" + offset);
  }

  public async createOrUpdate(gift: Gift, ImageFile: any): Promise<Gift> {
    console.log(gift);
    if (
      gift == null
      || gift.name == null
      || gift.name == ("")
      || ImageFile==null
    ) {
      console.log("El campo name esta nulo o no contiene caracteres.");
      return gift
    }

    else {
      const body:Gift = gift;
      return new Promise(resolve => {

        let formData = new FormData();
        formData.append('g', new Blob([JSON.stringify(gift)], {
          type: 'application/json'
        }));
        formData.append('file', ImageFile);

        this.http.post(this.URLDatabase+this.endpoint, formData).subscribe((data: any) => {

          console.log(data);

          resolve(data);
        }, error => {
          console.log(error);
          resolve(error);
        });
      });
    }
  }

  public delete(gift: Gift): Promise<boolean> {

    return new Promise(resolve => {

      this.http.delete<Gift>(this.URLDatabase + this.endpoint, { body: gift }).subscribe(() => {
        resolve(true);
      }, error => {
        console.log(error);
        resolve(false);
      });
    });
  }


}
