import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonToggle, ModalController } from '@ionic/angular';
import { Gift } from 'src/app/models/Gift';
import { GiftService } from 'src/app/services/gift.service';
import { UtilService } from 'src/app/services/util.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gif-update',
  templateUrl: './gif-update.page.html',
  styleUrls: ['./gif-update.page.scss'],
})
export class GifUpdatePage implements OnInit {

  @ViewChild(IonToggle) toggle: IonToggle;
  @Input() gift: Gift;

  public formGift: FormGroup;
  public edited: boolean;
  public img: string;
  public formTest: FormGroup;
  public file: any = null;
  private extension: string;

  constructor(
    private modalCtrl: ModalController,
    private gs: GiftService,
    private fb: FormBuilder,
    private uts: UtilService,
    private http: HttpClient) {

    this.formGift = this.fb.group({
      name: ["", Validators.required],
      points: ["", Validators.required],
    });
  }

  async ngOnInit() {
    
    try {
      
      this.file = await this.http.get("https://res.cloudinary.com/duq0pz1vi/image/upload/v1645471738/" + this.gift.picture, { responseType: 'blob' }).subscribe((resp: any) => {
        this.file = resp;
  
      });
  
      this.formGift = this.fb.group({
        name: [this.gift.name, Validators.required],
        points: [this.gift.points, Validators.required],
      }); 
    } catch (error) {
      
    }

    
  }
  async ionViewWillEnter() {
    this.img = "https://res.cloudinary.com/duq0pz1vi/image/upload/v1645471738/"+this.gift.picture;
  }
  
  public async edit(): Promise<void> {

    this.uts.presentLoading();

    console.log("entro?");

    let newGift: Gift = {
      id:this.gift.id,
      name: this.formGift.get("name").value,
      points: this.formGift.get("points").value,
      available: this.toggle.checked,
      picture: '',
      exchangeGifts: this.gift.exchangeGifts
    }

    newGift = await this.gs.createOrUpdate(newGift, this.file);
    if (newGift.id) {
      this.formGift.reset();
      this.uts.presentToast('El regalo se ha creado correctamente.', 'success');
    }
    else {
      this.uts.presentToast('Un error ha surgido al intentar crear el regalo.', 'danger');
    }

    this.uts.hideLoading();

    this.modalCtrl.dismiss({
      newGift:newGift
    })
  }

  close() {
    this.modalCtrl.dismiss();
  }

  public changeListener($event): void {
    try {
      if ($event) {

        let extension: string = $event.target.files[0].type.toString();
        if (extension == ("image/jpeg")
          || extension == ("image/png")) {
          this.file = $event.target.files[0];
          this.extension = this.file.type;
          this.img=URL.createObjectURL(this.file);
        }
        else {
          this.file = null;
        }
      }
    } catch (error) {
      //alert
      this.file = null;
    }

    console.log(this.file.type);
  }

}
