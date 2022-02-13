import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agency } from '../models/Agency';
import { ExchangeGift } from '../models/ExchangeGift';

@Injectable({
  providedIn: 'root'
})
export class ExchangeGiftService {

  constructor() { }

  public getAllPaged(all?):Observable<ExchangeGift[]>{
    return null;
  }
  public getAll():Observable<ExchangeGift[]>{
    return null;
  }
  public getByDeliveredPaged(delivered:Boolean):Observable<ExchangeGift[]>{
    return null;
  }
  public getByAgebcyPaged(agency:Agency):Observable<ExchangeGift[]>{
    return null;
  }
}
