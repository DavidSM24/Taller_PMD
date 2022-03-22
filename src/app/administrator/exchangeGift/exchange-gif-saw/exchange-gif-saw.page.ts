import { Component, Input, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExchangeGift } from 'src/app/models/ExchangeGift';
@Component({
  selector: 'app-exchange-gif-saw',
  templateUrl: './exchange-gif-saw.page.html',
  styleUrls: ['./exchange-gif-saw.page.scss'],
})
export class ExchangeGifSawPage implements OnInit {
  @Input() exchangesaw: ExchangeGift;
  public img:string;
  constructor(private modalCtrl: ModalController) {
     
    }

  ngOnInit() {
    console.log(this.exchangesaw);
    this.img=this.exchangesaw.gift.picture;
    console.log(this.img);
  }
  close() {
    this.modalCtrl.dismiss();
  }
}
