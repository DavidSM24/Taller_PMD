"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[518],{518:(I,Z,d)=>{d.r(Z),d.d(Z,{UserListPageModule:()=>w});var m=d(6019),_=d(9010),o=d(2651),p=d(8725),u=d(4762),U=d(9101),i=d(865),T=d(7524),v=d(9311);function y(n,l){1&n&&i._UZ(0,"ion-icon",40)}function A(n,l){if(1&n&&(i.TgZ(0,"div",38),i.YNc(1,y,1,0,"ion-icon",39),i.qZA()),2&n){const e=i.oxw().$implicit;i.xp6(1),i.Q6J("ngIf",e.administrator)}}function b(n,l){1&n&&(i.TgZ(0,"div",41),i._UZ(1,"ion-icon",42),i.qZA())}function x(n,l){1&n&&i._UZ(0,"ion-icon",45)}function L(n,l){if(1&n&&(i.TgZ(0,"div",43),i.YNc(1,x,1,0,"ion-icon",44),i.qZA()),2&n){const e=i.oxw().$implicit;i.xp6(1),i.Q6J("ngIf",!e.administrator)}}function C(n,l){if(1&n){const e=i.EpF();i.TgZ(0,"ion-row",28),i.TgZ(1,"ion-col",29),i.TgZ(2,"ion-text",30),i.NdJ("click",function(){const a=i.CHM(e).$implicit;return i.oxw().edit(a)}),i._UZ(3,"ion-icon",31),i.qZA(),i.qZA(),i.TgZ(4,"ion-col",32),i.TgZ(5,"ion-text"),i._uU(6),i.qZA(),i.qZA(),i.TgZ(7,"ion-col",32),i.TgZ(8,"ion-text"),i._uU(9),i.qZA(),i.qZA(),i.TgZ(10,"ion-col",32),i.TgZ(11,"ion-text"),i._uU(12),i.qZA(),i.qZA(),i.TgZ(13,"ion-col",32),i.YNc(14,A,2,1,"div",33),i.YNc(15,b,2,0,"div",34),i.YNc(16,L,2,1,"div",35),i.qZA(),i.TgZ(17,"ion-col",29),i.TgZ(18,"ion-text",36),i.NdJ("click",function(){const a=i.CHM(e).$implicit;return i.oxw().mensagealerta(a)}),i._UZ(19,"ion-icon",37),i.qZA(),i.qZA(),i.qZA()}if(2&n){const e=l.$implicit,t=l.index,s=i.oxw();i.Q6J("ngClass",t%2==0?"normal":"colored"),i.xp6(6),i.hij(" ",e.code," "),i.xp6(3),i.hij(" ",e.email," "),i.xp6(3),i.hij(" ",e.name," "),i.xp6(2),i.Q6J("ngIf",e.id!=s.bdUser.id),i.xp6(1),i.Q6J("ngIf",null!=e&&null!=s.bdUser&&e.id==s.bdUser.id),i.xp6(1),i.Q6J("ngIf",e.id!=s.authS.user.id)}}const q=[{path:"",component:(()=>{class n{constructor(e,t,s,a,c,g,r){this.usser=e,this.loading=t,this.toast=s,this.pt=a,this.modalCtrl=c,this.alerta=g,this.authS=r,this.users=[],this.oldUsers=[]}ionViewDidEnter(){return(0,u.mG)(this,void 0,void 0,function*(){this.niTems=Math.ceil(this.pt.height()/20+10),yield this.cargaUsers(),this.users.forEach(e=>{e.id==this.authS.user.id&&(this.bdUser=e)})})}cargaUsers(e){return(0,u.mG)(this,void 0,void 0,function*(){this.infinite&&(this.infinite.disabled=!1,this.oldInfinite=!1),e||(yield this.presentLoading()),this.users=[],this.oldUsers=[];try{this.users=yield this.usser.getAllPaged(this.niTems,0),this.oldUsers=this.oldUsers.concat(this.users)}catch(t){console.error(t),yield this.presentToast("Error cargando datos","danger","ban")}finally{e?e.target.complete():yield this.miLoading.dismiss()}})}presentLoading(){return(0,u.mG)(this,void 0,void 0,function*(){this.miLoading=yield this.loading.create({message:""}),yield this.miLoading.present()})}borra(e){return(0,u.mG)(this,void 0,void 0,function*(){if(yield this.presentLoading(),yield this.usser.delete(e)){let s=this.users.indexOf(e,0);s>-1&&this.users.splice(s,1),this.oldUsers.forEach(a=>{if(a.id==e.id){let c=this.oldUsers.indexOf(a);this.oldUsers.splice(c,1)}}),this.presentToast("Usuario eliminado correctamente.","success","checkmark-circle-outline"),e.administrator&&e.id==this.authS.user.id&&this.logout()}else this.presentToast("No se ha podido eliminar el usuario. Compruebe que no est\xe1 asociado a ninguna agencia con datos.","danger","ban");yield this.miLoading.dismiss()})}presentToast(e,t,s){return(0,u.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:e,duration:2e3,color:t,icon:s})).present()})}edit(e){return(0,u.mG)(this,void 0,void 0,function*(){try{const t=yield this.modalCtrl.create({component:U.F,cssClass:"fullscreen",componentProps:{user:e}});yield t.present();const s=yield t.onDidDismiss();if(null!=s.data){let a=this.users.indexOf(e);this.users[a]=s.data.newUser,this.oldUsers.forEach(c=>{if(c.id==s.data.newUser.id){let g=this.oldUsers.indexOf(c);this.oldUsers[g]=this.users[a]}}),this.presentToast("Usuario modificado correctamente.","success","checkmark-circle-outline")}}catch(t){}})}mensagealerta(e){return(0,u.mG)(this,void 0,void 0,function*(){yield(yield this.alerta.create({header:"Eliminar",message:"\xbfDesea eliminar Este Regalo Intercambiado?",buttons:[{text:"Eliminar",cssClass:"rojo",handler:()=>{this.borra(e)}},{text:"Cancelar",cssClass:"secondary",handler:s=>{}}]})).present()})}reset(e){return(0,u.mG)(this,void 0,void 0,function*(){this.infinite.disabled=!1,this.oldInfinite=!1,this.users=[],this.cargaUsers(e)})}infiniteLoad(e){return(0,u.mG)(this,void 0,void 0,function*(){let t=[];this.infinite.disabled||(t=yield this.usser.getAllPaged(this.niTems,this.users.length),this.users=this.users.concat(t),this.oldUsers.concat(t),t.length<30&&(this.infinite.disabled=!0,this.oldInfinite=!0)),this.infinite.complete()})}logout(){this.authS.logout()}searchAction(){return(0,u.mG)(this,void 0,void 0,function*(){this.searchStr=this.sb.value;let e=new RegExp("^[ ]");try{if(this.searchStr.match(e))this.presentToast("La b\xfasqueda no puede comenzar por espacios en blanco.","danger","ban");else{let t=[],s=[],a=this.select.value,c=[];this.users=[];let g=this.searchStr.length;g>0?(yield this.presentLoading(),c=yield this.usser.getByName(this.searchStr),c.forEach(r=>{let h=!0;t.forEach(f=>{f.id==r.id&&(h=!1)}),h&&t.push(r)}),+this.searchStr>=0&&(c=yield this.usser.getFilterCode(this.searchStr),c.forEach(r=>{let h=!0;t.forEach(f=>{f.id==r.id&&(h=!1)}),h&&t.push(r)})),c=yield this.usser.getByMail(this.searchStr),c.forEach(r=>{let h=!0;t.forEach(f=>{f.id==r.id&&(h=!1)}),h&&t.push(r)}),"true"==a?(t.forEach(r=>{r.administrator&&s.push(r)}),this.users=s):"false"==a?(t.forEach(r=>{r.administrator||s.push(r)}),this.users=s):this.users=t,this.infinite.disabled=!1,yield this.miLoading.dismiss()):g<1&&(yield this.presentLoading(),"true"==a?(t=yield this.usser.getByAdministrator(!0,9999,0),t.forEach(r=>{r.administrator&&s.push(r)}),this.users=s,this.infinite.disabled=!0):"false"==a?(t=yield this.usser.getByAdministrator(!1,9999,0),t.forEach(r=>{r.administrator||s.push(r)}),this.users=s,this.infinite.disabled=!0):(this.users=this.oldUsers,this.infinite.disabled=this.oldInfinite),yield this.miLoading.dismiss()),yield this.miLoading.dismiss()}}catch(t){}})}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(T.K),i.Y36(o.HT),i.Y36(o.yF),i.Y36(o.t4),i.Y36(o.IN),i.Y36(o.Br),i.Y36(v.e))},n.\u0275cmp=i.Xpm({type:n,selectors:[["app-user-list"]],viewQuery:function(e,t){if(1&e&&(i.Gf(o.ju,5),i.Gf(o.t9,5),i.Gf(o.VI,5)),2&e){let s;i.iGM(s=i.CRH())&&(t.infinite=s.first),i.iGM(s=i.CRH())&&(t.select=s.first),i.iGM(s=i.CRH())&&(t.sb=s.first)}},decls:51,vars:3,consts:[[3,"translucent"],["color","primary"],["sizeSm","9","sizeMd","9","sizeLg","9"],["sizeSm","3","sizeMd","3","sizeLg","3","slot","end",1,"icon-div-container",2,"margin-right","1%"],["title","Nuevo","routerLink","/tab-administrator/user/create"],["slot","end",1,"icon-logout",2,"pointer-events","none","zoom","1.5","cursor","pointer","content","url(../../../../assets/icon/add-circle-outline.png)"],["title","Lista de Agencias","routerLink","/tab-administrator/agency/list"],["slot","end",1,"icon-logout",2,"pointer-events","none","zoom","1.3","cursor","pointer","content","url( ../../../../assets/icon/agency_list.png)"],["title","Cerrar Sesi\xf3n",3,"click"],["slot","end","name","log-out-outline",1,"icon-logout",2,"pointer-events","none","zoom","1.7","cursor","pointer"],[1,"ion-align-items-center"],["sizeSm","9.5","sizeLg","9.5"],["placeholder","Encuentra el usuario que est\xe1s buscando...","inputmode","text","type","text","debounce","1000","showCancelButton","always",3,"ionChange"],["sizeSm","2.5","sizeLg","2.5",1,"selector"],["interface","popover","multiple","false",3,"ionChange"],["value","true"],["value","false"],["value","all"],[1,"header-row"],["size","1",2,"border","0px !important"],["size","2.5",2,"border","0px !important"],[2,"background-color","white",3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"body"],[1,"ion-text-center"],["style","border-left: 1px solid #4b4b4d;border-right: 1px solid #4b4b4d;","let","",3,"ngClass",4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText",""],["let","",2,"border-left","1px solid #4b4b4d","border-right","1px solid #4b4b4d",3,"ngClass"],["size","1"],["title","Editar",1,"icon-div-container",3,"click"],["name","pencil",2,"color","#22388c","pointer-events","none"],["size","2.5"],["title","Administrador",4,"ngIf"],["title","Sesi\xf3n Iniciada",4,"ngIf"],["title","Usuario",4,"ngIf"],["title","Eliminar",1,"icon-div-container",3,"click"],["name","trash","color","danger",2,"pointer-events","none"],["title","Administrador"],["style","pointer-events: none;","name","key","color","secondary",4,"ngIf"],["name","key","color","secondary",2,"pointer-events","none"],["title","Sesi\xf3n Iniciada"],["name","key",2,"pointer-events","none","color","green !important"],["title","Usuario"],["style","pointer-events: none;","name","person","color","secondary",4,"ngIf"],["name","person","color","secondary",2,"pointer-events","none"]],template:function(e,t){1&e&&(i.TgZ(0,"ion-header",0),i.TgZ(1,"ion-toolbar",1),i.TgZ(2,"ion-title",2),i._uU(3,"Lista de Usuarios"),i.qZA(),i.TgZ(4,"ion-buttons",3),i.TgZ(5,"div",4),i._UZ(6,"ion-icon",5),i.qZA(),i.TgZ(7,"div",6),i._UZ(8,"ion-icon",7),i.qZA(),i.TgZ(9,"div",8),i.NdJ("click",function(){return t.logout()}),i._UZ(10,"ion-icon",9),i.qZA(),i.qZA(),i.qZA(),i.TgZ(11,"ion-toolbar",1),i.TgZ(12,"ion-row",10),i.TgZ(13,"ion-col",11),i.TgZ(14,"ion-searchbar",12),i.NdJ("ionChange",function(){return t.searchAction()}),i.qZA(),i.qZA(),i.TgZ(15,"ion-col",13),i.TgZ(16,"ion-item"),i.TgZ(17,"ion-label"),i._uU(18,"Tipo De Usuario"),i.qZA(),i.TgZ(19,"ion-select",14),i.NdJ("ionChange",function(){return t.searchAction()}),i.TgZ(20,"ion-select-option",15),i._uU(21,"Administrador"),i.qZA(),i.TgZ(22,"ion-select-option",16),i._uU(23,"Cliente"),i.qZA(),i.TgZ(24,"ion-select-option",17),i._uU(25,"Todos"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(26,"ion-row",18),i.TgZ(27,"ion-col",19),i._UZ(28,"ion-text"),i.qZA(),i.TgZ(29,"ion-col",20),i.TgZ(30,"ion-text"),i._uU(31,"Codigo"),i.qZA(),i.qZA(),i.TgZ(32,"ion-col",20),i.TgZ(33,"ion-text"),i._uU(34,"Email"),i.qZA(),i.qZA(),i.TgZ(35,"ion-col",20),i.TgZ(36,"ion-text"),i._uU(37,"Nombre"),i.qZA(),i.qZA(),i.TgZ(38,"ion-col",20),i.TgZ(39,"ion-text"),i._uU(40,"Administrador"),i.qZA(),i.qZA(),i.TgZ(41,"ion-col",19),i._UZ(42,"ion-text"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(43,"ion-content",21),i.TgZ(44,"ion-refresher",22),i.NdJ("ionRefresh",function(a){return t.reset(a)}),i._UZ(45,"ion-refresher-content"),i.qZA(),i.TgZ(46,"div",23),i.TgZ(47,"ion-grid",24),i.YNc(48,C,20,7,"ion-row",25),i.qZA(),i.TgZ(49,"ion-infinite-scroll",26),i.NdJ("ionInfinite",function(a){return t.infiniteLoad(a)}),i._UZ(50,"ion-infinite-scroll-content",27),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.Q6J("translucent",!1),i.xp6(43),i.Q6J("fullscreen",!0),i.xp6(5),i.Q6J("ngForOf",t.users))},directives:[o.Gu,o.sr,o.wd,o.Sm,o.YI,p.rH,o.gu,o.Nd,o.wI,o.VI,o.j9,o.Ie,o.Q$,o.t9,o.QI,o.n0,o.yW,o.W2,o.nJ,o.Wo,o.jY,m.sg,o.ju,o.MB,m.mk,m.O5],styles:['ion-col[_ngcontent-%COMP%]{border-bottom:1px solid #4b4b4d}ion-col[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{color:#4b4b4d!important}.header-row[_ngcontent-%COMP%]{border-radius:0%;border:0px}.header-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{text-align:center}.header-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{color:#fff!important;font-size:1.2rem;text-align:center}.row[_ngcontent-%COMP%]{color:#fff;font-size:1.1rem}.body[_ngcontent-%COMP%]{background-color:#fff;font-family:"Roboto",sans-serif;color:#4b4b4d}']}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[p.Bz.forChild(q)],p.Bz]}),n})();var M=d(8816);let w=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[m.ez,_.u5,o.Pc,P,_.UX,M.h]]}),n})()}}]);