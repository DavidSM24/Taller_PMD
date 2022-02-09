import { ExchangeGift } from './ExchangeGift';

export interface Gift{
    key?:string,
    points:number,
    isAvailable:string,
    picture:string, 
    exchangeGifts:ExchangeGift[]
}