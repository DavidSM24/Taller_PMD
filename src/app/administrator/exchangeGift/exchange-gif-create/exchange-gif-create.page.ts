import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonToggle, PickerController, PickerOptions } from '@ionic/angular';
import { Agency } from 'src/app/models/Agency';
import { ExchangeGift } from 'src/app/models/ExchangeGift';
import { Gift } from 'src/app/models/Gift';
import { AgencyService } from 'src/app/services/agency.service';
import { ExchangeGiftService } from 'src/app/services/exchange-gift.service';
import { GiftService } from 'src/app/services/gift.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-exchange-gif-create',
  templateUrl: './exchange-gif-create.page.html',
  styleUrls: ['./exchange-gif-create.page.scss'],
})
export class ExchangeGifCreatePage {

  public formExchange:FormGroup;
  public mygift:Gift=null;
  public myagency:Agency;
  public gifts: Gift[];
  public agencies: Agency[];

  @ViewChild(IonToggle) toggle: IonToggle;
  constructor(private exser: ExchangeGiftService,
    private fb: FormBuilder,
    private uts:UtilService,
    private pickerController:PickerController,
    private giftserv:GiftService,
    private ageserv:AgencyService) {

      this.formExchange=this.fb.group({
        dateExchange: ["",Validators.required],
        observations: ["",Validators.required]
      });
    }
    public async CreateExgift(): Promise<void> {



      try {
        await this.uts.presentLoading();
      if(this.mygift!=null&&this.myagency!=null){

        console.log(this.myagency);

      let newExchange: ExchangeGift = {
        dateExchange: this.formExchange.get("dateExchange").value,
        observations: this.formExchange.get("observations").value,
        delivered: this.toggle.checked,
        agency: this.myagency,
        gift: this.mygift
      }

      try{
        let result=await this.exser.createOrUpdate(newExchange);

        if(!result){
          this.uts.presentToast("Error al insertar canje, compruebe los puntos de la agencia y la disponibilidad del regalo.","danger",'ban');
        }

        else{
          this.uts.presentToast("Pedido agregada correctamente","success","checkmark-circle-outline");
          this.formExchange.reset();
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

    await this.uts.presentLoading();
    this.gifts=await this.giftserv.getAll();
    this.agencies=await this.ageserv.getAll();

    if(this.agencies.length<=0&&this.gifts.length<=0){
      this.uts.presentToast('','danger','ban');
    }
    await this.uts.hideLoading();
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
          handler:(value) => {
            console.log(value.Agencias.value)
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
      options.push({text:x.myInsuranceCompany.cia_Name+" - "+x.location,value:x});
    });
    return options;
  }

}
