import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonInfiniteScroll, LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { CarRepair } from 'src/app/models/CarRepair';
import { CarRepairService } from 'src/app/services/car-repair.service';
import { UtilService } from 'src/app/services/util.service';
import { CarRepairSawPage } from '../car-repair-saw/car-repair-saw.page';
import { CarRepairUpdatePage } from '../car-repair-update/car-repair-update.page';

@Component({
  selector: 'app-car-repair-list',
  templateUrl: './car-repair-list.page.html',
  styleUrls: ['./car-repair-list.page.scss'],
})
export class CarRepairListPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;

  private n:number=0;
  public carRepairs:CarRepair[]=[];
  private searchStr="";
  private miLoading:HTMLIonLoadingElement;
  private nItems:number; //variable que almacena el número de elemetenos que caben dentro de la página

  constructor(
    private cS:CarRepairService,
    private uts:UtilService,
    private alertCtrl:AlertController,
    private modalCtrl:ModalController,
    private loading:LoadingController,
    private routes:Router,
    private pt:Platform//para saber el dispositivo

  ) {

   }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.nItems=Math.ceil(this.pt.height()/20+10);
    try {
      await this.loadCarRepair();
      this.n=this.carRepairs.length;
    } catch (error) {
      
    }
    
  }

  /**
   * Método que carga las reparaciones de la base de datos
   * se llama la primera vez que carga la página
   * @param event 
   */
  public async loadCarRepair(event?){

    let newCarRepair:CarRepair[]=[];

    if(this.carRepairs.length==0){

        if(!event){
         await this.uts.presentLoading();
        }

      this.infinite.disabled=false;

      try{
      newCarRepair=await this.cS.getAllPaged(this.nItems,0);
      this.carRepairs=this.carRepairs.concat(newCarRepair);
      if(newCarRepair.length<this.nItems){
      this.infinite.disabled=true;
  
      }
      }catch(error){
        console.log(error);
       await this.uts.presentToast("Error de carga","danger");
      }finally{
        if(event){
         
          event.target.complete();
    
        }else{
          await this.uts.hideLoading();
        }
      }
    }   
  }


  /**
   * Método que actualiza una reparación mediante un modal
   * @param carRepair Reparación que se quiera modificar
   */
  public async edit(carRepair:CarRepair){

    try {
      this.uts.presentLoading();
      const modal = await this.modalCtrl.create({
        component: CarRepairUpdatePage,
        //hoja de estilos
        cssClass: 'my-modal-class',
        //pasar datos al modal
        
        componentProps: {
          'carRepair':carRepair
          
          
        }
      });
     
      this.uts.hideLoading();
      return await modal.present();
    } catch (error) {
      this.uts.hideLoading();
    }

  }
  public async saw(carRepair:CarRepair){
    try {
      this.uts.presentLoading();
      const modal = await this.modalCtrl.create({
        component: CarRepairSawPage,
        //hoja de estilos
        cssClass: 'my-modal-class',
        //pasar datos al modal
        
        componentProps: {
          'carRepair':carRepair
          
          
        }
      });
     
      this.uts.hideLoading();
      return await modal.present();
      
    } catch (error) {
      this.uts.hideLoading();
    }

  }

  /**
   * Método que borra una reparación de la base de datos
   * @param carRepair reparación que se quiera eliminar
   */


  public async delete(carRepair:CarRepair){
    try {
    await this.uts.presentLoading();
    const result:boolean=await this.cS.delete(carRepair);//borra la reparación y guarda si se ha borrado
    let i=this.carRepairs.indexOf(carRepair,0);//se comprueba si la reparación esta en la lista
    if(result){
      if(i>-1){
        this.carRepairs.splice(i,1);//borra la reparación de la lista
      }

      this.uts.presentToast("La reparación ha sido eliminada correctamente.","success");
    }else{
      this.uts.presentToast("Error al borrar la reparación","danger");
    }
    } catch (error) {
      this.uts.presentToast("Nose ha podido borrar la reparación, intentelo más tarde","danger");
    }finally{
      try {
        await this.uts.hideLoading();
      } catch (error) {
        
      }
    }    
  }

  /**
   * Método que muestra una alerta cuando se quiere borrar una reparación
   * @param carRepair reparación que se quiere borrar
   */
  public async showDeleteMenu(carRepair:CarRepair){
    const alert=await this.alertCtrl.create({
      header:'Confirmación',
      message:'¿Desea eliminar la reparación?',
      buttons:[
        {
          text:'Eliminar',
          cssClass:'rojo',
          handler:()=>{
            this.delete(carRepair);
          }
        },
        {
          text:'Cancelar',
          cssClass:'secundary',
          role:'cancel'

        }
      ]
    });

    try {

      await alert.present();

    } catch (error) {
      console.log(error);           
    }
  }

  /**
   * Método que carga más reparaciones cuando se llega al final de la pantalla
   * @param $event 
   */
  public async infiniteLoad($event){

    let newCarRepairs:CarRepair[]=[];

    if(!this.infinite.disabled){

      try {
        newCarRepairs=await this.cS.getAllPaged(this.nItems,this.carRepairs.length);
        this.carRepairs=this.carRepairs.concat(newCarRepairs);
        if(newCarRepairs.length<30){
          this.infinite.disabled=true;
        }
        
      } catch (error) {
        console.log(error);
        
      }
    }
  }


  /**
   * Método que te redirige a la página de crear
   */
  public goCreatePage(){
    this.routes.navigateByUrl('tab-administrator/car-repair/create');
  }

  /**
   * Método que redirige a la página de actualizar reparaciones
   */
  public goUpdatePage(id:number){
    this.routes.navigateByUrl('tab-administrator/car-repair/update/'+id);
  }

  /**
   * Método que redirige a la página de ver
   */
  public goSawPage(id:number){
    this.routes.navigateByUrl('tab-administrator/car-repair/saw/'+id);

  }


  

  public onSearchChange(event) {
    this.searchStr = event.detail.value;
  }

  public async reset(event){
    this.n=0;
    this.infinite.disabled=false;
    this.carRepairs=[];
    this.loadCarRepair(event);
  }

}
