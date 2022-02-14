import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Agency } from '../models/Agency';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  endpoint: string = "/agencies";

  URLDatabase: string;

  constructor(public http: HttpClient) {
    this.URLDatabase = environment.herokuConfig.url;
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
              isActive: a.active,
              myInsuranceCompany: a.myInsuranceCompany,
              myCarRepairs: a.mycarRepairs,
              myExchangeGifts: a.myExchangeGifts,
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

    return this.getListData("http://localhost:8080" + this.endpoint);
  }

  public async getAllPaged(limit: number, offset: number): Promise<Agency[]> {
    return this.getListData("http://localhost:8080" + this.endpoint + "/element/" + limit + "/page/" + offset);
  }

  public async getById(id: number): Promise<Agency> {

    let agency: Agency = null;

    return new Promise(resolve => {
      this.http.get(/*this.URLDatabase*/"http://localhost:8080" + this.endpoint + "/id/" + id).subscribe((a: any) => {

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
            isActive: a.active,
            myInsuranceCompany: a.myInsuranceCompany,
            myCarRepairs: a.mycarRepairs,
            myExchangeGifts: a.myExchangeGifts,
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
    return this.getListData("http://localhost:8080" + this.endpoint + "/username/" + username + "/element/" + limit + "/page/" + offset);
  }

  public async getByisActivePaged(active: boolean, limit: number, offset: number): Promise<Agency[]> {
    return this.getListData("http://localhost:8080" + this.endpoint + "/active/" + active + "/element/" + limit + "/page/" + offset);
  }

  public async createOrUpdate(agency: Agency): Promise<Agency> {
    console.log(agency);
    if (agency != null) {
      const body=agency;
      return new Promise(resolve => {

        this.http.post("http://localhost:8080" + this.endpoint, body).subscribe((data: any) => {

          console.log(data);

          let result: Agency = {
            id: data.id,
            zipCode: data.zipCode,
            address: data.address,
            location: data.location,
            phoneNumber: data.phoneNumber,
            amount: data.amount,
            points: data.points,
            pointsRedeemed: data.pointsRedeemed,
            isActive: data.active,
            myInsuranceCompany: data.myInsuranceCompany,
            myCarRepairs: data.mycarRepairs,
            myExchangeGifts: data.myExchangeGifts,
            myUser: data.myUser

          }
          resolve(result);
        }, error => {
          console.log(error);
          resolve(agency);
        });
      });
    }

    else {
      return agency;
    }


  }

  public delete(agency: Agency): Promise<boolean> {

    return new Promise(resolve => {

      this.http.delete<Agency>("http://localhost:8080" + this.endpoint, { body: agency }).subscribe(() => {
        resolve(true);
      }, error => {
        console.log(error);
        resolve(false);
      });
    });
  }
}
