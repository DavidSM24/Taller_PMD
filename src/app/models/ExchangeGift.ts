import {Agency} from "./Agency"
import { Gift } from "./Gift";
export interface ExchangeGift{
    id?:number,
    dateEchange: Date,
    observations: string,
    isDelivered: boolean,
    agency:Agency,
    gift:Gift
}