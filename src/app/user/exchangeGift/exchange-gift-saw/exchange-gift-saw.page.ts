import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExchangeGift } from 'src/app/models/ExchangeGift';

@Component({
  selector: 'app-exchange-gift-saw',
  templateUrl: './exchange-gift-saw.page.html',
  styleUrls: ['./exchange-gift-saw.page.scss'],
})
export class ExchangeGiftSawPage implements OnInit {

  @Input() exchangesaw: ExchangeGift;
  public img:string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.img=this.exchangesaw.gift.picture;
    console.log(this.img);
  }

  async ionViewWillEnter() {
    this.img = "https://res.cloudinary.com/duq0pz1vi/image/upload/v1645471738/"+this.exchangesaw.gift.picture;
  }
  close() {
    this.modalCtrl.dismiss();
  }

}
