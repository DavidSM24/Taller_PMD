import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonToggle, ModalController, PickerController, PickerOptions } from '@ionic/angular';
import { Agency } from 'src/app/models/Agency';
import { ExchangeGift } from 'src/app/models/ExchangeGift';
import { Gift } from 'src/app/models/Gift';
import { AgencyService } from 'src/app/services/agency.service';
import { ExchangeGiftService } from 'src/app/services/exchange-gift.service';
import { GiftService } from 'src/app/services/gift.service';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-exchange-gif-update',
  templateUrl: './exchange-gif-update.page.html',
  styleUrls: ['./exchange-gif-update.page.scss'],
})
export class ExchangeGifUpdatePage implements OnInit {
  @Input() exchange: ExchangeGift;
  public formEditExchange:FormGroup;
  public mygift:Gift;
  public myagency:Agency;
  public gifts: Gift[];
  public agencies: Agency[];

  @ViewChild(IonToggle) toggle: IonToggle;
  constructor(private excser: ExchangeGiftService,
    private fb: FormBuilder,
    private uts:UtilService,
    private pickerController:PickerController,
    private giftserv:GiftService,
    private ageserv:AgencyService,
    private modalCtrl: ModalController) {

      this.formEditExchange=this.fb.group({
        dateExchange: ["",Validators.required],
        observations: ["",Validators.required]
      });
    }

    ngOnInit() {
    
      try {
      this.mygift=this.exchange.gift;
      this.myagency=this.exchange.agency;
  
      this.formEditExchange = this.fb.group({
        dateExchange: [this.exchange.dateExchange, Validators.required],
        observations: [this.exchange.observations, Validators.required],
        delivered: [this.exchange.delivered, Validators.required]
      });
      } catch (error) {
        console.log(error);
      }
    }

    public async EditExgift(): Promise<void> {
      if(this.mygift!=null&&this.myagency!=null){

      let Exchangeeditado: ExchangeGift = {
        dateExchange: this.formEditExchange.get("dateExchange").value,
        observations: this.formEditExchange.get("observations").value,
        delivered: this.toggle.checked,
        agency: this.myagency,
        gift: this.mygift
      }
      Exchangeeditado = await this.excser.createOrUpdate(Exchangeeditado);
      this.modalCtrl.dismiss({
        newExchange:Exchangeeditado
      })
    }
   
  }

  async showGiftsPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'Ok',
          handler:(value:any) => {
            this.mygift=value.Regalos.value;
          }
        }
      ],
      columns:[{
        name:'Regalos',
        options:this.getGiftColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
    
  }

  getGiftColumnOptions(){
    let options = [];
    this.gifts.forEach(x => {
      options.push({text:x.name,value:x});
    });
    return options;
  }
  async ionViewWillEnter() {
    
    this.uts.presentLoading();
    this.gifts=await this.giftserv.getAll();
    this.agencies=await this.ageserv.getAll();
    
    if(this.agencies.length<=0&&this.gifts.length<=0){
      this.uts.presentToast('','danger');
    }
    this.uts.hideLoading();
    console.log(this.gifts);
    console.log(this.agencies);
  }

  async showAgenciesPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'Ok',
          handler:(value:any) => {
            this.myagency=value.Agencias.value;
          }
        }
      ],
      columns:[{
        name:'Agencias',
        options:this.getAgenciesColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getAgenciesColumnOptions(){
    let options = [];
    this.agencies.forEach(x => {
      options.push({text:x.myUser.name,value:x});
    });
    return options;
  }

}
