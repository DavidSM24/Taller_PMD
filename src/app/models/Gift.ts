import { ExchangeGift } from './ExchangeGift';

export interface Gift{
    id?:number,
    name:string,
    points:number,
    available:boolean,
    picture:string, 
    exchangeGifts:ExchangeGift[]
}