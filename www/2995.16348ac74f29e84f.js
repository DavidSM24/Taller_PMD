"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2995],{2995:(C,l,s)=>{s.r(l),s.d(l,{Tab5PageModule:()=>y});var u=s(6019),a=s(9010),i=s(2651),d=s(8725),g=s(4762),t=s(865),f=s(922),m=s(371),h=s(4483),p=s(9574);function b(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",18),t.NdJ("click",function(){return t.CHM(e),t.oxw().showAgenciesPicker()}),t._uU(1," Seleccionar "),t.qZA()}}function Z(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",18),t.NdJ("click",function(){return t.CHM(e),t.oxw().showAgenciesPicker()}),t._uU(1),t.qZA()}if(2&o){const e=t.oxw();t.xp6(1),t.hij(" ",e.myagency.zipCode," ")}}function T(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",18),t.NdJ("click",function(){return t.CHM(e),t.oxw().showGiftsPicker()}),t._uU(1," Seleccionar "),t.qZA()}}function _(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",18),t.NdJ("click",function(){return t.CHM(e),t.oxw().showGiftsPicker()}),t._uU(1),t.qZA()}if(2&o){const e=t.oxw();t.xp6(1),t.hij(" ",e.mygift.name," ")}}const x=[{path:"",component:(()=>{class o{constructor(e,n,r,v,P,k){this.exser=e,this.fb=n,this.uts=r,this.pickerController=v,this.giftserv=P,this.ageserv=k,this.mygift=null,this.formExchange=this.fb.group({dateEchange:["",a.kI.required],observations:["",a.kI.required]})}CreateExgift(){return(0,g.mG)(this,void 0,void 0,function*(){if(null!=this.mygift&&null!=this.myagency){let e={dateExchange:this.formExchange.get("dateEchange").value,observations:this.formExchange.get("observations").value,delivered:this.toggle.checked,agency:this.myagency,gift:this.mygift};this.uts.presentLoading();try{yield this.exser.createOrUpdate(e),this.uts.presentToast("Regalo agregada correctamente","success"),this.formExchange.reset()}catch(n){this.uts.presentToast("Error agregando Regalo","danger")}}})}showGiftsPicker(){return(0,g.mG)(this,void 0,void 0,function*(){let e={buttons:[{text:"Cancel",role:"cancel"},{text:"Ok",handler:r=>{this.mygift=r.Regalos.value}}],columns:[{name:"Regalos",options:this.getGiftColumnOptions()}]};(yield this.pickerController.create(e)).present()})}getGiftColumnOptions(){let e=[];return this.gifts.forEach(n=>{e.push({text:n.name,value:n})}),e}ionViewWillEnter(){return(0,g.mG)(this,void 0,void 0,function*(){this.uts.presentLoading(),this.gifts=yield this.giftserv.getAll(),this.agencies=yield this.ageserv.getAll(),this.agencies.length<=0&&this.gifts.length<=0&&this.uts.presentToast("","danger"),this.uts.hideLoading(),console.log(this.gifts),console.log(this.agencies)})}showAgenciesPicker(){return(0,g.mG)(this,void 0,void 0,function*(){let e={buttons:[{text:"Cancel",role:"cancel"},{text:"Ok",handler:r=>{this.myagency=r.Agencias.value}}],columns:[{name:"Agencias",options:this.getAgenciesColumnOptions()}]};(yield this.pickerController.create(e)).present()})}getAgenciesColumnOptions(){let e=[];return this.agencies.forEach(n=>{e.push({text:n.zipCode,value:n})}),e}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.y),t.Y36(a.qu),t.Y36(m.f),t.Y36(i.up),t.Y36(h.R),t.Y36(p.Y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-tab5"]],viewQuery:function(e,n){if(1&e&&t.Gf(i.ho,5),2&e){let r;t.iGM(r=t.CRH())&&(n.toggle=r.first)}},decls:47,vars:7,consts:[[3,"translucent"],["color","primary"],[3,"fullscreen"],[1,"body"],[1,"ion-padding",3,"formGroup"],[1,"formulario"],[1,"ion-align-items-center"],["sizeSm","1","sizeLg","1"],["sizeSm","11","sizeLg","11"],["formControlName","dateEchange","type","date",1,"customInput"],["formControlName","observations","type","text",1,"customInput"],["sizeSm","9","sizeLg","1"],["sizeSm","3","sizeLg","11  "],["lines","none"],["sizeSm","2","sizeLg","2"],["expand","block","shape","round",3,"click",4,"ngIf"],["size","12"],["expand","block","shape","round",1,"button",2,"margin-top","2% !important",3,"click"],["expand","block","shape","round",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header",0),t.TgZ(1,"ion-toolbar",1),t.TgZ(2,"ion-title"),t._uU(3," Prueba Exchanges Gift "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(4,"ion-content",2),t.TgZ(5,"div",3),t.TgZ(6,"form",4),t.TgZ(7,"div",5),t.TgZ(8,"ion-grid"),t.TgZ(9,"ion-row",6),t.TgZ(10,"ion-col",7),t.TgZ(11,"ion-label"),t._uU(12,"Fecha de Intercambio:"),t.qZA(),t.qZA(),t.TgZ(13,"ion-col",8),t._UZ(14,"ion-input",9),t.qZA(),t.qZA(),t.TgZ(15,"ion-row",6),t.TgZ(16,"ion-col",7),t.TgZ(17,"ion-label"),t._uU(18,"Observaciones:"),t.qZA(),t.qZA(),t.TgZ(19,"ion-col",8),t._UZ(20,"ion-textarea",10),t.qZA(),t.qZA(),t.TgZ(21,"ion-row",6),t.TgZ(22,"ion-col",11),t._uU(23," Entregado: "),t.qZA(),t.TgZ(24,"ion-col",12),t.TgZ(25,"ion-item",13),t._uU(26," No"),t._UZ(27,"ion-toggle"),t._uU(28,"Si "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"ion-row",6),t.TgZ(30,"ion-col",14),t.TgZ(31,"ion-label"),t._uU(32,"Agencia:"),t.qZA(),t.qZA(),t.TgZ(33,"ion-col",14),t.YNc(34,b,2,0,"ion-button",15),t.YNc(35,Z,2,1,"ion-button",15),t.qZA(),t.qZA(),t.TgZ(36,"ion-row",6),t.TgZ(37,"ion-col",14),t.TgZ(38,"ion-label"),t._uU(39,"Regalo:"),t.qZA(),t.qZA(),t.TgZ(40,"ion-col",14),t.YNc(41,T,2,0,"ion-button",15),t.YNc(42,_,2,1,"ion-button",15),t.qZA(),t.qZA(),t.TgZ(43,"ion-row",6),t.TgZ(44,"ion-col",16),t.TgZ(45,"ion-button",17),t.NdJ("click",function(){return n.CreateExgift()}),t._uU(46," Crear Regalo Intercambio "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(2),t.Q6J("formGroup",n.formExchange),t.xp6(28),t.Q6J("ngIf",null==n.myagency),t.xp6(1),t.Q6J("ngIf",null!=n.myagency),t.xp6(6),t.Q6J("ngIf",null==n.mygift),t.xp6(1),t.Q6J("ngIf",null!=n.mygift))},directives:[i.Gu,i.sr,i.wd,i.W2,a._Y,a.JL,a.sg,i.jY,i.Nd,i.wI,i.Q$,i.pK,i.j9,a.JJ,a.u,i.g2,i.Ie,i.ho,i.w,u.O5,i.YG],styles:['.body[_ngcontent-%COMP%]{background:#717499;background-size:cover;min-height:100%}.formulario[_ngcontent-%COMP%]{margin-top:1.5%;padding:2%;border-top:2px double gray;border:1px solid;border-color:"primary";border-radius:2.5rem;background-color:#fff;margin-bottom:4%}.button[_ngcontent-%COMP%]{--background: #22388c}.customInput[_ngcontent-%COMP%]{border:1px solid gray;border-color:"primary"}']}),o})()}];let A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.Bz.forChild(x)],d.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[p.Y,h.R],imports:[[u.ez,a.u5,i.Pc,A,a.u5,a.UX]]}),o})()}}]);