import {Agency} from "./Agency"
import { Gift } from "./Gift";
export interface ExchangeGift{
    id?:string,
    dateEchange: Date,
    observations: string,
    delivered: boolean,
    agency:Agency,
    gift:Gift
}