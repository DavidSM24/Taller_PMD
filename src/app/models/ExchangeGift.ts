import {Agency} from "./Agency"
import { Gift } from "./Gift";
export interface ExchangeGift{
    id?:string,
    dateExchange: Date,
    observations: string,
    delivered: boolean,
    agency:Agency,
    gift:Gift
}