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
  @Input() giftsaw:  Gift;
  public img:string;
  public formGift: FormGroup;
  constructor(private modalCtrl: ModalController,
    public auts:AuthService,
    private uts:UtilService,
    private exser: ExchangeGiftService,
    private fb: FormBuilder,
    private datePipe: DatePipe) {
      this.formGift = this.fb.group({
        observaciones: ["", [Validators.required]]
      });
      
     }

  ngOnInit() {
    
    
    console.log(this.giftsaw);
    console.log(this.auts.agency);
    this.img=this.giftsaw.picture;
  }
  async ionViewWillEnter() {
    this.img = "https://res.cloudinary.com/duq0pz1vi/image/upload/v1645471738/"+this.giftsaw.picture;
  }
  close() {
    this.modalCtrl.dismiss();
  }



  public async purchase(): Promise<void> {
    let actualdate=new Date;
    let newdate
    console.log(actualdate);
    
    newdate=this.datePipe.transform(actualdate,'yyyy-MM-dd');
    
    try {
      await this.uts.presentLoading();
    if(this.giftsaw!=null&&this.auts.agency!=null){

      console.log(this.auts.agency);

      let newExchange: ExchangeGift = {
        dateExchange: newdate,
        observations: this.formGift.get("observaciones").value,
        delivered: false,
        agency: this.auts.agency,
        gift: this.giftsaw
      }
      console.log(newExchange);
      
    try{
      let result=await this.exser.createOrUpdate(newExchange);

      if(!result){
        this.uts.presentToast("Error al insertar canje, compruebe los puntos de la agencia y la disponibilidad del regalo.","danger",'ban');
      }

      else{
        this.uts.presentToast("Pedido agregada correctamente","success","checkmark-circle-outline");
      }


    }catch(err){


      this.uts.presentToast("Error agregando Pedido","danger",'ban');
    }
  }
 }catch(error){
    await this.uts.hideLoading;
  console.log(error);
  }
  await this.uts.hideLoading();
  this.modalCtrl.dismiss();
}
}
