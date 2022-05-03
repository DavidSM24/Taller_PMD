import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Agency } from '../models/Agency';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  public added?:boolean;

  endpoint: string = "/agencies";

  URLDatabase: string;

  constructor(public http: HttpClient) {
    this.URLDatabase = environment.herokuConfig.url;
    console.log(this.added);
  }

  private async getListData(endpoint: string): Promise<Agency[]> {
    let agencies: Agency[] = [];

    return new Promise(resolve => {
      this.http.get(endpoint).subscribe((data: any[]) => {

        if (data != null && data.length > 0) {

          for (let a of data) {
            const tmp: Agency = {
              id: a.id,
              zipCode: a.zipCode,
              address: a.address,
              location: a.location,
              phoneNumber: a.phoneNumber,
              amount: a.amount,
              points: a.points,
              pointsRedeemed: a.pointsRedeemed,
              active: a.active,
              myInsuranceCompany: a.myInsuranceCompany,
              myCarRepairs: a.myCarRepairs,
              myExchangesGifts: a.myExchangesGifts,
              myUser: a.myUser
            }

            agencies.push(tmp);
          }
        }
        console.log(data);
        resolve(agencies);
      }, error => {
        console.log(error);
      });
    });
  }

  public async getAll(): Promise<Agency[]> {

    return this.getListData(this.URLDatabase + this.endpoint);
  }

  public async getAllPaged(limit: number, offset: number): Promise<Agency[]> {
    return this.getListData(this.URLDatabase + this.endpoint + "/element/" + limit + "/page/" + offset);
  }

  public async getById(id: number): Promise<Agency> {

    let agency: Agency = null;

    return new Promise(resolve => {
      this.http.get(this.URLDatabase + this.endpoint + "/id/" + id).subscribe((a: any) => {

        if (a.id) {
          const tmp: Agency = {
            id: a.id,
            zipCode: a.zipCode,
            address: a.address,
            location: a.location,
            phoneNumber: a.phoneNumber,
            amount: a.amount,
            points: a.points,
            pointsRedeemed: a.pointsRedeemed,
            active: a.active,
            myInsuranceCompany: a.myInsuranceCompany,
            myCarRepairs: a.mycarRepairs,
            myExchangesGifts: a.myExchangeGifts,
            myUser: a.myUser
          }

          agency = tmp;
        }

        console.log(agency);

        resolve(agency);
      }, error => {
        console.log(error);
        console.log(agency);
        resolve(agency);
      });
    });
  }

  public async getByUserNamePaged(username: string, limit: number, offset: number): Promise<Agency[]> {
    return this.getListData(this.URLDatabase + this.endpoint + "/username/" + username + "/element/" + limit + "/page/" + offset);
  }

  public async getByisActivePaged(active: boolean, limit: number, offset: number): Promise<Agency[]> {
    return this.getListData(this.URLDatabase + this.endpoint + "/active/" + active + "/element/" + limit + "/page/" + offset);
  }

  public async createOrUpdate(agency: Agency): Promise<Agency> {

    if (agency == null
      || agency.address == null
      || agency.address == ""
      || agency.phoneNumber == null
      || agency.zipCode == null
      || agency.myInsuranceCompany == null
      || agency.myUser == null) {

      console.log("Algún campo es nulo o no contiene caracteres.")
      return agency
    }

    else {

      console.log(agency);

      const body = agency;
      return new Promise(resolve => {

        this.http.post(this.URLDatabase + this.endpoint, body).subscribe((data: any) => {

          agency=data;

          console.log(data);
          resolve(agency);
        }, error => {
          console.log(error);
          resolve(agency);
        });
      });
    }
  }

  public delete(agency: Agency): Promise<boolean> {

    return new Promise(resolve => {

      this.http.delete<Agency>(this.URLDatabase + this.endpoint, { body: agency }).subscribe(() => {
        resolve(true);
      }, error => {
        console.log(error);
        resolve(false);
      });
    });
  }
}
