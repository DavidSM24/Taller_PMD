import {Agency} from "./Agency"

export interface CarRepair{
    id?:number,
    operation:number,
    carPlate:string,
    model:string,
    brandCar:string,
    clienteName:string,
    dateOrder:Date,
    nor:number,
    amount:number,
    dateRepair:Date,
    asigPoints:number,
    repaired:boolean,
    myAgency:Agency

}