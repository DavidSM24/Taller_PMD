import { CarRepair } from "./CarRepair";
import { ExchangeGift } from "./ExchangeGift";
import { InsuranceCompany } from "./InsuranceCompany";
import { User } from "./User";

export interface Agency{
    id?:number,
    zipCode:number,
    address:string,
    location:string,
    phoneNumber:number,
    amount:number,
    points:number,
    pointsRedeemed:number,
    active:boolean,
    myInsuranceCompany:InsuranceCompany,
    myCarRepairs:CarRepair[],
    myExchangesGifts:ExchangeGift[],
    myUser:User
}