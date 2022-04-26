import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonInfiniteScroll, LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { CarRepair } from 'src/app/models/CarRepair';
import { AuthService } from 'src/app/services/auth.service';
import { CarRepairService } from 'src/app/services/car-repair.service';
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
   //variable que muestra las reparaciones en pantalla
  public carRepairs:CarRepair[]=[];
  //variable que guarda las reparaciones mientras se muestran otras en pantalla
  public carRepairsStore:CarRepair[]=[];
  //variable que guarda las letras de la barra de busqueda
  private searchStr:string="";
  private miLoading:HTMLIonLoadingElement;
  private nItems:number; //variable que almacena el número de elemetenos que caben dentro de la página

  constructor(
    private cS:CarRepairService,
    private toast:ToastController,
    private alertCtrl:AlertController,
    private modalCtrl:ModalController,
    private loading:LoadingController,
    private routes:Router,
    private pt:Platform,//para saber el dispositivo
    private authS:AuthService
  ) { }

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

  //Métodos de los servicios

  /**
   * Método que carga las reparaciones de la base de datos
   * se llama la primera vez que carga la página
   * @param event 
   */
   public async loadCarRepair(event?){

    let newCarRepair:CarRepair[]=[];

    if(this.carRepairs.length==0){

        if(!event){
          this.presentLoading();
        }

      this.infinite.disabled=false;

      try{
      newCarRepair=await this.cS.getAllPaged(this.nItems,0);
      this.carRepairs=this.carRepairs.concat(newCarRepair);
      this.storageCarRepairs();
      if(newCarRepair.length<this.nItems){
      this.infinite.disabled=true;
        
      }
      }catch(error){
        console.log(error);
        this.presentToast("Error de carga","danger");
      }finally{
        if(event){
         
          event.target.complete();
    
        }else{
          this.loading.dismiss();
        }
      }
    }   
  }

   /**
   * Método que actualiza una reparación mediante un modal
   * @param carRepair Reparación que se quiera modificar
   */
    public async edit(carRepair:CarRepair){

      const modal = await this.modalCtrl.create({
        component: CarRepairUpdatePage,
        //hoja de estilos
        cssClass: 'fullscreen',
        //pasar datos al modal
        
        componentProps: {
          'carRepair':carRepair
          
          
        }
      });
       
      await modal.present();
  
      const resp=await modal.onDidDismiss();
      if(resp.data !=null){
        let i:number=this.carRepairs.indexOf(carRepair);
        this.carRepairs[i]=resp.data.newCarRepair;
      }
  
    }  

  /**
   * Método que borra una reparación de la base de datos
   * @param carRepair reparación que se quiera eliminar
   */
     public async delete(carRepair:CarRepair){
      try {
      await this.presentLoading();
      const result:boolean=await this.cS.delete(carRepair);//borra la reparación y guarda si se ha borrado
      let i=this.carRepairs.indexOf(carRepair,0);//se comprueba si la reparación esta en la lista
      if(result){
        if(i>-1){
          this.carRepairs.splice(i,1);//borra la reparación de la lista
        }
  
        this.presentToast("La reparación ha sido eliminada correctamente.","success");
      }else{
        this.presentToast("Error al borrar la reparación","danger");
      }
      } catch (error) {
        this.presentToast("Nose ha podido borrar la reparación, intentelo más tarde","danger");
      }finally{
        try {
          await this.miLoading.dismiss();
        } catch (error) {
          
        }
      }    
    }

  //Métodos que cargan los modales

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
     * Método que carga el modal de los datos de una reparación
     * @param carRepair 
     * @returns 
     */
      public async saw(carRepair:CarRepair){

        const modal = await this.modalCtrl.create({
          component: CarRepairSawPage,
          //hoja de estilos
          cssClass: 'my-modal-class',
          //pasar datos al modal
          
          componentProps: {
            'carRepair':carRepair        
          }
        });   
      
        return await modal.present();
    
      }
   
  //Métodos de filtrado

  /**
   * Método que muestra en la vista los coches que correspondan con el estado seleccionado el Ion-Select
   * @param event 
   */
   public async setCarByStatus(event?){
    
    let carR:CarRepair[]=[]
    const value:string=event.detail.value;
     

    if("false".match(value)){
      this.carRepairsStore.forEach(repair=>{
        if(!repair.repaired){
          carR.push(repair);
        }
      });
      this.carRepairs=carR;

    } else if("true".match(value)){
      this.carRepairsStore.forEach(repair=>{
        if(repair.repaired){
          carR.push(repair);
        }
      });
      console.log(carR);
      this.carRepairs=carR;
    }else if("all".match(value)) {
      this.reset();
    }
  }
   /**
   * Método que se activa cuando se escribe algo en la barra de búsqueda
   * Para buscar reparaciones por matrícula, dueño del coche, operación 
   * y nombre de la agencia
   * @param event 
   */
    public async onSearchChange(event) {
      this.searchStr = event.detail.value;
      console.log(this.searchStr);
      let carR:CarRepair[]=[]
      const value:string=event.detail.value;
      const length=this.searchStr.length;
      //Comprueba que hay algo introducido
      if(length>1){
        this.carRepairsStore.forEach(repair=>{
          //Compara si lo introducido en la barra de busqueda coincide con
          //cualquiera de los siguientes campos:
          //matrícula, nombre del dueño del coche, operación o nombre de la agencia
          if(repair.brandCar.includes(value)||repair.clienteName.includes(value)
          ||repair.operation.toLocaleString().includes(value)
          ||repair.myAgency.myUser.name.includes(value)){
            carR.push(repair);
          }
          });
          this.carRepairs=carR;
      }else if(length<1){
        try {
          await this.reset();
          
        } catch (error) {
          
        }
      } 
    }

   /**
   * Método que reinicia la lista de reparaciones
   * @param event 
   */
    public async reset(event?){
      this.n=0;
      this.infinite.disabled=false;
      this.carRepairs=[];
      this.loadCarRepair(event);
      
    }

  /**
   * Método que guarda las reparaciones en un almacen
   */
   public storageCarRepairs(){
    this.carRepairsStore=this.carRepairs;
  }

  /**
   * Método que permite al usuario cerrar la sesión
   */
  public logout(){
    this.authS.logout();
  }  


  //Métodos auxiliares

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

   

   

  //Metodo que muestra el loading
  public async presentLoading() {
    this.miLoading = await this.loading.create({
      message: ''
    });
    await this.miLoading.present();
  }

  //Método que muestra un toast
  public async presentToast(msg: string, clr: string) {
    const miToast = await this.toast.create({
      message: msg,
      duration: 2000,
      color: clr
    });
    miToast.present();
  }
}
