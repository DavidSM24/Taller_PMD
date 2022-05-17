import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonToggle } from '@ionic/angular';
import { Gift } from 'src/app/models/Gift';
import { GiftService } from 'src/app/services/gift.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gif-create',
  templateUrl: './gif-create.page.html',
  styleUrls: ['./gif-create.page.scss'],
})
export class GifCreatePage {

  @ViewChild(IonToggle) toggle: IonToggle;

  public formGift: FormGroup;
  public img:string;
  public formTest: FormGroup;
  public file: any=null;
  private extension:string;

  constructor(
    private gs: GiftService,
    private fb: FormBuilder,
    private uts:UtilService,
    private router:Router) {

      this.formGift = this.fb.group({
        name: ["", Validators.required],
        points: ["",Validators.required],
      });
    }

  public async create(): Promise<void> {

    await this.uts.presentLoading();

    if(this.extension){
      if(this.extension==("image/jpg")
      ||this.extension==("image/jpeg")
      ||this.extension=="image/png"){

        console.log("entro?");

        let newGift:Gift = {
          name: this.formGift.get("name").value,
          points: this.formGift.get("points").value,
          available: this.toggle.checked,
          picture: '',
          exchangeGifts: []
        }

        newGift=await this.gs.createOrUpdate(newGift,this.file);
        if(newGift.id){
          this.gs.added=true;
          console.log(this.gs.added);
          this.formGift.reset();
          this.uts.presentToast('El regalo se ha creado correctamente.','success');
        }
        else{
          this.uts.presentToast('Un error ha surgido al intentar crear el regalo.','danger');
        }
      }
    }

    await this.uts.hideLoading();
  }

  public async test_Update() {
    let toDrop: Gift[] = await this.gs.getAll();
    let last: Gift = toDrop[toDrop.length - 1];
    last.name="hola1";
    console.log(last);
    if (toDrop != null) {
      last=await this.gs.createOrUpdate(last,this.file);
      console.log(last);
      this.img="https://res.cloudinary.com/duq0pz1vi/image/upload/v1645471738/"+last.picture;
    }
  }

  public async test_Delete() {
    let toDrop: Gift[] = await this.gs.getAll();
    let last: Gift = toDrop[toDrop.length - 1];
    console.log(last);
    if (toDrop != null) {
      console.log(await this.gs.delete(last));
    }
  }

  public changeListener($event) : void {
    try {
      if($event){

        let extension:string=$event.target.files[0].type.toString();
        if(extension==("image/jpeg")
        ||extension==("image/png")){
          this.file = $event.target.files[0];
          this.extension=this.file.type;
          this.img=URL.createObjectURL(this.file);
        }
        else{
          this.file=null;
        }
      }
    } catch (error) {
      //alert
      this.file=null;
    }

    console.log(this.file.type);
  }

}
