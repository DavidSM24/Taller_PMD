import {Agency} from "./Agency"
import { Gift } from "./Gift";
export interface ExchangeGift{
    id?:string,
    dateEchange: Date,
    observations: string,
    isDelivered: boolean,
    agency:Agency,
    gift:Gift
}