import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonToggle } from '@ionic/angular';
import { Gift } from '../models/Gift';
import { GiftService } from '../services/gift.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild(IonToggle) toggle: IonToggle;

  public formGift:FormGroup;

  public img:string;
  public formTest: FormGroup;
  public file: any=null;
  private extension:string;

  constructor(
    private gs: GiftService,
    private fb: FormBuilder) { 

      this.formGift = this.fb.group({
        name: ["", Validators.required],
        points: ["",Validators.required],
      });
    }

  public test_GetAll() {
    this.gs.getAll();
  }

  public test_GetAllPaged(limit: number, offset: number) {
    this.gs.getAllPaged(limit, offset);
  }

  public test_GetById(id: number) {
    this.gs.getById(id);
  }

  public test_GetByNamePaged(name: string, limit: number, offset: number) {
    this.gs.getByNamePaged(name, limit, offset);
  }

  public test_GetByAvailablePaged(available: boolean, limit: number, offset: number) {
    this.gs.getByAvailablePaged(available, limit, offset);
  }

  public async test_Create(): Promise<void> {
    
    console.log(this.toggle.checked);
    
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
      }
    }
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
