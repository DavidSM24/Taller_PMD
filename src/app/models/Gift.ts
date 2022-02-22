import { ExchangeGift } from './ExchangeGift';

export interface Gift{
    id?:number,
    name:string,
    points:number,
    isAvailable:boolean,
    picture:string, 
    exchangeGifts:ExchangeGift[]
}