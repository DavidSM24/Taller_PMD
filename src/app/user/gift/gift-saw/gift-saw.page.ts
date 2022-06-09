import { AgencyService } from './../../../services/agency.service';
import { Agency } from './../../../models/Agency';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExchangeGiftService } from './../../../services/exchange-gift.service';
import { UtilService } from './../../../services/util.service';
import { ExchangeGift } from './../../../models/ExchangeGift';
import { AuthService } from './../../../services/auth.service';
import { ModalController } from '@ionic/angular';
import { Gift } from './../../../models/Gift';
import { Component, OnInit, Input } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-gift-saw',
  templateUrl: './gift-saw.page.html',
  styleUrls: ['./gift-saw.page.scss'],
  providers: [DatePipe]
})
export class GiftSawPage implements OnInit {
  @Input() giftsaw: Gift;
  public img: string;
  public formGift: FormGroup;
  constructor(private modalCtrl: ModalController,
    public auts: AuthService,
    private uts: UtilService,
    private exser: ExchangeGiftService,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private as: AgencyService) {
    this.formGift = this.fb.group({
      observaciones: ["", [Validators.required]]
    });

  }

  ngOnInit() {


    
    
    this.img = this.giftsaw.picture;
  }
  async ionViewWillEnter() {
    this.img = "https://res.cloudinary.com/duq0pz1vi/image/upload/v1645471738/" + this.giftsaw.picture;
  }
  close() {
    this.modalCtrl.dismiss();
  }



  public async purchase(): Promise<void> {
    let actualdate = new Date;
    let newdate
    

    newdate = this.datePipe.transform(actualdate, 'yyyy-MM-dd');

    try {
      await this.uts.presentLoading();
      if (this.giftsaw != null && this.auts.agency != null) {

        

        let newExchange: ExchangeGift = {
          dateExchange: newdate,
          observations: this.formGift.get("observaciones").value,
          delivered: false,
          agency: this.auts.agency,
          gift: this.giftsaw
        }
        

        try {
          let result = await this.exser.createOrUpdate(newExchange);

          if (!result) {
            this.uts.presentToast("Error al insertar canje, compruebe los puntos de la agencia y la disponibilidad del regalo.", "danger", 'ban');
          }

          else {
            this.uts.presentToast("Pedido agregada correctamente", "success", "checkmark-circle-outline");
            let tmp: Agency = await this.as.getById(this.auts.agency.id);

            try {
              if (!tmp) this.uts.presentToast("Ha habido un error al actualizar su agencia.", "danger", "ban");
              else this.auts.agency = tmp;

            } catch (error) {
              this.uts.presentToast("Ha habido un error al actualizar su agencia.", "danger", "ban");
              
            }
          }


        } catch (err) {


          this.uts.presentToast("Error agregando Pedido", "danger", 'ban');
        }
      }
    } catch (error) {
      await this.uts.hideLoading;
      
    }
    await this.uts.hideLoading();
    this.modalCtrl.dismiss({
      nagency: this.auts.agency
    })
  }
}