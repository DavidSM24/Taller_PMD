import { ExchangeGift } from './ExchangeGift';

export interface Gift{
    id?:number,
    name:string,
    points:number,
    isAvailable:string,
    picture:string, 
    exchangeGifts:ExchangeGift[]
}