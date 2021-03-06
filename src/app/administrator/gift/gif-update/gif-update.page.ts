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
  public errorMsg:boolean;

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
        name: [this.gift.name, [Validators.required, Validators.minLength(3),Validators.maxLength(50)]],
        points: [this.gift.points, [Validators.required,Validators.min(1),Validators.pattern("[0-9]+")]]
      });
    } catch (error) {

    }


  }
  async ionViewWillEnter() {
    this.img = "https://res.cloudinary.com/duq0pz1vi/image/upload/v1645471738/"+this.gift.picture;
  }

  public async edit(): Promise<void> {

    if(this.formGift.get('points').value>0){
      await this.uts.presentLoading();

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
        this.uts.presentToast('El regalo se ha modificado correctamente.', 'success',"checkmark-circle-outline");
      }
      else {
        this.uts.presentToast('Ha habido un error relacionado con subida de la imagen. Int??ntelo m??s tarde.', 'danger','ban');
        newGift=null;
      }

      await this.uts.hideLoading();

      if(newGift){
        this.modalCtrl.dismiss({
          newGift:newGift
        })
      }
      else this.modalCtrl.dismiss();

    }
    else this.uts.presentToast('Los puntos deben ser superiores a 0.', 'danger','ban');



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
          this.errorMsg=false;
        }
        else {
          this.file = null;
          this.errorMsg=true;
        }
      }
    } catch (error) {
      //alert
      this.file = null;
      this.errorMsg=true;
    }

    
  }

}
