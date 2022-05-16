import { ModalController } from '@ionic/angular';
import { Gift } from './../../../models/Gift';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gift-saw',
  templateUrl: './gift-saw.page.html',
  styleUrls: ['./gift-saw.page.scss'],
})
export class GiftSawPage implements OnInit {
  @Input() giftsaw:  Gift;
  public img:string;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.img=this.giftsaw.picture;
  }
  async ionViewWillEnter() {
    this.img = "https://res.cloudinary.com/duq0pz1vi/image/upload/v1645471738/"+this.giftsaw.picture;
  }
  close() {
    this.modalCtrl.dismiss();
  }
}
