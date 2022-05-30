import { Injectable } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class DateTimeServiceService {

  constructor() { }

/**
 * Método que establece la fecha en formato de España
 * @param dateTime
 * @returns Fecha con formato dd-MM-aaaa HH:mm:ss
 */
formatSpanishDateString(dateTime:string){
  let date=format(parseISO(dateTime), 'dd-MM-yyyy');

  let time=format(parseISO(dateTime), 'HH:mm:ss');
 return dateTime=date.concat(" ".concat(time));
}

/**
 * Metodo que formatea la fecha para que sea legible por ion-dateTime
 * @param dateTime
 * @returns Fecha con formato yyyy-MM-ddTHH:mm:ss
 */
formatString(dateTime:string):string{


  let date=format(parseISO(dateTime), 'yyyy-MM-dd');

  let time=format(parseISO(dateTime), 'HH:mm:ss');
 return dateTime=date.concat("T".concat(time));


}

public validateDates(orderDate:string,repairDate:string):boolean{
  if(repairDate<orderDate) return false;
  else return true;
}

}
