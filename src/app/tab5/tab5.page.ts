import { Component, ViewChild } from '@angular/core';
import { Agency } from '../models/Agency';
import { ExchangeGift } from '../models/ExchangeGift';
import { ExchangeGiftService } from '../services/exchange-gift.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from '../services/util.service';
import { IonToggle, PickerOptions } from '@ionic/angular';
import { Gift } from '../models/Gift';
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
  @ViewChild(IonToggle) toggle: IonToggle;
  constructor(private exser: ExchangeGiftService,
    private fb: FormBuilder,
    private uts:UtilService) {

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

  async showPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'Ok',
          handler:(value:any) => {
            this.insurance=value.Compañías.value;
          }
        }
      ],
      columns:[{
        name:'Compañías',
        options:this.getColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getColumnOptions(){
    let options = [];
    this.gifts.forEach(x => {
      options.push({text:x.name,value:x});
    });
    return options;
  }
}
