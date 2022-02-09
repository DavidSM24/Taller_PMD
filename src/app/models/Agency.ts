import { CarRepair } from "./CarRepair";
import { ExchangeGift } from "./ExchangeGift";
import { InsuranceCompany } from "./InsuranceCompany";
import { User } from "./User";

export interface Agency{
    key?:string,
    zipCode:number,
    address:string,
    location:string,
    phoneNumber:number,
    amount:number,
    points:number,
    pointsRedeemed:number,
    isActive:boolean,
    myInsuranceCompany:InsuranceCompany,
    myCarRepairs:CarRepair[],
    myExchangeGifts:ExchangeGift[],
    myUser:User
}