import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ExchangeGift } from 'src/app/models/ExchangeGift';
import { ExchangeGiftService } from '../../../services/exchange-gift.service';
import { UtilService } from '../../../services/util.service';
import { AgencyService } from '../../../services/agency.service';
import { AuthService } from '../../../services/auth.service';
import { GiftService } from '../../../services/gift.service';

@Component({
  selector: 'app-exchange-gift-saw',
  templateUrl: './exchange-gift-saw.page.html',
  styleUrls: ['./exchange-gift-saw.page.scss'],
})
export class ExchangeGiftSawPage implements OnInit {

  @Input() exchangesaw: ExchangeGift;
  public img:string;

  constructor(
    private modalCtrl: ModalController,
    private exs:ExchangeGiftService,
    private uts:UtilService,
    private alerta: AlertController,
    private as:AgencyService,
    private authS:AuthService,
    private gs:GiftService) { }

  ngOnInit() {
    this.img=this.exchangesaw.gift.picture;
    
  }

  async ionViewWillEnter() {
    this.img = "https://res.cloudinary.com/duq0pz1vi/image/upload/v1645471738/"+this.exchangesaw.gift.picture;
  }
  close() {
    this.modalCtrl.dismiss();
  }

  async delete(){
    if(!this.exchangesaw.delivered){
      await this.uts.presentLoading();

      try {
        let result:boolean= await this.exs.delete(this.exchangesaw);

        if(result) {
          this.authS.agency=await this.as.getById(this.authS.agency.id);
          this.gs.added=true;
          this.uts.presentToast("Su pedido se ha cancelado correctamente. Puntos añadidos: "+this.exchangesaw.gift.points+".","success","checkmark-circle-outline");
        }

        else {
          this.uts.presentToast("Error al eliminar el pedido.","danger.");
        }

        
        await this.uts.hideLoading();

        this.modalCtrl.dismiss({
          result:result
        });

      } catch (error) {
        this.uts.presentToast("Error al eliminar el pedido.","danger.");
        await this.uts.hideLoading();
      }
    }
    else this.uts.presentToast("Error: Está intentando eliminar un pedido entregado.","danger",'ban');
  }

  public async mensagealerta(n:any){
    const alert = await this.alerta.create({
      header: 'Eliminar',
      message: '¿Desea eliminar este pedido? Esta acción no podrá deshacerse.',
      buttons: [
        {text: 'Eliminar',
        cssClass: 'rojo',
          handler: () => {
            this.delete();
          }
        },{
          text: 'Cancelar',
          cssClass: 'secondary',
          handler: (blah) => {}},

      ]
    });
   await alert.present();
  }

}
