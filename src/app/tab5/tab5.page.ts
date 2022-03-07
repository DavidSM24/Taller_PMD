import { Component, ViewChild } from '@angular/core';
import { Agency } from '../models/Agency';
import { ExchangeGift } from '../models/ExchangeGift';
import { ExchangeGiftService } from '../services/exchange-gift.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from '../services/util.service';
import { IonToggle, PickerController, PickerOptions } from '@ionic/angular';
import { Gift } from '../models/Gift';
import { AgencyService } from '../services/agency.service';
import { GiftService } from '../services/gift.service';
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {
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
        dateEchange: ["",Validators.required],
        observations: ["",Validators.required]
      });
    }
    public async CreateUser(): Promise<void> {
      if(this.mygift!=null&&this.myagency!=null){

      
      let newExchange: ExchangeGift = {
        dateEchange: this.formExchange.get("dateEchange").value,
        observations: this.formExchange.get("observations").value,
        isDelivered: this.toggle.checked,
        agency: this.myagency,
        gift: this.mygift
      }
      
      this.uts.presentLoading();
      
      try{
        let id=await this.exser.createOrUpdate(newExchange);
        this.uts.hideLoading;
        this.uts.presentToast("Regalo agregada correctamente","success");
        this.formExchange.reset();
      }catch(err){
        
        this.uts.hideLoading;
        this.uts.presentToast("Error agregando Regalo","danger");
      }
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
      options.push({text:x.zipCode,value:x});
    });
    return options;
  }
}
