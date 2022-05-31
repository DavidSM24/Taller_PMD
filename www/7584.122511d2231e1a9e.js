"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7584,3022],{7584:(A,m,n)=>{n.d(m,{T:()=>T});var u=n(4762),r=n(9010),t=n(3022),i=n(865),c=n(2651),e=n(8725),g=n(1249),Z=n(6019);function _(s,p){1&s&&i._UZ(0,"ion-icon",26)}function h(s,p){1&s&&i._UZ(0,"ion-icon",27)}let T=(()=>{class s{constructor(a,o,l,d){this.modalController=a,this.formBuilder=o,this.routes=l,this.dateTimeService=d,this.validator=this.formBuilder.group({operation:["",[r.kI.required]],carPlate:["",[r.kI.required]],model:["",[r.kI.required]],brandCar:["",[r.kI.required]],clienteName:["",[r.kI.required]],nor:["",[r.kI.required]],amount:[""],asigPoints:[""],myAgency:[""],dateOrder:["",[r.kI.required]],dateRepair:[""],repaired:["",[r.kI.required]]})}ngOnInit(){this.spanishDateOrder=this.dateTimeService.formatSpanishDateString(""+this.carRepair.dateOrder),this.carRepair.dateRepair&&(this.spanishDateRepair=this.dateTimeService.formatSpanishDateString(""+this.carRepair.dateRepair)),this.formCarRepair=this.formBuilder.group({operation:[this.carRepair.operation,[r.kI.required]],carPlate:[this.carRepair.carPlate,[r.kI.required]],model:[this.carRepair.model,[r.kI.required]],brandCar:[this.carRepair.brandCar,[r.kI.required]],clientName:[this.carRepair.clienteName,[r.kI.required]],nor:[this.carRepair.nor,[r.kI.required]],amount:[this.carRepair.amount],asigPoints:[this.carRepair.asigPoints],myAgency:[this.carRepair.myAgency.myUser.name],dateOrder:[this.spanishDateOrder,[r.kI.required]],dateRepair:[this.spanishDateRepair],repaired:[this.carRepair.repaired,[r.kI.required]]})}ionViewDidEnter(){return(0,u.mG)(this,void 0,void 0,function*(){this.oldCarRepair={id:this.carRepair.id,operation:this.carRepair.operation,carPlate:this.carRepair.carPlate,model:this.carRepair.model,brandCar:this.carRepair.brandCar,clienteName:this.carRepair.clienteName,dateOrder:this.carRepair.dateOrder,nor:this.carRepair.nor,amount:this.carRepair.amount,dateRepair:this.carRepair.dateRepair,asigPoints:this.carRepair.asigPoints,repaired:this.carRepair.repaired,myAgency:this.carRepair.myAgency}})}edit(){return(0,u.mG)(this,void 0,void 0,function*(){const a=yield this.modalController.create({component:t.K,cssClass:"my-modal-class",componentProps:{carRepair:this.carRepair}});try{return yield a.present()}catch(o){}})}closeModal(){this.modalController.dismiss()}}return s.\u0275fac=function(a){return new(a||s)(i.Y36(c.IN),i.Y36(r.qu),i.Y36(e.F0),i.Y36(g.Y))},s.\u0275cmp=i.Xpm({type:s,selectors:[["app-car-repair-saw"]],inputs:{carRepair:"carRepair"},decls:85,vars:5,consts:[["color","primary"],[3,"fullscreen"],[1,"body"],[1,"ion-padding",3,"formGroup"],[1,"formulario"],[1,"ion-align-items-center"],["sizeSm","1","sizeLg","3"],["sizeSm","11","sizeLg","9"],["type","number","Disabled","","formControlName","operation",1,"customInput"],["Disabled","","type","text","formControlName","carPlate",1,"customInput"],["sizeSm","5","sizeLg","9"],["Disabled","","type","text","formControlName","model",1,"customInput"],["Disabled","","type","text","formControlName","brandCar",1,"customInput"],["Disabled","","type","text","formControlName","clientName",1,"customInput"],["Disabled","","type","number","formControlName","nor",1,"customInput"],["Disabled","","type","number","formControlName","amount",1,"customInput"],["Disabled","","type","number","formControlName","asigPoints",1,"customInput"],["Disabled","","type","text","formControlName","myAgency",1,"customInput"],["sizeSm","7","sizeLg","3"],["sizeSm","7","sizeLg","4"],["Disabled","","type","text","formControlName","dateOrder",1,"customInput"],["Disabled","","type","text","formControlName","dateRepair",1,"customInput"],["sizeSm","7","sizeLg","1.5"],["name","checkmark-circle","style","color: #39ff14; zoom: 2.0;",4,"ngIf"],["name","close-circle","style","color: red; zoom: 2.0;",4,"ngIf"],["expand","block","shape","round",1,"button",2,"margin-top","2% !important",3,"click"],["name","checkmark-circle",2,"color","#39ff14","zoom","2.0"],["name","close-circle",2,"color","red","zoom","2.0"]],template:function(a,o){1&a&&(i.TgZ(0,"ion-header"),i.TgZ(1,"ion-toolbar",0),i.TgZ(2,"ion-title"),i._uU(3),i.qZA(),i.qZA(),i.qZA(),i.TgZ(4,"ion-content",1),i.TgZ(5,"div",2),i.TgZ(6,"form",3),i.TgZ(7,"div",4),i.TgZ(8,"ion-grid"),i.TgZ(9,"ion-row",5),i.TgZ(10,"ion-col",6),i.TgZ(11,"ion-label"),i._uU(12,"Operaci\xf3n"),i.qZA(),i.qZA(),i.TgZ(13,"ion-col",7),i._UZ(14,"ion-input",8),i.qZA(),i.qZA(),i.TgZ(15,"ion-row",5),i.TgZ(16,"ion-col",6),i.TgZ(17,"ion-label"),i._uU(18,"Matr\xedcula"),i.qZA(),i.qZA(),i.TgZ(19,"ion-col",7),i._UZ(20,"ion-input",9),i.qZA(),i.qZA(),i.TgZ(21,"ion-row",5),i.TgZ(22,"ion-col",6),i.TgZ(23,"ion-label"),i._uU(24,"Modelo"),i.qZA(),i.qZA(),i.TgZ(25,"ion-col",10),i._UZ(26,"ion-input",11),i.qZA(),i.qZA(),i.TgZ(27,"ion-row",5),i.TgZ(28,"ion-col",6),i.TgZ(29,"ion-label"),i._uU(30,"Marca"),i.qZA(),i.qZA(),i.TgZ(31,"ion-col",10),i._UZ(32,"ion-input",12),i.qZA(),i.qZA(),i.TgZ(33,"ion-row",5),i.TgZ(34,"ion-col",6),i.TgZ(35,"ion-label"),i._uU(36,"Cliente"),i.qZA(),i.qZA(),i.TgZ(37,"ion-col",7),i._UZ(38,"ion-input",13),i.qZA(),i.qZA(),i.TgZ(39,"ion-row",5),i.TgZ(40,"ion-col",6),i.TgZ(41,"ion-label"),i._uU(42,"NOR"),i.qZA(),i.qZA(),i.TgZ(43,"ion-col",7),i._UZ(44,"ion-input",14),i.qZA(),i.qZA(),i.TgZ(45,"ion-row",5),i.TgZ(46,"ion-col",6),i.TgZ(47,"ion-label"),i._uU(48,"Coste"),i.qZA(),i.qZA(),i.TgZ(49,"ion-col",7),i._UZ(50,"ion-input",15),i.qZA(),i.qZA(),i.TgZ(51,"ion-row",5),i.TgZ(52,"ion-col",6),i.TgZ(53,"ion-label"),i._uU(54,"Puntos"),i.qZA(),i.qZA(),i.TgZ(55,"ion-col",7),i._UZ(56,"ion-input",16),i.qZA(),i.qZA(),i.TgZ(57,"ion-row",5),i.TgZ(58,"ion-col",6),i.TgZ(59,"ion-label"),i._uU(60,"Agencia"),i.qZA(),i.qZA(),i.TgZ(61,"ion-col",7),i._UZ(62,"ion-input",17),i.qZA(),i.qZA(),i.TgZ(63,"ion-row",5),i.TgZ(64,"ion-col",18),i.TgZ(65,"ion-label"),i._uU(66,"Fecha de alta"),i.qZA(),i.qZA(),i.TgZ(67,"ion-col",19),i._UZ(68,"ion-input",20),i.qZA(),i.qZA(),i.TgZ(69,"ion-row",5),i.TgZ(70,"ion-col",18),i.TgZ(71,"ion-label"),i._uU(72,"Fecha de reparaci\xf3n"),i.qZA(),i.qZA(),i.TgZ(73,"ion-col",19),i._UZ(74,"ion-input",21),i.qZA(),i.qZA(),i.TgZ(75,"ion-row",5),i.TgZ(76,"ion-col",18),i._uU(77," Reparado "),i.qZA(),i.TgZ(78,"ion-col",22),i.YNc(79,_,1,0,"ion-icon",23),i.YNc(80,h,1,0,"ion-icon",24),i.qZA(),i.qZA(),i.TgZ(81,"ion-row",5),i.TgZ(82,"ion-col"),i.TgZ(83,"ion-button",25),i.NdJ("click",function(){return o.closeModal()}),i._uU(84," Cancelar "),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&a&&(i.xp6(3),i.hij("Reparaci\xf3n ",o.carRepair.operation,""),i.xp6(1),i.Q6J("fullscreen",!0),i.xp6(2),i.Q6J("formGroup",o.formCarRepair),i.xp6(73),i.Q6J("ngIf",o.carRepair.repaired),i.xp6(1),i.Q6J("ngIf",!o.carRepair.repaired))},directives:[c.Gu,c.sr,c.wd,c.W2,r._Y,r.JL,r.sg,c.jY,c.Nd,c.wI,c.Q$,c.pK,c.as,r.JJ,r.u,c.j9,Z.O5,c.YG,c.gu],styles:[".body[_ngcontent-%COMP%]{background:#717499;background-size:cover;min-height:100%}.formulario[_ngcontent-%COMP%]{margin:1.5rem}.secundaryInput[_ngcontent-%COMP%]{margin-left:5%}.date[_ngcontent-%COMP%]{margin-left:20%}.button[_ngcontent-%COMP%]{--background: #22388c}"]}),s})()},3022:(A,m,n)=>{n.d(m,{K:()=>T});var u=n(4762),r=n(9010),t=n(2651),i=n(5764),c=n(6092),e=n(865),g=n(7928),Z=n(371),_=n(1249);function h(s,p){if(1&s){const a=e.EpF();e.TgZ(0,"ion-datetime",32,33),e.NdJ("ionChange",function(){e.CHM(a);const l=e.MAs(1);return e.oxw().changeDateRepair(l.value)}),e.TgZ(2,"ion-buttons",34),e.TgZ(3,"ion-button",35),e.NdJ("click",function(){return e.CHM(a),e.oxw().confirm()}),e._uU(4,"Aceptar"),e.qZA(),e.TgZ(5,"ion-button",35),e.NdJ("click",function(){return e.CHM(a),e.oxw().reset()}),e._uU(6,"Cancelar"),e.qZA(),e.qZA(),e.qZA()}if(2&s){const a=e.oxw();e.Q6J("value",a.stringDateRepair)}}let T=(()=>{class s{constructor(a,o,l,d,R){this.modalController=a,this.carRepairService=o,this.formBuilder=l,this.uts=d,this.dateTimeService=R,this.dateValue=""}ngOnInit(){this.spanishDateOrder=this.dateTimeService.formatSpanishDateString(""+this.carRepair.dateOrder),this.carRepair.dateRepair&&(this.spanishDateRepair=this.dateTimeService.formatSpanishDateString(""+this.carRepair.dateRepair),this.formatedString=this.dateTimeService.formatString(""+this.carRepair.dateRepair)),this.formCarRepair=this.formBuilder.group({operation:[this.carRepair.operation,[r.kI.required]],carPlate:[this.carRepair.carPlate,[r.kI.required]],model:[this.carRepair.model,[r.kI.required]],brandCar:[this.carRepair.brandCar,[r.kI.required]],clienteName:[this.carRepair.clienteName,[r.kI.required]],nor:[this.carRepair.nor,[r.kI.required]],amount:[this.carRepair.amount],asigPoints:[this.carRepair.asigPoints],myAgency:[this.carRepair.myAgency.myUser.name],dateOrder:[this.carRepair.dateOrder,[r.kI.required]],spanishDateOrder:[this.spanishDateOrder],dateRepair:[this.carRepair.dateRepair],repaired:[this.carRepair.repaired,[r.kI.required]]})}ionViewDidEnter(){return(0,u.mG)(this,void 0,void 0,function*(){})}editCarRepair(){return(0,u.mG)(this,void 0,void 0,function*(){yield this.uts.presentLoading();let a=!0;if(this.formCarRepair.get("asigPoints").value<1&&1==this.formCarRepair.get("repaired").value&&(a=!1,this.uts.presentToast("No se puede asignar una reparaci\xf3n como terminada a 0 puntos.","danger","ban")),a){this.newCarRepair={id:this.carRepair.id,operation:this.formCarRepair.get("operation").value,carPlate:this.carRepair.carPlate,model:this.carRepair.model,brandCar:this.carRepair.brandCar,clienteName:this.formCarRepair.get("clienteName").value,dateOrder:this.formCarRepair.get("dateOrder").value,nor:this.formCarRepair.get("nor").value,amount:this.formCarRepair.get("amount").value,dateRepair:this.formatedString,asigPoints:this.formCarRepair.get("asigPoints").value,repaired:this.formCarRepair.get("repaired").value,myAgency:this.carRepair.myAgency};try{this.newCarRepair=yield this.carRepairService.createOrUpdate(this.newCarRepair),this.newCarRepair?(this.modalController.dismiss({newCarRepair:this.newCarRepair}),this.uts.presentToast("Se ha gurdadado correctamente","success","checkmark-circle-outline")):(this.uts.presentToast("Fallo al actualizar la reparaci\xf3n. Int\xe9ntelo m\xe1s tarde.","danger","ban"),this.closeModal())}catch(o){this.uts.presentToast("Fallo al actualizar la reparaci\xf3n. Int\xe9ntelo m\xe1s tarde.","danger","ban"),console.log(o)}}this.uts.hideLoading()})}closeModal(){this.modalController.dismiss()}confirm(){this.datetime.confirm(!0)}reset(){this.datetime.cancel(!0)}formatDate(a){return(0,i.Z)((0,c.Z)(a),"yyyy-MM-dd HH:mm:SS")}changeDateRepair(a){this.spanishDateRepair=this.dateTimeService.formatSpanishDateString(a),this.stringDateRepair=this.dateTimeService.formatString(a),this.dateValue=a,this.formatedString=this.formatDate(this.dateValue)}}return s.\u0275fac=function(a){return new(a||s)(e.Y36(t.IN),e.Y36(g.K),e.Y36(r.qu),e.Y36(Z.f),e.Y36(_.Y))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-car-repair-update"]],viewQuery:function(a,o){if(1&a&&e.Gf(t.x4,5),2&a){let l;e.iGM(l=e.CRH())&&(o.datetime=l.first)}},inputs:{carRepair:"carRepair"},decls:92,vars:4,consts:[[3,"translucent"],["color","primary"],[3,"fullscreen"],[1,"body"],[1,"ion-padding",3,"formGroup"],[1,"formulario"],[1,"ion-align-items-center"],["sizeSm","2","sizeLg","2"],["sizeSm","4","sizeLg","4"],["Disabled","","type","text","formControlName","spanishDateOrder",1,"customInput"],["sizeSm","3.2","sizeLg","6"],["button","true","id","open-date-input"],["slot","end"],["trigger","open-date-input","show-backdrop","false"],["sizeSm","10","sizeLg","10"],["type","number","min","0","max","99999","inputmode","numeric","formControlName","operation",1,"customInput"],["sizeSm","11","sizeLg","10"],["Disabled","","type","text","formControlName","carPlate",1,"customInput"],["sizeSm","5","sizeLg","10"],["Disabled","","type","text","formControlName","model",1,"customInput"],["Disabled","","type","text","formControlName","brandCar",1,"customInput"],["type","text","formControlName","clienteName",1,"customInput"],["type","number","formControlName","nor",1,"customInput"],["type","number","formControlName","amount",1,"customInput"],["type","number","formControlName","asigPoints",1,"customInput"],["Disabled","","type","text","formControlName","myAgency",1,"customInput"],["sizeSm","7","sizeLg","2"],["sizeSm","7","sizeLg","4"],["lines","none"],["formControlName","repaired"],["size","6"],["expand","block","shape","round",1,"button",2,"margin-top","2% !important",3,"click"],["color","secondary",3,"value","ionChange"],["popoverDatetime",""],["slot","buttons"],["shape","round",1,"button",3,"click"]],template:function(a,o){1&a&&(e.TgZ(0,"ion-header",0),e.TgZ(1,"ion-toolbar",1),e.TgZ(2,"ion-title"),e._uU(3,"Editar Reparaci\xf3n"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(4,"ion-content",2),e.TgZ(5,"div",3),e.TgZ(6,"form",4),e.TgZ(7,"div",5),e.TgZ(8,"ion-grid"),e.TgZ(9,"ion-row",6),e.TgZ(10,"ion-col",7),e.TgZ(11,"ion-label"),e._uU(12,"Fecha de alta: "),e.qZA(),e.qZA(),e.TgZ(13,"ion-col",8),e._UZ(14,"ion-input",9),e.qZA(),e.TgZ(15,"ion-col",10),e.TgZ(16,"ion-item",11),e.TgZ(17,"ion-label"),e._uU(18,"Fecha de reparaci\xf3n:"),e.qZA(),e.TgZ(19,"ion-text",12),e._uU(20),e.qZA(),e.TgZ(21,"ion-popover",13),e.YNc(22,h,7,1,"ng-template"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"ion-row",6),e.TgZ(24,"ion-col",7),e.TgZ(25,"ion-label"),e._uU(26,"Operaci\xf3n: "),e.qZA(),e.qZA(),e.TgZ(27,"ion-col",14),e._UZ(28,"ion-input",15),e.qZA(),e.qZA(),e.TgZ(29,"ion-row",6),e.TgZ(30,"ion-col",7),e.TgZ(31,"ion-label"),e._uU(32,"Matr\xedcula: "),e.qZA(),e.qZA(),e.TgZ(33,"ion-col",16),e._UZ(34,"ion-input",17),e.qZA(),e.qZA(),e.TgZ(35,"ion-row",6),e.TgZ(36,"ion-col",7),e.TgZ(37,"ion-label"),e._uU(38,"Modelo: "),e.qZA(),e.qZA(),e.TgZ(39,"ion-col",18),e._UZ(40,"ion-input",19),e.qZA(),e.qZA(),e.TgZ(41,"ion-row",6),e.TgZ(42,"ion-col",7),e.TgZ(43,"ion-label"),e._uU(44,"Marca: "),e.qZA(),e.qZA(),e.TgZ(45,"ion-col",18),e._UZ(46,"ion-input",20),e.qZA(),e.qZA(),e.TgZ(47,"ion-row",6),e.TgZ(48,"ion-col",7),e.TgZ(49,"ion-label"),e._uU(50,"Cliente: "),e.qZA(),e.qZA(),e.TgZ(51,"ion-col",14),e._UZ(52,"ion-input",21),e.qZA(),e.qZA(),e.TgZ(53,"ion-row",6),e.TgZ(54,"ion-col",7),e.TgZ(55,"ion-label"),e._uU(56,"NOR: "),e.qZA(),e.qZA(),e.TgZ(57,"ion-col",14),e._UZ(58,"ion-input",22),e.qZA(),e.qZA(),e.TgZ(59,"ion-row",6),e.TgZ(60,"ion-col",7),e.TgZ(61,"ion-label"),e._uU(62,"Coste: "),e.qZA(),e.qZA(),e.TgZ(63,"ion-col",14),e._UZ(64,"ion-input",23),e.qZA(),e.qZA(),e.TgZ(65,"ion-row",6),e.TgZ(66,"ion-col",7),e.TgZ(67,"ion-label"),e._uU(68,"Puntos: "),e.qZA(),e.qZA(),e.TgZ(69,"ion-col",14),e._UZ(70,"ion-input",24),e.qZA(),e.qZA(),e.TgZ(71,"ion-row",6),e.TgZ(72,"ion-col",7),e.TgZ(73,"ion-label"),e._uU(74,"Agencia: "),e.qZA(),e.qZA(),e.TgZ(75,"ion-col",14),e._UZ(76,"ion-input",25),e.qZA(),e.qZA(),e.TgZ(77,"ion-row",6),e.TgZ(78,"ion-col",26),e._uU(79," Reparado: "),e.qZA(),e.TgZ(80,"ion-col",27),e.TgZ(81,"ion-item",28),e._uU(82," No"),e._UZ(83,"ion-toggle",29),e._uU(84,"Si "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(85,"ion-row",6),e.TgZ(86,"ion-col",30),e.TgZ(87,"ion-button",31),e.NdJ("click",function(){return o.closeModal()}),e._uU(88," Cancelar "),e.qZA(),e.qZA(),e.TgZ(89,"ion-col",30),e.TgZ(90,"ion-button",31),e.NdJ("click",function(){return o.editCarRepair()}),e._uU(91," Guardar "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&a&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(2),e.Q6J("formGroup",o.formCarRepair),e.xp6(14),e.Oqu(o.spanishDateRepair))},directives:[t.Gu,t.sr,t.wd,t.W2,r._Y,r.JL,r.sg,t.jY,t.Nd,t.wI,t.Q$,t.pK,t.j9,r.JJ,r.u,t.Ie,t.yW,t.d8,t.as,t.ho,t.w,t.YG,t.x4,t.QI,t.Sm],styles:[".body[_ngcontent-%COMP%]{background:#717499;background-size:cover;min-height:100%}.button[_ngcontent-%COMP%]{--background: #22388c;color:#fff}.secundaryInput[_ngcontent-%COMP%]{margin-left:5%}.date[_ngcontent-%COMP%]{margin-left:20%}.buttonDate[_ngcontent-%COMP%]{background-color:#717499}"]}),s})()}}]);