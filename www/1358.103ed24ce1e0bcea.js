"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1358],{1358:(R,g,n)=>{n.r(g),n.d(g,{CarRepairUpdatePageModule:()=>Z});var m=n(6019),r=n(9010),a=n(2651),u=n(8725),_=n(5744),e=n(865);const f=[{path:"",component:_.K}];let h=(()=>{class c{}return c.\u0275fac=function(l){return new(l||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[[u.Bz.forChild(f)],u.Bz]}),c})(),Z=(()=>{class c{}return c.\u0275fac=function(l){return new(l||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[[m.ez,r.u5,a.Pc,h,r.u5,r.UX]]}),c})()},5744:(R,g,n)=>{n.d(g,{K:()=>U});var m=n(4762),r=n(9010),a=n(2651),u=n(5764),_=n(6092),e=n(865),f=n(7928),h=n(371),Z=n(1249),c=n(6019);function d(o,p){if(1&o){const t=e.EpF();e.TgZ(0,"ion-datetime",26,27),e.NdJ("ionChange",function(){e.CHM(t);const s=e.MAs(1);return e.oxw().changeDateRepair(s.value)}),e.TgZ(2,"ion-buttons",28),e.TgZ(3,"ion-button",29),e.NdJ("click",function(){return e.CHM(t),e.oxw().confirm()}),e._uU(4,"Aceptar"),e.qZA(),e.TgZ(5,"ion-button",29),e.NdJ("click",function(){return e.CHM(t),e.oxw().reset()}),e._uU(6,"Cancelar"),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("value",t.stringDateOrder)}}function l(o,p){1&o&&(e.TgZ(0,"span",30),e._uU(1," *Debe rellenar este campo. Introduzca entre 4 y 10 caracteres. "),e.qZA())}function T(o,p){1&o&&(e.TgZ(0,"span",30),e._uU(1," *Debe rellenar este campo. Introduzca entre 2 y 50 caracteres. "),e.qZA())}function A(o,p){1&o&&(e.TgZ(0,"span",30),e._uU(1," *Debe rellenar este campo. Introduzca entre 2 y 50 caracteres. "),e.qZA())}function P(o,p){1&o&&(e.TgZ(0,"span",30),e._uU(1," *Debe rellenar este campo. Introduzca entre 2 y 50 caracteres. "),e.qZA())}function v(o,p){1&o&&e._UZ(0,"ion-icon",31)}let U=(()=>{class o{constructor(t,i,s,C,b){this.modalController=t,this.carRepairService=i,this.formBuilder=s,this.uts=C,this.dateTimeService=b,this.dateValue=""}ngOnInit(){this.carRepair.dateOrder&&(this.spanishDateOrder=this.dateTimeService.formatSpanishDateString(""+this.carRepair.dateOrder),this.formatedString=this.dateTimeService.formatString(""+this.carRepair.dateOrder)),this.carRepair.dateRepair&&(this.spanishDateRepair=this.dateTimeService.formatSpanishDateString(""+this.carRepair.dateRepair)),this.formCarRepair=this.formBuilder.group({carPlate:[this.carRepair.carPlate.toUpperCase(),[r.kI.required,r.kI.minLength(4),r.kI.maxLength(10)]],model:[this.carRepair.model,[r.kI.required,r.kI.minLength(2),r.kI.maxLength(50)]],brandCar:[this.carRepair.brandCar,[r.kI.required,r.kI.minLength(2),r.kI.maxLength(50)]],clienteName:[this.carRepair.clienteName,[r.kI.required,r.kI.minLength(2),r.kI.maxLength(50)]],dateOrder:[this.carRepair.dateOrder,[r.kI.required]],spanishDateRepair:[this.spanishDateRepair]})}editCarRepair(){return(0,m.mG)(this,void 0,void 0,function*(){this.newCarRepair={id:this.carRepair.id,operation:this.carRepair.operation,carPlate:this.formCarRepair.get("carPlate").value,model:this.formCarRepair.get("model").value,brandCar:this.formCarRepair.get("brandCar").value,clienteName:this.formCarRepair.get("clienteName").value,dateOrder:this.formatedString,nor:this.carRepair.nor,amount:this.carRepair.amount,dateRepair:this.carRepair.dateRepair,asigPoints:this.carRepair.asigPoints,repaired:this.carRepair.repaired,myAgency:this.carRepair.myAgency};try{this.newCarRepair=yield this.carRepairService.createOrUpdate(this.newCarRepair),yield this.uts.presentToast("Reparaci\xf3n modificada correctamente.","success","checkmark-circle-outline"),this.modalController.dismiss({newCarRepair:this.newCarRepair})}catch(t){this.uts.presentToast("Fallo al guradar","danger","ban")}})}closeModal(){this.modalController.dismiss()}confirm(){this.datetime.confirm(!0)}reset(){this.datetime.cancel(!0)}changeDateRepair(t){this.spanishDateOrder=this.dateTimeService.formatSpanishDateString(t),this.stringDateOrder=this.dateTimeService.formatString(t),this.dateValue=t,this.formatedString=this.formatDate(this.dateValue)}formatDate(t){return(0,u.Z)((0,_.Z)(t),"yyyy-MM-dd HH:mm:SS")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.IN),e.Y36(f.K),e.Y36(r.qu),e.Y36(h.f),e.Y36(Z.Y))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-car-repair-update"]],viewQuery:function(t,i){if(1&t&&e.Gf(a.x4,5),2&t){let s;e.iGM(s=e.CRH())&&(i.datetime=s.first)}},inputs:{carRepair:"carRepair"},decls:57,vars:10,consts:[[3,"translucent"],["color","medium"],[3,"fullscreen"],[1,"body"],[1,"ion-padding",3,"formGroup"],[1,"formulario"],[1,"ion-align-items-center",2,"margin-left","-2% !important"],["button","true","id","open-date-input"],["trigger","open-date-input","show-backdrop","false"],[1,"ion-align-items-center"],["sizeSm","2","sizeLg","2"],["sizeSm","11","sizeLg","10"],["type","text","formControlName","carPlate","required","true",1,"customInput",2,"text-transform","uppercase"],["class","invalid",4,"ngIf"],["sizeSm","5","sizeLg","10"],["type","text","formControlName","model","required","true",1,"customInput"],["type","text","formControlName","brandCar","required","true",1,"customInput"],["sizeSm","10","sizeLg","10"],["type","text","formControlName","clienteName","required","true",1,"customInput"],["sizeSm","7","sizeLg","2"],["sizeSm","7","sizeLg","4"],["title","Sin Reparar. Espere asignaci\xf3n de administradores."],["name","construct","style","pointer-events: none;zoom:1.7;color: red;",4,"ngIf"],["size","6"],["expand","block","shape","round",1,"button",2,"margin-top","2% !important",3,"disabled","click"],["expand","block","shape","round",1,"button2",2,"margin-top","2% !important",3,"click"],["color","secondary",3,"value","ionChange"],["popoverDatetime",""],["slot","buttons"],["shape","round",1,"button",3,"click"],[1,"invalid"],["name","construct",2,"pointer-events","none","zoom","1.7","color","red"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-header",0),e.TgZ(1,"ion-toolbar",1),e.TgZ(2,"ion-title"),e._uU(3,"Editar Reparaci\xf3n"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(4,"ion-content",2),e.TgZ(5,"div",3),e.TgZ(6,"form",4),e.TgZ(7,"div",5),e.TgZ(8,"ion-grid",1),e.TgZ(9,"ion-row",6),e.TgZ(10,"ion-col"),e.TgZ(11,"ion-item",7),e.TgZ(12,"ion-text"),e._uU(13),e.qZA(),e.TgZ(14,"ion-popover",8),e.YNc(15,d,7,1,"ng-template"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"ion-row",9),e.TgZ(17,"ion-col",10),e.TgZ(18,"ion-label"),e._uU(19,"Matr\xedcula"),e.qZA(),e.qZA(),e.TgZ(20,"ion-col",11),e._UZ(21,"ion-input",12),e.YNc(22,l,2,0,"span",13),e.qZA(),e.qZA(),e.TgZ(23,"ion-row",9),e.TgZ(24,"ion-col",10),e.TgZ(25,"ion-label"),e._uU(26,"Modelo"),e.qZA(),e.qZA(),e.TgZ(27,"ion-col",14),e._UZ(28,"ion-input",15),e.YNc(29,T,2,0,"span",13),e.qZA(),e.qZA(),e.TgZ(30,"ion-row",9),e.TgZ(31,"ion-col",10),e.TgZ(32,"ion-label"),e._uU(33,"Marca"),e.qZA(),e.qZA(),e.TgZ(34,"ion-col",14),e._UZ(35,"ion-input",16),e.YNc(36,A,2,0,"span",13),e.qZA(),e.qZA(),e.TgZ(37,"ion-row",9),e.TgZ(38,"ion-col",10),e.TgZ(39,"ion-label"),e._uU(40,"Cliente"),e.qZA(),e.qZA(),e.TgZ(41,"ion-col",17),e._UZ(42,"ion-input",18),e.YNc(43,P,2,0,"span",13),e.qZA(),e.qZA(),e.TgZ(44,"ion-row",9),e.TgZ(45,"ion-col",19),e._uU(46," Reparado "),e.qZA(),e.TgZ(47,"ion-col",20),e.TgZ(48,"div",21),e.YNc(49,v,1,0,"ion-icon",22),e.qZA(),e.qZA(),e.qZA(),e.TgZ(50,"ion-row",9),e.TgZ(51,"ion-col",23),e.TgZ(52,"ion-button",24),e.NdJ("click",function(){return i.editCarRepair()}),e._uU(53," Guardar "),e.qZA(),e.qZA(),e.TgZ(54,"ion-col",23),e.TgZ(55,"ion-button",25),e.NdJ("click",function(){return i.closeModal()}),e._uU(56," Cancelar "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(2),e.Q6J("formGroup",i.formCarRepair),e.xp6(7),e.hij("Fecha de Alta: ",i.spanishDateOrder,""),e.xp6(9),e.Q6J("ngIf",i.formCarRepair.get("carPlate").invalid&&i.formCarRepair.get("carPlate").touched),e.xp6(7),e.Q6J("ngIf",i.formCarRepair.get("model").invalid&&i.formCarRepair.get("model").touched),e.xp6(7),e.Q6J("ngIf",i.formCarRepair.get("brandCar").invalid&&i.formCarRepair.get("brandCar").touched),e.xp6(7),e.Q6J("ngIf",i.formCarRepair.get("clienteName").invalid&&i.formCarRepair.get("clienteName").touched),e.xp6(6),e.Q6J("ngIf",!i.carRepair.repaired),e.xp6(3),e.Q6J("disabled",i.formCarRepair.invalid))},directives:[a.Gu,a.sr,a.wd,a.W2,r._Y,r.JL,r.sg,a.jY,a.Nd,a.wI,a.Ie,a.yW,a.d8,a.Q$,a.pK,a.j9,r.JJ,r.u,r.Q7,c.O5,a.YG,a.x4,a.QI,a.Sm,a.gu],styles:['.body[_ngcontent-%COMP%]{background:#d0e5f0!important;background-size:cover;min-height:100%}.formulario[_ngcontent-%COMP%]{margin-top:1.5%;padding:2%;border-top:2px double gray;border:1px solid;border-color:"medium";border-radius:2.5rem;background-color:#fff;margin-bottom:4%}.button[_ngcontent-%COMP%]{--background: #4083cc;color:#fff}.button2[_ngcontent-%COMP%]{--background: #ff8282;color:#fff}.customInput[_ngcontent-%COMP%]{border:1px solid gray;border-color:"primary";border-radius:2.5rem}.secundaryInput[_ngcontent-%COMP%]{margin-left:5%}.date[_ngcontent-%COMP%]{margin-left:20%}.buttonDate[_ngcontent-%COMP%]{background-color:#717499}ion-input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-left:5px solid #a94442;border-right:5px solid #a94442}ion-input.ng-valid.ng-dirty[_ngcontent-%COMP%]{border-left:5px solid #42A948;border-right:5px solid #42A948}select.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-left:5px solid #a94442;border-right:5px solid #a94442}select.ng-valid.ng-dirty[_ngcontent-%COMP%]{border-left:5px solid #42A948;border-right:5px solid #42A948}']}),o})()}}]);