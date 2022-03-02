import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { environment } from 'src/environments/environment';
import { CarRepair } from '../models/CarRepair';
import { InsuranceCompany } from '../models/InsuranceCompany';

@Injectable({
  providedIn: 'root'
})
export class InsuranceCompanyService {

  private endpoint:string="/insuranceCompany";
  private URLDataBase:string;

  constructor(
    private http:HttpClient
  ) {
    this.URLDataBase=environment.herokuConfig.url;
   }


   /**
    * Método que carga una lista de compañias de coches en función de la petición
    * @param endpoint 
    * @returns Promise<CarRepair[]>
    */
   private async getListData(endpoint:string):Promise<InsuranceCompany[]>{

    let insurancesCompany:InsuranceCompany[]=[];

    return new Promise(resolve=>{
      this.http.get(endpoint).subscribe((data:any[])=>{
        if(data!=null&&data.length>0){
          for(let insuranceCompany of data){

            const tmp:InsuranceCompany={//se instancia una compañia
              id:insuranceCompany.id,
              cia_Name:insuranceCompany.cia_Name
            }

            insurancesCompany.push(tmp);
          }
        }

        resolve(insurancesCompany);

      },error=>{
        console.log(error);
        //mandar una alerta
      });
    });
   }

   //All

   /**
    * Método que devuelve con todas las compañias de seguros de la base de datos
    * @returns Promise<InsuranceCompany[]>
    */
   public async getAll():Promise<InsuranceCompany[]>{

     return this.getListData(this.URLDataBase+this.endpoint);

   }

   //allPaged

   /**
    * Método que devuelve las compañias de seguros de la base de datos de forma paginada
    * @param limit  número de reparaciones que se quiera obtener
    * @param offset a partir de que reparación se empieza a contar
    * @returns Promise<InsuranceCompany[]>
    */
   public async getAllPaged(limit:number,offset:number):Promise<InsuranceCompany[]>{

    return this.getListData(this.URLDataBase+this.endpoint+"/elements/"+limit+"/page/"+offset);

   }

   //byCiaNAme
   /**
    * Metodo que devuelve las compañias de seguros que coincidan con  el nombre introducido
    * @param name Nombre de la compañia de seguros que se quiera buscar
    * @returns Promise<InsuranceCompany[]>
    */
   public async getByCiaName(name:string):Promise<InsuranceCompany[]>{

    return this.getListData(this.URLDataBase+this.endpoint+"/CIA_Name/"+name);
   }


   //ByNamePaged
   /**
    * Método que devuelve las compañias de seguros que coincidad con el nombre introducido de forma paginadas
    * @param name Nombre de la compañia de seguros que se quiera buscar
    * @param limit Número de elementos que se quiera devolver
    * @param offset A partir de que elemento se devuelve
    * @returns Promise<InsuranceCompany[]>
    */
   public async getByNamePaged(name:string,limit:number,offset:number):Promise<InsuranceCompany[]>{

    return this.getListData(this.URLDataBase+this.endpoint+"/CIA_Name/"+name+"/elements/"+limit+"/page/"+offset);
   }

   //ByID
   /**
    * Método que devuelva una compañia de seguros que tenga el id
    * @param id número del id de la compañia que se quiera buscar
    * @returns Promise<InsuranceCompany>
    */
   public async getById(id:number):Promise<InsuranceCompany>{

    let insuranceCompany:InsuranceCompany=null;

    return new Promise(resolve=>{
      this.http.get(this.URLDataBase+this.endpoint+"/id"+id).subscribe((data:any)=>{
        if(data.id){
          const tmp:InsuranceCompany={
            id:data.id,
            cia_Name:data.cia_Name
          }
          insuranceCompany=tmp;
          resolve(insuranceCompany);
    }
    },error=>{
      console.error(error);
      //meter una alerta
    });
      
     
    });
    
   } 


   //CreateOrUpdate
   public async createOrUpdate(insuranceCompany:InsuranceCompany):Promise<InsuranceCompany>{
     if(insuranceCompany!=null){
       if(insuranceCompany.cia_Name!=null){

         const body=insuranceCompany;

         return new Promise(resolve=>{
          this.http.post(this.URLDataBase+this.endpoint,body).subscribe((data:any)=>{

            insuranceCompany=data;
            resolve(insuranceCompany);
          },error=>{
            resolve(error);
          });
         });

       }else{//alerta por nombre nulo

       }
     }else{//alerta por compañia nula

     }
   }


   //delete
   public delete (insuranceCompany:InsuranceCompany):Promise<boolean>{
     return new Promise(resolve=>{
       this.http.delete<InsuranceCompany>(this.URLDataBase+this.endpoint,{body:insuranceCompany}).subscribe(()=>{
         resolve(true);
       },error=>{
         resolve(false);
       });
     });
   }
}
