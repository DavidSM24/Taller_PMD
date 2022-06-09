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
    
  }

  public async getData(endpoint:string): Promise<Agency> {

    let agency: Agency = null;

    return new Promise(resolve => {
      this.http.get(endpoint).subscribe((a: any) => {

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

        

        resolve(agency);
      }, error => {
        
        
        resolve(agency);
      });
    });
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
        
        resolve(agencies);
      }, error => {
        
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
    return this.getData(this.URLDatabase + this.endpoint + "/id/"+id);
  }

  public async getByUsercode(usercode: number): Promise<Agency> {
    //return await this.getById(94);
    return this.getData(this.URLDatabase + this.endpoint + "/usercode/"+usercode);
  }

  public async getByLocation(location:string): Promise<Agency[]> {
    return this.getListData(this.URLDatabase + this.endpoint + "/location/"+location);
  }

  public async getByAddress(address:string): Promise<Agency[]> {
    return this.getListData(this.URLDatabase + this.endpoint + "/address/"+address);
  }

  public async getByZipcode(zip:number): Promise<Agency[]> {
    return this.getListData(this.URLDatabase + this.endpoint + "/zipcode/"+zip);
  }

  public async getByPoints(points:number): Promise<Agency[]> {
    return this.getListData(this.URLDatabase + this.endpoint + "/points/"+points);
  }

  public async getByUserNamePaged(username: string, limit: number, offset: number): Promise<Agency[]> {
    return this.getListData(this.URLDatabase + this.endpoint + "/username/" + username + "/element/" + limit + "/page/" + offset);
  }

  public async getByisActivePaged(active: boolean, limit: number, offset: number): Promise<Agency[]> {
    return this.getListData(this.URLDatabase + this.endpoint + "/active/" + active + "/element/" + limit + "/page/" + offset);
  }

  public async getByCompany(company:string): Promise<Agency[]> {
    return this.getListData(this.URLDatabase + this.endpoint + "/company/" + company);
  }

  public async createOrUpdate(agency: Agency): Promise<Agency> {

    if (agency == null
      || agency.address == null
      || agency.address == ""
      || agency.phoneNumber == null
      || agency.zipCode == null
      || agency.myInsuranceCompany == null
      || agency.myUser == null) {

      
      return agency
    }

    else {

      

      const body = agency;
      return new Promise(resolve => {

        this.http.post(this.URLDatabase + this.endpoint, body).subscribe((data: any) => {

          agency=data;

          
          resolve(agency);
        }, error => {
          
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
        
        resolve(false);
      });
    });
  }
}
