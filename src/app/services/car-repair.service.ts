import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CarRepair } from '../models/CarRepair';

@Injectable({
  providedIn: 'root'
})
export class CarRepairService {

  public added?:boolean;

  endpoint:string="/carRepairs";

  URLDatabase:string;

  constructor(
    private http:HttpClient
  ) {
    this.URLDatabase=environment.herokuConfig.url;
   }

   /**
    * Método que carga una lista de reparaciones de coches en función de la petición
    * @param endpoint
    * @returns
    */
   private async getListData(endpoint:string):Promise<CarRepair[]>{
     let carRepairs:CarRepair[]=[];

    return new Promise(resolve=>{

      this.http.get(endpoint).subscribe((data:any[])=>{//se trae la petición

        if(data !=null && data.length>0){//comprueba que la petición se ha traido correctamente

          for(let carRepair of data){

            const tmp:CarRepair={//se instancia una reparacion

              id:carRepair.id,
              operation:carRepair.operation,
              carPlate:carRepair.carPlate,
              model:carRepair.model,
              brandCar:carRepair.brandCar,
              clienteName:carRepair.clienteName,
              dateOrder:carRepair.dateOrder,
              nor:carRepair.nor,
              amount:carRepair.amount,
              dateRepair:carRepair.dateRepair,
              asigPoints:carRepair.asigPoints,
              repaired:carRepair.repaired,
              myAgency:carRepair.myAgency
            }

            carRepairs.push(tmp);//se añade a la lista

          }
        }
        resolve(carRepairs);
      },error=>{
        console.log(error);
        //mandar una alerta
      });
    });
   }

   public async getByAgencyPaged(idAgency:number,limit:number,offset:number):Promise<CarRepair[]>{
     return this.getListData(this.URLDatabase+this.endpoint+"/agency/"+idAgency+"/elements/"+limit+"/page/"+offset);
   }

   /**
    * Metodo que devuelve una promesa de todas las reparaciones de la base de datos
    * @returns Promise<CarRepair[]> con todas las reparaciones de la base de datos
    */
   public async getAll(): Promise<CarRepair[]>{

     return this.getListData(this.URLDatabase+this.endpoint);

   }

   /**
    * Método que devuevle las reparaciones de la base de datos de forma paginada.
    * Devuelve una lista con el número de reparaciones especificadas
    * a partir del último elemento que se le indique
    * @param limit número de reparaciones que se quiera obtener
    * @param offset a partir de que reparación se empieza a contar, con ese incliudo
    * @returns Promise<CarRepair[]>
    */
   public async getAllPaged(limit:number,offset:number):Promise<CarRepair[]>{

     return this.getListData(this.URLDatabase+this.endpoint+"/elements/" + limit + "/page/" + offset);

   }

   /**
    * Método que devuelve una reparación con la id que se le ha indicado
    * @param id id de la reparación que se quiera obtener
    * @returns Promise<CarRepair> con la id introducida
    */
   public async getById(id:number):Promise<CarRepair>{

    let carRepair:CarRepair=null;

    return new Promise(resolve=>{
      this.http.get(this.URLDatabase+this.endpoint+ "/id/" + id).subscribe((a:any)=>{

        if(a.id){//comprueba que la reparación que se ha traido tiene id
          const tmp:CarRepair={
            id:a.id,
            operation:a.operation,
            carPlate:a.carPlate,
            model:a.model,
            brandCar:a.brandCar,
            clienteName:a.clienteName,
            dateOrder:a.dateOrder,
            nor:a.nor,
            amount:a.amount,
            dateRepair:a.dateRepair,
            asigPoints:a.asigPoints,
            repaired:a.repaired,
            myAgency:a.myAgency
          }

          carRepair=tmp;
        }

        resolve(carRepair);

      },error=>{
        console.log(error);
        //introducir una alerta
        resolve(carRepair);
      });

    });
   }

   //ByOperationpaged
   /**
    * Método que devuelve una lista de reparaciones en función de la operación
    * @param operation Número de la operación de la reparación
    * @param element Número de reparaciones que se quiera obtener
    * @param offset a partir de que reparación se va a devolver
    * @returns Promise<CarRepair[]>
    */

   public async getByOperationPaged(operation:number,element:number,offset:number):Promise<CarRepair[]>{

    return this.getListData(this.URLDatabase+this.endpoint+"/operation/"+operation+"/elements/"+element+"/page/"+offset);
   }

   public async getByOperationFilter(operation:string):Promise<CarRepair[]>{

    return this.getListData(this.URLDatabase+this.endpoint+"/foperation/"+operation);
   }

   //ByCarPLate

   /**
    * Método que devuelve una lista de reparaciones en función de la matrícula
    * @param carPlate Matrícula del coche que se quiere buscar
    * @param element Número de reparaciones que se quiera obtener
    * @param offset A partir de que reparación se va a devolver
    * @returns Promise<CarRepair[]>
    */
   public async getByCarPlate(carPlate:string,element:number,offset:number):Promise<CarRepair[]>{

    return this.getListData(this.URLDatabase+this.endpoint+"/carPlate/"+carPlate+"/elements/"+element+"/page/"+offset);
   }

   //ByClientName

   /**
    * Método que devuelve una lista de reparaciones en función del dueño del coche
    * @param clientName Nombre del cliente del que se quiera obtener las reparaciones
    * @param element Número de reparaciones que se quiera obtener
    * @param offset A oartir de que reparación se va a devolver
    * @returns Promise<CarRepair[]>
    */
   public async getByClientName(clientName:string,element:number,offset:number):Promise<CarRepair[]>{

    return this.getListData(this.URLDatabase+this.endpoint+"/clientName/"+clientName+"/elements/"+element+"/page/"+offset);
   }

   //ByDateOrderPaged

   /**
    * Método que devuelve una lista de reparaciones que se encuentre entre dos fechas
    * @param ini Fecha mas antigua
    * @param end Fecha mas moderna
    * @param element Número de reparaciones que se quiera obtener
    * @param offset A partir de que elemento se quiere empezar a contar
    * @returns
    */
   public async getByDateOrderPaged(ini:Date,end:Date,element:number,offset:number):Promise<CarRepair[]>{

    return this.getListData(this.URLDatabase+this.endpoint+"/ini/"+ini+"/end/"+end+"/elements/"+element+"/page/"+offset);
   }

   //ByPointsPaged

   /**
    * Método que devuelve una lista de reparaciones que tengan los puntos entre un rango determinado
    * @param min número mínimo de puntos que se quiera buscar
    * @param max número máximo de puntos que se quiera buscar
    * @param element Número de reparaciones que se quiera obtener
    * @param offset A partir de que elemento se quiere empezar a contar
    * @returns Promise<CarRepair[]>
    */
   public async getByPointsPaged(min:number,max:number,element:number,offset:number):Promise<CarRepair[]>{

    return this.getListData(this.URLDatabase+this.endpoint+"/min/"+min+"/max/"+max+"/elements/"+element+"/page/"+offset);
   }

   //ByStatedPaged

   /**
    * Método que devuelve una lista con las reparaciones en función de si están o no terminadas
    * @param repaired booleano que indica si se quiere buscar las reparaciones terminadas o no
    * @param element Número de reparaciones que se quiera obtener
    * @param offset A partir de que elemento se quiere empezar a contar
    * @returns Promise<CarRepair[]>
    */
   public async getByStatedPaged(repaired:boolean,element:number,offset:number):Promise<CarRepair[]>{

    return this.getListData(this.URLDatabase+this.endpoint+"/repaired/"+repaired+"/elements/"+element+"/page/"+offset);
   }

   //ByAgencyInfo(Location and Company name)

   /**
    * Método que devuelve una lista con las reparaciones en función de la información de su agencia,
    * más concretame, el nombre de la compañia y su localidad.
    * @param fagency palabras por las que filtrar.
    * @returns Promise<CarRepair[]>
    */
    public async getByAgencyInfoFilter(fagency:string):Promise<CarRepair[]>{

      return this.getListData(this.URLDatabase+this.endpoint+"/fagency/"+fagency);
     }

   //CreateOrUpdate

   /**
    * Método que guarda o actualiza una reparacion en la base de datos
    * @param carRepair Reparación que se quiera guardar o actualizar
    * @returns Promise<CarRepair>
    */
   public async createOrUpdate(carRepair:CarRepair):Promise<CarRepair>{
     if(carRepair!=null){
       if(carRepair.carPlate!=null
        //&&carRepair.model!=null
        //&&carRepair.brandCar!=null
       // &&carRepair.clientName!=null
        //&&carRepair.dateOrder!=null
        //&&carRepair.repaired!=null
        //&&carRepair.myAgency!=null
        ){

          let tmp={
            id:null,
            operation: carRepair.operation,
            carPlate: carRepair.carPlate,
            model: carRepair.model,
            brandCar: carRepair.brandCar,
            clienteName: carRepair.clienteName,
            dateOrder: carRepair.dateOrder,
            nor: carRepair.nor,
            amount: carRepair.amount,
            dateRepair: carRepair.dateRepair,
            asigPoints: carRepair.asigPoints,
            repaired: carRepair.repaired,
            myAgency: {
              id:carRepair.myAgency.id
            }
          }

          if(carRepair.id&&carRepair.id>0){
            tmp.id=carRepair.id
          }
          const body=tmp;
          
          return new Promise(resolve=>{
            this.http.post(this.URLDatabase+this.endpoint,body).subscribe((data:any)=>{

              carRepair.id=data.id;
              resolve(carRepair);
            },error=>{
              resolve(null);
              //meter una alerta que indique que se ha producido un error
            });

          });

        }else{
          //meter una alerta que señale que algún campo es nulo
        }

     }else{
       //meter una alerta que señale que la reparación es nula
     }
   }

   //delete

   /**
    * Método que borra una reparación de la base de datos
    * @param carRepair reparación que se quiera borrar
    * @returns Promise<boolean> boleano que indica si la reparación se ha borrado o no
    */
   public delete(carRepair:CarRepair):Promise<boolean>{

    const body={
      id:carRepair.id
    }

    return new Promise(resolve=>{

      this.http.delete<CarRepair>(this.URLDatabase+this.endpoint,{body:body}).subscribe(()=>{
        resolve(true);
      },error=>{
        resolve(false);
        //meter una alerta que señale que no se ha borrado la reparación
      });
    });
   }

}
