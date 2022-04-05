import { Component, ViewChild,OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-date-time-pickup',
  templateUrl: './date-time-pickup.component.html',
  styleUrls: ['./date-time-pickup.component.scss'],
})
export class DateTimePickupComponent implements OnInit {
 
  @ViewChild(IonDatetime) datetime: IonDatetime;
  @Input() type='date';
  @Input() min="2022-03-09";
  @Input() max="2050-12-31";
  @Input() value=new Date(Date.now()).toISOString();
  @Input() date_format;
  @Output() datePickerValue: EventEmitter<any>=new EventEmitter<any>();
  public dateValue = '';
  

  constructor() { }

  ngOnInit() {

  }

  confirm() {
    this.datetime.confirm(true);
  }
  
  reset() {
    this.datetime.reset();
  }

  formatDate(value: string, date_format= 'dd MMM yyyy:mm:SS') {
    return format(parseISO(value),date_format);
  }

  change(value){
    this.dateValue=this.formatDate(value, this.date_format);
    this.datePickerValue.emit(this.dateValue);
  }
}
